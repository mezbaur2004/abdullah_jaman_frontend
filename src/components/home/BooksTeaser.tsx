import { Container } from "@/components/layout/Container";
import { emphasise } from "@/lib/emphasis";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Figure } from "@/components/ui/Figure";
import { ImageReveal } from "@/components/ui/ImageReveal";
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
 *
 * With no titles it is the argument and the office photograph, cut to the
 * arch. That photograph also opens the books page, so a reader following the
 * link meets it twice — a real cost, and the one the owner weighed when asking
 * for it here. A books section with no picture on a page where every other
 * section has one read as an aside, and the repeat is the cheaper problem.
 */
export function BooksTeaser({ index }: { index?: string }) {
  const featured = books.slice(0, 4);

  return (
    <Section
      tone="ivory"
      index={index}
      indexLabel="Books"
      accent="gold"
      pattern
      aria-labelledby="books-teaser-heading"
    >
      <Container>
        {featured.length > 0 ? (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                id="books-teaser-heading"
                title={booksIntro.headline}
                lede={booksIntro.lede}
                accent="gold"
                size="feature"
              />
              <Reveal step={1}>
                <div className="mt-10">
                  <Button href="/books" accent="gold" variant="secondary">
                    View all books
                  </Button>
                </div>
              </Reveal>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {featured.map((book, i) => (
                <li key={book.title}>
                  <Reveal step={i}>
                    <BookCard book={book} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          /* Text and photograph, not text and a gap. The section carried no
             image at all, which on a page where every other section has one
             made thebooks band read as an aside. */
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <h2
                  id="books-teaser-heading"
                  className="max-w-xl text-display-xl text-content"
                >
                  {emphasise(booksIntro.headline)}
                </h2>
              </Reveal>

              <Reveal step={1}>
                <p className="mt-9 max-w-xl text-lede text-content-muted">
                  {booksIntro.lede}
                </p>
                <div className="mt-11">
                  <Button href="/books" accent="gold" variant="secondary">
                    About the writing
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <ArchFrame className="mx-auto w-full max-w-sm lg:max-w-none">
                <ImageReveal>
                  <Figure
                    image={booksFeature}
                    ratio="4 / 5"
                    frame="none"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 24rem, 90vw"
                  />
                </ImageReveal>
              </ArchFrame>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
