import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFBF5',
        garnet: '#A10D1E',
        charcoal: '#333333',
        ink: '#111418',
        paper: '#F8F5EF',
        line: '#E7E1D6'
      },
      boxShadow: {
        paper: '0 1px 2px rgba(0,0,0,0.03), 0 4px 6px rgba(0,0,0,0.02)',
        card: '0 2px 4px rgba(0,0,0,0.05), 0 8px 12px rgba(0,0,0,0.04)'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        inter: ['var(--font-inter)']
      },
      fontSize: {
        sm: ['clamp(0.875rem, 0.85rem + 0.2vw, 0.95rem)', { lineHeight: '1.6' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.7' }],
        lg: ['clamp(1.125rem, 1rem + 0.5vw, 1.25rem)', { lineHeight: '1.7' }],
        xl: ['clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem)', { lineHeight: '1.2' }],
        '2xl': ['clamp(1.5rem, 1.2rem + 1vw, 1.875rem)', { lineHeight: '1.2' }],
        '3xl': ['clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)', { lineHeight: '1.1' }],
        '4xl': ['clamp(2.25rem, 1.8rem + 2vw, 2.75rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(3rem, 2.5rem + 2.5vw, 3.5rem)', { lineHeight: '1' }]
      },
      keyframes: {
        'fade-slide': {
          from: { opacity: 0, transform: 'translateY(4px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-slide': 'fade-slide 150ms ease-in-out'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '80rem'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
