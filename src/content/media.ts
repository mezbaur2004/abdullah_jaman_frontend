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

/**
 * VERIFIED — supplied by the owner. A second frame for the media page, used
 * lower down so the page does not open and close on the same picture.
 */
export const mediaSecondary: ImageAsset = {
  src: "/images/gallery-podium.jpg",
  alt: "Abdullah Jaman speaking at a flower-decorated podium on a darkened stage.",
  width: 704,
  height: 714,
};

export const mediaIntro = {
  eyebrow: "Media",
  headline: "Media & *thought* leadership.",
  lede: "Interviews, features and talks — where his thinking on education, assessment and Islamic learning materials has been set out in public rather than in a prospectus.",
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
