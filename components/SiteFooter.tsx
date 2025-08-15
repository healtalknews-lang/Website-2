export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper dark:bg-ink text-charcoal dark:text-line text-sm">
      <div className="container max-w-7xl py-8 text-center">
        <span style={{ fontVariant: 'small-caps' }}>
          © {new Date().getFullYear()} Updent Publication
        </span>
      </div>
    </footer>
  );
}
