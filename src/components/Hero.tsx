import {
  ArrowRight,
  BarChart3,
  
  MessageCircle,
  MousePointerClick,
  Target,
} from "lucide-react";

import { CtaLink } from "./CtaLink";
import { TrackedSection } from "./TrackedSection";

const flowItems = [
  {
    icon: Target,
    label: "Estratégia",
    description: "Oferta, público e direcionamento",
  },
  {
    icon: MousePointerClick,
    label: "Aquisição",
    description: "Campanhas e criativos",
  },
  {
    icon: MessageCircle,
    label: "Conversão",
    description: "Página, formulário e WhatsApp",
  },
  {
    icon: BarChart3,
    label: "Mensuração",
    description: "GA4, eventos e otimização",
  },
];

export function Hero() {
  return (
    <TrackedSection
      id="inicio"
      sectionName="hero"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%)]" />

      <div className="page-container relative grid min-h-[calc(100vh-72px)] items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            Aquisição digital para negócios locais
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transforme anúncios em{" "}
            <span className="text-cyan-300">
              conversas reais
            </span>{" "}
            com pessoas interessadas no que sua empresa oferece.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            A Scale Hub estrutura campanhas, páginas e
            rastreamento para sua empresa parar de depender
            apenas de indicação, impulsionamentos e tentativas
            sem direção.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CtaLink
              href="#diagnostico"
              trackingName="analise_captacao"
              trackingPosition="hero"
            >
              Quero analisar minha captação
              <ArrowRight size={18} />
            </CtaLink>

            <CtaLink
              href="#como-funciona"
              trackingName="entender_metodo"
              trackingPosition="hero"
              variant="secondary"
            >
              Entender como funciona
            </CtaLink>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:gap-6">
            
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/5 blur-3xl" />

          <div className="glass-card relative overflow-hidden p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-sm font-medium text-cyan-300">
                Estrutura conectada
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Do anúncio até a oportunidade comercial
              </h2>
            </div>

            <div className="space-y-4">
              {flowItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={21} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Etapa {index + 1}
                      </p>

                      <h3 className="font-semibold text-white">
                        {item.label}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </TrackedSection>
  );
}