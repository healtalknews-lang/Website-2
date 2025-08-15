import Content from '@/content/about.mdx';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="prose">
      <SectionHeader title="About" />
      <Content />
    </div>
  );
}
