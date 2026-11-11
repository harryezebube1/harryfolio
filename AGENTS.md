# Harryfolio — Agent Instructions

Personal portfolio for Harry Ezebube, an AI Engineer. Dark-mode-first developer aesthetic.

**Repository map:** architecture, change-impact, and citations live in [`map/AGENTS.md`](map/AGENTS.md). Read it before structural changes.

## Mandatory rules

1. **RTK is required for command output.** The RTK OpenCode plugin rewrites shell commands to `rtk <command>` automatically. Run commands normally and treat condensed output as complete. Use `rtk bypass <cmd>` only when output is unusable (empty when output was expected, contradicts the exit code, or is garbled). Never disable or remove the RTK plugin. `rtk gain` shows token savings.
2. **Use the `icm-architect` skill** when asked to "ICM this", restructure folders, map a repo, or design a multi-step workspace. Do not invent an alternate folder ontology.
3. **Dark mode is the default and primary design target.** There is no light-mode requirement; if light mode is added later, it must not regress dark mode.
4. **Do not commit secrets.** Use `.env.local` for credentials; only `NEXT_PUBLIC_*` values may reach the client.

## Stack

- Next.js 16+ (App Router, `src/` directory, `@/*` import alias)
- React 19 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first config via `@import "tailwindcss"` and `@theme`)
- shadcn/ui (radix-nova preset, CSS variables)
- Lucide React icons
- npm as the package manager

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (must pass before calling work done)
npm run lint     # ESLint
```

There is no test runner configured yet. If tests are added, document the command here.

## Conventions

- Prefer React Server Components. Add `"use client"` only for interactivity, browser APIs, or hooks.
- Keep page sections in `src/components/sections/`, reusable primitives in `src/components/ui/` (shadcn) and `src/components/` (app-level).
- Use the `cn()` helper from `@/lib/utils` for conditional classes.
- Use design tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`) instead of hard-coded hex values.
- Icons come from `lucide-react`; size them with `className="size-4"` (or similar), never inline width/height unless required.
- Keep server/client boundaries explicit; never pass functions or non-serializable values across them.
- Use `next/link` for internal navigation and `next/image` for images.
- Accessibility: semantic landmarks, one `h1` per page, visible `focus-visible` rings, alt text on images, and `prefers-reduced-motion` respected.

## Design direction

- Near-black background with subtle depth (grid, glow, or noise), restrained borders, generous spacing.
- Accent palette: violet/cyan family. Use accent sparingly for emphasis, links, and state.
- Typography: Geist Sans for UI, Geist Mono for labels, code, and metadata.
- Motion should be fast and subtle (150–300 ms); no gratuitous animation.

## Verification

Before reporting a task complete:

1. `npm run lint`
2. `npm run build`
3. Manually check the affected page at mobile and desktop widths
4. Confirm no light-mode flash and no hydration warnings in the console

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
