import type { MediaItem } from "./types";

/**
 * PLACEHOLDER CONTENT — see CONTENT.md.
 * Outlet names are deliberately generic descriptors rather than real
 * publications, and no `href` is set, so nothing links anywhere misleading.
 * Add the real title, outlet, date and live URL for each item before launch.
 */

export const mediaIntro = {
  eyebrow: "Media & Publications",
  headline: "Writing, interviews and talks.",
  lede: "Conversations and published pieces on school leadership, curriculum design and what it actually takes to run an academic institution.",
} as const;

export const mediaItems: MediaItem[] = [
  {
    title: "Why most school improvement plans never reach the classroom",
    outlet: "Education Review",
    type: "Opinion",
    date: "2025",
    summary:
      "On the gap between institutional strategy documents and the daily decisions teachers actually make — and how to close it.",
  },
  {
    title: "Building a school that does not depend on its founder",
    outlet: "Leadership Quarterly",
    type: "Feature",
    date: "2024",
    summary:
      "A long-form look at the governance structures and succession planning behind Wheaton International School.",
  },
  {
    title: "On teacher development, coaching and honest feedback",
    outlet: "National Daily",
    type: "Interview",
    date: "2024",
    summary:
      "A conversation about why one-off training workshops rarely change practice, and what replaces them.",
  },
  {
    title: "Curriculum sequencing in practice",
    outlet: "Schools Leadership Summit",
    type: "Talk",
    date: "2023",
    summary:
      "A session on making the route from learning objective to assessment explicit for both teachers and students.",
  },
  {
    title: "Assessment students can actually use",
    outlet: "Academic Practice Journal",
    type: "Publication",
    date: "2023",
    summary:
      "On writing assessment criteria in language students can apply to their own work before it is marked.",
  },
  {
    title: "What parents deserve to know about their child's learning",
    outlet: "Education Weekly",
    type: "Opinion",
    date: "2022",
    summary:
      "Making the case for narrative reporting alongside grades, and for conferences with a prepared agenda.",
  },
];
