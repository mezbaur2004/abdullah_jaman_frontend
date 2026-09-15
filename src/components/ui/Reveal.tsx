"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Position among staggered siblings — pass the map index. The delay itself
   * comes from `--reveal-stagger` in globals.css, so every staggered group on
   * the site runs to the same rhythm and no component picks its own number.
   */
  step?: number;
};

/**
 * An IntersectionObserver root box that extends far above the viewport but
 * stops short of its bottom edge. The bottom inset is what makes the entrance
 * read as an entrance — an element only counts as seen once it is properly on
 * screen. The enormous top inset is the safety catch: an element the reader
 * jumps clean past (an anchor link, restored scroll, a resize) never fires an
 * intersection callback on the way, because it is outside the viewport both
 * before and after. Widening the root upwards means it is inside the root box
 * the moment it is level with or above the fold, so the callback always comes.
 */
const ROOT_MARGIN = "999999px 0px -12% 0px";

/**
 * Past this many siblings the stagger stops accumulating. Without a cap a list
 * of twenty would leave the last item waiting well over a second after the
 * first — which stops reading as a sequence and starts reading as lag.
 */
const MAX_STEP = 5;

/**
 * A single, quiet entrance: a short rise and fade, once, on first view.
 *
 * This is deliberately CSS and an observer rather than Framer Motion, which is
 * installed and used elsewhere. The entrance has to survive three things
 * Framer cannot help with: it must be correct before hydration, it must cost
 * nothing per scroll frame, and it must be impossible to strand content at
 * `opacity: 0`. Framer is kept for the one place it earns its weight — the
 * mobile menu's exit animation, which has no CSS equivalent.
 *
 * Content that starts invisible has to be provably impossible to strand. Three
 * cases would otherwise do it, and each has a guard here: landing below the
 * element on load (the mount check), jumping past it mid-session (the root
 * margin above), and JavaScript never arriving at all (the no-script
 * stylesheet in the root layout, keyed off `data-reveal`).
 *
 * The revealed flag is written straight to the DOM rather than held in state.
 * It is presentation only — nothing renders from it — so a state round trip
 * would re-render every wrapped section on scroll for no gain.
 *
 * The content is always in the DOM — only opacity and transform move — so
 * crawlers and assistive technology see the full page regardless.
 */
export function Reveal({ children, className, step = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => element.setAttribute("data-revealed", "");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      // Loaded already scrolled past this element.
      element.getBoundingClientRect().bottom < 0
    ) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { rootMargin: ROOT_MARGIN },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const clamped = Math.min(Math.max(step, 0), MAX_STEP);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={cn("reveal", className)}
      style={
        clamped ? ({ "--reveal-step": clamped } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
