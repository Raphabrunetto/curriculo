import Link from "next/link";
import {
  FaArrowRight,
  FaCertificate,
  FaCompass,
  FaEnvelopeOpenText,
  FaLayerGroup,
} from "react-icons/fa";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import ResponsivePreviewCard from "@/components/ResponsivePreviewCard";
import { projects } from "@/data/projects";

const navigationHighlights = [
  {
    icon: FaCompass,
    title: "Sobre mim",
    description: "Um resumo completo da minha jornada e dos pilares técnicos.",
    bullets: ["Formação e idiomas", "Habilidades e ferramentas", "Experiência e educação"],
    href: "/sobre",
  },
  {
    icon: FaLayerGroup,
    title: "Projetos",
    description: "Casos reais, stacks utilizadas e o impacto das entregas.",
    bullets: ["Detalhes de cada projeto", "Tecnologias aplicadas", "Links para demos e repos"],
    href: "/projetos",
  },
  {
    icon: FaCertificate,
    title: "Certificados",
    description: "Trilhas de estudo que sustentam meu desenvolvimento contínuo.",
    bullets: ["Cursos e certificações", "Instituições e datas", "Aprendizado em progresso"],
    href: "/certificados",
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Contato",
    description: "Um canal direto para conversar sobre oportunidades e parcerias.",
    bullets: ["WhatsApp e e-mail", "Resposta objetiva", "Convites e projetos"],
    href: "/contato",
  },
];

const deliveryPillars = [
  {
    title: "Automações que liberam tempo",
    description:
      "Scripts e integrações para reduzir tarefas manuais, melhorar resultados e manter o time focado.",
    tags: ["Automação", "APIs", "Workflow"],
  },
  {
    title: "Documentação e colaboração",
    description: "Entrega organizada, alinhamento contínuo e base clara para evoluções.",
    tags: ["README", "Git", "Handoff"],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Imersão no contexto",
    description: "Entendo objetivos, público, restrições e oportunidades antes de propor uma solução.",
  },
  {
    step: "02",
    title: "Arquitetura de Projeto",
    description: "Estruturo o escopo, fluxo, protótipos de telas e valido a hierarquia.",
  },
  {
    step: "03",
    title: "Entrega e iteração",
    description: "Construo, testo e ajusto com base em feedback real.",
  },
];

const highlightProjects = projects.slice(0, 2);

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      <section className="space-y-8">
        <ScrollReveal className="text-center space-y-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#FF7A7A]/90">
            Tópicos
          </span>
          <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            Breve apresentação dos tópicos
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {navigationHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.href} delay={index * 120}>
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/5 neon-border"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-[#FF7A7A]/90">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#E6E6E6]">{item.title}</h3>
                      <p className="text-sm text-[#E6E6E6]/70 mt-1">{item.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-[#E6E6E6]/65">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center text-xs font-semibold tracking-[0.25em] text-[#FF7A7A]/90">
                    Acessar página
                    <FaArrowRight
                      className="ml-2 transition-transform group-hover:translate-x-1"
                      size={12}
                    />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <ScrollReveal className="space-y-4">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#FF7A7A]/90">
            Entregas
          </span>
          <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            O que você encontra quando navega por aqui
          </h2>
          <p className="text-[#E6E6E6]/70">
            Trabalho com foco em clareza, impacto e organização. Cada seção reforça um pedaço da minha forma de construir
            um software.
          </p>
        </ScrollReveal>

        <div className="grid gap-5">
          <ScrollReveal>
            <ResponsivePreviewCard />
          </ScrollReveal>

          {deliveryPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={(index + 1) * 140}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/5">
                <h3 className="text-xl font-semibold text-[#E6E6E6]">{pillar.title}</h3>
                <p className="text-sm text-[#E6E6E6]/70 mt-2">{pillar.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium tracking-[0.15em] text-[#E6E6E6]/60">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <ScrollReveal className="text-center space-y-3">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#FF7A7A]/90">
            Processo
          </span>
          <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            Como estruturo cada entrega
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 140}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#FF7A7A]/90">
                  {step.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[#E6E6E6]">{step.title}</h3>
                <p className="mt-2 text-sm text-[#E6E6E6]/70">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
              Projetos em destaque
            </h2>
            <p className="text-[#E6E6E6]/70 mt-2 max-w-2xl">
              Uma amostra do que venho construindo recentemente. Veja todos os detalhes na página de projetos.
            </p>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center text-sm font-semibold text-[#D14949] hover:text-[#FF7A7A] transition-colors"
          >
            Ver todos
            <FaArrowRight className="ml-2" size={12} />
          </Link>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {highlightProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 140}>
              <Card {...project} highlight />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center neon-border">
          <h3 className="hover-underline text-2xl sm:text-3xl font-semibold text-[#E6E6E6]">
            Vamos construir algo juntos?
          </h3>
          <p className="text-sm sm:text-base text-[#E6E6E6]/70 mt-3 max-w-2xl mx-auto">
            Se você curtiu a proposta da landing page, a conversa continua por aqui. Posso apoiar novas ideias ou me
            integrar a projetos em andamento.
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D14949]/60 bg-[#D14949] px-7 py-3 text-sm font-semibold text-[#E6E6E6] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#D14949]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D14949]"
          >
            Falar comigo
            <FaArrowRight size={14} />
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
