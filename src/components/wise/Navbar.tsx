import { useState } from "react";
import { Menu, X } from "lucide-react";
import wiseLogo from "@/assets/wise-logo.png";

const navLinks = [
{ label: "Serviços", href: "#servicos" },
{ label: "Resultados", href: "#resultados" },
{ label: "Contato", href: "#contato" }];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg md:top-9">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center">
          <img alt="Wise Media" className="h-12 md:h-14" src="/lovable-uploads/bec464af-0219-4a94-9cbb-5e5b69c4fbc9.png" />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            
              {l.label}
            </a>
          )}
          <a
            href="#contato"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            
            Quero vender mais 
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu">
          
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="block py-3 text-sm font-medium text-muted-foreground">
          
              {l.label}
            </a>
        )}
          <a
          href="#contato"
          onClick={() => setOpen(false)}
          className="mt-2 block rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground">
          
            Quero mais vendas
          </a>
        </div>
      }
    </nav>);

}