import { Container } from "./Container";
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
    <div className="relative overflow-hidden border-b border-line-accent bg-surface-accent">
      {pattern ? <GeometricPattern className="inset-x-0 top-0 h-full" /> : null}
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
      </Container>
    </div>
  );
}
