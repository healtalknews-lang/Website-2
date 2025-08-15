export default function SectionHeader({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-playfair mb-6 tracking-wide" style={{ fontVariant: 'small-caps' }}>
      {title}
    </h1>
  );
}
