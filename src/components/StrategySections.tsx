import type { LucideIcon } from "lucide-react";

import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Gauge,
  LayoutTemplate,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Search,
  Target,
  Users,
  XCircle,
} from "lucide-react";

import { TrackedSection } from "./TrackedSection";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

const problems = [
  "Movimento irregular durante o mês",
  "Dependência excessiva de indicações",
  "Impulsionamentos sem saber o que funcionou",
  "Contatos que chegam, mas não avançam",
  "Campanhas sem acompanhamento claro",
  "Dificuldade para identificar a origem dos clientes",
];

export function ProblemSection() {
  return (
    <TrackedSection
      id="problema"
      sectionName="problema"
      className="section-space"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="O verdadeiro problema"
          title="Seu problema pode não ser falta de divulgação."
          description="Pode ser falta de uma estrutura que transforme divulgação em oportunidades comerciais."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <XCircle
                size={22}
                className="text-rose-300"
              />

              <p className="mt-4 leading-7 text-slate-300">
                {problem}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7 text-center sm:p-10">
          <p className="text-xl font-medium leading-8 text-white">
            Quando anúncio, página, atendimento e mensuração
            não trabalham juntos, o resultado depende mais de
            tentativa do que de estratégia.
          </p>
        </div>
      </div>
    </TrackedSection>
  );
}

interface MethodItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const methodItems: MethodItem[] = [
  {
    icon: Search,
    title: "Direcionamento estratégico",
    description:
      "Analisamos serviço, público, região, ticket, capacidade de atendimento e objetivo comercial.",
  },
  {
    icon: Megaphone,
    title: "Aquisição",
    description:
      "Estruturamos campanhas e direcionamos os criativos para alcançar pessoas com maior potencial de interesse.",
  },
  {
    icon: MousePointerClick,
    title: "Conversão",
    description:
      "Organizamos o caminho entre o anúncio, a landing page, o formulário e o contato comercial.",
  },
  {
    icon: BarChart3,
    title: "Mensuração e otimização",
    description:
      "Acompanhamos eventos, comportamento e conversões para orientar as próximas decisões.",
  },
];

export function MethodSection() {
  return (
    <TrackedSection
      id="como-funciona"
      sectionName="metodo"
      className="section-space border-y border-white/10 bg-white/[0.02]"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="Método Scale Hub"
          title="Anunciar não é apenas colocar dinheiro em uma campanha."
          description="É construir um caminho coerente entre atenção, interesse, contato e acompanhamento."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {methodItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="glass-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={23} />
                  </div>

                  <span className="text-sm font-semibold text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </TrackedSection>
  );
}

const structureItems: MethodItem[] = [
  {
    icon: Target,
    title: "Planejamento de campanha",
    description:
      "Definição do objetivo, público, oferta, canais e orçamento.",
  },
  {
    icon: Megaphone,
    title: "Gestão de anúncios",
    description:
      "Configuração, monitoramento, testes e otimizações.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing page",
    description:
      "Construção ou melhoria da página usada para conversão.",
  },
  {
    icon: MessageCircle,
    title: "Fluxo de contato",
    description:
      "Organização do caminho até formulário, WhatsApp ou atendimento.",
  },
  {
    icon: BarChart3,
    title: "GA4 e eventos",
    description:
      "Rastreamento das ações relevantes realizadas na página.",
  },
  {
    icon: Gauge,
    title: "Análise e otimização",
    description:
      "Uso dos dados para definir o que manter, corrigir ou ampliar.",
  },
];

export function StructureSection() {
  return (
    <TrackedSection
      id="estrutura"
      sectionName="estrutura"
      className="section-space"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="Estrutura completa"
          title="Sua empresa não precisa apenas de anúncios."
          description="Precisa de uma estrutura conectada, capaz de transformar atenção em oportunidades que possam ser acompanhadas."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {structureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-400/25"
              >
                <Icon
                  size={24}
                  className="text-cyan-300"
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </TrackedSection>
  );
}

const idealClients = [
  "Já possui uma operação funcionando",
  "Oferece um serviço com demanda real",
  "Tem capacidade para atender novos contatos",
  "Deseja depender menos de indicação",
  "Procura entender os resultados dos anúncios",
  "Aceita testar, acompanhar e melhorar o processo",
];

const notIdealClients = [
  "Procura uma promessa de vendas imediatas",
  "Não pretende atender os contatos recebidos",
  "Acredita que somente o anúncio resolverá tudo",
  "Não possui capacidade para receber novos clientes",
  "Não aceita testar ou ajustar a estratégia",
];

export function AudienceSection() {
  return (
    <TrackedSection
      id="para-quem"
      sectionName="publico_ideal"
      className="section-space border-y border-white/10 bg-white/[0.02]"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="Compatibilidade"
          title="A estratégia precisa combinar com o momento da empresa."
          description="Nem todo negócio está pronto para investir em aquisição. O diagnóstico também serve para identificar isso."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <Users className="text-emerald-300" />

              <h3 className="text-xl font-semibold text-white">
                A Scale Hub pode fazer sentido se você:
              </h3>
            </div>

            <div className="mt-7 space-y-4">
              {idealClients.map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-emerald-300"
                  />

                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-rose-400/15 bg-rose-400/[0.025] p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <XCircle className="text-rose-300" />

              <h3 className="text-xl font-semibold text-white">
                Provavelmente não é a escolha certa se você:
              </h3>
            </div>

            <div className="mt-7 space-y-4">
              {notIdealClients.map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <XCircle
                    size={19}
                    className="mt-1 shrink-0 text-rose-300"
                  />

                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </TrackedSection>
  );
}

const trackedData = [
  "Origem dos visitantes",
  "Criativos que despertaram interesse",
  "Profundidade de rolagem",
  "Seções visualizadas",
  "Cliques nos botões",
  "Inícios de formulário",
  "Solicitações enviadas",
  "Cliques para o WhatsApp",
];

export function MeasurementSection() {
  return (
    <TrackedSection
      id="mensuracao"
      sectionName="mensuracao"
      className="section-space"
    >
      <div className="page-container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Mensuração
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Marketing sem mensuração vira opinião.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            O objetivo não é acumular números. É entender o
            comportamento dos visitantes e tomar decisões com
            base no que realmente está acontecendo.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trackedData.map((item) => (
              <p
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-slate-300"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-cyan-300"
                />

                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-slate-400">
                Visão da aquisição
              </p>

              <h3 className="mt-1 text-xl font-semibold text-white">
                Jornada do visitante
              </h3>
            </div>

            <BarChart3 className="text-cyan-300" />
          </div>

          <div className="mt-7 space-y-5">
            {[
              ["Visitaram a página", "100%"],
              ["Visualizaram a solução", "72%"],
              ["Chegaram ao formulário", "38%"],
              ["Iniciaram o formulário", "21%"],
              ["Enviaram a solicitação", "12%"],
            ].map(([label, value], index) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">
                    {label}
                  </span>

                  <span className="text-white">
                    {value}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-cyan-300"
                    style={{
                      width: `${100 - index * 18}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-slate-500">
            Dados ilustrativos. Os resultados reais serão
            medidos pelo GA4 e pelas plataformas de anúncios.
          </p>
        </div>
      </div>
    </TrackedSection>
  );
}

const processItems: MethodItem[] = [
  {
    icon: ClipboardCheck,
    title: "Formulário inicial",
    description:
      "Coletamos informações básicas sobre empresa, serviço e objetivo.",
  },
  {
    icon: Users,
    title: "Reunião de diagnóstico",
    description:
      "Aprofundamos os pontos mais importantes em uma conversa online.",
  },
  {
    icon: FileSearch,
    title: "Identificação dos gargalos",
    description:
      "Avaliamos oferta, anúncios, página, atendimento e mensuração.",
  },
  {
    icon: Target,
    title: "Recomendação",
    description:
      "Indicamos uma estrutura compatível com o momento da empresa.",
  },
];

export function ProcessSection() {
  return (
    <TrackedSection
      id="processo"
      sectionName="processo"
      className="section-space border-y border-white/10 bg-white/[0.02]"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="Primeiro contato"
          title="Um processo simples antes de qualquer proposta."
          description="O objetivo é compreender a empresa antes de recomendar campanhas, páginas ou investimentos."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#080d15] p-6"
              >
                <span className="text-sm font-bold text-cyan-300">
                  0{index + 1}
                </span>

                <Icon
                  size={24}
                  className="mt-6 text-white"
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </TrackedSection>
  );
}