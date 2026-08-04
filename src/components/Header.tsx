import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Método", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Investimento", href: "#investimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05080d]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Ir para o início"
        >
          <img
            src="/logo-scalehub.png"
            alt="Scale Hub"
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#diagnostico"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Solicitar análise
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070b11] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#diagnostico"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950"
            >
              Solicitar análise inicial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}