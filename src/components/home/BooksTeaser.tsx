import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookCard } from "@/components/books/BookCard";
import { books, booksIntro } from "@/content/books";
import { booksFeature } from "@/content/profile";

/**
 * Authorship as a homepage section in its own right.
 *
 * It renders whether or not any titles have been supplied, and that is
 * deliberate: the authorship itself is confirmed, only the bibliography is
 * outstanding. So the section says what the writing is for — which is on the
 * record — and routes to the page, rather than either inventing titles or
 * pretending the work does not exist.
 */
export function BooksTeaser({ index }: { index?: string }) {
  const featured = books.slice(0, 4);

  return (
    <Section
      tone="ivory"
      index={index}
      indexLabel="Books"
      accent="yellow"
      aria-labelledby="books-teaser-heading"
    >
      <Container className="relative">
        <GeometricPattern className="-top-10 hidden h-64 lg:block" fade />

        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              id="books-teaser-heading"
              title={booksIntro.headline}
              lede={booksIntro.lede}
              accent="yellow"
              size="feature"
            />
            <Reveal step={1}>
              <div className="mt-10">
                <Button href="/books" accent="yellow" variant="secondary">
                  {books.length > 0 ? "View all books" : "About the writing"}
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            {featured.length > 0 ? (
              <ul className="grid gap-5 sm:grid-cols-2">
                {featured.map((book, i) => (
                  <li key={book.title}>
                    <Reveal step={i}>
                      <BookCard book={book} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : (
              // With no titles to show, the photograph carries the column, so
              // it is framed rather than dropped in.
              <OffsetFrame>
                <ImageReveal className="rounded-[0.75rem]">
                  <Figure
                    image={booksFeature}
                    rounded
                    elevated
                    sizes="(min-width: 1024px) 46vw, 90vw"
                  />
                </ImageReveal>
              </OffsetFrame>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
