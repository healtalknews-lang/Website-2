import { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-garnet text-paper text-[0.65rem] px-2 py-1 rounded-2xl tracking-wide" style={{ fontVariant: 'small-caps' }}>
      {children}
    </span>
  );
}
