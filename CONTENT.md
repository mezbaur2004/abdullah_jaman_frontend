# Content dataset

The site renders **verified information only**. Everything else is recorded but
not published.

Three states are kept strictly apart, and the code enforces the distinction:

| State | Where it lives | Rendered? |
| --- | --- | --- |
| **Verified** | `src/content/*.ts` | Yes |
| **Awaiting confirmation** | `src/content/status.ts` → `openQuestions` | No |
| **To collect** | `src/content/status.ts` → `contentGaps` | No |

The register is also viewable as a page at **`/content-status`** — noindex,
disallowed in `robots.txt`, and not linked from the site.

## Verified

| Fact | Source |
| --- | --- |
| Name: Abdullah Jaman | Dataset |
| Location: Dhaka, Bangladesh | Dataset |
| Founder & Principal, Wheaton International School (WIS) | Dataset, LinkedIn, The Daily Star |
| Founder & Principal, Guidance International School (GIS) | Dataset, LinkedIn, The Daily Star |
| WIS website: https://wheaton.edu.bd | Dataset |
| Association with the University of Cambridge | Dataset |
| The Daily Star interview (live URL in `media.ts`) | Dataset |

The approved positioning statement lives once, in `site.description`, and every
page that needs it reads from there. **Do not make stronger claims than it
does** without new source material.

### How he is framed

The site leads with **educationist and education leader**, not "founder of two
schools" and not "school builder". Founding the institutions is a fact, and
"Founder & Principal" appears as the role title against each one — but no
headline reduces him to having built schools, because the remit is wider than
the founding. `site.positioning` holds the word used in headlines; `site.role`
holds the factual title. They are separate on purpose.

### Nothing is counted

**The site names institutions, roles and places. It never adds them up.** No
campus totals, no school counts, no figures summarising the career. Two
independent reasons, and each one is sufficient on its own:

1. **Governance.** He is the principal founder, but the institutions are
   governed by a board of which he is not the only member. A tally against his
   name reads as a personal holding rather than as shared work.
2. **Completeness.** Earlier positions have not been collected. Any figure
   summarising the career would count what happens to be known, not what
   exists — and would read as the whole story.

This is enforced in the data, not only in the copy: `Organization` has no
campus or size field, so no component can render one by accident. The campus
counts the owner supplied are recorded in `status.ts` for the record and are
published nowhere.

## Awaiting confirmation — not published

- **The 2020–2023 date range.** Visible on LinkedIn, but there is no way to
  attach it to a position, so no dates appear anywhere on the site.
- **University of Cambridge.** The association is confirmed; the degree,
  subject and dates are not. The site names the institution and nothing else.
- **LinkedIn activity.** Not enough detail to classify any of it as an
  achievement, publication or milestone, so none of it is treated as content.

## Resolved — do not re-open without reading these

Recorded in `src/content/status.ts` (`resolvedDecisions`) and rendered at
`/content-status`.

- **Pedago Academy — not mentioned anywhere on the site.** Confirmed as a
  sister concern of Wheaton and Guidance that is still in development and has
  not launched. An unlaunched venture does not belong in a public profile, and
  the earlier brief describing a Managing Director role there is superseded.
- **Positioning — educationist, not school builder.** See above.
- **Counting anything — the site does not.** See "Nothing is counted" above.
- **Campus counts — recorded, never published.** Three at Wheaton, three at
  Guidance, supplied by the owner and then withdrawn from publication by him.
  They stay in `status.ts` because they are true and may be publishable in an
  institutional context later; they are deliberately absent from `profile.ts`.
- **Earlier career — treated as unknown, not as absent.** The experience page
  is titled *current roles* and says so in a note, because positions held
  before Wheaton and Guidance have not been collected.

## Photographs

Supplied by the owner and in use:

| File | Where it appears |
| --- | --- |
| `portrait.jpg` | Hero and About page, via `portrait` in `profile.ts` |
| `gallery-teaching.jpg` | Leadership page and homepage leadership section |
| `gallery-address.jpg` | Held in reserve — not currently placed |
| `gallery-podium.jpg` | Media page, lower block |
| `gallery-office.jpg` | Books page and homepage books section |
| `feature-interview.jpg` | Media page, via `mediaFeature` in `media.ts` |
| `feature-sports-day.jpg` | Experience page, via `experienceFeature` in `experience.ts` |
| `feature-reception.jpg` | About page, via `aboutFeature` in `profile.ts` |

**Alt text describes only what is in the frame.** The rule against unsupported
claims applies to image descriptions exactly as it applies to prose: "teaching
a lesson-planning session" is readable from the photograph, "inspiring
teachers" is not.

Two of the files were edited on the way in. The portrait was cropped to 4:5
from a square original so the hero and About page can share one file. The
speaking photograph was cropped past a globe-and-dove graphic sitting in its
lower left, and pulled back from a saturated orange so the tile sits with the
brand's yellow rather than fighting it. Originals are unmodified on the owner's
side; `scripts/` holds no image pipeline, so re-supplying a file means dropping
in a replacement of the same name.

**There is no gallery.** It was removed as a section: a gallery makes
photographs their own content category, which is backwards, since each of these
pictures is evidence for something a page is already saying. Every photograph
now sits where it supports the content, and none is shown merely because it
exists.

**The three landscape photographs went to pages rather than to the gallery.**
Each one is about the page it sits on: the interview belongs on Media, the
sports day on Experience, the reception on About. They render through
`FeatureImage`, which is the gallery's counterpart for a single image set into
a page — and deliberately without the gallery's hover zoom. A gallery is a grid
you browse, where a small push-in rewards looking closer; an image inside a
page is illustrating the prose around it, and movement under the cursor there
competes with the reading.

**Nobody else in a photograph is named.** No names were supplied for the other
people in the interview and reception frames, and inventing one would be the
same failure as inventing an award. The same goes for the programme behind the
interview: nothing in the frame identifies it, so nothing claims it.

`gallery-office.jpg` is the one low-resolution file at 412px wide. The grid
gives it a smaller tile to compensate, but a higher-resolution original would
be better.

## Books

**The bibliography is empty, and that is the correct state today.** Authorship
is confirmed — the Daily Star interview describes his development and
supervision of Islamic Studies and Arabic learning materials, and the owner has
confirmed multiple authored titles. What has not been supplied is a single
title, cover, publisher or date.

So `/books` ships built and waiting. It leads with what the writing is *for*,
which is on the record, and lists nothing. A bibliography is the easiest thing
on a personal site to check and the worst to get wrong: an invented title is not
a rounding error, it is a fabricated work attributed to a real author.

**To add a book**, append an object to `books` in `src/content/books.ts`.
`title` is the only required field — an entry with nothing else still renders,
as a typographic plate rather than a cover. Covers go in
`public/images/books/`. Nothing in the UI needs touching: the page, the
homepage section, the category grouping and the featured slot all read from
that array.

Categories (`Islamic Studies`, `Arabic Language`, `Aqidah`,
`Educational Materials`) appear only when a book actually carries one, so an
empty category never advertises a gap.

## Empty on purpose

These arrays are empty, and their sections remove themselves from the site as a
result. Populating an array is all it takes to bring its section back.

| File | Export | Section it controls |
| --- | --- | --- |
| `achievements.ts` | `statistics` | Homepage statistics band (the at-a-glance band is separate, and carries qualities rather than figures) |
| `achievements.ts` | `awards` | Awards, homepage and achievements page |
| `achievements.ts` | `milestones` | Timeline on the achievements page |
| `experience.ts` | `initiatives` | Professional work, homepage and experience page |
| `media.ts` | `publications` | Publications on the media page |
| `site.ts` | `socialLinks` | Social links in the footer and contact page |

**Do not fill any of these with plausible-sounding placeholders.** An invented
award or statistic on a personal-brand site is the single easiest thing to be
caught out on, and it is why the previous draft of this content was removed.

## Still to collect

The full list is in `src/content/status.ts` (`contentGaps`) and renders at
`/content-status`. Headline items:

1. **A professional email.** `site.email` is empty, so every email link on the
   site is hidden and the contact page falls back to the WIS website. This is
   the single highest-value thing to supply.
2. **The live domain.** `site.url` is a placeholder. Canonical URLs, Open
   Graph, the sitemap and `robots.txt` all derive from it.
3. **Biography.** `aboutPage.sections` is empty; the About page currently shows
   verified facts only. Add `{ heading, body[] }` entries and they render in
   order.
5. **Career history**, with dates and responsibilities, to fill out `roles`.

## Pending notices

Three short strings tell readers that a section is still being compiled, rather
than leaving a bare gap:

- `experience.ts` → `experiencePending`
- `achievements.ts` → `achievementsPending`
- `contact.ts` → `contactPending`

Delete a string and its notice disappears with it.

## Checking your work

```bash
npm run lint && npm run typecheck && npm run build
```

Then read `/content-status` in the running site to see what is still open.
