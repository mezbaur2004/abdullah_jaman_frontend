import { Fragment, type ReactNode } from "react";

/**
 * Sets the ﷻ ligature in the Arabic face.
 *
 * The Latin serif has no glyph for it, and the browser's fallback for a
 * single presentation-form character is usually a broken-looking box of
 * strokes. Everything else in the string is left exactly as written.
 */
export function withHonorifics(text: string): ReactNode {
  if (!text.includes("ﷻ")) return text;
  return text.split("ﷻ").map((part, i) => (
    <Fragment key={i}>
      {i > 0 ? (
        <span lang="ar" className="font-arabic not-italic">
          ﷻ
        </span>
      ) : null}
      {part}
    </Fragment>
  ));
}
