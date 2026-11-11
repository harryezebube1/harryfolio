# Harryfolio

Personal portfolio for Harry Ezebube, an AI Engineer. Dark-mode-first, built with the App Router.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (radix-nova preset, CSS variables)
- [Lucide React](https://lucide.dev)

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run lint     # ESLint
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```text
src/
├── app/
│   ├── globals.css      # theme tokens, base styles, utilities
│   ├── icon.svg         # favicon
│   ├── layout.tsx       # fonts, metadata, header/footer shell
│   └── page.tsx         # hero + sections
├── components/
│   ├── icons.tsx        # GitHub / LinkedIn brand SVGs
│   ├── sections/        # about, projects, experience, writing, contact
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── ui/              # shadcn primitives
├── content/             # typed portfolio copy
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── types.ts
│   └── writing.ts
└── lib/
    ├── site.ts          # site metadata, nav, social links
    └── utils.ts         # cn() helper
```

## Repository map

`map/` is an ICM system map of the repo: object cards, process cards, and a change-impact index. Start at [`map/AGENTS.md`](./map/AGENTS.md) before structural changes.

## Customizing

- **Identity and links:** `src/lib/site.ts`
- **Colors, radius, background effects:** `src/app/globals.css` (`:root` / `.dark` tokens)
- **Sections:** add to `src/app/page.tsx` (or create `src/components/sections/`)

The document always carries the `dark` class, so the site is dark-mode first by design.

## Agent tooling

This repo is set up for agentic development:

- `AGENTS.md` — project rules and conventions
- `.opencode/skills/icm-architect` — ICM workspace/restructuring skill
- [RTK](https://github.com/rtk-ai/rtk) — global OpenCode plugin that compresses command output

## Roadmap

See [PLAN.md](./PLAN.md).
