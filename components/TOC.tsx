'use client';
import { useState } from 'react';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TOC({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(true);
  return (
    <aside className="sticky top-4">
      <button
        className="mb-2 text-garnet underline"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Hide' : 'Show'} Contents
      </button>
      {open && (
        <ul className="text-sm">
          {headings.map((h) => (
            <li key={h.id} style={{ marginLeft: h.level === 3 ? '1rem' : 0 }}>
              <a href={`#${h.id}`} className="hover:underline">
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
