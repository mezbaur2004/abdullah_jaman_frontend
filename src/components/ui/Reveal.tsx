"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds. Used sparingly to stagger siblings in a grid. */
  delay?: number;
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
 * A single, quiet entrance: a short rise and fade, once, on first view.
 *
 * Content that starts at `opacity: 0` has to be provably impossible to strand.
 * Three cases would otherwise do it, and each has a guard here: landing below
 * the element on load (the mount check), jumping past it mid-session (the root
 * margin above), and JavaScript never arriving at all (the no-script stylesheet
 * in the root layout, keyed off `data-reveal`).
 *
 * The revealed flag is written straight to the DOM rather than held in state.
 * It is presentation only — nothing renders from it — so a state round trip
 * would re-render every wrapped section on scroll for no gain.
 *
 * The content is always in the DOM — only opacity and transform move — so
 * crawlers and assistive technology see the full page regardless.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
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

  return (
    <div
      ref={ref}
      data-reveal=""
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
