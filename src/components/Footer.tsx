import { BarChart3, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030509] px-5 pb-28 pt-12 lg:px-8 lg:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <img
            src="/logo-scalehub.png"
            alt="Scale Hub"
            className="h-11 w-auto object-contain"
          />

          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
            Estratégia, tráfego pago e análise de dados para negócios que
            desejam transformar anúncios em oportunidades comerciais.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">
            Navegação
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
            <a href="#problema" className="transition hover:text-cyan-300">
              O problema
            </a>

            <a href="#solucao" className="transition hover:text-cyan-300">
              Como ajudamos
            </a>

            <a href="#metodo" className="transition hover:text-cyan-300">
              Método P.A.C.
            </a>

            <a href="#investimento" className="transition hover:text-cyan-300">
              Investimento
            </a>

            <a href="#diagnostico" className="transition hover:text-cyan-300">
              Solicitar análise
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">
            Nosso compromisso
          </h3>

          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3 text-sm leading-6 text-slate-500">
              <BarChart3
                size={18}
                className="mt-0.5 shrink-0 text-cyan-300"
              />

              <span>Decisões orientadas por dados.</span>
            </div>

            <div className="flex items-start gap-3 text-sm leading-6 text-slate-500">
              <MessageCircle
                size={18}
                className="mt-0.5 shrink-0 text-cyan-300"
              />

              <span>Atendimento e acompanhamento direto.</span>
            </div>

            <div className="flex items-start gap-3 text-sm leading-6 text-slate-500">
              <Mail
                size={18}
                className="mt-0.5 shrink-0 text-cyan-300"
              />

              <span>Comunicação clara durante toda a campanha.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Scale Hub. Todos os direitos reservados.</p>

        <p>Tráfego pago, estratégia e mensuração.</p>
      </div>
    </footer>
  );
}