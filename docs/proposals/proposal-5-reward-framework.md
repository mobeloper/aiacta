# Proposal 5 — Fair Reward & Incentivised Attribution Framework

**Status:** Open Specification v1.0
**Section:** §7

## Summary

A layered economic framework that translates attribution data from Proposals 1–4 into fair compensation for content creators.

## Three Levels

1. **Direct Licensing (Level 1)** — AI companies negotiate individual data licensing agreements with publishers. Facilitated by `Licensing-Contact` and `Licensing-URL` fields in `ai-attribution.txt`.

2. **Industry Attribution Pool (Level 2)** — The AI Attribution Collective (AAC), a neutral third-party body, manages pooled rewards for RAG/citation use cases.

3. **Creator Micro-Attribution (Level 3)** — Individual creators receive distributions from the AAC pool with no direct negotiation required.

## AAC Contribution Models (§7.4)

| Model | Description | Rate |
|---|---|---|
| Revenue-Proportional Allocation (RPA) | % of gross revenue from content-dependent queries | 0.5%–2.0% (baseline) |
| Per-Citation Fee (PCF) | Event-based fee per citation webhook | $0.0001–$0.001 (baseline) |

Content-Dependent Queries vs Logical/Utility Queries are explicitly distinguished — providers pay only for human creativity utilised, not base compute logic.

## Distribution Weight Formula

```
W(p) = citation_count(p)
     × content_license_multiplier(p)
     × query_value_weight(p)
     × freshness_bonus(p)
```

| Field | Values |
|---|---|
| content_license_multiplier | All-Rights-Reserved=1.0, CC-BY-ND=0.8, CC-BY-SA=0.7, CC-BY=0.5, CC0=0.0 |
| query_value_weight | commercial=2.0, informational=1.0, navigational=0.5 |
| freshness_bonus | +20% if content < 30 days old at citation time |

## Reference Implementation

- AAC Server: [`packages/aac-server`](../../packages/aac-server)
- Distribution engine: [`packages/aac-server/src/services/distribution-engine.js`](../../packages/aac-server/src/services/distribution-engine.js)
- Dashboard: [`packages/aac-dashboard-lite`](../../packages/aac-dashboard-lite)
