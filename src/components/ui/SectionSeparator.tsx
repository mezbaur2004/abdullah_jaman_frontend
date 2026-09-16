import { cn } from "@/lib/cn";

type Variant = "band" | "quiet";

type SectionSeparatorProps = {
  /**
   * `band` is the boundary: one course of the lattice, edge to edge. `quiet`
   * is a hairline, for a change of subject inside a passage that a full band
   * would over-announce.
   */
  variant?: Variant;
  tone?: "base" | "inverse";
  className?: string;
};

/**
 * The boundary between two sections, and the site's signature.
 *
 * It used to be an asymmetric gradient rule carrying a rotated square, a short
 * bar and a gold tick at the left margin. At arm's length those three marks
 * read as debris on the edge of a band rather than as the opening of a
 * section, and they were the site's most conspicuous ornament while saying
 * nothing about it.
 *
 * This is the same lattice that fills the navy sections, run across the page
 * as a single course: two rails with a chain of interlaced diamonds between
 * them. It is what a border looks like in this tradition, it needs no
 * explanation, and it is the one detail a reader will remember about the site.
 *
 * Full width rather than contained. A border that stops at the text column is
 * a rule under a paragraph; one that runs edge to edge is architecture.
 *
 * Entirely decorative: `aria-hidden` keeps it out of the accessibility tree.
 * The real boundary for assistive technology is the `<section>` and its
 * heading.
 */
export function SectionSeparator({
  variant = "band",
  tone = "base",
  className,
}: SectionSeparatorProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "geo-divider",
        variant === "quiet" && "geo-divider-quiet",
        tone === "inverse" && variant !== "quiet" && "geo-divider-inverse",
        className,
      )}
    />
  );
}
