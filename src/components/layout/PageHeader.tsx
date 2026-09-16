import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { emphasise } from "@/lib/emphasis";
import { GeometricPattern } from "@/components/ui/GeometricPattern";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Adds the geometric layer behind the masthead. Used sparingly. */
  pattern?: boolean;
};

/**
 * The masthead every inner page opens with, so they share one rhythm.
 *
 * It sits on the tinted band rather than plain grey: the inner pages have no
 * hero image, so the colour is what stops them opening on a blank sheet.
 */
export function PageHeader({ eyebrow, title, lede, pattern = false }: PageHeaderProps) {
  return (
    <div className="relative isolate overflow-hidden border-b border-line-accent bg-surface-accent">
      {/* The same depth wash the coloured sections carry, so a page opens on a
          plane rather than on a swatch. */}
      <span
        aria-hidden="true"
        className="section-veil pointer-events-none absolute inset-0 -z-10"
      />
      {pattern ? (
        <GeometricPattern fade="radial" className="-z-10" />
      ) : null}
      <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
        <div className="animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>

        {/* Title and lede as a spread rather than a stack. Set one under the
            other they occupied the left half of the band and left the right
            half empty on every page of the site; side by side, with the lede
            settling onto the title's last line, the masthead fills its width
            and reads the way a title page does. */}
        <div className="mt-7 grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h1
            className="animate-rise text-display-xl text-content lg:col-span-7"
            style={{ animationDelay: "80ms" }}
          >
            {emphasise(title)}
          </h1>
          {lede ? (
            <p
              className="animate-rise max-w-2xl text-lede text-content-muted lg:col-span-5 lg:pb-2"
              style={{ animationDelay: "160ms" }}
            >
              {lede}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
