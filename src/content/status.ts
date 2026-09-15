import type { ContentGap, OpenQuestion } from "./types";

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
    subject: "Pedago Academy",
    known:
      "The original project brief described Abdullah Jaman as Managing Director of Pedago Academy, and the contact address supplied was a Pedago Academy one.",
    missing:
      "Any mention in the verified dataset, which gives the positioning as Founder & Principal of WIS and GIS only. The role is not shown on the site pending confirmation of whether it is current, former, or not applicable.",
  },
  {
    subject: "LinkedIn activity",
    known: "The profile shows professional activity beyond the Daily Star share.",
    missing:
      "Enough detail to classify any of it as an achievement, publication, project or milestone. None of it is treated as portfolio content.",
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
