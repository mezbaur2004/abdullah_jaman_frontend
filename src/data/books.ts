/**
 * The bibliography. Two real, published titles.
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

/** A retailer or publisher page. Currently one seller, so no `vendor` field. */
export type PurchaseOption = {
  listPrice: number;
  currency: string;
  purchaseUrl: string;
};

export type Book = {
  /** Route segment under /books. */
  slug: string;
  /** The title as printed. Bengali is the original; the Latin line is a
   *  transliteration, not a translation, and is labelled as such nowhere
   *  because it never appears without the Bengali above it. */
  titleBn: string;
  titleEn: string;
  seriesBn: string;
  seriesEn: string;
  volume: number;
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
  description: string;
  purchaseUrl: string;
};

/**
 * The shared series note, in the site's voice rather than the retailer's.
 * It describes what the two volumes are and what they are for, and claims
 * nothing beyond that.
 */
const seriesDescription =
  "A two-volume Arabic course written for Bengali-speaking readers, and written plainly enough to be worked through alone. Across both volumes the aim is a reader who can hold the language in speech and come to the Qur'an and the hadith reading them with understanding, rather than only recognising the shapes.";

export const books: Book[] = [
  {
    slug: "arabi-shikkha-obhijatra-1",
    titleBn: "আরবি শিক্ষা অভিযাত্রা (১ম খণ্ড)",
    titleEn: "Arabi Shikkha Obhijatra (Volume 1)",
    seriesBn: "আরবি শিক্ষা অভিযাত্রা",
    seriesEn: "Arabi Shikkha Obhijatra",
    volume: 1,
    publisherBn: "ম্যানুভার",
    publisherEn: "Manuver",
    subjectBn: "আরবী ভাষা শিক্ষা",
    subjectEn: "Arabic language learning",
    pages: 275,
    format: "Hardcover",
    edition: "1st Published",
    year: 2024,
    listPrice: 1200,
    currency: "BDT",
    coverImage: "/images/books/arabi-shikkha-obhijatra-1.webp",
    description: seriesDescription,
    purchaseUrl:
      "https://www.nafaah.com/product/%e0%a6%86%e0%a6%b0%e0%a6%ac%e0%a6%bf-%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be-%e0%a6%85%e0%a6%ad%e0%a6%bf%e0%a6%af%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%be-%e0%a7%a7%e0%a6%ae/",
  },
  {
    slug: "arabi-shikkha-obhijatra-2",
    titleBn: "আরবি শিক্ষা অভিযাত্রা (২য় খণ্ড)",
    titleEn: "Arabi Shikkha Obhijatra (Volume 2)",
    seriesBn: "আরবি শিক্ষা অভিযাত্রা",
    seriesEn: "Arabi Shikkha Obhijatra",
    volume: 2,
    publisherBn: "ম্যানুভার",
    publisherEn: "Manuver",
    subjectBn: "আরবী ভাষা শিক্ষা",
    subjectEn: "Arabic language learning",
    pages: 189,
    format: "Hardcover",
    edition: "1st Published",
    year: 2024,
    listPrice: 1000,
    currency: "BDT",
    coverImage: "/images/books/arabi-shikkha-obhijatra-2.webp",
    description: seriesDescription,
    purchaseUrl:
      "https://www.nafaah.com/product/%e0%a6%86%e0%a6%b0%e0%a6%ac%e0%a6%bf-%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be-%e0%a6%85%e0%a6%ad%e0%a6%bf%e0%a6%af%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%be-%e0%a7%a8%e0%a6%af/",
  },
];

/**
 * The two volumes sold together.
 *
 * NOT A THIRD BOOK, and it must never be rendered as one. It is a way of
 * buying the same two titles, so it appears as a line of prose under the grid
 * and under each detail page's purchase button — never as a card in the grid,
 * never in `books`, never in the sitemap, never with a detail page of its own.
 */
export const bookSet = {
  listPrice: 2200,
  currency: "BDT",
  coverImage: "/images/books/arabi-shikkha-obhijatra-set.webp",
  purchaseUrl:
    "https://www.nafaah.com/product/%e0%a6%86%e0%a6%b0%e0%a6%ac%e0%a6%bf-%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be-%e0%a6%85%e0%a6%ad%e0%a6%bf%e0%a6%af%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%be-%e0%a6%a6%e0%a7%81/",
} as const;

/** The seller both links point at. Named once so the button label cannot drift. */
export const bookRetailer = "Nafaah";

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

/** The other volume in the series — the sibling card at the foot of a page. */
export function siblingBook(slug: string) {
  return books.find((book) => book.slug !== slug);
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
