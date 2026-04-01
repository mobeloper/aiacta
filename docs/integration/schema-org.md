# Integration with schema.org (§10.2)

Publishers already use schema.org structured data (JSON-LD, Microdata) for content metadata.
`ai-attribution.txt` reinforces and references these declarations.

## Alignment Rules

- `Preferred-Attribution` in `ai-attribution.txt` should match `schema.org/publisher` name in page-level JSON-LD
- AI systems should cross-reference `schema.org/license` on individual pages — these take precedence over the domain-level `Content-License` field for specific URLs
- `schema.org/isAccessibleForFree` and `schema.org/hasPart` signal paywalled content to AI crawlers

## Example JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "publisher": { "@type": "Organization", "name": "Example Media" },
  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  "isAccessibleForFree": true
}
```
