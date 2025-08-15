import books from '@/data/books.json';
import BookCard from '@/components/BookCard';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Books' };

export default function BooksPage() {
  return (
    <div>
      <SectionHeader title="Books" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </div>
  );
}
