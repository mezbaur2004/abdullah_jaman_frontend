import { ArrowUpRight, Newspaper } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import type { MediaItem } from "@/content/types";

/**
 * A press item at the size of a video card, so the two sit in one row. The
 * outlet takes the frame a thumbnail would fill.
 */
export function PressCard({ item }: { item: MediaItem }) {
  return (
    <Card
      as="article"
      padding="none"
      hover={item.href ? "lift" : "quiet"}
      className="flex h-full flex-col overflow-hidden"
    >
      <div className="relative isolate flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden bg-surface-inverse px-6 text-center">
        <GeometricPattern intensity="soft" fade="radial" className="-z-10" />
        <Newspaper aria-hidden="true" strokeWidth={1.5} className="size-8 text-accent-on-inverse" />
        <p className="font-display text-2xl font-semibold leading-tight text-on-inverse">
          {item.outlet}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-eyebrow font-semibold uppercase text-accent">
          Press · {item.type}
        </p>
        <h3 className="mt-3 font-display text-xl leading-snug text-content">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
            >
              {item.title}
              <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="mt-1 size-4 shrink-0" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            item.title
          )}
        </h3>
      </div>
    </Card>
  );
}
