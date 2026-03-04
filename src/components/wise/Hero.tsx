import { MapPin, BarChart3, Share2, GraduationCap } from "lucide-react";

const badges = [
{ icon: MapPin, label: "Brasília, DF" },
{ icon: BarChart3, label: "Meta Ads + Google Ads" },
{ icon: Share2, label: "Gestão de redes" },
{ icon: GraduationCap, label: "Treinamento comercial" }];


export default function Hero() {
  return (
    <section className="gradient-hero flex min-h-[90vh] items-center pt-16">
      <div className="container py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left content */}
          <div>
            <h1 className="fade-up text-4xl font-black leading-tight tracking-tight text-primary-foreground md:text-6xl">
              Mais clientes para sua loja de celular todos os meses.
            </h1>
            <p className="fade-up mt-6 max-w-xl text-lg text-primary-foreground/70">
              A Wise atrai compradores reais para sua loja com anúncios que vendem e redes sociais que constroem autoridade.
            
            </p>
            <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="rounded-lg bg-primary px-8 py-3.5 text-center text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                
                Quero mais vendas agora
              </a>
              <a
                href="#resultados"
                className="rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 text-center text-base font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60">
                
                Ver resultados
              </a>
            </div>
            {/* Badges */}
            <div className="fade-up mt-8 flex flex-wrap gap-3">
              {badges.map((b, i) =>
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2 text-sm text-primary-foreground/80">
                
                  <b.icon className="h-3.5 w-3.5 text-primary" />
                  {b.label}
                </span>
              )}
            </div>
          </div>

          {/* Right illustration */}
          <div className="fade-up hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/30" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 rounded-full bg-primary-foreground/20" />
                    <div className="h-3 w-1/2 rounded-full bg-primary-foreground/10" />
                  </div>
                </div>
                {/* Chart mockup */}
                <div className="mt-6">
                  <svg viewBox="0 0 200 60" className="w-full">
                    <path
                      d="M0 50 Q30 45 50 35 T100 20 T150 25 T200 10"
                      fill="none"
                      stroke="hsl(217 100% 55%)"
                      strokeWidth="2.5"
                      strokeLinecap="round" />
                    
                  </svg>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground/40" />
                  <div className="h-2 w-2 rounded-full bg-primary-foreground/15" />
                  <div className="h-2 w-2 rounded-full bg-primary-foreground/15" />
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -right-4 top-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/40" />
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-20 rounded-full bg-primary-foreground/20" />
                    <div className="h-2.5 w-14 rounded-full bg-primary-foreground/10" />
                    <div className="h-2.5 w-16 rounded-full bg-primary-foreground/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}