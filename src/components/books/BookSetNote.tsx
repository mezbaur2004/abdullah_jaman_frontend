import Image from "next/image";

import { Price } from "./Price";
import { InlineLink } from "@/components/ui/InlineLink";
import { seriesWithSets, type BookSeries } from "@/data/books";
import { coverExists } from "@/lib/book-cover";
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
 * as volumes are added. With `image`, the set's photograph sits beside the line
 * once its file exists: a picture of the volumes together, not a new cover.
 */
export function BookSetNote({
  series,
  tone = "base",
  image = false,
  className,
}: {
  series: BookSeries;
  tone?: "base" | "inverse";
  image?: boolean;
  className?: string;
}) {
  const set = series.set;
  if (!set) return null;

  const inverse = tone === "inverse";
  const withImage = image && !!set.coverImage && coverExists(set.coverImage);
  const note = (
    <p
      className={cn(
        "text-ui leading-relaxed",
        inverse ? "text-on-inverse-muted" : "text-content-muted",
        !withImage && className,
      )}
    >
      {series.titleEn} is also sold as a complete set, at{" "}
      <Price amount={set.listPrice} currency={set.currency} />.{" "}
      <InlineLink href={set.purchaseUrl} tone={tone}>
        View the set at {set.retailer}
      </InlineLink>
    </p>
  );

  if (!withImage) return note;

  return (
    <div className={cn("flex items-center gap-6 sm:gap-8", className)}>
      <div className="relative aspect-[870/1250] w-28 shrink-0 overflow-hidden rounded-figure sm:w-36">
        <Image
          src={set.coverImage!}
          alt={`The ${series.titleEn} volumes together`}
          fill
          sizes="(min-width: 640px) 9rem, 7rem"
          className="object-cover"
        />
      </div>
      {note}
    </div>
  );
}

/** One set note per series that has a set, for pages listing every title. */
export function BookSetNotes({
  tone = "base",
  image = false,
  className,
}: {
  tone?: "base" | "inverse";
  image?: boolean;
  className?: string;
}) {
  if (seriesWithSets.length === 0) return null;
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {seriesWithSets.map((series) => (
        <BookSetNote key={series.id} series={series} tone={tone} image={image} />
      ))}
    </div>
  );
}
