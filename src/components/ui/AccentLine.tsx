import { cn } from "@/lib/cn";
import { accentMark, type Accent } from "@/lib/accent";

type AccentLineProps = {
  accent?: Accent;
  /** "inverse" when sitting on the dark navy band. */
  tone?: "base" | "inverse";
  orientation?: "horizontal" | "vertical";
  /**
   * Reveals on the hover of an ancestor `Card` or `ListRow` instead of showing
   * at rest. This is the site's one "something appeared" effect, and it is
   * deliberately a 2px rule rather than a glow or a badge.
   */
  reveal?: "none" | "card" | "row";
  /**
   * Draws a short muted-gold tick after the rule, so the mark closing a
   * heading reads in two tones — the same pairing the section separators use.
   * Horizontal only; a vertical rule has no room for it.
   */
  pair?: boolean;
  className?: string;
};

const reveals = {
  none: "",
  card: "origin-left scale-x-0 transition-transform group-hover/card:scale-x-100",
  row: "origin-top scale-y-0 transition-transform group-hover/row:scale-y-100",
} as const;

/**
 * The small coloured rule that carries the accent — under an eyebrow, along a
 * card's edge, beside a heading.
 *
 * It is always decorative. Anything it marks is already named in the text next
 * to it, so `aria-hidden` keeps it out of the accessibility tree rather than
 * announcing an unlabelled graphic.
 */
export function AccentLine({
  accent = "blue",
  tone = "base",
  orientation = "horizontal",
  reveal = "none",
  pair = false,
  className,
}: AccentLineProps) {
  const rule = (
    <span
      aria-hidden="true"
      className={cn(
        "block",
        orientation === "horizontal" ? "h-0.5 w-10" : "h-full w-0.5",
        accentMark(accent, tone === "inverse"),
        reveal !== "none" && reveals[reveal],
        !pair && className,
      )}
    />
  );

  if (!pair || orientation === "vertical") return rule;

  return (
    <span aria-hidden="true" className={cn("flex items-center gap-2", className)}>
      {rule}
      <span
        className={cn(
          // Blue when the section is already yellow: gold beside yellow is not
          // a second tone, it is the first one slightly wrong.
          "block h-0.5 w-4",
          accent === "yellow" ? accentMark("blue", tone === "inverse") : "bg-gold",
        )}
      />
    </span>
  );
}
