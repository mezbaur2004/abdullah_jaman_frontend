import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ListRowProps = {
  children: ReactNode;
  className?: string;
  /** Omit the bottom rule for a row inside a list that draws its own. */
  divider?: boolean;
};

/**
 * One row of an editorial list — an award, a milestone, a qualification.
 *
 * Rows are not cards and should not pretend to be: they have no surface of
 * their own to raise. So the acknowledgement is a rule that draws itself down
 * the left edge, on the same axis as the section separator's mark and every
 * heading on the page. It costs one transform, moves nothing else on the row,
 * and reads as the eye's own place-marker rather than as an effect.
 *
 * `group/row` is the hook rows use for their own text transitions.
 */
export function ListRow({
  children,
  className,
  divider = true,
}: ListRowProps) {
  return (
    <li
      className={cn(
        "group/row relative",
        divider && "border-b border-line",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-accent transition-transform group-hover/row:scale-y-100"
      />
      {children}
    </li>
  );
}
