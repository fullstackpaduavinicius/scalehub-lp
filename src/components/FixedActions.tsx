import { ArrowRight } from "lucide-react";

export default function FixedActions() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#05080d]/95 p-3 backdrop-blur-xl lg:hidden">
        <a
          href="#diagnostico"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 text-sm font-black text-slate-950"
        >
          Solicitar análise inicial
          <ArrowRight size={18} />
        </a>
      </div>

      <a
        href="#diagnostico"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 shadow-2xl shadow-cyan-950/40 transition hover:-translate-y-1 hover:bg-cyan-300 lg:flex"
      >
        Solicitar análise
        <ArrowRight size={18} />
      </a>
    </>
  );
}