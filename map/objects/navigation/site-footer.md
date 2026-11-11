---
type: object
cluster: navigation
universe: live
status: verified
entity: src/components/site-footer.tsx
---

# Site footer

Closing strip with a terminal-style signature line, the stack line, and GitHub/LinkedIn/email icon buttons.

## Why this shape

The footer is intentionally small and server-rendered. It repeats the identity from `site-config` but not the header's brand lockup, so the page has a clear top and bottom without duplicating a second logo. The email uses a `mailto:` link; social links open in a new tab with `noreferrer`.

## Shape

- Two-line signature block: `$ designed & built by harry` plus the stack line.
- Three ghost icon buttons: GitHub, LinkedIn, email.
- Border-top divides it from the last section.

Citations: `src/components/site-footer.tsx:7`

## Connected to

- **owns:** footer copy, stack line, contact icon row
- **owned-by:** `src/app/layout.tsx`
- **joins:** [site-config](site-config.md), [brand-icons](../ui/brand-icons.md), Lucide `Mail`
- **looks-like-but-is-not:** the header social row (duplicated by design, different context)

## If you change this

- **Hits:** every route's bottom chrome, contact affordance
- **Does not hit:** header nav, page sections, metadata

## Surfaces

| Surface | Role |
|---|---|
| Visitor | finds social/contact links |
| `next build` | rendered as part of each static page |

## See

- Source: `src/components/site-footer.tsx`
