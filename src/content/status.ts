import type { ContentGap, OpenQuestion, ResolvedDecision } from "./types";

/**
 * The research register behind the site, rendered at /content-status
 * (noindex). It exists so the distinction between what is verified, what is
 * known-but-unconfirmed, and what is still missing lives in the repository
 * rather than in someone's head.
 *
 * Nothing here is published on the public pages.
 */

export const verifiedSources = [
  {
    label: "The Daily Star",
    detail:
      '"In conversation with Abdullah Jaman, Founder and Principal of WIS and GIS" — interview.',
    href: "https://www.thedailystar.net/campus/news/conversation-abdullah-jaman-founder-and-principal-wis-and-gis-4075876",
  },
  {
    label: "Wheaton International School",
    detail: "Official school website.",
    href: "https://wheaton.edu.bd",
  },
  {
    label: "LinkedIn profile",
    detail:
      "Confirms association with WIS and GIS. Several experience and education entries are redacted in the public profile.",
  },
  {
    label: "Wheaton International School profile",
    detail:
      "The five qualifications now shown on the About page, supplied by the owner from his current profile. Years were not supplied and are not shown.",
    href: "https://wheaton.edu.bd",
  },
  {
    label: "Supplied directly by the owner",
    detail:
      "Campus counts (recorded, not published), the board-governance and earlier-career caveats behind the no-counting rule, the decision to omit Pedago Academy as an unlaunched sister concern, the photographs used across the site, and confirmation that he has authored multiple books.",
  },
];

/**
 * Known but not yet usable. Each of these has a specific blocker — they are
 * not vague to-dos, and none of them may be guessed at.
 */
export const openQuestions: OpenQuestion[] = [
  {
    subject: "The 2020–2023 date range",
    known: "A 2020–2023 range is visible on the LinkedIn profile.",
    missing:
      "Which position it belongs to. Without that it cannot be attached to a role, so no dates are shown anywhere on the site.",
  },
  {
    subject: "University of Cambridge",
    known:
      "Postgraduate Advanced Certificate in Educational Studies (Assessment), listed on his founder page as a PGCert in Educational Assessment.",
    missing: "Dates. None are shown.",
  },
  {
    subject: "Earlier career",
    known:
      "He currently leads Wheaton International School and Guidance International School.",
    missing:
      "Any position held before these. Confirmed by the owner that earlier roles may exist and have not been collected, which is why the experience page is titled as current roles rather than as a career history.",
  },
  {
    subject: "Governance",
    known:
      "He is the principal founder of both institutions and holds the title Founder & Principal at each.",
    missing:
      "The composition of the boards. Confirmed by the owner that he is not the sole member, so the site credits him with leadership rather than sole ownership.",
  },
  {
    subject: "The bibliography",
    known:
      "Two published volumes, supplied in full by the owner and now on the site: Arabi Shikkha Obhijatra volumes one and two, published by Manuver in 2024, with publisher, subject, extent, format, edition, list price and retailer page for each. They are in src/data/books.ts and each has a page of its own.",
    missing:
      "Whether these two are the whole of it. The Daily Star interview describes wider work developing and supervising Islamic Studies and Arabic materials, and the owner has referred to multiple authored titles, so further books may exist that have not been supplied. Also outstanding: print-quality cover files, and an ISBN for either volume. Nothing is added to the list on inference — an invented title is a fabricated work attributed to a real author.",
  },
  {
    subject: "A quotation",
    known:
      "His message, from his founder page, is now on the homepage and the About page as a quotation in his own words. The homepage closing section still carries a composed statement of his position, not typeset as a quotation.",
    missing:
      "Nothing for the message. The closing statement can be replaced with a line from it, or another on-record quotation, if the owner prefers.",
  },
  {
    subject: "LinkedIn activity",
    known: "The profile shows professional activity beyond the Daily Star share.",
    missing:
      "Enough detail to classify any of it as an achievement, publication, project or milestone. None of it is treated as portfolio content.",
  },
];

/**
 * Answered questions. Kept rather than deleted so that a future reader does
 * not re-open a decision without seeing why it was made.
 */
export const resolvedDecisions: ResolvedDecision[] = [
  {
    subject: "Pedago Academy",
    decision:
      "Not mentioned anywhere on the site. Reconfirmed when his founder page was supplied as the final source: its message, credentials, press and videos are used, with every Pedago Academy reference left out.",
    rationale:
      "Confirmed by the owner as a sister concern of Wheaton and Guidance that is still in development and has not launched. An unlaunched venture does not belong in a public profile, and the earlier brief describing a Managing Director role there is superseded.",
  },
  {
    subject: "Positioning",
    decision:
      "Led as educationist and education leader, not as a founder of schools.",
    rationale:
      "Confirmed by the owner that the founding is only part of the remit. 'Founder & Principal' remains as the factual role title against each institution, but no headline reduces him to having built schools, and none counts them.",
  },
  {
    subject: "The standalone gallery",
    decision:
      "Removed as a section. The photographs are distributed across the pages they support.",
    rationale:
      "A gallery makes photographs their own content category, which is exactly backwards: each of these pictures is evidence for something a page is already saying. The teaching frame belongs with leadership, the office shelves with the writing, the interview still with media. Nothing was deleted and nothing is shown merely because it exists.",
  },
  {
    subject: "The hero role line",
    decision:
      "\"Founder, Principal & Education Leader\", as supplied by the owner.",
    rationale:
      "This sits alongside the earlier decision not to reduce him to school-building, and does not overturn it. The objection was to a headline whose whole content was the founding; this line names the founding as one of three things and closes on the widest of them. The educationist framing still leads the page above it.",
  },
  {
    subject: "Campus counts",
    decision:
      "Recorded here (three at Wheaton, three at Guidance) and published nowhere on the site.",
    rationale:
      "Supplied by the owner, then withdrawn from publication by him. Both institutions are governed by a board of which he is the principal founder but not the only member, so a campus tally against his name reads as a personal holding. The counts stay in this register because they are true and may be publishable in an institutional context later; they are absent from src/content/profile.ts so that no component can render them by accident.",
  },
  {
    subject: "Institutions founded",
    decision: "Shown as \"5+ Institutions founded\" in the statistics.",
    rationale:
      "The figure is on his founder page, which the owner supplied as the final source. It was first left out under the rule below; the owner then asked for it explicitly, which makes it the one exception. Per-institution campus counts remain unpublished.",
  },
  {
    subject: "Counting anything",
    decision:
      "The site names institutions, roles and places. It does not count them.",
    rationale:
      "Two separate reasons and both have to hold. Governance: the institutions are not his alone to tally. Completeness: earlier positions have not been collected, so any figure summarising the career would be a count of what happens to be known rather than of what exists.",
  },
];

/** Everything still to be gathered, grouped as in the source brief. */
export const contentGaps: ContentGap[] = [
  {
    area: "Biography",
    items: [
      "Short biography",
      "Long biography",
      "Personal story",
      "Career journey",
      "Leadership philosophy",
    ],
  },
  {
    area: "Education",
    items: [
      "Degrees",
      "Subjects",
      "Institutions",
      "Years",
      "Certifications",
      "Professional training",
    ],
  },
  {
    area: "Career",
    items: [
      "Complete employment history",
      "Positions",
      "Organizations",
      "Start and end dates",
      "Responsibilities",
      "Major milestones",
    ],
  },
  {
    area: "Leadership",
    items: [
      "Leadership philosophy",
      "Mission",
      "Vision",
      "Educational philosophy",
      "Institutional objectives",
    ],
  },
  {
    area: "Achievements",
    items: [
      "Major achievements",
      "Institutional milestones",
      "Student and community impact",
      "Measurable results",
      "Major initiatives",
    ],
  },
  {
    area: "Awards & recognition",
    items: [
      "Award name",
      "Awarding organization",
      "Year",
      "Category",
      "Supporting image or document",
    ],
  },
  {
    area: "Media",
    items: [
      "Interviews",
      "Newspaper features",
      "TV appearances",
      "Podcasts",
      "Articles",
      "Videos",
      "Speaking engagements",
    ],
  },
  {
    area: "Publications",
    items: ["Articles", "Books", "Research", "Reports", "Other published work"],
  },
  {
    area: "Books",
    items: [
      "Any further titles beyond the two volumes of Arabi Shikkha Obhijatra",
      "Print-quality cover files — the current images are low-resolution stand-ins, to be dropped in at the same paths under /images/books/",
      "ISBNs for both volumes",
      "His role on any title where it is not sole authorship",
    ],
  },
  {
    area: "Photos & assets",
    items: [
      "Cover / banner image",
      "School and institution photographs",
      "Award photographs",
      "Media photographs — three landscape files reserved in gallery.ts",
      "Organization logos",
      "A higher-resolution original of the office photograph (the supplied file is 412px wide)",
    ],
  },
  {
    area: "Contact",
    items: [
      "Professional email",
      "Phone",
      "WhatsApp",
      "LinkedIn",
      "Other social profiles",
      "Office / location information",
      "Live domain for the site",
    ],
  },
];
