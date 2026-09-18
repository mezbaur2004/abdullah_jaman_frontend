import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

type SectionLinkProps = {
  href: string;
  /** The destination, named as a place rather than as an instruction. */
  children: string;
  /** `inverse` for a button on the navy band. */
  tone?: "base" | "inverse";
  /**
   * Stretches the click target over the whole block this sits in.
   *
   * The block must carry `group/block relative`, and — this is the part that
   * is easy to get wrong — must contain no other link, because a stretched
   * layer lies over everything in its positioning ancestor. It is how the
   * Leadership section becomes one target including its photograph, with a
   * single anchor rather than a link nested inside a link.
   */
  stretch?: boolean;
  className?: string;
};

/**
 * The doorway at the foot of a section — and it is a button, not a bar.
 *
 * The first version was a full-width rule with the destination set at heading
 * size, which filled edge to edge on hover. At rest it read as a divider with
 * a word on it; only the cursor revealed it was a control at all, and on a
 * phone, where there is no cursor, it never revealed anything. A control has
 * to look like a control before anyone touches it, so this one is filled,
 * bordered and shadowed at rest and does almost nothing on hover.
 *
 * It stays the *secondary* action wherever it appears. The one filled-brass
 * primary on a screen is the hero's or the invitation band's; a page with two
 * of them has none.
 *
 * Shape by breakpoint, and the two are different jobs. On a phone it is the
 * full width of the column with the label at one end and the arrow at the
 * other, because a thumb wants a wide target and the arrow wants to be where
 * the thumb is not. On a wide screen it shrinks to its own content, capped so
 * a long destination cannot stretch it back into the bar it used to be.
 *
 * ON THE STRUCTURE — the anchor holds no styling of its own and every visual
 * lives on an inner span. That is not tidiness, it is the fix for a real bug.
 * The lift used to sit on the anchor, and a `translate` makes an element the
 * containing block for its absolutely positioned descendants: the instant the
 * cursor arrived, the stretch layer stopped resolving against the block and
 * snapped onto the button. Hit-testing before the hover said everything was
 * fine, so the photograph read as clickable and then swallowed the click
 * between mousedown and mouseup. With the transform on the inner span the
 * anchor stays untransformed and the stretch layer stays where it was put.
 */
export function SectionLink({
  href,
  children,
  tone = "base",
  stretch = false,
  className,
}: SectionLinkProps) {
  const inverse = tone === "inverse";

  return (
    <Link
      href={href}
      // No `relative` and no transform, ever — see the note above.
      className={cn(
        "group/door block w-full rounded-control sm:inline-block sm:w-auto sm:max-w-100",
        className,
      )}
    >
      {stretch ? (
        // A real element rather than an `::after`: the layer is load-bearing
        // for the whole section's clickability and deserves to be visible in
        // the DOM when someone comes to debug it.
        <span aria-hidden="true" className="absolute inset-0 z-10" />
      ) : null}

      <span
        className={cn(
          // `min-h-12` is the 48px tap target, and it is a minimum rather than
          // a height: a label that wraps on a narrow phone grows the button
          // instead of spilling out of it.
          "flex min-h-12 w-full items-center justify-between gap-5 rounded-control border px-6 py-3.5",
          "sm:px-7 sm:py-4",
          "transition-[transform,background-color,border-color,box-shadow,color]",
          // The resting state carries the whole affordance: a fill, a border
          // and a shadow, all present before anything is touched.
          inverse
            ? "border-line-inverse bg-surface-raise-inverse text-on-inverse shadow-card"
            : "border-line-strong bg-surface-raised text-content shadow-card",
          // A slight shift and a small lift, and nothing else. The fill that
          // used to sweep the full width on hover is gone: it was an animation
          // announcing what the button should already have been saying.
          inverse
            ? "group-hover/door:-translate-y-px group-hover/door:border-accent-on-inverse group-hover/door:bg-surface-raise-inverse-hover group-hover/door:shadow-card-hover"
            : "group-hover/door:-translate-y-px group-hover/door:border-accent-solid group-hover/door:bg-surface group-hover/door:shadow-card-hover",
          // Pressed. Touch has no hover to report with, so without this a tap
          // is a control that gives nothing back until the next page paints.
          inverse
            ? "group-active/door:translate-y-0 group-active/door:bg-surface-inverse group-active/door:shadow-card"
            : "group-active/door:translate-y-0 group-active/door:bg-surface-soft group-active/door:shadow-card",
        )}
      >
        <span className="font-display text-lg leading-snug sm:text-xl">
          {children}
        </span>
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.75}
          className={cn(
            "size-5 shrink-0 transition-transform",
            "group-hover/door:translate-x-1 group-hover/block:translate-x-1",
            inverse ? "text-accent-on-inverse" : "text-accent",
          )}
        />
      </span>
    </Link>
  );
}
