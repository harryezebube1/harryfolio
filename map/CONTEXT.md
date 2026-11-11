# Harryfolio map — how to walk it

The repo is a single Next.js App Router site with no backend, no database, and no auth. Phase 1 is a dark-first shell; Phase 2 adds content sections. There is one deployable: the static/SSR site built by `next build`.

## Walking order

1. Read [AGENTS.md](AGENTS.md) for routing and name collisions.
2. Read the cluster `CONTEXT.md` for the noun you need.
3. Open one object card. Follow its `See` link to source.
4. Before editing, open [effects/CONTEXT.md](effects/CONTEXT.md).

Load a card plus source, never the whole map.

## Universes

| Universe | Meaning in this repo |
|---|---|
| **live** | Wired into the running app: layout, header, footer, hero, theme tokens, site config. |
| **leftover** | Present but unused: `bg-dot` utility, unused shadcn primitives (dialog, dropdown-menu, input, textarea), scaffold config files. |
| **ghost** | Named but not wired: the resume link points to `#contact` until a real PDF exists. |

## Clusters

| Cluster | Editor question it answers |
|---|---|
| `objects/app-shell/` | How is the document assembled and themed? |
| `objects/navigation/` | Where do identity, links, and nav live? |
| `objects/ui/` | Which primitives exist and who owns them? |
| `objects/content/` | Where does portfolio copy come from? |
| `objects/tooling/` | What agent/tooling rules shape changes? |

## Invariant breaks (documented)

- Root `AGENTS.md` is longer than the 60-line ICM entry ideal because `next dev` appends its own agent-rules block. The map is one hop away via **Repository map**.
- `_tools/` scripts are copied but not runnable: Python 3 is not installed. Cluster `CONTEXT.md` files act as catalogs; regenerate `_index.md` files after installing Python:
  - `python -I map/_tools/index.py map/objects/<cluster>`
  - `python -I map/_tools/links.py`

## Maintenance

- Add or rename an object: copy `_templates/object.md`, cite `path:line`, update the cluster `CONTEXT.md`, and add a row to `effects/CONTEXT.md` if the change has downstream hits.
- Re-verify load-bearing claims after a batch. `status: verified` requires a date and citations; this tree has no commits yet, so cards cite the working tree.
