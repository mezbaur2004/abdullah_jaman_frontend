import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AccentLine } from "@/components/ui/AccentLine";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookCard } from "@/components/books/BookCard";
import { books, booksIntro } from "@/content/books";

/**
 * Authorship as a homepage section in its own right.
 *
 * It renders whether or not any titles have been supplied, and that is
 * deliberate: the authorship itself is confirmed, only the bibliography is
 * outstanding. So the section says what the writing is for — which is on the
 * record — and routes to the page, rather than either inventing titles or
 * pretending the work does not exist.
 *
 * With no titles it is set as type and nothing else, and that is the second
 * deliberate part. It used to fill the empty half with the office photograph,
 * which is the same picture the books page opens with — so a reader following
 * the link arrived at the photograph they had just been looking at. Set as a
 * spread instead, this is the one section on the homepage with no cards and no
 * picture in it, which is worth more to the page than a repeated image.
 */
export function BooksTeaser({ index }: { index?: string }) {
  const featured = books.slice(0, 4);

  return (
    <Section
      tone="ivory"
      index={index}
      indexLabel="Books"
      accent="yellow"
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
                accent="yellow"
                size="feature"
              />
              <Reveal step={1}>
                <div className="mt-10">
                  <Button href="/books" accent="yellow" variant="secondary">
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
          /* The heading takes the left, the argument and the way in take the
             right, and the two meet on a rule — a spread rather than a column
             with a gap beside it. */
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <h2
                  id="books-teaser-heading"
                  className="max-w-xl text-display-xl text-content"
                >
                  {booksIntro.headline}
                </h2>
                <AccentLine accent="yellow" pair className="mt-8" />
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:pt-3">
              <Reveal step={1}>
                <p className="max-w-xl text-lede text-content-muted">
                  {booksIntro.lede}
                </p>
                <div className="mt-10">
                  <Button href="/books" accent="yellow" variant="secondary">
                    About the writing
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
