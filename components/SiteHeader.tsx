'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const nav = [
  { href: '/books', label: 'Books' },
  { href: '/authors', label: 'Authors' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/search', label: 'Search' }
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-paper' : ''} bg-paper/90 dark:bg-ink/90`}>
      <nav className="container max-w-7xl flex items-center gap-4 py-3">
        <Link href="/" className="font-playfair text-2xl mr-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet rounded-2xl">
          Updent Publication
        </Link>
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className={`px-2 py-1 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-garnet ${pathname === n.href ? 'text-garnet dark:text-garnet font-semibold' : 'hover:text-garnet'}`}
          >
            {n.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
