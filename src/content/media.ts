import type { ImageAsset, MediaItem } from "./types";

/**
 * VERIFIED — one item, with a live URL.
 *
 * LinkedIn activity is deliberately not listed. Sharing a post is not a
 * publication, and the available profile data does not let the rest of that
 * activity be classified with confidence.
 */

/**
 * VERIFIED — supplied by the owner.
 *
 * The alt text names him and describes the setting, and stops there. The other
 * person is not identified because no name was supplied, and the programme is
 * not named because none is readable from the frame. An unsourced caption on a
 * media page is exactly the kind of claim this site does not make.
 */
export const mediaFeature: ImageAsset = {
  src: "/images/feature-interview.jpg",
  alt: "Abdullah Jaman in conversation with an interviewer, the two seated in armchairs on a darkened studio set.",
  width: 1600,
  height: 730,
};

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
