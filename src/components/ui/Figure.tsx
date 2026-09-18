import Image from "next/image";

import type { ImageAsset } from "@/content/types";
import { cn } from "@/lib/cn";

type FigureProps = {
  image: ImageAsset;
  /** Required: without it next/image ships a srcset sized for a full viewport. */
  sizes: string;
  /** Set on the LCP image only. */
  priority?: boolean;
  caption?: string;
  className?: string;
  /** CSS aspect-ratio value, e.g. "4 / 5". Defaults to the asset's own ratio. */
  ratio?: string;
  rounded?: boolean;
  /**
   * Lifts the frame off the page with the panel shadow. For a photograph set
   * into prose, where it should read as laid on the page rather than cut into
   * it. Off inside a card, which is already a raised surface of its own.
   */
  elevated?: boolean;
  /**
   * Which side of the palette the frame's hairline comes from. `inverse` for a
   * photograph sitting on the navy band, where the standard rule is a dark
   * line on a dark ground and simply disappears.
   */
  frame?: "base" | "inverse" | "none";
  /**
   * Pushes the image in slightly on hover, cropped by the frame. The move is
   * small on purpose: a photograph that leaps is a carousel effect, while a
   * few per cent reads as the image settling under the cursor.
   */
  zoom?: boolean;
};

/**
 * The single place next/image is configured. Images are cropped by a ratio box
 * rather than by their intrinsic size, so swapping in a photograph of
 * different dimensions never breaks a layout.
 *
 * An empty `alt` marks the image decorative, and it is then hidden from
 * assistive technology rather than announced as an unnamed image.
 */
export function Figure({
  image,
  sizes,
  priority = false,
  caption,
  className,
  ratio,
  rounded = false,
  elevated = false,
  frame: frameTone = "base",
  zoom = false,
}: FigureProps) {
  const decorative = image.alt === "";

  const frame = (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-soft transition-colors",
        // `none` is for a picture whose edge is drawn by something else — the
        // mihrab outline, for one. A rectangular border under an arch mask
        // survives only along the straight sides and vanishes round the curve,
        // which reads as a frame someone forgot to finish.
        frameTone !== "none" && "border",
        frameTone === "inverse" && "border-line-inverse",
        frameTone === "base" && "border-line",
        // Softer than a card's corner and firmer than a hairline crop. One
        // value for every photograph on the site, so a frame is never a
        // decision a caller has to make twice.
        rounded && "rounded-figure",
        elevated && "shadow-panel",
        // Its own group, so a standalone figure zooms on its own hover; the
        // card group is honoured too, for a figure sitting inside a card.
        zoom && "group/figure hover:border-line-accent",
      )}
      style={{ aspectRatio: ratio ?? `${image.width} / ${image.height}` }}
      {...(decorative ? { "aria-hidden": true } : {})}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover",
          // Three groups, because a zooming picture has three owners: its own
          // frame, the card it sits in, and — for a whole section made one
          // target by a stretched SectionLink — the block around it.
          zoom &&
            "transition-transform duration-500 ease-hover group-hover/figure:scale-[var(--hover-zoom)] group-hover/card:scale-[var(--hover-zoom)] group-hover/block:scale-[var(--hover-zoom)]",
        )}
        style={image.position ? { objectPosition: image.position } : undefined}
      />
    </div>
  );

  if (!caption) {
    return <div className={className}>{frame}</div>;
  }

  return (
    <figure className={className}>
      {frame}
      <figcaption className="mt-4 text-sm leading-relaxed text-content-subtle">
        {caption}
      </figcaption>
    </figure>
  );
}
