import type { MediaItem } from "./types";

/**
 * VERIFIED — one item, with a live URL.
 *
 * LinkedIn activity is deliberately not listed. Sharing a post is not a
 * publication, and the available profile data does not let the rest of that
 * activity be classified with confidence.
 */

export const mediaIntro = {
  eyebrow: "Media",
  headline: "Press and interviews.",
  lede: "External coverage of Abdullah Jaman and his work at Wheaton International School and Guidance International School.",
} as const;

export const mediaItems: MediaItem[] = [
  {
    title:
      "In conversation with Abdullah Jaman, Founder and Principal of WIS and GIS",
    outlet: "The Daily Star",
    type: "Interview",
    href: "https://www.thedailystar.net/campus/news/conversation-abdullah-jaman-founder-and-principal-wis-and-gis-4075876",
  },
];

/** TO COLLECT — articles, books, research, reports and other published work. */
export const publications: MediaItem[] = [];
