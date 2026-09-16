import { ArrowUpRight, Newspaper } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { cn } from "@/lib/cn";
import type { MediaItem } from "@/content/types";

type MediaEntryProps = {
  item: MediaItem;
  /**
   * The lead treatment: metadata in its own column and the headline at
   * display size.
   *
   * It exists because of what one entry looked like without it. A single
   * interview rendered as an ordinary entry was one line of type stretched
   * across the full container with a third of the row empty after it — a list
   * of one, formatted as though more were coming. Led, the same entry fills
   * the width because it is using it, and the sections read as a lead story
   * with a list under it however many items arrive later.
   */
  lead?: boolean;
};

/**
 * One press, publication or talk entry. Items without an `href` render as
 * plain text rather than a dead link, so unpublished entries never pretend to
 * point somewhere.
 */
export function MediaEntry({ item, lead = false }: MediaEntryProps) {
  const heading = item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      // Stretched over the card, so the whole entry is the click target.
      className="inline-flex items-start gap-2 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
    >
      {item.title}
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className={cn(
          "shrink-0 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5",
          lead ? "mt-2.5 size-6" : "mt-1.5 size-4",
        )}
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    item.title
  );

  const meta = (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2",
        lead && "lg:flex-col lg:items-start lg:gap-3",
      )}
    >
      {/* The metadata firms up on hover rather than moving: it is what tells
          you what the entry is, so it should gain weight, not travel. */}
      <span className="rounded-chip border border-line-accent bg-accent-soft px-3 py-1 text-eyebrow font-semibold uppercase text-accent transition-colors group-hover/card:border-accent/55 group-hover/card:text-accent-strong">
        {item.type}
      </span>
      <span className="text-sm text-content-subtle transition-colors group-hover/card:text-content-muted">
        {item.outlet}
      </span>
      {item.date ? (
        <>
          <span
            aria-hidden="true"
            className={cn("text-line-strong", lead && "lg:hidden")}
          >
            &middot;
          </span>
          <span className="text-sm text-content-subtle transition-colors group-hover/card:text-content-muted">
            {item.date}
          </span>
        </>
      ) : null}
    </div>
  );

  return (
    <Card
      as="article"
      padding="lg"
      hover={item.href ? "lift" : "quiet"}
      className="h-full"
    >
      <div
        className={cn(
          "flex flex-col gap-6 sm:flex-row sm:gap-8",
          lead && "lg:gap-12",
        )}
      >
        <div className={cn("sm:mt-1", lead && "lg:w-52 lg:shrink-0")}>
          <IconChip icon={Newspaper} />
          {lead ? <div className="mt-6 hidden lg:block">{meta}</div> : null}
        </div>

        <div className="min-w-0 flex-1">
          <div className={lead ? "lg:hidden" : undefined}>{meta}</div>

          <h3
            className={cn(
              "font-display leading-snug text-content",
              lead
                ? "mt-5 text-display-md lg:mt-0"
                : "mt-5 text-xl sm:text-2xl",
            )}
          >
            {heading}
          </h3>

          {item.summary ? (
            <p
              className={cn(
                "mt-4 leading-relaxed text-content-muted",
                lead ? "max-w-2xl text-lede" : "max-w-xl text-sm",
              )}
            >
              {item.summary}
            </p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
