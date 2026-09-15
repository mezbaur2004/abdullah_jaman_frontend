import { ArrowUpRight, Newspaper } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import type { MediaItem } from "@/content/types";

/**
 * One press, publication or talk entry. Items without an `href` render as
 * plain text rather than a dead link, so unpublished entries never pretend to
 * point somewhere.
 */
export function MediaEntry({ item }: { item: MediaItem }) {
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
        className="mt-1.5 size-4 shrink-0 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    item.title
  );

  return (
    <Card
      as="article"
      padding="lg"
      hover={item.href ? "lift" : "quiet"}
      className="h-full"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <IconChip icon={Newspaper} className="sm:mt-1" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {/* The metadata firms up on hover rather than moving: it is what
                tells you what the entry is, so it should gain weight, not
                travel. */}
            <span className="rounded-full border border-line-accent bg-accent-soft px-3 py-1 text-eyebrow font-medium uppercase text-accent transition-colors group-hover/card:border-accent/55 group-hover/card:text-accent-strong">
              {item.type}
            </span>
            <span className="text-sm text-content-subtle transition-colors group-hover/card:text-content-muted">
              {item.outlet}
            </span>
            {item.date ? (
              <>
                <span aria-hidden="true" className="text-line-strong">
                  &middot;
                </span>
                <span className="text-sm text-content-subtle transition-colors group-hover/card:text-content-muted">
                  {item.date}
                </span>
              </>
            ) : null}
          </div>

          <h3 className="mt-5 font-display text-xl leading-snug text-content sm:text-2xl">
            {heading}
          </h3>

          {item.summary ? (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-content-muted">
              {item.summary}
            </p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
