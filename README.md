# mofossol.com

The landing page for **মফস্বল** — a hyperlocal social platform for rural
Bangladeshi village communities. মফস্বলের কণ্ঠ · The voice of the village.

React + Vite + TypeScript. Bilingual: Bengali at `/`, English at `/en/`.

## Getting started

```sh
npm install
npm run dev        # → http://localhost:5173  (English at /en/)
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck, then build both locales to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run typecheck` | `tsc -b --noEmit` |
| `npm run verify` | Typecheck + build — the bar for "done" |

## Structure

```
index.html            Bengali entry (lang=bn); head meta, OG, hreflang
en/index.html         English entry (lang=en)
src/entries/          one mount per locale
src/App.tsx           section order; takes a locale
src/i18n/             types.ts (the contract), bn.ts, en.ts, CopyContext
src/config/visuals.ts icons + colours, keyed by id
src/styles.css        all styling; design tokens in :root
src/components/       Nav, Hero, Noticeboard, Story, Features,
                      Diaspora, Trust, Grow, Footer, icons, Reveal
public/               favicon.svg, robots.txt, sitemap.xml
```

## Editing copy

No user-facing string lives in a component — they all come from `useCopy()`.

- Bengali is authoritative: change `src/i18n/bn.ts` first, then `src/i18n/en.ts`.
- Both dictionaries must satisfy the `Copy` type in `src/i18n/types.ts`, so a
  missing translation is a **typecheck failure**, not a Bengali string leaking
  onto the English page.
- Adding a string means adding it to `types.ts` first, then both dictionaries.

See [CLAUDE.md](CLAUDE.md) for the full bilingual rules — including why English
keeps village vocabulary (para, union, janaza, haat-bazaar) untranslated.

## Deploying

Build command `npm run build`, publish directory `dist/`. Vite emits
`dist/index.html` and `dist/en/index.html`, so any static host serves `/en/`
correctly with no rewrite rules. Works as-is on Netlify, Cloudflare Pages,
Vercel, or nginx.

Before going live:

- **Add an OG image** at `public/og.png`. Both entries point at `/og.png`;
  until it exists, link previews on Facebook and WhatsApp are blank — which
  matters for a product that spreads by sharing.
- **Check the URLs.** Canonicals, `og:*`, `hreflang`, and `public/sitemap.xml`
  all assume the site serves from `https://mofossol.com/`.
- **Consider prerendering.** Each locale's `<head>` is static, but the body is
  client-rendered — crawlers get no body text and 3G users wait on the bundle.
  See "Known gaps" in [CLAUDE.md](CLAUDE.md).

## Contributing

The design source of truth is `mofossol-website.html` in the monorepo root, not
this repo. See [CLAUDE.md](CLAUDE.md) for the rules a change here has to obey.

© ২০২৬ মফস্বল · Irripump Software Ltd.
