import Image from "next/image";

import { Container } from "./Container";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { emphasise } from "@/lib/emphasis";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/content/types";

/**
 * How a page opens.
 *
 * `navy` is the default and the quiet one. `photo` runs a photograph full
 * bleed behind the title. `arch` sets one into the masthead beside it.
 * `ornament` is navy with the lattice's own figure at display size, for the
 * page that has no photograph of its own to open on.
 */
type Variant = "navy" | "photo" | "arch" | "ornament";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  variant?: Variant;
  /** Required by `photo` and `arch`. */
  image?: ImageAsset;
  /** Adds the geometric layer. On for `navy` and `arch`; never over a photo. */
  pattern?: boolean;
};

/**
 * The masthead an inner page opens with.
 *
 * Every page used to open on the same pale band with the heading left and the
 * lede right, which made six pages that say very different things look like
 * six instances of one template. They share a rhythm now — eyebrow, title,
 * lede, in that order and at those sizes — and nothing else. Leadership and
 * Media open on their own photograph; Books opens on the arch; Achievements,
 * which has no picture of its own, opens on the lattice's figure.
 *
 * The photographic variants are why `--scrim` exists. A masthead carries a
 * display-sized heading over an image whose brightness nobody controls, so the
 * wash under it is not a mood — it is the thing that guarantees the title can
 * be read.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  variant = "navy",
  image,
  pattern = false,
}: PageHeaderProps) {
  const onDark = variant === "photo" || variant === "navy" || variant === "ornament";

  const heading = (
    <>
      <div className="animate-rise">
        <Eyebrow tone={onDark ? "inverse" : "base"}>{eyebrow}</Eyebrow>
      </div>
      <h1
        className={cn(
          "animate-rise mt-7 text-display-xl",
          onDark ? "text-on-inverse" : "text-content",
        )}
        style={{ animationDelay: "80ms" }}
      >
        {emphasise(title)}
      </h1>
      {lede ? (
        <p
          className={cn(
            "animate-rise mt-7 max-w-2xl text-lede",
            onDark ? "text-on-inverse-muted" : "text-content-muted",
          )}
          style={{ animationDelay: "160ms" }}
        >
          {lede}
        </p>
      ) : null}
    </>
  );

  if (variant === "photo" && image) {
    return (
      <div className="relative isolate overflow-hidden bg-scrim">
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
          style={image.position ? { objectPosition: image.position } : undefined}
        />
        <span
          aria-hidden="true"
          className="scrim-page pointer-events-none absolute inset-0 -z-10"
        />
        <Container className="relative pb-20 pt-20 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32">
          <div className="max-w-3xl">{heading}</div>
        </Container>
      </div>
    );
  }

  if (variant === "arch" && image) {
    return (
      <div className="geo-parallax-host relative isolate overflow-hidden border-b border-line-accent bg-surface-ivory">
        <span
          aria-hidden="true"
          className="section-veil pointer-events-none absolute inset-0 -z-10"
        />
        <GeometricPattern fade="radial" parallax className="-z-10" />
        <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">{heading}</div>
            <div className="lg:col-span-5">
              <div className="mx-auto w-full max-w-xs lg:max-w-none">
                <ImageReveal>
                  <Figure
                    image={image}
                    ratio="1 / 1"
                    priority
                    frame="none"
                    className="overflow-hidden rounded-t-3xl"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 20rem, 80vw"
                  />
                </ImageReveal>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="geo-parallax-host relative isolate overflow-hidden bg-surface-inverse text-on-inverse">
      <span
        aria-hidden="true"
        className="section-veil-inverse pointer-events-none absolute inset-0 -z-10"
      />
      {pattern || variant === "ornament" ? (
        <GeometricPattern
          intensity="soft"
          size={variant === "ornament" ? "xl" : "field"}
          fade="radial"
          parallax
          className="-z-10"
        />
      ) : null}
      <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
        {variant === "ornament" ? (
          <div className="animate-rise mb-9">
            <GeometricStar className="size-20 text-accent-on-inverse sm:size-28" />
          </div>
        ) : null}
        <div className="max-w-3xl">{heading}</div>
      </Container>
    </div>
  );
}
