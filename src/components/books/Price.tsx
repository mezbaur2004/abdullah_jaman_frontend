import { priceParts } from "@/data/books";

/**
 * A price, with its currency mark set in a face that actually has the glyph.
 *
 * U+09F3 TAKA SIGN is a Bengali-block character. Inter does not carry it and
 * neither does Fraunces, so "৳1,200" set in either renders as one substituted
 * character followed by two correct ones — a different font for the symbol
 * than for the digits beside it, and on a machine with no Bengali coverage at
 * all, a missing-glyph box. Naming the Bangla face for that one character
 * fixes both, and leaves the digits in whatever the line around them is set
 * in.
 */
export function Price({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) {
  const { symbol, value, spaced } = priceParts(amount, currency);

  return (
    <>
      <span className="font-bangla">{symbol}</span>
      {spaced ? " " : null}
      {value}
    </>
  );
}
