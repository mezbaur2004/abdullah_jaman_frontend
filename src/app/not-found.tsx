import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-7 max-w-2xl text-display-xl text-ink-900">
        This page does not exist.
      </h1>
      <p className="mt-7 max-w-lg text-lede text-ink-600">
        The link may be out of date, or the page may have moved. The main
        sections of the site are all reachable from the navigation above.
      </p>
      <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="secondary">
          Contact Abdullah
        </Button>
      </div>
    </Container>
  );
}
