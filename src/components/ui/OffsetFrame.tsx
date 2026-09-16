import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type OffsetFrameProps = {
  children: ReactNode;
  /** "inverse" when the photograph sits on the navy band. */
  tone?: "base" | "inverse";
  className?: string;
};

/**
 * A photograph with a second, empty frame set down and to the right of it.
 *
 * The site's one framing device, so every framed photograph on it is framed
 * the same way. It is a gold hairline and nothing else: an outline implies the
 * depth without occupying it, where a filled plate behind a picture reads as a
 * drop shadow someone drew by hand.
 *
 * Offset by a translate rather than by insets, so the outline is always
 * exactly the picture's own size and shape whatever ratio it turns out to be —
 * there is no second set of numbers to keep in step.
 *
 * Hidden below `sm`, where there is no gutter to hold the overhang and the
 * frame would either crop or widen the page.
 */
export function OffsetFrame({
  children,
  tone = "base",
  className,
}: OffsetFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 hidden translate-x-5 translate-y-5 rounded-figure border sm:block",
          tone === "inverse" ? "border-gold/70" : "border-gold/60",
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
