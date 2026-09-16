import type { ImageAsset, Initiative, Role } from "./types";

/**
 * VERIFIED: the two roles and the institutions.
 *
 * NOT verified, and therefore absent: start and end dates, responsibilities,
 * reporting lines, and any earlier positions. The available LinkedIn profile
 * shows a "2020–2023" range but gives no way to attach it to a specific post,
 * so it is recorded in status.ts as an open question rather than shown here.
 */

export const roles: Role[] = [
  {
    slug: "wheaton-international-school",
    organization: "Wheaton International School",
    title: "Founder & Principal",
    location: "Dhaka, Bangladesh",
    href: "https://wheaton.edu.bd",
    current: true,
  },
  {
    slug: "guidance-international-school",
    organization: "Guidance International School",
    title: "Founder & Principal",
    location: "Dhaka, Bangladesh",
    current: true,
  },
];

/**
 * VERIFIED — supplied by the owner. "Annual sports" is readable from the
 * banner in the frame and the school name from the students' kit; nothing
 * beyond that is claimed, and no one else in the photograph is identified.
 */
export const leadershipFeature: ImageAsset = {
  src: "/images/feature-sports-day.jpg",
  alt: "Abdullah Jaman placing a medal around a student's neck at a school annual sports day, with staff and other students alongside.",
  width: 1600,
  height: 1066,
};

/** The homepage teaser. Its own narrative, not a trimmed copy of the page. */
export const leadershipTeaser = {
  eyebrow: "Leadership",
  headline: "Running schools, not just leading them.",
  body: "The institutions he leads in Dhaka, and the ordinary work of keeping them good — curriculum, teachers, assessment, the culture a child actually experiences between the timetable and the gate.",
  cta: { label: "Leadership & experience", href: "/leadership" },
  image: {
    src: "/images/gallery-teaching.jpg",
    alt: "Abdullah Jaman writing on an interactive whiteboard during a teacher training session, beside a diagram of Bloom's taxonomy and the stages of a lesson plan.",
    width: 1600,
    height: 1066,
  },
} as const;

/**
 * VERIFIED — supplied by the owner. The teacher-training frame belongs to the
 * leadership page rather than a gallery: it is the clearest picture on the
 * site of how he actually works.
 */
export const leadershipSecondary: ImageAsset = {
  src: "/images/gallery-teaching.jpg",
  alt: "Abdullah Jaman writing on an interactive whiteboard during a teacher training session, beside a diagram of Bloom's taxonomy and the stages of a lesson plan.",
  width: 1600,
  height: 1066,
};

/**
 * The philosophy passage on the leadership page. Approved framing drawn from
 * the documented material, not a quotation.
 */
export const leadershipPhilosophy = {
  eyebrow: "Approach",
  headline: "What a school is actually for.",
  body: [
    "Running a school is mostly unglamorous: curriculum sequencing, how teachers are trained, whether assessment measures understanding or recall, what happens in the corridor between lessons. None of it photographs well, and all of it decides what a child gets.",
    "The through-line is integration rather than balance — academic standards and Islamic values taught as one education rather than two timetables sharing a building, with technology used where it earns its place and left alone where it does not.",
  ],
} as const;

export const leadershipIntro = {
  eyebrow: "Leadership",
  /** "Current" is load-bearing — earlier positions have not been collected. */
  headline: "Leadership & educational journey.",
  lede: "The institutions he leads, how they are run, and the thinking underneath — academic standards, teacher development, and the place of faith and character in a modern school.",
} as const;

/**
 * TO COLLECT — programmes, projects and institutional initiatives. Empty, so
 * the initiatives section does not render on either the homepage or the
 * experience page.
 */
export const initiatives: Initiative[] = [];

/**
 * Shown on the experience page while the detailed history is outstanding.
 * Delete this once `roles` carries real dates and responsibilities.
 */
export const leadershipPending =
  "This page shows current roles only. Earlier positions, dates, responsibilities and milestones are being compiled and will be published here once confirmed.";
