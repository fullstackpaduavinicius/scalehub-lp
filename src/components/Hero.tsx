import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  Target,
} from "lucide-react";

const benefits = [
  "Campanhas planejadas para o momento da sua empresa",
  "Criativos, acompanhamento e otimizações",
  "Decisões baseadas em dados, não em achismo",
];

const structureItems = [
  {
    icon: Target,
    title: "Estratégia",
    description: "Definição da oferta, público e objetivo.",
  },
  {
    icon: MessageCircle,
    title: "Conversas",
    description: "Campanhas focadas em gerar oportunidades.",
  },
  {
    icon: BarChart3,
    title: "Mensuração",
    description: "Acompanhamento para orientar os próximos testes.",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            Tráfego pago para negócios locais
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transforme anúncios em{" "}
            <span className="text-cyan-300">conversas reais</span> com pessoas
            interessadas no que sua empresa oferece.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A Scale Hub planeja, cria e otimiza campanhas para negócios locais
            que querem gerar novas oportunidades pelo WhatsApp sem depender
            apenas de indicação ou impulsionamento.
          </p>

          <div className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 text-sm text-slate-200 sm:text-base"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-center text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Quero saber se o tráfego faz sentido
              <ArrowRight size={19} />
            </a>

            <span className="max-w-xs text-xs leading-5 text-slate-400">
              Responda algumas perguntas e receba uma avaliação inicial, sem
              compromisso.
            </span>
          </div>

          <p className="mt-5 max-w-xl text-xs leading-5 text-slate-500">
            Indicado para empresas que já vendem e desejam investir de forma
            consistente na aquisição de novos clientes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="rounded-3xl border border-white/10 bg-[#0a1018] p-5 shadow-2xl shadow-black/30 sm:p-7">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Antes de anunciar
                </span>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Sua estrutura está pronta?
                </h2>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Target size={24} />
              </div>
            </div>

            <div className="space-y-3">
              {structureItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <p className="text-sm leading-6 text-slate-300">
                Antes de aumentar seu investimento, analisamos onde está o
                verdadeiro gargalo da sua operação comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}