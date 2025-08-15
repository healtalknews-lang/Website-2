'use client';
import Link from 'next/link';

export default function SearchResults({ results }: { results: any[] }) {
  if (!results.length) return <p className="mt-4">No results.</p>;
  return (
    <ul className="mt-4 space-y-4">
      {results.map((r) => (
        <li key={r.slug} className="p-4 bg-white shadow rounded">
          <h3 className="font-playfair text-xl">
            <Link href={r.type === 'book' ? `/books/${r.slug}` : `/${r.slug}`}>
              {r.title}
            </Link>
          </h3>
          <p>{r.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
