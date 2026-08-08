/*!
 * CASE ENGINE — shared CRM parser + normalized-field mapping + PDF generation
 * Used by BOTH:
 *   - https://alphafiles.net/vitals/              (Alpha Timeshare Consultants UI)
 *   - https://sebastianlinks.com/case-assessment/  (Client Protection Group UI)
 *
 * This file is the single source of truth for:
 *   - parsing pasted CRM text into field values
 *   - the Resort 1-4 / Owner / General / Payment field-ID conventions
 *   - the Cancellation Agreement PDF's AcroForm field map
 *   - filling and generating the completed PDF
 *
 * Both pages use the SAME element IDs (v-first, v-last, v-r2-name, etc.)
 * so this one file drives both UIs without any page-specific branching,
 * other than an optional PDF template URL override (window.CASE_PDF_URL).
 *
 * Card Number / Expiration / CCV / Routing Number / Account Number are
 * NEVER parsed or written by this engine — intentionally, for security.
 */
(function(global){
  'use strict';

  function setf(id,val){
    if(!val) return;
    var el=document.getElementById(id);
    if(!el) return;
    el.value=val;
    el.dispatchEvent(new Event('input'));
  }
  function setSel(id,val){
    if(!val) return;
    var el=document.getElementById(id);
    if(!el) return;
    var v=String(val).toLowerCase().trim();
    for(var i=0;i<el.options.length;i++){
      if(el.options[i].value===v){el.value=v;el.dispatchEvent(new Event('change'));return;}
    }
  }
  function yn(raw){
    var s=(raw||'').toLowerCase().trim();
    if(!s) return '';
    if(/^(y|yes|paid off|paid|true|current)$/.test(s)) return 'yes';
    if(/^(n|no|not paid|owes|false|behind|past due)$/.test(s)) return 'no';
    return '';
  }

  // Splits one line of a tab-delimited export into fields, honoring
  // double-quoted segments (which may themselves contain literal tabs,
  // commas, or newlines) the way Excel/Zoho/Sheets exports do.
  function parseTsvLine(line){
    var out=[], cur='', inQuotes=false;
    for(var i=0;i<line.length;i++){
      var c=line[i];
      if(inQuotes){
        if(c==='"'){
          if(line[i+1]==='"'){ cur+='"'; i++; } else { inQuotes=false; }
        } else { cur+=c; }
      } else {
        if(c==='"'){ inQuotes=true; }
        else if(c==='\t'){ out.push(cur); cur=''; }
        else { cur+=c; }
      }
    }
    out.push(cur);
    return out.map(function(s){return s.trim();});
  }

  // Detects a structured tabular export (Zoho-style: one header row, one
  // or more data rows, tab-delimited) as opposed to the vertical
  // "FieldName" / value-on-next-line format. Returns {headers, rows} or
  // null. Detection is shape-based (many tab-separated columns on line 1,
  // a similar count on line 2) rather than tied to specific header names,
  // so it isn't broken by column reordering or an unfamiliar column set.
  function detectTabularExport(rawText){
    var lines=rawText.replace(/\r\n/g,'\n').split('\n').filter(function(l){return l.trim()!=='';});
    if(lines.length<2) return null;
    var headers=parseTsvLine(lines[0]);
    if(headers.length<5) return null; // too few columns to be a real table export
    var rows=[];
    for(var i=1;i<lines.length;i++){
      var cells=parseTsvLine(lines[i]);
      // A real data row should roughly match the header column count —
      // vertical-format pastes won't produce this (each line there is
      // just "Label\tValue", i.e. 2 columns).
      if(cells.length>=Math.max(3,Math.floor(headers.length*0.5))) rows.push(cells);
    }
    if(!rows.length) return null;
    return {headers:headers, rows:rows};
  }

  // Builds a field(names) lookup against one row of a detected tabular
  // export, matching header names case-insensitively/whitespace-loosely
  // (never by column position), plus a debug tracker.
  function makeTableFieldGetter(headers, row, debug){
    var norm=function(s){return (s||'').toLowerCase().replace(/[\s_]+/g,' ').trim();};
    var headerIndex={};
    headers.forEach(function(h,i){ headerIndex[norm(h)]=i; });
    return function(names){
      for(var ni=0;ni<names.length;ni++){
        var idx=headerIndex[norm(names[ni])];
        if(idx!==undefined && row[idx]!==undefined){
          debug.matchedHeaders[headers[idx]]=true;
          var v=(row[idx]||'').trim();
          if(v && v!=='-' && v!=='N/A' && v!=='NA'){ return v; }
          return '';
        }
      }
      return '';
    };
  }

  // Builds a field(names) lookup function scoped to one pasted CRM text blob.
  function makeFieldGetter(rawText){
    var t=rawText.replace(/\[([^\]]*)\]\([^)]*\)/g,'$1').replace(/^\s*[*\-]\s*/gm,'');
    return function(names){
      for(var ni=0;ni<names.length;ni++){
        var nm=names[ni].replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
        var m=t.match(new RegExp(nm+'[^\\t\\n]*\\t\\n?([^\\t\\n][^\\n]{0,150})','i'));
        if(!m) m=t.match(new RegExp(nm+'[^\\n]*\\n([^\\n]{1,150})','i'));
        if(m&&m[1]){
          var v=m[1].trim().replace(/^\$\s*/,'').replace(/,/g,'').replace(/\[([^\]]*)\]\([^)]*\)/g,'$1');
          if(v&&v!=='-'&&v!=='N/A'&&v!=='NA') return v;
        }
      }
      return '';
    };
  }

  // Parses pasted CRM text and populates every shared field ID that exists
  // on the current page. Page-specific extras (e.g. Vitals' sales fields,
  // language toggle, mortgage-button UI) are left to the caller — this
  // covers Owner Info, Resorts 1-4 agreement fields, General, and the
  // non-sensitive Payment Information fields only.
  //
  // Supports two input shapes, auto-detected, both driving the exact same
  // field-setting code below (so both produce the same normalized data):
  //   MODE A — a structured tabular export (Zoho-style: one header row +
  //            one data row, tab-delimited, matched by column NAME not
  //            position, so column reordering doesn't break it)
  //   MODE B — the original vertical "FieldName" / value-on-next-line
  //            paste format
  function runPopulateFromCRM(rawText){
    var debug={mode:'', headersDetected:0, rowsDetected:0, matchedHeaders:{}, mapped:{}, unmapped:[], errors:[]};
    var field;
    try{
      var table=detectTabularExport(rawText);
      if(table){
        debug.mode='zoho-table';
        debug.headersDetected=table.headers.length;
        debug.rowsDetected=table.rows.length;
        field=makeTableFieldGetter(table.headers, table.rows[0], debug);
      } else {
        debug.mode='vertical';
        field=makeFieldGetter(rawText);
      }
    }catch(e){
      debug.errors.push('Detection/parse setup failed: '+((e&&e.message)||e));
      field=makeFieldGetter(rawText); // fail safe to the original parser
      debug.mode='vertical (fallback after error)';
    }

    // Wraps field(names) so every lookup this function makes is recorded
    // for the debug report, regardless of which mode is active.
    function F(label, names){
      var v='';
      try{ v=field(names); }
      catch(e){ debug.errors.push(label+': '+((e&&e.message)||e)); }
      if(v) debug.mapped[label]=v;
      return v;
    }

    setf('v-first', F('First Name', ['First Name']));
    setf('v-last',  F('Last Name', ['Last Name']));
    setf('v-email', F('Email', ['Email']).replace(/mailto:/gi,'').replace(/[<>]/g,''));
    setf('v-phone', F('Phone', ['Phone','Primary Phone','Plain Phone']).replace(/\D/g,'').replace(/^1/,''));
    setf('v-co',  F('Co-owner First Name', ['Co-Owner First','Co Owner First Name','Co-owner First Name']));
    setf('v-col', F('Co-owner Last Name', ['Co-Owner Last','Co Owner Last Name','Co-owner Last Name']));
    setf('v-phone2', F('Secondary Phone', ['Secondary Phone','2nd Phone']).replace(/\D/g,'').replace(/^1/,''));
    setf('v-email2', F('Email 2', ['Email 2','2nd Email','Secondary Email']).replace(/mailto:/gi,'').replace(/[<>]/g,''));
    setf('v-mail-addr', F('Street', ['Street','Mailing Address','Address']));
    setf('v-owner-city', F('City', ['City','Owner City','Client City']));
    setf('v-owner-state', F('State', ['State','Owner State','Client State']));
    setf('v-owner-zip', F('Zip Code', ['Zip Code','ZIP','Zip']));

    // Resort 1 — core fields (id convention shared with Vitals' existing
    // Resort/Mortgage cards; case-assessment's simpler layout uses the
    // same ids directly).
    setf('v-resort', F('R1 Resort Name', ['R1-Resort Name','Resort 1','Resort Name']));
    setf('v-rescity',F('R1 City', ['R1-Resort City','Resort City']));
    setf('v-loc',    F('R1 State', ['R1-Resort State','Resort State','Location']));
    var bal1=F('R1 Balance Amount', ['R1-Balance Amount','Balance Amount','Balance']).replace(/[^0-9.]/g,'');
    if(bal1) setf('v-balance', bal1);
    var pay1=F('R1 Monthly Mortgage Payment', ['R1-Monthly Mortgage payment','Monthly Mortgage','Payment Amount']).replace(/[^0-9.]/g,'');
    if(pay1) setf('v-mtg', pay1);
    var mtf1=F('R1 Maintenance Fee', ['R1-Mait / Tax fees','R1-Mait','Mait / Tax fees','R1-Maintenance','Maintenance Fee','R1-Maintenance Fee']).replace(/[^0-9.]/g,'');
    if(mtf1) setf('v-mtf', mtf1);
    var r1price=F('R1 Purchase Price', ['R1-Purchase Price','Purchase Price']).replace(/[^0-9.]/g,'');
    if(r1price) setf('v-pprice', r1price);
    var r1dateP=F('R1 Date Purchased', ['R1-Date Purchased','Date Purchased']);
    var r1ym=r1dateP.match(/(20\d{2}|19\d{2})/);
    if(r1ym) setf('v-year', r1ym[1]);
    setSel('v-r1-paidoff', yn(F('R1 Mortgage Status', ['R1-Mortgage status','R1-Mortgage Status','Mortgage status','Paid Off'])));
    setSel('v-r1-current', yn(F('R1 Current', ['R1-Current','Current'])));
    var r1own=F('R1 Ownership Type', ['R1-Ownership Type','Ownership Type','R1-Points or Weeks','Points or Weeks']).toLowerCase();
    if(r1own.indexOf('point')>-1) setSel('v-r1-owntype','points'); else if(r1own) setSel('v-r1-owntype','week');
    setSel('v-r1-usage', F('R1 Usage', ['R1-Usage Rights','R1-Usage','Usage Rights','Usage']));
    setSel('v-r1-mtffreq2', F('R1 Maintenance Fee Frequency', ['R1-Maintenance Fee Frequency','MTF Frequency']));
    setSel('v-r1-mtfcurrent', yn(F('R1 Current on Maintenance', ['R1-Maintenance Fee Current','MTF Current','R1-Current on Maintenance','Current on Maintenance'])));
    var why=F('R1 Reason', ['R1-Why do they want out','Why do they want out','Reason for Wanting Out','R1-Reason','Reason']);
    if(why) setf('v-why', why);

    // Resorts 2-4 — identical field pattern, R2-/R3-/R4- prefixes
    [2,3,4].forEach(function(n){
      var p='R'+n+'-';
      setf('v-r'+n+'-name', F('R'+n+' Resort Name', [p+'Resort Name']));
      var city=F('R'+n+' City', [p+'Resort City']), state=F('R'+n+' State', [p+'Resort State']);
      if(city||state) setf('v-r'+n+'-loc', [city,state].filter(Boolean).join(', '));
      setSel('v-r'+n+'-paidoff', yn(F('R'+n+' Mortgage Status', [p+'Mortgage status',p+'Mortgage Status',p+'Paid Off'])));
      var bal=F('R'+n+' Balance Amount', [p+'Balance Amount']).replace(/[^0-9.]/g,'');
      if(bal) setf('v-r'+n+'-balance', bal);
      var pay=F('R'+n+' Monthly Mortgage Payment', [p+'Monthly Mortgage payment']).replace(/[^0-9.]/g,'');
      if(pay) setf('v-r'+n+'-payment', pay);
      var mtf=F('R'+n+' Maintenance Fee', [p+'Mait / Tax fees',p+'Maintenance',p+'Maintenance Fee']).replace(/[^0-9.]/g,'');
      if(mtf) setf('v-r'+n+'-mtf', mtf);
      var own=F('R'+n+' Ownership Type', [p+'Ownership Type',p+'Points or Weeks']).toLowerCase();
      if(own.indexOf('point')>-1) setSel('v-r'+n+'-owntype','points'); else if(own) setSel('v-r'+n+'-owntype','week');
      setSel('v-r'+n+'-usage', F('R'+n+' Usage', [p+'Usage Rights',p+'Usage']));
      setSel('v-r'+n+'-mtffreq', F('R'+n+' Maintenance Fee Frequency', [p+'Maintenance Fee Frequency']));
      setSel('v-r'+n+'-mtfcurrent', yn(F('R'+n+' Current on Maintenance', [p+'Maintenance Fee Current',p+'Current on Maintenance'])));
      var notes=F('R'+n+' Notes', [p+'Notes']);
      if(notes) setf('v-r'+n+'-notes', notes);
    });

    setSel('v-own-other', yn(F('Own Any Other Timeshares', ['Own Any Other Timeshares','Other Timeshares'])));
    setf('v-final-notes', F('Final Notes', ['Final Notes']));

    var downPmt=F('Down Payment Amount', ['Down Payment Amount']).replace(/[^0-9.]/g,'');
    if(downPmt) setf('v-pay-down', downPmt);
    var financed=F('Amount Being Financed', ['Amount Being Financed']).replace(/[^0-9.]/g,'');
    if(financed) setf('v-pay-financed', financed);
    var terms=F('Payment Terms', ['Payment Terms']);
    if(terms) setf('v-pay-terms', terms);

    // Unmapped headers — only meaningful in table mode. A header counts as
    // "mapped" if any F() call successfully matched it (tracked inside
    // makeTableFieldGetter), regardless of whether this page has a UI
    // field to display that value in.
    if(debug.mode==='zoho-table'){
      debug.unmapped=table.headers.filter(function(h){ return !debug.matchedHeaders[h]; });
    }

    global.CaseEngine.lastImportDebug=debug;
    return debug;
  }

  // ── PDF field map — reverse-engineered from the real AcroForm field
  // names/positions in the Cancellation Agreement PDF. See build notes.
  function pdfG(id){
    var el=document.getElementById(id);
    if(!el) return '';
    if(el.type==='checkbox') return el.checked;
    return (el.value||'').trim();
  }

  function resortAgreementVals(n){
    if(n===1){
      // Resort 1 Paid Off/Current: prefer explicit v-r1-paidoff/v-r1-current
      // selects if the page has them (case-assessment); otherwise fall back
      // to Vitals' mortgage-toggle-button state (_mtgType) and behind-months.
      var paidOff = pdfG('v-r1-paidoff');
      if(!paidOff && typeof global._mtgType!=='undefined'){
        paidOff = global._mtgType==='pf' ? 'yes' : (global._mtgType ? 'no' : '');
      }
      var current = pdfG('v-r1-current');
      if(!current && document.getElementById('v-mtgb')){
        // Only applies on Vitals, which has the months-behind field; a page
        // without it (case-assessment) must never guess this — leave blank.
        var behind=parseFloat(pdfG('v-mtgb'))||0;
        var hasMtg=pdfG('v-mtg')!=='';
        current = hasMtg ? (behind>0?'no':'yes') : '';
      }
      return {
        name:pdfG('v-resort'),
        loc:[pdfG('v-rescity'),pdfG('v-loc')].filter(Boolean).join(', '),
        paidOff:paidOff, balance:pdfG('v-balance'), current:current, payment:pdfG('v-mtg'),
        owntype:pdfG('v-r1-owntype'), usage:pdfG('v-r1-usage'),
        mtf:pdfG('v-mtf'), mtffreq:pdfG('v-r1-mtffreq2'), mtfcurrent:pdfG('v-r1-mtfcurrent'),
        notes:pdfG('v-r1-notes')
      };
    }
    var p='v-r'+n+'-';
    return {
      name:pdfG(p+'name'), loc:pdfG(p+'loc'), paidOff:pdfG(p+'paidoff'), balance:pdfG(p+'balance'),
      current:pdfG(p+'current'), payment:pdfG(p+'payment'), owntype:pdfG(p+'owntype'), usage:pdfG(p+'usage'),
      mtf:pdfG(p+'mtf'), mtffreq:pdfG(p+'mtffreq'), mtfcurrent:pdfG(p+'mtfcurrent'), notes:pdfG(p+'notes')
    };
  }

  var RESORT_TEXT_FIELDS = {
    1:{name:'Resort 1',loc:'Location',balance:'Balance',payment:'Payment Amount',mtf:'Maintenance Fee',notes:'Notes'},
    2:{name:'Resort 2',loc:'Location2',balance:'Balance2',payment:'Payment Amount2',mtf:'Maintenance Fee2',notes:'Notes2'},
    3:{name:'Resort 3',loc:'Location_3',balance:'Balance_3',payment:'Payment Amount_3',mtf:'Maintenance Fee_3',notes:'Notes_3'},
    4:{name:'Resort 4',loc:'Location_4',balance:'Balance_4',payment:'Payment Amount_4',mtf:'Maintenance Fee_4',notes:'Notes_4'}
  };
  // [paidOffYes,paidOffNo,currentYes,currentNo,week,points,annual,even,odd,triennial,mtfAnnually,mtfBiennially,mtfTriennially,mtfCurrentYes,mtfCurrentNo]
  var RESORT_CHECKS = {
    1:['Check Box29','Check Box30','Check Box31','Check Box32','Check Box33','Check Box34','Check Box35','Check Box36','Check Box37','Check Box38','Check Box39','Check Box40','Check Box41','Check Box42','Check Box43'],
    2:['Check Box44','Check Box45','Check Box46','Check Box47','Check Box48','Check Box49','Check Box50','Check Box51','Check Box52','Check Box53','Check Box54','Check Box55','Check Box56','Check Box57','Check Box58'],
    3:['Check Box59','Check Box60','Check Box61','Check Box62','Check Box63','Check Box64','Check Box65','Check Box66','Check Box67','Check Box68','Check Box69','Check Box70','Check Box71','Check Box72','Check Box73'],
    4:['Check Box74','Check Box75','Check Box76','Check Box77','Check Box78','Check Box79','Check Box80','Check Box81','Check Box82','Check Box83','Check Box84','Check Box85','Check Box86','Check Box87','Check Box88']
  };

  // opts: { pdfUrl, filenamePrefix, statusElId }
  async function generateCancellationPDF(opts){
    opts = opts || {};
    var pdfUrl = opts.pdfUrl || global.CASE_PDF_URL || '/vitals/assets/cancellation-agreement.pdf';
    var statusEl = document.getElementById(opts.statusElId || 'pdf-gen-status');
    function status(msg){ if(statusEl){statusEl.style.display='block';statusEl.innerHTML=msg;} }

    try{
      return await _doGenerate(pdfUrl, opts, status);
    }catch(e){
      // Top-level safety net: ANY unexpected error (not just the ones
      // already caught around specific steps below) still surfaces to the
      // user via the status box rather than becoming a silent, invisible
      // promise rejection.
      status('⚠ Unexpected error generating the PDF: '+((e&&e.message)||e));
      return {filled:0, blank:0, blankList:[], errors:[{field:'(unexpected)', message:(e&&e.message)||String(e)}]};
    }
  }

  async function _doGenerate(pdfUrl, opts, status){
    if(typeof PDFLib==='undefined'){ status('⚠ PDF library failed to load — check your connection and try again.'); return; }
    status('Loading agreement template…');

    var bytes;
    try{
      var resp=await fetch(pdfUrl);
      bytes=await resp.arrayBuffer();
    }catch(e){ status('⚠ Could not load the agreement PDF template.'); return; }

    var pdfDoc, form;
    try{
      pdfDoc=await PDFLib.PDFDocument.load(bytes);
      form=pdfDoc.getForm();
    }catch(e){ status('⚠ Could not parse the agreement PDF.'); return; }

    var filled=0, blank=0, blankList=[], errors=[];
    // A small number of text fields in the source PDF have an oversized
    // invisible bounding box (e.g. extending far above the visible ruled
    // line), which makes pdf-lib anchor the filled text near the top of
    // that box instead of on the line. Tightening the box to the line it
    // visually sits on is a positioning-only fix — it changes nothing a
    // reader sees in the blank/unfilled document, only where programmatic
    // text lands once filled. Found by comparing filled output against a
    // scan of all field-box heights; 'Timeshare Cancellation Fee' (28.8pt
    // box vs. this document's normal ~13-15pt single-line box) was the
    // one genuine outlier among fields this engine actually fills.
    var RECT_OVERRIDES = {
      'Timeshare Cancellation Fee': {y:608, height:14}
    };
    function setText(fieldName, value){
      if(!fieldName) return;
      try{
        var f=form.getTextField(fieldName);
        if(value){
          // The source PDF's text fields have auto-size (0pt) font, which
          // pdf-lib renders oversized when filled programmatically. Fix at
          // a size matching the document's own measured body text (11pt).
          // Some fields lack a /DA entry and throw on setFontSize — that
          // failure must not block writing the actual value, so it's
          // caught separately and never silently drops the field.
          try{ f.setFontSize(10.5); }catch(e2){}
          if(RECT_OVERRIDES[fieldName]){
            try{
              var w0=f.acroField.getWidgets()[0];
              var r0=w0.getRectangle();
              var ov=RECT_OVERRIDES[fieldName];
              w0.setRectangle({x:r0.x, y:ov.y, width:r0.width, height:ov.height});
            }catch(e3){}
          }
          f.setText(String(value));
          filled++;
        }
        else { blank++; blankList.push(fieldName); }
      }catch(e){ errors.push({field:fieldName, message:(e&&e.message)||String(e)}); }
    }
    function setCheck(fieldName, shouldCheck){
      if(!fieldName) return;
      try{
        var cb=form.getCheckBox(fieldName);
        if(shouldCheck){ cb.check(); filled++; }
        else { blank++; blankList.push(fieldName); }
      }catch(e){ errors.push({field:fieldName, message:(e&&e.message)||String(e)}); }
    }

    var titledOwners=[[pdfG('v-first'),pdfG('v-last')].filter(Boolean).join(' '), [pdfG('v-co'),pdfG('v-col')].filter(Boolean).join(' ')].filter(Boolean).join(', ');
    setText('Date', pdfG('v-agr-date'));
    setText('Names of Titled Owners', titledOwners);
    setText('Mailing Address', pdfG('v-mail-addr'));
    setText('City', pdfG('v-owner-city'));
    setText('State', pdfG('v-owner-state'));
    setText('Zip Code', pdfG('v-owner-zip'));
    setText('Primary Phone', pdfG('v-phone'));
    setText('Secondary Phone', pdfG('v-phone2'));
    setText('Email 1', pdfG('v-email'));
    setText('Email 2', pdfG('v-email2'));

    [1,2,3,4].forEach(function(n){
      var v=resortAgreementVals(n);
      var fx=RESORT_TEXT_FIELDS[n];
      setText(fx.name, v.name);
      setText(fx.loc, v.loc);
      setText(fx.balance, v.balance);
      setText(fx.payment, v.payment);
      setText(fx.mtf, v.mtf);
      setText(fx.notes, v.notes);
      var c=RESORT_CHECKS[n];
      setCheck(c[0], v.paidOff==='yes');  setCheck(c[1], v.paidOff==='no');
      setCheck(c[2], v.current==='yes');  setCheck(c[3], v.current==='no');
      setCheck(c[4], v.owntype==='week'); setCheck(c[5], v.owntype==='points');
      setCheck(c[6], v.usage==='annual'); setCheck(c[7], v.usage==='even');
      setCheck(c[8], v.usage==='odd');    setCheck(c[9], v.usage==='triennial');
      setCheck(c[10], v.mtffreq==='annually'); setCheck(c[11], v.mtffreq==='biennially'); setCheck(c[12], v.mtffreq==='triennially');
      setCheck(c[13], v.mtfcurrent==='yes'); setCheck(c[14], v.mtfcurrent==='no');
    });

    setText('Reason for Wanting out of Ownerships', pdfG('v-why'));
    setCheck('Check Box95', pdfG('v-own-other')==='yes');
    setCheck('Check Box103', pdfG('v-own-other')==='no');
    var fn=pdfG('v-final-notes');
    var fnLines=fn? fn.match(/.{1,95}(\s|$)/g)||[fn] : [];
    setText('Final Notes 1', (fnLines[0]||'').trim());
    setText('Final Notes 2', (fnLines[1]||'').trim());
    setText('final notes 3', (fnLines[2]||'').trim());

    setCheck('Check Box17', pdfG('v-off-military'));
    setCheck('Check Box19', pdfG('v-off-65plus'));
    setCheck('Check Box20', pdfG('v-off-paidfull'));
    setCheck('Check Box26', pdfG('v-off-mortgage'));
    setCheck('Check Box23', pdfG('v-off-3rdparty'));

    setText('Timeshare Cancellation Fee', pdfG('v-fee'));
    setText('undefined', pdfG('v-fee'));
    setText('Paid in Full', pdfG('v-pay-paidinfull')==='yes' ? 'Yes' : '');
    setText('undefined_2', pdfG('v-pay-down'));
    setText('undefined_3', pdfG('v-pay-financed'));
    var proc=pdfG('v-pay-processing');
    if(!proc){ var financedNum=parseFloat(pdfG('v-pay-financed'))||0; if(financedNum>0) proc=(financedNum*0.025).toFixed(2); }
    setText('25 Processing Charge', proc);
    setText('Total Payment Amount Being Charged Today', pdfG('v-pay-total-today'));
    setText('Payment Terms', pdfG('v-pay-terms'));

    var pmTextFields=[
      {amt:'Payment Method 1 Amount',acct:'Accountholder Name',zip:'Billing Zip Code',notes:'Notes_5',checks:['Check Box89','Check Box90','Check Box91','Check Box92']},
      {amt:'Payment Method 2 Amount',acct:'Accountholder Name_2',zip:'Billing Zip Code_2',notes:'Notes_6',checks:['Check Box93','Check Box94','Check Box100','Check Box96']},
      {amt:'Payment Method 3 Amount',acct:'Accountholder Name_3',zip:'Billing Zip Code_3',notes:'Notes_7',checks:['Check Box97','Check Box98','Check Box101','Check Box99']}
    ];
    pmTextFields.forEach(function(pm,i){
      var n=i+1, p='v-pm'+n+'-';
      setText(pm.amt, pdfG(p+'amount'));
      setText(pm.acct, pdfG(p+'acct'));
      setText(pm.zip, pdfG(p+'zip'));
      setText(pm.notes, pdfG(p+'notes'));
      var type=pdfG(p+'type');
      setCheck(pm.checks[0], type==='visa'); setCheck(pm.checks[1], type==='mastercard');
      setCheck(pm.checks[2], type==='discover'); setCheck(pm.checks[3], type==='check');
    });

    setText('Payment Method 4 Amount', pdfG('v-pm4-amount'));
    setText('Financing', pdfG('v-pm4-financing'));
    setText('Accountholder Name_4', pdfG('v-pm4-acct'));
    setText('Billing Zip Code_4', pdfG('v-pm4-zip'));
    setText('undefined_4', pdfG('v-pm4-lenderpaid'));
    setText('Paid to lender by Client Protection Group LLC', pdfG('v-pm4-monthly'));
    setText('Month x', pdfG('v-pm4-numpayments'));
    setText('starting', pdfG('v-pm4-starting'));

    status('Generating PDF…');
    var outBytes;
    try{ outBytes=await pdfDoc.save(); }
    catch(e){ status('⚠ Failed to generate the completed PDF: '+((e&&e.message)||e)); return {filled:filled, blank:blank, blankList:blankList, errors:errors}; }

    var prefix = opts.filenamePrefix || 'Cancellation_Agreement';
    var nameForFile=([pdfG('v-first'),pdfG('v-last')].filter(Boolean).join('_')||'client').replace(/[^a-z0-9_]/gi,'');
    var blob=new Blob([outBytes],{type:'application/pdf'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    a.href=url; a.download=prefix+'_'+nameForFile+'.pdf';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){URL.revokeObjectURL(url);},4000);

    // Errors are surfaced prominently and first — a field that threw while
    // being populated is a real problem (bad field name, corrupted PDF,
    // etc.), never just silently dropped from the counts.
    var errorHtml = errors.length
      ? '<div style="color:#DC2626;font-weight:700">⚠ '+errors.length+' field(s) could NOT be populated due to an error:</div>'
        + '<div style="margin:4px 0 8px;color:#DC2626;font-size:11px">'+errors.map(function(e){return e.field+' — '+e.message;}).join('<br>')+'</div>'
      : '';
    status(errorHtml
      + '✓ Data mapped &nbsp; ✓ '+filled+' fields populated &nbsp; ⚠ '+blank+' fields left blank (not available)'
      + (blankList.length? '<div style="margin-top:6px;color:#9ca3af;font-size:11px">Blank: '+blankList.slice(0,20).join(', ')+(blankList.length>20?'…':'')+'</div>':''));
    return {filled:filled, blank:blank, blankList:blankList, errors:errors};
  }

  var CANONICAL_FIELD_IDS = (function(){
    var ids=['v-first','v-last','v-email','v-phone','v-co','v-col','v-phone2','v-email2',
      'v-mail-addr','v-owner-city','v-owner-state','v-owner-zip','v-agr-date',
      'v-resort','v-loc','v-balance','v-mtg','v-mtf',
      'v-r1-paidoff','v-r1-current','v-r1-owntype','v-r1-usage','v-r1-mtffreq2','v-r1-mtfcurrent','v-r1-notes',
      'v-why','v-own-other','v-final-notes',
      'v-fee','v-pay-down','v-pay-financed','v-pay-processing','v-pay-total-today','v-pay-terms'];
    [2,3,4].forEach(function(n){
      ids.push('v-r'+n+'-name','v-r'+n+'-loc','v-r'+n+'-paidoff','v-r'+n+'-balance','v-r'+n+'-current','v-r'+n+'-payment','v-r'+n+'-owntype','v-r'+n+'-usage','v-r'+n+'-mtf','v-r'+n+'-mtffreq','v-r'+n+'-mtfcurrent','v-r'+n+'-notes');
    });
    return ids;
  })();

  var FIELD_LABELS = {
    'v-first':'First Name','v-last':'Last Name','v-email':'Email 1','v-phone':'Primary Phone',
    'v-co':'Co-Owner First','v-col':'Co-Owner Last','v-phone2':'Secondary Phone','v-email2':'Email 2',
    'v-mail-addr':'Mailing Address','v-owner-city':'City','v-owner-state':'State','v-owner-zip':'ZIP','v-agr-date':'Agreement Date',
    'v-resort':'Resort 1 Name','v-loc':'Resort 1 Location','v-balance':'Resort 1 Balance','v-mtg':'Resort 1 Payment Amount','v-mtf':'Resort 1 Maintenance Fee',
    'v-r1-paidoff':'Resort 1 Paid Off','v-r1-current':'Resort 1 Current','v-r1-owntype':'Resort 1 Ownership Type','v-r1-usage':'Resort 1 Usage Rights',
    'v-r1-mtffreq2':'Resort 1 MTF Frequency','v-r1-mtfcurrent':'Resort 1 MTF Current','v-r1-notes':'Resort 1 Notes',
    'v-why':'Reason for Wanting Out','v-own-other':'Own Other Timeshares','v-final-notes':'Final Notes',
    'v-fee':'Cancellation Fee','v-pay-down':'Down Payment Amount','v-pay-financed':'Amount Being Financed',
    'v-pay-processing':'Processing Charge','v-pay-total-today':'Total Charged Today','v-pay-terms':'Payment Terms'
  };
  [2,3,4].forEach(function(n){
    FIELD_LABELS['v-r'+n+'-name']='Resort '+n+' Name'; FIELD_LABELS['v-r'+n+'-loc']='Resort '+n+' Location';
    FIELD_LABELS['v-r'+n+'-paidoff']='Resort '+n+' Paid Off'; FIELD_LABELS['v-r'+n+'-balance']='Resort '+n+' Balance';
    FIELD_LABELS['v-r'+n+'-current']='Resort '+n+' Current'; FIELD_LABELS['v-r'+n+'-payment']='Resort '+n+' Payment Amount';
    FIELD_LABELS['v-r'+n+'-owntype']='Resort '+n+' Ownership Type'; FIELD_LABELS['v-r'+n+'-usage']='Resort '+n+' Usage Rights';
    FIELD_LABELS['v-r'+n+'-mtf']='Resort '+n+' Maintenance Fee'; FIELD_LABELS['v-r'+n+'-mtffreq']='Resort '+n+' MTF Frequency';
    FIELD_LABELS['v-r'+n+'-mtfcurrent']='Resort '+n+' MTF Current'; FIELD_LABELS['v-r'+n+'-notes']='Resort '+n+' Notes';
  });

  // Returns {total, filled, blank, blankList} across the canonical shared
  // field set — used by each page's own "Agreement Review" UI. Only
  // counts fields that exist in the current page's DOM, so a page that
  // omits a section (rare) isn't penalized for fields it doesn't collect.
  // blankList contains human-readable labels, not raw element ids.
  function getFieldSummary(){
    var filled=0, blankList=[];
    CANONICAL_FIELD_IDS.forEach(function(id){
      var el=document.getElementById(id);
      if(!el) return;
      var v=el.type==='checkbox'?el.checked:(el.value||'').trim();
      if(v) filled++; else blankList.push(FIELD_LABELS[id]||id);
    });
    var total=filled+blankList.length;
    return {total:total, filled:filled, blank:blankList.length, blankList:blankList};
  }

  // Public helper for callers that need a raw field(names) lookup outside
  // runPopulateFromCRM's own field-setting loop (e.g. Vitals' extra sales
  // fields below) — auto-detects tabular vs vertical input exactly like
  // runPopulateFromCRM does internally, so a caller can never accidentally
  // run the vertical-only parser against a tabular paste (that mismatch
  // was a real bug: it silently produced garbage values instead of the
  // correct ones when fed a Zoho export).
  function makeSmartFieldGetter(rawText){
    var table=detectTabularExport(rawText);
    if(table){
      var dummyDebug={matchedHeaders:{}};
      return makeTableFieldGetter(table.headers, table.rows[0], dummyDebug);
    }
    return makeFieldGetter(rawText);
  }

  global.CaseEngine = {
    setf: setf, setSel: setSel, yn: yn,
    makeFieldGetter: makeFieldGetter,
    makeSmartFieldGetter: makeSmartFieldGetter,
    runPopulateFromCRM: runPopulateFromCRM,
    resortAgreementVals: resortAgreementVals,
    generateCancellationPDF: generateCancellationPDF,
    getFieldSummary: getFieldSummary
  };
})(window);
