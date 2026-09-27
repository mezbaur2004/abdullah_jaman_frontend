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
 * The raw shapes in src/lib/data/books.json. Add a title by appending an
 * object to `books`; add a series by appending to `series` and pointing the
 * titles at its `id`. Everything on the site — the books page, the homepage
 * section, the detail pages, the sitemap — iterates over these lists, so a new
 * entry appears everywhere with no code change.
 *
 * Optional fields are optional in the UI too: a standalone title needs no
 * `series` or `volume`, and a title without its own `description` uses its
 * series' description. Publisher, subject, format, edition, price and retailer
 * are shown only when supplied; leave them out rather than guess.
 */
type SeriesRecord = {
  id: string;
  titleBn: string;
  titleEn: string;
  description?: string;
  /** The volumes sold together. Omit when there is no set. */
  set?: {
    listPrice: number;
    currency: string;
    coverImage?: string;
    retailer: string;
    purchaseUrl: string;
  };
};

type BookRecord = {
  slug: string;
  titleBn: string;
  titleEn: string;
  series?: string;
  volume?: number;
  publisherBn?: string;
  publisherEn?: string;
  subjectBn?: string;
  subjectEn?: string;
  pages: number;
  format?: string;
  edition?: string;
  year: number;
  /** As printed, e.g. "December 2025". Falls back to `year`. */
  published?: string;
  listPrice?: number;
  currency?: string;
  /** Path under /public. Never a remote URL. */
  coverImage: string;
  retailer?: string;
  purchaseUrl?: string;
  description?: string;
};

export type BookSeries = SeriesRecord;

/** A title with its series resolved, which is the shape every component reads. */
export type Book = Omit<BookRecord, "series"> & {
  seriesId?: string;
  seriesBn?: string;
  seriesEn?: string;
  description: string;
};

export const bookSeries: BookSeries[] = data.series as SeriesRecord[];

export const books: Book[] = (data.books as BookRecord[]).map(({ series: seriesId, ...book }) => {
  const series = bookSeries.find((entry) => entry.id === seriesId);
  return {
    ...book,
    seriesId: series?.id,
    seriesBn: series?.titleBn,
    seriesEn: series?.titleEn,
    description: book.description ?? series?.description ?? "",
  };
});

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

/** The series a title belongs to, if any. */
export function getSeries(id: string | undefined) {
  return id ? bookSeries.find((series) => series.id === id) : undefined;
}

/** Every title in a series, in volume order. */
export function booksInSeries(id: string) {
  return books
    .filter((book) => book.seriesId === id)
    .sort((a, b) => (a.volume ?? 0) - (b.volume ?? 0));
}

/**
 * The titles to suggest at the foot of a detail page: the rest of the same
 * series first, in volume order, then the other titles. Capped so a long
 * bibliography does not turn the foot of every page into a second index.
 */
export function relatedBooks(slug: string, limit = 3) {
  const book = getBook(slug);
  const sameSeries = book?.seriesId
    ? booksInSeries(book.seriesId).filter((entry) => entry.slug !== slug)
    : [];
  const others = books.filter(
    (entry) => entry.slug !== slug && !sameSeries.includes(entry),
  );
  return { sameSeries: sameSeries.slice(0, limit), others: others.slice(0, limit) };
}

/** Series that are sold as a set — each gets one line of prose, never a card. */
export const seriesWithSets = bookSeries.filter((series) => series.set);

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
