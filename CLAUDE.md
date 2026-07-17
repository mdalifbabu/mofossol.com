# mofossol.com — landing page

The public marketing site for মফস্বল. **React + Vite + TypeScript**, matching
the stack the root contract specifies for `frontend/`.

Bilingual: Bengali at `/`, English at `/en/`.

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
├── index.html              Bengali entry (lang=bn) — head meta, OG, hreflang
├── en/index.html           English entry (lang=en) — its own meta + canonical
├── src/
│   ├── entries/bn.tsx      each entry mounts its own locale
│   ├── entries/en.tsx
│   ├── mount.tsx           shared mount
│   ├── App.tsx             section order; takes a locale
│   ├── i18n/
│   │   ├── types.ts        the Copy contract both locales must satisfy
│   │   ├── bn.ts           Bengali — authoritative
│   │   ├── en.ts           English — for the diaspora reader
│   │   └── CopyContext.tsx useCopy()
│   ├── config/visuals.ts   icons/colours, keyed by id — language-independent
│   ├── styles.css          all styling; design tokens in :root
│   ├── components/
│   ├── hooks/useInView.ts
│   └── utils/bengali.ts    Latin → Bengali numerals
└── public/                 favicon.svg, robots.txt, sitemap.xml
```

## Bilingual rules

- **No user-facing string in a component.** Every one comes from `useCopy()`.
  A literal in JSX can only be right in one language, so it's a bug in the
  other. `src/i18n/types.ts` is the contract; both dictionaries must satisfy
  it, so a missing translation fails `tsc` rather than shipping.
- **Bengali is authoritative.** Copy changes land in `bn.ts` first, then `en.ts`
  follows. English is for the diaspora reader — someone *from* the village who
  reads English more easily, not a foreigner. It carries the same emotional
  weight; it is not a flattened literal translation.
- **Village vocabulary stays untranslated** in English: para, union, upazila,
  haat-bazaar, janaza, aqiqah, khatian, waz, milad, qurbani. This reader knows
  those words. Replacing them with English approximations makes the page read
  like an outsider wrote it.
- **The accent line is always the *other* language.** Under the h1 and in each
  pillar, `/` shows English and `/en/` shows Bengali. That keeps the two-line
  rhythm of the source design in both locales.
- **মফস্বল stays Bengali everywhere** — logo and footer. It's the brand mark,
  not copy.
- **Numbers follow the locale.** Bengali numerals on `/` via
  `toBengaliNumerals`, Latin on `/en/`. "© ২০২৬" reads as a glyph, not a year,
  to someone reading English.
- **The language switch is a link, never a toggle.** `/en/` must be crawlable,
  shareable, and openable in English. Adding a client-side toggle behind one
  URL would undo the whole point of the split entries.
- **Both HTML entries carry their own `<head>`** — title, description, `og:*`,
  `og:locale`, canonical, and reciprocal `hreflang`. Adding a locale means a
  third entry in `vite.config.ts` plus a `hreflang` line in every other entry
  and in `sitemap.xml`.

## Other rules specific to this repo

- **Design tokens only.** Colours come from the `:root` custom properties in
  `styles.css` — reference them as `var(--brand)`. Never hardcode a hex.
- **Do not swap `icons.tsx` for an icon library.** The paths are transcribed
  from the source HTML; lucide's equivalents are close but not identical, and
  substituting them is silent design drift. (`../mofossol.jsx` uses lucide
  because it is the app, not this page.)
- **Data-light, and this is the repo where it is hardest.** React already costs
  ~72KB gzip before anything paints, against a 3G target. Treat that as the
  whole budget: no UI kit, no animation library, no icon package, no i18n
  library. `vite.config.ts` warns above 200KB — if that fires, something is
  wrong; do not raise the limit to silence it.
- **Reduced motion is respected.** The `prefers-reduced-motion` block in
  `styles.css` kills all animation. Any new animation must survive it.
- **Reveal animations must never gate content.** `useInView` treats a missing
  IntersectionObserver as "in view" for exactly this reason.

## Known gaps

- **Client-rendered body.** Each locale's `<head>` is real static HTML, so
  crawlers and link previews get the right title, description, and `hreflang`.
  But the body is an empty `#root` until React boots, so there is no indexable
  body text, and 3G users wait on the bundle before first paint. Prerendering
  each locale at build time (render `<App locale/>` with `react-dom/server`,
  inject, hydrate) would close this. Worth doing before launch.
- **Both dictionaries ship in one chunk.** A visitor to `/` downloads the
  English copy too (~7KB). The upside is that switching language re-uses the
  cached bundle. Not worth splitting unless a third locale lands.
- **`public/og.png` does not exist**, so link previews are blank. Both locales
  currently point at the same image.

## Verify

```sh
npm install
npm run verify     # tsc -b --noEmit && vite build
npm run dev        # / and /en/
```

`npm run verify` green is the bar for "done". Then check **both locales** on a
narrow viewport (≤560px): the noticeboard cards stack, the hamburger opens and
shuts on Escape, the language switch is reachable, the page does not scroll
horizontally, and Tab reaches every control with a visible focus ring.
