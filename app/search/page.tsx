'use client';
import { useEffect, useState } from 'react';
import FlexSearch from 'flexsearch';
import SearchInput from '@/components/SearchInput';
import SearchResults from '@/components/SearchResults';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Search' };

type Item = { type: string; title: string; slug: string; tags: string[]; excerpt: string };

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Item[]>([]);
  const [index, setIndex] = useState<any>(null);
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/search-index.json')
      .then((res) => res.json())
      .then((items: Item[]) => {
        const idx = new (FlexSearch as any).Document({
          document: {
            id: 'slug',
            index: ['title', 'tags', 'excerpt']
          }
        });
        items.forEach((item) => idx.add(item));
        setIndex(idx);
        setData(items);
      });
  }, []);

  useEffect(() => {
    if (!index) return;
    if (!query) {
      setResults([]);
      return;
    }
    const hits = index.search(query, { enrich: true });
    const flat: Item[] = [];
    hits.forEach((h: any) => h.result.forEach((r: any) => flat.push(r.doc)));
    setResults(flat);
  }, [query, index]);

  return (
    <div>
      <SectionHeader title="Search" />
      <SearchInput value={query} onChange={setQuery} />
      <SearchResults results={results} />
    </div>
  );
}
