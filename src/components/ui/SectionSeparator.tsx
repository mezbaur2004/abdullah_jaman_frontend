import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { accentMark, type Accent } from "@/lib/accent";

type Variant = "line" | "editorial" | "minimal";

type SectionSeparatorProps = {
  /**
   * `line` is the standard boundary — a blue rule with the accent breaking it.
   * `editorial` carries a thinner rule further across, for a quieter change of
   * subject. `minimal` drops to blue-grey with only a small indicator, for
   * boundaries that should register without being noticed.
   */
  variant?: Variant;
  accent?: Accent;
  tone?: "base" | "inverse";
  className?: string;
};

const rules: Record<Variant, string> = {
  line: "section-rule",
  editorial: "section-rule section-rule-editorial",
  minimal: "section-rule section-rule-minimal",
};

/**
 * The boundary between two sections.
 *
 * Deliberately not a full-width hairline. A symmetrical rule edge-to-edge
 * reads as a box being closed; every variant here is solid at the left margin
 * and dissolves before it reaches the right, so it reads as a new section
 * opening. The mark sits exactly on the text column's left edge — the same
 * axis the section index, the heading and every paragraph begin on — so it
 * lands as part of the page's grid rather than as an ornament dropped on top.
 *
 * The accent is what gives a long page its rhythm: blue for most boundaries,
 * with yellow or red arriving occasionally. It is passed in by the section
 * rather than chosen here, because rhythm is a property of the sequence and
 * a component cannot see the sequence it is in.
 *
 * Entirely decorative: `aria-hidden` keeps it out of the accessibility tree.
 * The real boundary for assistive technology is the `<section>` and its
 * heading.
 */
export function SectionSeparator({
  variant = "line",
  accent = "blue",
  tone = "base",
  className,
}: SectionSeparatorProps) {
  const inverse = tone === "inverse";
  const minimal = variant === "minimal";

  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <div className={cn(rules[variant], inverse && "section-rule-inverse")} />

      <Container className="pointer-events-none absolute inset-x-0 top-0">
        <span className="flex items-center gap-2">
          {/* The mark itself: a small block sitting on the rule, in the
              section's accent. Rotated for the standard variant so it breaks
              the line rather than thickening it. */}
          <span
            className={cn(
              "block -translate-y-1/2",
              minimal ? "size-[3px]" : "size-[5px] rotate-45",
              accentMark(accent, inverse),
            )}
          />
          {/* The editorial variant adds a short segment beside the mark — an
              asymmetric detail that reads as a typographic rule rather than a
              divider. */}
          {variant === "editorial" ? (
            <span
              className={cn(
                "block h-0.5 w-8 -translate-y-1/2",
                accentMark(accent, inverse),
                "opacity-70",
              )}
            />
          ) : null}
        </span>
      </Container>
    </div>
  );
}
