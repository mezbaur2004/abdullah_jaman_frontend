import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

type SectionLinkProps = {
  href: string;
  /** The destination, named as a place rather than as an instruction. */
  children: string;
  /** A short line under the label, for a row that needs to say where it goes. */
  detail?: string;
  /** `inverse` for a row on the navy band. */
  tone?: "base" | "inverse";
  /**
   * Stretches the row's click target over the whole block it sits in.
   *
   * The block must carry `group/block relative`, and — this is the part that
   * is easy to get wrong — must contain no other link, because a stretched
   * anchor lies over everything in its positioning ancestor and would take
   * their clicks. It is how the Leadership, Books and Media sections become
   * one target including their photograph, with a single anchor rather than
   * with a link nested inside a link.
   */
  stretch?: boolean;
  className?: string;
};

/**
 * The doorway at the foot of a section.
 *
 * It replaces six near-identical little arrow links — "Explore his work",
 * "Read more about Abdullah", "Leadership & experience" — which were the same
 * control six times over and read as a row of footnotes rather than as the way
 * out of a section. A full-width rule with the destination set at heading size
 * is impossible to miss and, more to the point, is obviously a door.
 *
 * The hover is an inversion rather than a tint: the ground fills with the
 * opposite of whatever the row is sitting on, and the type reverses out of it.
 * That is one gesture with two renderings, not two effects — on parchment the
 * row goes navy, on navy it goes ivory, and in both cases the row becomes the
 * thing the cursor is pointing at rather than merely acknowledging it.
 */
export function SectionLink({
  href,
  children,
  detail,
  tone = "base",
  stretch = false,
  className,
}: SectionLinkProps) {
  const inverse = tone === "inverse";

  return (
    <Link
      href={href}
      // Deliberately not `relative`: a stretched row has to resolve its inset
      // against the block around it, not against itself.
      className={cn(
        "group/door block focus-visible:outline-offset-0",
        stretch && "after:absolute after:inset-0 after:z-10 after:content-['']",
        className,
      )}
    >
      <span
        className={cn(
          // The clip is what keeps the fill inside the row. Without it the
          // scaled ground would paint over the section's own padding.
          "relative block overflow-hidden border-t-2",
          inverse ? "border-accent-on-inverse" : "border-accent-solid",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-editorial",
            "group-hover/door:scale-y-100 group-hover/block:scale-y-100",
            // Ivory, which is a fixed light value in both themes — so the
            // type reversed onto it has to be a fixed dark one. `scrim` is
            // exactly that: navy in the light theme, deeper navy in the dark
            // one, and never anything else. Reaching for `content` here is
            // what broke it the first time — in dark mode `content` IS ivory,
            // and the row filled ivory with ivory type on it.
            inverse ? "bg-on-inverse" : "bg-surface-inverse",
          )}
        />

        <span className="relative flex items-center justify-between gap-6 px-1 py-7 transition-colors sm:py-9">
          <span className="min-w-0">
            <span
              className={cn(
                "block font-display text-display-md leading-tight transition-colors",
                inverse
                  ? "text-on-inverse group-hover/door:text-scrim group-hover/block:text-scrim"
                  : "text-content group-hover/door:text-on-inverse group-hover/block:text-on-inverse",
              )}
            >
              {children}
            </span>
            {detail ? (
              <span
                className={cn(
                  "mt-3 block text-ui transition-colors",
                  inverse
                    ? "text-on-inverse-muted group-hover/door:text-scrim/70 group-hover/block:text-scrim/70"
                    : "text-content-muted group-hover/door:text-on-inverse-muted group-hover/block:text-on-inverse-muted",
                )}
              >
                {detail}
              </span>
            ) : null}
          </span>

          <ArrowRight
            aria-hidden="true"
            strokeWidth={1.75}
            className={cn(
              "size-7 shrink-0 transition-[transform,color] duration-500 ease-editorial sm:size-8",
              "group-hover/door:translate-x-2 group-hover/block:translate-x-2",
              // The arrow crosses the fill with the label and has to stay
              // legible on the far side of it. Brass on the ivory fill is
              // close to invisible; brass-300 on the navy fill is correct.
              inverse
                ? "text-accent-on-inverse group-hover/door:text-scrim group-hover/block:text-scrim"
                : "text-accent group-hover/door:text-accent-on-inverse group-hover/block:text-accent-on-inverse",
            )}
          />
        </span>
      </span>
    </Link>
  );
}
