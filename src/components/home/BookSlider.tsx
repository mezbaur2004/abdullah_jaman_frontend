"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 3000;

/**
 * One book at a time. The track slides a full width per step on a smooth
 * transform, advances every three seconds and wraps at the end.
 *
 * Autoplay pauses while the pointer or focus is inside and never runs for a
 * reader who has asked for reduced motion; the slide then changes instantly.
 * Slides out of view are inert, so keyboard and screen-reader users only meet
 * the one on screen.
 */
export function BookSlider({ label, children }: { label: string; children: ReactNode[] }) {
  const count = children.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion() ?? false;

  const go = useCallback(
    (index: number) => setActive(((index % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || reduced || count < 2) return;
    const timer = window.setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, reduced, count, go]);

  const arrow =
    "flex size-11 items-center justify-center rounded-full border border-line bg-surface-raised text-content shadow-card transition-[background-color,color] hover:text-accent active:scale-95";

  return (
    <div
      className="min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-card">
        <ul
          className={cn(
            "flex",
            !reduced && "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          )}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {children.map((child, i) => (
            <li
              key={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== active}
              inert={i !== active}
              className="w-full shrink-0"
            >
              {child}
            </li>
          ))}
        </ul>
      </div>

      {count > 1 ? (
        <div className="mt-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {children.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show book ${i + 1}`}
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
            <button type="button" onClick={() => go(active - 1)} aria-label="Previous book" className={arrow}>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button type="button" onClick={() => go(active + 1)} aria-label="Next book" className={arrow}>
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
