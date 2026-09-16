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
export const experienceFeature: ImageAsset = {
  src: "/images/feature-sports-day.jpg",
  alt: "Abdullah Jaman placing a medal around a student's neck at a school annual sports day, with staff and other students alongside.",
  width: 1600,
  height: 1066,
};

export const experienceIntro = {
  eyebrow: "Experience",
  /** "Current" is load-bearing — earlier positions have not been collected. */
  headline: "Current leadership.",
  lede: "Abdullah Jaman leads Wheaton International School and Guidance International School in Dhaka, Bangladesh.",
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
export const experiencePending =
  "This page shows current roles only. Earlier positions, dates, responsibilities and milestones are being compiled and will be published here once confirmed.";
