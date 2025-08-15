import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug]
  }
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true
};

export default withMDX(nextConfig);
