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
    label: "Supplied directly by the owner",
    detail:
      "Campus counts (three at Wheaton, three at Guidance), and the decision to omit Pedago Academy as an unlaunched sister concern.",
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
    known: "An association with the University of Cambridge is confirmed.",
    missing:
      "Degree, subject, programme type and dates. The About page therefore names the institution and nothing else.",
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
    decision: "Not mentioned anywhere on the site.",
    rationale:
      "Confirmed by the owner as a sister concern of Wheaton and Guidance that is still in development and has not launched. An unlaunched venture does not belong in a public profile, and the earlier brief describing a Managing Director role there is superseded.",
  },
  {
    subject: "Positioning",
    decision:
      "Led as educationist and education leader, not as a founder of schools.",
    rationale:
      "Confirmed by the owner that the founding is only part of the remit. 'Founder & Principal' remains as the factual role title against each institution, but no headline reduces him to having built two schools.",
  },
  {
    subject: "Campus counts",
    decision: "Three campuses at Wheaton, three at Guidance — six in total.",
    rationale:
      "Supplied directly by the owner. These are the only hard numbers the site publishes.",
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
    area: "Photos & assets",
    items: [
      "Professional portrait",
      "Cover / banner image",
      "School and institution photographs",
      "Event photographs",
      "Award photographs",
      "Media photographs",
      "Organization logos",
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
