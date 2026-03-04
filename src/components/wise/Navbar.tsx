import { useState } from "react";
import { Menu, X } from "lucide-react";
import wiseLogo from "@/assets/wise-logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg md:top-9">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center">
          <img alt="Wise Media" className="h-12 md:h-14" src="/lovable-uploads/bec464af-0219-4a94-9cbb-5e5b69c4fbc9.png" />
        </a>

        <a
          href="#contato"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Quero vender mais
        </a>
      </div>
    </nav>
  );
}