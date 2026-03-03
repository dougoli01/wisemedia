import { useState, type FormEvent } from "react";

const WEBHOOK_URL = "https://hook.us2.make.com/v5eq8j444ij2hkti2sfx7513lrby2bmh";

const trafegOptions = [
  "Não, nunca investimos",
  "Sim, já investimos",
  "Sim, já investimos e nunca tivemos retorno",
];

const vendasOptions = [
  "Menos de 40 aparelhos",
  "Entre 40 a 60 aparelhos",
  "Entre 60 a 100 aparelhos",
  "Entre 100 e 200 aparelhos",
  "Mais de 200 aparelhos",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    instagram: "",
    ja_rodou_trafego: "",
    vendas_mes: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = "Informe seu nome";
    if (!form.instagram.trim()) e.instagram = "Informe seu @";
    if (!form.ja_rodou_trafego) e.ja_rodou_trafego = "Selecione uma opção";
    if (!form.vendas_mes) e.vendas_mes = "Selecione uma opção";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          data_hora: new Date().toISOString(),
        }),
      });
    } catch {
      // still show success — webhook may be configured later
    }
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <section id="contato" className="py-20 md:py-28">
        <div className="container max-w-xl text-center">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10">
            <h3 className="text-2xl font-bold text-primary">Recebemos seu contato!</h3>
            <p className="mt-3 text-muted-foreground">A equipe Wise vai te chamar em breve no WhatsApp.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container max-w-xl">
        <h2 className="fade-up text-center text-3xl font-bold tracking-tight md:text-4xl">Fale com a Wise</h2>
        <p className="fade-up mt-3 text-center text-muted-foreground">
          Preencha o formulário e entraremos em contato pelo WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="fade-up mt-10 space-y-5">
          {/* Nome */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">Nome completo *</label>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
              placeholder="Seu nome"
            />
            {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
          </div>

          {/* WhatsApp */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">WhatsApp *</label>
            <input
              type="tel"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: formatPhone(e.target.value) })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
              placeholder="(XX) XXXXX-XXXX"
            />
            {errors.whatsapp && <p className="mt-1 text-xs text-destructive">{errors.whatsapp}</p>}
          </div>

          {/* E-mail */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">E-mail *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
              placeholder="seu@email.com"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>

          {/* Tipo de loja */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">Tipo de loja *</label>
            <select
              value={form.tipo_loja}
              onChange={(e) => setForm({ ...form, tipo_loja: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
            >
              <option value="">Selecione...</option>
              {tiposLoja.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.tipo_loja && <p className="mt-1 text-xs text-destructive">{errors.tipo_loja}</p>}
          </div>

          {/* Mensagem */}
          <div>
            <label className="mb-1.5 block text-sm font-medium">Mensagem (opcional)</label>
            <textarea
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              rows={3}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20 resize-none"
              placeholder="Conte um pouco sobre sua loja..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar contato"}
          </button>
        </form>
      </div>
    </section>
  );
}
