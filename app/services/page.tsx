import Content from '@/content/services.mdx';
import { getHeadings } from '@/lib/mdx';
import TOC from '@/components/TOC';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  const headings = getHeadings('services');
  return (
    <div className="flex gap-8">
      <div className="prose flex-1">
        <SectionHeader title="Services" />
        <Content />
      </div>
      <div className="hidden md:block w-48">
        <TOC headings={headings} />
      </div>
    </div>
  );
}
