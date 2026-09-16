import { cn } from "@/lib/cn";
import { accentMark, accentText, type Accent } from "@/lib/accent";

type EyebrowProps = {
  /** Optional so a numbered marker can stand on its own if a label is absent. */
  children?: string;
  className?: string;
  /** "inverse" for the dark band, where the muted tokens flip. */
  tone?: "base" | "inverse";
  accent?: Accent;
  /**
   * Two-digit section number, e.g. "03". Renders as `03 / LABEL`, with the
   * number in the section's accent.
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
 * The label itself stays slate rather than taking the accent. Yellow at this
 * size would fail contrast outright, and red would read as a warning — so the
 * accent lives in the leading rule and the index number, where it is a signal
 * rather than the thing being read.
 */
export function Eyebrow({
  children,
  className,
  tone = "base",
  accent = "blue",
  index,
  id,
}: EyebrowProps) {
  const inverse = tone === "inverse";

  return (
    <p
      id={id}
      className={cn(
        // Semibold rather than medium. At 11px with 0.19em of tracking, medium
        // reads as a caption; the extra weight is what makes it a label the
        // heading below belongs to.
        "flex items-center gap-3 text-eyebrow font-semibold uppercase",
        inverse ? "text-on-inverse-muted" : "text-content-subtle",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-[3px] w-9 shrink-0", accentMark(accent, inverse))}
      />
      {index ? (
        <span className={cn("font-display text-xs", accentText(accent, inverse))}>
          {index}
        </span>
      ) : null}
      {index && children ? (
        <span aria-hidden="true" className="opacity-45">
          /
        </span>
      ) : null}
      {children}
    </p>
  );
}
