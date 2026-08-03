import { ArrowRight } from "lucide-react";

import { CtaLink } from "./CtaLink";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="page-container py-16">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Próxima decisão
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Sua empresa não precisa apenas anunciar mais.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Precisa entender o que anunciar, para quem e como
            transformar o investimento em oportunidades.
          </p>

          <CtaLink
            href="#diagnostico"
            trackingName="analise_captacao"
            trackingPosition="footer"
            className="mt-8"
          >
            Quero analisar minha captação
            <ArrowRight size={18} />
          </CtaLink>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/logo-scalehub.png"
              alt=""
              className="h-8 w-8 object-contain"
            />

            <span>Scale Hub</span>
          </div>

          <p>
            © {new Date().getFullYear()} Scale Hub. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}