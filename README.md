# Abdullah Jaman — personal brand site

A premium personal-brand portfolio for Abdullah Jaman — educationist, and
Founder and Principal of Wheaton International School (WIS) and Guidance
International School (GIS) in Dhaka, Bangladesh.

Six pages — Home, About, Experience, Achievements, Media, Contact — built as a
static site. No database, no authentication, no CMS and no admin panel in v1.

> **The site renders verified information only.** Where a fact has not been
> confirmed, the section removes itself rather than showing an approximation.
> What is verified, what is awaiting confirmation and what is still to be
> collected are kept strictly apart — see [CONTENT.md](./CONTENT.md), or open
> `/content-status` in the running site.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, Turbopack) |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Animation | Framer Motion (`motion`), in one component only |
| Theming | Light and dark, system default, no dependency |
| Palette | Forest primary, brass secondary, on warm paper / green-black |
| Icons | `lucide-react` |
| Images | `next/image` |

Every page prerenders to static HTML at build time, so the site can be hosted
anywhere — Vercel, Netlify, or `next build && next start` behind any proxy.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build (all routes prerender)
npm start            # serve the production build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

## Project structure

```
src/
├── app/                     Routes, one folder per page
│   ├── layout.tsx           Fonts, metadata, JSON-LD, header/footer shell
│   ├── page.tsx             Home — composes the sections below
│   ├── opengraph-image.tsx  Social share card, generated at build time
│   ├── icon.tsx             Favicon monogram, generated at build time
│   ├── content-status/      Internal research register (noindex)
│   ├── sitemap.ts           Derived from the nav, so it cannot drift
│   └── robots.ts
├── components/
│   ├── layout/              Container, Section, PageHeader, header, footer
│   ├── ui/                  Button, Eyebrow, SectionHeading, Figure, Reveal
│   ├── home/                One file per homepage section
│   └── media/               Shared media entry, used by home and /media
├── content/                 ← all copy and data lives here
└── lib/                     cn(), theme init, metadata + JSON-LD helpers
```

## Editing content

**No copy lives in a component.** Everything is in `src/content`, typed against
`src/content/types.ts`:

| File | Controls |
| --- | --- |
| `site.ts` | Name, role, domain, email, location, navigation, links |
| `profile.ts` | Hero, organizations, education, about page, portrait |
| `experience.ts` | Roles and initiatives |
| `achievements.ts` | Statistics, awards, milestones |
| `media.ts` | Press and publications |
| `gallery.ts` | Photo gallery |
| `contact.ts` | Contact page and the closing call to action |
| `status.ts` | The research register behind `/content-status` |

**Every collection is allowed to be empty, and most currently are.** That is
load-bearing rather than incidental: an empty array renders as nothing, so a
section with no verified content removes itself instead of being filled in.
Drop `site.email` and every email link disappears; omit a media item's `href`
and it renders as plain text rather than a dead link; set `portrait` to `null`
and the portrait slots fall back to a decorative panel that is marked as such.

The homepage numbers its own sections at render time rather than hard-coding
them, so the sequence stays contiguous — with three sections present a reader
sees 01, 02, 03, not 01, 04, 09.

### Adding a CMS later

The UI reads from these modules and nothing else. To move to a CMS, replace each
module with an async loader returning the same types and make the consuming page
components `async`. No component markup has to change — that constraint is the
reason the content layer exists.

## Design system

`src/app/globals.css` holds three layers, and components only ever touch the
third:

1. **Palette** — raw values (`--paper*`, `--night-*`, `--forest-*`, `--brass-*`,
   `--ink-*`). Referenced by nothing outside this file.
2. **Semantic tokens** — `--surface`, `--content`, `--accent`, `--line`,
   `--action` and friends, defined once per theme.
3. **Tailwind theme** — `@theme inline` maps those to utilities, so a component
   writes `bg-surface text-content border-line` and works in both themes with no
   `dark:` variants anywhere.

`@theme inline` matters: it compiles `bg-surface` to `var(--surface)` directly
rather than through a second indirection, which is what lets the token
re-resolve when the theme flips.

### Colour

Two hues carry the brand, and they have separate jobs.

**Forest** is the primary. It fills the buttons, the dark contact band and
footer, the hero plate, the tinted section band, the icon frames and every
interactive accent — so a reader can tell what is clickable by colour alone.
**Brass** is the secondary, and is rationed to one standing job: enumeration.
Section numerals and years are brass; nothing else is. The two never compete
for the same role, which is what keeps a two-colour page from looking busy.

The neutrals are mixed toward forest rather than left cold, so a grey rule
beside a forest heading still reads as part of one family. The same applies to
the shadows, which carry a little of the hue instead of neutral black — that is
what stops a raised white card from looking grey against warm paper.

Light runs warm paper over deep forest; dark runs green-black over light teal.
Both are checked with axe at 1440px and 390px; `--surface-accent` is the
tightest ratio on the page and still clears AA.

- **Type** — Fraunces (display serif) and Inter (sans), both self-hosted through
  `next/font/google`, so there are no external font requests at runtime. Display
  sizes are fluid `clamp()` values, set as `text-display-*`.
- **Motion** — one entrance: a short rise and fade on first view (`Reveal`).
  Everything honours `prefers-reduced-motion`.

### Sections and cards

`<Section>` owns the page rhythm. Each one alternates surface tone — including
`accent`, the tinted band that lets the page change key without reaching for
the full dark band every time — carries a rule along its top edge, and can take
a two-digit `index` with a label, so
boundaries read as boundaries rather than as a change of subject mid-scroll.
The rule is on by default because two adjacent sections in the same tone would
otherwise run together.

Within a section, `<Card>` carries the content. Elevation comes from a border
*and* a shadow rather than a shadow alone: the shadow does the work on paper,
but against a near-black ground it is close to invisible, so the border and the
raised surface are what separate a card from the page in dark mode. The
`feature` tone exists for the same reason — one card per group draws the eye,
and in dark mode it is the accent border rather than the fill that carries it.

`<IconChip>` frames an icon and is always `aria-hidden`; the label beside it
carries the meaning.

### Light and dark

Three states: **system** (the default), light, and dark. No dependency —
roughly forty lines in total.

- The system default needs no JavaScript at all. "System" means *no*
  `data-theme` attribute on `<html>`, so the CSS falls through to
  `prefers-color-scheme` and is correct even if scripting is off entirely.
- An explicit choice writes `data-theme="light"` or `"dark"`. The dark rules are
  declared twice — once under `prefers-color-scheme: dark` guarded by
  `:root:not([data-theme="light"])`, once under `:root[data-theme="dark"]` — so
  an explicit choice wins in **both** directions.
- A small blocking inline script in `<head>` (`src/lib/theme.ts`) applies a
  saved choice before first paint, so there is no flash of the wrong theme.
  `<html>` carries `suppressHydrationWarning` because that script legitimately
  mutates the attribute before React hydrates.
- `ThemeToggle` reads the document through `useSyncExternalStore` rather than
  syncing state in an effect, so there is no extra render and no hydration
  mismatch. It cycles system → light → dark and keeps other tabs in step.
- The `surface-inverse` band flips to a *raised dark* in dark mode rather than
  to white — a full white band in a dark theme is a flashbang, and the point of
  that band is contrast with its neighbours, not absolute lightness.

### Where the JavaScript goes

The site is almost entirely server-rendered. Two client components exist:

- `SiteHeader` — the sticky nav and mobile overlay. This is the only place
  Framer Motion loads, scoped with `LazyMotion` + `domAnimation` + `strict` so
  it pulls the DOM feature set rather than the full bundle.
- `Reveal` — an IntersectionObserver and a CSS transition, no library. It
  writes a `data-revealed` attribute straight to the DOM instead of holding
  React state, so scrolling never re-renders a section.

`Reveal` starts its content at `opacity: 0`, which means it must be impossible
to strand invisible. Three guards cover that: a mount check for landing below an
element, a very large top `rootMargin` for jumping past one mid-session, and a
`<noscript>` stylesheet in the root layout for when JavaScript never arrives.
The content is always present in the DOM regardless — only opacity and transform
move — so crawlers and screen readers see the whole page.

## Images

No photograph of Abdullah Jaman has been supplied, so `public/images/` holds a
single generated plate: `panel-hero.jpg`. It is abstract — not a likeness and
not stock photography — and carries an empty `alt`, so it is decorative and
assistive technology skips it. It gives the hero a visual anchor without
captioning a stand-in as him. Regenerate with `npm run placeholders`.

**To use a real portrait**, drop the file in `public/images/` and set
`portrait` in `src/content/profile.ts`. The hero and About page pick it up
automatically. Components crop with a CSS ratio box rather than the intrinsic
size, so any dimensions work.

`assets/fonts/` holds one TTF used only for build-time OG image generation —
see the README in that folder.

## SEO

- Per-page `title`, `description` and canonical URL via `pageMetadata()`.
- Open Graph and Twitter card metadata, with a generated share image.
- schema.org `Person` JSON-LD linking the name to all three organizations.
- `sitemap.xml` and `robots.txt` generated from the nav.
- All content is real HTML text. No text is embedded in images.

## Accessibility

Audited with axe-core across all seven pages plus the 404, in **light and dark**
at 1440px and 390px — 32 combinations, zero violations. Also verified: a skip
link as the first tab stop, `aria-current` on the active nav item,
`aria-expanded` and Escape-to-close on the mobile menu with body scroll locked
while open, visible focus rings throughout, and no horizontal overflow at 320px
through 1920px in either theme.

## Before launch

1. Set a professional email in `src/content/site.ts` (`site.email`). It is
   empty, so every email link is currently hidden and the contact page falls
   back to the WIS website.
2. Set the real domain (`site.url`). Canonical URLs, Open Graph URLs, the
   sitemap and robots.txt all derive from it.
3. Supply a portrait and set `portrait` in `src/content/profile.ts`.
4. Work through the open questions at `/content-status` — in particular whether
   the Pedago Academy role should appear at all.
5. Add social profile URLs to `socialLinks`, or leave the array empty.
6. Delete `src/app/content-status/` once the dataset is complete.

### Adding a contact form

The contact page deliberately ships without one: a form with no backend is a
form that silently drops enquiries. When an email provider is chosen, add a
Server Action and a `<form>` to `src/app/contact/page.tsx` — no other page is
affected.
