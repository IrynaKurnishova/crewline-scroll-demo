# Crewline — scroll-driven concept page

A small concept demo: a marketing page for a fictional trade-contractor SaaS, built with **Next.js App Router** and **GSAP ScrollTrigger**.

## What it shows

- **Server-rendered first.** Every heading, paragraph and link is in the initial HTML (server components). Animation only enhances markup that already exists.
- **Motion only when allowed.** A tiny inline script adds `js-motion` to `<html>` before first paint, only if JS runs and `prefers-reduced-motion` is not set. All hidden "before" states live in CSS under `.js-motion`, so crawlers, no-JS users and reduced-motion users get a complete static layout.
- **Scroll scene.** A sticky product screen builds a different panel (purchase order → job cost → crew schedule → evening off) as each step reaches the middle of the viewport; a progress bar is scrubbed across the scene. Uses `gsap.matchMedia()` so everything reverts cleanly.
- **CLS-safe.** Only `transform` and `opacity` are animated; the product screen has a reserved height.
- **Content without a CMS.** All copy is in typed files: `content/home.ts` (page copy) and `content/mock.ts` (data shown in the product mock-ups). Types live in `content/types.ts`, so a missing field fails the build.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit content

Change text in `content/home.ts`. Add a step by adding an object to `scene.steps` with a new `id`, plus a matching `data-panel` block in `app/page.tsx`.
