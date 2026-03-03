export default function Hero() {
  return (
    <section className="gradient-hero flex min-h-[90vh] items-center pt-16">
      <div className="container py-20 text-center md:py-32">
        <h1 className="fade-up mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-primary-foreground md:text-6xl">
          Mais clientes para sua loja de celular — todos os meses
        </h1>
        <p className="fade-up mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70">
          Anúncios pagos no Google e Instagram + gestão de redes sociais para
          atrair compradores da sua região e transformar seguidores em vendas.
        </p>
        <div className="fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Quero mais vendas
          </a>
          <a
            href="#resultados"
            className="rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60"
          >
            Ver resultados
          </a>
        </div>
      </div>
    </section>
  );
}
