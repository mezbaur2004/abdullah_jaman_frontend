import type { GalleryItem } from "./types";

/**
 * VERIFIED — every photograph here was supplied by the owner.
 *
 * On alt text: each one describes what is visible in the frame and nothing
 * more. "Abdullah Jaman teaching a lesson-planning session" is readable from
 * the photograph; "Abdullah Jaman inspiring teachers" is not, and the site's
 * rule against unsupported claims applies to image descriptions exactly as it
 * applies to prose.
 *
 * The homepage grid alternates wide and tall tiles automatically from each
 * image's own dimensions, so the running order below is also the visual
 * rhythm — landscape, portrait, portrait, landscape.
 */
export const gallery: GalleryItem[] = [
  {
    caption:
      "Leading a teacher training session on lesson planning and Bloom's taxonomy.",
    image: {
      src: "/images/gallery-teaching.jpg",
      alt: "Abdullah Jaman writing on an interactive whiteboard during a teacher training session, beside a diagram of Bloom's taxonomy and the stages of a lesson plan.",
      width: 1600,
      height: 1066,
    },
  },
  {
    caption: "Addressing an audience.",
    image: {
      src: "/images/gallery-address.jpg",
      alt: "Abdullah Jaman speaking into a handheld microphone.",
      width: 865,
      height: 1320,
    },
  },
  {
    caption: "Speaking at a school event.",
    image: {
      src: "/images/gallery-podium.jpg",
      alt: "Abdullah Jaman speaking at a flower-decorated podium on a darkened stage.",
      width: 704,
      height: 714,
    },
  },
  {
    caption: "At the school office.",
    image: {
      // The supplied original is 412px wide — the smallest of the set by a
      // long way. Resampled to 824 here rather than left native: the browser
      // would otherwise stretch it to fill the tile with plain bilinear, and a
      // controlled lanczos upscale with a little sharpening is the better of
      // two imperfect options. A higher-resolution original would beat both.
      src: "/images/gallery-office.jpg",
      alt: "Abdullah Jaman seated at a desk in front of shelves of school books.",
      width: 824,
      height: 620,
    },
  },

  // ---------------------------------------------------------------------
  // RESERVED — three landscape media photographs, supplied separately.
  //
  // Drop the files in public/images/ as gallery-media-1.jpg through
  // gallery-media-3.jpg, then uncomment the three entries below and correct
  // each width, height, caption and alt to match the real file. Nothing else
  // needs changing: the grid, the reveals and the hover zoom all read from
  // this array.
  //
  // Landscape files (width greater than height) take the wide tile.
  // ---------------------------------------------------------------------
  // {
  //   caption: "",
  //   image: { src: "/images/gallery-media-1.jpg", alt: "", width: 1600, height: 1066 },
  // },
  // {
  //   caption: "",
  //   image: { src: "/images/gallery-media-2.jpg", alt: "", width: 1600, height: 1066 },
  // },
  // {
  //   caption: "",
  //   image: { src: "/images/gallery-media-3.jpg", alt: "", width: 1600, height: 1066 },
  // },
];
