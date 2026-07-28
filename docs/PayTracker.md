# PayTracker — Performance Intelligence Center

**Module:** /pay/  
**Status:** SPEC WRITTEN — NOT YET BUILT  
**Last updated:** 2026-07  
**Priority:** High  

---

## Purpose

PayTracker answers three questions for a sales consultant:

1. **How am I performing?** (KPIs, close rate, consultation count)
2. **Where is my money coming from?** (by resort, developer, lead source)
3. **How can I improve?** (pattern analysis, coaching hooks)

This is NOT a paycheck calculator. It is a personal Performance Intelligence Center.

---

## Core Principle

Every consultation logged in AlphaFiles should eventually update PayTracker automatically.
PayTracker is a module, not a widget. It belongs in the main navigation.

---

## Data Schema

### consultations
```json
{
  "id": "c-1720000000-abc",
  "client_slug": "jsmith_1234",
  "client_name": "John Smith",
  "resort": "Wyndham Bonnet Creek",
  "developer": "Travel + Leisure Co.",
  "lead_source": "Inbound",
  "appt_date": "2026-07-15",
  "appt_time": "10:00",
  "duration_minutes": 90,
  "status": "closed|pending|no_show|cancelled|follow_up",
  "contract_amount": 4995,
  "commission_pct": 0.10,
  "expected_commission": 499.50,
  "paid": false,
  "paid_date": null,
  "chargeback": false,
  "chargeback_date": null,
  "objections_heard": ["fin-001", "sps-001"],
  "notes": "",
  "created": "2026-07-15T10:00:00Z"
}
```

### goals (monthly)
```json
{
  "month": "2026-07",
  "consultations_target": 40,
  "closes_target": 12,
  "revenue_target": 60000,
  "commission_target": 6000,
  "close_rate_target": 0.30
}
```

### pay_periods
```json
{
  "id": "pp-20260701",
  "period_start": "2026-07-01",
  "period_end": "2026-07-15",
  "base_pay": 0,
  "commission_earned": 2495.00,
  "chargebacks": 0,
  "bonuses": 0,
  "total_comp": 2495.00,
  "paid_date": "2026-07-19"
}
```

---

## Dashboard KPI Cards

### Volume
- Consultations Today
- Consultations This Week
- Consultations This Month
- Consultations This Year

### Performance
- Closes Today
- Closes This Week
- Closes This Month
- Close Rate (week / month / rolling 90)
- Average Contract Value
- Average Commission Per Close

### Pipeline
- Pipeline Value (pending deals)
- Contracts Awaiting Funding
- Contracts Pending Cancellation Period

### Money
- Commission Earned This Week
- Commission Earned This Month
- Commission Earned This Year
- Chargebacks (MTD)
- Total Compensation (MTD)
- Base Pay (if applicable)

---

## Performance Analytics (breakdown views)

- Close rate by developer
- Close rate by resort
- Close rate by lead source
- Close rate by day of week
- Close rate by appointment time block (morning / afternoon / evening)
- Average consultation duration
- Average days from consultation to funding
- Objections heard most frequently (links to Closing Intelligence)
- Objections correlated with closes vs. losses

---

## Commission Tracker (deal-level view)

Table with one row per consultation:
| Client | Resort | Developer | Contract Amt | Comm % | Expected | Paid | Chargeback | Payment Date |
|--------|--------|-----------|-------------|--------|----------|------|------------|--------------|

Filters: Date range / Status / Developer / Paid / Unpaid / Chargeback

---

## Goals (monthly target setting)

For each month, set:
- Consultation target
- Close target
- Revenue target
- Commission target
- Close rate target

Progress bars with % complete, days remaining in month, pace (on track / behind / ahead).

---

## Trend Charts

- Monthly commission (12-month bar chart)
- Monthly close rate (line chart)
- Running 90-day average
- Best month / best week highlights
- Year-over-year comparison (Year 1 vs Year 2)

---

## Future: Coaching Integration

AI hooks (Phase 2+):
- "Why did my close rate drop in June?" → analyzes objection patterns, lead sources, consultation times
- "Which developers do I close best?" → bar chart answer
- "Which objections am I losing most often?" → links to Closing Intelligence
- "What's my best appointment time?" → heatmap

---

## Integration Points

When a consultation is marked "closed" in PayTracker:
- Client record in localStorage is updated with `status: 'closed'`
- Resort record in Resort Intelligence gets a close count increment (future)
- Objections heard are logged to Closing Intelligence close rate stats (future)
- Deal appears in commission tracker
- KPI cards update immediately

---

## Storage

localStorage key: `atc_paytracker`

Structure:
```json
{
  "consultations": [...],
  "goals": {...},
  "pay_periods": [...],
  "settings": {
    "commission_default_pct": 0.10,
    "base_pay_weekly": 0
  }
}
```

---

## URL

`alphafiles.net/pay/`

---

## Build Order (when approved)

1. Data schema + localStorage layer
2. Dashboard KPI cards
3. Deal log (commission tracker table)
4. Goal setting + progress bars
5. Trend charts
6. Analytics breakdown views
7. Integration with client consultation flow
8. AI coaching hooks (Phase 2)

---

## Architecture Notes

- Standalone SPA at `/pay/index.html`
- No backend required — localStorage only (Phase 1)
- Sidebar injection applies (sidebar push covers this page)
- Protected by right nav PIN (0624) same as all AlphaFiles pages
- Mobile responsive
- Export to CSV for payroll reconciliation
