# AlphaFiles — Product Vision
**Version 2.0 | Consultation Intelligence Platform**

---

## What We Are Building

AlphaFiles is not a resort database.
AlphaFiles is not a CRM.
AlphaFiles is not a knowledge base.

**AlphaFiles is a Consultation Intelligence Platform** — the operating system for a timeshare exit company.

---

## The Design Test

Every feature, every field, every screen must pass one test:

> **Does this help a consultant conduct a better consultation and understand the owner's situation before the call even begins?**

If the answer is no, it doesn't belong in the product.

---

## The Core Experience

Every consultation begins with a **Consultation Intelligence Brief** — a single, structured briefing that loads instantly and gives the consultant more context than the client expects them to have.

```
Owner Summary
    → Who they are. What they own. How long they've owned it.

Resort Intelligence
    → Full profile. Fee history. Exit options. Common complaints.

Ownership Intelligence
    → Their specific contract terms. Loan status. Assessment history.

Corporate Intelligence
    → Developer timeline. Acquisitions. Brand history. Regulatory record.

Sales Intelligence
    → Top pain points for this resort. Discovery questions. Emotional triggers.

Exit Intelligence
    → Available exit paths. Documentation needed. Likely roadblocks.

Expected Objections
    → The 4–6 objections most likely with this resort/owner profile.

Suggested Consultation Path
    → Recommended question flow based on what is known before the call.

AI Coach
    → Contextual guidance, rebuttals, and real-time recommendations.

Internal Coaching
    → ATC-specific notes, close rates, top questions, winning approaches.

Knowledge Base
    → State law, glossary, FAQs, process guides, playbooks.
```

The Resort Intelligence Brief built at `/resorts/brief.html` is one tab inside this larger Brief.

---

## The Interconnection Principle

**Nothing exists in isolation.**

| Click on... | Opens... |
|---|---|
| A maintenance fee | Fee history + related objections + discovery questions + exit considerations |
| A developer name | Corporate timeline + acquisitions + brands + owner complaints + coaching notes |
| An objection | Rebuttals + discovery questions + exit context + training resources |
| An exit option | Documentation checklist + timeline + roadblocks + success rate at ATC |
| A pain point | Related questions + emotional context + suggested response path |

Every data point is a doorway into the relevant intelligence.

---

## Architecture Layers

```
Foundation (build now)
└── Resort Intelligence
    ├── Resort profiles, brands, parent companies, exchange companies
    ├── Ownership terms, fee history, exit options
    └── Contract intelligence, state law, HOA/management data

Intelligence Layer (build alongside)
├── Sales Intelligence
│   ├── Pain points by resort and brand
│   ├── Discovery question library (rated by close rate)
│   └── Objection + rebuttal database
├── Corporate Intelligence
│   ├── Developer timelines and acquisition history
│   ├── Regulatory actions and public legal record
│   └── Brand and club lineage
└── Exit Intelligence
    ├── Exit path matrix by resort and ownership type
    ├── Documentation requirements
    └── Roadblock library

Internal Layer (ATC-proprietary)
├── Close rates by resort, brand, objection
├── Top-performing discovery questions
├── Consultant coaching notes
└── Playbooks and call recordings

AI Layer (long-term)
├── Contextual summaries on demand
├── Recommended consultation paths
├── Predicted objections based on resort + owner profile
└── Learning from internal coaching data over time
```

---

## What the Resort Architecture Does

The relational resort database — parent companies, brands, clubs, resorts, acquisition history, exchange affiliations — is **the foundation**, not the destination.

It enables everything above it:

- A sales question about maintenance fees links to the resort's fee history
- A coaching note about a developer links to every resort and brand they've ever owned
- An exit recommendation links to the specific documentation requirements for that resort
- An AI summary is only as good as the structured data underneath it

**Keep building the resort architecture. Every table added, every relationship mapped, every acquisition recorded makes the intelligence layer above it more accurate.**

---

## What We Are Not Building

- ❌ A flat resort directory (data without intelligence)
- ❌ A generic CRM (activity tracking without context)
- ❌ A knowledge base without sales intelligence
- ❌ A sales tool without operational depth

---

## The Long-Term Product

A consultant opens AlphaFiles before a call. They type a resort name or a client name. A full Consultation Intelligence Brief loads in seconds. They know:

- What the owner owns and what it costs them
- Why people with this resort want out
- What questions are most likely to open a productive conversation
- What objections are coming and how to address them
- What exit paths exist and what the client will need
- What ATC's internal record says about this type of consultation

They walk into the call knowing more than the client expects. That is the product.

---

*AlphaFiles is built for Alpha Timeshare Consultants by Sebastian Short.*
*Every design decision serves the consultant. Every data point serves the consultation.*
