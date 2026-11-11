# Harryfolio repository map

System map of the portfolio repo: what the nouns are, how they move, and what else changes when you touch one. The subject tree stays the source of truth; this map cites it.

## Where things live

| Path | What it holds |
|---|---|
| `objects/` | one card per durable noun, clustered by how an editor asks |
| `processes/` | the movements that actually run: render, add a section, verify |
| `effects/CONTEXT.md` | change-impact index: open these cards before editing X |
| `_meta/schema.md` | the closed node types and cluster rules |
| `_templates/` | blank object/process starters; new cards are copies |
| `_tools/` | `links.py`, `index.py` (Python 3; not installed on this machine) |

## Route by task

| If | Go to | Then stop at |
|---|---|---|
| "what is this repo?" | [CONTEXT.md](CONTEXT.md) | the routing table |
| changing theme, colors, or globals | [theme-tokens](objects/app-shell/theme-tokens.md) | its **If you change this** |
| editing the header, footer, or nav | [site configuration](objects/navigation/site-config.md) | the card for the component |
| adding a portfolio section | [add-content-section](processes/add-content-section.md) | the build check |
| changing app copy or metadata | [root-layout](objects/app-shell/root-layout.md) | its Cites |
| installing or updating shadcn components | [shadcn-primitives](objects/ui/shadcn-primitives.md) | the regeneration note |
| validating a change | [build-verify](processes/build-verify.md) | `npm run build` |

## Name collisions

- **Hero** = the home page top section (`src/app/page.tsx`), not a shared component. There is no `Hero` export.
- **Site config** = `src/lib/site.ts` (identity/nav/links), not `next.config.ts` (build config).
- **UI primitives** = shadcn-generated files in `src/components/ui/`; app-level components live one level up.
- **Map** = this directory; **site** = the deployed portfolio.

## The one rule

A card cites source. If a card and the code disagree, the code wins and the card is stale.
