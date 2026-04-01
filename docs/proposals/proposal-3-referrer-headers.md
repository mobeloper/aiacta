# Proposal 3 — Referrer Header Standardisation

**Status:** Open Specification v1.0
**Section:** §4

## Summary

AI platforms should set `Referrer-Policy: origin` on outbound link clicks so publishers can identify AI-sourced traffic in analytics tools.

## Standard Referrer URLs

| Provider | Referrer |
|---|---|
| OpenAI | `https://chat.openai.com/chat` |
| Google | `https://gemini.google.com/app` |
| Anthropic | `https://claude.ai/chat` |
| xAI | `https://grok.xai.com/chat` |
| Perplexity | `https://www.perplexity.ai/search` |

## UTM Parameter Extension (Opt-In)

Publishers can opt in to UTM appending via `Allow-UTM-Append: true` in `ai-attribution.txt`:

```
utm_source=anthropic&utm_medium=ai-chat&utm_campaign=citation
```

**UTM appending is opt-in only.** Default URL modification is a hostile pattern.

## Reference Implementation

- Node.js Express: [`packages/referrer-middleware/src/node/index.js`](../../packages/referrer-middleware/src/node/index.js)
- Python WSGI: [`packages/referrer-middleware/src/python/referrer_middleware.py`](../../packages/referrer-middleware/src/python/referrer_middleware.py)
