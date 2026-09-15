import { cn } from "@/lib/cn";

type EyebrowProps = {
  /** Optional so a numbered marker can stand on its own if a label is absent. */
  children?: string;
  className?: string;
  /** "inverse" for the dark band, where the muted tokens flip. */
  tone?: "base" | "inverse";
  /**
   * Two-digit section number, e.g. "03". Renders as `03 / LABEL`, in the
   * secondary hue — enumeration is the one job brass has on this site.
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
 */
export function Eyebrow({
  children,
  className,
  tone = "base",
  index,
  id,
}: EyebrowProps) {
  const inverse = tone === "inverse";

  return (
    <p
      id={id}
      className={cn(
        "flex items-center gap-3 text-eyebrow font-medium uppercase",
        inverse ? "text-on-inverse-muted" : "text-content-subtle",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8 shrink-0",
          inverse ? "bg-accent-on-inverse" : "bg-accent",
        )}
      />
      {index ? (
        <span
          className={
            inverse ? "text-accent-warm-on-inverse" : "text-accent-warm"
          }
        >
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
