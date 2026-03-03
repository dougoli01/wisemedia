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

// Triple the array for infinite illusion
const extendedCases = [...cases, ...cases, ...cases];

function Card({ c }: { c: (typeof cases)[0] }) {
  return (
    <div className="w-1/3 flex-shrink-0 px-3">
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
          {c.logo ? (
            <img src={c.logo} alt={`Logo ${c.client}`} className="h-full w-full object-contain p-2" />
          ) : (
            <span className="text-sm font-bold text-muted-foreground">LOGO</span>
          )}
        </div>
        <p className="text-sm font-semibold text-muted-foreground">
          {c.client} — {c.location}
        </p>
        <p className="mt-3 text-xl font-black text-primary md:text-2xl">{c.result}</p>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const [offset, setOffset] = useState(cases.length); // start at first clone set
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // When we reach the end of the second set, silently jump back
  useEffect(() => {
    if (offset >= cases.length * 2) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setOffset(cases.length);
        // Re-enable transition on next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setTransition(true));
        });
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [offset]);

  const translateX = -(offset * (100 / 3));

  return (
    <section id="resultados" className="bg-muted py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          Lojas de celular que já cresceram com a Wise
        </h2>

        {/* Desktop: 3 cards */}
        <div className="fade-up relative mt-14 hidden overflow-hidden md:block">
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: transition ? "transform 700ms ease-in-out" : "none",
            }}
          >
            {extendedCases.map((c, i) => (
              <Card key={i} c={c} />
            ))}
          </div>
        </div>

        {/* Mobile: 1 card */}
        <div className="fade-up relative mt-14 overflow-hidden md:hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(${-(offset * 100)}%)`,
              transition: transition ? "transform 700ms ease-in-out" : "none",
            }}
          >
            {extendedCases.map((c, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2">
                <div className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
                    {c.logo ? (
                      <img src={c.logo} alt={`Logo ${c.client}`} className="h-full w-full object-contain p-2" />
                    ) : (
                      <span className="text-sm font-bold text-muted-foreground">LOGO</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {c.client} — {c.location}
                  </p>
                  <p className="mt-3 text-xl font-black text-primary">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
