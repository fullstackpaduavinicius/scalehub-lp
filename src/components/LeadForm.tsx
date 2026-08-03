import { useRef } from "react";

import {
  CheckCircle2,
  ExternalLink,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { trackEvent } from "../lib/analytics";
import { TrackedSection } from "./TrackedSection";

const googleFormEmbedUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHgEPEnO9JQmyc1BWw_lMXJr81t0MP0k0dlzDq-ILayRl4Ww/viewform?embedded=true";

const googleFormDirectUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHgEPEnO9JQmyc1BWw_lMXJr81t0MP0k0dlzDq-ILayRl4Ww/viewform";

export function LeadForm() {
  const hasTrackedLoad = useRef(false);

  function handleIframeLoad() {
    if (hasTrackedLoad.current) {
      return;
    }

    hasTrackedLoad.current = true;

    trackEvent("google_form_loaded", {
      form_name: "diagnostico_scalehub",
      form_provider: "google_forms",
    });
  }

  function handleOpenDirectForm() {
    trackEvent("google_form_open", {
      form_name: "diagnostico_scalehub",
      click_position: "form_fallback",
      form_provider: "google_forms",
    });
  }

  return (
    <TrackedSection
      id="diagnostico"
      sectionName="formulario_diagnostico"
      className="section-space"
    >
      <div className="page-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Diagnóstico inicial
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Descubra onde sua captação pode estar travando.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Responda algumas perguntas para entendermos o
            momento atual da sua empresa e verificarmos qual
            estrutura faz sentido para sua necessidade.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
            <FileText
              size={22}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-3 font-medium text-white">
              Formulário inicial
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Informações essenciais sobre sua empresa.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
            <ShieldCheck
              size={22}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-3 font-medium text-white">
              Análise responsável
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Sem promessas genéricas ou soluções prontas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
            <CheckCircle2
              size={22}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-3 font-medium text-white">
              Próximo passo claro
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Entraremos em contato caso exista compatibilidade.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#f5f7fb] shadow-2xl shadow-black/30">
          <div className="border-b border-slate-200 bg-white px-5 py-4 text-center">
            <p className="text-sm font-medium text-slate-700">
              Diagnóstico de aquisição — Scale Hub
            </p>
          </div>

          <iframe
            src={googleFormEmbedUrl}
            title="Formulário de diagnóstico inicial da Scale Hub"
            width="100%"
            height="2600"
            loading="lazy"
            onLoad={handleIframeLoad}
            referrerPolicy="strict-origin-when-cross-origin"
            className="block w-full border-0 bg-[#f5f7fb]"
          >
            Carregando formulário…
          </iframe>
        </div>

        <div className="mx-auto mt-6 max-w-4xl text-center">
          <p className="text-sm leading-6 text-slate-500">
            Caso o formulário não apareça corretamente, você
            pode abri-lo diretamente em uma nova aba.
          </p>

          <a
            href={googleFormDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenDirectForm}
            className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Abrir formulário em nova aba
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </TrackedSection>
  );
}