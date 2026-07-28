# AlphaFiles — Master Architecture

**Version:** 1.0  
**Last updated:** 2026-07  
**Platform:** alphafiles.net (GitHub Pages, branch: main)  
**Repo:** Sebastianshort624/alphafiles.net  
**Sidebar file:** /home/claude/new_sidebar.py (NEW_SIDEBAR python string)  
**Brand:** Navy #1B3F6B · Gold #C8A95A · Light Blue #E6EEF9  

---

## Purpose

AlphaFiles is the operating system for a timeshare exit closer at Alpha Timeshare Consultants.
It combines client consultation tools, industry intelligence, and personal performance tracking
into a single platform accessible from any device.

---

## Module Map

```
alphafiles.net/
│
├── /home/          Dashboard — client count, quick actions, recent activity
├── /clients/       Client list and search
├── /vitals/        Client intake form (primary data entry page)
├── /ownership/     Client Presentation — resort panels, financial overview
├── /owner/         Owner version of ownership page
│
├── /current/       Current Cost of Ownership — timeline breakdown table
├── /cost/          True Cost Analysis — 30-year projection
├── /quote/         Alpha Quote page — fee presentation
├── /savings/       Savings projection
├── /compensation/  Resort Compensation assessment
├── /damages/       Damages Assessment
├── /report/        Case Report
│
├── /better/        What Makes Alpha Better
├── /history/       Alpha Company History
├── /trust/         Trust Center — BBB, reviews, credentials
├── /credit/        Credit Protection explained
├── /heirs/         Heirs & Estate — inheritance risk
├── /rights/        Consumer Rights
├── /letter/        Mutual Release Letter
├── /leverage/      Leverage & Legal Rights
├── /guarantee/     Certificate of Guarantee (contract document)
├── /contract/      Alpha Service Agreement
├── /included/      What's Included
├── /exit-methods/  Exit Method Comparison
├── /wait/          If You Do Nothing — cost of inaction
├── /whyout/        Why Do You Want Out — motivation capture
│
├── /resorts/       Resort Intelligence Center (SPA) ← NEW
│   └── /db/resorts_db.json — 24 parent companies, 30 brands, 9 clubs, 40 resorts
│
├── /objections/    Closing Intelligence Library (SPA) ← PARKED
│   └── /db/objections_db.json — 8 categories, 31 objections
│
├── /pay/           Performance Intelligence Center ← SPEC WRITTEN, NOT BUILT
│
├── /followup/      Follow-up tools
├── /recap/         Consultation recap
├── /present/       Presentation tools
├── /group/         Group filing info
├── /approval/      Approval page
│
└── Client Portals (individual client presentation packages):
    /bates/ /equihua/ /huston/ /tanner/ /rieger/ /young/
    /b.brumley/ /d.rieger/ /f.oquendo/ /h.bohrer/ /j.kaye/
    /r.weinaug/ /unnamed1/ /w.rice/ /manus/ /genova/ /crozier/
    /bath/ /vasquez/ /polanco/
```

---

## Technical Architecture

### Data Layer
- **Client data:** localStorage key `atc_clients` — JSON object keyed by slug
- **Active client:** localStorage key `atc_active_client` — current slug
- **Resort data:** `/resorts/db/resorts_db.json` — fetched at runtime
- **Objection data:** `/objections/db/objections_db.json` — fetched at runtime
- **Pay/Performance data:** localStorage key `atc_paytracker` — NOT YET BUILT

### Sidebar Injection System
Every page contains `<style id="atc-sb-css">` and `<script id="atc-sb">` blocks.
These are replaced in bulk using `new_sidebar.py` via the GitHub API.
Push pattern: Python script replaces sidebar block across all 59 pages simultaneously.

**CRITICAL:** `_emailThisPage` HTML template contains `<\/body><\/html>` (escaped).
Never use `h.replace('</body>', ...)` — always use `h.rfind('</body>')`.

### DOMContentLoaded Order (sidebar)
```
_injectGlobals();buildSB();buildRightNav();buildPortalBanner();initBanner();_buildTopSave();
```

### Key Sidebar Functions
- `window.newC()` → prompts for new client name, creates record, reloads
- `window._doNewC()` → the actual creation logic (defined in sidebar)
- `window._emailThisPage()` → captures page content, shows email modal
- `window.saveSession()` → saves current client data to localStorage
- `window.newSession()` → shows session dialog
- `buildRightNav()` → creates right nav panel (PIN: 0624)
- `window.atcSetLang()` → toggles EN/ES

### MTF Storage Rule
`maitFees` always stored as **ANNUAL** amount.
`monthlyMortgage` stored as **MONTHLY** amount.
Bi-yearly formula: entered value × 2 = annual.
Restore for display: annual ÷ 2.

---

## Module Status

| Module | Status | Notes |
|--------|--------|-------|
| Client consultation pages | ✅ Live | 59 pages |
| Resort Intelligence | ✅ Live | /resorts/ — 40 seed resorts |
| Closing Intelligence | 🟡 Parked | /objections/ — built, not linked to nav |
| PayTracker | 📋 Spec written | /pay/ — not built |
| Analytics | ❌ Not started | — |
| AI Coach | ❌ Not started | — |
| Training | ❌ Not started | — |

---

## Design Language (AlphaFiles)
- Font: Inter, -apple-system
- Background: #f4f7fb (page) / #fff (cards)
- Navy: #1B3F6B
- Gold: #C8A95A
- Light blue: #E6EEF9
- Border: #c5d8ee
- Muted text: #5a7a99

## Module Navigation Vision (target state)
```
🏠 Dashboard
👥 Clients
📅 Consultations       ← not yet built
🏨 Resort Intelligence  ← /resorts/ LIVE
🧠 Closing Intelligence ← /objections/ PARKED
❓ Discovery Questions  ← inside Closing Intelligence
📄 Documents
📚 Training            ← not started
💰 PayTracker          ← /pay/ SPEC ONLY
📊 Analytics           ← not started
🤖 AI Coach            ← not started
⚙️ Administration
```
