"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";

import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 3000;
const WIDE = "(min-width: 640px)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(WIDE);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * The one slider on the site. The books section shows one card at a time and
 * the media section two (one on a phone); everything else is shared: a smooth
 * slide every three seconds that wraps at the end, dots and arrows beneath,
 * a pause while the pointer or focus is inside, and no autoplay for a reader
 * who has asked for reduced motion, where the change is instant instead.
 * Cards out of view are inert, so keyboard and screen-reader users only meet
 * the ones on screen.
 */
export function Carousel({
  label,
  itemLabel = "item",
  perView = 1,
  children,
}: {
  label: string;
  /** Names a single card in the controls, e.g. "Show book 2". */
  itemLabel?: string;
  /** Cards visible at once from the `sm` breakpoint up. Phones always get one. */
  perView?: 1 | 2;
  children: ReactNode[];
}) {
  const count = children.length;
  const wide = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(WIDE).matches,
    () => true,
  );
  const visible = wide ? perView : 1;
  const stops = Math.max(count - visible + 1, 1);

  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion() ?? false;
  const active = Math.min(position, stops - 1);

  const go = useCallback(
    (index: number) => setPosition(((index % stops) + stops) % stops),
    [stops],
  );

  useEffect(() => {
    if (paused || reduced || stops < 2) return;
    const timer = window.setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, reduced, stops, go]);

  const arrow =
    "flex size-11 items-center justify-center rounded-full border border-line bg-surface-raised text-content shadow-card transition-[background-color,color] hover:text-accent active:scale-95";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="min-w-0"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* The gutter lives on each card as padding, cancelled by the track's
          negative margin, so one step is always exactly one card wide. */}
      <div className="overflow-hidden">
        <ul
          className={cn(
            "-mx-2.5 flex",
            !reduced && "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          )}
          style={{ transform: `translateX(-${(active * 100) / visible}%)` }}
        >
          {children.map((child, i) => {
            const shown = i >= active && i < active + visible;
            return (
              <li
                key={i}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!shown}
                inert={!shown}
                className={cn("shrink-0 px-2.5", perView === 2 ? "w-full sm:w-1/2" : "w-full")}
              >
                {child}
              </li>
            );
          })}
        </ul>
      </div>

      {stops > 1 ? (
        <div className="mt-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {Array.from({ length: stops }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${itemLabel} ${i + 1}`}
                aria-current={i === active}
                className="group flex h-6 items-center"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-[width,background-color] duration-500",
                    i === active ? "w-8 bg-accent" : "w-3 bg-line group-hover:bg-content-subtle",
                  )}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => go(active - 1)} aria-label={`Previous ${itemLabel}`} className={arrow}>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button type="button" onClick={() => go(active + 1)} aria-label={`Next ${itemLabel}`} className={arrow}>
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
