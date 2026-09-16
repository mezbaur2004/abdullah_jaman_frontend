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
 * One framing treatment, whichever shape it takes: the picture, and a thin
 * gold outline set down and to the right of it. The arch pictures had that
 * outline and the rectangular ones did not, which meant the site held two
 * different ideas about what a framed photograph looks like and used them
 * three sections apart.
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

  const frame = arch ? (
    <ArchFrame>{picture}</ArchFrame>
  ) : (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden translate-x-5 translate-y-5 rounded-figure border border-gold/70 sm:block"
      />
      <div className="relative">{picture}</div>
    </div>
  );

  if (!caption) return <div className={cn(className)}>{frame}</div>;

  return (
    <figure className={cn(className)}>
      {frame}
      <Reveal step={1}>
        {/* Small italic serif under a short gold rule. A caption is an aside
            in the author's voice rather than another line of interface, and
            the display face in italic is what says so. */}
        <figcaption className="mt-6 flex gap-4 font-display text-sm italic leading-relaxed text-content-muted sm:text-base">
          <span
            aria-hidden="true"
            className="mt-2.5 h-0.5 w-8 shrink-0 bg-gold"
          />
          <span className="max-w-xl">{caption}</span>
        </figcaption>
      </Reveal>
    </figure>
  );
}
