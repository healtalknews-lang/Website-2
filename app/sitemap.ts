import { MetadataRoute } from 'next';
import books from '@/data/books.json';
import authors from '@/data/authors.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: '/', lastModified: now },
    { url: '/books', lastModified: now },
    ...books.map((b) => ({ url: `/books/${b.slug}`, lastModified: now })),
    { url: '/authors', lastModified: now },
    ...authors.map((a) => ({ url: `/authors/${a.slug}`, lastModified: now })),
    { url: '/services', lastModified: now },
    { url: '/about', lastModified: now },
    { url: '/contact', lastModified: now },
    { url: '/search', lastModified: now }
  ];
}
