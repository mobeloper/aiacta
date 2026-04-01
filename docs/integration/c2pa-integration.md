# Integration with C2PA (§10.1)

The C2PA standard (ISO/IEC 22912) provides cryptographic provenance for digital content.
AIACTA and C2PA are complementary:

- C2PA operates at the **content artifact level** (image, video, document)
- AIACTA operates at the **domain/publisher level**

## How They Work Together

AI providers implementing C2PA assertions in their responses can reference the publisher's
`Preferred-Attribution` value from `ai-attribution.txt` as the C2PA `author` assertion.

A future field `C2PA-Endpoint` in `ai-attribution.txt` (planned for v1.2) will allow publishers
to specify a C2PA manifest endpoint, enabling AI providers to attach cryptographic provenance
to citations automatically.

## Resources

- C2PA Technical Specification: https://spec.c2pa.org
- ISO/IEC 22912: https://c2pa.org
