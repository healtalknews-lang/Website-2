import Link from 'next/link';
import Image from 'next/image';
import Badge from './Badge';

export default function BookCard({ book }: { book: any }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="book-card block focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet"
    >
      {book.cover && (
        <div className="mb-4 overflow-hidden rounded-xl border border-line/50">
          <Image
            src={book.cover}
            alt={`Cover of ${book.title}`}
            width={300}
            height={400}
            className="w-full h-auto"
          />
        </div>
      )}
      <h3 className="font-playfair text-xl mb-2">{book.title}</h3>
      <div className="flex flex-wrap gap-1">
        {book.tags.map((tag: string) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Link>
  );
}
