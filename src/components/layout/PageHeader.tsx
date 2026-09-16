import { Container } from "./Container";
import { AccentLine } from "@/components/ui/AccentLine";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
        <h1
          className="animate-rise mt-7 max-w-4xl text-display-xl text-content"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {lede ? (
          <p
            className="animate-rise mt-8 max-w-2xl text-lede text-content-muted"
            style={{ animationDelay: "160ms" }}
          >
            {lede}
          </p>
        ) : null}
        <div className="animate-rise mt-9" style={{ animationDelay: "220ms" }}>
          <AccentLine pair />
        </div>
      </Container>
    </div>
  );
}
