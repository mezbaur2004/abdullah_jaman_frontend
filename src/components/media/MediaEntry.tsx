import { ArrowUpRight } from "lucide-react";

import type { MediaItem } from "@/content/types";

/**
 * One press, publication or talk entry. Items without an `href` render as
 * plain text rather than a dead link, so unpublished placeholders never
 * pretend to point somewhere.
 */
export function MediaEntry({ item }: { item: MediaItem }) {
  return (
    <article className="group grid gap-4 py-8 sm:grid-cols-12 sm:gap-8 lg:py-10">
      <div className="flex items-baseline gap-3 sm:col-span-3 sm:flex-col sm:gap-2">
        <span className="text-eyebrow font-medium uppercase text-brass-600">
          {item.type}
        </span>
        <span className="text-sm text-ink-500">{item.date}</span>
      </div>

      <div className="sm:col-span-6">
        <h3 className="font-display text-xl leading-snug text-ink-900 sm:text-2xl">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-1.5 transition-colors duration-300 ease-editorial hover:text-brass-600"
            >
              {item.title}
              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="mt-1.5 size-4 shrink-0 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-600">
          {item.summary}
        </p>
      </div>

      <p className="text-sm text-ink-500 sm:col-span-3 sm:text-right">
        {item.outlet}
      </p>
    </article>
  );
}
