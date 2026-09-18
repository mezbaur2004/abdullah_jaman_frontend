import { Price } from "./Price";
import { InlineLink } from "@/components/ui/InlineLink";
import { bookRetailer, bookSet } from "@/data/books";
import { cn } from "@/lib/cn";

/**
 * The set, said quietly and said once per page.
 *
 * It is a way of buying the same two volumes, not a third title, so it gets a
 * line of prose and never a card. Anything more — a cover, a heading, a place
 * in the grid — and a reader counts three books on a shelf that holds two.
 *
 * The figure is the printed list price for the pair, like every other price
 * on the site. The retailer's discount is not shown here and should not be:
 * it moves, and a stale percentage tells a visitor the page was last touched
 * a year ago.
 */
export function BookSetNote({
  tone = "base",
  className,
}: {
  tone?: "base" | "inverse";
  className?: string;
}) {
  const inverse = tone === "inverse";

  return (
    <p
      className={cn(
        "text-ui leading-relaxed",
        inverse ? "text-on-inverse-muted" : "text-content-muted",
        className,
      )}
    >
      Both volumes are also sold together as a set, at{" "}
      <Price amount={bookSet.listPrice} currency={bookSet.currency} />.{" "}
      <InlineLink href={bookSet.purchaseUrl} tone={tone}>
        View the set at {bookRetailer}
      </InlineLink>
    </p>
  );
}
