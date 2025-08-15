import authors from '@/data/authors.json';
import AuthorCard from '@/components/AuthorCard';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Authors' };

export default function AuthorsPage() {
  return (
    <div>
      <SectionHeader title="Authors" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {authors.map((author) => (
          <AuthorCard key={author.slug} author={author} />
        ))}
      </div>
    </div>
  );
}
