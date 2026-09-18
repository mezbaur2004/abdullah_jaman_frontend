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
    /* VERIFIED — supplied by the owner, same as the entry in `organizations`.
       It was missing here alone, so the leadership page linked one school out
       and left the other as plain text: two equal posts, one of which looked
       like the lesser. */
    href: "https://guidance.edu.bd/",
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
  headline: "Running schools, not just *leading* them.",
  body: "The institutions he leads in Dhaka, and the ordinary work of keeping them good — curriculum, teachers, assessment, the culture a child actually experiences between the timetable and the gate.",
  cta: { label: "Leadership & experience", href: "/leadership" },
  image: {
    src: "/images/gallery-teaching.jpg",
    alt: "Abdullah Jaman writing on an interactive whiteboard during a teacher training session, beside a diagram of Bloom's taxonomy and the stages of a lesson plan.",
    width: 1600,
    height: 1066,
    // Weighted right of centre. At the frame's left edge a band of red curtain
    // was cropped into a hard vertical block that read as a rendering fault
    // rather than as part of the room.
    position: "62% 50%",
  },
} as const;

/**
 * VERIFIED — supplied by the owner.
 *
 * This was the teacher-training frame, which is also the homepage's leadership
 * picture — the same photograph twice, once on the section that routes to this
 * page and again on the page it routes to. The speaking frame had been held in
 * reserve since it arrived; addressing a room is leadership in practice, which
 * is what the passage beside it is about.
 *
 * The alt text describes the frame and stops. No event, audience or occasion
 * is named, because none is readable from the picture.
 */
export const leadershipSecondary: ImageAsset = {
  src: "/images/gallery-address.jpg",
  alt: "Abdullah Jaman speaking into a handheld microphone.",
  width: 865,
  height: 1320,
};

/**
 * The philosophy passage on the leadership page. Approved framing drawn from
 * the documented material, not a quotation.
 */
export const leadershipPhilosophy = {
  eyebrow: "Approach",
  headline: "What a school is actually *for*.",
  body: [
    "Running a school is mostly unglamorous: curriculum sequencing, how teachers are trained, whether assessment measures understanding or recall, what happens in the corridor between lessons. None of it photographs well, and all of it decides what a child gets.",
    "The through-line is integration rather than balance — academic standards and Islamic values taught as one education rather than two timetables sharing a building, with technology used where it earns its place and left alone where it does not.",
  ],
} as const;

export const leadershipIntro = {
  eyebrow: "Leadership",
  /** "Current" is load-bearing — earlier positions have not been collected. */
  headline: "Leadership & educational *journey*.",
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
