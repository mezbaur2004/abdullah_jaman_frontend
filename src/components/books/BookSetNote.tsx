import { Price } from "./Price";
import { InlineLink } from "@/components/ui/InlineLink";
import { seriesWithSets, type BookSeries } from "@/data/books";
import { cn } from "@/lib/cn";

/**
 * A set, said quietly and said once per page.
 *
 * It is a way of buying volumes already listed, not another title, so it gets
 * a line of prose and never a card. Anything more — a cover, a heading, a
 * place in the grid — and a reader counts one more book than there is.
 *
 * The figure is the printed list price for the set, like every other price on
 * the site. The retailer's discount is not shown here and should not be.
 *
 * The wording names the series and never counts its volumes, so it stays true
 * as volumes are added.
 */
export function BookSetNote({
  series,
  tone = "base",
  className,
}: {
  series: BookSeries;
  tone?: "base" | "inverse";
  className?: string;
}) {
  const set = series.set;
  if (!set) return null;

  const inverse = tone === "inverse";

  return (
    <p
      className={cn(
        "text-ui leading-relaxed",
        inverse ? "text-on-inverse-muted" : "text-content-muted",
        className,
      )}
    >
      {series.titleEn} is also sold as a complete set, at{" "}
      <Price amount={set.listPrice} currency={set.currency} />.{" "}
      <InlineLink href={set.purchaseUrl} tone={tone}>
        View the set at {set.retailer}
      </InlineLink>
    </p>
  );
}

/** One set note per series that has a set, for pages listing every title. */
export function BookSetNotes({
  tone = "base",
  className,
}: {
  tone?: "base" | "inverse";
  className?: string;
}) {
  if (seriesWithSets.length === 0) return null;
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {seriesWithSets.map((series) => (
        <BookSetNote key={series.id} series={series} tone={tone} />
      ))}
    </div>
  );
}
