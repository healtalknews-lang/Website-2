import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="font-playfair text-5xl mb-6">Welcome to Updent Publication</h1>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        Updent Publication offers leading dental literature for professionals and students alike.
      </p>
      <Link
        href="/books/"
        className="inline-block bg-garnet text-paper px-6 py-3 rounded-2xl shadow-card hover:shadow-paper transition focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet"
      >
        Browse our books
      </Link>
    </section>
  );
}
