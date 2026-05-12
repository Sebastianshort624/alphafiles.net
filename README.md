# alphafiles.net
Alpha Timeshare Consultants Files

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alpha Timeshare Consultants — Case Presentation</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<style>
:root{
  --navy:#1a3660;--navy2:#2a5298;--navy3:#3a6bc0;
  --gold:#c9a24a;--gold2:#e8c46a;--gold-pale:#fdf6e8;--gold-mid:#f5e9cf;
  --white:#fff;--off:#f8f9fb;--blue-pale:#eef4ff;--blue-light:#ddeeff;--sky:#b8d4f0;
  --gray:#eaecf2;--border:#ccd4e8;--muted:#6a7a94;--text:#1a2a3e;--text2:#3a4a60;--text-light:#8a96b0;
  --red:#c0392b;--red-bg:#fdf0ef;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Barlow',sans-serif;font-size:17px;background:var(--off);color:var(--text);overflow-x:hidden;}

/* NAV */
#nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:#fff;border-bottom:2px solid var(--gold);padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:60px;box-shadow:0 2px 12px rgba(26,54,96,.1);}
.nav-logo img{height:44px;width:auto;}
.nav-dots{display:flex;gap:7px;align-items:center;}
.nav-dot{width:9px;height:9px;border-radius:50%;background:var(--gray);cursor:pointer;transition:all .3s;border:1.5px solid var(--border);}
.nav-dot.active{background:var(--gold);border-color:var(--gold);transform:scale(1.3);}
.nav-btns{display:flex;gap:8px;}
.nav-btn{padding:7px 15px;border-radius:5px;border:1.5px solid var(--navy);background:transparent;color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1px;cursor:pointer;text-transform:uppercase;text-decoration:none;transition:all .2s;font-weight:600;}
.nav-btn:hover{background:var(--navy);color:#fff;}
.nav-btn.gold{border-color:var(--gold);color:var(--gold);}
.nav-btn.gold:hover{background:var(--gold);color:var(--navy);}

/* SLIDE */
.slide{min-height:100vh;padding:84px 60px 70px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:center;}
.slide+.slide{border-top:1px solid var(--border);}
.bg-white{background:#fff;}
.bg-pale{background:var(--blue-pale);}
.bg-off{background:var(--off);}
.bg-navy{background:var(--navy);color:#fff;}
.bg-navy2{background:linear-gradient(135deg,#1a3660 0%,#2a5298 100%);color:#fff;}

/* TYPE */
.slide-label{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;font-weight:600;}
.slide-headline{font-family:'Cormorant Garamond',serif;font-size:clamp(36px,4.5vw,64px);font-weight:300;line-height:1.08;color:var(--navy);margin-bottom:10px;}
.bg-navy .slide-headline,.bg-navy2 .slide-headline{color:#fff;}
.slide-headline b{font-weight:700;color:var(--gold);}
.slide-sub{font-size:18px;color:var(--text2);font-weight:300;margin-bottom:32px;max-width:700px;line-height:1.65;}
.bg-navy .slide-sub,.bg-navy2 .slide-sub{color:rgba(255,255,255,.75);}

/* CARDS */
.card{background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:26px;box-shadow:0 2px 12px rgba(26,54,96,.06);}
.card-pale{background:var(--blue-pale);border:1.5px solid var(--border);border-radius:10px;padding:26px;}
.card-gold{background:var(--gold-pale);border:1.5px solid rgba(201,162,74,.4);border-radius:10px;padding:26px;}
.card-navy{background:var(--navy);border-radius:10px;padding:26px;color:#fff;}
.card-top{position:relative;overflow:hidden;}
.card-top::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--gold);}

/* FORM */
.fl{margin-bottom:16px;}
.fl label{display:block;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px;font-weight:600;}
.fl input,.fl select,.fl textarea{width:100%;background:#fff;border:1.5px solid var(--border);border-radius:6px;padding:10px 14px;color:var(--text);font-family:'Barlow',sans-serif;font-size:16px;outline:none;transition:border-color .2s;}
.fl input:focus,.fl select:focus,.fl textarea:focus{border-color:var(--navy2);box-shadow:0 0 0 3px rgba(42,82,152,.1);}
.fl input:disabled{background:var(--off);color:var(--navy);font-weight:700;}
.fl textarea{resize:vertical;min-height:70px;}

/* BTNS */
.btn{padding:12px 28px;border-radius:6px;cursor:pointer;font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;letter-spacing:1px;text-transform:uppercase;transition:all .2s;border:none;}
.btn-gold{background:var(--gold);color:var(--navy);}
.btn-gold:hover{background:var(--gold2);}
.btn-navy{background:var(--navy);color:#fff;}
.btn-navy:hover{background:var(--navy2);}
.btn-outline{background:transparent;color:var(--navy);border:2px solid var(--navy);}
.btn-outline:hover{background:var(--navy);color:#fff;}
.btn-outline-white{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.5);}
.btn-outline-white:hover{background:rgba(255,255,255,.12);border-color:#fff;}

/* GRIDS */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}

/* STAT */
.stat{background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:22px 16px;text-align:center;box-shadow:0 2px 8px rgba(26,54,96,.06);position:relative;overflow:hidden;}
.stat::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);}
.stat .sn{font-family:'Cormorant Garamond',serif;font-size:50px;color:var(--navy);line-height:1;font-weight:700;}
.stat .sl{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-top:6px;line-height:1.4;}
.bg-navy .stat{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);}
.bg-navy .stat .sn{color:var(--gold);}
.bg-navy .stat .sl{color:rgba(255,255,255,.65);}
.bg-navy2 .stat{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);}
.bg-navy2 .stat .sn{color:var(--gold);}
.bg-navy2 .stat .sl{color:rgba(255,255,255,.65);}

/* RISK */
.risk{display:flex;gap:12px;align-items:flex-start;margin-bottom:11px;padding:11px 14px;background:var(--red-bg);border-left:3px solid var(--red);border-radius:0 6px 6px 0;}
.risk span{font-size:16px;color:var(--text);line-height:1.5;}

/* SAVINGS */
.sav-card{background:var(--navy);border-radius:10px;padding:20px;text-align:center;color:#fff;position:relative;overflow:hidden;}
.sav-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);}
.sav-card .sv-lbl{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:8px;}
.sav-card .sv-val{font-family:'Cormorant Garamond',serif;font-size:34px;font-weight:700;color:var(--gold);line-height:1;}
.sav-card .sv-sub{font-size:13px;color:rgba(255,255,255,.45);margin-top:5px;}

/* PAY OPTIONS */
.pay{background:#fff;border:1.5px solid var(--border);border-radius:8px;padding:20px;}
.pay .pt{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:8px;}
.pay .pm{font-family:'Cormorant Garamond',serif;font-size:30px;color:var(--navy);font-weight:600;}
.pay .ps{font-size:14px;color:var(--muted);margin-top:5px;line-height:1.5;}
.pay-hl{border-color:var(--gold);background:var(--gold-pale);}
.pay-hl .pm{color:var(--gold);}

/* COST TABLE */
.ctbl{width:100%;border-collapse:collapse;}
.ctbl th{background:var(--navy);color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;padding:10px 14px;text-align:left;}
.ctbl td{padding:11px 14px;font-size:16px;border-bottom:1px solid var(--border);color:var(--text);}
.ctbl td:last-child{color:var(--navy);font-weight:700;font-family:'Barlow Condensed',sans-serif;font-size:17px;}
.ctbl tr:hover td{background:var(--blue-pale);}

/* STEP */
.step{display:flex;gap:14px;margin-bottom:14px;align-items:flex-start;}
.step-n{width:28px;height:28px;border-radius:50%;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.step-t{font-size:16px;color:var(--text2);line-height:1.55;padding-top:4px;}
.bg-navy .step-t,.bg-navy2 .step-t{color:rgba(255,255,255,.8);}

/* GA ITEM */
.ga{display:flex;gap:16px;align-items:flex-start;padding:18px;background:#fff;border:1.5px solid var(--border);border-radius:8px;transition:border-color .3s;}
.ga:hover{border-color:var(--navy2);}
.ga-ic{width:42px;height:42px;border-radius:50%;background:var(--blue-pale);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.ga h5{font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:var(--navy);margin-bottom:4px;font-weight:700;}
.ga p{font-size:15px;color:var(--text2);line-height:1.6;}
.bg-navy .ga,.bg-navy2 .ga{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.15);}
.bg-navy .ga h5,.bg-navy2 .ga h5{color:var(--gold);}
.bg-navy .ga p,.bg-navy2 .ga p{color:rgba(255,255,255,.8);}

/* RIGHTS */
.rb{background:#fff;border:1.5px solid var(--border);border-radius:8px;overflow:hidden;margin-bottom:10px;}
.rh{display:flex;align-items:flex-start;gap:12px;padding:15px 18px;cursor:pointer;background:var(--blue-pale);transition:background .2s;}
.rh:hover{background:var(--sky);}
.r-num{font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--navy);font-weight:700;line-height:1;flex-shrink:0;width:26px;}
.r-title{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;letter-spacing:1px;color:var(--navy);text-transform:uppercase;flex:1;padding-top:3px;}
.r-arrow{color:var(--gold);font-size:20px;transition:transform .3s;margin-top:1px;}
.rb.open .r-arrow{transform:rotate(180deg);}
.rbody{max-height:0;overflow:hidden;transition:max-height .4s ease;}
.rb.open .rbody{max-height:700px;}
.rinner{padding:18px 20px;border-top:1px solid var(--border);}
.ri-lbl{font-size:13px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:10px;font-weight:600;}
.chk-grp{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;}
.chk-row{display:flex;align-items:center;gap:10px;}
.chk-row input[type=checkbox]{width:17px;height:17px;flex-shrink:0;accent-color:var(--navy);}
.chk-row label{font-size:15px;color:var(--text);cursor:pointer;font-family:'Barlow',sans-serif;text-transform:none;letter-spacing:0;margin:0;}

/* FAQ */
.faq{background:#fff;border:1.5px solid var(--border);border-radius:8px;overflow:hidden;margin-bottom:10px;}
.faq-q{padding:18px 22px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:.5px;color:var(--navy);transition:background .2s;}
.faq-q:hover{background:var(--blue-pale);}
.faq-arr{color:var(--gold);font-size:22px;transition:transform .3s;}
.faq.open .faq-arr{transform:rotate(180deg);}
.faq-a{max-height:0;overflow:hidden;transition:all .4s ease;font-size:16px;color:var(--text2);line-height:1.8;}
.faq.open .faq-a{max-height:800px;padding:4px 22px 22px;}

/* LF ITEM */
.lf{display:flex;align-items:center;gap:14px;padding:13px 16px;background:var(--blue-pale);border:1px solid var(--border);border-radius:6px;margin-bottom:8px;}
.lf-tag{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;color:var(--navy);min-width:72px;}
.lf-desc{font-size:15px;color:var(--text2);}

/* TRUST LINK */
.tl-btn{display:flex;align-items:center;gap:14px;background:var(--blue-pale);border:1.5px solid var(--border);border-radius:8px;padding:18px 22px;text-decoration:none;color:var(--text);transition:all .3s;}
.tl-btn:hover{border-color:var(--navy2);background:var(--sky);}
.tl-ic{width:44px;height:44px;background:var(--navy);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
.tl-tit{font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:1px;color:var(--navy);text-transform:uppercase;font-weight:700;}
.tl-sub{font-size:14px;color:var(--muted);margin-top:3px;}

/* CLOSE CARD */
.cc{background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:24px;position:relative;overflow:hidden;}
.cc::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--gold);}
.cc h4{font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:11px;font-weight:700;}
.cc p{font-size:16px;color:var(--text2);line-height:1.65;}

/* KEY BARS */
.kb-red{background:rgba(192,57,43,.08);border-left:4px solid var(--red);padding:13px 18px;border-radius:0 6px 6px 0;margin-top:20px;font-size:16px;color:var(--text);font-style:italic;}
.kb-gold{background:var(--gold-pale);border-left:4px solid var(--gold);padding:13px 18px;border-radius:0 6px 6px 0;margin-top:20px;font-size:16px;color:var(--text);}

/* CONTACT CARD */
.contact-card{background:#fff;border:2px solid var(--gold);border-radius:12px;padding:24px 30px;display:flex;align-items:center;gap:24px;max-width:680px;margin:28px auto 0;box-shadow:0 4px 20px rgba(201,162,74,.15);}
.cc-logo{height:56px;width:auto;flex-shrink:0;}
.cc-divider{width:1px;height:60px;background:var(--border);flex-shrink:0;}
.cc-info{flex:1;}
.cc-name{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:var(--navy);}
.cc-title{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;font-weight:600;}
.cc-row{font-size:15px;color:var(--text2);line-height:1.7;}
.cc-row a{color:var(--navy2);text-decoration:none;}
.cc-row a:hover{color:var(--gold);}

/* QUOTE BANNER */
.quote-banner{background:var(--navy);border-radius:10px;padding:22px 30px;text-align:center;margin-top:20px;}
.quote-banner p{font-family:'Cormorant Garamond',serif;font-size:24px;color:#fff;font-style:italic;line-height:1.5;}
.quote-banner p span{color:var(--gold);}

/* CASE BADGE */
.case-badge{display:inline-block;background:var(--gold);color:var(--navy);padding:5px 16px;border-radius:20px;font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:2px;font-weight:700;margin-bottom:14px;}

/* DOC BTN */
.doc-btn{flex:1;display:block;text-align:center;padding:12px;background:var(--blue-pale);border:1.5px solid var(--border);border-radius:6px;color:var(--navy);text-decoration:none;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1px;text-transform:uppercase;transition:all .2s;font-weight:700;}
.doc-btn:hover{background:var(--navy);color:#fff;border-color:var(--navy);}

/* PANEL */
#clientPanel{position:fixed;top:60px;right:0;bottom:0;width:340px;background:#fff;border-left:2px solid var(--border);overflow-y:auto;z-index:800;transform:translateX(100%);transition:transform .3s;box-shadow:-4px 0 20px rgba(0,0,0,.1);padding:22px;}
#clientPanel.open{transform:translateX(0);}
.ph{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:16px;font-weight:700;}
.pcr{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:var(--blue-pale);border:1px solid var(--border);border-radius:6px;margin-bottom:7px;transition:background .2s;}
.pcr:hover{background:var(--sky);}
.pcr-active{border-color:var(--gold)!important;background:var(--gold-pale)!important;}
.pcr-nm{font-size:15px;font-weight:700;color:var(--navy);}
.pcr-cs{font-size:12px;color:var(--muted);letter-spacing:1px;}

/* BOTTOM NAV */
#bnav{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);display:flex;gap:3px;flex-wrap:wrap;justify-content:center;background:rgba(26,54,96,.96);backdrop-filter:blur(12px);border:1px solid rgba(201,162,74,.4);border-radius:40px;padding:8px 16px;z-index:999;}
.bb{padding:7px 13px;border-radius:20px;border:none;cursor:pointer;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;transition:all .2s;background:transparent;color:rgba(255,255,255,.55);}
.bb:hover,.bb.active{background:rgba(201,162,74,.2);color:var(--gold);}
.bb.primary{background:var(--gold);color:var(--navy);font-weight:700;}
.bb.primary:hover{background:var(--gold2);}
/* Mobile nav — dropdown style */
#bnav-mobile{display:none;position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:999;width:calc(100% - 32px);max-width:420px;}
#bnav-mobile-trigger{width:100%;background:rgba(26,54,96,.97);backdrop-filter:blur(12px);border:1px solid rgba(201,162,74,.45);border-radius:40px;padding:11px 20px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;gap:10px;}
#bnav-mobile-trigger .mn-label{font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);font-weight:700;}
#bnav-mobile-trigger .mn-arrow{color:rgba(255,255,255,.5);font-size:16px;transition:transform .25s;}
#bnav-mobile.open #bnav-mobile-trigger .mn-arrow{transform:rotate(180deg);}
#bnav-mobile-menu{display:none;background:rgba(20,40,80,.98);backdrop-filter:blur(16px);border:1px solid rgba(201,162,74,.3);border-radius:16px;margin-bottom:8px;overflow:hidden;}
#bnav-mobile.open #bnav-mobile-menu{display:block;}
.mn-item{display:flex;align-items:center;gap:12px;padding:13px 20px;cursor:pointer;font-family:'Barlow Condensed',sans-serif;font-size:15px;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.6);border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s;}
.mn-item:last-child{border-bottom:none;}
.mn-item:hover,.mn-item.active{background:rgba(201,162,74,.15);color:var(--gold);}
.mn-item.primary{color:var(--gold);font-weight:700;}
.mn-num{width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:11px;color:rgba(255,255,255,.4);flex-shrink:0;}
.mn-item.active .mn-num,.mn-item:hover .mn-num{background:rgba(201,162,74,.2);color:var(--gold);}
@media(max-width:700px){
  #bnav{display:none;}
  #bnav-mobile{display:block;}
}

/* MISC */
.divg{width:70px;height:3px;background:linear-gradient(90deg,var(--gold),transparent);margin:16px 0;}
.divg.ctr{margin:16px auto;}
.sec-line{border:none;border-top:1px solid var(--border);margin:22px 0;}
.scroll-hint{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;color:rgba(255,255,255,.4);text-transform:uppercase;animation:pulse 2s infinite;}
@keyframes pulse{0%,100%{opacity:.3}50%{opacity:.9}}
@keyframes ring{0%,100%{box-shadow:0 0 0 0 rgba(201,162,74,.4)}50%{box-shadow:0 0 0 14px rgba(201,162,74,0)}}
.fade-up{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease;}
.fade-up.visible{opacity:1;transform:translateY(0);}
.fade-up:nth-child(2){transition-delay:.1s}.fade-up:nth-child(3){transition-delay:.2s}.fade-up:nth-child(4){transition-delay:.3s}
.ch{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:14px;font-weight:600;}
.ch-gold{color:var(--navy);}
@media(max-width:900px){.slide{padding:80px 22px 50px;}.g2,.g3,.g4{grid-template-columns:1fr;}}
</style>
</head>
<body>

<!-- NAV -->
<nav id="nav">
  <div class="nav-logo"><img src="https://alphatimeshareconsultants.com/wp-content/uploads/2026/04/Alpha-TimeShare-Consultants-logo.png" alt="Alpha Timeshare Consultants" onerror="this.style.display='none';this.nextSibling.style.display='block'"><span style="display:none;font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:700;color:var(--navy);">ALPHA TIMESHARE CONSULTANTS</span></div>
  <div class="nav-dots" id="navDots"></div>
  <div class="nav-btns">
    <a href="https://alphatimeshareconsultants.com/" class="nav-btn">Website</a>
    <button class="nav-btn" onclick="togglePanel()">Clients</button>
    <button class="nav-btn gold" onclick="dlPDF()">PDF</button>
  </div>
</nav>

<!-- CLIENT PANEL -->
<div id="clientPanel">
  <div class="ph">Saved Clients</div>

  <!-- SEARCH -->
  <div style="position:relative;margin-bottom:12px;">
    <input type="text" id="clientSearch" placeholder="Search by name or case #..." oninput="renderPast()" style="padding-left:32px;font-size:14px;">
    <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:14px;">🔍</span>
  </div>

  <!-- CLIENT COUNT -->
  <div id="clientCount" style="font-size:13px;color:var(--muted);margin-bottom:10px;"></div>

  <!-- CLIENT LIST -->
  <div id="pastList"></div>

  <hr style="margin:14px 0;border-color:var(--border);">

  <!-- ACTION BUTTONS -->
  <button class="btn btn-gold" style="width:100%;margin-bottom:8px;font-size:14px;" onclick="newClient()">+ New Client</button>

  <button class="btn btn-navy" style="width:100%;margin-bottom:8px;font-size:14px;" onclick="exportClients()">📥 Export All Clients (.json)</button>

  <label style="display:block;width:100%;text-align:center;cursor:pointer;background:var(--off);border:2px dashed var(--border);border-radius:6px;padding:11px;font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:var(--text-light);transition:all .2s;margin-bottom:8px;" onmouseover="this.style.borderColor='var(--navy)'" onmouseout="this.style.borderColor='var(--border)'">
    📤 Import Clients (.json)
    <input type="file" accept=".json" onchange="importClients(event)" style="display:none;">
  </label>

  <div id="importMsg" style="display:none;font-size:13px;color:var(--navy);font-weight:600;padding:8px 10px;background:var(--blue-pale);border-radius:6px;margin-bottom:8px;"></div>

  <hr style="margin:10px 0;border-color:var(--border);">

  <!-- HELP TEXT -->
  <div style="background:var(--blue-pale);border-radius:8px;padding:12px 14px;">
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:8px;font-weight:700;">💾 How Saving Works</div>
    <p style="font-size:13px;color:var(--text2);line-height:1.65;">Clients save to <strong>this browser on this device</strong>. To back up or move to another device:</p>
    <ol style="font-size:13px;color:var(--text2);line-height:1.8;padding-left:16px;margin-top:6px;">
      <li>Click <strong>Export All Clients</strong> → saves a <code>.json</code> file</li>
      <li>Store it in Google Drive, Dropbox, or email it to yourself</li>
      <li>On any device, click <strong>Import Clients</strong> and load that file</li>
    </ol>
    <p style="font-size:12px;color:var(--muted);margin-top:8px;">⚠ Clearing browser cache will erase local data. Export regularly.</p>
  </div>
</div>

<!-- ═══ SLIDE 0 — INTAKE ═══ -->
<section class="slide bg-navy2" id="slide-0" data-slide="0" style="justify-content:flex-start;padding-top:90px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 1</div>
  
  <div style="max-width:940px;margin:0 auto;width:100%;">
    <div id="caseBadge" style="display:none;" class="case-badge"></div>
    <div class="slide-label">Page 1 — Welcome &amp; Intake</div>
    <div class="slide-headline fade-up">Today's <b>Conversation</b></div>
    <p class="slide-sub fade-up">Before we walk through everything, let's confirm your information so we can personalize your case overview.</p>

    <!-- CONTACT CARD -->
    <div class="fade-up" style="background:rgba(255,255,255,.06);border:1px solid rgba(201,162,74,.3);border-radius:12px;padding:22px 28px;max-width:700px;margin-bottom:28px;display:flex;align-items:center;gap:22px;flex-wrap:wrap;">
      <div style="flex:1;">
        <div style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:#fff;">Sebastian Short</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:8px;">Account Specialist — Alpha Timeshare Consultants</div>
        <div style="font-size:14px;color:rgba(255,255,255,.8);line-height:1.8;">
          <span>📞 Business: <a href="tel:18778483948" style="color:var(--gold2);text-decoration:none;">1 (877) 848-3948</a> Ext. 134</span><br>
          <span>📞 Direct: <a href="tel:16892333259" style="color:var(--gold2);text-decoration:none;">1 (689) 233-3259</a></span><br>
          <span>✉️ <a href="mailto:Sebastian@AlphaTimeshareConsultants.com" style="color:var(--gold2);text-decoration:none;">Sebastian@AlphaTimeshareConsultants.com</a></span>
        </div>
      </div>
    </div>

    <div class="g2 fade-up">
      <div class="card card-top">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy2);margin-bottom:18px;font-weight:700;">Owner Information</div>
        <div class="fl"><label>Primary Owner Name</label><input type="text" id="ownerName" placeholder="Full legal name"></div>
        <div class="fl"><label>Co-Owner Name (if applicable)</label><input type="text" id="coOwner" placeholder="Leave blank if sole owner"></div>
        <div class="fl"><label>Email Address</label><input type="email" id="ownerEmail" placeholder="email@example.com"></div>
        <div class="fl"><label>Phone Number</label><input type="tel" id="ownerPhone" placeholder="(000) 000-0000"></div>
        <div class="fl"><label>Address</label><input type="text" id="ownerAddress" placeholder="Street, City, State, ZIP"></div>
        <div class="fl"><label>Best Callback Number</label><input type="tel" id="callbackPhone" placeholder="(000) 000-0000"></div>
      </div>
      <div class="card card-top">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy2);margin-bottom:18px;font-weight:700;">Timeshare Details</div>

        <div class="fl"><label>Resort / Developer</label>
          <select id="resortSelect" onchange="autoSave()">
            <option value="">— Select Resort —</option>
            <option>Marriott Vacation Club</option><option>Hilton Grand Vacations</option>
            <option>Wyndham Vacation Ownership</option><option>Disney Vacation Club</option>
            <option>Bluegreen Vacations</option><option>Diamond Resorts (Sunterra)</option>
            <option>Vistana (Sheraton/Westin)</option><option>Club Wyndham</option>
            <option>Holiday Inn Club Vacations</option><option>Westgate Resorts</option>
            <option>Vacation Internationale</option><option>Festiva Adventure Club</option>
            <option>RCI Affiliated Resort</option><option>Other</option>
          </select>
        </div>
        <div class="fl"><label>Year Purchased</label><input type="number" id="i_year" value="2018" oninput="syncToCalc()"></div>
        <div class="fl"><label>Maintenance Fee Growth Rate (%/yr)</label><input type="number" id="i_growth" value="8" oninput="syncToCalc()"></div>

        <div class="fl"><label>Annual Maintenance Fee ($)</label><input type="number" id="i_mf" placeholder="e.g. 1200" oninput="syncToCalc();intakeCalc()"></div>
        <div class="fl"><label>Months Behind on Maintenance Fee</label><input type="number" id="i_mf_behind" value="0" min="0" placeholder="0 = current" oninput="intakeCalc();checkBehind()"></div>
        <div id="mf_behind_amt" style="display:none;background:var(--red-bg);border-left:3px solid var(--red);border-radius:0 6px 6px 0;padding:10px 14px;margin-bottom:12px;font-size:15px;color:var(--text);">Total MTF Past Due: <strong id="mf_behind_total" style="color:var(--red);">$0</strong></div>

        <div class="fl"><label>Mortgage Status</label>
          <select id="mtgStatus" onchange="toggleMtg()">
            <option value="still_owe">Still Owe — Actively Paying</option>
            <option value="paid_off">Paid Off in Full</option>
            <option value="never_had">Paid Cash / No Mortgage</option>
          </select>
        </div>

        <div id="mtgFields">
          <div class="fl"><label>Monthly Mortgage Payment ($)</label><input type="number" id="i_mtg" placeholder="e.g. 650" oninput="syncToCalc();intakeCalc()"></div>
          <div class="fl"><label>Months Behind on Mortgage</label><input type="number" id="i_mtg_behind" value="0" min="0" placeholder="0 = current" oninput="intakeCalc();checkBehind()"></div>
          <div id="mtg_behind_amt" style="display:none;background:var(--red-bg);border-left:3px solid var(--red);border-radius:0 6px 6px 0;padding:10px 14px;margin-bottom:12px;font-size:15px;color:var(--text);">Total Mortgage Past Due: <strong id="mtg_behind_total" style="color:var(--red);">$0</strong></div>

          <div class="fl"><label>Credit Score at Time of Purchase</label>
            <select id="creditAtPurchase" onchange="calcLoanEstimate()">
              <option value="">— Select —</option>
              <option value="good">Good (700+)</option>
              <option value="fair">Fair (620–699)</option>
              <option value="poor">Poor (below 620)</option>
            </select>
          </div>

          <div id="loanEstimateBox" style="display:none;background:var(--blue-pale);border:1.5px solid var(--border);border-radius:8px;padding:16px;margin-bottom:14px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:10px;font-weight:700;">Loan Estimate — Based on Your Payments</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
              <div style="text-align:center;padding:10px;background:#fff;border-radius:6px;border:1px solid var(--border);">
                <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px;">Total Paid (120 mo)</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:24px;color:var(--navy);font-weight:700;" id="totalPaid120">—</div>
              </div>
              <div style="text-align:center;padding:10px;background:#fff;border-radius:6px;border:1px solid var(--border);">
                <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px;">Est. Original Price (17.9% APR)</div>
                <div style="font-family:'Cormorant Garamond',serif;font-size:24px;color:var(--navy);font-weight:700;" id="origPrice">—</div>
              </div>
            </div>
            <div style="font-size:14px;color:var(--text2);line-height:1.6;" id="loanNarrative"></div>
            <div style="margin-top:12px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
              <span style="font-size:15px;font-weight:700;color:var(--navy);">Does this sound about right?</span>
              <button onclick="document.getElementById('loanConfirm').textContent='✓ Confirmed';this.style.background='var(--navy)';this.style.color='#fff';" class="btn btn-gold" style="font-size:13px;padding:7px 16px;">Yes — Confirmed</button>
              <button onclick="document.getElementById('loanConfirm').textContent='✗ Adjust figures';this.style.background='var(--red)';this.style.color='#fff';" class="btn btn-outline" style="font-size:13px;padding:7px 16px;">No — Adjust</button>
              <span id="loanConfirm" style="font-size:14px;color:var(--navy);font-weight:600;"></span>
            </div>
          </div>
        </div>

        <div id="intakeSummaryBox" style="display:none;background:var(--navy);border-radius:10px;padding:18px 20px;margin-bottom:14px;color:#fff;">
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;font-weight:600;">Current Monthly Obligation</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center;">
            <div><div style="font-size:11px;color:rgba(255,255,255,.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">MTG / Mo</div><div style="font-family:'Cormorant Garamond',serif;font-size:26px;color:var(--gold);font-weight:700;">$<span id="sum_mtg">0</span></div></div>
            <div><div style="font-size:11px;color:rgba(255,255,255,.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">MTF / Mo</div><div style="font-family:'Cormorant Garamond',serif;font-size:26px;color:var(--gold);font-weight:700;">$<span id="sum_mf">0</span></div></div>
            <div><div style="font-size:11px;color:rgba(255,255,255,.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Total / Mo</div><div style="font-family:'Cormorant Garamond',serif;font-size:26px;color:var(--gold2);font-weight:700;">$<span id="sum_total">0</span></div></div>
          </div>
          <div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,.12);text-align:center;">
            <span style="font-size:13px;color:rgba(255,255,255,.6);">Total Yearly Obligation: </span>
            <span style="font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--gold2);font-weight:700;">$<span id="sum_yearly">0</span></span>
          </div>
        </div>

        <div id="behindFollowUp" style="display:none;border:1.5px solid var(--red);border-radius:8px;overflow:hidden;margin-bottom:14px;">
          <div style="background:var(--red);padding:10px 16px;"><div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#fff;font-weight:700;">⚠ Behind on Payments — Follow-Up</div></div>
          <div style="padding:16px;background:var(--red-bg);display:flex;flex-direction:column;gap:10px;">
            <div class="chk-row"><input type="checkbox" id="bf_credit"><label for="bf_credit" style="font-size:15px;color:var(--text);">Has this affected your credit score at all?</label></div>
            <div class="chk-row"><input type="checkbox" id="bf_letters"><label for="bf_letters" style="font-size:15px;color:var(--text);">Have you received any threatening letters or collection notices?</label></div>
            <div class="chk-row"><input type="checkbox" id="bf_collections"><label for="bf_collections" style="font-size:15px;color:var(--text);">Has the account been sent to collections?</label></div>
            <div class="chk-row"><input type="checkbox" id="bf_foreclosure"><label for="bf_foreclosure" style="font-size:15px;color:var(--text);">Have you received any foreclosure notices on the property?</label></div>
            <div class="fl" style="margin:0;"><label>Notes on delinquency status</label><textarea id="bf_notes" placeholder="Document details — dates, agencies, amounts demanded..."></textarea></div>
          </div>
        </div>

        <div class="fl"><label>Notes</label><textarea id="intakeNotes" placeholder="Case notes, circumstances, key details..."></textarea></div>
      </div>
    </div>

    <div style="display:flex;gap:14px;margin-top:22px;flex-wrap:wrap;" class="fade-up">
      <button class="btn btn-gold" onclick="saveClient()">💾 Save Client &amp; Generate Case Number</button>
      <button class="btn btn-outline-white" onclick="goTo(4)">Continue Presentation →</button>
    </div>
    <div id="saveMsg" style="margin-top:12px;font-size:16px;color:var(--gold2);display:none;font-weight:600;"></div>
    <p class="scroll-hint" style="text-align:center;margin-top:36px;">Scroll to Continue ↓</p>
  </div>
</section>

<!-- ═══ SLIDE 1 — WHY DO YOU WANT OUT ═══ -->
<section class="slide bg-pale" id="slide-1" data-slide="1" style="padding-bottom:90px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 2</div>
  <div class="slide-label">Page 2 — Why Do You Want Out?</div>
  <div class="slide-headline fade-up">Why Do You <b>Want Out?</b></div>
  <p class="slide-sub fade-up" style="margin-bottom:20px;">Select your main reasons. Every answer strengthens your case file.</p>

  <div class="g2 fade-up" style="align-items:start;">
    <div style="display:flex;flex-direction:column;gap:12px;">

      <div class="wo-cat">
        <div class="wo-cat-head">💸 Financial Burden</div>
        <div class="chk-row"><input type="checkbox" id="wo_fees"><label for="wo_fees">Maintenance fees are too expensive and keep rising</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_total"><label for="wo_total">The total monthly cost is no longer manageable</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_retire"><label for="wo_retire">I am retired or on a fixed income</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_debt"><label for="wo_debt">This is causing serious financial hardship or debt</label></div>
      </div>

      <div class="wo-cat">
        <div class="wo-cat-head">🚫 I Don't Use It</div>
        <div class="chk-row"><input type="checkbox" id="wo_nouse"><label for="wo_nouse">I rarely or never use it — I'm paying for nothing</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_avail"><label for="wo_avail">Availability is terrible — can never get what I want</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_travel"><label for="wo_travel">My travel preferences or lifestyle have changed</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_cheap"><label for="wo_cheap">I can vacation better and cheaper without it</label></div>
      </div>

      <div class="wo-cat">
        <div class="wo-cat-head">🏥 Health &amp; Life Changes</div>
        <div class="chk-row"><input type="checkbox" id="wo_health"><label for="wo_health">Health issues prevent me from traveling</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_age"><label for="wo_age">I am getting older and no longer want this obligation</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_spouse"><label for="wo_spouse">Death or illness of a spouse or co-owner</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_estate"><label for="wo_estate">I am concerned about this passing to my children</label></div>
      </div>

    </div>
    <div style="display:flex;flex-direction:column;gap:12px;">

      <div class="wo-cat">
        <div class="wo-cat-head">⚠ I Was Deceived</div>
        <div class="chk-row"><input type="checkbox" id="wo_lied"><label for="wo_lied">I was misled during the sales presentation</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_invest"><label for="wo_invest">I was told it was an investment that would appreciate</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_perpetual"><label for="wo_perpetual">I did not know the contract was perpetual — no end date</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_cost"><label for="wo_cost">The true long-term cost was never disclosed to me</label></div>
      </div>

      <div class="wo-cat">
        <div class="wo-cat-head">🏨 Resort Is the Problem</div>
        <div class="chk-row"><input type="checkbox" id="wo_mgmt"><label for="wo_mgmt">Poor management or customer service</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_special"><label for="wo_special">Unexpected fee increases or special assessments</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_nohelp"><label for="wo_nohelp">The resort refuses to help me exit</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_closed"><label for="wo_closed">Resort has closed, been sold, or changed hands</label></div>
      </div>

      <div class="wo-cat">
        <div class="wo-cat-head">🔄 I've Already Tried</div>
        <div class="chk-row"><input type="checkbox" id="wo_tried_resort"><label for="wo_tried_resort">I tried to exit through the resort — they refused</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_tried_sell"><label for="wo_tried_sell">I tried to sell it — no buyers at any price</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_tried_other"><label for="wo_tried_other">I used another exit company and was not helped</label></div>
        <div class="chk-row"><input type="checkbox" id="wo_tried_give"><label for="wo_tried_give">I tried to give it away — no one would take it</label></div>
      </div>

    </div>
  </div>

  <div class="fl fade-up" style="margin-top:16px;max-width:600px;">
    <label>Other reason(s)</label>
    <textarea id="wo_other" placeholder="Any additional reasons..."></textarea>
  </div>
  <div style="margin-top:14px;" class="fade-up">
    <button class="btn btn-gold" onclick="saveWhyOut()">💾 Save &amp; Continue</button>
    <span id="whyOutSaved" style="display:none;margin-left:14px;font-size:15px;color:var(--navy);font-weight:600;"></span>
  </div>

  <style>
  .wo-cat{background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:14px 18px;box-shadow:0 2px 8px rgba(26,54,96,.05);}
  .wo-cat-head{font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);font-weight:700;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--border);}
  .wo-cat .chk-row{margin-bottom:8px;}
  .wo-cat label{font-size:15px!important;}
  </style>
</section>
<section class="slide bg-white" id="slide-2" data-slide="2">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 3</div>
  
  <div class="slide-label">Page 3 — Upcoming Obligations</div>
  <div class="slide-headline fade-up">Usage History &amp;<br><b>Upcoming Obligations</b></div>
  <p class="slide-sub fade-up">How often have you actually used it — and when do payments hit next?</p>

  <div class="g2 fade-up" style="align-items:start;">
    <div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:14px;font-weight:700;">Usage History</div>
      <div class="fl"><label>How many times have you used it total?</label>
        <select id="usageCount">
          <option value="">— Select —</option>
          <option>Never — not once</option>
          <option>1 time</option>
          <option>2–3 times</option>
          <option>4–5 times</option>
          <option>6–10 times</option>
          <option>More than 10 times</option>
        </select>
      </div>
      <div class="fl"><label>Last time you actually used it</label>
        <select id="lastUsed">
          <option value="">— Select —</option>
          <option>Never used it</option>
          <option>Within the last 12 months</option>
          <option>1–2 years ago</option>
          <option>3–5 years ago</option>
          <option>More than 5 years ago</option>
          <option>More than 10 years ago</option>
        </select>
      </div>
      <div class="fl"><label>Do you have any upcoming bookings?</label>
        <select id="hasBookings">
          <option value="">— Select —</option>
          <option>No — no bookings planned</option>
          <option>Yes — I have an upcoming trip booked</option>
          <option>Not sure</option>
        </select>
      </div>
      <div id="bookingNote" style="display:none;background:var(--gold-pale);border:1.5px solid rgba(201,162,74,.4);border-radius:6px;padding:12px 16px;margin-bottom:14px;font-size:14px;color:var(--text2);">
        ⚠ Note: Client has upcoming booking — this does not affect the exit process or their eligibility.
      </div>
      <div class="fl"><label>Are you ready to stop paying for something you don't want?</label>
        <select id="readyToStop">
          <option value="">— Select —</option>
          <option value="yes">Yes — absolutely ready to start today</option>
          <option value="thinking">Still thinking about it</option>
          <option value="spouse">Need to discuss with spouse / co-owner first</option>
          <option value="concerned">Concerned about the process</option>
        </select>
      </div>
      <div class="fl"><label>Notes on usage</label>
        <textarea id="usageNotes" placeholder="Any relevant details about usage, attempts to use, booking issues, etc..."></textarea>
      </div>
    </div>

    <div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:14px;font-weight:700;">Upcoming Payment Obligations</div>
      <div class="fl"><label>Next Mortgage Payment Due Date</label>
        <input type="text" id="nextMtgDate" placeholder="MM/DD/YYYY or Month name">
      </div>
      <div id="nextMtgAmt_row" class="fl">
        <label>Next Mortgage Payment Amount ($)</label>
        <input type="number" id="nextMtgAmt" placeholder="Auto-filled from intake" readonly style="background:var(--off);">
      </div>
      <div class="fl"><label>Next Maintenance Fee Due Date</label>
        <input type="text" id="nextMtfDate" placeholder="MM/DD/YYYY or Month name">
      </div>
      <div class="fl"><label>Next Maintenance Fee Amount ($)</label>
        <input type="number" id="nextMtfAmt" placeholder="Auto-filled from intake" readonly style="background:var(--off);">
      </div>
      <div id="paymentUrgency" style="display:none;background:var(--navy);border-radius:10px;padding:18px 20px;margin-top:6px;color:#fff;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;font-weight:600;">⏰ Payment Timeline</div>
        <div id="urgencyText" style="font-size:16px;color:rgba(255,255,255,.85);line-height:1.7;"></div>
      </div>
      <div style="margin-top:18px;background:var(--blue-pale);border:1.5px solid var(--border);border-radius:8px;padding:16px;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:10px;font-weight:600;">If Spouse on Call</div>
        <div class="chk-row" style="margin-bottom:10px;"><input type="checkbox" id="spouseAgrees"><label for="spouseAgrees" style="font-size:15px;color:var(--text);">Co-owner / spouse shares the same perspective and desire to exit</label></div>
        <div class="fl" style="margin:0;"><label>Spouse / co-owner notes</label><textarea id="spouseNotes" placeholder="Document co-owner's perspective, concerns, or agreement..."></textarea></div>
      </div>
    </div>
  </div>
  <div style="margin-top:20px;" class="fade-up">
    <button class="btn btn-gold" onclick="saveUsage()">💾 Save Usage Info</button>
    <span id="usageSaved" style="display:none;margin-left:14px;font-size:15px;color:var(--navy);font-weight:600;"></span>
  </div>
</section>

<!-- ═══ SLIDE 3 — MOTIVATION SCALE ═══ -->
<section class="slide bg-navy" id="slide-3" data-slide="3" style="background:linear-gradient(135deg,#1a3660 0%,#2a5298 100%);text-align:center;align-items:center;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 4</div>
  
  <div style="max-width:760px;margin:0 auto;width:100%;">
    <div class="slide-label" style="text-align:center;">Page 4 — Motivation Scale</div>
    <div class="slide-headline fade-up" style="text-align:center;color:#fff;">Motivation <b>Scale</b></div>
    <p class="slide-sub fade-up" style="text-align:center;margin:0 auto 28px;">"Last question before we get into the assessment — on a scale from 1 to 10, how strong is your desire to get out of this as quickly as possible?"</p>

    <div class="fade-up">
      <!-- SCALE BUTTONS -->
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:14px;" id="motivScale1_5">
        <div class="mot-btn" onclick="setMotiv(1)"><span>1</span><div>Not urgent</div></div>
        <div class="mot-btn" onclick="setMotiv(2)"><span>2</span><div>Low</div></div>
        <div class="mot-btn" onclick="setMotiv(3)"><span>3</span><div>Somewhat</div></div>
        <div class="mot-btn" onclick="setMotiv(4)"><span>4</span><div>Moderate</div></div>
        <div class="mot-btn" onclick="setMotiv(5)"><span>5</span><div>Motivated</div></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;" id="motivScale6_10">
        <div class="mot-btn" onclick="setMotiv(6)"><span>6</span><div>Clear desire</div></div>
        <div class="mot-btn" onclick="setMotiv(7)"><span>7</span><div>Strong</div></div>
        <div class="mot-btn" onclick="setMotiv(8)"><span>8</span><div>Very strong</div></div>
        <div class="mot-btn" onclick="setMotiv(9)"><span>9</span><div>Urgent</div></div>
        <div class="mot-btn hot" onclick="setMotiv(10)"><span>🔥 10</span><div>Get me out NOW</div></div>
      </div>
    </div>

    <div id="motivResult" style="display:none;margin-top:28px;" class="fade-up">
      <div style="background:rgba(255,255,255,.08);border:2px solid var(--gold);border-radius:12px;padding:26px 32px;">
        <div style="font-family:'Cormorant Garamond',serif;font-size:56px;font-weight:700;color:var(--gold);line-height:1;" id="motivNum">—</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.6);margin:8px 0 14px;"> out of 10</div>
        <div style="font-size:17px;color:rgba(255,255,255,.9);line-height:1.7;" id="motivMsg"></div>
      </div>
      <div class="fl" style="margin-top:16px;text-align:left;">
        <label style="color:rgba(255,255,255,.7);">Notes on motivation / hesitations</label>
        <textarea id="motivNotes" placeholder="Document any hesitations, specific urgency reasons, spouse disagreement, etc..."></textarea>
      </div>
      <div style="margin-top:14px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-gold" onclick="saveMotiv()">💾 Save &amp; Continue to Presentation</button>
        <button class="btn btn-outline-white" onclick="goTo(4)">Begin Presentation →</button>
      </div>
      <div id="motivSaved" style="display:none;margin-top:10px;font-size:15px;color:var(--gold2);font-weight:600;"></div>
    </div>

    <!-- QUALIFYING QUESTION -->
    <div style="margin-top:32px;background:rgba(255,255,255,.06);border:1px solid rgba(201,162,74,.3);border-radius:14px;padding:26px 30px;text-align:left;" class="fade-up">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:14px;font-weight:600;">Qualifying Question</div>
      <p style="font-family:'Cormorant Garamond',serif;font-size:21px;color:#fff;line-height:1.6;margin-bottom:18px;">If we could offer you a <strong style="color:var(--gold2);">guaranteed service and timeline, $0 down today, fair installment payments, and complimentary credit protection</strong> — would you be ready to move forward?</p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
        <button onclick="setQualifier('yes')" id="qualYes" style="background:rgba(39,174,96,.2);border:2px solid #27ae60;color:#fff;padding:14px 36px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:all .2s;">✓ YES</button>
        <button onclick="setQualifier('no')" id="qualNo" style="background:rgba(192,57,43,.15);border:2px solid var(--red);color:#fff;padding:14px 36px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:all .2s;">✗ NOT YET</button>
      </div>
      <div id="qualMsg" style="display:none;margin-top:14px;font-size:16px;color:var(--gold2);font-style:italic;text-align:center;"></div>
    </div>

    <!-- DECISION QUOTE -->
    <div style="margin-top:24px;padding:20px 24px;text-align:center;" class="fade-up">
      <p style="font-family:'Cormorant Garamond',serif;font-size:22px;color:rgba(255,255,255,.6);font-style:italic;">"Would you rather be putting those payments toward <strong style="color:var(--gold);">the problem</strong> — or toward <strong style="color:var(--gold);">the solution?</strong>"</p>
    </div>

  </div>

  <style>
  .mot-btn{background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.2);border-radius:10px;padding:14px 8px;cursor:pointer;transition:all .2s;text-align:center;}
  .mot-btn:hover,.mot-btn.selected{background:rgba(201,162,74,.25);border-color:var(--gold);}
  .mot-btn.hot{background:rgba(201,162,74,.15);border-color:rgba(201,162,74,.5);}
  .mot-btn.hot:hover,.mot-btn.hot.selected{background:var(--gold);border-color:var(--gold);}
  .mot-btn span{font-family:'Cormorant Garamond',serif;font-size:28px;color:var(--gold);font-weight:700;display:block;line-height:1;}
  .mot-btn div{font-size:11px;color:rgba(255,255,255,.5);margin-top:4px;letter-spacing:.5px;}
  .mot-btn.hot span{color:var(--navy);}
  .mot-btn.hot div{color:var(--navy);}
  .mot-btn.selected span{color:var(--navy);}
  .mot-btn.selected div{color:rgba(26,54,96,.7);}
  </style>
</section>

<!-- ═══ SLIDE 4 — INTRO ═══ -->
<section class="slide bg-white" id="slide-4" data-slide="4" style="text-align:center;align-items:center;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 5</div>
  
  <div style="width:80px;height:80px;border:3px solid var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;animation:ring 3s infinite;">
    <img src="https://alphatimeshareconsultants.com/wp-content/uploads/2026/04/Alpha-TimeShare-Consultants-logo.png" alt="ATC" style="height:52px;width:auto;border-radius:50%;object-fit:contain;" onerror="this.outerHTML='<span style=\'font-family:Cormorant Garamond,serif;font-size:24px;font-weight:700;color:var(--navy);\'>ATC</span>'">
  </div>
  <div class="slide-label" style="text-align:center;">Page 5 — We Are a Consumer Advocacy Service</div>
  <div class="slide-headline fade-up" style="text-align:center;">We Are a <b>Consumer Advocacy</b> Service</div>
  <div class="divg ctr"></div>
  <p class="slide-sub fade-up" style="text-align:center;margin:0 auto 32px;">We have worked with most major resort developers for the last 41 years. Today's conversation is designed to give you complete clarity — on what you own, what it truly costs, and what a clean, legal exit looks like.</p>

  <div class="g4 fade-up" style="max-width:920px;margin:0 auto;width:100%;">
    <div class="stat"><div class="sn">41</div><div class="sl">Years in Business</div></div>
    <div class="stat"><div class="sn">A+</div><div class="sl">BBB Rating</div></div>
    <div class="stat" style="border-top:4px solid var(--gold)"><div class="sn" style="font-size:28px;padding-top:8px;">🛡</div><div class="sl" style="font-size:12px;line-height:1.4;">Credit Protection<br>&amp; Repair<br><strong style='color:var(--navy)'>Complimentary</strong></div></div>
    <div class="stat"><div class="sn">100%</div><div class="sl">Money-Back Written Guarantee</div></div>
  </div>

</section>

<!-- ═══ SLIDE 2 — TRUST ═══ -->
<section class="slide bg-pale" id="slide-5" data-slide="5">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 6</div>
  
  <div class="slide-label">Page 6 — Trust &amp; Reputation</div>
  <div class="slide-headline fade-up">Trust &amp; <b>Reputation</b></div>
  <p class="slide-sub fade-up">41 years of verified outcomes. Nothing outsourced. Our name is on every single case.</p>
  <div class="g2 fade-up" style="margin-bottom:20px;">
    <div class="card" style="padding:20px 24px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:14px;font-weight:600;">Our Track Record</div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:15px;color:var(--text2);">Founded</span><span style="font-family:'Cormorant Garamond',serif;font-size:24px;color:var(--navy);font-weight:700;">1985</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:15px;color:var(--text2);">BBB Rating</span><span style="font-family:'Cormorant Garamond',serif;font-size:24px;color:var(--navy);font-weight:700;">A+</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:15px;color:var(--text2);">Written Guarantee</span><span style="font-family:'Cormorant Garamond',serif;font-size:24px;color:var(--navy);font-weight:700;">100%</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:15px;color:var(--text2);">Credit Protection</span><span style="font-size:15px;color:#27ae60;font-weight:700;">Complimentary</span></div>
      </div>
    </div>
    <div class="card" style="padding:20px 24px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:14px;font-weight:600;">Why It Matters</div>
      <p style="font-size:16px;color:var(--text2);line-height:1.75;">Before this was an industry, we were already doing it. Our reputation is independently verified — not paid for. Every case is handled in-house. When you call us, you reach the people working your file.</p>
    </div>
  </div>
  <div class="g2 fade-up" style="margin-top:0;">
    <a href="https://www.google.com/search?q=alpha+timeshare+consultants+reviews" class="tl-btn">
      <div class="tl-ic">⭐</div>
      <div><div class="tl-tit">41 Years of 5-Star Reviews</div><div class="tl-sub">Live Google reputation and verified client feedback → View Reviews</div></div>
    </a>
    <a href="https://alphatimeshareconsultants.com/" class="tl-btn">
      <div class="tl-ic">▶</div>
      <div><div class="tl-tit">Alpha Team Video Testimonials</div><div class="tl-sub">Real client experiences and recorded outcomes → Watch Testimonials</div></div>
    </a>
  </div>
</section>

<!-- ═══ SLIDE 3 — THE PROBLEM ═══ -->
<section class="slide" id="slide-6" data-slide="6" style="background:linear-gradient(160deg,#0d0d0d 0%,#1a0a0a 60%,#0d0d0d 100%);color:#fff;padding-bottom:80px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 7</div>
  
  <div class="slide-label" style="color:rgba(255,100,80,.8);">Page 7 — Walking Away Does Not End It</div>
  <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(36px,5vw,62px);font-weight:300;line-height:1.08;color:#fff;margin-bottom:8px;" class="fade-up">
    Walking Away<br><strong style="color:#e05050;">Does Not End It.</strong><br><span style="font-weight:300;font-size:clamp(24px,3vw,40px);color:rgba(255,255,255,.55);">It Escalates It.</span>
  </div>
  <div style="width:70px;height:3px;background:linear-gradient(90deg,#e05050,transparent);margin:16px 0 28px;" class="fade-up"></div>

  <div class="g2 fade-up" style="align-items:start;gap:24px;">

    <!-- LEFT: If You Stop Paying -->
    <div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,100,80,.8);margin-bottom:16px;font-weight:700;">If You Stop Paying Without Protection</div>
      <div style="display:flex;flex-direction:column;gap:0;">
        <div style="display:flex;gap:14px;align-items:stretch;padding:14px 16px;border-left:3px solid #e05050;margin-bottom:3px;background:rgba(224,80,80,.08);">
          <span style="font-size:18px;flex-shrink:0;margin-top:2px;">📬</span>
          <span style="font-size:16px;color:rgba(255,255,255,.85);line-height:1.5;">Collection letters and escalating notices begin</span>
        </div>
        <div style="display:flex;gap:14px;align-items:stretch;padding:14px 16px;border-left:3px solid #e05050;margin-bottom:3px;background:rgba(224,80,80,.1);">
          <span style="font-size:18px;flex-shrink:0;margin-top:2px;">🏦</span>
          <span style="font-size:16px;color:rgba(255,255,255,.85);line-height:1.5;">Account sent to third-party collections</span>
        </div>
        <div style="display:flex;gap:14px;align-items:stretch;padding:14px 16px;border-left:3px solid #e05050;margin-bottom:3px;background:rgba(224,80,80,.12);">
          <span style="font-size:18px;flex-shrink:0;margin-top:2px;">📉</span>
          <span style="font-size:16px;color:rgba(255,255,255,.85);line-height:1.5;">Credit score damage across all three bureaus</span>
        </div>
        <div style="display:flex;gap:14px;align-items:stretch;padding:14px 16px;border-left:3px solid #e05050;margin-bottom:3px;background:rgba(224,80,80,.15);">
          <span style="font-size:18px;flex-shrink:0;margin-top:2px;">🏠</span>
          <span style="font-size:16px;color:rgba(255,255,255,.85);line-height:1.5;">Foreclosure action on the ownership interest</span>
        </div>
        <div style="display:flex;gap:14px;align-items:stretch;padding:14px 16px;border-left:3px solid #e05050;background:rgba(224,80,80,.18);">
          <span style="font-size:18px;flex-shrink:0;margin-top:2px;">⚖️</span>
          <span style="font-size:16px;color:rgba(255,255,255,.85);line-height:1.5;">Judgment filings — wage garnishment or asset liens possible</span>
        </div>
      </div>
      <div style="background:rgba(224,80,80,.15);border-left:4px solid #e05050;padding:14px 18px;border-radius:0 8px 8px 0;margin-top:16px;">
        <p style="font-size:16px;color:rgba(255,255,255,.9);font-style:italic;line-height:1.6;">Walking away does not cancel the contract. <strong style="color:#e05050;">It escalates it.</strong></p>
      </div>
    </div>

    <!-- RIGHT: It Follows You -->
    <div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(180,140,60,.9);margin-bottom:16px;font-weight:700;">It Follows You — Even After You're Gone</div>
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:22px;margin-bottom:14px;">
        <p style="font-size:17px;color:rgba(255,255,255,.82);line-height:1.8;">Because timeshares are classified as <strong style="color:rgba(255,220,100,.9);">real property</strong>, they carry property tax obligations and must be legally attached to your estate.</p>
        <p style="margin-top:14px;font-size:17px;color:rgba(255,255,255,.82);line-height:1.8;">When you pass, your next of kin, executor, or heirs may be legally required to use estate funds — or liquidate other assets — just to remove the ownership from the deed.</p>
      </div>
      <div style="background:rgba(180,140,60,.1);border-left:4px solid rgba(201,162,74,.6);padding:14px 18px;border-radius:0 8px 8px 0;">
        <p style="font-size:16px;color:rgba(255,220,100,.9);font-style:italic;line-height:1.6;">What was meant to be a vacation benefit can become your family's financial burden — whether they want it or not.</p>
      </div>
    </div>

  </div>
</section>

<!-- ═══ SLIDE 4 — COMMITMENTS ═══ -->
<section class="slide bg-off" id="slide-7" data-slide="7">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 8</div>
  
  <div class="slide-label">Page 8 — Good Questions to Ask</div>
  <div class="slide-headline fade-up">Before We Continue —<br><b>Good Questions to Ask</b></div>
  <div style="max-width:820px;width:100%;margin:0 auto;" class="fade-up">
    <div class="faq" onclick="toggleFaq(this)">
      <div class="faq-q">Are you attorneys? <span class="faq-arr">▾</span></div>
      <div class="faq-a"><p>No — we're a consumer advocacy company specializing in timeshare cancellation. Our approach allows us to provide <strong>written guarantees</strong> that attorneys legally cannot offer. If your case ever requires legal intervention, we have attorneys on retainer who step in at <strong>no additional cost.</strong></p></div>
    </div>
    <div class="faq" onclick="toggleFaq(this)">
      <div class="faq-q">Do I have to pay anything upfront? <span class="faq-arr">▾</span></div>
      <div class="faq-a"><p>No. You can get started with $0 down. Your first payment isn't due until your second month of service. If after reviewing your case we feel we cannot help you, we'll tell you — and you owe us nothing.</p></div>
    </div>
    <div class="faq" onclick="toggleFaq(this)">
      <div class="faq-q">What is the 100% money-back guarantee? <span class="faq-arr">▾</span></div>
      <div class="faq-a"><p>It is written directly into your contract. If we do not obtain a written release of your timeshare obligations within the Guarantee Term, you receive a full refund of your service fee. No questions. No exceptions. Average resolution is <strong>6–18 months</strong> — the guarantee exists as your contractual safety net.</p>
      <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCALHAqEDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAwIB/8QAXBAAAQQCAQMCAwUDBgkHBgoLAQACAwQFEQYHEiETMSJBUQgUMmFxFSOBFhhCkZXRCSQzUlVigqGxFzhDcpKzwSU0N3R1sjY5RFNjc6Lh8PE1RlRXg6O0wsPE0v/EABsBAQACAwEBAAAAAAAAAAAAAAADBQIEBgEH/8QANhEBAAEDAgQDBgYCAgIDAAAAAAECAxEEIQUSMUETUWEGInGBofAUMpGxwdEVQjPhUvEkYqL/2gAMAwEAAhEDEQA/AOy0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFBOu/MjwjpzfykEgZfmArUt636r/Y6P+aO53+yt3065JBy7hWL5BXLf8bgDpGg/gkHh7f4OBCz8Ork5+yOLtM1+H36pAiIsEgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi1HMs3Bxzi+QzdnXZUhc8NJ13O/ot/idD+K9iJqnEPKqopiZns51+0PJf6kdXsV07wszQykD6rzssbK5vc9x18msAH67C2X2TM1bwWez3TXMnssVZ3ywNJ8dzT2yAfkdNcNfmVlfZoxYjHIup3IZWsdO6Ronl8AM33yv/Teh/sla7r/Tl4V1YwPUrFNJgsva2yWezntGiN+3xR+P9kq0qxOdNHaPr1UtMzGNXPef/wA9HSyLHxdyvkcdXvVJBJBYibJG4fNpGwshVS7iciIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCKcw5l/Jq1XgnweUu/eniOu6oxjw95/o6LgQfH01+aqzqJ1N5g/MV+NQ8Up0rFosMMV3tsPcXO00632tO/rvStCxRHJb2VsOdqKsw06Ug/oyAhz5B+jwxv5GM/VV9jON5C71LyPOLm3MrY8ywBw2GWQ0sLPz7S139YW9p67NuJquRnEZ+fZV6qnUXJim3VMRM4+XdH+d3uf4fAS4Pn0EU3HciWxPt4xjGPhIcHADQA9x5a4eRsArAkxPUXqhw6ri8dUqUeL02MjqOuuHqzemO0OL9Ek/UtAHuFY/Kvv/JuNX+PcqjbUi74ib1ZvcISdOYXtP8ARPsT8vy917VMrlMLg6WGwNZjKNKl3ixaH7yWJmgXhvy2T42o/wDKWotR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EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXjdtVqNOa7cnir1oI3STSyODWRsaNlxJ8AAedoPZFyzyT7VGazvILOC6M9PrnKn1z8V6WKVzHDeu4RMAcGe2nOc39F41PtNdROI3Ih1d6S3cVj5ZQz7/Shliazx8mydzZD+jx/FB1Yi8Mfbr36Fe9Uk9SvYibLE/Wu5rhsH+or3QEREBEUP6l9S+GdOIsfJzDLOx7cjK6KsRWll73N1v8DTrWx7oJgi/GOD2B7TsOGwqVz/AFC6sVPtFUuG4/gjbPC5XxNly33KckNcwF7/AFg70x2nY0R8vzCC60UK6581k6e9Ks7y2CBk9mlAPu8b/wAJle4MZv6gFwJH0C536R8S+0D1A4vj+pf/ACx2aE92f7xWxcrX/d3xNk0e9rfgaDo6aGOGteRs6Dr1FSnKuoXVmh9oXG8O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0E00ry/trOl/yZeGgvc2H4O4tHcRs++1P0QVNyXptlrOWdkqTqr4hmI7bKcdp9b9xHV9GNoe1p7XNcS7Q8aPusr/AJNJmVuQPx/3PGWrvG/2RjXMmkmdTleZpJnmRw7nd0srXF34j2AnyrPRBUD+m+SHH8fHUwmLjtQXab7VezlZp2WK1UOdHE1zmaYBIQQ0NDdbJ8la27wHM3OV4vFyyMH35l2zySSJjvRFeeaN4rxvIHcXen2H59pefGwrxRBVPWmTL4rN47L4OtFduQYa/UpVHwyv1Yl9HsezsY5pdphZpxb4f7gdy8Yeld6vxTL0a81Jt2bjlLB0Hu38EULD3tc7Wx3ve7et+AD+StxEFWQ9Pczksy7JZtuJiiny1OzLUruc5ra1WFwii2WjucJSHewGh/BfuO4DyGjmKttlmjt0GaEkzJHB1ee7YbMyRg7fi7QwN+StJEFMYvpflqfGMVDHjMe3J4ySi0iXKTTx2oYHh7owXM1E0va1wAadkDu9lKMXxDO1unPKMXJaoMz+cfen9aHuELJJgWx+SN6aOwE6+Sn6IKmyvA+TWmXqtWviK9bLccgwT3PsOc7GxtMolMY7NSdzZAR+H4mDfgBWrVhZWqxV499kTAxuz50BoL0RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBHuonEMZznilnjeYmuw07DmOe+nOYpQWODhpw9vICqn+av06/0ty/+2Hf3K90QUR/NX6df6W5f/bDv7k/mr9Ov9Lcv/th39yvdEFEfzV+nX+luX/2w7+5P5q/Tr/S3L/7Yd/cr3RBRH81fp1/pbl/9sO/uT+av06/0ty/+2Hf3K90QUR/NX6df6W5f/bDv7k/mr9Ov9Lcv/th39yvdEFEfzV+nX+luX/2w7+5P5q/Tr/S3L/7Yd/cr3RBRH81fp1/pbl/9sO/uT+av06/0ty/+2Hf3K90QUR/NX6df6W5f/bDv7k/mr9Ov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tCtJHCYJpqUL4pbURrel6U3xdrwHnvaSCRoAfMnSs6U8ikwdzGWeRYxwm4z/ACfjcyi8djAT2yEGTydHyPbf0+dwIgrXN8A5HZv5u3jeQ06n7VZj3SMdWeQ59Zw743EPB9KRgLSB5+L314ONgumWaxmUx9sZnFujpXsnabFHRewEXNntHx+A0uP6jX6q00QVXg+mebxFarDFl8PaazANw9mO1Qc+OYMkc4Ht7/wkPIcDv8iFLeAcYm4rgreOjtMeyWzJNWgBe6Go1wGomdxLuwEE6347iBoaUnRBVnFumeawtDitV+cx85wNm9OXCo9vrfefV8fjPb2+qfrvQ9l+cS6bcm4vPQlxPKKLN49lDI99FzvUZG97mSRfH8DwJHD4u4ex140rURBjUW3mmcXZK7x6p9D0mFpEehoO2Tt297I0PbwslEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARF52ZmwR97gSN68LC5cptUTXXOIh7ETM4h6L8DmlxaHAke4XlFagkaXNePA3o+CtBNZeLLpWPIcTvwqfiHG7WlpoqoxVFXlPZPa09VyZjo392w2tXdKfJHsPqV8ULkdtm2kB492rQX78lprGv0A36fMrANkwEyNl9PQJJ3rQ+apb3tNVGq5rcZt46d/i2qNDmjfq32RzPoXGxxacxp+P81sjbrir96MgEWt7UDlsxdxDpWd3cG67vPcRsD9dLyfkGOhEX3phj8uDe8a8eCVqWPaXUW67lVcZz0jyn+mzPDaaopiJ+KaYrLx3rUkIb2a8s38wtlLIyJhfI9rGj3LjoKuqlt9WyyxEQXMO/f3/ACTLZW1k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ERAREQEREBERAWg5zg589iY61aWOOWOYSNL969iD7fkVv0UV+zRftzbr6Szt1zbqiqnrCDUOnGNZVkF+zLasOYQ0g9jGEjwQB76/MqnLhlhmfXmHbLG8xvb9HA6I/rXTi0dXieBr52fNMosdcmeXlzz3Brj7loPgE/VUHEPZ+3epopsRFOOvw/mVlpeJ1W5qm5vno58y9TK4j7u+5Wnqeu31Ye8aJAPv+R/3+Vr4r90uAZM7Q2Bv5b9z+v5roLqlxh3JuOmKsxpvV3epX2QN/Vuz9R/vAWs6b9PK2EgF3LxR2L7267DpzIQfcfmfqVUXfZ27Gp8K3+XGcz99VhRxW3Nnnrj3vJVFOW09na5w1oDQHyC2des2Q/H8R9/JUrz3CLlPOiHF1ZJqlh24nBpLYvPkOPyA+p+X5qbs4jjBgY8aWfvGfF64Hx9593f/AHfRadjgGqvV3KJjHL9Z9ElziVmimmqN8/RWlCkHSMjiiBe93a0AeSSVtH1ZaspisROikb7tcPKlnFeN2KOUfYutYRD4hIOw4n+l+Xj6/VSTIUKl+Psswtfr2PsR+hWzpvZq7e0811zy152if5a93itNF3FO9KOcewFW3hxNZa4SSOJa5p0QPb/wK2OGwX7OvunEwkZ2kN2NELcQRMghZDG3tYxoa0fkF9rqNPwbTWqbczT71ON/X+VTc1l2uaoztPYREVs1BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==" alt="Certificate of Guarantee" style="width:100%;max-width:480px;display:block;margin:14px auto 0;border-radius:6px;box-shadow:0 4px 20px rgba(0,0,0,.12);">
      </div>
    </div>
    <div class="faq" onclick="toggleFaq(this)">
      <div class="faq-q">Is there any possibility of getting money back? <span class="faq-arr">▾</span></div>
      <div class="faq-a"><p>In some cases, yes. Reimbursement is calculated from real past results based on the strength of your file. We never promise it — but we pursue it on every eligible case. If obtained, the payment comes directly from the developer to you. We take zero commissions.</p></div>
    </div>
    <div class="faq" onclick="toggleFaq(this)">
      <div class="faq-q">What happens to my credit during the process? <span class="faq-arr">▾</span></div>
      <div class="faq-a"><p>Our complimentary in-house Credit Solutions Team works across all three bureaus — Equifax, Experian, and TransUnion — to address any timeshare-related derogatory marks. Any credit impact is typically temporary and repairable. This is included with your service, never an upsell.</p></div>
    </div>
    <div class="faq" onclick="toggleFaq(this)">
      <div class="faq-q">What makes Alpha different from other exit companies? <span class="faq-arr">▾</span></div>
      <div class="faq-a"><p><strong>Group filing method</strong> — we are the only firm that consolidates clients from the same developer into pattern-based collective filings, creating leverage no individual case can generate. <strong>Nothing is outsourced.</strong> <strong>Written 100% money-back guarantee</strong> — something most firms legally cannot offer. <strong>41 years</strong> working with most major resort developers.</p></div>
    </div>
  </div>
</section>

<!-- ═══ SLIDE 5 — CONSUMER RIGHTS ═══ -->
<section class="slide bg-pale" id="slide-8" data-slide="8">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 9</div>
  
  <div class="slide-label">Page 9 — Not Every Case Qualifies</div>
  <div class="slide-headline fade-up">Not Every Case <b>Qualifies</b></div>
  <p class="slide-sub fade-up">Here is how we build a case — and why the contract itself is not what we challenge.</p>
  <div class="g2 fade-up" style="align-items:start;">
    <div style="background:var(--navy);border-radius:12px;padding:24px 26px;color:#fff;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:14px;font-weight:700;">The Contract Is Iron-Clad — That Is Not Our Strategy</div>
      <p style="font-size:19px;color:rgba(255,255,255,.9);line-height:1.85;font-weight:400;">The contract you signed is legally binding. <strong style="color:var(--gold2);">We don't dispute the contract.</strong> What we do is identify <strong style="color:var(--gold2);">violations that occurred before, during, and after the sale</strong> — violations that carry real financial penalties and create the pressure required for a favorable resolution.</p>
      <p style="margin-top:14px;font-size:18px;color:rgba(255,255,255,.8);line-height:1.8;">We only accept cases we are confident we can win. Not all cases qualify — and that is exactly what protects the integrity of our results.</p>
      <div style="margin-top:18px;padding:14px 18px;background:rgba(201,162,74,.12);border:1px solid rgba(201,162,74,.3);border-radius:8px;">
        <p style="font-family:'Cormorant Garamond',serif;font-size:19px;color:var(--gold2);font-style:italic;line-height:1.6;">"If our risk management team feels confident enough to take your case — <strong>you are guaranteed to get out.</strong>"</p>
      </div>
    </div>
    <div style="background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:22px 24px;box-shadow:0 2px 10px rgba(26,54,96,.07);">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:16px;font-weight:700;">What Forces a Developer to Settle</div>
      <p style="font-size:16px;color:var(--text2);line-height:1.7;margin-bottom:16px;">Developers only resolve cases favorably when faced with <strong style="color:var(--navy);">documented violations that carry mandatory fines</strong> under federal and state consumer protection law:</p>
      <div class="lf" style="margin-bottom:7px;"><div class="lf-tag">RESPA</div><div class="lf-desc">Real estate settlement transparency violations</div></div>
      <div class="lf" style="margin-bottom:7px;"><div class="lf-tag">TILA</div><div class="lf-desc">Truth in Lending — financing disclosure failures</div></div>
      <div class="lf" style="margin-bottom:7px;"><div class="lf-tag">FTC Act</div><div class="lf-desc">Unfair and deceptive trade practices</div></div>
      <div class="lf" style="margin-bottom:7px;"><div class="lf-tag">UDAP</div><div class="lf-desc">State consumer protection enforcement</div></div>
      <div class="lf" style="margin-bottom:0;"><div class="lf-tag">State Law</div><div class="lf-desc">Timeshare-specific rescission &amp; disclosure violations</div></div>
      <div style="margin-top:16px;background:var(--blue-pale);border-radius:8px;padding:12px 16px;font-size:15px;color:var(--text2);line-height:1.65;">We are about to identify these violations together using the <strong>Consumer Bill of Rights</strong> — established by President Kennedy on March 15, 1962.</div>
    </div>
  </div>
</section>
<section class="slide bg-white" id="slide-9" data-slide="9" style="padding-bottom:100px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 10</div>
  
  <div class="slide-label">Page 10 — Consumer Bill of Rights Assessment</div>
  <div class="slide-headline fade-up">Consumer Bill of Rights<br><b>Assessment</b></div>

    <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:8px;padding:14px 20px;margin-bottom:20px;font-size:16px;color:var(--text2);" class="fade-up">
    <strong style="color:var(--navy);">"Before I send your file over, I need to ask some specific questions.</strong> If you're unsure about anything, just say so — we never build a case on anything inaccurate."
  </div>

  <div style="display:flex;gap:14px;margin-bottom:18px;flex-wrap:wrap;" class="fade-up">
    <button class="btn btn-gold" onclick="saveRights()" style="font-size:14px;padding:10px 22px;">💾 Save Assessment Notes</button>
    <div id="rightsSaveMsg" style="display:none;font-size:15px;color:var(--navy);font-weight:600;padding:10px 0;"></div>
  </div>

  <div class="fade-up" id="rightsAccordion">

        <!-- RIGHT 1: SAFETY -->
        <div class="rb" onclick="toggleR(this)" style="margin-bottom:10px;">
          <div class="rh"><div class="r-num">1</div><div class="r-title">Right to Safety — Financial &amp; Physical</div><div class="r-arrow">▾</div></div>
          <div class="rbody"><div class="rinner">
            <div style="background:var(--navy);border-radius:6px;padding:12px 16px;margin-bottom:14px;font-size:15px;color:rgba(255,255,255,.88);line-height:1.6;font-style:italic;">"The Right to Safety — protection against marketing of products hazardous to your health, life, or <strong style="color:var(--gold);">financial wellbeing.</strong>"</div>
            <div class="chk-grp">
              <div class="chk-row"><input type="checkbox" id="r1a"><label for="r1a">Health issues prevent me from traveling or using this ownership</label></div>
              <div class="chk-row" id="r1med_row" style="display:none;padding-left:24px;">
                <label for="r1_med" style="font-size:14px;color:var(--muted);text-transform:none;letter-spacing:0;margin-bottom:0;white-space:nowrap;margin-right:10px;">Documentation available?</label>
                <select id="r1_med" style="width:auto;font-size:14px;padding:6px 10px;">
                  <option value="">— Select —</option><option>Yes — available</option><option>Partially available</option><option>No — not available</option>
                </select>
              </div>
              <div class="chk-row"><input type="checkbox" id="r1b"><label for="r1b">I am getting older and no longer want or can carry this obligation</label></div>
              <div class="chk-row"><input type="checkbox" id="r1c"><label for="r1c">Death or illness of a spouse or co-owner has changed our situation</label></div>
              <div class="chk-row"><input type="checkbox" id="r1d"><label for="r1d">Divorce or separation — this ownership is now a disputed asset</label></div>
              <div class="chk-row"><input type="checkbox" id="r1e"><label for="r1e">I am concerned about this passing to my children / estate after I'm gone</label></div>
              <div class="chk-row"><input type="checkbox" id="r1f"><label for="r1f">I experienced a significant loss of income or financial hardship since signing</label></div>
              <div class="chk-row"><input type="checkbox" id="r1g"><label for="r1g">The presentation used intimidation or high-pressure tactics — I did not feel safe saying no</label></div>
            </div>
            <div class="fl"><label>📝 Notes — Right to Safety</label><textarea id="r1_notes" placeholder="Document exact answers — medical details, financial hardship, emotional pressure..."></textarea></div>
          </div></div>
        </div>

        <!-- RIGHT 2: BE HEARD -->
        <div class="rb" onclick="toggleR(this)" style="margin-bottom:10px;">
          <div class="rh"><div class="r-num">2</div><div class="r-title">Right to Be Heard</div><div class="r-arrow">▾</div></div>
          <div class="rbody"><div class="rinner">
            <div style="background:var(--navy);border-radius:6px;padding:12px 16px;margin-bottom:14px;font-size:15px;color:rgba(255,255,255,.88);line-height:1.6;font-style:italic;">"Consumers have the right to voice concerns and have them properly addressed. <strong style="color:var(--gold);">Failure to do so is a direct violation.</strong>"</div>
            <div class="chk-grp">
              <div class="chk-row"><input type="checkbox" id="r2a"><label for="r2a">I reached out to the resort with my concerns</label></div>
              <div class="chk-row"><input type="checkbox" id="r2b"><label for="r2b">My concerns were not addressed in a timely or meaningful manner</label></div>
              <div class="chk-row"><input type="checkbox" id="r2c"><label for="r2c">The resort did not provide a clear process or mechanism for resolving my issues</label></div>
              <div class="chk-row"><input type="checkbox" id="r2d"><label for="r2d">My questions were dismissed, deflected, or transferred without resolution</label></div>
            </div>
            <div class="fl" style="margin-bottom:10px;"><label>Resort's response when contacted</label><input type="text" id="r2_resort_said" placeholder="Document their exact words or response..."></div>
            <div class="fl"><label>📝 Notes — Right to Be Heard</label><textarea id="r2_notes" placeholder="Dates of contact, who they spoke to, what was said..."></textarea></div>
          </div></div>
        </div>

        <!-- RIGHT 3: CHOOSE -->
        <div class="rb" onclick="toggleR(this)" style="margin-bottom:10px;">
          <div class="rh"><div class="r-num">3</div><div class="r-title">Right to Choose</div><div class="r-arrow">▾</div></div>
          <div class="rbody"><div class="rinner">
            <div style="background:var(--navy);border-radius:6px;padding:12px 16px;margin-bottom:14px;font-size:15px;color:rgba(255,255,255,.88);line-height:1.6;font-style:italic;">"You have the right to stop paying for something that no longer meets your needs. <strong style="color:var(--gold);">Restrictions that prevent practical use are a direct violation.</strong>"</div>
            <div class="chk-grp">
              <div class="chk-row"><input type="checkbox" id="r3a"><label for="r3a">Availability is restricted — blackout dates prevent use when I want</label></div>
              <div class="chk-row"><input type="checkbox" id="r3b"><label for="r3b">Limited locations — I cannot get to resorts convenient to me</label></div>
              <div class="chk-row"><input type="checkbox" id="r3c"><label for="r3c">I was told owners have priority access and better privileges — that was not true</label></div>
              <div class="chk-row"><input type="checkbox" id="r3d"><label for="r3d">Non-owners can book the same dates I cannot get as an owner</label></div>
              <div class="chk-row"><input type="checkbox" id="r3e"><label for="r3e">I was offered gifts contingent on purchasing — I felt obligated to stay</label></div>
              <div class="chk-row"><input type="checkbox" id="r3f"><label for="r3f">Multiple salespeople were used — I felt trapped and unable to leave</label></div>
              <div class="chk-row"><input type="checkbox" id="r3g"><label for="r3g">I was pressured to sign before I had a chance to read the contract</label></div>
              <div class="chk-row"><input type="checkbox" id="r3h"><label for="r3h">The presentation ran far longer than the 60–90 minutes I was told</label></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">
              <div class="fl" style="margin:0;"><label>Actual presentation length</label><input type="text" id="r3_prestime" placeholder="e.g. 4–5 hours"></div>
              <div class="fl" style="margin:0;"><label>Usage frequency?</label><select id="r3_freq"><option value="">— Select —</option><option>Never used</option><option>Used 1–2 times total</option><option>Rarely — less than once/year</option><option>Sometimes</option></select></div>
            </div>
            <div class="fl"><label>📝 Notes — Right to Choose</label><textarea id="r3_notes" placeholder="Booking attempts, denied reservations, sales room details..."></textarea></div>
          </div></div>
        </div>

        <!-- RIGHT 4: BE INFORMED -->
        <div class="rb" onclick="toggleR(this)" style="margin-bottom:10px;">
          <div class="rh"><div class="r-num">4</div><div class="r-title">Right to Be Informed</div><div class="r-arrow">▾</div></div>
          <div class="rbody"><div class="rinner">
            <div style="background:var(--navy);border-radius:6px;padding:12px 16px;margin-bottom:14px;font-size:15px;color:rgba(255,255,255,.88);line-height:1.6;font-style:italic;">"You have the right to receive sufficient information to make a fully informed decision. <strong style="color:var(--gold);">Failing to provide it is a direct violation.</strong>"</div>
            <div class="chk-grp">
              <div class="chk-row"><input type="checkbox" id="r4a"><label for="r4a">I was misled or lied to during the sales presentation</label></div>
              <div class="chk-row"><input type="checkbox" id="r4b"><label for="r4b">I was told it was an investment that would appreciate in value</label></div>
              <div class="chk-row"><input type="checkbox" id="r4c"><label for="r4c">I was pressured to sign on the spot — I felt I had no choice</label></div>
              <div class="chk-row"><input type="checkbox" id="r4d"><label for="r4d">I was not told I could cancel within the rescission period (3–10 days)</label></div>
              <div class="chk-row"><input type="checkbox" id="r4e"><label for="r4e">I did not know the contract was perpetual — no end date</label></div>
              <div class="chk-row"><input type="checkbox" id="r4f"><label for="r4f">I was not told it has little to no resale value</label></div>
              <div class="chk-row"><input type="checkbox" id="r4g"><label for="r4g">The true long-term cost of ownership was never shown to me</label></div>
              <div class="chk-row"><input type="checkbox" id="r4h"><label for="r4h">Maintenance fees would increase 6–12% annually — never disclosed</label></div>
              <div class="chk-row"><input type="checkbox" id="r4i"><label for="r4i">The contract is perpetual — my children or heirs would inherit it unwillingly</label></div>
              <div class="chk-row"><input type="checkbox" id="r4j"><label for="r4j">The salesperson was a 1099 contractor earning commission — never disclosed</label></div>
              <div class="chk-row"><input type="checkbox" id="r4k"><label for="r4k">Resort management or quality has declined significantly since purchase</label></div>
              <div class="chk-row"><input type="checkbox" id="r4l"><label for="r4l">Oral promises were made that did not appear in the contract</label></div>
            </div>
            <div class="fl"><label>📝 Notes — Right to Be Informed</label><textarea id="r4_notes" placeholder="What were they told? What promises were made? What was NOT disclosed?"></textarea></div>
            <input type="hidden" id="r4_shown" value="">
            <input type="hidden" id="r4_wouldsign" value="">
          </div></div>
        </div>

</div><!-- end accordion -->

  <div style="margin-top:16px;font-size:13px;color:var(--muted);" class="fade-up">Reference: <a href="https://www.mass.gov/info-details/consumer-bill-of-rights" style="color:var(--navy2);">mass.gov — Consumer Bill of Rights</a> — President Kennedy, March 15, 1962</div>
</section>
<section class="slide bg-pale" id="slide-10" data-slide="10" style="padding-top:90px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 11</div>
  
  <div class="slide-label">Page 11 — True Cost of Ownership</div>
  <div class="slide-headline fade-up">True Cost of <b>Ownership</b></div>
  <p class="slide-sub fade-up">See exactly what staying truly costs — and what freedom is actually worth.</p>
  <div class="g2 fade-up" style="align-items:start;">
    <div class="card card-top">
      <div class="ch ch-gold">Your Numbers</div>
      <div class="fl"><label>Annual Maintenance Fee ($)</label><input type="number" id="c_mf" value="900" oninput="syncFromCalc()"></div>
      <div class="fl"><label>Monthly Mortgage Payment ($)</label><input type="number" id="c_mtg" value="600" oninput="syncFromCalc()"></div>
      <div class="fl"><label>Year Purchased</label><input type="number" id="c_year" value="2018" oninput="syncFromCalc()"></div>
      <div class="fl"><label>Growth Rate (%/yr)</label><input type="number" id="c_growth" value="8" oninput="syncFromCalc()"></div>
      <div class="fl"><label>Estimated Loan Payoff Year</label><input type="text" id="c_payoff" disabled></div>

    </div>
    <div>
      <!-- PROMINENT 10/20/30 TWO-COLUMN TABLE -->
      <div style="background:#fff;border:1.5px solid var(--border);border-radius:10px;overflow:hidden;box-shadow:0 4px 14px rgba(26,54,96,.1);margin-bottom:14px;">
        <div style="padding:14px 20px;background:var(--navy);display:flex;align-items:center;justify-content:space-between;">
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-weight:600;line-height:1.5;">The Total Ownership Expenses<br>You Undertook by Signing Their Contract</div>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="background:var(--blue-pale);">
            <th style="padding:10px 20px;text-align:left;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);font-weight:600;border-bottom:1px solid var(--border);">Years</th>
            <th style="padding:10px 20px;text-align:right;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);font-weight:600;border-bottom:1px solid var(--border);">Total Cost If You Stay</th>
          </tr>
          <tr>
            <td style="padding:16px 20px;font-size:18px;color:var(--text2);font-weight:600;border-bottom:1px solid var(--border);">10 Years</td>
            <td style="padding:16px 20px;text-align:right;font-family:'Cormorant Garamond',serif;font-size:30px;color:var(--navy);font-weight:700;border-bottom:1px solid var(--border);" id="y10">—</td>
          </tr>
          <tr style="background:var(--blue-pale);">
            <td style="padding:16px 20px;font-size:18px;color:var(--text2);font-weight:600;border-bottom:1px solid var(--border);">20 Years</td>
            <td style="padding:16px 20px;text-align:right;font-family:'Cormorant Garamond',serif;font-size:30px;color:var(--navy);font-weight:700;border-bottom:1px solid var(--border);" id="y20">—</td>
          </tr>
          <tr style="background:var(--navy);">
            <td style="padding:18px 20px;font-size:18px;color:rgba(255,255,255,.85);font-weight:700;">30 Years</td>
            <td style="padding:18px 20px;text-align:right;font-family:'Cormorant Garamond',serif;font-size:34px;color:var(--gold);font-weight:700;" id="y30">—</td>
          </tr>
        </table>
      </div>
      <!-- SMALL 3/5/7 -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px;">
        <div style="background:var(--off);border:1px solid var(--border);border-radius:6px;padding:10px 12px;text-align:center;">
          <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:3px;">3 Yrs</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;color:var(--text);font-weight:700;" id="y3">—</div>
        </div>
        <div style="background:var(--off);border:1px solid var(--border);border-radius:6px;padding:10px 12px;text-align:center;">
          <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:3px;">5 Yrs</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;color:var(--text);font-weight:700;" id="y5">—</div>
        </div>
        <div style="background:var(--off);border:1px solid var(--border);border-radius:6px;padding:10px 12px;text-align:center;">
          <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:3px;">7 Yrs</div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:16px;color:var(--text);font-weight:700;" id="y7">—</div>
        </div>
      </div>
      <div style="margin-top:14px;">
        <button onclick="goTo(12)" style="background:var(--gold);color:var(--navy);border:none;padding:11px 24px;border-radius:6px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;letter-spacing:1px;cursor:pointer;">Continue →</button>
      </div>
    </div>
  </div>
</section>
<section class="slide bg-white" id="slide-11" data-slide="11" style="align-items:center;text-align:center;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 12</div>
  
  <div style="max-width:720px;margin:0 auto;width:100%;">

    <div class="slide-label" style="text-align:center;color:var(--navy);">Right to Be Informed</div>
    <div class="slide-headline fade-up" style="text-align:center;">Did They <b>Show You This?</b></div>

    <!-- THE NUMBERS TABLE -->
    <div style="background:#fff;border:1.5px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:0 4px 14px rgba(26,54,96,.1);margin:20px 0 22px;" class="fade-up">
      <div style="padding:14px 20px;background:var(--navy);display:flex;align-items:center;justify-content:space-between;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);font-weight:600;">The Financial Commitment You Undertook by Signing Their Contract</div>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr style="background:var(--off);">
          <th style="padding:10px 20px;text-align:left;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);font-weight:600;border-bottom:1px solid var(--border);">Years</th>
          <th style="padding:10px 20px;text-align:right;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);font-weight:600;border-bottom:1px solid var(--border);">Total Financial Commitment</th>
        </tr>
        <tr>
          <td style="padding:16px 20px;font-size:18px;color:var(--text2);font-weight:600;border-bottom:1px solid var(--border);">10 Years</td>
          <td style="padding:16px 20px;text-align:right;font-family:'Cormorant Garamond',serif;font-size:30px;color:var(--navy);font-weight:700;border-bottom:1px solid var(--border);" id="q_y10">—</td>
        </tr>
        <tr style="background:var(--off);">
          <td style="padding:16px 20px;font-size:18px;color:var(--text2);font-weight:600;border-bottom:1px solid var(--border);">20 Years</td>
          <td style="padding:16px 20px;text-align:right;font-family:'Cormorant Garamond',serif;font-size:30px;color:var(--navy);font-weight:700;border-bottom:1px solid var(--border);" id="q_y20">—</td>
        </tr>
        <tr>
          <td style="padding:18px 20px;font-size:18px;color:var(--text2);font-weight:700;">30 Years</td>
          <td style="padding:18px 20px;text-align:right;font-family:'Cormorant Garamond',serif;font-size:34px;color:var(--navy);font-weight:700;" id="q_y30">—</td>
        </tr>
      </table>
    </div>

    <!-- THE CLOSING QUESTION — FIRST -->
    <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:12px;padding:22px 26px;margin-bottom:22px;" class="fade-up">
      <p style="font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--navy);line-height:1.55;margin-bottom:8px;text-align:left;">Did they show you this information by hand or on a screen before you signed?</p>
      <p style="font-size:15px;color:var(--muted);margin-bottom:18px;text-align:left;">If they had just followed the law and shown you the true financial commitment you were undertaking — would you have signed that contract?</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button onclick="handleWouldSign('no')" id="wsNo" style="background:var(--navy);color:#fff;border:2px solid var(--navy);padding:13px 36px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:all .2s;">No — I Would Not Have Signed</button>
        <button onclick="handleWouldSign('yes')" id="wsYes" style="background:transparent;color:var(--navy);border:2px solid var(--border);padding:13px 32px;border-radius:8px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:1px;cursor:pointer;transition:all .2s;">Yes — I Still Would Have</button>
      </div>
    </div>

    <!-- VIOLATION STATEMENT — revealed after NO in popup, but also shown here after popup closes -->
    <div id="violationStatement" style="display:none;background:var(--red);border-radius:12px;padding:22px 26px;margin-bottom:22px;position:relative;overflow:hidden;" class="fade-up">
      <div style="position:absolute;top:0;left:0;right:0;height:4px;background:rgba(255,255,255,.25);"></div>
      <p style="font-family:'Cormorant Garamond',serif;font-size:28px;color:#fff;font-weight:700;line-height:1.3;margin-bottom:12px;">
        "YOU WERE NOT GIVEN SUFFICIENT INFORMATION TO MAKE THIS FINANCIAL COMMITMENT."
      </p>
      <p style="font-size:18px;color:rgba(255,255,255,.88);line-height:1.7;">This is a <strong style="color:#fff;">documented violation</strong> of the Right to Be Informed — one of the most significant in your case file. They were required by law to show you exactly these numbers before you signed. <strong style="font-size:20px;">They did not.</strong></p>
    </div>

    <!-- CONTINUE BUTTON (shown after answering) -->
    <div id="s11NextBtn" style="display:none;" class="fade-up">
      <button onclick="goTo(12)" style="background:var(--gold);color:var(--navy);border:none;border-radius:10px;padding:13px 36px;font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;">Continue →</button>
    </div>

  </div>

  <!-- POPUP: Risk Management Team (shown when No clicked) -->
  <div id="riskPopup" style="display:none;position:fixed;inset:0;background:rgba(10,25,50,.8);backdrop-filter:blur(6px);z-index:2000;align-items:center;justify-content:center;">
    <div style="background:#fff;border-radius:16px;padding:36px;max-width:560px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.3);position:relative;max-height:90vh;overflow-y:auto;">
      <button onclick="closeRiskPopup()" style="position:absolute;top:14px;right:16px;background:none;border:none;font-size:22px;color:var(--muted);cursor:pointer;line-height:1;">✕</button>
      <div style="font-size:48px;text-align:center;margin-bottom:14px;">⚖️</div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);text-align:center;margin-bottom:10px;font-weight:600;">This Is Exactly Why We're Here</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--navy);text-align:center;font-weight:600;margin-bottom:16px;">Your Case Is Now Being Evaluated</div>
      <div style="background:var(--navy);border-radius:10px;padding:18px 20px;margin-bottom:16px;">
        <p style="font-size:16px;color:rgba(255,255,255,.88);line-height:1.75;">Our risk management team is comparing the circumstances of your case with previous <strong style="color:var(--gold2);" id="popupResort">resort</strong> owners we have helped — and identifying commonalities with current participants in our next target group filing.</p>
      </div>
      <div style="background:var(--blue-pale);border-radius:10px;padding:16px 20px;margin-bottom:20px;border:1.5px solid var(--border);">
        <p style="font-size:16px;color:var(--text2);line-height:1.75;">We have spent <strong>41 years</strong> working with most major resort developers. We know how they operate, what they respond to, and exactly what violation patterns create the pressure required for a favorable resolution. <strong style="color:var(--navy);">Not every case qualifies — but yours is being reviewed now.</strong></p>
      </div>
      <button onclick="closeRiskPopup();document.getElementById('violationStatement').style.display='block';document.getElementById('s11NextBtn').style.display='block';window.scrollTo({top:document.getElementById('violationStatement').offsetTop-80,behavior:'smooth'});" style="width:100%;background:var(--navy);color:var(--gold);border:none;border-radius:8px;padding:13px;font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;">Got It — Continue</button>
    </div>
  </div>

</section>

<section class="slide bg-navy" id="slide-12" data-slide="12">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 13</div>
  
  <div class="slide-label">Page 13 — Group Filing — While You Wait</div>
  <div class="slide-headline fade-up">Why Group Filings<br><b>Change Everything</b></div>
  <p class="slide-sub fade-up">The only firm that does this — turning individual claims into a system-level, pattern-based case.</p>
  <div class="g2 fade-up">
    <div style="display:flex;flex-direction:column;gap:13px;">
      <div class="ga"><div class="ga-ic">👥</div><div><h5>Pattern Recognition</h5><p>Multiple clients reveal repeat sales behavior. Individual cases become system-level evidence — shared contract structures create a documented pattern of conduct no resort can dismiss.</p></div></div>
      <div class="ga"><div class="ga-ic">⚡</div><div><h5>Exposure Multiplication</h5><p>When 50 contracts show the same violations simultaneously, the math forces resolution discussions. One case is isolated. A group becomes a system issue the resort cannot afford to ignore.</p></div></div>
      <div class="ga"><div class="ga-ic">⏱</div><div><h5>Timeline Advantage</h5><p>Individual cases can drag for years. Group filings typically resolve in 6–10 months because the resort is motivated to clear mass exposure quickly. Speed works entirely in your favor.</p></div></div>
      <div class="ga"><div class="ga-ic">💰</div><div><h5>Reimbursement Consideration</h5><p>Only clients inside a group filing structure typically receive reimbursement consideration. Individual cases rarely generate the collective leverage needed to create that outcome.</p></div></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div style="background:rgba(255,255,255,.06);border:1px solid rgba(201,162,74,.3);border-radius:10px;padding:28px;position:relative;">
        <div style="position:absolute;top:-8px;left:20px;font-family:'Cormorant Garamond',serif;font-size:68px;color:var(--gold);opacity:.25;line-height:1;">"</div>
        <p style="font-family:'Cormorant Garamond',serif;font-size:22px;color:rgba(255,255,255,.92);line-height:1.6;font-style:italic;">This is not individual disputes — this is documented repeat conduct. We present the math. The math changes the conversation entirely.</p>
      </div>
      <div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:24px;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;font-weight:600;">What Happens in a Group Filing</div>
        <div class="step"><div class="step-n">1</div><div class="step-t">We consolidate multiple clients from the same developer into a Scheduled Collective Filing — up to 50 claimants at a time</div></div>
        <div class="step"><div class="step-n">2</div><div class="step-t">Cases are reviewed as a behavioral pattern — not individually — creating massive documentation pressure across a single developer</div></div>
        <div class="step"><div class="step-n">3</div><div class="step-t">The resort faces thousands of combined violation exposure points in one submission — pattern recognition forces the table</div></div>
        <div class="step"><div class="step-n">4</div><div class="step-t">Resolution: a Mutual Release — your name removed from the deed, obligation fully terminated, no foreclosure on your record</div></div>
        <div class="step"><div class="step-n">5</div><div class="step-t">Reimbursement consideration is pursued for eligible group filing participants — not available through individual case representation</div></div>
      </div>
    </div>
  </div>
</section>
<section class="slide bg-pale" id="slide-13" data-slide="13" style="text-align:center;align-items:center;min-height:100vh;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 14</div>
  
  <div style="max-width:680px;margin:0 auto;width:100%;">

    <!-- ON HOLD STATE -->
    <div id="holdState">
      <div class="slide-label" style="text-align:center;">Case Evaluation in Progress</div>
      <div class="slide-headline fade-up" style="text-align:center;">Placing You on <b>Hold</b></div>
      <p class="slide-sub fade-up" style="text-align:center;margin:0 auto 28px;">Click the hold button below, then let the client read while the team evaluates.</p>
      <button onclick="startHold()" class="btn btn-navy" style="font-size:17px;padding:14px 44px;margin-bottom:28px;">
        ⏸ Place on Hold
      </button>
    </div>

    <!-- ACTIVE HOLD (shown after button click) -->
    <div id="activeHold" style="display:none;">
      <div style="font-size:80px;margin-bottom:20px;animation:hourglassSpin 2s linear infinite;display:inline-block;">⏳</div>
      <div class="slide-label" style="text-align:center;color:var(--navy);">Hold Active</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:32px;color:var(--navy);font-weight:600;margin-bottom:16px;">Please Review This Page</div>
      <div style="background:var(--navy);border-radius:12px;padding:22px 26px;margin-bottom:24px;text-align:left;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;font-weight:600;">⏳ While I Put You on a Brief Hold</div>
        <p style="font-size:17px;color:rgba(255,255,255,.88);line-height:1.75;">Our risk management team is reviewing the circumstances of your case — comparing it with previous <strong id="holdResortDisplay" style="color:var(--gold2);">resort</strong> owners we have helped, and identifying commonalities with participants in our next target group filing.</p>
        <p style="margin-top:12px;font-size:16px;color:rgba(255,255,255,.65);">Take a moment to look over the Group Filing information on the previous slide while we evaluate your file.</p>
      </div>
      <button onclick="endHold()" class="btn btn-gold" style="font-size:17px;padding:14px 44px;animation:pulseGlow 2s infinite;">
        ✓ Unhold — I'm Back
      </button>
    </div>

    <!-- DECISION (shown after unhold) -->
    <div id="decisionState" style="display:none;">
      <div class="slide-label" style="text-align:center;">Case Decision</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:36px;color:var(--navy);font-weight:600;margin-bottom:24px;">Select the Outcome</div>
      <div style="display:flex;flex-direction:column;gap:14px;text-align:left;">

        <button onclick="setDecisionHold('approved')" style="width:100%;background:#fff;border:3px solid var(--border);border-radius:14px;padding:20px 24px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:16px;" onmouseover="this.style.borderColor='#27ae60'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="width:48px;height:48px;border-radius:50%;background:rgba(39,174,96,.15);border:2px solid #27ae60;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">✓</span>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#27ae60;letter-spacing:1px;text-transform:uppercase;">✅ APPROVED — Group Filing</div>
            <div style="font-size:14px;color:var(--text2);margin-top:3px;">Case approved for next Scheduled Collective Filing.</div>
          </div>
        </button>

        <button onclick="setDecisionHold('single')" style="width:100%;background:#fff;border:3px solid var(--border);border-radius:14px;padding:20px 24px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:16px;" onmouseover="this.style.borderColor='var(--navy)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="width:48px;height:48px;border-radius:50%;background:rgba(26,54,96,.1);border:2px solid var(--navy);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">📋</span>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:var(--navy);letter-spacing:1px;text-transform:uppercase;">Single Case Submission</div>
            <div style="font-size:14px;color:var(--text2);margin-top:3px;">Case filed individually. Proceed to pricing.</div>
          </div>
        </button>

        <button onclick="setDecisionHold('insufficient')" style="width:100%;background:#fff;border:3px solid var(--border);border-radius:14px;padding:20px 24px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:16px;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="width:48px;height:48px;border-radius:50%;background:rgba(192,57,43,.1);border:2px solid var(--red);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">✗</span>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:var(--red);letter-spacing:1px;text-transform:uppercase;">Insufficient Grounds for Rescission</div>
            <div style="font-size:14px;color:var(--text2);margin-top:3px;">Case does not meet threshold at this time.</div>
          </div>
        </button>

      </div>
    </div>

  </div>
  <style>
  @keyframes hourglassSpin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}
  @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(201,162,74,.4)}50%{box-shadow:0 0 0 12px rgba(201,162,74,0)}}
  </style>
</section>


<section class="slide bg-pale" id="slide-14" data-slide="14" style="text-align:center;align-items:center;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 15</div>
  
  <div style="max-width:680px;margin:0 auto;width:100%;">
    <div style="font-size:72px;margin-bottom:20px;animation:ring 2s infinite;">🎉</div>
    <div class="slide-label" style="text-align:center;">Page 15 — Congratulations</div>
    <div class="slide-headline fade-up" style="text-align:center;">Congratulations — <b>Your First Step</b><br>to Timeshare Freedom</div>
    <div class="divg ctr"></div>
    <p style="font-size:19px;color:var(--text2);line-height:1.75;margin-bottom:28px;" class="fade-up">Your case has been reviewed and approved for participation in our next <strong style="color:var(--navy);">Scheduled Collective Filing</strong> with <strong id="approvedResort" style="color:var(--navy);">your resort</strong>. Here is what we found.</p>
    <button onclick="goTo(15)" class="btn btn-gold" style="font-size:17px;padding:14px 40px;" class="fade-up">See Your Violation Findings →</button>
  </div>
</section>
<section class="slide bg-navy" id="slide-15" data-slide="15" style="background:linear-gradient(160deg,#0f2040 0%,#1a3660 100%);padding-bottom:100px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 16</div>
  
  <div class="slide-label">Page 16 — Violation Findings</div>
  <div class="slide-headline fade-up">Your Case File:<br><b>Violations Documented</b></div>
  <p class="slide-sub fade-up">Based on your answers in the Consumer Rights Assessment, here are the documented violations we've identified.</p>

  <div style="max-width:960px;width:100%;margin:0 auto;" class="fade-up">
    <div style="display:flex;align-items:center;gap:20px;margin-bottom:28px;flex-wrap:wrap;">
      <div style="background:rgba(201,162,74,.15);border:2px solid var(--gold);border-radius:12px;padding:20px 36px;text-align:center;flex-shrink:0;">
        <div style="font-family:'Cormorant Garamond',serif;font-size:72px;color:var(--gold);font-weight:700;line-height:1;" id="violCount">—</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.6);margin-top:4px;">Violations on File</div>
      </div>
      <div style="flex:1;min-width:260px;">
        <p style="font-size:18px;color:rgba(255,255,255,.9);line-height:1.75;margin-bottom:14px;">"<strong style="color:var(--gold);">Every single item you confirmed</strong> is a documented violation of a right that was established specifically to protect you. This is the foundation of what we present to the resort."</p>
        <div style="background:rgba(201,162,74,.12);border:1px solid rgba(201,162,74,.3);border-radius:8px;padding:12px 16px;margin-bottom:14px;display:flex;align-items:center;gap:12px;">
          <div style="font-family:'Cormorant Garamond',serif;font-size:42px;color:var(--gold);font-weight:700;line-height:1;">89%</div>
          <div style="font-size:14px;color:rgba(255,255,255,.75);line-height:1.5;">Match with other <span id="viol_resort_name">resort</span> participants in our current group filing target</div>
        </div>
        <button class="btn btn-gold" onclick="revealViolations()" style="font-size:15px;">🔍 Reveal My Violations</button>
      </div>
    </div>

    <div id="violationsList" style="display:none;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:14px;font-weight:600;">Documented Violations — Case File</div>
      <div id="violationsGrid" style="display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:22px;"></div>
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(201,162,74,.2);border-radius:10px;padding:20px;margin-bottom:20px;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;font-weight:600;">Summary by Right</div>
        <div id="rightsSummary" style="display:flex;flex-direction:column;gap:8px;"></div>
      </div>
      <div style="background:rgba(201,162,74,.1);border:2px solid rgba(201,162,74,.3);border-radius:10px;padding:24px;text-align:center;">
        <p style="font-family:'Cormorant Garamond',serif;font-size:24px;color:#fff;line-height:1.5;font-style:italic;">"Knowing what you know now — seeing these violations documented in front of you — <strong style="color:var(--gold);">would you have signed that contract?"</strong></p>
        <p style="font-size:14px;color:rgba(255,255,255,.4);margin-top:10px;font-style:italic;">⚡ Pause. Let it land.</p>
      </div>
    </div>

    

  <style>
  .viol-card{background:rgba(255,255,255,.07);border:1px solid rgba(201,162,74,.25);border-radius:8px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start;}
  .viol-num{width:28px;height:28px;background:var(--gold);color:var(--navy);border-radius:50%;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .viol-right{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:1px;color:var(--gold);text-transform:uppercase;margin-bottom:3px;}
  .viol-text{font-size:14px;color:rgba(255,255,255,.85);line-height:1.5;}
  .rs-row{display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(255,255,255,.05);border-radius:6px;}
  .rs-badge{min-width:28px;height:28px;background:var(--gold);color:var(--navy);border-radius:50%;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;}
  .rs-name{font-family:'Barlow Condensed',sans-serif;font-size:13px;color:rgba(255,255,255,.7);letter-spacing:1px;flex:1;}
  .rs-count{font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--gold);font-weight:700;}
  </style>
</section>
<section class="slide bg-off" id="slide-16" data-slide="16">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 17</div>
  
  <div class="slide-label">Page 17 — What You're Paying Now</div>
  <div class="slide-headline fade-up">What You're Paying <b>Every Month</b></div>
  <p class="slide-sub fade-up">Here is exactly what is leaving your pocket — and what stops the moment you exit.</p>

  <!-- BIG TOTAL MONTHLY — HERO NUMBER -->
  <div style="background:var(--navy);border-radius:16px;padding:32px 36px;margin-bottom:24px;text-align:center;position:relative;overflow:hidden;" class="fade-up">
    <div style="position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,var(--gold),var(--gold2),var(--gold));"></div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:10px;">Total Monthly Obligation — Right Now</div>
    <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(64px,10vw,110px);font-weight:700;color:var(--gold);line-height:1;">$<span id="saveMonth">0</span></div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.4);margin-top:6px;">per month · every month · until you exit</div>
    <div style="margin-top:16px;font-family:'Cormorant Garamond',serif;font-size:26px;color:rgba(255,255,255,.7);">$<span id="saveYear">0</span> <span style="font-size:18px;color:rgba(255,255,255,.4);">per year</span></div>
  </div>

  <!-- BREAKDOWN ROW -->
  <div class="g2 fade-up" style="margin-bottom:24px;">
    <div style="background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:22px 24px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(26,54,96,.06);">
      <div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:5px;">Mortgage Payment</div>
        <div style="font-size:14px;color:var(--text2);" id="mtgLabel2">Monthly loan payment</div>
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:44px;color:var(--navy);font-weight:700;">$<span id="saveMtg">0</span></div>
    </div>
    <div style="background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:22px 24px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(26,54,96,.06);">
      <div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:5px;">Maintenance Fee</div>
        <div style="font-size:14px;color:var(--text2);">Annual fee ÷ 12 — never stops</div>
      </div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:44px;color:var(--navy);font-weight:700;">$<span id="saveMF">0</span></div>
    </div>
  </div>

  <!-- hidden sav IDs kept for JS compat -->
  <span id="sav3" style="display:none"></span><span id="sav5" style="display:none"></span><span id="sav10" style="display:none"></span>
  <!-- HOLD MESSAGE -->
  <div style="background:var(--gold-pale);border:2px solid rgba(201,162,74,.4);border-radius:12px;padding:20px 26px;margin-top:10px;" class="fade-up">
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:10px;font-weight:700;">⏳ While I Put You on a Brief Hold</div>
    <p style="font-size:17px;color:var(--text);line-height:1.7;">Our risk management team is reviewing the circumstances of your case — comparing it with previous <strong id="holdResortName" style="color:var(--navy);">resort</strong> owners we have helped, and identifying commonalities with participants in our next target group filing. Take a moment to read the next page while we evaluate your file.</p>
  </div>
</section>
<section class="slide bg-white" id="slide-17" data-slide="17" style="align-items:center;text-align:center;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 18</div>
  
  <div style="max-width:720px;width:100%;margin:0 auto;">

    <div class="slide-label" style="text-align:center;">Page 18 — Same Day Discounts</div>
    <div class="slide-headline fade-up" style="text-align:center;">Service Fee &amp;<br><b>Same Day Incentives</b></div>

    <!-- STEP 1: Enter original price -->
    <div class="fade-up" id="feeStep1">
      <p style="font-size:17px;color:var(--text2);margin-bottom:20px;line-height:1.65;">First, let's enter the service fee for your case.</p>
      <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:10px;flex-wrap:wrap;">
        <label style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);font-weight:700;margin:0;">Original Service Fee ($)</label>
        <input type="number" id="c_fee" value="" placeholder="e.g. 4800" oninput="calcFee()" style="width:180px;background:var(--off);border:2px solid var(--border);border-radius:8px;padding:12px 16px;color:var(--text);font-family:'Barlow',sans-serif;font-size:22px;font-weight:700;outline:none;text-align:center;transition:border-color .2s;" onfocus="this.style.borderColor='var(--navy)';" onblur="this.style.borderColor='var(--border)';">
      </div>
      <div id="feeEnteredDisplay" style="display:none;font-family:'Cormorant Garamond',serif;font-size:52px;color:var(--navy);font-weight:700;margin:10px 0;" ></div>
      <button id="feeStep1Btn" onclick="showSameDaySection()" style="display:none;margin-top:16px;background:var(--navy);color:var(--gold);border:none;border-radius:10px;padding:14px 36px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;" onmouseover="this.style.background='var(--navy2)'" onmouseout="this.style.background='var(--navy)'">
        <span style="margin-right:8px;">⚡</span> Same Day Discounts Available — Click Here
      </button>
    </div>

    <!-- STEP 2: The dramatic reveal — hidden until button clicked -->
    <div id="sameDaySection" style="display:none;text-align:left;" class="fade-up">

      <!-- TODAY ONLY BANNER -->
      <div style="background:var(--red);border-radius:12px;padding:14px 22px;margin-bottom:22px;text-align:center;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:rgba(255,255,255,.3);"></div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.9);font-weight:700;">⏰ Today Only — Same Day Assessment Incentives</div>
      </div>

      <!-- ① PAY IN FULL — HERO FIRST ─────────────────────────── -->
      <div style="background:linear-gradient(135deg,var(--navy),var(--navy2));border:2px solid var(--gold);border-radius:14px;padding:24px 26px;margin-bottom:14px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,var(--gold),var(--gold2),var(--gold));"></div>
        <div style="position:absolute;top:14px;right:16px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;padding:3px 12px;border-radius:20px;text-transform:uppercase;">Best Value</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:10px;">Pay in Full Today</div>
        <!-- Price waterfall: original → 20% off → final PIF -->
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:14px;">
          <span style="font-family:'Cormorant Garamond',serif;font-size:24px;color:rgba(255,255,255,.4);text-decoration:line-through;">$<span id="revRegular">0</span></span>
          <span style="font-size:13px;color:rgba(255,255,255,.4);">−20%</span>
          <span style="font-family:'Cormorant Garamond',serif;font-size:24px;color:rgba(255,255,255,.55);text-decoration:line-through;">$<span id="revDiscounted2">0</span></span>
          <span style="font-size:13px;color:var(--gold);">−$500</span>
          <span style="font-family:'Cormorant Garamond',serif;font-size:56px;color:var(--gold2);font-weight:700;line-height:1;">$<span id="payFull">—</span></span>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <span style="background:rgba(201,162,74,.2);color:var(--gold2);border:1px solid rgba(201,162,74,.4);font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:1px;padding:4px 12px;border-radius:20px;">Save $<span id="revSaved">0</span> (20% off)</span>
          <span style="background:rgba(201,162,74,.2);color:var(--gold2);border:1px solid rgba(201,162,74,.4);font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:1px;padding:4px 12px;border-radius:20px;">+ $500 Cash Discount</span>
          <span style="background:rgba(39,174,96,.2);color:#7dde9f;border:1px solid rgba(39,174,96,.4);font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:1px;padding:4px 12px;border-radius:20px;">$0 Down — Normally $<span id="revDown">0</span></span>
        </div>
        <div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(255,255,255,.1);font-size:15px;color:rgba(255,255,255,.65);">
          90 Days Same as Cash — 0% interest if paid by <strong style="color:var(--gold2);"><span id="revNinetyDay">—</span></strong>
        </div>
      </div>

      <!-- ② WHAT THEY'RE PAYING NOW ─────────────────────────── -->
      <div style="background:#fff;border:2px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:14px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;bottom:0;width:5px;background:var(--red);border-radius:3px 0 0 3px;"></div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:12px;">What You're Paying The Resort Right Now</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center;">
          <div>
            <div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Mortgage / Mo</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:32px;color:var(--navy);font-weight:700;">$<span id="priceSaveMtg">0</span></div>
          </div>
          <div>
            <div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Maint. Fee / Mo</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:32px;color:var(--navy);font-weight:700;">$<span id="priceSaveMF">0</span></div>
          </div>
          <div style="background:var(--red-bg);border-radius:8px;padding:6px;">
            <div style="font-size:12px;color:var(--red);margin-bottom:4px;font-weight:600;">Total / Mo</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:32px;color:var(--red);font-weight:700;">$<span id="priceSaveMonth">0</span></div>
          </div>
        </div>
      </div>

      <!-- ③ WHAT THEY SAVE PER YEAR ─────────────────────────── -->
      <div style="background:linear-gradient(135deg,rgba(39,174,96,.08),rgba(39,174,96,.03));border:2px solid #27ae60;border-radius:12px;padding:20px 24px;margin-bottom:14px;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#27ae60;margin-bottom:12px;">What Stops Leaving Your Pocket After Exit</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;text-align:center;">
          <div style="background:#fff;border-radius:8px;padding:14px;">
            <div style="font-size:13px;color:var(--muted);margin-bottom:6px;">Per Year Saved</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:40px;color:#27ae60;font-weight:700;">$<span id="priceSaveYear">0</span></div>
          </div>
          <div style="background:var(--navy);border-radius:8px;padding:14px;">
            <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:6px;">Alpha Fee Recovered In</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:40px;color:var(--gold);font-weight:700;"><span id="priceMonthsBack">—</span> <span style="font-size:20px;color:rgba(255,255,255,.5);">mo</span></div>
          </div>
        </div>
      </div>

      <!-- ④ CREDIT PROTECTION — FULL DETAIL ─────────────────── -->
      <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:14px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
          <span style="font-size:28px;">🛡</span>
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);font-weight:700;">Complimentary Credit Protection &amp; Repair</div>
            <div style="font-size:14px;color:var(--muted);">Included with your service — never an upsell</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:9px;margin-bottom:14px;">
          <div style="display:flex;gap:10px;align-items:flex-start;"><span style="color:#27ae60;font-weight:700;flex-shrink:0;">✓</span><span style="font-size:15px;color:var(--text2);">In-house Credit Solutions Team monitors and works across all three bureaus — Equifax, Experian, TransUnion</span></div>
          <div style="display:flex;gap:10px;align-items:flex-start;"><span style="color:#27ae60;font-weight:700;flex-shrink:0;">✓</span><span style="font-size:15px;color:var(--text2);">Any timeshare-related derogatory marks, late payments, or collections addressed on your behalf</span></div>
          <div style="display:flex;gap:10px;align-items:flex-start;"><span style="color:#27ae60;font-weight:700;flex-shrink:0;">✓</span><span style="font-size:15px;color:var(--text2);">Credit impact during the process is typically temporary — our team works to restore your score throughout</span></div>
          <div style="display:flex;gap:10px;align-items:flex-start;"><span style="color:#27ae60;font-weight:700;flex-shrink:0;">✓</span><span style="font-size:15px;color:var(--text2);">We pursue a clean written release — not managed foreclosure — so there is no foreclosure entry on your credit file</span></div>
          <div style="display:flex;gap:10px;align-items:flex-start;"><span style="color:var(--muted);font-size:13px;flex-shrink:0;">*</span><span style="font-size:14px;color:var(--muted);">Optional continuous monitoring through the platform is available for $19.99/mo — Alpha does not benefit from this.</span></div>
        </div>
      </div>

      <!-- ⑤ FINANCING — COLLAPSED BY DEFAULT ──────────────────── -->
      <div style="border:1.5px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:20px;">
        <button onclick="toggleFinancing()" style="width:100%;background:var(--off);border:none;padding:14px 20px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:var(--navy);font-weight:700;">
          <span>Financing Available — Ask Me About Monthly Payment Options</span>
          <span id="finArrow" style="color:var(--gold);font-size:18px;transition:transform .3s;">▾</span>
        </button>
        <div id="financingPanel" style="display:none;padding:18px 20px;background:#fff;border-top:1px solid var(--border);">
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:14px;text-align:center;">
            <div style="background:var(--off);border-radius:8px;padding:14px;">
              <div style="font-size:12px;color:var(--muted);margin-bottom:6px;">Monthly Payment</div>
              <div style="font-family:'Cormorant Garamond',serif;font-size:32px;color:var(--navy);font-weight:700;">$<span id="mPay">—</span><span style="font-size:15px;color:var(--muted);">/mo</span></div>
            </div>
            <div style="background:var(--off);border-radius:8px;padding:14px;">
              <div style="font-size:12px;color:var(--muted);margin-bottom:6px;">Down Payment</div>
              <div style="font-family:'Cormorant Garamond',serif;font-size:32px;color:#27ae60;font-weight:700;">$0</div>
              <div style="font-size:12px;color:var(--muted);margin-top:2px;">Waived today</div>
            </div>
            <div style="background:var(--off);border-radius:8px;padding:14px;">
              <div style="font-size:12px;color:var(--muted);margin-bottom:6px;">First Payment</div>
              <div style="font-family:'Cormorant Garamond',serif;font-size:18px;color:var(--navy);font-weight:700;" id="revFirstPay">—</div>
              <div style="font-size:12px;color:var(--muted);margin-top:2px;">30 days from today</div>
            </div>
          </div>
          <div style="background:var(--gold-pale);border-radius:8px;padding:12px 16px;font-size:14px;color:var(--text2);">
            <strong>90 Days Same as Cash</strong> — 0% interest if paid in full by <strong id="revFirstPay2">—</strong>. After 90 days, 21% APR applies on remaining balance.
          </div>
        </div>
      </div>

      <!-- QUALIFIER REMINDER -->
      <div id="qualReminder" style="display:none;background:rgba(39,174,96,.1);border:2px solid #27ae60;border-radius:10px;padding:16px 22px;margin-bottom:20px;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#27ae60;margin-bottom:8px;font-weight:700;">✓ You Said YES Earlier Today</div>
        <p style="font-size:16px;color:var(--text);line-height:1.65;">If we could offer a <strong>guaranteed service and timeline, $0 down today, fair installment payments, and complimentary credit protection</strong> — you confirmed you are ready to move forward.</p>
      </div>

      <div style="text-align:center;">
        <button onclick="goTo(18)" style="background:var(--gold);color:var(--navy);border:none;border-radius:10px;padding:14px 40px;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all .2s;" onmouseover="this.style.background='var(--gold2)'" onmouseout="this.style.background='var(--gold)'">
          Continue →
        </button>
      </div>

    </div>
  </div>

  <style>
  @keyframes bounceDown{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
  </style>
</section>
<section class="slide bg-pale" id="slide-18" data-slide="18" style="padding-bottom:100px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 19</div>
  
  <div style="max-width:820px;margin:0 auto;width:100%;">
    <div class="slide-label">Page 19 — Let's Make Sure You're Ready</div>
    <div class="slide-headline fade-up">Let's Make Sure <b>You're Ready</b></div>

    <!-- Opening question -->
    <div style="background:var(--navy);border-radius:12px;padding:22px 26px;margin-bottom:24px;" class="fade-up">
      <p style="font-family:'Cormorant Garamond',serif;font-size:24px;color:#fff;font-style:italic;line-height:1.55;">You do agree that it would make more sense to put those payments toward the solution — and not the problem?</p>
      <p style="font-size:17px;color:var(--gold2);margin-top:12px;font-family:'Barlow Condensed',sans-serif;letter-spacing:1px;">How soon would it make sense to start?</p>
    </div>

    <!-- Transition -->
    <p style="font-size:17px;color:var(--text2);margin-bottom:22px;line-height:1.65;" class="fade-up">Well — let's look at this together and see.</p>

    <!-- FOUR CHECKBOX ITEMS -->
    <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px;" class="fade-up">

      <!-- A: SERVICE -->
      <div class="commit-card" id="cc_service">
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div class="commit-check" onclick="toggleCommit('service')"></div>
          <div style="flex:1;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);font-weight:700;margin-bottom:6px;">Service</div>
            <p style="font-size:16px;color:var(--text2);line-height:1.65;margin-bottom:10px;">Is this the most effective service you have seen for resolving your situation?</p>
            <p style="font-size:16px;color:var(--text2);line-height:1.65;">Is it backed by a written guarantee?</p>
            <div id="cc_service_ans" style="display:none;margin-top:10px;background:rgba(39,174,96,.1);border:1.5px solid #27ae60;border-radius:6px;padding:10px 14px;font-size:15px;color:var(--text);font-weight:600;">✓ Agreed — Guaranteed in writing for the full term</div>
          </div>
        </div>
      </div>

      <!-- B: TIMELINE -->
      <div class="commit-card" id="cc_timeline">
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div class="commit-check" onclick="toggleCommit('timeline')"></div>
          <div style="flex:1;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);font-weight:700;margin-bottom:6px;">Timeline</div>
            <p style="font-size:16px;color:var(--text2);line-height:1.65;">Most cases resolve in <strong>6–18 months</strong>. Does that timeline work for you?</p>
            <div id="cc_timeline_ans" style="display:none;margin-top:10px;background:rgba(39,174,96,.1);border:1.5px solid #27ae60;border-radius:6px;padding:10px 14px;font-size:15px;color:var(--text);font-weight:600;">✓ Agreed — 6 to 18 months works</div>
          </div>
        </div>
      </div>

      <!-- C: INVESTMENT TODAY -->
      <div class="commit-card" id="cc_down">
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div class="commit-check" onclick="toggleCommit('down')"></div>
          <div style="flex:1;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);font-weight:700;margin-bottom:6px;">Investment Today</div>
            <p style="font-size:16px;color:var(--text2);line-height:1.65;">Do you like the fact that you can get started with <strong>$0 down today</strong>, with your first payment not due for 30 days?</p>
            <div id="cc_down_ans" style="display:none;margin-top:10px;background:rgba(39,174,96,.1);border:1.5px solid #27ae60;border-radius:6px;padding:10px 14px;font-size:15px;color:var(--text);font-weight:600;">✓ Agreed — $0 down, first payment in 30 days</div>
          </div>
        </div>
      </div>

      <!-- D: TOTAL INVESTMENT -->
      <div class="commit-card" id="cc_price">
        <div style="display:flex;align-items:flex-start;gap:14px;">
          <div class="commit-check" onclick="toggleCommit('price')"></div>
          <div style="flex:1;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);font-weight:700;margin-bottom:6px;">Total Investment</div>
            <p style="font-size:16px;color:var(--text2);line-height:1.65;">When you compare the total cost of this service against what you will continue to pay the resort — and the cost of doing nothing — would you say the investment is fair?</p>
            <div id="cc_price_ans" style="display:none;margin-top:10px;background:rgba(39,174,96,.1);border:1.5px solid #27ae60;border-radius:6px;padding:10px 14px;font-size:15px;color:var(--text);font-weight:600;">✓ Agreed — the investment is fair when compared</div>
          </div>
        </div>
      </div>

    </div>

    <!-- ALL CHECKED — SHOW PROCEED BUTTON -->
    <div id="commitProceed" style="display:none;text-align:center;" class="fade-up">
      <div style="background:var(--navy);border-radius:12px;padding:20px 24px;margin-bottom:18px;">
        <p style="font-size:17px;color:rgba(255,255,255,.88);line-height:1.7;" id="todayQualAnswer">If we could offer a <strong style="color:var(--gold2);">guaranteed service and timeline, $0 down today, fair installment payments, and complimentary credit protection</strong> — you confirmed you would be ready to move forward.</p>
      </div>
      <button onclick="goTo(19)" class="btn btn-gold" style="font-size:17px;padding:14px 40px;">I'm Ready — What Happens Next? →</button>
    </div>

  </div>

  <style>
  .commit-card{background:#fff;border:2px solid var(--border);border-radius:10px;padding:18px 20px;transition:border-color .3s;}
  .commit-card.checked{border-color:#27ae60;background:rgba(39,174,96,.04);}
  .commit-check{width:28px;height:28px;border-radius:50%;border:2.5px solid var(--border);background:#fff;cursor:pointer;flex-shrink:0;margin-top:3px;transition:all .2s;display:flex;align-items:center;justify-content:center;font-size:14px;}
  .commit-check.done{background:#27ae60;border-color:#27ae60;color:#fff;}
  .commit-check.done::after{content:"✓";color:#fff;font-weight:700;}
  </style>
</section>
<section class="slide bg-white" id="slide-19" data-slide="19">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 20</div>
  
  <div class="slide-label">Page 20 — What Happens Next</div>
  <div class="slide-headline fade-up">What Happens <b>Next</b></div>

  <!-- SINGLE COLUMN TIMELINE with vertical line -->
  <div style="position:relative;padding-left:20px;margin-bottom:28px;" class="fade-up">
    <div style="position:absolute;left:19px;top:20px;bottom:40px;width:2px;background:linear-gradient(180deg,var(--gold),var(--navy) 70%,#27ae60);opacity:.35;"></div>
    <div class="wnstep">
      <div class="wnnum" style="background:var(--gold);color:var(--navy);">1</div>
      <div class="wnbody">
        <div class="wntitle">Case Assignment</div>
        <div class="wntext">Your file is assigned to a dedicated Case Manager and Personal Advocate — not a call center. You get a real name, a direct number, and a team that stays with you.</div>
      </div>
    </div>
    <div class="wnstep">
      <div class="wnnum" style="background:var(--navy);color:#fff;">2</div>
      <div class="wnbody">
        <div class="wntitle">Document Coordination</div>
        <div class="wntext">Your Document Coordinator contacts you to gather what's needed to build your case file. Simple, guided — we tell you exactly what to provide.</div>
      </div>
    </div>
    <div class="wnstep">
      <div class="wnnum" style="background:var(--navy);color:#fff;">3</div>
      <div class="wnbody">
        <div class="wntitle">Group Filing Placement</div>
        <div class="wntext">Your case is placed into the next Collective Filing for <strong id="nextResortName" style="color:var(--navy);">your resort</strong>. Your violations are presented alongside others from the same developer — that pattern-level pressure is what creates resolution.</div>
      </div>
    </div>
    <div class="wnstep">
      <div class="wnnum" style="background:var(--navy);color:#fff;">4</div>
      <div class="wnbody">
        <div class="wntitle">Your Team Negotiates — You Stay Out of It</div>
        <div class="wntext">All communications with the resort and developer are handled by your team. You will not need to engage with them directly at any point in this process.</div>
      </div>
    </div>
    <div class="wnstep" style="margin-bottom:0;">
      <div class="wnnum" style="background:#27ae60;color:#fff;">✓</div>
      <div class="wnbody" style="border-bottom:none;">
        <div class="wntitle" style="color:#27ae60;">Written Release Confirmed</div>
        <div class="wntext">A written Mutual Release is obtained. Your name is removed from the county deed. Every financial obligation — terminated permanently.</div>
      </div>
    </div>
  </div>

  <!-- TEAM — 5 cards horizontal -->
  <div class="fade-up" style="margin-bottom:22px;">
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-bottom:12px;font-weight:600;">Your Dedicated Team</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;">
      <div class="wnteam"><div class="wnteam-icon">👤</div><div class="wnteam-title">Case Manager</div><div class="wnteam-sub">Guides your file intake to release</div></div>
      <div class="wnteam"><div class="wnteam-icon">🤝</div><div class="wnteam-title">Personal Advocate</div><div class="wnteam-sub">Your direct point of contact</div></div>
      <div class="wnteam"><div class="wnteam-icon">📄</div><div class="wnteam-title">Document Coordinator</div><div class="wnteam-sub">Organizes your case file</div></div>
      <div class="wnteam"><div class="wnteam-icon">⚖️</div><div class="wnteam-title">Attorney If Needed</div><div class="wnteam-sub">On retainer — no extra cost</div></div>
      <div class="wnteam" style="border-color:#27ae60;"><div class="wnteam-icon">🛡</div><div class="wnteam-title">Credit Solutions</div><div class="wnteam-sub">Complimentary — all 3 bureaus</div></div>
    </div>
  </div>

  <!-- Timeline note -->
  <div style="background:var(--gold-pale);border:1.5px solid rgba(201,162,74,.4);border-radius:8px;padding:14px 20px;margin-bottom:22px;font-size:16px;color:var(--text);line-height:1.7;" class="fade-up">
    <strong>6–18 months</strong> average resolution. Written 100% money-back guarantee if no Favorable Outcome — contractual, no exceptions.
  </div>

  <div style="text-align:center;" class="fade-up">
    <button onclick="goTo(20)" class="btn btn-gold" style="font-size:16px;padding:13px 36px;">Continue →</button>
  </div>

  <style>
  .wnstep{display:flex;gap:16px;align-items:flex-start;margin-bottom:4px;position:relative;z-index:1;}
  .wnnum{width:40px;height:40px;border-radius:50%;font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.1);margin-top:2px;}
  .wnbody{flex:1;padding:8px 0 20px;border-bottom:1px solid var(--border);}
  .wntitle{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;letter-spacing:.5px;color:var(--navy);margin-bottom:4px;}
  .wntext{font-size:16px;color:var(--text2);line-height:1.65;}
  .wnteam{background:var(--blue-pale);border:1.5px solid var(--border);border-radius:10px;padding:14px 10px;text-align:center;}
  .wnteam-icon{font-size:22px;margin-bottom:7px;}
  .wnteam-title{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--navy);margin-bottom:4px;line-height:1.3;}
  .wnteam-sub{font-size:12px;color:var(--muted);line-height:1.4;}
  @media(max-width:700px){.wnteam-grid{grid-template-columns:1fr 1fr!important;}}
  </style>
</section>
<section class="slide bg-off" id="slide-20" data-slide="20" style="padding-bottom:100px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 21</div>
  
  <div class="slide-label">Page 21 — Checklist</div>
  <div class="slide-headline fade-up">Client Understanding &amp;<br><b>Acknowledgment</b></div>
  <p class="slide-sub fade-up">Please review each item below. Initial where indicated, then sign at the bottom.</p>

  <div style="max-width:920px;width:100%;margin:0 auto;" class="fade-up">
    <div style="background:#fff;border:1.5px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(26,54,96,.08);">

      <!-- header -->
      <div style="background:var(--navy);padding:20px 30px;display:flex;align-items:center;gap:16px;">
        <img src="https://alphatimeshareconsultants.com/wp-content/uploads/2026/04/Alpha-TimeShare-Consultants-logo.png" alt="Alpha" style="height:40px;width:auto;" onerror="this.style.display='none'">
        <div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);font-weight:600;">Compliance Acknowledgment</div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:20px;color:#fff;font-weight:600;">By signing below, I acknowledge and agree to the following:</div>
        </div>
      </div>

      <div style="padding:24px 30px;">

        <!-- item helper macro via repeated blocks -->
        <div class="ack-item">
          <div class="ack-num">—</div>
          <div class="ack-body">
            <div class="ack-title">Third-Party / Not the Resort</div>
            <div class="ack-text">Alpha Timeshare Consultants is a third-party consumer advocacy company. Alpha does not work for, represent, or have authority from my resort or developer.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">1</div>
          <div class="ack-body">
            <div class="ack-title">Not a Law Firm / No Legal Advice</div>
            <div class="ack-text">Alpha Timeshare Consultants is not a law firm and does not provide legal advice. Their roles are advocacy, documentation, and structured escalation.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">2</div>
          <div class="ack-body">
            <div class="ack-title">Independent Attorneys (If Needed)</div>
            <div class="ack-text">In some situations, independent attorneys may be involved if legal services are needed. If that happens, those attorneys are not employed by Alpha Timeshare Consultants and operate independently.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">3</div>
          <div class="ack-body">
            <div class="ack-title">Paid-Off Owner Internal Options <span style="font-size:13px;color:var(--muted);font-weight:400;">(Skip if Not Applicable)</span></div>
            <div class="ack-text">If my timeshare is paid off, I understand some resorts may offer internal surrender or exit programs directly to owners. I am always free to attempt that option on my own prior to engaging services with Alpha. By signing this acknowledgment, I am choosing to move forward with Alpha for guidance and support through a structured process.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">4</div>
          <div class="ack-body">
            <div class="ack-title">No Sale or Transfer</div>
            <div class="ack-text">Alpha Timeshare Consultants does not buy, sell, rent, or transfer my timeshare to a new owner. Alpha focuses strictly on pursuing a written release of contractual obligations.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">5</div>
          <div class="ack-body">
            <div class="ack-title">No Payment Advice / No Coercion</div>
            <div class="ack-text">Alpha Timeshare Consultants cannot advise me to stop making payments to my resort or lender. I acknowledge that Alpha did not tell me, instruct me, or coerce me to stop making my timeshare payments. Any decision to continue or stop payments is made from my sole discretion.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">6</div>
          <div class="ack-body">
            <div class="ack-title">My Participation / Letters</div>
            <div class="ack-text">I understand the process requires my participation. This includes reviewing and providing documents, communicating with my case manager, and in some cases sending or authorizing letters as part of the strategy.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">7</div>
          <div class="ack-body">
            <div class="ack-title">Normal Pushback</div>
            <div class="ack-text">I understand that during the process I may receive negative responses from resorts or agencies that are contacted. I understand this can be normal, and that consistency and timing are key parts of the process.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">8</div>
          <div class="ack-body">
            <div class="ack-title">Credit Solutions Program</div>
            <div class="ack-text">Alpha Timeshare Consultants is not a credit company and does not guarantee credit results. If credit support is offered, it is complimentary. I understand optional continuous monitoring through the platform may cost $19.99 per month, but monitoring is not required and Alpha does not benefit from any monthly monitoring installments.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">9</div>
          <div class="ack-body">
            <div class="ack-title">Reimbursement</div>
            <div class="ack-text">I understand reimbursement is not guaranteed. In some cases it may be possible, but it is never promised. Any reimbursement obtained is paid directly from the developer to the client — Alpha takes no commissions.</div>
          </div>
        </div>

        <div class="ack-item">
          <div class="ack-num">10</div>
          <div class="ack-body">
            <div class="ack-title">Timeline + Refund Guarantee</div>
            <div class="ack-text">I understand the process may take up to the full Guarantee Term, although many matters resolve within 6–18 months. I understand that if a written release from my timeshare obligations is not achieved within the Guarantee Term, the agreement provides a 100% refund of the service fee, consistent with the contract terms.</div>
          </div>
        </div>

        <div class="ack-item" style="margin-bottom:0;border-bottom:none;padding-bottom:0;">
          <div class="ack-num">11</div>
          <div class="ack-body">
            <div class="ack-title">Financing / Credit Pull <span style="font-size:13px;color:var(--muted);font-weight:400;">(If Financing Is Discussed)</span></div>
            <div class="ack-text">If I choose to finance, I understand the lender will run a credit check to determine creditworthiness and approval terms.</div>
          </div>
        </div>

      </div>

      <!-- INITIALS SECTION -->
      <div style="background:var(--blue-pale);border-top:1.5px solid var(--border);padding:24px 30px;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:18px;font-weight:700;">Final Confirmations — Initial Each</div>
        <div class="g2" style="gap:16px;margin-bottom:20px;">
          <div class="initial-row">
            <input type="text" id="init1" class="initial-box" maxlength="5" placeholder="Initial">
            <span class="initial-text">I am signing for myself today and I am legally able to make decisions on my own without a Power of Attorney.</span>
          </div>
          <div class="initial-row">
            <input type="text" id="init2" class="initial-box" maxlength="5" placeholder="Initial">
            <span class="initial-text">I am prepared to commit to moving forward today (provided the payment terms and contract are to my satisfaction).</span>
          </div>
        </div>
        
          <div class="fl"><label>Client Signature</label><input type="text" id="ackSig" placeholder="Type full name as signature"></div>
          <div class="fl"><label>Date of Agreement</label><input type="text" id="ackDate" placeholder="MM/DD/YYYY" value="" onfocus="if(!this.value)this.value=new Date().toLocaleDateString()"></div>
        </div>
        
        <div id="ackMsg" style="margin-top:12px;font-size:16px;color:var(--navy);font-weight:600;display:none;"></div>
      </div>

    </div>
  </div>

  <style>
  .ack-item{display:flex;gap:16px;align-items:flex-start;padding:16px 0;border-bottom:1px solid var(--border);}
  .ack-num{width:32px;height:32px;border-radius:50%;background:var(--navy);color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;}
  .ack-body{flex:1;}
  .ack-title{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;letter-spacing:.5px;color:var(--navy);margin-bottom:5px;}
  .ack-text{font-size:15px;color:var(--text2);line-height:1.65;}
  .initial-row{display:flex;align-items:flex-start;gap:12px;background:#fff;border:1.5px solid var(--border);border-radius:8px;padding:14px;}
  .initial-box{width:72px!important;height:42px;border:2px solid var(--gold)!important;border-radius:6px;text-align:center;font-size:16px;font-weight:700;color:var(--navy);flex-shrink:0;}
  .initial-text{font-size:15px;color:var(--text2);line-height:1.55;padding-top:4px;}
  </style>
</section>
<section class="slide bg-pale" id="slide-21" data-slide="21" style="text-align:center;align-items:center;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 22</div>
  
  <div style="max-width:680px;margin:0 auto;width:100%;">
    <div style="font-size:72px;margin-bottom:20px;">🥂</div>
    <div class="slide-label" style="text-align:center;">Page 22 — Final Congratulations</div>
    <div class="slide-headline fade-up" style="text-align:center;"><b>Congratulations</b></div>
    <div class="divg ctr"></div>
    <p style="font-size:19px;color:var(--text2);line-height:1.75;margin-bottom:28px;" class="fade-up">You have taken the most important step. Your case is in good hands. Your team will be in touch shortly to begin the process.</p>
    <div style="background:var(--navy);border-radius:12px;padding:22px 28px;margin-bottom:24px;" class="fade-up">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;font-weight:600;">Sebastian Short — Account Specialist</div>
      <div style="font-size:15px;color:rgba(255,255,255,.8);line-height:1.9;">
        📞 <a href="tel:18778483948" style="color:var(--gold2);text-decoration:none;">1 (877) 848-3948 Ext. 134</a><br>
        📞 <a href="tel:16892333259" style="color:var(--gold2);text-decoration:none;">(689) 233-3259</a><br>
        ✉️ <a href="mailto:Sebastian@AlphaTimeshareConsultants.com" style="color:var(--gold2);text-decoration:none;">Sebastian@AlphaTimeshareConsultants.com</a>
      </div>
    </div>
    <button onclick="goTo(22)" class="btn btn-navy" style="font-size:15px;padding:12px 32px;">Continue →</button>
  </div>
</section>
<section class="slide bg-navy" id="slide-22" data-slide="22" style="text-align:center;align-items:center;padding-bottom:160px;background:linear-gradient(135deg,#1a3660 0%,#2a5298 100%);">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 23</div>
  
  <div style="max-width:800px;margin:0 auto;width:100%;">

    <!-- PROMISE CARD -->
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:18px;font-weight:600;" class="fade-up">Page 23 — I Promise</div>

    <div style="background:rgba(255,255,255,.06);border:2px solid var(--gold);border-radius:16px;padding:48px 40px;margin-bottom:48px;position:relative;" class="fade-up">
      <div style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:700;padding:6px 20px;border-radius:20px;white-space:nowrap;">Raise Your Right Hand</div>
      <p style="font-family:'Cormorant Garamond',serif;font-size:clamp(26px,4vw,44px);color:#fff;line-height:1.4;font-style:italic;">"I promise I will never go to another timeshare presentation again."</p>
      <div style="margin-top:20px;font-size:36px;">🤞</div>
    </div>

    <!-- THANK YOU -->
    <div class="fade-up">
      <img src="https://alphatimeshareconsultants.com/wp-content/uploads/2026/04/Alpha-TimeShare-Consultants-logo.png" alt="Alpha" style="height:64px;width:auto;margin-bottom:22px;" onerror="this.style.display='none'">
      <div class="slide-headline" style="color:#fff;text-align:center;font-size:clamp(32px,4vw,56px);">Thank you for trusting <b>Alpha</b></div>
      <div style="width:80px;height:3px;background:linear-gradient(90deg,var(--gold),transparent);margin:20px auto;"></div>
      <p style="font-size:20px;color:rgba(255,255,255,.8);line-height:1.7;margin-bottom:32px;">for your <em style="color:var(--gold2);font-family:'Cormorant Garamond',serif;font-size:26px;">vacation freedom.</em></p>

      <!-- Sebastian card at the very end -->
      <div style="background:rgba(255,255,255,.08);border:1px solid rgba(201,162,74,.3);border-radius:12px;padding:24px 32px;display:inline-block;text-align:left;margin-bottom:20px;">
        <div style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:4px;">Sebastian Short</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Account Specialist — Alpha Timeshare Consultants</div>
        <div style="font-size:15px;color:rgba(255,255,255,.8);line-height:1.9;">
          📞 <a href="tel:18778483948" style="color:var(--gold2);text-decoration:none;">1 (877) 848-3948 Ext. 134</a><br>
          📞 <a href="tel:16892333259" style="color:var(--gold2);text-decoration:none;">(689) 233-3259</a><br>
          ✉️ <a href="mailto:Sebastian@AlphaTimeshareConsultants.com" style="color:var(--gold2);text-decoration:none;">Sebastian@AlphaTimeshareConsultants.com</a>
        </div>
      </div>

      <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-top:16px;">Alpha Timeshare Consultants, Inc. — Est. 1985 — A+ BBB Rated</div>
    </div>

  </div>
</section>
<section class="slide bg-white" id="slide-23" data-slide="23" style="padding-bottom:100px;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 24</div>
  
  <div class="slide-label">Page 24 — Contract</div>
  <div class="slide-headline fade-up">Alpha Contract <b>Agreement</b></div>
  <p class="slide-sub fade-up">New Enrollment Agreement — please review all terms with your Verification Representative before signing.</p>

  <div style="max-width:920px;width:100%;margin:0 auto;" class="fade-up">

    <!-- CONTRACT DOCUMENT -->
    <div style="background:#fff;border:1.5px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(26,54,96,.08);">

      <div style="background:var(--navy);padding:20px 30px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:16px;">
          <img src="https://alphatimeshareconsultants.com/wp-content/uploads/2026/04/Alpha-TimeShare-Consultants-logo.png" alt="Alpha" style="height:40px;width:auto;" onerror="this.style.display='none'">
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);font-weight:600;">New Enrollment Agreement</div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:20px;color:#fff;font-weight:600;">Alpha Timeshare Consultants, Inc.</div>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/12_izeyq-MnQXeyiTCmkj5T2-zxxWvtW2/view" class="btn btn-gold" style="font-size:13px;padding:9px 20px;text-decoration:none;">📋 Open Full Contract</a>
      </div>

      <!-- DOC CHECKLIST -->
      <div style="background:var(--blue-pale);padding:18px 30px;border-bottom:1.5px solid var(--border);">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:10px;font-weight:700;">Enclosed Documents — Verify All Are Present</div>
        <div style="display:flex;gap:20px;flex-wrap:wrap;">
          <label class="chk-row" style="gap:8px;"><input type="checkbox" id="doc1"> <span style="font-size:15px;color:var(--text);font-family:'Barlow',sans-serif;">Certificate of Guarantee</span></label>
          <label class="chk-row" style="gap:8px;"><input type="checkbox" id="doc2"> <span style="font-size:15px;color:var(--text);font-family:'Barlow',sans-serif;">Definitions</span></label>
          <label class="chk-row" style="gap:8px;"><input type="checkbox" id="doc3"> <span style="font-size:15px;color:var(--text);font-family:'Barlow',sans-serif;">Service Agreement (initial &amp; sign)</span></label>
        </div>
        <p style="margin-top:10px;font-size:14px;color:var(--muted);">If you do not receive any item listed above, contact Support immediately: <strong style="color:var(--navy);">(877) 848-3948 Ext. 102</strong></p>
      </div>

      <div style="padding:24px 30px;">

        <!-- CERTIFICATE OF GUARANTEE -->
        <div style="background:var(--gold-pale);border:2px solid var(--gold);border-radius:10px;padding:24px;text-align:center;margin-bottom:28px;">
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;font-weight:600;">Certificate of Guarantee</div>
          <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCALHAqEDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAwIB/8QAXBAAAQQCAQMCAwUDBgkHBgoLAQACAwQFEQYHEiETMSJBUQgUMmFxFSOBFhhCkZXRCSQzUlVigqGxFzhDcpKzwSU0N3R1sjY5RFNjc6Lh8PE1RlRXg6O0wsPE0v/EABsBAQACAwEBAAAAAAAAAAAAAAADBQIEBgEH/8QANhEBAAEDAgQDBgYCAgIDAAAAAAECAxEEIQUSMUETUWEGInGBofAUMpGxwdEVQjPhUvEkYqL/2gAMAwEAAhEDEQA/AOy0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFBOu/MjwjpzfykEgZfmArUt636r/Y6P+aO53+yt3065JBy7hWL5BXLf8bgDpGg/gkHh7f4OBCz8Ork5+yOLtM1+H36pAiIsEgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi1HMs3Bxzi+QzdnXZUhc8NJ13O/ot/idD+K9iJqnEPKqopiZns51+0PJf6kdXsV07wszQykD6rzssbK5vc9x18msAH67C2X2TM1bwWez3TXMnssVZ3ywNJ8dzT2yAfkdNcNfmVlfZoxYjHIup3IZWsdO6Ronl8AM33yv/Teh/sla7r/Tl4V1YwPUrFNJgsva2yWezntGiN+3xR+P9kq0qxOdNHaPr1UtMzGNXPef/wA9HSyLHxdyvkcdXvVJBJBYibJG4fNpGwshVS7iciIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCKcw5l/Jq1XgnweUu/eniOu6oxjw95/o6LgQfH01+aqzqJ1N5g/MV+NQ8Up0rFosMMV3tsPcXO00632tO/rvStCxRHJb2VsOdqKsw06Ug/oyAhz5B+jwxv5GM/VV9jON5C71LyPOLm3MrY8ywBw2GWQ0sLPz7S139YW9p67NuJquRnEZ+fZV6qnUXJim3VMRM4+XdH+d3uf4fAS4Pn0EU3HciWxPt4xjGPhIcHADQA9x5a4eRsArAkxPUXqhw6ri8dUqUeL02MjqOuuHqzemO0OL9Ek/UtAHuFY/Kvv/JuNX+PcqjbUi74ib1ZvcISdOYXtP8ARPsT8vy917VMrlMLg6WGwNZjKNKl3ixaH7yWJmgXhvy2T42o/wDKWotR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EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXjdtVqNOa7cnir1oI3STSyODWRsaNlxJ8AAedoPZFyzyT7VGazvILOC6M9PrnKn1z8V6WKVzHDeu4RMAcGe2nOc39F41PtNdROI3Ih1d6S3cVj5ZQz7/Shliazx8mydzZD+jx/FB1Yi8Mfbr36Fe9Uk9SvYibLE/Wu5rhsH+or3QEREBEUP6l9S+GdOIsfJzDLOx7cjK6KsRWll73N1v8DTrWx7oJgi/GOD2B7TsOGwqVz/AFC6sVPtFUuG4/gjbPC5XxNly33KckNcwF7/AFg70x2nY0R8vzCC60UK6581k6e9Ks7y2CBk9mlAPu8b/wAJle4MZv6gFwJH0C536R8S+0D1A4vj+pf/ACx2aE92f7xWxcrX/d3xNk0e9rfgaDo6aGOGteRs6Dr1FSnKuoXVmh9oXG8O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0E00ry/trOl/yZeGgvc2H4O4tHcRs++1P0QVNyXptlrOWdkqTqr4hmI7bKcdp9b9xHV9GNoe1p7XNcS7Q8aPusr/AJNJmVuQPx/3PGWrvG/2RjXMmkmdTleZpJnmRw7nd0srXF34j2AnyrPRBUD+m+SHH8fHUwmLjtQXab7VezlZp2WK1UOdHE1zmaYBIQQ0NDdbJ8la27wHM3OV4vFyyMH35l2zySSJjvRFeeaN4rxvIHcXen2H59pefGwrxRBVPWmTL4rN47L4OtFduQYa/UpVHwyv1Yl9HsezsY5pdphZpxb4f7gdy8Yeld6vxTL0a81Jt2bjlLB0Hu38EULD3tc7Wx3ve7et+AD+StxEFWQ9Pczksy7JZtuJiiny1OzLUruc5ra1WFwii2WjucJSHewGh/BfuO4DyGjmKttlmjt0GaEkzJHB1ee7YbMyRg7fi7QwN+StJEFMYvpflqfGMVDHjMe3J4ySi0iXKTTx2oYHh7owXM1E0va1wAadkDu9lKMXxDO1unPKMXJaoMz+cfen9aHuELJJgWx+SN6aOwE6+Sn6IKmyvA+TWmXqtWviK9bLccgwT3PsOc7GxtMolMY7NSdzZAR+H4mDfgBWrVhZWqxV499kTAxuz50BoL0RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBHuonEMZznilnjeYmuw07DmOe+nOYpQWODhpw9vICqn+av06/0ty/+2Hf3K90QUR/NX6df6W5f/bDv7k/mr9Ov9Lcv/th39yvdEFEfzV+nX+luX/2w7+5P5q/Tr/S3L/7Yd/cr3RBRH81fp1/pbl/9sO/uT+av06/0ty/+2Hf3K90QUR/NX6df6W5f/bDv7k/mr9Ov9Lcv/th39yvdEFEfzV+nX+luX/2w7+5P5q/Tr/S3L/7Yd/cr3RBRH81fp1/pbl/9sO/uT+av06/0ty/+2Hf3K90QUR/NX6df6W5f/bDv7k/mr9Ov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tCtJHCYJpqUL4pbURrel6U3xdrwHnvaSCRoAfMnSs6U8ikwdzGWeRYxwm4z/ACfjcyi8djAT2yEGTydHyPbf0+dwIgrXN8A5HZv5u3jeQ06n7VZj3SMdWeQ59Zw743EPB9KRgLSB5+L314ONgumWaxmUx9sZnFujpXsnabFHRewEXNntHx+A0uP6jX6q00QVXg+mebxFarDFl8PaazANw9mO1Qc+OYMkc4Ht7/wkPIcDv8iFLeAcYm4rgreOjtMeyWzJNWgBe6Go1wGomdxLuwEE6347iBoaUnRBVnFumeawtDitV+cx85wNm9OXCo9vrfefV8fjPb2+qfrvQ9l+cS6bcm4vPQlxPKKLN49lDI99FzvUZG97mSRfH8DwJHD4u4ex140rURBjUW3mmcXZK7x6p9D0mFpEehoO2Tt297I0PbwslEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARF52ZmwR97gSN68LC5cptUTXXOIh7ETM4h6L8DmlxaHAke4XlFagkaXNePA3o+CtBNZeLLpWPIcTvwqfiHG7WlpoqoxVFXlPZPa09VyZjo392w2tXdKfJHsPqV8ULkdtm2kB492rQX78lprGv0A36fMrANkwEyNl9PQJJ3rQ+apb3tNVGq5rcZt46d/i2qNDmjfq32RzPoXGxxacxp+P81sjbrir96MgEWt7UDlsxdxDpWd3cG67vPcRsD9dLyfkGOhEX3phj8uDe8a8eCVqWPaXUW67lVcZz0jyn+mzPDaaopiJ+KaYrLx3rUkIb2a8s38wtlLIyJhfI9rGj3LjoKuqlt9WyyxEQXMO/f3/ACTLZW1k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ERAREQEREBERAWg5zg589iY61aWOOWOYSNL969iD7fkVv0UV+zRftzbr6Szt1zbqiqnrCDUOnGNZVkF+zLasOYQ0g9jGEjwQB76/MqnLhlhmfXmHbLG8xvb9HA6I/rXTi0dXieBr52fNMosdcmeXlzz3Brj7loPgE/VUHEPZ+3epopsRFOOvw/mVlpeJ1W5qm5vno58y9TK4j7u+5Wnqeu31Ye8aJAPv+R/3+Vr4r90uAZM7Q2Bv5b9z+v5roLqlxh3JuOmKsxpvV3epX2QN/Vuz9R/vAWs6b9PK2EgF3LxR2L7267DpzIQfcfmfqVUXfZ27Gp8K3+XGcz99VhRxW3Nnnrj3vJVFOW09na5w1oDQHyC2des2Q/H8R9/JUrz3CLlPOiHF1ZJqlh24nBpLYvPkOPyA+p+X5qbs4jjBgY8aWfvGfF64Hx9593f/AHfRadjgGqvV3KJjHL9Z9ElziVmimmqN8/RWlCkHSMjiiBe93a0AeSSVtH1ZaspisROikb7tcPKlnFeN2KOUfYutYRD4hIOw4n+l+Xj6/VSTIUKl+Psswtfr2PsR+hWzpvZq7e0811zy152if5a93itNF3FO9KOcewFW3hxNZa4SSOJa5p0QPb/wK2OGwX7OvunEwkZ2kN2NELcQRMghZDG3tYxoa0fkF9rqNPwbTWqbczT71ON/X+VTc1l2uaoztPYREVs1BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==" alt="Alpha Timeshare Consultants — Certificate of Guarantee" style="width:100%;max-width:520px;display:block;margin:0 auto;border-radius:8px;box-shadow:0 6px 28px rgba(0,0,0,.15);">
        </div>

        <!-- KEY TERMS GRID -->
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:14px;font-weight:700;">Key Definitions</div>
        <div class="g2" style="gap:12px;margin-bottom:24px;">
          <div style="background:var(--blue-pale);border:1px solid var(--border);border-radius:8px;padding:14px 16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:4px;">Favorable Outcome</div>
            <div style="font-size:14px;color:var(--text2);line-height:1.6;">A written, verifiable resolution from the resort or its authorized agent that releases the Client from ongoing contractual or payment obligations. May include cancellation, surrender, termination, settlement, or relinquishment.</div>
          </div>
          <div style="background:var(--blue-pale);border:1px solid var(--border);border-radius:8px;padding:14px 16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:4px;">Service Fee</div>
            <div style="font-size:14px;color:var(--text2);line-height:1.6;">The amount charged by Alpha for services provided under this Agreement. Payment options include Pay in Full, Third-Party Financing, or Alpha EasyPay (12 months at 0% interest).</div>
          </div>
          <div style="background:var(--blue-pale);border:1px solid var(--border);border-radius:8px;padding:14px 16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:4px;">Group Filings</div>
            <div style="font-size:14px;color:var(--text2);line-height:1.6;">Alpha may coordinate advocacy communications for multiple clients collectively for administrative efficiency and timing. Participation does not guarantee any particular outcome.</div>
          </div>
          <div style="background:var(--blue-pale);border:1px solid var(--border);border-radius:8px;padding:14px 16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);margin-bottom:4px;">Recoupment of Funds</div>
            <div style="font-size:14px;color:var(--text2);line-height:1.6;">Recovery of some or all funds invested into the Client's timeshare. Not guaranteed. If obtained, paid directly from the developer to the Client. Alpha takes no commissions.</div>
          </div>
        </div>

        <!-- PAYMENT OPTIONS RECAP -->
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:14px;font-weight:700;">Payment Options</div>
        <div class="g3" style="gap:12px;margin-bottom:24px;">
          <div style="background:#fff;border:1.5px solid var(--border);border-radius:8px;padding:16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">Pay in Full</div>
            <p style="font-size:14px;color:var(--text2);line-height:1.6;">Payment due at signing. Save $500 off total balance. No additional installments charged.</p>
          </div>
          <div style="background:#fff;border:1.5px solid var(--border);border-radius:8px;padding:16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">Alpha EasyPay — 0% Interest</div>
            <p style="font-size:14px;color:var(--text2);line-height:1.6;">12 equal monthly installments at 0% interest, drafted on the 1st or 15th. $35 failed-payment fee. Pay off within 90 days for $500 rebate credit.</p>
          </div>
          <div style="background:#fff;border:1.5px solid var(--border);border-radius:8px;padding:16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">Third-Party Financing</div>
            <p style="font-size:14px;color:var(--text2);line-height:1.6;">Financed through a third-party lender. All rates and terms governed by lender's agreement. Credit check required for approval.</p>
          </div>
        </div>

        <!-- KEY SECTIONS SUMMARY -->
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:14px;font-weight:700;">Key Agreement Terms</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
          <div style="display:flex;gap:14px;padding:14px 16px;background:var(--off);border-radius:6px;border:1px solid var(--border);">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);min-width:180px;">§1 Scope of Service</div>
            <div style="font-size:15px;color:var(--text2);line-height:1.6;">Consumer advocacy and support services to pursue a Favorable Outcome. Alpha does not buy, sell, or transfer timeshare interests or provide deed-transfer services.</div>
          </div>
          <div style="display:flex;gap:14px;padding:14px 16px;background:var(--off);border-radius:6px;border:1px solid var(--border);">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);min-width:180px;">§3 Payment Decisions</div>
            <div style="font-size:15px;color:var(--text2);line-height:1.6;">Alpha does not advise, instruct, or coerce the Client to stop payments. All payment decisions are made solely at the Client's independent discretion.</div>
          </div>
          <div style="display:flex;gap:14px;padding:14px 16px;background:var(--off);border-radius:6px;border:1px solid var(--border);">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);min-width:180px;">§8 Refund Policy</div>
            <div style="font-size:15px;color:var(--text2);line-height:1.6;">If no Favorable Outcome within the Guarantee Term, Client may request a full refund or extend at no cost. Written notice required within 30 days of Term end.</div>
          </div>
          <div style="display:flex;gap:14px;padding:14px 16px;background:var(--off);border-radius:6px;border:1px solid var(--border);">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:var(--navy);min-width:180px;">§11 Dispute Resolution</div>
            <div style="font-size:15px;color:var(--text2);line-height:1.6;">All disputes resolved via non-binding mediation then binding arbitration in Orange County, Florida. Client waives jury trial rights.</div>
          </div>
        </div>

        <!-- OWNERSHIP FIELDS -->
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:14px;font-weight:700;">Identified Ownership(s) / Membership(s)</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;" id="ownershipFields">
          <div class="g2" style="gap:12px;"><div class="fl" style="margin:0;"><label>Resort / Property Name</label><input type="text" placeholder="e.g. Marriott Vacation Club at Ocean Pointe"></div><div class="fl" style="margin:0;"><label>Located At (Address)</label><input type="text" placeholder="Resort address"></div></div>
          <div class="g2" style="gap:12px;"><div class="fl" style="margin:0;"><label>Resort / Property Name</label><input type="text" placeholder="(if additional ownership)"></div><div class="fl" style="margin:0;"><label>Located At (Address)</label><input type="text" placeholder="Resort address"></div></div>
        </div>
        <button class="btn btn-outline" onclick="addOwnership()" style="margin-bottom:24px;font-size:14px;padding:9px 18px;">+ Add Another Ownership</button>

        <!-- SIGNATURES -->
        <div style="background:var(--gold-pale);border:2px solid var(--gold);border-radius:10px;padding:24px;">
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-bottom:18px;font-weight:700;">Signatures</div>
          <div class="g2" style="gap:16px;margin-bottom:18px;">
            <div class="fl"><label>Effective Date</label><input type="text" id="contractDate" placeholder="MM/DD/YYYY" onfocus="if(!this.value)this.value=new Date().toLocaleDateString()"></div>
            <div class="fl"><label>Total Service Fee ($)</label><input type="number" id="contractFee" placeholder="Enter agreed service fee"></div>
          </div>
          <div class="g2" style="gap:16px;margin-bottom:18px;">
            <div>
              <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:10px;font-weight:600;">Client / Owner</div>
              <div class="fl"><label>Signature (type full name)</label><input type="text" id="clientSig" placeholder="Full legal name as signature"></div>
              <div class="fl"><label>Printed Name</label><input type="text" id="clientPrint" placeholder="Full legal name"></div>
              <div class="fl"><label>Date</label><input type="text" id="clientDate" placeholder="MM/DD/YYYY"></div>
            </div>
            <div>
              <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:10px;font-weight:600;">Alpha Timeshare Consultants, Inc.</div>
              <div class="fl"><label>Authorized Signatory</label><input type="text" value="Sebastian Short — Account Specialist" readonly style="background:var(--off);color:var(--text);"></div>
              <div style="font-size:14px;color:var(--muted);margin-top:6px;line-height:1.6;">Alpha Timeshare Consultants, Inc.<br>1 (877) 848-3948 Ext. 134<br>Sebastian@AlphaTimeshareConsultants.com</div>
            </div>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <button class="btn btn-gold" onclick="saveContract()">✓ Save &amp; Confirm Agreement</button>
            <a href="https://drive.google.com/file/d/12_izeyq-MnQXeyiTCmkj5T2-zxxWvtW2/view" class="btn btn-navy" style="text-decoration:none;">📋 Open Full Contract PDF</a>
          </div>
          <div id="contractMsg" style="margin-top:12px;font-size:16px;color:var(--navy);font-weight:600;display:none;"></div>
        </div>

      </div>
    </div>
  </div>
</section>


<!-- BOTTOM NAV -->
<!-- DESKTOP BOTTOM NAV -->
<div id="bnav">
  <button class="bb" onclick="goTo(0)">Intake</button>
  <button class="bb" onclick="goTo(1)">Why Out</button>
  <button class="bb" onclick="goTo(2)">Usage</button>
  <button class="bb" onclick="goTo(3)">Motivation</button>
  <button class="bb" onclick="goTo(4)">Intro</button>
  <button class="bb" onclick="goTo(5)">Trust</button>
  <button class="bb" onclick="goTo(6)">Problem</button>
  <button class="bb" onclick="goTo(7)">Questions</button>
  <button class="bb" onclick="goTo(8)">Case Eval</button>
  <button class="bb" onclick="goTo(9)">Rights</button>
  <button class="bb" onclick="goTo(10)">Calc</button>
  <button class="bb" onclick="goTo(12)">Hold</button>
  <button class="bb" onclick="goTo(14)">Decision</button>
  <button class="bb" onclick="goTo(15)">Violations</button>
  <button class="bb" onclick="goTo(17)">Price</button>
  <button class="bb" onclick="goTo(19)">Next Steps</button>
  <button class="bb" onclick="goTo(20)">Checklist</button>
  <button class="bb" onclick="goTo(23)">📋 Contract</button>
  <button class="bb primary" onclick="goTo(24)" style="background:linear-gradient(135deg,#1a8a3e,#27ae60);">✓ Get Started</button>
</div>

<!-- MOBILE BOTTOM NAV (dropdown) -->
<div id="bnav-mobile">
  <div id="bnav-mobile-menu">
    <div class="mn-item" onclick="mobileNav(0)"><span class="mn-num">0</span>Intake</div>
    <div class="mn-item" onclick="mobileNav(1)"><span class="mn-num">1</span>Why Do You Want Out</div>
    <div class="mn-item" onclick="mobileNav(2)"><span class="mn-num">2</span>Usage &amp; Payments</div>
    <div class="mn-item" onclick="mobileNav(3)"><span class="mn-num">3</span>Motivation Scale</div>
    <div class="mn-item" onclick="mobileNav(4)"><span class="mn-num">4</span>Introduction</div>
    <div class="mn-item" onclick="mobileNav(5)"><span class="mn-num">5</span>Trust &amp; Reputation</div>
    <div class="mn-item" onclick="mobileNav(6)"><span class="mn-num">6</span>The Problem</div>
    <div class="mn-item" onclick="mobileNav(7)"><span class="mn-num">7</span>Common Questions</div>
    <div class="mn-item" onclick="mobileNav(8)"><span class="mn-num">8</span>Not All Cases Qualify</div>
    <div class="mn-item" onclick="mobileNav(9)"><span class="mn-num">9</span>Consumer Rights</div>
    <div class="mn-item" onclick="mobileNav(10)"><span class="mn-num">10</span>Calculator</div>
    <div class="mn-item" onclick="mobileNav(12)"><span class="mn-num">11</span>Group Filing — While You Wait</div>
    <div class="mn-item" onclick="mobileNav(14)"><span class="mn-num">12</span>Case Decision</div>
    <div class="mn-item" onclick="mobileNav(14)"><span class="mn-num">13</span>Congratulations</div>
    <div class="mn-item" onclick="mobileNav(15)"><span class="mn-num">14</span>Violation Findings</div>
    <div class="mn-item" onclick="mobileNav(16)"><span class="mn-num">15</span>What You're Paying</div>
    <div class="mn-item" onclick="mobileNav(17)"><span class="mn-num">16</span>Same Day Price</div>
    <div class="mn-item" onclick="mobileNav(18)"><span class="mn-num">17</span>You Said Yes</div>
    <div class="mn-item" onclick="mobileNav(19)"><span class="mn-num">18</span>What Happens Next</div>
    <div class="mn-item" onclick="mobileNav(20)"><span class="mn-num">19</span>Checklist</div>
    <div class="mn-item" onclick="mobileNav(21)"><span class="mn-num">20</span>Congratulations</div>
    <div class="mn-item" onclick="mobileNav(22)"><span class="mn-num">21</span>I Promise</div>
    <div class="mn-item" onclick="mobileNav(23)"><span class="mn-num">22</span>Contract</div>
    <div class="mn-item primary" onclick="mobileNav(24)"><span class="mn-num">✓</span>Get Started</div>
  </div>
  <div id="bnav-mobile-trigger" onclick="toggleMobileNav()">
    <span class="mn-label" id="mnLabel">☰ &nbsp;Navigate</span>
    <span class="mn-arrow">▾</span>
  </div>
</div>

<script>
/* ═══ INTAKE DYNAMIC LOGIC ═══ */
function toggleMtg(){
  const v = document.getElementById('mtgStatus').value;
  const show = (v === 'still_owe');
  document.getElementById('mtgFields').style.display = show ? '' : 'none';
  if(!show){
    const el = document.getElementById('i_mtg');
    if(el) el.value = 0;
    syncToCalc(); intakeCalc();
  }
}

function intakeCalc(){
  const mf   = Number(document.getElementById('i_mf').value)||0;
  const mtg  = document.getElementById('mtgStatus')&&document.getElementById('mtgStatus').value==='still_owe' ? (Number(document.getElementById('i_mtg').value)||0) : 0;
  const mfBehind  = Number(document.getElementById('i_mf_behind').value)||0;
  const mtgBehind = Number(document.getElementById('i_mtg_behind')?document.getElementById('i_mtg_behind').value:0)||0;
  const mfMo = mf/12;

  // MTF behind
  const mfBehindBox = document.getElementById('mf_behind_amt');
  const mfBehindTot = document.getElementById('mf_behind_total');
  if(mfBehind > 0){
    const amt = mfMo * mfBehind;
    mfBehindBox.style.display='block';
    mfBehindTot.textContent = '$'+Math.round(amt).toLocaleString();
  } else { mfBehindBox.style.display='none'; }

  // MTG behind
  const mtgBehindBox = document.getElementById('mtg_behind_amt');
  const mtgBehindTot = document.getElementById('mtg_behind_total');
  if(mtgBehindBox){
    if(mtgBehind > 0 && mtg > 0){
      mtgBehindBox.style.display='block';
      mtgBehindTot.textContent = '$'+(mtgBehind*mtg).toLocaleString();
    } else { mtgBehindBox.style.display='none'; }
  }

  // Summary box
  const sumBox = document.getElementById('intakeSummaryBox');
  if(mf > 0 || mtg > 0){
    sumBox.style.display='block';
    document.getElementById('sum_mf').textContent = Math.round(mfMo).toLocaleString();
    document.getElementById('sum_mtg').textContent = Math.round(mtg).toLocaleString();
    const tot = mfMo + mtg;
    document.getElementById('sum_total').textContent = Math.round(tot).toLocaleString();
    document.getElementById('sum_yearly').textContent = Math.round(tot*12).toLocaleString();
  } else { sumBox.style.display='none'; }

  // Also update usage slide auto-fill
  const nextMtgAmt = document.getElementById('nextMtgAmt');
  if(nextMtgAmt) nextMtgAmt.value = mtg > 0 ? mtg : '';
  const nextMtfAmt = document.getElementById('nextMtfAmt');
  if(nextMtfAmt) nextMtfAmt.value = mfMo > 0 ? Math.round(mfMo) : '';

  calcLoanEstimate();
}

function checkBehind(){
  const mfB  = Number(document.getElementById('i_mf_behind').value)||0;
  const mtgB = Number(document.getElementById('i_mtg_behind')?document.getElementById('i_mtg_behind').value:0)||0;
  document.getElementById('behindFollowUp').style.display = (mfB>0||mtgB>0) ? 'block' : 'none';
}

function calcLoanEstimate(){
  const mtg = Number(document.getElementById('i_mtg')?document.getElementById('i_mtg').value:0)||0;
  const credit = document.getElementById('creditAtPurchase')?document.getElementById('creditAtPurchase').value:'';
  const box = document.getElementById('loanEstimateBox');
  if(!box) return;
  if(mtg <= 0 || !credit){ box.style.display='none'; return; }
  box.style.display='block';
  const totalPaid = mtg * 120;
  const r = 0.179/12, n=120;
  const origPV = mtg * ((Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n)));
  const creditMap={good:'700+ (Good)',fair:'620–699 (Fair)',poor:'Below 620 (Poor)'};
  document.getElementById('totalPaid120').textContent = '$'+Math.round(totalPaid).toLocaleString();
  document.getElementById('origPrice').textContent = '$'+Math.round(origPV).toLocaleString();
  document.getElementById('loanNarrative').innerHTML =
    `Based on your ${mtg.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}/mo payment over 120 months at a <strong>17.9% APR</strong> — which is typical for timeshare financing — the estimated original loan was approximately <strong>$${Math.round(origPV).toLocaleString()}</strong>. You will pay a total of <strong>$${Math.round(totalPaid).toLocaleString()}</strong> by the time it's paid off. Credit at purchase: <strong>${creditMap[credit]||credit}</strong>.`;
}

/* ═══ WHY OUT SAVE ═══ */
function saveWhyOut(){
  const reasons=[];
  document.querySelectorAll('[id^="wo_"]').forEach(el=>{
    if(el.type==='checkbox'&&el.checked){
      const lbl=document.querySelector('label[for="'+el.id+'"]');
      if(lbl)reasons.push(lbl.textContent.trim());
    }
  });
  const other=document.getElementById('wo_other').value;
  const data={reasons,other};
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].whyOut=data;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
  const m=document.getElementById('whyOutSaved');
  m.style.display='inline';m.textContent='✓ '+reasons.length+' reason(s) saved';
}

/* ═══ USAGE SAVE ═══ */
function saveUsage(){
  const data={
    count:document.getElementById('usageCount').value,
    last:document.getElementById('lastUsed').value,
    bookings:document.getElementById('hasBookings').value,
    ready:document.getElementById('readyToStop').value,
    nextMtgDate:document.getElementById('nextMtgDate').value,
    nextMtfDate:document.getElementById('nextMtfDate').value,
    spouseAgrees:document.getElementById('spouseAgrees').checked,
    notes:document.getElementById('usageNotes').value
  };
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].usage=data;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
  const m=document.getElementById('usageSaved');m.style.display='inline';m.textContent='✓ Usage info saved';
}


/* ═══ MOTIVATION SCALE ═══ */
let motivVal = 0;
const motivMessages = {
  1:'Low urgency — take note of hesitations and revisit at close.',
  2:'Mild motivation — dig deeper into what\'s holding them back.',
  3:'Some desire but not urgent — explore financial impact to increase urgency.',
  4:'Moderate — starting to feel the pain. Continue building.',
  5:'Motivated — they want out but may have concerns. Address them.',
  6:'Clear desire — this is a realistic close. Keep going.',
  7:'Strong motivation — very likely to move forward today.',
  8:'Very strong — listen for buying signals and move toward close.',
  9:'Extremely urgent — they are ready. Do not slow down.',
  10:'Maximum urgency — they are fully committed. Move to close.'
};
function setMotiv(n){
  motivVal=n;
  document.querySelectorAll('.mot-btn').forEach((el,i)=>{
    el.classList.toggle('selected',i===n-1);
    if(n===10&&i===9){el.style.background='var(--gold)';el.querySelector('span').style.color='var(--navy)';el.querySelector('div').style.color='rgba(26,54,96,.7)';}
    else if(el.classList.contains('selected')){el.style.background='rgba(201,162,74,.35)';}
    else{el.style.background='';el.querySelector('span').style.color='';el.querySelector('div').style.color='';}
  });
  document.getElementById('motivResult').style.display='block';
  document.getElementById('motivNum').textContent=n;
  document.getElementById('motivMsg').textContent=motivMessages[n];
}
function saveMotiv(){
  const data={score:motivVal,notes:document.getElementById('motivNotes').value};
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].motiv=data;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
  const m=document.getElementById('motivSaved');m.style.display='block';m.textContent='✓ Motivation score '+motivVal+'/10 saved';
}



/* ═══ COMMITMENT CHECKBOXES ═══ */
const commitItems = ['service','timeline','down','price'];
function toggleCommit(key){
  const card  = document.getElementById('cc_'+key);
  const chk   = card.querySelector('.commit-check');
  const ans   = document.getElementById('cc_'+key+'_ans');
  const isNow = !chk.classList.contains('done');
  chk.classList.toggle('done', isNow);
  card.classList.toggle('checked', isNow);
  if(ans) ans.style.display = isNow ? 'block' : 'none';
  // show proceed button when all 4 checked
  const allDone = commitItems.every(k=>document.getElementById('cc_'+k).classList.contains('checked'));
  document.getElementById('commitProceed').style.display = allDone ? 'block' : 'none';
}

/* ═══ UPDATE HOLD RESORT NAME ═══ */
function updateHoldResort(){
  const r=document.getElementById('resortSelect');
  const el=document.getElementById('holdResortName');
  if(r&&el) el.textContent=r.value||'resort';
}
document.addEventListener('change',function(e){
  if(e.target.id==='resortSelect'){ updatePendingResort(); updateApprovedResort(); updateHoldResort(); }
});


/* ═══ HOLD SYSTEM ═══ */
function startHold(){
  document.getElementById('holdState').style.display='none';
  document.getElementById('activeHold').style.display='block';
  // Update resort name in hold message
  const r=document.getElementById('resortSelect');
  const hr=document.getElementById('holdResortDisplay');
  if(r&&hr) hr.textContent=r.value||'resort';
}
function endHold(){
  document.getElementById('activeHold').style.display='none';
  document.getElementById('decisionState').style.display='block';
}
function setDecisionHold(v){
  // save to client record
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].decision=v;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
  if(v==='approved'){
    goTo(14); // congrats
  } else if(v==='single'){
    goTo(17); // price
  } else {
    // insufficient — show inline message
    document.getElementById('decisionState').innerHTML += '<div style="margin-top:16px;background:rgba(192,57,43,.08);border:2px solid var(--red);border-radius:10px;padding:18px 22px;text-align:left;"><div style="font-family:Barlow Condensed,sans-serif;font-size:14px;font-weight:700;color:var(--red);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;">✗ Insufficient Grounds at This Time</div><p style="font-size:16px;color:var(--text2);">The case does not meet the threshold for acceptance at this time.</p></div>';
  }
}

/* ═══ WOULD SIGN QUESTION ═══ */
function handleWouldSign(v){
  setCalcQ2(v);
  const noBtn=document.getElementById('wsNo');
  const yesBtn=document.getElementById('wsYes');
  if(v==='no'){
    noBtn.style.background='var(--red)';noBtn.style.borderColor='var(--red)';
    // Show popup
    const pop=document.getElementById('riskPopup');
    pop.style.display='flex';
    const pr=document.getElementById('popupResort');
    const rs=document.getElementById('resortSelect');
    if(pr&&rs) pr.textContent=rs.value||'resort';
  } else {
    yesBtn.style.background='var(--off)';yesBtn.style.borderColor='var(--navy)';
    document.getElementById('s11NextBtn').style.display='block';
  }
}
function closeRiskPopup(){
  document.getElementById('riskPopup').style.display='none';
}

/* ═══ QUALIFYING QUESTION ═══ */
function setQualifier(v){
  const msgs={yes:"Great — let's walk through your numbers and show you exactly what today looks like.",no:"That's okay — let me address whatever concern is holding you back. That's what we're here for."};
  document.getElementById('qualYes').style.background=v==='yes'?'rgba(39,174,96,.4)':'rgba(39,174,96,.2)';
  document.getElementById('qualNo').style.background=v==='no'?'rgba(192,57,43,.3)':'rgba(192,57,43,.15)';
  const m=document.getElementById('qualMsg');m.style.display='block';m.textContent=msgs[v];
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].qualifier=v;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
}

/* ═══ APPROVAL DECISION ═══ */
function setDecision(v){
  ['Approved','Single','Insufficient'].forEach(k=>{const el=document.getElementById('dec'+k);if(el){el.classList.remove('chosen');el.style.borderColor='var(--border)';}});
  const el=document.getElementById('dec'+v.charAt(0).toUpperCase()+v.slice(1));
  if(el){el.classList.add('chosen');el.style.borderColor=v==='approved'?'#27ae60':v==='single'?'var(--navy)':'var(--red)';}
  const resEl=document.getElementById('decisionResult');
  const R={approved:{bg:'rgba(39,174,96,.08)',bc:'#27ae60',col:'#27ae60',icon:'✅',title:'CASE APPROVED — Group Filing',body:'This case qualifies for our next Scheduled Collective Filing.',btn:'See Violation Findings →',slide:15},single:{bg:'rgba(26,54,96,.06)',bc:'var(--navy)',col:'var(--navy)',icon:'📋',title:'Single Case Submission',body:'Filed individually. Proceed to pricing.',btn:'Proceed to Pricing →',slide:10},insufficient:{bg:'rgba(192,57,43,.06)',bc:'var(--red)',col:'var(--red)',icon:'✗',title:'Insufficient Grounds at This Time',body:'Case does not meet threshold for acceptance at this time.',btn:null,slide:null}};
  const r=R[v];
  resEl.style.cssText=`display:block;background:${r.bg};border:2px solid ${r.bc};border-radius:12px;padding:22px 26px;text-align:left;margin-top:16px;`;
  resEl.innerHTML=`<div style="font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:${r.col};letter-spacing:1px;margin-bottom:8px;">${r.icon} ${r.title}</div><p style="font-size:16px;color:var(--text2);line-height:1.65;margin-bottom:${r.btn?'16px':'0'};">${r.body}</p>${r.btn?`<button onclick="goTo(${r.slide})" class="btn btn-gold" style="font-size:15px;">${r.btn}</button>`:''}`;
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].decision=v;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
}

/* ═══ PENDING RESORT ═══ */
function updateApprovedResort(){
  const vr=document.getElementById('viol_resort_name');if(vr&&document.getElementById('resortSelect'))vr.textContent=document.getElementById('resortSelect').value||'resort';
  const hr=document.getElementById('holdResortDisplay');if(hr&&document.getElementById('resortSelect'))hr.textContent=document.getElementById('resortSelect').value||'resort';const r=document.getElementById('resortSelect');const el=document.getElementById('approvedResort');if(r&&el)el.textContent=r.value||'your resort';const el2=document.getElementById('nextResortName');if(r&&el2)el2.textContent=r.value||'your resort';}
function updatePendingResort(){const r=document.getElementById('resortSelect');const el=document.getElementById('pendingResort');if(r&&el)el.textContent=r.value||'your resort';}

/* ═══ MOBILE NAV ═══ */
const SLIDE_NAMES = ['Intake','Why Out','Usage','Motivation','Intro','Trust','Problem','Questions','Case Eval','Rights','Calculator','Insufficient Info','Group Filing / Hold','Decision & Hold','Congratulations','Violations','What You Pay','Price','Commitment','What Happens Next','Checklist','Final Congrats','I Promise','Contract','Transfer'];
function toggleMobileNav(){
  document.getElementById('bnav-mobile').classList.toggle('open');
}
function mobileNav(idx){
  goTo(idx);
  document.getElementById('bnav-mobile').classList.remove('open');
  updateMobileLabel(idx);
}
function updateMobileLabel(idx){
  const lbl = document.getElementById('mnLabel');
  if(lbl) lbl.innerHTML = '&#9776;&nbsp;&nbsp;' + (SLIDE_NAMES[idx]||('Slide '+idx));
  document.querySelectorAll('.mn-item').forEach((el,i)=>el.classList.toggle('active',i===idx));
}
/* Close mobile menu when tapping outside */
document.addEventListener('click',function(e){
  const nm = document.getElementById('bnav-mobile');
  if(nm && !nm.contains(e.target)) nm.classList.remove('open');
});

/* ═══ FINANCING TOGGLE ═══ */
function toggleFinancing(){
  const panel = document.getElementById('financingPanel');
  const arrow = document.getElementById('finArrow');
  const open = panel.style.display === 'block';
  panel.style.display = open ? 'none' : 'block';
  if(arrow) arrow.style.transform = open ? '' : 'rotate(180deg)';
}

/* ═══ CALCULATOR ═══ */
function calcMain(){
  const mf=Number(document.getElementById('c_mf').value)||0;
  const mtg=Number(document.getElementById('c_mtg').value)||0;
  const yr=Number(document.getElementById('c_year').value)||0;
  const gr=Number(document.getElementById('c_growth').value)||8;
  const rem=Math.max(0,10-(2026-yr));
  document.getElementById('c_payoff').value=rem===0?'Paid Off':(2026+rem).toString();
  function tot(y){let t=0;for(let i=0;i<y;i++)t+=mf*Math.pow(1+gr/100,i)+(i<rem?mtg*12:0);return t;}
  function $$(x){return x.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});}
  document.getElementById('y3').textContent=$$(tot(3));
  document.getElementById('y5').textContent=$$(tot(5));
  document.getElementById('y7').textContent=$$(tot(7));
  document.getElementById('y10').textContent=$$(tot(10));
  document.getElementById('y20').textContent=$$(tot(20));
  document.getElementById('y30').textContent=$$(tot(30));
  const mfMonthly   = mf / 12;
  const mtgMonthly  = rem > 0 ? mtg : 0;
  const totalMonthly = mfMonthly + mtgMonthly;
  document.getElementById('saveMtg').textContent  = Math.round(mtgMonthly).toLocaleString();
  document.getElementById('saveMF').textContent   = Math.round(mfMonthly).toLocaleString();
  document.getElementById('saveMonth').textContent = Math.round(totalMonthly).toLocaleString();
  document.getElementById('saveYear').textContent  = Math.round(totalMonthly * 12).toLocaleString();
  const payoffLabel = rem > 0
    ? `Loan paid off ${2026 + rem} — included above`
    : 'Loan already paid off — no mortgage payment';
  const mtgLbl  = document.getElementById('mtgLabel');
  const mtgLbl2 = document.getElementById('mtgLabel2');
  if(mtgLbl)  mtgLbl.textContent  = payoffLabel;
  if(mtgLbl2) mtgLbl2.textContent = payoffLabel;
  // Sync pricing slide copies
  const ps_mtg = document.getElementById('priceSaveMtg'); if(ps_mtg) ps_mtg.textContent = Math.round(mtgMonthly).toLocaleString();
  const ps_mf  = document.getElementById('priceSaveMF');  if(ps_mf)  ps_mf.textContent  = Math.round(mfMonthly).toLocaleString();
  const ps_mo  = document.getElementById('priceSaveMonth');if(ps_mo)  ps_mo.textContent  = Math.round(totalMonthly).toLocaleString();
  const ps_yr  = document.getElementById('priceSaveYear'); if(ps_yr)  ps_yr.textContent  = Math.round(totalMonthly*12).toLocaleString();
  // Also sync intake summary box
  const sumMtg = document.getElementById('sum_mtg'); if(sumMtg) sumMtg.textContent = Math.round(mtgMonthly).toLocaleString();
  const sumMf  = document.getElementById('sum_mf');  if(sumMf)  sumMf.textContent  = Math.round(mfMonthly).toLocaleString();
  const sumTot = document.getElementById('sum_total');if(sumTot) sumTot.textContent = Math.round(totalMonthly).toLocaleString();
  const sumYr  = document.getElementById('sum_yearly');if(sumYr) sumYr.textContent = Math.round(totalMonthly * 12).toLocaleString();
  document.getElementById('sav3').textContent  = $$(tot(3));
  document.getElementById('sav5').textContent  = $$(tot(5));
  document.getElementById('sav10').textContent = $$(tot(10));
  // comparison
  const ca=document.getElementById('compareAlpha');
  const c3=document.getElementById('compare3yr');
  const fee=Number(document.getElementById('c_fee')?document.getElementById('c_fee').value:0)||0;
  if(ca)ca.textContent=fee.toLocaleString();
  if(c3)c3.textContent=$$(tot(3));
  calcFee();
}
function calcFee(){
  const fee = Number(document.getElementById('c_fee').value)||0;
  if(!fee) return;

  const today = new Date();
  const firstPay  = new Date(today); firstPay.setDate(today.getDate()+30);
  const ninetyDay = new Date(today); ninetyDay.setDate(today.getDate()+90);
  const fmt = d => d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});

  const discAmt    = fee * 0.20;
  const discounted = fee - discAmt;            // after 20%
  const cashPrice  = discounted - 500;         // after 20% + $500
  const down10     = Math.round(discounted * 0.10);
  const balance    = discounted;
  const r=0.21/12, n=36;
  const monthly = balance*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

  function $c(x){ return x.toLocaleString('en-US',{maximumFractionDigits:0}); }
  const set = (id,v) => { const e=document.getElementById(id); if(e) e.textContent=v; };

  // Qualifier slide — new IDs
  set('revRegular',    $c(fee));
  set('revDiscounted', $c(discounted));
  set('revDiscounted2',$c(discounted));
  set('revSaved',      $c(discAmt));
  set('revCash',       $c(cashPrice));
  set('revDown',       $c(down10));
  set('revFirstPay',   fmt(firstPay));
  set('revFirstPay2',  fmt(firstPay));
  set('revNinetyDay',  fmt(ninetyDay));
  set('mPay',          $c(Math.round(monthly)));
  set('payFull',       $c(cashPrice));

  // Legacy IDs
  set('down','0');
  set('balFin',$c(balance));
  set('compareAlpha',$c(discounted));
  set('firstPayDate',fmt(firstPay));
  set('ninetyDayDate',fmt(ninetyDay));
  set('discountedFee',$c(discounted));
  set('discountAmt',$c(discAmt));
  set('downWaived',$c(down10));
  set('regularFee',$c(fee));
  set('regularFee2',$c(fee));
  set('discFeeSmall',$c(discounted));
  set('pifMonthly',$c(Math.round(monthly)));
  set('pifFull',$c(cashPrice));
  set('pifFirstDate',fmt(firstPay));
  set('pifNinetyDate',fmt(ninetyDay));
  set('pifFeeCompare',$c(discounted));

  const y3el = document.getElementById('y3');
  const c3   = document.getElementById('compare3yr');
  const pif3 = document.getElementById('pif3yrCost');
  if(y3el && y3el.textContent !== '—'){
    if(c3)  c3.textContent  = y3el.textContent;
    if(pif3)pif3.textContent = y3el.textContent;
  }
  const cf = document.getElementById('contractFee'); if(cf&&!cf.value) cf.value=discounted;
}

function showSameDaySection(){
  const fee = Number(document.getElementById('c_fee').value)||0;
  if(!fee){ alert('Please enter the service fee first.'); return; }
  calcFee();
  const s = document.getElementById('sameDaySection');
  s.style.display='block'; s.style.opacity='0'; s.style.transform='translateY(18px)';
  s.style.transition='opacity .5s ease,transform .5s ease';
  setTimeout(()=>{ s.style.opacity='1'; s.style.transform='translateY(0)'; s.scrollIntoView({behavior:'smooth',block:'start'}); },20);
  const cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');
  const client=cases.find(c=>c.cn===curCase);
  const rem=document.getElementById('qualReminder');
  if(rem) rem.style.display=(client&&client.qualifier==='yes')?'block':'none';
  const qa=document.getElementById('todayQualAnswer');
  if(qa&&client) qa.textContent=client.qualifier==='yes'?'✓ YES — Confirmed on today\'s call':'';
}

// Show "But wait" button as soon as fee is typed
document.addEventListener('input', function(e){
  if(e.target.id==='c_fee'){
    const fee=Number(e.target.value)||0;
    const disp=document.getElementById('feeEnteredDisplay');
    const btn=document.getElementById('feeStep1Btn');
    if(fee>0){
      if(disp){ disp.style.display='block'; disp.textContent='$'+fee.toLocaleString(); }
      if(btn)  btn.style.display='inline-block';
    } else {
      if(disp) disp.style.display='none';
      if(btn)  btn.style.display='none';
      const s=document.getElementById('sameDaySection'); if(s) s.style.display='none';
    }
  }
});

// Keep revealDiscount as alias for legacy calls
function revealDiscount(){ showSameDaySection(); }
function syncToCalc(){
  ['mf','mtg','year','growth'].forEach(k=>{
    document.getElementById('c_'+k).value=document.getElementById('i_'+k).value;
  });
  calcMain();
}
function syncFromCalc(){
  ['mf','mtg','year','growth'].forEach(k=>{
    document.getElementById('i_'+k).value=document.getElementById('c_'+k).value;
  });
  calcMain();
}
function syncCB(){document.getElementById('callbackPhone').value=document.getElementById('closeCallback').value;autoSave();}
function syncAddr(){document.getElementById('ownerAddress').value=document.getElementById('closeAddr').value;autoSave();}

/* ═══ CLIENT STORAGE ═══ */
let curCase=null;
function genCase(){
  let ex=(JSON.parse(localStorage.getItem('atc_cases')||'[]')).map(c=>c.cn);
  let n;do{n='A+'+String(Math.floor(Math.random()*9000000000)+1000000000);}while(ex.includes(n));
  return n;
}
function getData(){
  // Get existing record so we don't overwrite sections saved independently
  const existing = (() => {
    try {
      const cases = JSON.parse(localStorage.getItem('atc_cases')||'[]');
      return cases.find(c=>c.cn===curCase) || {};
    } catch(e){ return {}; }
  })();
  // Merge: intake fields overwrite, but preserve all other saved sections
  return Object.assign({}, existing, {
    cn:    curCase,
    name:  document.getElementById('ownerName').value,
    co:    document.getElementById('coOwner').value,
    email: document.getElementById('ownerEmail').value,
    phone: document.getElementById('ownerPhone').value,
    addr:  document.getElementById('ownerAddress').value,
    cb:    document.getElementById('callbackPhone').value,
    resort:document.getElementById('resortSelect').value,
    mf:    document.getElementById('i_mf').value,
    mtg:   document.getElementById('i_mtg').value,
    yr:    document.getElementById('i_year').value,
    gr:    document.getElementById('i_growth').value,
    mtgStatus: (document.getElementById('mtgStatus')||{value:''}).value,
    notes: document.getElementById('intakeNotes').value,
    saved: new Date().toLocaleString()
  });
}

function setData(c){
  if(!c)return;
  curCase=c.cn;
  // ── Intake ──
  document.getElementById('ownerName').value    = c.name||'';
  document.getElementById('coOwner').value      = c.co||'';
  document.getElementById('ownerEmail').value   = c.email||'';
  document.getElementById('ownerPhone').value   = c.phone||'';
  document.getElementById('ownerAddress').value = c.addr||'';
  document.getElementById('callbackPhone').value= c.cb||'';
  document.getElementById('resortSelect').value = c.resort||'';
  document.getElementById('i_mf').value         = c.mf||900;
  document.getElementById('i_mtg').value        = c.mtg||600;
  document.getElementById('i_year').value       = c.yr||2018;
  document.getElementById('i_growth').value     = c.gr||8;
  document.getElementById('intakeNotes').value  = c.notes||'';
  document.getElementById('closeCallback').value= c.cb||'';
  document.getElementById('closeAddr').value    = c.addr||'';

  // ── Mortgage status toggle ──
  if(c.mtgStatus){
    const ms=document.getElementById('mtgStatus');
    if(ms) ms.value=c.mtgStatus;
    toggleMtg();
  }

  // ── Why Out checkboxes ──
  if(c.whyOut){
    if(c.whyOut.reasons) c.whyOut.reasons.forEach(reason=>{
      document.querySelectorAll('[id^="wo_"]').forEach(el=>{
        if(el.type==='checkbox'){
          const lbl=document.querySelector('label[for="'+el.id+'"]');
          if(lbl&&lbl.textContent.trim()===reason) el.checked=true;
        }
      });
    });
    if(c.whyOut.other){ const el=document.getElementById('wo_other'); if(el) el.value=c.whyOut.other; }
  }

  // ── Usage ──
  if(c.usage){
    ['usageCount','lastUsed','hasBookings','readyToStop'].forEach(id=>{
      const el=document.getElementById(id); if(el&&c.usage[id]) el.value=c.usage[id];
    });
    const un=document.getElementById('usageNotes'); if(un) un.value=c.usage.notes||'';
    const sa=document.getElementById('spouseAgrees'); if(sa) sa.checked=!!c.usage.spouseAgrees;
    const sn=document.getElementById('spouseNotes'); if(sn) sn.value=c.usage.notes||'';
    const nm=document.getElementById('nextMtgDate'); if(nm) nm.value=c.usage.nextMtgDate||'';
    const nf=document.getElementById('nextMtfDate'); if(nf) nf.value=c.usage.nextMtfDate||'';
  }

  // ── Motivation ──
  if(c.motiv&&c.motiv.score) setMotiv(c.motiv.score);
  if(c.motiv&&c.motiv.notes){ const el=document.getElementById('motivNotes'); if(el) el.value=c.motiv.notes; }

  // ── Qualifier ──
  if(c.qualifier) setQualifier(c.qualifier);

  // ── Rights assessment ──
  if(c.rights) loadRights(c.rights);

  // ── Acknowledgment ──
  if(c.ack){
    const an=document.getElementById('ackName'); if(an) an.value=c.ack.name||'';
    const as=document.getElementById('ackSig');  if(as) as.value=c.ack.sig||'';
    const ad=document.getElementById('ackDate'); if(ad) ad.value=c.ack.date||'';
    const i1=document.getElementById('init1');   if(i1) i1.value=c.ack.init1||'';
    const i2=document.getElementById('init2');   if(i2) i2.value=c.ack.init2||'';
  }

  // ── Contract ──
  if(c.contract){
    const cs=document.getElementById('clientSig');   if(cs) cs.value=c.contract.sig||'';
    const cp=document.getElementById('clientPrint'); if(cp) cp.value=c.contract.print||'';
    const cd=document.getElementById('clientDate');  if(cd) cd.value=c.contract.date||'';
    const ef=document.getElementById('contractFee'); if(ef) ef.value=c.contract.fee||'';
    const ed=document.getElementById('contractDate');if(ed) ed.value=c.contract.effectiveDate||'';
  }

  syncToCalc();
  showBadge(c.cn, c.name);
}
function showBadge(cn,name){
  const b=document.getElementById('caseBadge');
  b.style.display='inline-block';
  b.textContent='Case: '+cn+(name?' — '+name:'');
}
function saveClient(){
  const name=document.getElementById('ownerName').value.trim();
  if(!name){alert('Please enter owner name before saving.');return;}
  if(!curCase)curCase=genCase();
  let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');
  const idx=cases.findIndex(c=>c.cn===curCase);
  const d=getData();
  if(idx>=0)cases[idx]=d;else cases.unshift(d);
  localStorage.setItem('atc_cases',JSON.stringify(cases));
  showBadge(curCase,name);
  const msg=document.getElementById('saveMsg');
  msg.style.display='block';
  msg.textContent='✓ Saved. Case Number: '+curCase;
  renderPast();
}
function autoSave(){if(curCase)saveClient();}
function finalSave(){
  syncCB();syncAddr();saveClient();
  const m=document.getElementById('finalMsg');
  m.style.display='block';m.textContent='✓ Record updated with callback number and address.';
}
function newClient(){
  curCase=null;
  ['ownerName','coOwner','ownerEmail','ownerPhone','ownerAddress','callbackPhone','intakeNotes','closeCallback','closeAddr'].forEach(id=>{document.getElementById(id).value='';});
  document.getElementById('resortSelect').value='';
  document.getElementById('i_mf').value=900;
  document.getElementById('i_mtg').value=600;
  document.getElementById('i_year').value=2018;
  document.getElementById('i_growth').value=8;
  syncToCalc();
  document.getElementById('caseBadge').style.display='none';
  document.getElementById('saveMsg').style.display='none';
  goTo(0);
  togglePanel();
}
/* ═══ CLIENT PANEL ═══ */
function renderPast(){
  const cases = JSON.parse(localStorage.getItem('atc_cases')||'[]');
  const el = document.getElementById('pastList');
  const countEl = document.getElementById('clientCount');
  const q = (document.getElementById('clientSearch')||{value:''}).value.toLowerCase().trim();

  const filtered = cases.filter(c =>
    !q ||
    (c.name||'').toLowerCase().includes(q) ||
    (c.cn||'').toLowerCase().includes(q) ||
    (c.resort||'').toLowerCase().includes(q)
  );

  if(countEl) countEl.textContent = cases.length + ' client' + (cases.length!==1?'s':'') + ' saved' + (q ? ' — ' + filtered.length + ' match' : '');

  el.innerHTML = '';
  if(!filtered.length){
    el.innerHTML = '<p style="font-size:14px;color:var(--muted);text-align:center;padding:20px 0;">' + (q ? 'No matches found.' : 'No saved clients yet.') + '</p>';
    return;
  }
  filtered.forEach(c => {
    const d = document.createElement('div');
    d.className = 'pcr' + (c.cn === curCase ? ' pcr-active' : '');
    const motiv = c.motiv ? ' · 🔥'+c.motiv.score+'/10' : '';
    const ack = c.ack ? ' ✓Ack' : '';
    const contract = c.contract ? ' ✓Contract' : '';
    d.innerHTML = `
      <div style="flex:1;min-width:0;">
        <div class="pcr-nm">${c.name||'Unnamed'}</div>
        <div class="pcr-cs">${c.cn||''}${motiv}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px;">${c.resort||'No resort'}${ack}${contract}</div>
        <div style="font-size:11px;color:var(--muted);">${c.saved||''}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:5px;flex-shrink:0;">
        <button onclick="event.stopPropagation();loadClientById('${c.cn}')" style="font-size:11px;padding:4px 8px;background:var(--navy);color:#fff;border:none;border-radius:4px;cursor:pointer;font-family:'Barlow Condensed',sans-serif;letter-spacing:.5px;">Load</button>
        <button onclick="event.stopPropagation();deleteClient('${c.cn}')" style="font-size:11px;padding:4px 8px;background:transparent;color:var(--red);border:1px solid var(--red);border-radius:4px;cursor:pointer;font-family:'Barlow Condensed',sans-serif;letter-spacing:.5px;">Del</button>
      </div>`;
    el.appendChild(d);
  });
}

function loadClientById(cn){
  const cases = JSON.parse(localStorage.getItem('atc_cases')||'[]');
  const c = cases.find(x => x.cn === cn);
  if(c){ setData(c); togglePanel(); goTo(0); }
}

function deleteClient(cn){
  if(!confirm('Delete this client record? This cannot be undone.')) return;
  let cases = JSON.parse(localStorage.getItem('atc_cases')||'[]');
  cases = cases.filter(c => c.cn !== cn);
  localStorage.setItem('atc_cases', JSON.stringify(cases));
  if(curCase === cn){ curCase = null; }
  renderPast();
}

/* ═══ EXPORT ═══ */
function exportClients(){
  const cases = JSON.parse(localStorage.getItem('atc_cases')||'[]');
  if(!cases.length){ alert('No clients saved yet.'); return; }
  const payload = {
    exportedBy: 'Alpha Timeshare Consultants — Case Presentation',
    exportedAt: new Date().toLocaleString(),
    version: '1.0',
    count: cases.length,
    clients: cases
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Alpha_Clients_' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ═══ IMPORT ═══ */
function importClients(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){
    try {
      const parsed = JSON.parse(e.target.result);
      const incoming = parsed.clients || (Array.isArray(parsed) ? parsed : null);
      if(!incoming) throw new Error('Invalid file format');

      const existing = JSON.parse(localStorage.getItem('atc_cases')||'[]');
      const existingCNs = new Set(existing.map(c => c.cn));

      let added = 0, updated = 0, skipped = 0;
      const merged = [...existing];

      incoming.forEach(c => {
        if(!c.cn){ skipped++; return; }
        const idx = merged.findIndex(x => x.cn === c.cn);
        if(idx >= 0){
          // Ask whether to overwrite — default: keep newer (by savedAt)
          merged[idx] = c;
          updated++;
        } else {
          merged.unshift(c);
          added++;
        }
      });

      localStorage.setItem('atc_cases', JSON.stringify(merged));
      renderPast();

      const msg = document.getElementById('importMsg');
      msg.style.display = 'block';
      msg.textContent = `✓ Import complete — ${added} new, ${updated} updated, ${skipped} skipped. Total: ${merged.length} clients.`;
      setTimeout(()=>{ msg.style.display='none'; }, 8000);

    } catch(err){
      alert('Import failed: ' + err.message + '\n\nMake sure you are importing a valid Alpha client export file.');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

/* ═══ PANEL ═══ */
function togglePanel(){document.getElementById('clientPanel').classList.toggle('open');renderPast();}

/* ═══ NAV & SCROLL ═══ */
const slides=document.querySelectorAll('.slide');
const dotsEl=document.getElementById('navDots');
const bbs=document.querySelectorAll('.bb');
slides.forEach((_,i)=>{
  const d=document.createElement('div');
  d.className='nav-dot'+(i===0?' active':'');
  d.onclick=()=>goTo(i);
  dotsEl.appendChild(d);
});
function goTo(idx){document.getElementById('slide-'+idx).scrollIntoView({behavior:'smooth'});}
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const i=Number(e.target.dataset.slide);
      document.querySelectorAll('.nav-dot').forEach((d,j)=>d.classList.toggle('active',j==i));
      bbs.forEach((b,j)=>b.classList.toggle('active',j==i));
      updateMobileLabel(i);
    }
  });
},{threshold:0.4});
slides.forEach(s=>obs.observe(s));

/* ═══ FADE ═══ */
const fo=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.12});
document.querySelectorAll('.fade-up').forEach(el=>fo.observe(el));

/* ═══ ACCORDIONS ═══ */
function toggleR(el){el.classList.toggle('open');}
/* Stop clicks inside accordion body from bubbling up and closing the panel */
document.addEventListener('click', function(e){
  const body = e.target.closest('.rbody');
  if(body) e.stopPropagation();
}, true);
function toggleFaq(el){el.classList.toggle('open');}
/* Stop clicks inside FAQ answer from bubbling up and closing it */
document.addEventListener('click', function(e){
  const body = e.target.closest('.faq-a');
  if(body) e.stopPropagation();
}, true);

/* ═══ VIOLATIONS REVEAL ═══ */
const RIGHTS_MAP = {
  r1: 'Right to Safety',
  r2: 'Right to Be Heard',
  r3: 'Right to Choose',
  r4: 'Right to Be Informed',
  r5: 'Right to Education',
  r6: 'Right to Redress'
};
function showViolationFlash(){
  setCalcQ1('no');
  const el=document.getElementById('violationFlash');
  if(el){el.style.display='block';el.scrollIntoView({behavior:'smooth',block:'start'});}
  document.getElementById('cq1No').style.background='var(--red)';
  document.getElementById('cq1No').style.borderColor='var(--red)';
}
function revealViolations(){
  const grid = document.getElementById('violationsGrid');
  const summary = document.getElementById('rightsSummary');
  const noViol = document.getElementById('noViolations');
  const violList = document.getElementById('violationsList');
  const countEl = document.getElementById('violCount');
  if(!grid) return;
  grid.innerHTML = ''; summary.innerHTML = '';
  let total = 0; let vNum = 0;
  Object.keys(RIGHTS_MAP).forEach(r => {
    const checks = [];
    document.querySelectorAll('input[id^="'+r+'"]').forEach(el => {
      if(el.type==='checkbox' && el.checked){
        const lbl = document.querySelector('label[for="'+el.id+'"]');
        if(lbl) checks.push(lbl.textContent.trim());
      }
    });
    checks.forEach(txt => {
      vNum++;
      const d = document.createElement('div');
      d.className = 'viol-card';
      d.innerHTML = `<div class="viol-num">${vNum}</div><div><div class="viol-right">${RIGHTS_MAP[r]}</div><div class="viol-text">${txt}</div></div>`;
      grid.appendChild(d);
    });
    if(checks.length > 0){
      total += checks.length;
      const row = document.createElement('div');
      row.className = 'rs-row';
      row.innerHTML = `<div class="rs-badge">${checks.length}</div><div class="rs-name">${RIGHTS_MAP[r]}</div><div class="rs-count">${checks.length} violation${checks.length>1?'s':''}</div>`;
      summary.appendChild(row);
    }
  });
  countEl.textContent = total;
  if(total > 0){
    violList.style.display = 'block';
    noViol.style.display = 'none';
  } else {
    violList.style.display = 'none';
    noViol.style.display = 'block';
  }
}

/* ═══ SAVE RIGHTS NOTES ═══ */
function saveRights(){
  const ids=['r1','r2','r3','r4','r5','r6'];
  const rightsData={};
  ids.forEach(r=>{
    const noteEl=document.getElementById(r+'_notes');
    const otherEl=document.getElementById(r+'_other');
    rightsData[r]={
      notes:noteEl?noteEl.value:'',
      other:otherEl?otherEl.value:'',
      checks:[]
    };
    // collect checked boxes
    document.querySelectorAll('input[id^="'+r+'"]').forEach(el=>{
      if(el.type==='checkbox'&&el.checked){
        const lbl=document.querySelector('label[for="'+el.id+'"]');
        if(lbl)rightsData[r].checks.push(lbl.textContent.trim());
      }
    });
    // extra fields
    ['_med','_credit','_resort_said','_freq','_lastused','_prestime','_perpetual'].forEach(suffix=>{
      const el=document.getElementById(r+suffix);
      if(el&&el.value)rightsData[r][suffix.replace('_','')]=el.value;
    });
  });
  if(curCase){
    let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');
    const idx=cases.findIndex(c=>c.cn===curCase);
    if(idx>=0){cases[idx].rights=rightsData;localStorage.setItem('atc_cases',JSON.stringify(cases));}
  }
  const m=document.getElementById('rightsSaveMsg');
  m.style.display='block';
  const total=Object.values(rightsData).reduce((a,r)=>a+r.checks.length,0);
  m.textContent='✓ Assessment saved — '+total+' violation(s) documented. Case: '+(curCase||'not yet saved');
}

/* ═══ LOAD RIGHTS (when loading client) ═══ */
function loadRights(rightsData){
  if(!rightsData)return;
  Object.keys(rightsData).forEach(r=>{
    const d=rightsData[r];
    if(d.notes){const el=document.getElementById(r+'_notes');if(el)el.value=d.notes;}
    if(d.other){const el=document.getElementById(r+'_other');if(el)el.value=d.other;}
  });
}

/* ═══ ACKNOWLEDGMENT SAVE ═══ */
function saveAck(){
  const name=document.getElementById('ackName').value.trim();
  if(!name){alert('Please enter client name.');return;}
  const data={name,sig:document.getElementById('ackSig').value,date:document.getElementById('ackDate').value,init1:document.getElementById('init1').value,init2:document.getElementById('init2').value};
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].ack=data;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
  const m=document.getElementById('ackMsg');m.style.display='block';m.textContent='✓ Acknowledgment saved for '+name+' — '+new Date().toLocaleDateString();
}
/* ═══ CONTRACT SAVE ═══ */
function saveContract(){
  const sig=document.getElementById('clientSig').value.trim();
  if(!sig){alert('Please enter client signature.');return;}
  const data={sig,print:document.getElementById('clientPrint').value,date:document.getElementById('clientDate').value,fee:document.getElementById('contractFee').value,effectiveDate:document.getElementById('contractDate').value};
  if(curCase){let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');const idx=cases.findIndex(c=>c.cn===curCase);if(idx>=0){cases[idx].contract=data;localStorage.setItem('atc_cases',JSON.stringify(cases));}}
  const m=document.getElementById('contractMsg');m.style.display='block';m.textContent='✓ Agreement confirmed. Case: '+(curCase||'unsaved')+' — '+new Date().toLocaleString();
}
/* ═══ ADD OWNERSHIP ═══ */
function addOwnership(){
  const c=document.getElementById('ownershipFields');const row=document.createElement('div');row.className='g2';row.style.gap='12px';
  row.innerHTML='<div class="fl" style="margin:0;"><label>Resort / Property Name</label><input type="text" placeholder="(additional ownership)"></div><div class="fl" style="margin:0;"><label>Located At (Address)</label><input type="text" placeholder="Resort address"></div>';
  c.appendChild(row);
}
/* ═══ PDF ═══ */
function dlPDF(){
  html2pdf().set({margin:.3,filename:'Alpha_Case_'+(curCase||'Presentation')+'.pdf',image:{type:'jpeg',quality:.95},html2canvas:{scale:1.5},jsPDF:{unit:'in',format:'letter',orientation:'landscape'}}).from(document.body).save();
}

/* ═══ INIT ═══ */
calcMain();
renderPast();


/* ── Populate final cost numbers ── */
function updateFinalNumbers(){
  const y3El = document.getElementById('y3');
  const f3   = document.getElementById('final3yr');
  if(y3El && f3 && y3El.textContent !== '—') f3.textContent = y3El.textContent;
  const mf   = Number(document.getElementById('c_mf')  ? document.getElementById('c_mf').value  : 0)||0;
  const mtg  = Number(document.getElementById('c_mtg') ? document.getElementById('c_mtg').value : 0)||0;
  const mo   = mf/12 + mtg;
  const fee  = Number(document.getElementById('c_fee') ? document.getElementById('c_fee').value  : 0)||0;
  const fmEl = document.getElementById('finalMonths');
  if(fmEl && mo > 0 && fee > 0) fmEl.textContent = Math.ceil(fee/mo);
  // legacy IDs (keep for compat)
  const f10 = document.getElementById('final10yr'); if(f10) f10.textContent='';
  const fp  = document.getElementById('finalTotalPaid'); if(fp) fp.textContent='';
}
document.addEventListener('DOMContentLoaded', updateFinalNumbers);

/* ── Modal controls ── */
function openTransfer(){
  updateFinalNumbers();
  document.getElementById('transferModal').classList.add('active');
  if(curCase){
    let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');
    const idx=cases.findIndex(c=>c.cn===curCase);
    if(idx>=0){cases[idx].outcome='transferred';cases[idx].closedAt=new Date().toLocaleString();localStorage.setItem('atc_cases',JSON.stringify(cases));}
  }
}
function openSchedule(){
  document.getElementById('scheduleModal').classList.add('active');
  // Pre-fill phone from intake
  const cb = document.getElementById('callbackPhone');
  const sp = document.getElementById('schedPhone');
  if(cb && sp && cb.value) sp.value = cb.value;
}
function closeModal(id){
  document.getElementById(id).classList.remove('active');
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(m=>{
  m.addEventListener('click',function(e){if(e.target===this)this.classList.remove('active');});
});

/* ── Objection data ── */
const OBJECTIONS = {

  think:{
    q: "Of course — what specifically would you like more time to think through?",
    options:[
      {label:"Whether this is the right company to trust",   val:"trust"},
      {label:"Whether the guarantee is real",                val:"guarantee"},
      {label:"Whether the timing is right financially",      val:"money"},
      {label:"Whether the process actually works",           val:"process"},
      {label:"Something else",                               val:"other_think"},
    ],
    responses:{
      trust:`In 41 years, our reputation has been built entirely on results — not promises. The only reason we can offer a written 100% money-back guarantee is because we are that confident. We would never take on a case we didn't believe we could win. The real question is: what would it take for you to feel confident we're the right fit?`,
      guarantee:`The guarantee is written directly into the contract — not a verbal promise. If no written release is obtained within the Guarantee Term, you receive a full refund of every dollar paid. No questions, no exceptions. That is the only kind of guarantee worth anything.`,
      money:`Completely understood. Here's one way to look at it — every month you stay in this ownership, the cost continues. The service fee is a one-time investment. The question isn't really whether you can afford to exit — it's whether you can afford to stay.`,
      process:`Fair question. What you are doing is not filing a lawsuit — you're adding your documented violations to a group filing alongside others who were sold the same way. Developers resolve these because it is less expensive than defending thousands of combined violations. The process has a defined beginning and a contractually guaranteed end.`,
      other_think:`Take whatever time you need to think it through. If it would help, I'm happy to walk back through any specific part of what we covered today.`,
    }
  },

  spouse:{
    q: "Of course. Are they available right now — could we bring them on the call for just a few minutes?",
    options:[
      {label:"Yes — let me get them",                        val:"get_now"},
      {label:"No — they're not available right now",         val:"not_now"},
      {label:"They're hesitant and I'm not sure how they feel", val:"hesitant"},
      {label:"They're on the same page but not here",        val:"agrees"},
    ],
    responses:{
      get_now:`Perfect — let's bring them in so they can hear everything firsthand and ask any questions they have. Everything is more straightforward when both owners are part of the conversation.`,
      not_now:`No problem at all. Would it be possible to set up a short 15-minute call with both of you together this week? That way there are no second-hand summaries — they can hear everything directly and ask anything they'd like. I'll hold the same-day pricing for that call.`,
      hesitant:`That's very common — and honestly, their hesitation is understandable. Most spouses who come onto a call with questions leave with clarity. The concern is usually about either the cost, the process, or whether it's real. I'd love the chance to answer their specific questions directly. Would you be comfortable setting up a short 3-way call?`,
      agrees:`Great — then you're both aligned on wanting out, which is the most important part. If they're in agreement, the only thing left is making it official. I can hold your pricing for a follow-up call within the next day or two so they can be part of the conversation before we finalize.`,
    }
  },

  finances:{
    q: "That makes complete sense. What is the main financial concern on your mind?",
    options:[
      {label:"I'm not sure I can afford the monthly payments",  val:"afford"},
      {label:"I want to make sure it's worth the cost",         val:"worth"},
      {label:"I want to wait until after a specific expense",   val:"timing"},
      {label:"I'm not sure about financing",                    val:"financing"},
    ],
    responses:{
      afford:`The payment is structured so that you don't pay anything down today, and your first installment isn't due for 30 days. After that, the monthly amount is likely significantly less than what you're currently paying in maintenance fees and mortgage combined. You're not adding a new cost — you're redirecting an existing one toward a solution that has a finish line.`,
      worth:`The cost of staying is documented right in front of you — the 10, 20, and 30-year projections. The service fee is a one-time investment with a money-back guarantee if we don't perform. If we do perform — and we expect to — you stop paying indefinitely. Most clients recover the service fee within the first 12 to 18 months of not paying maintenance fees alone.`,
      timing:`Understood. Is it a matter of weeks, or closer to a few months? The reason I ask is that the same-day discount we applied today is specific to this assessment. I want to make sure I can work with you on a structure that fits your timeline without losing what you've already qualified for.`,
      financing:`The financing through our payment plan is straightforward — $0 down, first payment in 30 days, 0% interest for the first 90 days. If you pay it off within that window, there are no finance charges at all. After 90 days a standard rate applies. Is there a specific part of the financing you'd like to walk through together?`,
    }
  },

  contract:{
    q: "Absolutely — what section would you like to focus on?",
    options:[
      {label:"The money-back guarantee terms",               val:"guarantee"},
      {label:"What happens if you don't get a result",       val:"noresult"},
      {label:"The payment and financing terms",              val:"payment"},
      {label:"What the company is actually authorized to do",val:"scope"},
    ],
    responses:{
      guarantee:`The guarantee is in the Certificate of Guarantee — it's the very first document in the package. It states plainly: if we do not obtain a written Favorable Outcome within the Guarantee Term, you receive a 100% refund of the service fee upon written request and a signed release. There is no fine print that changes that.`,
      noresult:`If the Guarantee Term ends without a written release, you have two options written into the contract: you can request a full refund of what you've paid, or you can elect to extend the agreement at no additional cost. The choice is entirely yours. We cannot simply stop working and keep your money.`,
      payment:`The payment section lays out whichever option you selected — pay in full, Alpha EasyPay at 0% interest for 12 months, or third-party financing. The EasyPay section specifically states 0% interest, no finance charges, and drafts on the 1st or 15th of the month at your preference.`,
      scope:`Section 1 covers scope of service — what Alpha is and is not authorized to do. We are a consumer advocacy firm. We do not buy, sell, or transfer your timeshare. We build and present your case file, coordinate correspondence, and pursue a documented written release. Everything we do on your behalf requires your cooperation — nothing is done without your knowledge.`,
    }
  },

  compare:{
    q: "That's a fair approach. What are you hoping to find in the comparison?",
    options:[
      {label:"A lower price",                                val:"price"},
      {label:"A company that guarantees results",            val:"guarantee"},
      {label:"More information about how the process works", val:"process"},
      {label:"Someone I've heard of before",                 val:"trust"},
    ],
    responses:{
      price:`Pricing in this industry ranges from a few thousand to over ten thousand dollars — and the difference almost never comes down to process quality. What should matter is: do they offer a written guarantee, are they operating fully in-house, and do they have a verifiable track record? We check all three. A lower price without a written guarantee is not a deal — it's a risk.`,
      guarantee:`Most companies in this space either can't legally offer a guarantee or won't. We offer one because our process and our track record support it. It's written into the contract — not a verbal promise. If you find another firm that offers the same written 100% money-back guarantee with a defined timeline, I want to know who they are.`,
      process:`Completely fair. The short version: most exit companies work individual cases. We build collective filings that demonstrate a pattern of misconduct across multiple clients from the same developer. That pattern-level pressure is what creates the leverage that gets cases resolved. It's a different approach — and it's why our timeline is faster than most.`,
      trust:`Forty-one years in this space means there are thousands of clients who have been through this process with us. The Google reviews are live and unfiltered. The BBB rating is independently verified. If you'd like to take the time to search our name and read what past clients have said, I'd encourage it — because that's exactly what I'd do.`,
    }
  },

  timing:{
    q: "I understand. Can you tell me a little more about what's making today feel too soon?",
    options:[
      {label:"I just need a day or two to process everything",  val:"process"},
      {label:"Something else is going on in my life right now", val:"life"},
      {label:"I wasn't expecting to make a decision today",     val:"unexpected"},
      {label:"I'm not fully convinced yet",                     val:"notready"},
    ],
    responses:{
      process:`That's completely understandable — we covered a lot of ground today. Here's what I'd suggest: take the next 24 to 48 hours, and if the numbers we went through still make sense to you — and I believe they will — we'll get back on the phone and finalize everything. I'll hold your pricing. Fair?`,
      life:`Of course — life doesn't pause. I'm not here to add pressure to a difficult time. If anything, getting this resolved is one less financial and emotional weight you'll be carrying. But I understand. Let's find a time in the next week that gives you enough breathing room.`,
      unexpected:`That's fair. We do tend to cover a lot in one session. What I'll say is — the decision you're making isn't impulsive. It's based on real numbers, documented violations, and a contractual guarantee. But if it would help to sleep on it and reconnect tomorrow, that's a conversation I'm happy to have.`,
      notready:`I appreciate your honesty — that matters more than a yes today. Can you tell me what would need to be different for you to feel ready? Is it something about the process, the price, the guarantee, or something else? If I can address it, I want to try. If I can't, I'll tell you.`,
    }
  },

  other:{
    q: "I want to make sure we address whatever is on your mind. What can I help clarify?",
    options:[
      {label:"I have a question I didn't get to ask",           val:"question"},
      {label:"I want to verify something I was told",           val:"verify"},
      {label:"I'm not sure this will work for my specific case",val:"specific"},
    ],
    responses:{
      question:`Of course — I'm still here. What's the question?`,
      verify:`Absolutely — everything we discussed today is in writing. If there's something specific that was said that you want to confirm is in the contract or the guarantee, let's look at it together right now.`,
      specific:`That's a great instinct. Your case was reviewed before we got to this point — and the reason we're still in conversation is because it meets our acceptance criteria. But if there's something specific about your situation that concerns you, let's talk through it and I'll give you a straight answer.`,
    }
  }

};

let currentObjKey = null;
let currentOptVal = null;

function handleObjReason(){
  const key = document.getElementById('schedReason').value;
  if(!key){ document.getElementById('objCard').classList.remove('visible'); return; }
  currentObjKey = key;
  currentOptVal = null;
  const obj = OBJECTIONS[key];
  document.getElementById('objQuestion').textContent = obj.q;
  const optBox = document.getElementById('objOptions');
  optBox.innerHTML = '';
  obj.options.forEach(o=>{
    const btn = document.createElement('button');
    btn.className='obj-opt';
    btn.textContent=o.label;
    btn.onclick=()=>handleObjOption(o.val, btn);
    optBox.appendChild(btn);
  });
  document.getElementById('objCard').classList.add('visible');
  document.getElementById('responseBox').classList.remove('visible');
  document.getElementById('schedFields').style.display='none';
}

function handleObjOption(val, btnEl){
  currentOptVal = val;
  document.querySelectorAll('.obj-opt').forEach(b=>b.classList.remove('selected'));
  btnEl.classList.add('selected');
  const response = OBJECTIONS[currentObjKey]?.responses?.[val];
  if(response){
    document.getElementById('responseText').textContent = response;
    document.getElementById('responseBox').classList.add('visible');
  }
  // Show scheduling fields after a brief pause
  setTimeout(()=>{document.getElementById('schedFields').style.display='block';},400);
}

function submitSchedule(){
  const date  = document.getElementById('schedDate').value;
  const time  = document.getElementById('schedTime').value;
  const phone = document.getElementById('schedPhone').value;
  const notes = document.getElementById('schedNotes').value;
  const reason= document.getElementById('schedReason').value;
  if(!date||!time){alert('Please select a date and time.');return;}
  const fmt = new Date(date+'T12:00:00').toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  document.getElementById('schedConfirm').style.display='block';
  document.getElementById('schedConfirm').innerHTML = `✓ Follow-up confirmed for <strong>${fmt} at ${time}</strong>.<br>We'll call <strong>${phone||'the number on file'}</strong>. See you then.`;
  if(curCase){
    let cases=JSON.parse(localStorage.getItem('atc_cases')||'[]');
    const idx=cases.findIndex(c=>c.cn===curCase);
    if(idx>=0){cases[idx].followUp={date,time,phone,reason,notes,objOption:currentOptVal};cases[idx].outcome='scheduled';localStorage.setItem('atc_cases',JSON.stringify(cases));}
  }
}

</script>

<!-- ═══ CLOSING SECTION — insert before TRANSFER/SCHEDULE buttons ═══ -->

<style>
/* ── Closing Section Styles ── */
.close-section{padding:60px 40px;max-width:860px;margin:0 auto;}
.decision-bar{
  display:flex;gap:16px;justify-content:center;flex-wrap:wrap;
  margin-top:40px;padding-top:32px;
  border-top:2px solid var(--border);
}
.btn-transfer{
  background:linear-gradient(135deg,#1a8a3e,#27ae60);
  color:#fff;border:none;border-radius:12px;
  padding:20px 50px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:22px;font-weight:700;letter-spacing:2px;
  text-transform:uppercase;cursor:pointer;
  box-shadow:0 6px 28px rgba(39,174,96,.35);
  transition:all .2s;
}
.btn-transfer:hover{transform:translateY(-2px);box-shadow:0 10px 36px rgba(39,174,96,.45);}
.btn-schedule{
  background:#fff;color:var(--navy);
  border:2.5px solid var(--border);
  border-radius:12px;padding:20px 40px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:18px;font-weight:700;letter-spacing:1px;
  text-transform:uppercase;cursor:pointer;
  transition:all .2s;
}
.btn-schedule:hover{border-color:var(--navy);transform:translateY(-2px);}

/* ── Modal Base ── */
.modal-overlay{
  display:none;position:fixed;inset:0;
  background:rgba(10,25,50,.75);
  backdrop-filter:blur(6px);
  z-index:2000;
  align-items:center;justify-content:center;
}
.modal-overlay.active{display:flex;}
.modal-box{
  background:#fff;border-radius:16px;
  padding:40px;max-width:580px;width:90%;
  box-shadow:0 20px 60px rgba(0,0,0,.3);
  position:relative;max-height:90vh;overflow-y:auto;
}
.modal-close{
  position:absolute;top:16px;right:18px;
  background:none;border:none;font-size:22px;
  color:var(--muted);cursor:pointer;line-height:1;
}
.modal-close:hover{color:var(--navy);}

/* ── Transfer Modal ── */
.transfer-check{
  width:72px;height:72px;border-radius:50%;
  background:linear-gradient(135deg,#27ae60,#1a8a3e);
  display:flex;align-items:center;justify-content:center;
  font-size:36px;margin:0 auto 22px;
  box-shadow:0 8px 24px rgba(39,174,96,.3);
}
.transfer-confetti{
  font-size:13px;color:var(--muted);margin-top:20px;
  border-top:1px solid var(--border);padding-top:16px;line-height:1.7;
}

/* ── Schedule Form ── */
.sched-label{
  font-family:'Barlow Condensed',sans-serif;
  font-size:11px;letter-spacing:2px;text-transform:uppercase;
  color:var(--muted);margin-bottom:6px;font-weight:600;
  display:block;margin-top:14px;
}
.sched-input{
  width:100%;background:var(--off);
  border:1.5px solid var(--border);border-radius:7px;
  padding:10px 14px;font-family:'Barlow',sans-serif;
  font-size:16px;color:var(--text);outline:none;
  transition:border-color .2s;
}
.sched-input:focus{border-color:var(--navy);}
.sched-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}

/* ── Objection Card ── */
.obj-card{
  display:none;margin-top:16px;
  border-radius:10px;padding:18px 20px;
  border:1.5px solid var(--border);
  background:var(--blue-pale);
}
.obj-card.visible{display:block;}
.obj-q{
  font-size:16px;color:var(--navy);
  font-weight:600;margin-bottom:14px;line-height:1.5;
}
.obj-options{display:flex;flex-direction:column;gap:9px;}
.obj-opt{
  background:#fff;border:1.5px solid var(--border);
  border-radius:7px;padding:11px 16px;
  font-size:15px;color:var(--text);
  cursor:pointer;transition:all .2s;text-align:left;
  width:100%;
}
.obj-opt:hover{border-color:var(--navy);background:var(--blue-pale);}
.obj-opt.selected{border-color:var(--navy);background:var(--navy);color:#fff;}

/* ── Response Box ── */
.response-box{
  display:none;margin-top:16px;
  background:var(--navy);border-radius:10px;
  padding:18px 20px;color:#fff;
  border-left:4px solid var(--gold);
}
.response-box.visible{display:block;}
.response-box p{font-size:16px;line-height:1.75;color:rgba(255,255,255,.9);}
.response-box .rb-label{
  font-family:'Barlow Condensed',sans-serif;
  font-size:11px;letter-spacing:3px;text-transform:uppercase;
  color:var(--gold);margin-bottom:8px;font-weight:700;
}

.sched-submit{
  width:100%;margin-top:20px;
  background:var(--navy);color:#fff;
  border:none;border-radius:8px;padding:13px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:16px;font-weight:700;letter-spacing:1px;
  text-transform:uppercase;cursor:pointer;transition:all .2s;
}
.sched-submit:hover{background:var(--navy2);}
</style>

<!-- ─── DECISION MOMENT ─── -->
<section class="slide bg-white" id="slide-24" data-slide="24" style="min-height:auto;padding:70px 40px 90px;justify-content:center;text-align:center;align-items:center;">
  <div style="position:absolute;top:70px;right:28px;background:var(--gold);color:var(--navy);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;padding:4px 14px;border-radius:20px;z-index:10;">Page 25</div>
  
<div class="close-section">

  <!-- Outcome summary -->
  <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--muted);margin-bottom:16px;">Page 25 — Your Decision</div>

  <div style="font-family:'Cormorant Garamond',serif;font-size:clamp(32px,4vw,52px);color:var(--navy);line-height:1.2;font-weight:300;margin-bottom:16px;">
    In the next 3 years, you will pay <strong style="color:var(--red);">$<span id="final3yr">—</span></strong> to the resort.<br>
    <span style="font-size:clamp(20px,2.5vw,32px);color:var(--text2);">That is the same as Alpha's service fee — paid in about <strong style="color:var(--navy);"><span id="finalMonths">—</span> months</strong> of your current payments.</span>
  </div>

  <div style="width:80px;height:3px;background:linear-gradient(90deg,var(--gold),transparent);margin:20px auto;"></div>

  <p style="font-size:18px;color:var(--text2);max-width:580px;margin:0 auto 32px;line-height:1.75;">
    Everything you've shared today has been documented. Your case is strong. The only question left is — 
    <strong style="color:var(--navy);">which direction do you want those payments to go from here?</strong>
  </p>

  <!-- Value recap pills -->
  <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:36px;">
    <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:20px;padding:8px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1px;color:var(--navy);font-weight:700;">✓ 100% Written Guarantee</div>
    <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:20px;padding:8px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1px;color:var(--navy);font-weight:700;">✓ $0 Down Today</div>
    <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:20px;padding:8px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1px;color:var(--navy);font-weight:700;">✓ First Payment in 30 Days</div>
    <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:20px;padding:8px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1px;color:var(--navy);font-weight:700;">✓ Complimentary Credit Protection</div>
    <div style="background:var(--blue-pale);border:1.5px solid var(--border);border-radius:20px;padding:8px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1px;color:var(--navy);font-weight:700;">✓ 6–18 Month Avg Resolution</div>
  </div>

  <!-- THE TWO BUTTONS -->
  <div class="decision-bar">
    <button class="btn-transfer" onclick="openTransfer()">
      ✓ &nbsp; I'm Ready — Let's Get Started
    </button>
    <button class="btn-schedule" onclick="openSchedule()">
      Schedule a Follow-Up
    </button>
  </div>

</div>
</section>


<!-- ═══════════════ TRANSFER MODAL ═══════════════ -->
<div class="modal-overlay" id="transferModal">
  <div class="modal-box" style="text-align:center;">
    <button class="modal-close" onclick="closeModal('transferModal')">✕</button>
    <div class="transfer-check">🎉</div>
    <div style="font-family:'Cormorant Garamond',serif;font-size:32px;color:var(--navy);font-weight:700;margin-bottom:10px;">
      Welcome to Alpha Timeshare Consultants
    </div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:18px;">Thank You for Choosing Us</div>
    <p style="font-size:17px;color:var(--text2);line-height:1.8;max-width:440px;margin:0 auto 22px;">
      You've made the right decision. Your case is being transferred to your dedicated team right now. You will be hearing from your Case Manager shortly.
    </p>
    <div style="background:var(--blue-pale);border-radius:10px;padding:18px 22px;text-align:left;margin-bottom:22px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--navy);margin-bottom:10px;font-weight:700;">What to Expect</div>
      <div style="font-size:15px;color:var(--text2);line-height:1.9;">
        📞 Your Case Manager will reach out within 1 business day<br>
        📄 Your Document Coordinator will request your paperwork<br>
        🛡 Your Credit Solutions Team will be on standby<br>
        ⏰ Your first payment is not due for 30 days
      </div>
    </div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);">Alpha Timeshare Consultants — Est. 1985 — A+ BBB Rated</div>
    <div class="transfer-confetti">
      <strong>Sebastian Short</strong> — Account Specialist<br>
      <a href="tel:18778483948" style="color:var(--navy2);">1 (877) 848-3948 Ext. 134</a> &nbsp;·&nbsp;
      <a href="mailto:Sebastian@AlphaTimeshareConsultants.com" style="color:var(--navy2);">Sebastian@AlphaTimeshareConsultants.com</a>
    </div>
  </div>
</div>


<!-- ═══════════════ SCHEDULE MODAL ═══════════════ -->
<div class="modal-overlay" id="scheduleModal">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal('scheduleModal')">✕</button>

    <div style="font-family:'Cormorant Garamond',serif;font-size:26px;color:var(--navy);font-weight:700;margin-bottom:6px;">Schedule a Follow-Up</div>
    <p style="font-size:15px;color:var(--muted);margin-bottom:20px;">Let's find a time that works. Before we do — help us understand what's on your mind.</p>

    <!-- REASON DROPDOWN -->
    <label class="sched-label">What would you like more time for?</label>
    <select class="sched-input" id="schedReason" onchange="handleObjReason()">
      <option value="">— Select a reason —</option>
      <option value="think">I need a little more time to think about it</option>
      <option value="spouse">I need to speak with my spouse / partner first</option>
      <option value="finances">I want to take a closer look at my finances</option>
      <option value="contract">I'd like to review the contract more carefully</option>
      <option value="compare">I want to compare my options before deciding</option>
      <option value="timing">The timing just doesn't feel right today</option>
      <option value="other">Something else</option>
    </select>

    <!-- OBJECTION FOLLOW-UP CARD -->
    <div class="obj-card" id="objCard">
      <div class="obj-q" id="objQuestion"></div>
      <div class="obj-options" id="objOptions"></div>
    </div>

    <!-- RESPONSE / BRIDGE -->
    <div class="response-box" id="responseBox">
      <div class="rb-label">One thing worth considering</div>
      <p id="responseText"></p>
    </div>

    <!-- DATE / TIME FIELDS (shown after objection handled) -->
    <div id="schedFields" style="display:none;">
      <div class="sched-row">
        <div>
          <label class="sched-label">Preferred Date</label>
          <input type="date" class="sched-input" id="schedDate">
        </div>
        <div>
          <label class="sched-label">Preferred Time</label>
          <select class="sched-input" id="schedTime">
            <option value="">— Select —</option>
            <option>9:00 AM</option><option>9:30 AM</option>
            <option>10:00 AM</option><option>10:30 AM</option>
            <option>11:00 AM</option><option>11:30 AM</option>
            <option>12:00 PM</option><option>12:30 PM</option>
            <option>1:00 PM</option><option>1:30 PM</option>
            <option>2:00 PM</option><option>2:30 PM</option>
            <option>3:00 PM</option><option>3:30 PM</option>
            <option>4:00 PM</option><option>4:30 PM</option>
            <option>5:00 PM</option>
          </select>
        </div>
      </div>
      <div>
        <label class="sched-label">Best callback number</label>
        <input type="tel" class="sched-input" id="schedPhone" placeholder="(000) 000-0000">
      </div>
      <div>
        <label class="sched-label">Notes for the follow-up call</label>
        <textarea class="sched-input" id="schedNotes" rows="2" placeholder="Anything specific you'd like to cover..."></textarea>
      </div>
      <button class="sched-submit" onclick="submitSchedule()">Confirm Follow-Up →</button>
      <div id="schedConfirm" style="display:none;margin-top:14px;background:var(--blue-pale);border-radius:8px;padding:14px;font-size:15px;color:var(--navy);text-align:center;font-weight:600;"></div>
    </div>

  </div>
</div>


<!-- ═══════════════ CLOSING JS ═══════════════ -->

</body>
</html>
