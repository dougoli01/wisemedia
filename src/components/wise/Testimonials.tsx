export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          O que nossos clientes dizem
        </h2>
        <p className="fade-up mt-3 text-center text-muted-foreground">
          Veja depoimentos reais de quem já cresceu com a Wise
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder cards for videos/prints */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="fade-up flex aspect-[9/16] max-h-[480px] items-center justify-center rounded-2xl border border-border bg-card"
            >
              <div className="text-center text-muted-foreground">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Depoimento {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
