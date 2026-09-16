import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ArchFrameProps = {
  children: ReactNode;
  /** "inverse" when the photograph sits on the navy band. */
  tone?: "base" | "inverse";
  className?: string;
};

/**
 * A photograph cut to a pointed arch, with a second empty arch set down and to
 * the right of it.
 *
 * The mihrab is the site's one borrowed shape, and it is borrowed carefully:
 * a prayer niche is an architectural form before it is a religious symbol, and
 * used as a frame around a portrait it reads as the former. It replaces a thin
 * offset rectangle, which was a perfectly good editorial device and belonged
 * to nobody in particular.
 *
 * The outline is drawn as an SVG rather than a border because a border cannot
 * follow a curve. `preserveAspectRatio="none"` lets the arch stretch to the
 * box it is given, and `vector-effect: non-scaling-stroke` keeps the line one
 * pixel wide however far it has stretched — without it the hairline would
 * thicken with the picture.
 *
 * Hidden below `sm`, where there is no gutter to hold the overhang and the
 * outline would either crop or widen the page.
 */
export function ArchFrame({
  children,
  tone = "base",
  className,
}: ArchFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 125"
        preserveAspectRatio="none"
        className={cn(
          "pointer-events-none absolute inset-0 hidden size-full translate-x-5 translate-y-5 sm:block",
          tone === "inverse" ? "text-accent-on-inverse" : "text-gold",
        )}
      >
        <path
          d="M0 125 L0 52 C0 22 22 4 50 0 C78 4 100 22 100 52 L100 125 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="arch relative">{children}</div>
    </div>
  );
}
