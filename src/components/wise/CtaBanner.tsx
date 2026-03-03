export default function CtaBanner() {
  return (
    <section className="gradient-cta py-20 md:py-24">
      <div className="container text-center">
        <h2 className="fade-up text-3xl font-bold text-primary-foreground md:text-4xl">
          Pronto para sua loja vender mais?
        </h2>
        <p className="fade-up mt-4 text-lg text-primary-foreground/80">
          Fale com a Wise e receba uma proposta personalizada.
        </p>
        <a
          href="#contato"
          className="fade-up mt-8 inline-block rounded-lg bg-primary-foreground px-8 py-3.5 text-base font-semibold text-primary transition-opacity hover:opacity-90"
        >
          Quero minha proposta
        </a>
      </div>
    </section>
  );
}
