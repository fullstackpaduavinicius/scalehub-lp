import {
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

import { trackEvent } from "../lib/analytics";

export function FixedActions() {
  const whatsappNumber = (
    import.meta.env.VITE_WHATSAPP_NUMBER ?? ""
  ).replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site da Scale Hub e gostaria de entender melhor como funciona a análise inicial.",
  );

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : "#";

  function handleWhatsAppClick() {
    trackEvent("click_whatsapp", {
      click_position: "fixed_button",
      button_label: "fale_conosco_whatsapp",
    });

    if (!whatsappNumber) {
      console.warn(
        "Configure VITE_WHATSAPP_NUMBER no arquivo .env.local.",
      );
    }
  }

  function handleFormClick() {
    trackEvent("cta_click", {
      cta_name: "analise_inicial",
      cta_position: "fixed_button",
      cta_destination: "#diagnostico",
    });
  }

  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target={whatsappNumber ? "_blank" : undefined}
        rel={
          whatsappNumber
            ? "noopener noreferrer"
            : undefined
        }
        onClick={handleWhatsAppClick}
        aria-label="Fale conosco no WhatsApp"
        className="group flex min-h-13 items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/30 transition duration-200 hover:-translate-y-1 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#05080d] sm:px-5"
      >
        <MessageCircle
          size={22}
          className="shrink-0"
        />

        <span className="hidden whitespace-nowrap sm:inline">
          Fale conosco no WhatsApp
        </span>
      </a>

      <a
        href="#diagnostico"
        onClick={handleFormClick}
        aria-label="Ir para análise inicial"
        className="group flex min-h-13 items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-black/30 transition duration-200 hover:-translate-y-1 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#05080d] sm:px-5"
      >
        <ClipboardCheck
          size={22}
          className="shrink-0"
        />

        <span className="hidden whitespace-nowrap sm:inline">
          Análise inicial
        </span>
      </a>
    </div>
  );
}