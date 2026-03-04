import noeliaLogo from "@/assets/clients/noelia.png";
import winStoreLogo from "@/assets/clients/win-store.png";
import bigAppleLogo from "@/assets/clients/big-apple.png";
import cloudCellLogo from "@/assets/clients/cloud-cell.png";
import icaroLogo from "@/assets/clients/icaro.png";
import aurionLogo from "@/assets/clients/aurion.png";
import misterCaseLogo from "@/assets/clients/mister-case.png";

const cases = [
  { client: "Noelia Store", location: "Brasília, DF", result: "+312% de alcance em 60 dias", logo: noeliaLogo },
  { client: "Barão Apple", location: "Brasília, DF", result: "87 leads qualificados/mês", logo: winStoreLogo },
  { client: "Big Apple", location: "Brasília, DF", result: "+120% de vendas pelo tráfego", logo: bigAppleLogo },
  { client: "Cloud Cell", location: "Brasília, DF", result: "+ de 100 vendas mês", logo: cloudCellLogo },
  { client: "Ícaro Games e Cell", location: "Brasília, DF", result: "+ 150 vendas mês", logo: icaroLogo },
  { client: "Aurion", location: "Cabo Frio, RJ", result: "+130% de crescimento nas redes", logo: aurionLogo },
  { client: "Mister Case", location: "Belo Horizonte, BH", result: "Resultado em breve", logo: misterCaseLogo },
];

function Card({ c }: { c: (typeof cases)[0] }) {
  return (
    <div className="w-[350px] flex-shrink-0 px-3">
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted">
          {c.logo ? (
            <img src={c.logo} alt={`Logo ${c.client}`} className="h-full w-full p-2 object-contain" />
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
  const duplicated = [...cases, ...cases];

  return (
    <section id="resultados" className="py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          Lojas de celular que já cresceram com a Wise
        </h2>
      </div>

      <div className="fade-up relative mt-14 overflow-hidden">
        <div
          className="animate-scroll-left flex w-max"
          style={{ "--scroll-duration": "25s" } as React.CSSProperties}
        >
          {duplicated.map((c, i) => (
            <Card key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
