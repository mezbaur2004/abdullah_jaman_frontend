import mediaData from "@/lib/data/media.json";
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
 * The alt text names him and describes the setting, and stops there. No one in
 * the audience is identified because no names were supplied, and the event is
 * not named because none is readable from the frame. An unsourced caption on a
 * media page is exactly the kind of claim this site does not make.
 */
export const mediaFeature: ImageAsset = {
  src: "/images/landscape.webp",
  alt: "Abdullah Jaman seated at the front of an audience at an indoor event.",
  width: 1600,
  height: 1066,
};

/**
 * VERIFIED — supplied by the owner. A second frame for the media page, used
 * lower down so the page does not open and close on the same picture.
 */
export const mediaSecondary: ImageAsset = {
  src: "/images/gallery-podium.webp",
  alt: "Abdullah Jaman speaking at a flower-decorated podium on a darkened stage.",
  width: 704,
  height: 714,
};

export const mediaIntro = {
  eyebrow: "Media",
  headline: "Media & *thought* leadership.",
  lede: "Interviews, features and talks — where his thinking on education, assessment and Islamic learning materials has been set out in public rather than in a prospectus.",
} as const;

export const mediaItems: MediaItem[] = mediaData.press as MediaItem[];

/**
 * VERIFIED — the videos linked from his founder page. The first is the
 * featured personal message; the page lists it twice, so it appears once here.
 */
export const videos: VideoItem[] = mediaData.videos;

/** Articles, research, reports and other published writing. Renders only when it has entries. */
export const publications: MediaItem[] = mediaData.publications as MediaItem[];
