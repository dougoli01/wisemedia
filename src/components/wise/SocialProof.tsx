const cases = [
  {
    client: "CelularMix — Taguatinga, DF",
    result: "+312% de alcance em 60 dias",
    desc: "Com tráfego pago local e conteúdo diário, a loja triplicou o alcance e bateu recorde de vendas no trimestre.",
  },
  {
    client: "SmartPhone Center — Goiânia, GO",
    result: "87 leads qualificados/mês",
    desc: "Campanhas no Google Ads geraram contatos quentes diretamente no WhatsApp da loja, com custo por lead abaixo de R$5.",
  },
  {
    client: "TechPoint Celulares — Brasília, DF",
    result: "+5.200 seguidores em 90 dias",
    desc: "Gestão de redes sociais transformou o perfil da loja em referência local de acessórios e assistência técnica.",
  },
];

export default function SocialProof() {
  return (
    <section id="resultados" className="bg-muted py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          Lojas de celular que já crescem com a Wise
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={i}
              className="fade-up rounded-2xl border border-border bg-card p-8"
            >
              <p className="text-sm font-semibold text-muted-foreground">{c.client}</p>
              <p className="mt-4 text-2xl font-black text-primary">{c.result}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
