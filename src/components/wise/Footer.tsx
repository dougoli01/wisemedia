import wiseLogo from "@/assets/wise-logo.png";

export default function Footer() {
  const whatsappMsg = encodeURIComponent("Olá, tudo bem? Vim do site e queria um atendimento mais rápido.");
  const whatsappUrl = `https://wa.me/5561981504925?text=${whatsappMsg}`;

  return (
    <footer className="border-t border-border bg-wise-black py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <a href="#" className="inline-block">
            <img src={wiseLogo} alt="Wise Media" className="h-8 brightness-0 invert" />
          </a>
          <p className="mt-2 text-sm text-primary-foreground/60">Marketing que vende para lojas de celular.</p>
          <p className="mt-1 text-xs text-primary-foreground/40">© 2026 Wise Agência. Brasília, DF.</p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/wisemedia_"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-primary-foreground/20 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Instagram
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-primary-foreground/20 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
