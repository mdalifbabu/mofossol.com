# mofossol.com

The landing page for **মফস্বল** — a hyperlocal social platform for rural
Bangladeshi village communities. মফস্বলের কণ্ঠ · The voice of the village.

React + Vite + TypeScript.

## Getting started

```sh
npm install
npm run dev        # → http://localhost:5173
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck, then build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run typecheck` | `tsc -b --noEmit` |
| `npm run verify` | Typecheck + build — the bar for "done" |

## Structure

```
index.html            Vite entry; all <head> meta and OG tags
src/App.tsx           section order
src/content.ts        all user-facing copy
src/styles.css        all styling; design tokens in :root
src/components/       Nav, Hero, Noticeboard, Story, Features,
                      Diaspora, Trust, Grow, Footer, icons, Reveal
src/hooks/            useInView
src/utils/            Bengali numerals
public/               favicon.svg, robots.txt, sitemap.xml
```

## Deploying

Build command `npm run build`, publish directory `dist/`. Works as-is on
Netlify, Cloudflare Pages, Vercel, or any static host.

Before going live:

- **Add an OG image** at `public/og.png`. `index.html` already points at
  `/og.png`; until the file exists, link previews on Facebook and WhatsApp
  will be blank — which matters for a product that spreads by sharing.
- **Check the URLs.** The canonical link, `og:*` tags, and `public/sitemap.xml`
  all assume the site serves from `https://mofossol.com/`.
- **Consider prerendering.** The page is client-rendered, so crawlers get an
  empty `#root` and 3G users wait on the bundle before first paint. See the
  "Known gap" section in [CLAUDE.md](CLAUDE.md).

## Contributing

The design source of truth is `mofossol-website.html` in the monorepo root, not
this repo. See [CLAUDE.md](CLAUDE.md) for the rules a change here has to obey.

© ২০২৬ মফস্বল · Irripump Software Ltd.
