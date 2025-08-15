import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import type { Metadata } from 'next';
import Script from 'next/script';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Updent Publication',
    template: '%s | Updent Publication'
  },
  description: 'Dental book publisher.',
  openGraph: {
    title: 'Updent Publication',
    description: 'Dental book publisher.',
    images: '/og.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <Script id="theme-script" strategy="beforeInteractive">{`
          (function(){
            const stored = localStorage.getItem('theme');
            const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.dataset.theme = stored || prefers;
          })();
        `}</Script>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main" className="container max-w-7xl p-4 motion-safe:animate-fade-slide">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
