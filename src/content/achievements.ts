import type { Award, Statistic } from "./types";

/**
 * Nothing in this file is populated, and that is the correct state.
 *
 * No awards, honours, statistics or dated milestones have been verified. Each
 * empty array removes its section from the site. Populate them only from
 * confirmed source material — invented figures on a personal-brand site are
 * the single easiest thing to be caught out on.
 */

export const achievementsIntro = {
  eyebrow: "Achievements",
  headline: "Founding and leading two schools.",
  /** VERIFIED — founding both institutions is established; nothing more is. */
  lede: "Abdullah Jaman founded Wheaton International School and Guidance International School in Dhaka, and serves as Principal of both.",
} as const;

/** TO COLLECT — measurable results, student and community impact. */
export const statistics: Statistic[] = [];

/** TO COLLECT — award name, awarding organization, year, category, evidence. */
export const awards: Award[] = [];

/** TO COLLECT — dated institutional milestones. */
export const milestones: Array<{
  year: string;
  title: string;
  description: string;
}> = [];

/**
 * Shown while the sections above are empty. Delete once they are populated.
 */
export const achievementsPending =
  "Awards, recognition and institutional milestones are being compiled. Only confirmed entries will be published here.";
