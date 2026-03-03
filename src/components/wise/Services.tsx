import { Target, Megaphone, GraduationCap, Users, Database, Palette } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago",
    subtitle: "Meta Ads & Google Ads",
    items: [
      "Campanhas no Instagram e Facebook para compradores da sua região",
      "Anúncios no Google quando o cliente pesquisa 'loja de celular perto'",
      "Retargeting para quem visitou seu perfil mas não comprou",
      "Relatórios semanais com métricas reais de vendas",
    ],
  },
  {
    icon: Megaphone,
    title: "Gestão de Redes Sociais",
    subtitle: "Instagram & Facebook",
    items: [
      "Criação de conteúdo profissional para seu perfil",
      "Calendário editorial alinhado com lançamentos e promoções",
      "Stories e Reels que geram engajamento e autoridade local",
      "Respostas estratégicas nos comentários e DM",
    ],
  },
  {
    icon: GraduationCap,
    title: "Treinamento Comercial",
    subtitle: "Capacitação da equipe",
    items: [
      "Treinamento de vendas para sua equipe de atendimento",
      "Scripts de abordagem para WhatsApp e loja física",
      "Técnicas de fechamento e upsell de acessórios",
      "Acompanhamento contínuo da evolução do time",
    ],
  },
  {
    icon: Users,
    title: "Acompanhamento Comercial",
    subtitle: "Consultoria estratégica",
    items: [
      "Reuniões periódicas de performance e resultados",
      "Análise de métricas de vendas e conversão",
      "Ajustes estratégicos baseados em dados reais",
      "Suporte direto com a equipe Wise",
    ],
  },
  {
    icon: Database,
    title: "CRM",
    subtitle: "Gestão de clientes",
    items: [
      "Organização de leads e clientes em funil de vendas",
      "Automação de follow-up via WhatsApp",
      "Histórico de interações e compras de cada cliente",
      "Relatórios de conversão e retenção",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    subtitle: "Edição de fotos e vídeos",
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
