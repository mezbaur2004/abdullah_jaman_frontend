/**
 * The framing around the bibliography.
 *
 * The titles themselves live in src/data/books.ts — real, published, and
 * supplied by the owner. What is here is the editorial matter the page is
 * built on: what the writing is for, and how it relates to the classroom work.
 *
 * Note what is gone. This file used to carry an empty `books` array and a
 * "nothing is listed until it is confirmed" note, which was the right thing to
 * publish while no title had been supplied and is now simply untrue. The
 * placeholder is not softened or kept for later — the content exists, so the
 * apology for its absence is deleted.
 */

export const booksIntro = {
  eyebrow: "Books",
  headline: "*Books* & educational publications.",
  /**
   * VERIFIED — the remit is described in the Daily Star interview, and the two
   * published volumes of Arabi Shikkha Obhijatra are an instance of it.
   */
  lede: "Abdullah Jaman's writing grows out of the same work as his teaching: building Islamic Studies and Arabic learning materials that are academically structured, authentic to the tradition, and pitched at the age of the child actually reading them.",
} as const;

/**
 * The author's-approach section. Drawn from the Daily Star interview and the
 * owner's brief, and deliberately about method rather than achievement.
 */
export const authorNote = {
  eyebrow: "The writing",
  headline: "Writing for the next *generation*.",
  body: [
    "Classroom materials are where an educational philosophy either holds or falls apart. A syllabus can state that a child should understand rather than memorise; only the book in front of them decides whether that happens.",
    "His work on Islamic Studies and Arabic materials is a continuation of the same responsibility he carries as a principal — that what a school teaches should be authentic to the tradition, structured well enough to be taught, and written for the age of the reader rather than the convenience of the adult.",
  ],
} as const;
