# Abdullah Jaman — personal brand site

A premium personal-brand portfolio for Abdullah Jaman: Managing Director of
Pedago Academy, Founder and Managing Director of Wheaton International School,
and Principal of Guidance International School.

Six pages — Home, About, Experience, Achievements, Media, Contact — built as a
static site. No database, no authentication, no CMS and no admin panel in v1.

> **All written content is placeholder copy.** Nothing on the site has been
> verified with Abdullah Jaman. See [CONTENT.md](./CONTENT.md) for the full list
> of what has to be replaced before launch.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, Turbopack) |
| Language | TypeScript, strict |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| Animation | Framer Motion (`motion`), in one component only |
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
│   ├── sitemap.ts           Derived from the nav, so it cannot drift
│   └── robots.ts
├── components/
│   ├── layout/              Container, Section, PageHeader, header, footer
│   ├── ui/                  Button, Eyebrow, SectionHeading, Figure, Reveal
│   ├── home/                One file per homepage section
│   └── media/               Shared media entry, used by home and /media
├── content/                 ← all copy and data lives here
└── lib/                     cn(), metadata + JSON-LD helpers
```

## Editing content

**No copy lives in a component.** Everything is in `src/content`, typed against
`src/content/types.ts`:

| File | Controls |
| --- | --- |
| `site.ts` | Name, tagline, domain, email, location, navigation, social links |
| `profile.ts` | Hero, organizations, about page, portraits |
| `experience.ts` | Roles and initiatives |
| `achievements.ts` | Statistics, awards, milestones |
| `media.ts` | Press, publications and talks |
| `gallery.ts` | Photo gallery |
| `contact.ts` | Contact page and the closing call to action |

Sections degrade gracefully: empty the `gallery` array and the gallery section
removes itself; drop `site.email` and every email link disappears; omit a media
item's `href` and it renders as plain text instead of a dead link.

### Adding a CMS later

The UI reads from these modules and nothing else. To move to a CMS, replace each
module with an async loader returning the same types and make the consuming page
components `async`. No component markup has to change — that constraint is the
reason the content layer exists.

## Design system

Tokens are defined once in `src/app/globals.css` under Tailwind v4's `@theme`,
and every component composes from them:

- **Palette** — warm paper (`paper`), deep ink (`ink-*`) and a single brass
  accent (`brass-*`). No gradients, no glassmorphism.
- **Type** — Fraunces (display serif) and Inter (sans), both self-hosted through
  `next/font/google`, so there are no external font requests at runtime. Display
  sizes are fluid `clamp()` values, set as `text-display-*`.
- **Motion** — one entrance: a short rise and fade on first view (`Reveal`).
  Everything honours `prefers-reduced-motion`.

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

`public/images/` currently holds six generated placeholder plates — abstract,
art-directed, no stock photography and no text baked in. Regenerate them with:

```bash
node scripts/generate-placeholders.mjs
```

**To use real photography**, drop files in at the same paths and update the
`width`/`height` in the content file. Components crop with a CSS ratio box
rather than the intrinsic size, so different dimensions will not break layout.

| Path | Used by | Ratio |
| --- | --- | --- |
| `portrait-hero.jpg` | Homepage hero | 4:5 |
| `portrait-about.jpg` | About teaser and About page | 4:5 |
| `gallery-01…04.jpg` | Homepage gallery | alternating 4:3 / 3:4 |

`assets/fonts/` holds one TTF used only for build-time OG image generation —
see the README in that folder.

## SEO

- Per-page `title`, `description` and canonical URL via `pageMetadata()`.
- Open Graph and Twitter card metadata, with a generated share image.
- schema.org `Person` JSON-LD linking the name to all three organizations.
- `sitemap.xml` and `robots.txt` generated from the nav.
- All content is real HTML text. No text is embedded in images.

## Accessibility

Audited with axe-core across all six pages plus the 404, at 1440px and 390px:
zero violations. Also verified: a skip link as the first tab stop, `aria-current`
on the active nav item, `aria-expanded` and Escape-to-close on the mobile menu
with body scroll locked while open, visible focus rings throughout, and no
horizontal overflow at 320px.

## Before launch

1. Replace the placeholder content — see [CONTENT.md](./CONTENT.md).
2. Set the real domain in `src/content/site.ts` (`site.url`). Canonical URLs,
   Open Graph URLs, the sitemap and robots.txt all derive from it.
3. Replace the placeholder images with real photography.
4. Point the social links at real profiles, or remove them.

### Adding a contact form

The contact page deliberately ships without one: a form with no backend is a
form that silently drops enquiries. When an email provider is chosen, add a
Server Action and a `<form>` to `src/app/contact/page.tsx` — no other page is
affected.
