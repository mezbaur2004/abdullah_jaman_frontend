import fs from "node:fs";
import path from "node:path";

/**
 * Whether a cover file has actually been placed under /public yet.
 *
 * The scans supplied so far are low-resolution stand-ins and the print-quality
 * files are still to come, so a cover path in the data is a statement about
 * where a file will live rather than a guarantee that it is there today. A
 * `next/image` pointed at a missing file is not a soft failure — the optimiser
 * answers 400 and the reader gets a broken picture where a book should be, and
 * `generateMetadata` would hand the same dead path to every social card.
 *
 * So presence is checked once, at build time. A missing cover falls back to a
 * typographic plate in exactly the same box, and the page's card falls back to
 * the site's own. Dropping the real file in at the same path is the whole of
 * the change: no component, no data and no layout moves.
 *
 * Server-only, and deliberately not marked as such with a package — every
 * caller is a server component and `node:fs` in a client bundle fails loudly
 * at build time rather than quietly at runtime.
 *
 * Memoised because a static build asks the same question about the same
 * handful of paths on every page that renders a card.
 */
const present = new Map<string, boolean>();

export function coverExists(src: string) {
  const cached = present.get(src);
  if (cached !== undefined) return cached;

  let exists = false;
  try {
    exists = fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    exists = false;
  }
  present.set(src, exists);
  return exists;
}
