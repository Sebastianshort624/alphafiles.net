# Capture — Universal Intake Layer

**Module:** sebastianlinks.com (front door, always visible)
**Status:** SPEC APPROVED — NOT YET BUILT
**Last updated:** 2026-07
**Approved by:** Sebastian Short

---

## Principle

Capture is NOT a module.
Capture is the universal intake layer for the entire Life Operating System.

Every piece of information that enters the system enters through Capture.
Everything begins there.

This architecture guides all future LOS development unless explicitly overridden.

---

## Position in the LOS

Capture is the first thing visible when the LOS opens.
It sits above the dashboard on the home page — always present, never buried.

```
┌─────────────────────────────────────────────────────┐
│  Drop anything here...                              │
│                                                     │
│  Paste · Voice · PDF · Email · Screenshot · Manual  │
│                                                     │
│                                    [ Analyze → ]   │
└─────────────────────────────────────────────────────┘

Dashboard · Jobs · CRM · Calendar · Notes · Travel ...
```

Capture feels like the blinking cursor of the operating system.

---

## Architecture

```
CAPTURE (Front Door)
        │
        │  Input sources:
        │  Clipboard paste
        │  Voice dictation
        │  PDF upload
        │  Email paste
        │  Screenshot
        │  Manual entry
        │  Browser share (future)
        │  API integrations (future)
        │
        ▼
AI CLASSIFICATION (one Anthropic API call)
        │
        │  Returns typed objects with:
        │  - type (task / event / reminder / note / crm_followup /
        │           contact / company / job / shopping / travel /
        │           expense / project / goal / document)
        │  - text / title
        │  - date (ISO)
        │  - time (ISO)
        │  - priority
        │  - tags
        │  - confidence: 0.0–1.0
        │  - inferred: true / false
        │  + suggested_action (one sentence synthesis)
        │
        ▼
REVIEW & APPROVAL SCREEN
        │
        │  ✅ Confidence ≥ 80%  → shown normally
        │  ⚠️  Confidence < 80%  → highlighted, requires confirmation
        │  ✏️  Every item editable before dispatch
        │  🗑  Delete unwanted items
        │  📋  Original source text always visible
        │  💡  Suggested Next Action shown as AI card
        │
        ▼
DISPATCH
        │
        │  Capture EMITS typed objects.
        │  Capture NEVER writes directly into a module's internal schema.
        │  Each module OWNS its own data and consumes dispatched objects.
        │
        ├── Task          → los_tasks
        ├── Event         → los_events
        ├── Reminder      → los_reminders
        ├── Note          → los_notes
        ├── CRM Follow-up → los_crm_followups
        ├── Contact       → los_crm_contacts
        ├── Company       → los_crm_companies
        ├── Job           → los_jobs_companies
        ├── Shopping Item → los_shopping
        ├── Travel Leg    → los_travel
        ├── Expense       → los_expenses
        ├── Project       → los_projects
        ├── Goal          → los_goals
        └── Document      → los_documents

        CAPTURE ALSO ALWAYS WRITES:
        └── los_capture_log (permanent, never deleted)
```

---

## Data Schema

### Capture Log Entry
```json
{
  "id": "cap-[timestamp]-[random]",
  "captured_at": "2026-07-30T11:00:00Z",
  "source": "clipboard | voice | pdf | email | screenshot | manual | api",
  "original_text": "Full original input — never modified, never deleted",
  "original_ref": null,
  "ai_model": "claude-sonnet-4-6",
  "ai_suggested_action": "One sentence — what to do first",
  "extracted_items": [ /* array of typed items — see below */ ],
  "dispatched_to": ["los_tasks", "los_events"],
  "dispatched_at": "2026-07-30T11:02:00Z",
  "status": "pending | reviewed | dispatched | partial"
}
```

### Extracted Item
```json
{
  "id": "item-[capture_id]-[n]",
  "capture_id": "cap-1722371200-abc",
  "type": "task",
  "text": "Lock house before leaving",
  "date": "2026-07-30",
  "time": null,
  "end_date": null,
  "end_time": null,
  "location": null,
  "people": [],
  "priority": "normal",
  "tags": ["home", "travel"],
  "confidence": 0.95,
  "inferred": false,
  "source": "clipboard",
  "original_text_ref": "Leave at 11 with Luna and luggage...",
  "approved": null,
  "dispatched_to": null,
  "dispatched_at": null
}
```

### localStorage Keys
```
los_capture_log        → array of all capture log entries (permanent)
los_tasks              → owned by Task module
los_events             → owned by Calendar module
los_reminders          → owned by Reminders module
los_notes              → owned by Notes module
los_crm_followups      → owned by CRM module
los_crm_contacts       → owned by CRM module
los_crm_companies      → owned by CRM module
los_jobs_companies     → owned by Career CRM module
los_shopping           → owned by Shopping module
los_travel             → owned by Travel module
los_expenses           → owned by Expenses module
los_projects           → owned by Projects module
los_goals              → owned by Goals module
los_documents          → owned by Documents module
```

---

## AI Classification Prompt

**System:**
```
You are a structured extraction engine for a personal life operating system.
Today is [ISO date]. User timezone: [tz].

Extract every actionable item, event, reminder, contact, note, shopping item,
travel leg, and follow-up from the user's input text.

For each item return:
- type: task | event | reminder | note | crm_followup | contact | company |
        job | shopping | travel | expense | project | goal | document
- text: concise label
- date: ISO 8601 date if determinable, else null
- time: HH:MM 24h if determinable, else null
- end_date / end_time: for events with duration
- location: if mentioned
- people: array of names mentioned in relation to this item
- priority: low | normal | high | urgent
- tags: array of inferred topic tags (max 4)
- confidence: float 0.0–1.0 — how explicitly the source supports this item
- inferred: true if logically implied but not explicitly stated

Also return:
- suggested_action: one sentence — the single most important next action

Rules:
- Convert relative time ("tomorrow", "next Friday", "after lunch", "ASAP",
  "in two hours", "this evening") to actual ISO dates based on today's date
- For travel: infer standard lead times (flight at 3:15 PM → arrive airport by 1:15 PM)
- Infer reasonable subtasks when context makes them obvious
  (flight → check bags, TSA, gate — mark inferred: true)
- Never fabricate specific data (phone numbers, addresses, names not in source)
- Return JSON only. No explanation. No markdown fences.

Output schema:
{
  "suggested_action": "string",
  "items": [ /* array of extracted item objects */ ]
}
```

---

## Confidence Score Rules

| Score | Display | Behavior |
|-------|---------|----------|
| 90–100% | ✅ Green checkmark | Auto-included, one-click remove |
| 80–89% | ✅ Normal | Included, edit available |
| 60–79% | ⚠️ Yellow warning | Highlighted, confirm required |
| Below 60% | ❓ Gray question | Collapsed by default, expand to review |

---

## Source Tracking

Every extracted item permanently records its source type:

| Source | Icon | When used |
|--------|------|-----------|
| clipboard | 📋 | User pastes text |
| voice | 🎙 | Dictation input |
| email | ✉️ | Email content pasted |
| pdf | 📄 | PDF text extracted |
| screenshot | 🖼 | Screenshot OCR (future) |
| manual | ✏️ | User types directly |
| calendar | 📅 | Calendar import (future) |
| api | 🔌 | External integration (future) |

Source is never deleted. It travels with the item permanently.

---

## Original Text Preservation

The original source text is NEVER modified, overwritten, or deleted.
It is stored in full in the capture log entry regardless of what AI extracts.

If AI produces 15 tasks from a 3-sentence voice memo, the original 3 sentences remain.
If the AI misunderstands the input, the original text allows correction and re-analysis.

The capture log is append-only. Items are added, never removed.

---

## Review Screen Requirements

1. Suggested Action card — prominent, at top
2. Source badge (clipboard / voice / pdf / etc.)
3. Timestamp of capture
4. Original text collapsible panel — always accessible
5. Extracted items grouped by type (Tasks / Events / Reminders / etc.)
6. Each item shows: text · date · time · confidence badge · inferred tag
7. Confidence < 80% items highlighted in amber
8. Per-item actions: Edit · Delete · Reassign type
9. Global actions: Approve All · Import Selected · Cancel
10. Item count summary: "12 tasks · 2 events · 1 reminder · 3 items need review"

---

## Home Page Integration Rule

The Capture box is always visible on the LOS home page.
It is never collapsed, never hidden, never behind a tab.
It occupies the top position above the dashboard grid.
Every future LOS home page build must respect this rule.

---

## Integration Contract for Module Developers

When a module wants to receive dispatched items from Capture:

1. Module registers its accepted type(s) in a central `los_module_registry`
2. Capture dispatch layer calls `module.receive(typedItem)` for each match
3. Module maps typed item to its own internal schema
4. Module writes to its own localStorage key
5. Module reports success/failure back to capture log

Capture does not know or care about module internals.
Modules do not know or care about capture internals.
The typed item object is the contract between them.

---

## Build Order (when approved)

1. `los_capture_log` schema + localStorage adapter
2. Capture UI component — paste area, source selector, Analyze button
3. Anthropic API call + JSON response parsing + error handling
4. Review screen — grouped items, confidence coloring, edit/delete
5. Suggested Action card
6. Dispatch layer — routes typed items to module stores
7. Capture log browser — paginated history with original text
8. Voice input (Web Speech API)
9. PDF text extraction (PDF.js)
10. Module registry pattern — standardized receive() interface
11. Screenshot OCR (future — Tesseract.js or API)
12. Browser share target (future — Web Share Target API)
13. External API webhooks (future)

---

## What Capture Is NOT

- Not a to-do list
- Not a calendar
- Not a notes app
- Not a CRM

Capture is the front door.
It receives everything.
It owns nothing except the capture log.
Everything else belongs to the modules that consume it.

