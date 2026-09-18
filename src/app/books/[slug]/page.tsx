import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookCover } from "@/components/books/BookCover";
import { BookSetNote } from "@/components/books/BookSetNote";
import { BookTitleCard } from "@/components/books/BookTitleCard";
import { Price } from "@/components/books/Price";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InlineLink } from "@/components/ui/InlineLink";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { authorNote } from "@/content/books";
import { site } from "@/content/site";
import { bookRetailer, books, getBook, siblingBook } from "@/data/books";
import { coverExists } from "@/lib/book-cover";
import { pageMetadata } from "@/lib/seo";

/**
 * One title, in full.
 *
 * Every route is known at build time and there are two of them, so the whole
 * set is prerendered and anything else 404s rather than being generated on
 * demand — a books route that answers to an arbitrary slug is a route that
 * will eventually be indexed with an arbitrary slug.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/books/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};

  const meta = pageMetadata({
    title: `${book.titleEn} — ${book.titleBn}`,
    description: book.description,
    path: `/books/${book.slug}`,
  });

  // The cover is the right card for a book and a far better one than the
  // site's portrait — but only once the file is actually there. Until then the
  // page keeps the default rather than sharing a broken image.
  if (!coverExists(book.coverImage)) return meta;

  const image = {
    url: book.coverImage,
    alt: `Front cover of ${book.titleEn}`,
  };

  return {
    ...meta,
    openGraph: { ...meta.openGraph, images: [image] },
    twitter: { ...meta.twitter, card: "summary_large_image", images: [image] },
  };
}

/** The specification block. Gold labels, values in the page's ink. */
function Spec({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 border-t border-line-inverse pt-4">
      <dt className="text-eyebrow font-semibold uppercase text-accent-on-inverse">
        {label}
      </dt>
      <dd className="text-ui text-on-inverse">{children}</dd>
    </div>
  );
}

export default async function BookPage({ params }: PageProps<"/books/[slug]">) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const sibling = siblingBook(book.slug);

  /**
   * schema.org Book, built from the supplied fields and nothing else. No
   * offer, no availability, no rating: the retailer's price moves and its
   * stock moves with it, and structured data that asserts either would be
   * wrong within the month while claiming to be authoritative.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.titleBn,
    alternateName: book.titleEn,
    url: `${site.url}/books/${book.slug}`,
    author: { "@type": "Person", name: site.name },
    publisher: { "@type": "Organization", name: book.publisherEn },
    numberOfPages: book.pages,
    ...(book.format === "Hardcover"
      ? { bookFormat: "https://schema.org/Hardcover" }
      : {}),
    datePublished: String(book.year),
    inLanguage: "bn",
    ...(coverExists(book.coverImage)
      ? { image: `${site.url}${book.coverImage}` }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Serialised from local data — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="geo-parallax-host relative isolate overflow-hidden bg-surface-inverse text-on-inverse">
        <span
          aria-hidden="true"
          className="section-veil-inverse pointer-events-none absolute inset-0 -z-10"
        />
        <GeometricPattern intensity="soft" fade="radial" parallax className="-z-10" />

        <Container className="relative pb-16 pt-9 sm:pb-20 sm:pt-11 lg:pb-24 lg:pt-14">
          <nav aria-label="Breadcrumb" className="animate-rise">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ui">
              <li>
                <InlineLink href="/books" tone="inverse">
                  Books
                </InlineLink>
              </li>
              <li aria-hidden="true" className="text-on-inverse-muted">
                /
              </li>
              {/* The current page is the last crumb and is not a link to
                  itself. Bengali, because that is the title. */}
              <li aria-current="page" className="font-bangla text-on-inverse-muted">
                {book.titleBn}
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
            {/* The cover, with the site's thin gold outline set down and to the
                right of it. Not the arch: a mihrab mask over a book cover cuts
                the top corners off the title, and a cover is a designed object
                that should be shown whole. */}
            <div className="lg:col-span-5">
              <div className="animate-rise relative mx-auto w-full max-w-[19rem] lg:max-w-none">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden translate-x-5 translate-y-5 rounded-figure border border-accent-on-inverse/70 sm:block"
                />
                <BookCover
                  book={book}
                  priority
                  size="lg"
                  className="relative"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 19rem, 80vw"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="animate-rise">
                <Eyebrow tone="inverse">{book.seriesEn}</Eyebrow>
              </div>

              <h1
                className="animate-rise mt-7 font-bangla text-display-lg leading-[1.25] text-on-inverse"
                style={{ animationDelay: "80ms" }}
              >
                {book.titleBn}
              </h1>

              <p
                className="animate-rise mt-4 text-lede text-on-inverse-muted"
                style={{ animationDelay: "120ms" }}
              >
                {book.titleEn}
              </p>

              <dl
                className="animate-rise mt-11 grid gap-x-10 gap-y-6 sm:grid-cols-2"
                style={{ animationDelay: "180ms" }}
              >
                <Spec label="Publisher">
                  {book.publisherEn}
                  <span className="font-bangla text-on-inverse-muted">
                    {" "}
                    · {book.publisherBn}
                  </span>
                </Spec>
                <Spec label="Subject">
                  {book.subjectEn}
                  <span className="font-bangla text-on-inverse-muted">
                    {" "}
                    · {book.subjectBn}
                  </span>
                </Spec>
                <Spec label="Pages">{book.pages}</Spec>
                <Spec label="Format">{book.format}</Spec>
                <Spec label="Edition">{book.edition}</Spec>
                <Spec label="Year">{book.year}</Spec>
                {/* The printed list price, and only ever that. The retailer
                    discounts; a discounted figure or a percentage off is a
                    number that is wrong within the month and visibly dates the
                    page. */}
                <Spec label="List price">
                  <Price amount={book.listPrice} currency={book.currency} />
                </Spec>
              </dl>

              <div
                className="animate-rise mt-12"
                style={{ animationDelay: "240ms" }}
              >
                <Button href={book.purchaseUrl} variant="primary" size="lg">
                  Available at {bookRetailer}
                </Button>
                <BookSetNote tone="inverse" className="mt-7 max-w-md" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section
        tone="ivory"
        divider={false}
        index="01"
        indexLabel="About the book"
        accent="gold"
        aria-labelledby="book-about-heading"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                id="book-about-heading"
                title={`Volume ${book.volume} of *${book.seriesEn}*.`}
                accent="gold"
                size="feature"
              />
            </div>

            <div className="flex flex-col gap-6 text-lede text-content-muted lg:col-span-7 lg:pt-2">
              <Reveal>
                <p>{book.description}</p>
              </Reveal>
              {/* The classroom argument, reused rather than restated. It is the
                  same case the books page makes about why he writes at all,
                  and writing a second version of it for each title would be
                  two claims where the record supports one. */}
              {authorNote.body.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 32)} step={i + 1}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {sibling ? (
        <Section
          index="02"
          indexLabel="The other volume"
          accent="gold"
          separator="band"
          aria-labelledby="book-sibling-heading"
        >
          <Container>
            <SectionHeading
              id="book-sibling-heading"
              title="The other *volume*."
              lede="The series runs to two, and they are written to be read in order."
            />
            <Reveal className="mt-14 block max-w-lg lg:mt-16">
              <BookTitleCard book={sibling} />
            </Reveal>
            <Reveal step={1}>
              <BookSetNote className="mt-10 max-w-lg" />
            </Reveal>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
