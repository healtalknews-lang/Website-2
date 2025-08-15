import Link from 'next/link';
import Image from 'next/image';

export default function AuthorCard({ author }: { author: any }) {
  return (
    <Link
      href={`/authors/${author.slug}`}
      className="block rounded-2xl p-6 bg-gradient-to-br from-paper to-paper/60 dark:from-ink dark:to-ink/80 shadow-card transition-transform transform-gpu motion-safe:hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet"
    >
      {author.image && (
        <div className="mb-4 w-32 h-32 mx-auto overflow-hidden rounded-full ring-2 ring-line">
          <Image
            src={author.image}
            alt={author.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="font-playfair text-xl text-center">{author.name}</h3>
    </Link>
  );
}
