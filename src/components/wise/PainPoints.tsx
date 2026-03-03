import { TrendingDown, DollarSign, Clock } from "lucide-react";

const pains = [
  {
    icon: TrendingDown,
    title: "Pouco movimento na loja",
    desc: "O público está no celular, mas não descobre sua loja. Resultado: balcão vazio e estoque parado.",
  },
  {
    icon: DollarSign,
    title: "Anúncios que só gastam",
    desc: "Você já tentou impulsionar posts no Meta Ads, mas o dinheiro vai e os clientes não aparecem.",
  },
  {
    icon: Clock,
    title: "Sem tempo para marketing",
    desc: "Entre fornecedores, atendimento e caixa, criar conteúdo e gerenciar anúncios fica pra depois ou nunca.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          Sua loja está perdendo clientes
          <br className="hidden sm:block" /> para a concorrência?
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={i}
              className="fade-up rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
