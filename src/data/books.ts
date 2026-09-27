/**
 * The bibliography, loaded from src/lib/data/books.json.
 *
 * Every field here was supplied by the owner from the published editions and
 * the retailer's listing. Nothing is derived, rounded or inferred — if a field
 * is not below, it is not known, and the UI is built to render a book without
 * it rather than to fill the gap.
 *
 * ON PRICE. `listPrice` is the printed list price and the only price this site
 * will ever show. The retailer discounts, and a discounted figure or a
 * percentage off is a number that is wrong within the month and visibly dates
 * the page. Show the list price, or show no price.
 *
 * ON COVERS. `coverImage` points at a file under /public/images/books/ — the
 * retailer's CDN is never hotlinked. The files currently expected there are
 * low-resolution and stand in for print-quality scans, so every component that
 * renders one fixes its own box and lets the picture sit inside it. A sharper
 * file dropped in at the same path changes nothing about the layout.
 */

import data from "@/lib/data/books.json";

/**
 * The raw shape in src/lib/data/books.json. Add a title by appending an object
 * to `books`. Everything on the site — the books page, the homepage section,
 * the detail pages, the sitemap — iterates over this list, so a new entry
 * appears everywhere with no code change.
 *
 * Every title, a boxed set included, is one flat record with the same fields.
 * `retailer` and `purchaseUrl` are optional: a title without them shows no
 * "Available at" button. Leave a field out rather than guess it.
 */
export type Book = {
  slug: string;
  titleBn: string;
  titleEn: string;
  publisherBn: string;
  publisherEn: string;
  subjectBn: string;
  subjectEn: string;
  pages: number;
  format: string;
  edition: string;
  year: number;
  listPrice: number;
  currency: string;
  /** Path under /public. Never a remote URL. */
  coverImage: string;
  retailer?: string;
  purchaseUrl?: string;
  description: string;
};

export const books: Book[] = data.books as Book[];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

/**
 * The titles to suggest at the foot of a detail page, in list order. Capped so
 * a long bibliography does not turn the foot of every page into a second index.
 */
export function relatedBooks(slug: string, limit = 3) {
  return books.filter((entry) => entry.slug !== slug).slice(0, limit);
}

/**
 * Prices are printed as "৳1,200" — the currency is BDT throughout and the
 * symbol is the one a Bangladeshi reader expects. The grouping is explicit
 * rather than locale-derived so a build machine's locale cannot change it.
 *
 * Split into symbol and amount, and that is not fussiness. U+09F3 TAKA SIGN
 * lives in the Bengali block, and neither Inter nor Fraunces carries it: set
 * in either, the browser quietly substitutes some system face for that one
 * character, which is a different font from its own digits on the same line
 * and is missing outright on machines with no Bengali coverage. The symbol is
 * therefore rendered in the Bangla face and the digits in the surrounding one
 * — see the Price component.
 */
export function priceParts(amount: number, currency: string) {
  const value = new Intl.NumberFormat("en-US").format(amount);
  return currency === "BDT"
    ? { symbol: "৳", value, spaced: false }
    : { symbol: currency, value, spaced: true };
}

/** The same figure as a plain string, for `alt`, metadata and structured data. */
export function formatPrice(amount: number, currency: string) {
  const { symbol, value, spaced } = priceParts(amount, currency);
  return `${symbol}${spaced ? " " : ""}${value}`;
}
