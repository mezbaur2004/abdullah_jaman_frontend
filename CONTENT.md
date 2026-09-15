# Content to replace before launch

Every word on the site is placeholder copy written to exercise the layout.
None of it has been checked with Abdullah Jaman. This is the checklist.

All of it lives in `src/content/` — no copy is hard-coded in a component.

## Priority 1 — factually wrong until confirmed

These are specific claims. They are currently invented and **must not ship**.

| File | What to fix |
| --- | --- |
| `achievements.ts` | `awards` — all four titles, issuing bodies and years are invented. The issuers are generic descriptions ("Regional Schools Association"), not real organizations. Replace with real awards or delete the array. |
| `achievements.ts` | `milestones` — the years 2018/2020/2022/2024 are guesses. |
| `achievements.ts` | `statistics` — "3", "15+", "100+", "2" are illustrative. |
| `media.ts` | `mediaItems` — all six are invented. Outlet names are generic categories, not real publications. No `href` is set on any of them, so nothing links anywhere misleading. Add the real title, outlet, date and live URL, or delete the array. |
| `experience.ts` | `roles` — every `period` says "Present". Add real start dates. `location` is assumed to be Dhaka. |
| `profile.ts` | `testimonials` — the single entry is placeholder text attributed to "Placeholder Name". **Delete it or replace it with a real, cleared quote.** It is not currently rendered anywhere, but it will be if a testimonials section is added. |

## Priority 2 — site configuration

| File | Field | Currently | Needs |
| --- | --- | --- | --- |
| `site.ts` | `url` | `https://abdullahjaman.com` | The real domain. Canonical URLs, Open Graph, the sitemap and robots.txt all derive from this. |
| `site.ts` | `email` | `developers.pedagoacademy@gmail.com` | The address enquiries should actually reach. This is currently a developer address, not a public contact. |
| `site.ts` | `phone` | empty | A number, or leave empty (nothing renders). |
| `site.ts` | `location` | `Dhaka, Bangladesh` | Confirm. |
| `site.ts` | `socialLinks` | Bare `linkedin.com` etc. | Real profile URLs, or delete the entries. |

## Priority 3 — narrative copy

Written in the intended voice, but it is an outsider's guess at the story.
Read it as a draft and rewrite in Abdullah Jaman's own words.

- `profile.ts` — `hero.headline`, `hero.lede`, `aboutTeaser`, `aboutPage`
  (three sections plus the facts sidebar), `organizations` summaries.
- `experience.ts` — `roles[].summary` and `highlights`, all four `initiatives`.
- `contact.ts` — `contactIntro`, `contactChannels`, `contactCta`.
- `achievements.ts` — `achievementsIntro`.
- `media.ts` — `mediaIntro`.

## Priority 4 — photography

`public/images/` holds generated abstract placeholder plates. They are
deliberately not stock photography and carry no text, so they read as art
direction rather than as broken images — but they are not photographs of
Abdullah Jaman.

| Path | Used by | Ratio |
| --- | --- | --- |
| `portrait-hero.jpg` | Homepage hero | 4:5 portrait |
| `portrait-about.jpg` | About teaser and About page | 4:5 portrait |
| `gallery-01.jpg` | Homepage gallery | 4:3 landscape |
| `gallery-02.jpg` | Homepage gallery | 3:4 portrait |
| `gallery-03.jpg` | Homepage gallery | 3:4 portrait |
| `gallery-04.jpg` | Homepage gallery | 4:3 landscape |

Drop real files in at the same paths and update `width`/`height` in
`profile.ts` and `gallery.ts`. Images are cropped by a CSS ratio box, so other
dimensions will not break the layout.

Also update every `alt` string to describe the real photograph. The current alt
text describes a picture that does not exist yet.

Set `gallery` to `[]` in `gallery.ts` to hide the gallery section entirely.

## How to check your work

```bash
npm run lint && npm run typecheck && npm run build
```

Then search for anything left behind:

```bash
grep -rn "PLACEHOLDER" src/content/
grep -rn "Placeholder" src/content/
```
