# Site data

Every list on the site is read from the JSON files in this folder. Add, remove
or reorder entries here and every page that shows them updates on the next
build. No component needs to change.

| File | What it holds | Where it shows |
| --- | --- | --- |
| `books.json` | `books` | Books page, homepage Books, `/books/[slug]` pages, sitemap |
| `media.json` | `press`, `videos`, `publications` | Media page, homepage Media slider |
| `achievements.json` | `statistics`, `awards`, `milestones` | Homepage stats strip, Achievements page |
| `profile.json` | `organizations`, `education`, `professionalDevelopment`, `roleLine`, `expertise`, `biography` | About page, homepage Institutions, footer and contact links |
| `leadership.json` | `roles`, `initiatives` | Leadership page |
| `contact.json` | `channels` | Contact page |

## Books

- **Add a title:** append an object to `books` with a unique `slug`. The slug
  becomes the page's URL: `/books/<slug>`. There are no series: every title,
  a boxed set included, is one flat record with the same fields.
- **Fields:** `titleBn`, `titleEn`, `publisherBn`/`En`, `subjectBn`/`En`,
  `pages`, `format`, `edition`, `year`, `listPrice`, `currency`,
  `coverImage` and `description` on every title. `retailer` and
  `purchaseUrl` are optional; without them the page shows no "Available at"
  button.
- **Cover image:** `coverImage` is a path under `/public`, cropped or padded
  to 3:4 (870×1160). Until that file exists, the site draws a cover from the
  title instead.

Sections whose list is empty hide themselves. Leave an array as `[]` rather
than adding placeholder entries.
