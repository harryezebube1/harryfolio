---
type: process
status: verified
consumes: ["../objects/content/content-model.md", "../objects/navigation/site-config.md"]
produces: ["../objects/app-shell/hero-page.md"]
---

# add-content-section

Add a portfolio section by putting structured copy in `src/content/`, rendering it from a section component, mounting it on the page, and adding its anchor to the nav.

## Input → Movement → Output

The input is a content kind (projects, experience, writing, skills). The movement is data module → section component → `page.tsx` → nav entry. The output is a new in-page section reachable from the header and footer nav.

## Why this shape

Sections must not hard-code copy, or every edit becomes a JSX hunt. The content module is the single home for entries; the section component owns layout only. Nav anchors live in `site-config`, not in the section, so the header and mobile sheet stay in sync.

## Steps

1. Add or extend a typed module in `src/content/<kind>.ts` (see [content-model](../objects/content/content-model.md)).
2. Create `src/components/sections/<name>.tsx` as a server component; accept the typed array or import the module directly.
3. Mount it in `src/app/page.tsx` inside a `<section id="<anchor>">`.
4. Add `{ label, href: "#<anchor>" }` to `siteConfig.nav` in `src/lib/site.ts:14`.
5. Update [content-model](../objects/content/content-model.md) and the change-impact index.
6. Run [build-verify](build-verify.md).

## If you change this

- **Hits:** page length, nav width on desktop, mobile sheet, anchor offsets under the sticky header
- **Does not hit:** theme tokens or shadcn primitives unless the section needs a new one

## Surfaces

| Surface | Role |
|---|---|
| Visitor | scrolls and navigates the new section |
| Header/sheet | renders the new nav row |

## See

- Process: [build-verify](build-verify.md)
- Objects: [content-model](../objects/content/content-model.md), [site-config](../objects/navigation/site-config.md)
