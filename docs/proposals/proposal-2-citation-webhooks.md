# Proposal 2 — Standardised Publisher Citation Webhook API

**Status:** Open Specification v1.0
**Section:** §3

## Summary

A standardised webhook protocol that pushes citation events from AI providers to publisher-controlled endpoints in near real time.

## Event Schema

See [`shared/schemas/citation-webhook.schema.json`](../../shared/schemas/citation-webhook.schema.json).

## Security Model (VWP — §3.4)

| Protection | Mechanism |
|---|---|
| Replay attacks | Timestamp tolerance window (±5 min) |
| MITM | HMAC-SHA256 or Ed25519 signature |
| Ghost citations | Proof-of-Inference hash spot-audit |
| Sybil / fake domains | DID or EV-SSL identity validation + velocity throttling |
| Citation rings | FPA graph analysis engine |

## Reference Implementation

- SDK (Node.js/Python/Go): [`packages/ai-citation-sdk`](../../packages/ai-citation-sdk)
- VWP Gateway: [`packages/vwp-gateway`](../../packages/vwp-gateway)
- Express middleware example: [`packages/ai-citation-sdk/src/node/middleware.js`](../../packages/ai-citation-sdk/src/node/middleware.js)

## Retry Schedule

| Attempt | Delay |
|---|---|
| 1 | Immediate |
| 2 | 30 seconds |
| 3 | 5 minutes |
| 4 | 30 minutes |
| 5 | 2 hours |
| 6 | 12 hours |

Dead-lettered after attempt 6, retained for 30 days in pull API.
