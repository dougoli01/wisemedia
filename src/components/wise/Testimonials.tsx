import depoimento1 from "@/assets/testimonials/depoimento-1.png";
import depoimento2 from "@/assets/testimonials/depoimento-2.png";
import depoimento3 from "@/assets/testimonials/depoimento-3.png";
import depoimento4 from "@/assets/testimonials/depoimento-4.png";
import depoimento5 from "@/assets/testimonials/depoimento-5.png";

const testimonials = [
  { src: depoimento1, caption: "164 registros de venda em um mês" },
  { src: depoimento2, caption: "85 aparelhos vendidos em dezembro" },
  { src: depoimento3, caption: "150 aparelhos vendidos no mês" },
  { src: depoimento4, caption: "Cliente lotada pedindo pra segurar o tráfego" },
  { src: depoimento5, caption: "Bateram a meta de 40k em vendas" },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-muted py-20 md:py-28">
      <div className="container">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">
          O que nossos clientes dizem
        </h2>
        <p className="fade-up mt-3 text-center text-muted-foreground">
          Prints reais de quem já cresceu com a Wise
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up flex w-[260px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform hover:scale-[1.02]"
            >
              <div className="flex-1 overflow-hidden">
                <img
                  src={t.src}
                  alt={t.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">
                {t.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
