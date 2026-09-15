import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
};

/** The masthead every inner page opens with, so they share one rhythm. */
export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <div className="border-b border-ink-900/10">
      <Container className="pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
        <div className="animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          className="animate-rise mt-7 max-w-4xl text-display-xl text-ink-900"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {lede ? (
          <p
            className="animate-rise mt-8 max-w-2xl text-lede text-ink-600"
            style={{ animationDelay: "160ms" }}
          >
            {lede}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
