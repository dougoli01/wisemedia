export default function Footer() {
  return (
    <footer className="border-t border-border bg-wise-black py-12 text-primary-foreground/70">
      <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-2xl font-black text-primary-foreground">Wise</p>
          <p className="mt-1 text-sm">Marketing que vende para lojas de celular.</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary-foreground"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary-foreground"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-xs">© 2026 Wise Agência. Brasília, DF.</p>
      </div>
    </footer>
  );
}
