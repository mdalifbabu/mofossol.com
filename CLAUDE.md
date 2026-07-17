# mofossol.com — landing page

The public marketing site for মফস্বল. **React + Vite + TypeScript**, matching
the stack the root contract specifies for `frontend/`.

This repo does **not** talk to the API and has no generated client. It is pure
marketing surface. If a page ever needs live backend data, raise it as a design
decision first — do not add a hand-written fetch inline.

## Design source of truth

`../mofossol-website.html` in the monorepo root is the design source of truth.
The components here are its componentised form; `src/styles.css` is its
stylesheet, carried over almost verbatim.

If the design changes, it changes in `mofossol-website.html` **first**, then
flows here. Do not let the two drift — a visual change made only in this repo
is a bug, the same way a hand-written API type in a client is a bug.

Note `../mofossol.jsx` is a different artifact: the **app** prototype (feed,
filters, composer). It is not this page and is not a source of truth for it.

## Layout

```
mofossol.com/
├── index.html              Vite entry — all <head> meta, OG, and font links
├── src/
│   ├── main.tsx            mount
│   ├── App.tsx             section order
│   ├── content.ts          ALL user-facing copy
│   ├── styles.css          all styling; design tokens in :root
│   ├── components/
│   │   ├── icons.tsx       SVGs transcribed from the source HTML
│   │   ├── Reveal.tsx      scroll-reveal wrapper
│   │   └── Nav / Hero / Noticeboard / Story / Features /
│   │       Diaspora / Trust / Grow / Footer
│   ├── hooks/useInView.ts
│   └── utils/bengali.ts    Latin → Bengali numerals
└── public/                 favicon.svg, robots.txt, sitemap.xml
```

## Rules specific to this repo

- **Copy lives in `src/content.ts`, not in JSX.** Bengali-first per the root
  contract; English is secondary and decorative only (the `en` fields). Numbers
  shown to users go through `toBengaliNumerals`.
- **Design tokens only.** Colours come from the `:root` custom properties in
  `styles.css` — reference them as `var(--brand)` etc. Never hardcode a hex in a
  component or a new rule.
- **Do not swap `icons.tsx` for an icon library.** The paths are transcribed
  from the source HTML; lucide's equivalents are close but not identical, and
  substituting them is silent design drift. (`../mofossol.jsx` uses lucide
  because it is the app, not this page.)
- **Data-light, and this is the repo where it is hardest.** React already costs
  ~68KB gzip before anything paints, against a 3G target. Treat that as the
  whole budget: no UI kit, no animation library, no icon package, no font
  loader. `vite.config.ts` warns above 200KB — if that fires, something is
  wrong, do not raise the limit to silence it.
- **Reduced motion is respected.** The `prefers-reduced-motion` block in
  `styles.css` kills all animation. Any new animation must survive it.
- **Reveal animations must never gate content.** `useInView` treats a missing
  IntersectionObserver as "in view" for exactly this reason. Content that only
  appears after an observer fires is a bug.

## Known gap

The page is client-rendered, so the served HTML is an empty `#root`. Crawlers
and link previews see nothing, and 3G users wait on the bundle before first
paint — both of which cut against the root contract. Prerendering to static
HTML at build time (render `<App/>` with `react-dom/server`, inject, hydrate)
would close this. Worth doing before launch.

## Verify

```sh
npm install
npm run verify     # tsc -b --noEmit && vite build
npm run dev        # http://localhost:5173
```

`npm run verify` green is the bar for "done". Then check on a real narrow
viewport (≤560px): the noticeboard cards stack, the hamburger opens and closes
and shuts on Escape, the page does not scroll horizontally, and keyboard Tab
reaches every control with a visible focus ring.
