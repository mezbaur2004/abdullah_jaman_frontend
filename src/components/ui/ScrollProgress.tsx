"use client";

import { useEffect, useRef } from "react";

/**
 * A hairline of brass across the top of the window, filling as the page is
 * read.
 *
 * Three decisions worth stating. It is written straight to the DOM through a
 * ref rather than held in state, because a scroll handler that re-renders a
 * React tree sixty times a second is a scroll handler that costs more than the
 * thing it is reporting. It is measured inside `requestAnimationFrame`, so
 * however often the browser fires the event the geometry is read once a frame.
 * And it is `transform: scaleX` rather than `width`, so the browser composites
 * it instead of laying the page out again.
 *
 * It is not hidden under `prefers-reduced-motion`: the bar is a readout of
 * where the reader already is, not an animation played at them. Its transition
 * is zeroed there all the same, by the global rule in globals.css, so it
 * tracks the scroll exactly rather than easing after it.
 *
 * `aria-hidden`, and deliberately. A progress bar reporting the scroll
 * position duplicates something assistive technology already conveys, and a
 * live region announcing a percentage on every scroll frame would be actively
 * hostile.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      // A page shorter than the viewport has no progress to report, and
      // dividing by zero here would paint a full bar on a page with no scroll.
      const progress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      element.style.transform = `scaleX(${progress})`;
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    // The page's own height changes without either of those firing — images
    // arriving below the fold, a font swapping in, the reveals settling. The
    // ratio would then be measured against a height the page no longer has
    // and the bar would read short at the foot until the next scroll nudged
    // it. Watching the document element catches all of it in one place.
    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(schedule);
    observer?.observe(document.documentElement);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      // Above the sticky header, which sits at z-50.
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
    >
      <div
        ref={ref}
        className="h-full origin-left scale-x-0 bg-accent-solid transition-transform duration-150 ease-linear"
      />
    </div>
  );
}
