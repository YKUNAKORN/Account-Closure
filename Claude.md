# Account-Closure — Claude Code Project Context

Static multi-page UI for the InnovestX "Closed Account" workflow. Read this and
`DESIGN.md` at the start of any UI work. This file is the briefing the code can't
give you on its own — the *why*, the conventions, and what to avoid.

## What this is
- 13 standalone HTML pages, originally generated in **Google Stitch**, then hand-edited by the team.
- Stack: static HTML + **Tailwind CSS via the Play CDN (no build step)** + Material Symbols icons + Hanken Grotesk.
- Hosting: auto-deploys to **Vercel from `main`**. Every branch/PR also gets its own preview URL — that's the "see it live" surface.

## Repo layout
- `index.html` (root) — dashboard / landing.
- `pages/*.html` — 12 workflow screens: head-of-sales, new-request, check-da, check-other, insert-da, insert-other, middle-check, cash-management-check, operation-check, operation-final, settlement-check, view-detail.
- `assets/tailwind-config.js` — the theme (all design tokens).
- `assets/app.css` — shared base (font imports + page background).
- `assets/favicon.svg`.
- `DESIGN.md` — the design-system spec in prose. Read it before styling changes.

## Design system — single source of truth
- **All theme tokens live in `assets/tailwind-config.js`.** It loads on every page immediately after the Tailwind CDN `<script>`. Change a token once → every page updates.
- `assets/app.css` holds the shared font `@import`s and the body background (`#F4F4F6`).
- If `DESIGN.md` and `tailwind-config.js` ever disagree, **the .js is authoritative** — update DESIGN.md to match it.

## Conventions — always do
- **Asset paths are relative and depth-dependent:** pages in `pages/` use `../assets/...`; root `index.html` uses `assets/...` (matches the existing favicon convention). Vercel serves the repo root as web root.
- **Keep the Tailwind Play CDN. Do NOT add a build step.** Edits must go live with zero compilation.
- **Work on a branch → push → open the Vercel preview URL → verify visually → then merge.** Never eyeball-skip the preview.
- Cards / buttons / inputs use `rounded-lg` (0.25rem). Pills / avatars use `rounded-full` (9999px = true circle).
- Status pills use the `status-*` token pairs (`status-pending`/`completed`/`rejected`, each with `-bg` and `-text`).
- Sidebar nav is identical on all pages: Dashboard · Sales · Digital Assets · Middle · Head of Sales · Operation.

## What to AVOID — these caused real bugs
- **NEVER re-inline a `tailwind.config` block into a page.** Per-page inline configs are exactly what drifted into 8 different themes. Tokens go in the one `.js` file only.
- Don't add per-page Google Fonts `<link>`s — they live in `app.css`.
- Don't put `style="width:…;height:…;overflow:hidden"` on `<html>` — it's a Stitch canvas-lock artifact that clips scrolling.
- **Page `<body>` markup is hand-tuned per screen. Preserve it.** Make surgical edits; do not regenerate whole pages from a prompt.

## History — why things are the way they are
- Stitch generated the pages; the team hand-edited buttons etc., committing a full copy of the styling into each file. That's why one change had to be fanned across 12 files (see the obsolete `fix_buttons.js` / `fix_four_files*.js` scripts — safe to delete once consolidation lands).
- 2026-06 audit found the theme config had drifted into **8 variants**: `insert-da` had white surfaces instead of `#fcf8ff`; `index` carried unique `status-*` tokens no other page had; `new-request`, `view-detail`, `index` were missing the base `primary` token. Consolidated into the shared `tailwind-config.js` + `app.css`; fixed `rounded-full` (was `0.75rem`, now `9999px`) so avatars/pills are actually round. Page bodies were kept byte-identical.

## Current status
The consolidation above is the intended end state. If the repo still has per-page
inline `tailwind.config` blocks, **applying that consolidation is task #1** (see
Pending work). The shared `tailwind-config.js`, `app.css`, and `DESIGN.md` are the
target artifacts.

## Pending work
- **Component-normalization pass (own branch):**
  - Standardize the primary-action button fill — it's currently mixed (`bg-primary` `#3b39c2` vs `bg-primary-container` `#5555db`, sometimes on the same page). Recommended: `bg-primary`. Record the decision in DESIGN.md.
  - Unify card radius classes (some pages use `rounded-lg`, others `rounded-DEFAULT` / `rounded-xl` for the same card type).
  - Lift the inline `.sidebar-active`, Material-Symbols `font-variation-settings`, and `input:focus` styles into `app.css` — they're inline on only some pages and their definitions differ.
