'use client';
export default function SearchInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 w-full rounded"
      placeholder="Search..."
    />
  );
}
