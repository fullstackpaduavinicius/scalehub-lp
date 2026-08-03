import { ChevronDown } from "lucide-react";

import { TrackedSection } from "./TrackedSection";

const questions = [
  {
    question:
      "A estratégia funciona para qualquer segmento?",
    answer:
      "Não necessariamente. Demanda, região, ticket, capacidade de atendimento e concorrência precisam ser avaliados antes de recomendar uma campanha.",
  },
  {
    question: "Preciso já ter um site?",
    answer:
      "Não. Dependendo da estratégia, podemos utilizar uma landing page, formulário, WhatsApp ou melhorar uma estrutura que já existe.",
  },
  {
    question: "A Scale Hub garante vendas?",
    answer:
      "Não existe garantia responsável de vendas. Os anúncios podem gerar interesse e oportunidades, mas o resultado também depende da oferta, atendimento, preço e capacidade comercial.",
  },
  {
    question: "Quanto preciso investir em anúncios?",
    answer:
      "O valor depende do segmento, da região, da concorrência e do objetivo. A recomendação é apresentada após o diagnóstico.",
  },
  {
    question: "Como os resultados são acompanhados?",
    answer:
      "Utilizamos rastreamento de eventos, dados das plataformas de anúncios e ferramentas como o GA4 para analisar a jornada do visitante.",
  },
];

export function FaqSection() {
  return (
    <TrackedSection
      id="perguntas"
      sectionName="faq"
      className="section-space border-t border-white/10 bg-white/[0.02]"
    >
      <div className="page-container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Perguntas frequentes
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Antes de solicitar o diagnóstico
            </h2>
          </div>

          <div className="space-y-4">
            {questions.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white">
                  {item.question}

                  <ChevronDown className="shrink-0 transition group-open:rotate-180" />
                </summary>

                <p className="mt-4 pr-8 leading-7 text-slate-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </TrackedSection>
  );
}