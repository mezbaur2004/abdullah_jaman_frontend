import { cn } from "@/lib/cn";
import { accentMark, accentText, type Accent } from "@/lib/accent";

type EyebrowProps = {
  /** Optional so a numbered marker can stand on its own if a label is absent. */
  children?: string;
  className?: string;
  /**
   * Which ground it sits on. `inverse` is the navy band, where the accent
   * flips to its light value; `gold` is the invitation band, where brass on
   * brass would be invisible and everything is navy instead.
   */
  tone?: "base" | "inverse" | "gold";
  accent?: Accent;
  /**
   * Two-digit section number, e.g. "03". Renders as `03 / LABEL`, with the
   * number set in the display face.
   */
  index?: string;
  id?: string;
};

/**
 * The small line above every heading on the site.
 *
 * One component for all of them, numbered or not, so a section marker and a
 * standalone label can never drift apart in size, tracking, colour or the
 * length of their leading rule.
 *
 * The label is brass now, and larger. It used to be 11px slate — a footnote
 * above a seventy-pixel headline, which at a glance simply was not there. At
 * 13px in the accent it reads as a label the heading below belongs to, and it
 * is one of the four places the accent does its work: eyebrows, section
 * numbers, the rule under the active nav item, and the arrow on a link.
 */
export function Eyebrow({
  children,
  className,
  tone = "base",
  accent = "gold",
  index,
  id,
}: EyebrowProps) {
  const inverse = tone === "inverse";
  const gold = tone === "gold";

  return (
    <p
      id={id}
      className={cn(
        "flex items-center gap-3 text-eyebrow font-semibold uppercase",
        gold ? "text-on-gold" : accentText(accent, inverse),
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-0.5 w-10 shrink-0",
          gold ? "bg-on-gold" : accentMark(accent, inverse),
        )}
      />
      {index ? (
        <span className="font-display text-sm font-semibold">{index}</span>
      ) : null}
      {index && children ? (
        <span aria-hidden="true" className="opacity-40">
          /
        </span>
      ) : null}
      {children}
    </p>
  );
}
