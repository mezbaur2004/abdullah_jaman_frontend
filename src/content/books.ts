import type { Book, BookCategory } from "./types";

/**
 * The bibliography.
 *
 * EMPTY, AND THAT IS THE CORRECT STATE TODAY. Authorship is confirmed — the
 * Daily Star interview describes his development and supervision of Islamic
 * Studies and Arabic learning materials, and the owner has confirmed multiple
 * authored titles. What has not been supplied is a single title, cover,
 * publisher or date.
 *
 * So the page ships built and waiting rather than filled with plausible
 * inventions. A bibliography is the easiest thing on a personal site to check
 * and the worst thing to get wrong: an invented title is not a rounding error,
 * it is a fabricated work attributed to a real author.
 *
 * TO ADD A BOOK: append an object below. `title` is the only required field —
 * an entry with nothing else still renders, as a typographic plate rather than
 * a cover. Drop cover images in public/images/books/. Nothing in the UI needs
 * touching: the page, the homepage section, the category grouping and the
 * featured slot all read from this array.
 *
 *   {
 *     title: "…",
 *     category: "Islamic Studies",
 *     cover: { src: "/images/books/…​.jpg", alt: "…", width: 0, height: 0 },
 *     description: "…",   // from the book or publisher, never written here
 *     publisher: "…",
 *     year: "…",
 *     href: "…",
 *     featured: true,
 *   }
 */
export const books: Book[] = [];

/**
 * Display order for the categories. A category appears on the page only when
 * `books` actually contains one, so this list can name all four without any of
 * them showing up prematurely.
 */
export const bookCategoryOrder: BookCategory[] = [
  "Islamic Studies",
  "Arabic Language",
  "Aqidah",
  "Educational Materials",
];

/** Groups the books by category, preserving the order above and skipping empties. */
export function booksByCategory() {
  return bookCategoryOrder
    .map((category) => ({
      category,
      items: books.filter((book) => book.category === category),
    }))
    .filter((group) => group.items.length > 0);
}

/** Books with no category yet — rendered after the grouped ones. */
export function uncategorisedBooks() {
  return books.filter((book) => !book.category);
}

export const featuredBook = books.find((book) => book.featured) ?? books[0];

export const booksIntro = {
  eyebrow: "Books",
  headline: "*Books* & educational publications.",
  /**
   * VERIFIED — the remit is described in the Daily Star interview. It says
   * what the writing is *for* without claiming a single title, which is the
   * only honest thing to say while the bibliography is outstanding.
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

/**
 * Shown while `books` is empty. Delete it once titles are published — the
 * section removes itself when there is nothing pending to say.
 */
export const booksPending =
  "The full list of titles, with covers and publication details, is being compiled and will be published here once confirmed. Nothing is listed until it is.";
