import Image from "next/image";

import { coverExists } from "@/lib/book-cover";
import { cn } from "@/lib/cn";
import type { Book } from "@/data/books";

type BookCoverProps = {
  book: Book;
  /** Required, like every other image on the site — see Figure. */
  sizes: string;
  priority?: boolean;
  /**
   * How big the box will be drawn. It only affects the stand-in plate, whose
   * type has to scale with the frame — a title set at 18px inside a 460px-tall
   * plate reads as a blank cover with a caption on it. The photograph is
   * contained and needs no equivalent, which is the point of containing it.
   */
  size?: "sm" | "lg";
  className?: string;
};

/**
 * One front cover, in its own box.
 *
 * The box is fixed at the trade ratio and the picture is contained rather than
 * cropped. That is the deliberate choice for a cover: cropping a photograph to
 * fit a frame is editing, cropping a cover is cutting the title off. Contain
 * also means a replacement scan of any proportion drops in without the card
 * around it changing height, which is exactly what the low-resolution
 * stand-ins need.
 */
export function BookCover({
  book,
  sizes,
  priority = false,
  size = "sm",
  className,
}: BookCoverProps) {
  const large = size === "lg";
  const exists = coverExists(book.coverImage);

  return (
    <div
      className={cn(
        // The gold edge and the drop shadow are the whole treatment: a cover is
        // already a designed object and does not want a second frame around it.
        "relative aspect-[2/3] overflow-hidden rounded-figure border border-line-accent bg-surface-raised shadow-panel",
        className,
      )}
    >
      {exists ? (
        <Image
          src={book.coverImage}
          alt={`Front cover of ${book.titleEn}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain transition-transform duration-500 ease-hover group-hover/card:scale-[var(--hover-zoom)]"
        />
      ) : (
        /* The plate. Decorative to assistive technology: every caller sets the
           title in real text beside or beneath it, so announcing it here would
           read the same words twice. */
        <div
          aria-hidden="true"
          className={cn(
            "flex size-full flex-col bg-surface-ivory",
            large ? "p-7 sm:p-9" : "p-5 sm:p-6",
          )}
        >
          <p className="text-eyebrow font-semibold uppercase text-accent">
            {book.seriesEn}
          </p>
          {/* Centred in what is left rather than pinned between the two other
              lines: on a tall plate `justify-between` parked the title in the
              middle of a void and made the whole thing look unfinished. */}
          <p
            className={cn(
              "flex flex-1 items-center font-bangla leading-snug text-content",
              large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
            )}
          >
            {book.titleBn}
          </p>
          <p
            className={cn(
              "font-display text-content-subtle",
              large ? "text-base" : "text-sm",
            )}
          >
            Volume {book.volume} · {book.year}
          </p>
        </div>
      )}
    </div>
  );
}
