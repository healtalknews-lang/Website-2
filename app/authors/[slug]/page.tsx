import authors from '@/data/authors.json';
import books from '@/data/books.json';
import SectionHeader from '@/components/SectionHeader';
import BookCard from '@/components/BookCard';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const author = authors.find((a) => a.slug === params.slug);
  return { title: author ? author.name : 'Author' };
}

export default function AuthorDetail({ params }: Props) {
  const author = authors.find((a) => a.slug === params.slug);
  if (!author) return notFound();
  const written = books.filter((b) => b.author === author.slug);
  return (
    <div className="prose">
      <SectionHeader title={author.name} />
      <p>{author.bio}</p>
      <h2 className="font-playfair text-2xl mt-4">Books</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-2">
        {written.map((b) => (
          <BookCard key={b.slug} book={b} />
        ))}
      </div>
    </div>
  );
}
