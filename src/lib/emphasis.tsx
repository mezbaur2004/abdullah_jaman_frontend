import { Fragment, type ReactNode } from "react";

/** `*word*` marks the one word in a heading that takes the accent. */
const MARKED = /\*([^*]+)\*/g;

/**
 * Renders a heading string, setting anything between asterisks in italic
 * brass.
 *
 * The marker lives in the content layer next to the words it applies to, which
 * is the only place the decision can sensibly be made: which word carries a
 * heading is a question about the sentence, not about the component rendering
 * it. Nothing is added or taken away — `"Where he *leads*."` and
 * `"Where he leads."` are the same sentence, and a heading with no marker
 * renders exactly as written.
 *
 * The emphasis is an `<em>`, not a span, because that is what it is: stress on
 * one word. Assistive technology conveys it, and the styling hangs off
 * `h1 em`, `h2 em` and `h3 em` in the base layer, so no caller has to remember
 * a class.
 */
export function emphasise(text: string): ReactNode {
  if (!text.includes("*")) return text;

  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(MARKED)) {
    const at = match.index ?? 0;
    if (at > cursor) parts.push(text.slice(cursor, at));
    parts.push(<em>{match[1]}</em>);
    cursor = at + match[0].length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));

  return parts.map((part, i) => <Fragment key={i}>{part}</Fragment>);
}

/**
 * The same string with its markers stripped.
 *
 * Anywhere a marked heading becomes a plain string rather than rendered markup
 * — a `<title>`, an `alt`, an Open Graph description — has to go through this,
 * or the asterisks ship to the reader. Nothing needs it today; every marked
 * string on the site is rendered through `emphasise`. It is here because the
 * failure mode is silent, and the build that added the markers did leak two of
 * them onto the homepage before a grep for a literal asterisk in the served
 * HTML caught it.
 */
export function plain(text: string) {
  return text.replace(MARKED, "$1");
}
