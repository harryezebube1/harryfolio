---
type: process
status: verified
consumes: ["../objects/tooling/agent-toolchain.md"]
produces: []
---

# build-verify

The check every change must pass before it is called done: lint, production build, and a real render at desktop and mobile widths.

## Input → Movement → Output

A source change enters ESLint, then the Next.js production build (Turbopack + TypeScript), then a browser render. The output is a clean lint/build and a screenshot that confirms layout, dark theme, and responsive behavior.

## Why this shape

`next build` catches type and RSC boundary errors that the dev server tolerates. Screenshots catch the failures types cannot: overflow, unstyled tokens, a missing mobile trigger. The check is cheap and catches the two failure classes this repo actually has.

## Steps

1. `npm run lint` — must exit 0 with no warnings.
2. `npm run build` — must compile, typecheck, and prerender `/`.
3. Run `npm run dev` and load `http://localhost:3000`.
4. Screenshot at desktop and at the narrowest available mobile width; check the header trigger, hero wrapping, section anchors, and footer.
5. Check the dev-server log for hydration or missing-module errors.
6. If the build fails on `@next/swc-win32-x64-msvc` "not a valid Win32 application", the binary is truncated (expected size ~110 MB); reinstall it before touching source.

## If you change this

- **Hits:** confidence in every later change, CI shape if added
- **Does not hit:** runtime behavior; this process reads, it does not ship

## Surfaces

| Surface | Role |
|---|---|
| Developer/agent | runs the check |
| Next.js | compiles and prerenders |

## See

- Objects: [agent-toolchain](../objects/tooling/agent-toolchain.md)
- Source: `package.json:6`
