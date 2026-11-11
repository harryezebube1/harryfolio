# ui — primitives and icons

Read this before adding a component, changing a shadcn primitive, or replacing an icon.

| Card | What it owns |
|---|---|
| [shadcn-primitives](shadcn-primitives.md) | generated `src/components/ui/*`, the `cn` helper, Radix imports |
| [brand-icons](brand-icons.md) | hand-written GitHub/LinkedIn SVGs (Lucide dropped brand icons) |

Rule: `src/components/ui/` is generated territory. Prefer `npx shadcn add` over hand-editing, and never edit generated files to change app behavior — wrap or compose instead.

Do **not** load: every primitive card. There is one card for the set; source files are cited inside it.
