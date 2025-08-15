import books from '@/data/books.json';
import SectionHeader from '@/components/SectionHeader';
import Badge from '@/components/Badge';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const book = books.find((b) => b.slug === params.slug);
  return { title: book ? book.title : 'Book' };
}

export default function BookDetail({ params }: Props) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) return notFound();
  return (
    <div className="prose">
      <SectionHeader title={book.title} />
      <p>{book.excerpt}</p>
      <div className="space-x-1">
        {book.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
