import { useState } from "react";
import { Menu, X } from "lucide-react";

import { CtaLink } from "./CtaLink";

const navigation = [
  {
    label: "Como funciona",
    href: "#como-funciona",
  },
  {
    label: "Estrutura",
    href: "#estrutura",
  },
  {
    label: "Para quem é",
    href: "#para-quem",
  },
  {
    label: "Perguntas",
    href: "#perguntas",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05080d]/90 backdrop-blur-xl">
      <div className="page-container flex min-h-18 items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Voltar ao início"
        >
          <img
            src="/logo-scalehub.png"
            alt="Scale Hub"
            className="h-10 w-10 rounded-lg object-contain"
          />

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-white">
              SCALE HUB
            </p>

            <p className="text-xs text-slate-400">
              Aquisição e crescimento
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink
            href="#diagnostico"
            trackingName="analise_captacao"
            trackingPosition="header"
          >
            Analisar minha captação
          </CtaLink>
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#05080d] lg:hidden">
          <nav className="page-container flex flex-col gap-2 py-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <CtaLink
              href="#diagnostico"
              trackingName="analise_captacao"
              trackingPosition="menu_mobile"
              className="mt-3"
              onClick={() => setIsOpen(false)}
            >
              Analisar minha captação
            </CtaLink>
          </nav>
        </div>
      )}
    </header>
  );
}