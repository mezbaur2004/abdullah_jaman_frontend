import { cn } from "@/lib/cn";

type GeometricPatternProps = {
  /**
   * How present the tile is. `faint` is the default and the right answer
   * almost everywhere; `soft` exists for the dark bands, where the same
   * opacity over navy reads as roughly half as much.
   */
  intensity?: "faint" | "soft";
  /**
   * `xl` draws the figure at two and a half times the field size, for the one
   * place on the site it is meant to be seen rather than felt.
   */
  size?: "field" | "xl";
  /**
   * How the tile is released at its edges, so it never meets one as a hard
   * crop. `true` fades it downward, which suits a tall block of prose;
   * `"radial"` anchors it to the top right corner and dissolves it across the
   * panel, which is what the wide shallow surfaces — the hero, the footer —
   * need, since a downward fade there would cut the figure in half.
   */
  fade?: boolean | "radial";
  /**
   * Drifts the figure against the scroll. Off by default and worth turning on
   * only where the layer is large enough for a few per cent of travel to
   * register — the hero and the page mastheads.
   */
  parallax?: boolean;
  className?: string;
};

/**
 * The two strengths, each resolved from a theme token rather than a fixed
 * opacity. Brass on navy carries considerably further than brass on parchment,
 * so a single figure cannot serve both.
 *
 * Both were raised substantially when the lattice became the signature rather
 * than a texture. It used to sit at three or four per cent, which on most
 * screens meant a reader never saw it at all — an identity nobody can point at
 * is not an identity. It is now plainly visible on the navy bands, which is
 * where the brief wants it, and still quiet enough on parchment that it never
 * competes with the type it sits behind.
 */
const intensities = {
  faint: "geo-faint",
  soft: "geo-soft",
} as const;

/**
 * The geometric layer: an eight-point khatam tile at very low opacity.
 *
 * Purely decorative and `aria-hidden`, with `pointer-events-none` so it never
 * interferes with anything above it. It is positioned by its parent — give the
 * parent `relative` and this fills it.
 *
 * Used on a handful of surfaces only. A motif behind every section stops being
 * a character and becomes wallpaper, which is the opposite of the intent: the
 * reader should feel the design has a cultural grounding without being able to
 * point at where.
 */
export function GeometricPattern({
  intensity = "faint",
  size = "field",
  fade = false,
  parallax = false,
  className,
}: GeometricPatternProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        "geo-pattern",
        size === "xl" && "geo-pattern-xl",
        parallax && "geo-parallax",
        fade === "radial" ? "geo-fade-radial" : fade ? "geo-fade" : null,
        intensities[intensity],
        className,
      )}
    />
  );
}
