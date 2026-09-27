# Site data

Every list on the site is read from the JSON files in this folder. Add, remove
or reorder entries here and every page that shows them updates on the next
build. No component needs to change.

| File | What it holds | Where it shows |
| --- | --- | --- |
| `books.json` | `series` (with an optional `set`) and `books` | Books page, homepage Books, `/books/[slug]` pages, sitemap |
| `media.json` | `press`, `videos`, `publications` | Media page, homepage Media slider |
| `achievements.json` | `statistics`, `awards`, `milestones` | Homepage stats strip, Achievements page |
| `profile.json` | `organizations`, `education`, `professionalDevelopment`, `roleLine`, `expertise`, `biography` | About page, homepage Institutions, footer and contact links |
| `leadership.json` | `roles`, `initiatives` | Leadership page |
| `contact.json` | `channels` | Contact page |

## Books

- **Add a title:** append an object to `books` with a unique `slug`. The slug
  becomes the page's URL: `/books/<slug>`.
- **Series:** a title in a series sets `series` to the series `id` and gives
  its `volume` number. A standalone title leaves both out.
- **Description:** a title without its own `description` uses its series'
  description.
- **Optional details:** `publisherEn`/`Bn`, `subjectEn`/`Bn`, `format`,
  `edition`, `listPrice`/`currency`, `retailer`/`purchaseUrl` and `published`
  (e.g. "December 2025") are shown only when present. Leave a field out rather
  than guess it.
- **Cover image:** `coverImage` is a path under `/public`. Until that file
  exists, the site draws a cover from the title instead.
- **Set:** a series `set` is shown as one line of text under the list, never
  as a card of its own. Its `coverImage`, once the file exists, sits beside
  that line on the Books page.

Sections whose list is empty hide themselves. Leave an array as `[]` rather
than adding placeholder entries.
