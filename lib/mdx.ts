import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import slugify from 'slugify';
import { Heading } from '@/components/TOC';

export function getHeadings(slug: string): Heading[] {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', `${slug}.mdx`), 'utf8');
  const tree = remark().parse(raw);
  const headings: Heading[] = [];
  visit(tree, 'heading', (node: any) => {
    if (node.depth === 2 || node.depth === 3) {
      const text = node.children.map((n: any) => n.value).join('');
      const id = slugify(text, { lower: true, strict: true });
      headings.push({ id, text, level: node.depth });
    }
  });
  return headings;
}
