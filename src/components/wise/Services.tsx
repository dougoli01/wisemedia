import { Target, Megaphone, GraduationCap, Users, Database, Palette } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago",
    subtitle: "Anúncios que trazem cliente pronto pra comprar",
    items: [
      "Campanhas no Instagram e Facebook direcionadas 100% para venda",
      "Retargeting para quem visitou seu perfil mas não comprou",
      "Relatório semanal com dados reais, você vê o retorno do que investiu",
    ],
  },
  {
    icon: Megaphone,
    title: "Gestão de Redes Sociais",
    subtitle: "Perfil que se vende todo dia",
    items: [
      "Conteúdo profissional criado pra gerar prova social e autoridade",
      "Reels e Stories que fazem as pessoas pararem o dedo e mandarem mensagem",
    ],
  },
  {
    icon: GraduationCap,
    title: "Treinamento Comercial",
    subtitle: "Equipe que converte mais, sem precisar dar desconto",
    items: [
      "Treinamento prático de vendas para quem atende no WhatsApp e na loja",
      "Técnicas de fechamento e upsell de acessório que aumentam o ticket médio",
      "Acompanhamento contínuo: seu time evolui todo mês, não só no dia do treino",
    ],
  },
  {
    icon: Users,
    title: "Acompanhamento Comercial",
    subtitle: "Seu estrategista de vendas do lado de fora",
    items: [
      "Reuniões focadas em resultado, sem enrolação, só decisão",
      "Identificamos onde você está perdendo vendas e corrigimos na hora",
      "Suporte direto com a equipe Wise",
    ],
  },
  {
    icon: Database,
    title: "CRM",
    subtitle: "Pare de perder cliente por falta de follow-up",
    items: [
      "Todos os seus leads organizados num funil visual, fácil de acompanhar",
      "Automação de follow-up via WhatsApp",
      "Histórico de interações e compras de cada cliente",
      "Relatórios de conversão e retenção",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    subtitle: "Sua marca tão boa quanto o produto que você vende",
    items: [
      "Edição profissional de fotos de produtos",
      "Criação de vídeos para Reels e Stories",
      "Artes para promoções, banners e catálogos",
      "Identidade visual alinhada à sua marca",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          O que a Wise faz pela sua loja
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="fade-up rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-cta">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{s.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
