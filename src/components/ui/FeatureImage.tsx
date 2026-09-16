import { ArchFrame } from "./ArchFrame";
import { Figure } from "./Figure";
import { ImageReveal } from "./ImageReveal";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/content/types";

type FeatureImageProps = {
  image: ImageAsset;
  caption?: string;
  /** Set on the one that is above the fold for its page. */
  priority?: boolean;
  /** Crops the photograph to a ratio instead of using its own. */
  ratio?: string;
  /**
   * Cuts the photograph to the mihrab arch instead of a rectangle. For the one
   * or two pictures on a page that are carrying it; a page of arches is a
   * motif that has stopped meaning anything.
   */
  arch?: boolean;
  className?: string;
};

/**
 * A single photograph set into a page, at the width of the column it sits in.
 *
 * Deliberately without the hover zoom a card's image carries. The line is by
 * category rather than by whether the image is clickable — neither is. A card
 * is a target and a small push-in rewards the cursor arriving on it; an image
 * set into a page is illustrating the prose around it, and something that
 * moves under the cursor there is an effect competing with the reading.
 *
 * The frame is a raised plane rather than a hairline box: a rounded edge, a
 * border and a panel shadow, so a photograph reads as laid on the page rather
 * than cut into it. The caption sits under a short accent rule on the same
 * axis as every other mark on the page.
 */
export function FeatureImage({
  image,
  caption,
  priority = false,
  ratio,
  arch = false,
  className,
}: FeatureImageProps) {
  const picture = (
    // The reveal wrapper clips, so it holds the frame alone — with the caption
    // inside it the opening wipe would take the first line of text with it.
    <ImageReveal className={arch ? undefined : "rounded-figure"}>
      <Figure
        image={image}
        caption={undefined}
        priority={priority}
        ratio={ratio}
        rounded={!arch}
        elevated={!arch}
        frame={arch ? "none" : "base"}
        // One column wide at every breakpoint, capped at the container's own
        // maximum so the largest screens do not fetch more than they show.
        sizes="(min-width: 1280px) 1152px, (min-width: 640px) 92vw, 90vw"
      />
    </ImageReveal>
  );

  const frame = arch ? <ArchFrame>{picture}</ArchFrame> : picture;

  if (!caption) return <div className={cn(className)}>{frame}</div>;

  return (
    <figure className={cn(className)}>
      {frame}
      <Reveal step={1}>
        <figcaption className="mt-5 flex gap-4 text-sm leading-relaxed text-content-subtle">
          <span
            aria-hidden="true"
            className="mt-2 h-0.5 w-7 shrink-0 bg-gold opacity-80"
          />
          <span className="max-w-xl">{caption}</span>
        </figcaption>
      </Reveal>
    </figure>
  );
}
