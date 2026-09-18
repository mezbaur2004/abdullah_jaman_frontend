import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BookCover } from "./BookCover";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { Book } from "@/data/books";

type BookTitleCardProps = {
  book: Book;
  /** The two-up grid on /books. `compact` is the homepage pair. */
  size?: "default" | "compact";
  className?: string;
};

/**
 * One title in the grid, and the whole card is the door.
 *
 * It borrows the institution cards' hover wholesale — the gold rule along the
 * bottom edge extending, the heading taking the accent, the arrow travelling —
 * because those two cards and these two are the same gesture on the site and
 * inventing a second vocabulary for it would be variation for its own sake.
 *
 * The Bengali title is the heading. It is what is printed on the book, and
 * putting the transliteration above it would be arranging the page for someone
 * who is not the reader of these volumes.
 */
export function BookTitleCard({ book, size = "default", className }: BookTitleCardProps) {
  const compact = size === "compact";

  const meta = [
    `Volume ${book.volume}`,
    String(book.year),
    book.format,
    `${book.pages} pages`,
  ].join(" · ");

  return (
    <Card
      as="article"
      tone="inverse"
      hover="lift"
      accent="gold"
      accentEdge="bottom"
      padding={compact ? "md" : "lg"}
      className={cn("flex h-full flex-col", className)}
    >
      <BookCover
        book={book}
        className={cn("mx-auto w-full", compact ? "max-w-[12rem]" : "max-w-[15rem]")}
        sizes={
          compact
            ? "(min-width: 1024px) 14vw, (min-width: 640px) 12rem, 40vw"
            : "(min-width: 1024px) 15rem, (min-width: 640px) 22vw, 60vw"
        }
      />

      <div className={compact ? "mt-6" : "mt-8"}>
        <h3
          className={cn(
            "font-bangla leading-snug text-on-inverse",
            compact ? "text-xl" : "text-display-md",
          )}
        >
          <Link
            href={`/books/${book.slug}`}
            // Stretched across the card: the lift has been promising the whole
            // surface is clickable, so the whole surface is.
            className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent-on-inverse"
          >
            {book.titleBn}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-3 text-on-inverse-muted",
            compact ? "text-sm" : "text-lede",
          )}
        >
          {book.titleEn}
        </p>

        <div className="mt-6 flex items-end justify-between gap-5">
          <p className="text-eyebrow font-semibold uppercase text-accent-on-inverse">
            {meta}
          </p>
          <ArrowRight
            aria-hidden="true"
            strokeWidth={1.75}
            className="size-5 shrink-0 text-accent-on-inverse transition-transform group-hover/card:translate-x-1"
          />
        </div>
      </div>
    </Card>
  );
}
