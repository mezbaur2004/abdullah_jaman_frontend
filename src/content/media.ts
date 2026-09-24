import type { ImageAsset, MediaItem, VideoItem } from "./types";

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
  /* VERIFIED — the four national features listed on his founder page, with
     the labels it gives them. */
  {
    title: "Education Feature",
    outlet: "Daily Amar Desh",
    type: "Feature",
    href: "https://www.dailyamardesh.com/education/amdaoo5mt9ms",
  },
  {
    title: "Education Insight",
    outlet: "Prothom Alo",
    type: "Feature",
    href: "https://www.prothomalo.com/education/i28zqo6rub",
  },
  {
    title: "Campus Education Feature",
    outlet: "Prothom Alo — Campus",
    type: "Feature",
    href: "https://www.prothomalo.com/education/campus/lrl6dob7ha",
  },
  {
    title: "Higher Education Commentary",
    outlet: "Prothom Alo — Higher Ed",
    type: "Opinion",
    href: "https://www.prothomalo.com/education/higher-education/4xcuxq4jt3",
  },
];

/**
 * VERIFIED — the videos linked from his founder page. The first is the
 * featured personal message; the page lists it twice, so it appears once here.
 */
export const videos: VideoItem[] = [
  {
    title: "A personal message from Abdullah Jaman",
    kind: "Video message",
    href: "https://youtu.be/blaOWF3bmNo",
  },
  {
    title: "Education & Islamic Values",
    kind: "Media appearance",
    href: "https://youtu.be/lvYgrihZ4CM",
  },
  {
    title: "Curriculum & Learning Design",
    kind: "Interview",
    href: "https://youtu.be/4Piv1ux8yNc",
  },
  {
    title: "Values-Based School Talk",
    kind: "Panel discussion",
    href: "https://youtu.be/TUvtAHvva7c",
  },
];

/** TO COLLECT — articles, books, research, reports and other published work. */
export const publications: MediaItem[] = [];
