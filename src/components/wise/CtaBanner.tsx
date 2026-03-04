export default function CtaBanner() {
  return (
    <section className="bg-muted py-20 md:py-24">
      <div className="container text-center">
        <h2 className="fade-up text-3xl font-bold text-foreground md:text-4xl">
          Pronto para sua loja vender mais?
        </h2>
        <p className="fade-up mt-4 text-lg text-muted-foreground">
          Fale com a Wise e receba uma proposta personalizada.
        </p>
        <a
          href="#contato"
          className="fade-up mt-8 inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Quero minha proposta
        </a>
      </div>
    </section>
  );
}
