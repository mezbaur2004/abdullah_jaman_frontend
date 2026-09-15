import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type SectionSeparatorProps = {
  tone?: "base" | "inverse";
  className?: string;
};

/**
 * The boundary between two sections.
 *
 * Deliberately not a full-width hairline. A symmetrical rule edge-to-edge
 * reads as a box being closed; this one is solid at the left margin and
 * dissolves before it reaches the right, so it reads as a new section opening.
 * The small rotated mark sits exactly on the text column's left edge — the
 * same axis the section index, the heading and every paragraph begin on — so
 * it lands as part of the page's grid rather than as an ornament dropped on
 * top of it.
 *
 * Entirely decorative: it carries no semantics, and `aria-hidden` keeps it out
 * of the accessibility tree. The real boundary for assistive technology is the
 * `<section>` and its heading.
 */
export function SectionSeparator({
  tone = "base",
  className,
}: SectionSeparatorProps) {
  const inverse = tone === "inverse";

  return (
    <div aria-hidden="true" className={cn("relative", className)}>
      <div
        className={cn("section-rule", inverse && "section-rule-inverse")}
      />
      <Container className="pointer-events-none absolute inset-x-0 top-0">
        <span
          className={cn(
            "block size-[5px] -translate-y-1/2 rotate-45",
            inverse ? "bg-accent-on-inverse" : "bg-accent",
          )}
        />
      </Container>
    </div>
  );
}
