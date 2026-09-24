"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 5000;

/**
 * One row of cards that scrolls sideways. Native scrolling with snap points,
 * so touch, trackpad and keyboard all work without a library.
 *
 * It advances one card every five seconds and wraps to the start at the end.
 * Autoplay pauses while the pointer or focus is inside, and never runs for a
 * reader who has asked for reduced motion. The two arrows sit quietly on the
 * sides and firm up on hover.
 */
export function MediaSlider({ label, children }: { label: string; children: ReactNode[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [paused, setPaused] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const step = useCallback((direction: 1 | -1, wrap = false) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (wrap && direction === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => step(1, true), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, step]);

  const arrow =
    "absolute top-[28%] z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface-raised/70 text-content opacity-60 shadow-card backdrop-blur-sm transition-[opacity,background-color,color] hover:bg-surface-raised hover:text-accent hover:opacity-100 focus-visible:opacity-100 active:scale-95 disabled:pointer-events-none disabled:opacity-0";

  return (
    <div
      className="relative"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ul
        ref={track}
        onScroll={update}
        tabIndex={0}
        aria-label={label}
        className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:-mx-12 lg:scroll-px-12 lg:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <li
            key={i}
            className="w-[88%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            {child}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => step(-1)}
        disabled={edges.start}
        aria-label="Previous items"
        className={cn(arrow, "-left-3 sm:-left-5")}
      >
        <ChevronLeft aria-hidden="true" className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        disabled={edges.end}
        aria-label="Next items"
        className={cn(arrow, "-right-3 sm:-right-5")}
      >
        <ChevronRight aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}
