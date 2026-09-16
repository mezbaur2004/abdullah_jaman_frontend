import type { ReactNode } from "react";

import { GeometricStar } from "./GeometricStar";
import { cn } from "@/lib/cn";

type CalloutProps = {
  children: ReactNode;
  /** A short label above the text, e.g. "Still being confirmed". */
  label?: string;
  className?: string;
};

/**
 * What the site says when it has nothing to say yet.
 *
 * This replaces a note set in 14px grey behind a thin rule — which read as
 * small print, and small print is what a site uses when it would rather you
 * did not look. These notes are the opposite: they are the page declining to
 * invent an award or a publication date, and they are among the most load
 * bearing sentences on the site. So they get a surface, a gold rule, the
 * lattice's own figure and type at reading size.
 *
 * Each one is still driven by a string in the content layer — delete the
 * string and the callout goes with it.
 */
export function Callout({ children, label, className }: CalloutProps) {
  return (
    <aside
      className={cn(
        "relative max-w-3xl overflow-hidden rounded-card border border-line border-l-[3px] border-l-accent-solid bg-surface-ivory p-6 sm:p-8",
        className,
      )}
    >
      <GeometricStar
        className="pointer-events-none absolute -right-6 -top-6 size-28 text-accent-solid/[0.12]"
      />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-6">
        <GeometricStar className="size-7 shrink-0 text-accent sm:mt-0.5" />
        <div className="min-w-0">
          {label ? (
            <p className="text-eyebrow font-semibold uppercase text-accent">
              {label}
            </p>
          ) : null}
          <div
            className={cn(
              "max-w-xl leading-relaxed text-content-muted",
              label && "mt-3",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
