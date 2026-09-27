import achievementsData from "@/lib/data/achievements.json";
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
 * VERIFIED — from his founder page, supplied by the owner as the final source,
 * in that page's order. "5+ Institutions founded" was held back at first under
 * the no-counting rule in site.ts; the owner has since asked for it to be
 * shown, which overrides that rule for this one figure.
 */
export const statistics: Statistic[] = achievementsData.statistics;

/** Awards: title, issuer, year and an optional description. */
export const awards: Award[] = achievementsData.awards as Award[];

/** Dated institutional milestones. Each section renders only when it has entries. */
export const milestones: Array<{
  year: string;
  title: string;
  description: string;
}> = achievementsData.milestones;
