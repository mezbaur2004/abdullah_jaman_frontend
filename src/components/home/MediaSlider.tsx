"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * One row of cards that scrolls sideways. Native scrolling with snap points,
 * so touch, trackpad and keyboard all work without a library; the two buttons
 * step one card at a time for a mouse.
 */
export function MediaSlider({ label, children }: { label: string; children: ReactNode[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

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

  const step = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const button =
    "flex size-12 items-center justify-center rounded-control border border-line-strong bg-surface-raised text-content shadow-card transition-colors hover:border-accent hover:text-accent active:translate-y-px disabled:pointer-events-none disabled:opacity-40";

  return (
    <div>
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
            className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]"
          >
            {child}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <button type="button" onClick={() => step(-1)} disabled={edges.start} aria-label="Previous items" className={cn(button)}>
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button type="button" onClick={() => step(1)} disabled={edges.end} aria-label="Next items" className={cn(button)}>
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
