import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const questions = [
  {
    question: "O valor dos anúncios está incluído?",
    answer:
      "Não. O investimento em mídia é pago diretamente à plataforma de anúncios e fica separado do valor da gestão da Scale Hub.",
  },
  {
    question: "Em quanto tempo terei resultados?",
    answer:
      "O desempenho depende do segmento, da oferta, do investimento, da concorrência e do atendimento. Os primeiros períodos são utilizados para coletar dados e realizar ajustes. Não trabalhamos com prazo ou resultado garantido.",
  },
  {
    question: "Preciso ter um site?",
    answer:
      "Nem todos os projetos precisam começar com um site. Essa necessidade será avaliada de acordo com o objetivo da campanha e a estrutura atual da empresa.",
  },
  {
    question: "A Scale Hub cria os anúncios?",
    answer:
      "Sim. O serviço inclui a criação ou adaptação dos anúncios necessários, respeitando as entregas e os limites do plano contratado.",
  },
  {
    question: "A Scale Hub garante vendas?",
    answer:
      "Não. Nenhuma empresa séria pode garantir vendas. A Scale Hub garante planejamento, execução, acompanhamento, otimizações e transparência sobre os resultados.",
  },
  {
    question: "Quem responde os contatos recebidos?",
    answer:
      "O atendimento dos potenciais clientes permanece sob responsabilidade da empresa contratante. A velocidade e a qualidade desse atendimento influenciam diretamente os resultados.",
  },
  {
    question: "As contas de anúncios ficam em nome de quem?",
    answer:
      "Sempre que possível, as contas, páginas, pixels e demais ativos digitais permanecem sob propriedade da empresa contratante.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="scroll-mt-24 border-y border-white/10 bg-[#080d14] px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Perguntas frequentes
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
            Tire suas principais dúvidas
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Transparência antes da contratação evita expectativas erradas
            durante a campanha.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1018]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-cyan-300 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 py-5 sm:px-6">
                    <p className="text-sm leading-7 text-slate-400">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-9 text-center">
          <p className="text-sm leading-6 text-slate-400">
            Ainda está em dúvida se o serviço combina com o momento da sua
            empresa?
          </p>

          <a
            href="#diagnostico"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Solicitar análise inicial
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}