import { ArrowUpRight, BookOpen } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Figure } from "@/components/ui/Figure";
import { IconChip } from "@/components/ui/IconChip";
import { cn } from "@/lib/cn";
import type { Accent } from "@/lib/accent";
import type { Book } from "@/content/types";

type BookCardProps = {
  book: Book;
  accent?: Accent;
  /** The featured treatment: cover beside the text rather than above it. */
  feature?: boolean;
};

/**
 * One title.
 *
 * Every field except the title is optional and the card renders only what an
 * entry actually carries — no "Publisher: unknown" rows, no placeholder dates.
 * A book with nothing but a name is a complete card here, which is what makes
 * it safe to publish a partial bibliography rather than waiting to invent the
 * missing half.
 *
 * Without a cover it falls back to a typographic plate rather than a grey box:
 * a missing image should still look like a book.
 */
export function BookCard({ book, accent = "yellow", feature = false }: BookCardProps) {
  const linked = Boolean(book.href);

  const cover = book.cover ? (
    <Figure
      image={book.cover}
      ratio="2 / 3"
      zoom
      rounded
      sizes={feature ? "(min-width: 1024px) 26vw, 60vw" : "(min-width: 640px) 22vw, 45vw"}
    />
  ) : (
    <div
      aria-hidden="true"
      className="flex aspect-[2/3] flex-col justify-between rounded-figure border border-line-accent bg-surface-accent p-5"
    >
      <IconChip icon={BookOpen} size="sm" />
      <p className="font-display text-lg leading-snug text-content">
        {book.title}
      </p>
    </div>
  );

  return (
    <Card
      as="article"
      tone="raised"
      hover={linked ? "lift" : "quiet"}
      accent={accent}
      padding={feature ? "lg" : "md"}
      className={cn("h-full", feature && "sm:flex sm:items-start sm:gap-10")}
    >
      <div className={cn(feature ? "sm:w-56 sm:shrink-0" : "")}>{cover}</div>

      <div className={cn(feature ? "mt-7 sm:mt-0" : "mt-6")}>
        {book.category || book.series ? (
          <p className="text-eyebrow font-semibold uppercase text-content-subtle">
            {[book.series, book.category].filter(Boolean).join(" · ")}
          </p>
        ) : null}

        <h3
          className={cn(
            "mt-3 font-display leading-snug text-content",
            feature ? "text-display-md" : "text-xl",
          )}
        >
          {book.href ? (
            <a
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
            >
              {book.title}
              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="mt-1.5 size-4 shrink-0 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            book.title
          )}
        </h3>

        {book.role ? (
          <p className="mt-3 text-sm font-medium text-accent">{book.role}</p>
        ) : null}

        {book.description ? (
          <p
            className={cn(
              "mt-4 max-w-prose leading-relaxed text-content-muted",
              feature ? "text-lede" : "text-sm",
            )}
          >
            {book.description}
          </p>
        ) : null}

        {book.publisher || book.year || book.language ? (
          <p className="mt-5 text-sm text-content-subtle">
            {[book.publisher, book.year, book.language]
              .filter(Boolean)
              .join(" · ")}
          </p>
        ) : null}
      </div>
    </Card>
  );
}
