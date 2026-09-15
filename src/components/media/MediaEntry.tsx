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
      className="group/link inline-flex items-start gap-2 transition-colors duration-300 ease-editorial hover:text-accent"
    >
      {item.title}
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="mt-1.5 size-4 shrink-0 transition-transform duration-300 ease-editorial group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
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
      interactive={Boolean(item.href)}
      className="h-full"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <IconChip icon={Newspaper} className="sm:mt-1" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="rounded-full border border-line px-3 py-1 text-eyebrow font-medium uppercase text-accent">
              {item.type}
            </span>
            <span className="text-sm text-content-subtle">{item.outlet}</span>
            {item.date ? (
              <>
                <span aria-hidden="true" className="text-line-strong">
                  &middot;
                </span>
                <span className="text-sm text-content-subtle">{item.date}</span>
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
