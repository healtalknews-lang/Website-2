const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { remark } = require('remark');
const strip = require('strip-markdown');

async function build() {
  const books = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'data', 'books.json'), 'utf8')
  );
  const bookEntries = books.map((b) => ({
    type: 'book',
    title: b.title,
    slug: b.slug,
    tags: b.tags,
    excerpt: b.excerpt
  }));

  const pages = ['about', 'services'];
  const mdxEntries = [];
  for (const slug of pages) {
    const raw = fs.readFileSync(path.join(process.cwd(), 'content', `${slug}.mdx`), 'utf8');
    const { data, content } = matter(raw);
    const text = await remark().use(strip).process(content);
    mdxEntries.push({
      type: 'page',
      title: data.title,
      slug,
      tags: data.tags || [],
      excerpt: String(text).slice(0, 160)
    });
  }

  const index = [...bookEntries, ...mdxEntries];
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'search-index.json'),
    JSON.stringify(index, null, 2)
  );
}

build();
