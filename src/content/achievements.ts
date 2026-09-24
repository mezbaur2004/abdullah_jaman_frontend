import type { Award, Statistic } from "./types";

/**
 * Only the statistics are populated, from the owner's final source.
 *
 * No awards, honours or dated milestones have been verified. Each
 * empty array removes its section from the site. Populate them only from
 * confirmed source material — invented figures on a personal-brand site are
 * the single easiest thing to be caught out on.
 */

export const achievementsIntro = {
  eyebrow: "Achievements",
  /**
   * The masthead used to read "Institutions under his leadership." — word for
   * word the heading of the first section beneath it, so the page opened by
   * saying the same sentence twice with a rule between them. This one titles
   * the page rather than the section, and it says plainly that the record is
   * partial, which the pending note at the foot of the page then explains.
   */
  headline: "The record so *far*.",
  /** VERIFIED — the institutions and the roles. No counts: see site.ts. */
  lede: "Abdullah Jaman is Principal of Wheaton International School and Guidance International School in Dhaka, Bangladesh.",
} as const;

/**
 * VERIFIED — from his founder page, supplied by the owner as the final source.
 * The page also gives a count of institutions founded; the owner chose not to
 * publish it, in keeping with the no-counting rule in site.ts.
 */
export const statistics: Statistic[] = [
  { value: "20+", label: "Years experience", detail: "In education" },
  { value: "4", label: "Degrees & certificates" },
  { value: "10+", label: "Media appearances" },
];

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
