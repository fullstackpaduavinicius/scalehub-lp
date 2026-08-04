import type { LucideIcon } from "lucide-react";

import {
  Activity,
  BarChart3,
  CheckCircle2,
  Crosshair,
  Gauge,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  XCircle,
} from "lucide-react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

type CardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   BARRA DE CONFIANÇA
========================================================= */

export function TrustBar() {
  const items = [
    {
      icon: UserRoundCheck,
      label: "Atendimento direto",
    },
    {
      icon: Target,
      label: "Estratégia personalizada",
    },
    {
      icon: Activity,
      label: "Acompanhamento",
    },
    {
      icon: BarChart3,
      label: "Mensuração",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-5 sm:grid-cols-4 lg:px-8">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 px-2 py-3 text-center text-xs font-semibold text-slate-300 sm:text-sm"
            >
              <Icon
                size={18}
                className="shrink-0 text-cyan-300"
              />

              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEMAS
========================================================= */

export function ProblemSection() {
  const problems: CardItem[] = [
    {
      icon: UserRoundCheck,
      title: "Dependência de indicação",
      description:
        "Quando as indicações diminuem, o movimento e as oportunidades também diminuem.",
    },
    {
      icon: MousePointerClick,
      title: "Impulsionamentos sem estratégia",
      description:
        "Você investe em publicações, mas não consegue identificar o que realmente gera retorno.",
    },
    {
      icon: MessageCircle,
      title: "Contatos sem qualidade ou acompanhamento",
      description:
        "As pessoas chegam, mas poucas avançam porque anúncio, oferta e atendimento não estão alinhados.",
    },
  ];

  return (
    <section
      id="problema"
      className="scroll-mt-24 px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="O verdadeiro problema"
          title="Seu problema pode não ser falta de divulgação"
          description="Muitos negócios já publicam, impulsionam e recebem alguns contatos. O problema é não existir uma estrutura que transforme atenção em oportunidades comerciais."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <article
                key={problem.title}
                className="rounded-2xl border border-white/10 bg-[#0a1018] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-400/10 text-rose-300">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {problem.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-center">
          <p className="text-sm leading-6 text-slate-200 sm:text-base">
            Tráfego pago não corrige sozinho uma oferta confusa, uma
            comunicação fraca ou um atendimento lento. Por isso analisamos o
            conjunto antes de aumentar o investimento.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   OFERTA + TRANSPARÊNCIA + RESPONSÁVEL
========================================================= */

export function OfferSection() {
  const deliveries = [
    "Diagnóstico inicial do negócio e da oferta",
    "Definição do público e da estratégia",
    "Configuração das campanhas",
    "Criação e adaptação dos anúncios",
    "Acompanhamento e otimizações",
    "Relatório mensal simplificado",
  ];

  const monitoringItems = [
    "O que foi testado",
    "O que apresentou melhor resposta",
    "Quais ajustes foram realizados",
    "Qual será o próximo teste",
  ];

  return (
    <section
      id="solucao"
      className="scroll-mt-24 border-y border-white/10 bg-[#080d14] px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="A solução"
              title="O que a Scale Hub faz pela sua empresa"
              description="Criamos uma estrutura simples de aquisição para atrair pessoas, gerar conversas e melhorar os resultados com base no que os dados mostram."
              align="left"
            />

            <div className="mt-7 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={21}
                  className="mt-0.5 shrink-0 text-amber-300"
                />

                <p className="text-sm leading-6 text-slate-300">
                  Não trabalhamos com promessa de vendas garantidas.
                  Trabalhamos com planejamento, execução, acompanhamento e
                  melhoria contínua.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {deliveries.map((delivery) => (
              <div
                key={delivery}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <span className="text-sm leading-6 text-slate-200">
                  {delivery}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-[#0a1018] p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <BarChart3 size={22} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Transparência
                </span>

                <h3 className="mt-1 text-xl font-black text-white">
                  Você saberá o que está sendo feito
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              O acompanhamento mostra o desempenho da campanha e explica as
              decisões realizadas durante o período.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {monitoringItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-cyan-300"
                  />

                  <span className="text-sm leading-5 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0a1018] p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-cyan-300/30 bg-cyan-400/10">
  <img
    src="/foto perfil scale.jpeg"
    alt="Vinicius de Pádua, responsável pela estratégia da Scale Hub"
    className="h-full w-full object-cover object-center"
    loading="lazy"
  />
</div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Atendimento direto
                </span>

                <h3 className="mt-1 text-xl font-black text-white">
                  Estratégia conduzida por Ivan Pádua
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Planejamento, campanhas, páginas e mensuração conduzidos
                  diretamente por quem executa a estratégia.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Gestão de tráfego",
                "Páginas de conversão",
                "Mensuração de dados",
                "Desenvolvimento web",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <Sparkles
                    size={16}
                    className="shrink-0 text-cyan-300"
                  />

                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
              <p className="text-sm leading-6 text-slate-300">
                Sem repasses para atendentes que não conhecem sua campanha.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MÉTODO
========================================================= */

export function MethodSection() {
  const method: CardItem[] = [
    {
      icon: Crosshair,
      title: "P — Posicionamento",
      description:
        "Definimos público, oferta, diferenciais e a mensagem da campanha.",
    },
    {
      icon: Megaphone,
      title: "A — Aquisição",
      description:
        "Criamos anúncios para alcançar pessoas com potencial de compra.",
    },
    {
      icon: TrendingUp,
      title: "C — Conversão",
      description:
        "Analisamos como os contatos chegam e avançam até uma oportunidade.",
    },
  ];

  return (
    <section
      id="metodo"
      className="scroll-mt-24 px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Método P.A.C."
          title="Tráfego não começa no anúncio"
          description="Posicionamento, aquisição e conversão precisam funcionar em conjunto."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {method.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1018] p-6"
              >
                <span className="absolute right-5 top-3 text-6xl font-black text-white/[0.03]">
                  {index + 1}
                </span>

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 rounded-2xl border border-rose-400/20 bg-rose-400/5 px-6 py-5 text-center">
          <p className="font-bold leading-7 text-white">
            Quando uma dessas etapas falha, aumentar o orçamento apenas aumenta
            o desperdício.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PARA QUEM É
========================================================= */

export function AudienceSection() {
  const positive = [
    "Já possui um produto ou serviço validado",
    "Já realiza vendas",
    "Consegue atender clientes pelo WhatsApp",
    "Está disposto a investir, testar e melhorar",
  ];

  const negative = [
    "Espera resultado garantido em poucos dias",
    "Não pretende investir em mídia",
    "Não possui capacidade de atendimento",
    "Procura apenas impulsionar uma publicação",
  ];

  return (
    <section
      id="para-quem"
      className="scroll-mt-24 border-y border-white/10 bg-[#080d14] px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Qualificação"
          title="A Scale Hub faz sentido para sua empresa?"
          description="O serviço foi pensado para negócios que já vendem e possuem estrutura mínima para transformar contatos em oportunidades."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <CheckCircle2 size={22} />
              </div>

              <h3 className="text-xl font-black text-white">
                Faz sentido para empresas que:
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {positive.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-300"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-rose-400/20 bg-rose-400/5 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-400/10 text-rose-300">
                <XCircle size={22} />
              </div>

              <h3 className="text-xl font-black text-white">
                Não faz sentido para quem:
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {negative.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <XCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-rose-300"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INVESTIMENTO
========================================================= */

export function InvestmentSection() {
  const plans = [
    {
      packageNumber: "Pacote 01",
      name: "Scale Ads",
      price: "1.297,90",
      icon: BarChart3,
      recommended: false,
      badge: "Estrutura + tráfego pago",
      idealFor:
        "Para empresas que precisam organizar sua estrutura digital e começar a gerar oportunidades com campanhas acompanhadas.",
      inheritance: null,
      included: [
        "Landing page estratégica e copy base",
        "Instalação de Pixel e Google Analytics 4",
        "Configuração dos eventos principais",
        "Estrutura inicial de conversão",
        "Direcionamento comercial da oferta",
        "Recomendação de CTA e fluxo de contato",
        "Gestão de tráfego pago",
        "Criação e acompanhamento de campanhas",
        "Leitura de métricas e otimização contínua",
        "Ajustes de oferta e comunicação",
        "Relatório e acompanhamento mensal",
      ],
      notIncluded: [
        "Produção recorrente de conteúdo",
        "Gestão completa de posicionamento orgânico",
        "Operação mensal de social media",
      ],
      buttonText: "Quero estruturar minhas campanhas",
    },
    {
      packageNumber: "Pacote 02",
      name: "Scale Growth",
      price: "1.987,90",
      icon: TrendingUp,
      recommended: true,
      badge: "Mais indicado",
      idealFor:
        "Para empresas que querem gerar leads e melhorar também a qualidade da comunicação, da oferta e da conversão.",
      inheritance: "Tudo do pacote Scale Ads +",
      included: [
        "Direcionamento estratégico de posicionamento",
        "Leitura aprofundada da comunicação",
        "Ajustes mais recorrentes de oferta",
        "Visão integrada entre anúncio, página e marca",
        "Acompanhamento próximo da evolução do funil",
        "Análise da qualidade das oportunidades geradas",
        "Relatório e acompanhamento quinzenal",
      ],
      notIncluded: [
        "Execução mensal de conteúdo robusto",
        "Operação completa de social media",
        "Produção recorrente e edição mensal de vídeos",
      ],
      buttonText: "Quero crescer com estratégia",
    },
    {
      packageNumber: "Pacote 03",
      name: "Scale Growth Plus",
      price: "2.777,80",
      icon: Sparkles,
      recommended: false,
      badge: "Tráfego + conteúdo",
      idealFor:
        "Para empresas que precisam integrar aquisição, posicionamento, conversão e produção recorrente de conteúdo.",
      inheritance: "Tudo do pacote Scale Growth +",
      included: [
        "Planejamento mensal de conteúdo",
        "Desenvolvimento de legendas",
        "Produções gráficas para redes sociais",
        "Edição de vídeos",
        "Produção de 8 a 12 conteúdos por mês",
        "Documento de planejamento para aprovação",
        "Integração do conteúdo com anúncios e oferta",
        "Acompanhamento da comunicação da marca",
      ],
      notIncluded: [
        "Publicação dos conteúdos pela equipe",
        "Cobertura presencial de eventos e atividades",
        "Produções audiovisuais fora do planejamento mensal",
      ],
      buttonText: "Quero tráfego e conteúdo integrados",
    },
  ];

  return (
    <section
      id="investimento"
      className="scroll-mt-24 px-5 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Planos Scale Hub"
          title="Escolha o nível de estrutura que sua empresa precisa"
          description="Os planos evoluem conforme a necessidade do negócio: começando pela estrutura de aquisição, avançando para a conversão e chegando à integração entre tráfego, posicionamento e conteúdo."
        />

        <div className="mt-5 text-center">
          <p className="text-sm leading-6 text-slate-500">
            A recomendação final será feita após uma análise inicial da
            estrutura, dos objetivos e do momento atual da empresa.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border transition duration-300 ${
                  plan.recommended
                    ? "border-fuchsia-400/60 bg-gradient-to-b from-fuchsia-400/10 via-[#0a1018] to-[#0a1018] shadow-2xl shadow-fuchsia-950/30 lg:-translate-y-4"
                    : "border-white/10 bg-[#0a1018] hover:-translate-y-1 hover:border-white/20"
                }`}
              >
                {plan.recommended && (
                  <div className="bg-fuchsia-500 px-5 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-white">
                    Plano mais indicado
                  </div>
                )}

                <div className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`text-xs font-black uppercase tracking-[0.18em] ${
                          plan.recommended
                            ? "text-fuchsia-300"
                            : "text-cyan-300"
                        }`}
                      >
                        {plan.packageNumber}
                      </span>

                      <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        plan.recommended
                          ? "bg-fuchsia-400/15 text-fuchsia-300"
                          : "bg-cyan-400/10 text-cyan-300"
                      }`}
                    >
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-bold ${
                        plan.recommended
                          ? "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200"
                          : "border-white/10 bg-white/[0.03] text-slate-300"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <p className="mt-5 min-h-[120px] text-sm leading-6 text-slate-400 lg:min-h-[144px]">
                    {plan.idealFor}
                  </p>

                  <div className="mt-6 border-y border-white/10 py-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Investimento
                    </p>

                    <div className="mt-2 flex items-end gap-2">
                      <span className="pb-1 text-lg font-bold text-slate-400">
                        R$
                      </span>

                      <span className="text-4xl font-black tracking-tight text-white">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {plan.inheritance && (
                    <div
                      className={`mt-6 rounded-xl border p-4 ${
                        plan.recommended
                          ? "border-fuchsia-400/25 bg-fuchsia-400/5"
                          : "border-cyan-400/20 bg-cyan-400/5"
                      }`}
                    >
                      <p
                        className={`text-sm font-black uppercase tracking-[0.08em] ${
                          plan.recommended
                            ? "text-fuchsia-300"
                            : "text-cyan-300"
                        }`}
                      >
                        {plan.inheritance}
                      </p>
                    </div>
                  )}

                  <div className="mt-6">
                    <h4 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                      Incluso no pacote
                    </h4>

                    <div className="mt-4 space-y-3">
                      {plan.included.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <CheckCircle2
                            size={18}
                            className={`mt-0.5 shrink-0 ${
                              plan.recommended
                                ? "text-fuchsia-300"
                                : "text-cyan-300"
                            }`}
                          />

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-rose-400/15 bg-rose-400/5 p-5">
                    <h4 className="text-xs font-black uppercase tracking-[0.14em] text-rose-300">
                      Não incluso
                    </h4>

                    <div className="mt-4 space-y-3">
                      {plan.notIncluded.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-xs leading-5 text-slate-400"
                        >
                          <XCircle
                            size={16}
                            className="mt-0.5 shrink-0 text-rose-300"
                          />

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-7">
                    <a
                      href="#diagnostico"
                      aria-label={`Solicitar análise para o plano ${plan.name}`}
                      className={`inline-flex min-h-14 w-full items-center justify-center rounded-xl px-5 py-4 text-center text-sm font-black transition ${
                        plan.recommended
                          ? "bg-fuchsia-500 text-white hover:bg-fuchsia-400"
                          : "border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400 hover:text-slate-950"
                      }`}
                    >
                      {plan.buttonText}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-cyan-300"
            />

            <div>
              <p className="text-sm font-bold text-white">
                Escopo definido antes do início
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                A contratação será formalizada por contrato, com definição das
                responsabilidades, entregas, condições e limites do pacote
                escolhido.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-5xl rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5">
          <p className="text-xs leading-5 text-slate-400">
            No Scale Growth Plus, os conteúdos serão produzidos após a aprovação
            do planejamento. A publicação dos materiais pela equipe pode ser
            contratada separadamente.
          </p>
        </div>
      </div>
    </section>
  );
}
/* =========================================================
   PROCESSO
========================================================= */

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico",
      description:
        "Você responde algumas perguntas sobre sua empresa e seu objetivo.",
    },
    {
      icon: MessageCircle,
      number: "02",
      title: "Conversa inicial",
      description:
        "Avaliamos a viabilidade e alinhamos expectativas e investimento.",
    },
    {
      icon: Settings2,
      number: "03",
      title: "Preparação",
      description:
        "Estruturamos a campanha, os anúncios e a mensuração.",
    },
    {
      icon: Gauge,
      number: "04",
      title: "Acompanhamento",
      description:
        "Monitoramos o desempenho e realizamos os próximos ajustes.",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-[#080d14] px-5 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Processo"
          title="Como funciona"
          description="Um caminho simples desde a análise inicial até o acompanhamento das campanhas."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-[#0a1018] p-6"
              >
                <span className="absolute right-5 top-5 text-sm font-black text-cyan-300/50">
                  {step.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-lg font-black text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}