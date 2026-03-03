import { useEffect, useState } from "react";

const cases = [
  { client: "CelularMix", location: "Taguatinga, DF", result: "+312% de alcance em 60 dias", logo: "" },
  { client: "SmartPhone Center", location: "Goiânia, GO", result: "87 leads qualificados/mês", logo: "" },
  { client: "TechPoint Celulares", location: "Brasília, DF", result: "+5.200 seguidores em 90 dias", logo: "" },
  { client: "MegaCell", location: "Águas Claras, DF", result: "+180% de faturamento em 45 dias", logo: "" },
  { client: "Phone House", location: "Anápolis, GO", result: "62 vendas diretas pelo Instagram", logo: "" },
  { client: "Digital Store", location: "Samambaia, DF", result: "+420% de engajamento orgânico", logo: "" },
  { client: "TopCell Acessórios", location: "Valparaíso, GO", result: "ROI de 8x em campanhas Meta", logo: "" },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="resultados" className="bg-muted py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          Lojas de celular que já cresceram com a Wise
        </h2>

        {/* Carousel */}
        <div className="fade-up relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {cases.map((c, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-10 text-center">
                  {/* Logo */}
                  <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                    {c.logo ? (
                      <img src={c.logo} alt={`Logo ${c.client}`} className="h-full w-full object-contain p-2" />
                    ) : (
                      <span className="text-sm font-bold text-muted-foreground">LOGO</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {c.client} — {c.location}
                  </p>
                  <p className="mt-4 text-2xl font-black text-primary">{c.result}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2.5 bg-border"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
