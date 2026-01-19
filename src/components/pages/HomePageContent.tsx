"use client";

import Link from 'next/link';
import {
  FaArrowRight,
  FaCertificate,
  FaCompass,
  FaEnvelopeOpenText,
  FaLayerGroup,
} from 'react-icons/fa';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import ScrollReveal from '@/components/ScrollReveal';
import ResponsivePreviewCard from '@/components/ResponsivePreviewCard';
import { projectsByLocale } from '@/data/projects';
import { useLanguage } from '@/components/LanguageProvider';

const HomePageContent = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const navigationHighlights = isEnglish
    ? [
        {
          icon: FaCompass,
          title: 'About me',
          description: 'A complete summary of my journey and technical pillars.',
          bullets: ['Education and languages', 'Skills and tools', 'Experience and background'],
          href: '/sobre',
        },
        {
          icon: FaLayerGroup,
          title: 'Projects',
          description: 'Real cases, stacks used, and delivery impact.',
          bullets: ['Project details', 'Applied technologies', 'Links to demos and repos'],
          href: '/projetos',
        },
        {
          icon: FaCertificate,
          title: 'Certificates',
          description: 'Learning tracks that support my continuous development.',
          bullets: ['Courses and certifications', 'Institutions and dates', 'Learning in progress'],
          href: '/certificados',
        },
        {
          icon: FaEnvelopeOpenText,
          title: 'Contact',
          description: 'A direct channel to discuss opportunities and partnerships.',
          bullets: ['WhatsApp and email', 'Clear responses', 'Invitations and projects'],
          href: '/contato',
        },
      ]
    : [
        {
          icon: FaCompass,
          title: 'Sobre mim',
          description: 'Um resumo completo da minha jornada e dos pilares técnicos.',
          bullets: ['Formação e idiomas', 'Habilidades e ferramentas', 'Experiência e educação'],
          href: '/sobre',
        },
        {
          icon: FaLayerGroup,
          title: 'Projetos',
          description: 'Casos reais, stacks utilizadas e o impacto das entregas.',
          bullets: ['Detalhes de cada projeto', 'Tecnologias aplicadas', 'Links para demos e repos'],
          href: '/projetos',
        },
        {
          icon: FaCertificate,
          title: 'Certificados',
          description: 'Trilhas de estudo que sustentam meu desenvolvimento contínuo.',
          bullets: ['Cursos e certificações', 'Instituições e datas', 'Aprendizado em progresso'],
          href: '/certificados',
        },
        {
          icon: FaEnvelopeOpenText,
          title: 'Contato',
          description: 'Um canal direto para conversar sobre oportunidades e parcerias.',
          bullets: ['WhatsApp e e-mail', 'Respostas objetivas', 'Convites e projetos'],
          href: '/contato',
        },
      ];

  const deliveryPillars = isEnglish
    ? [
        {
          title: 'Automations that free up time',
          description:
            'Scripts and integrations to reduce manual tasks, improve results, and keep teams focused.',
          tags: ['Automation', 'APIs', 'Workflow'],
        },
        {
          title: 'Documentation and collaboration',
          description: 'Organized delivery, continuous alignment, and a clear base for evolution.',
          tags: ['README', 'Git', 'Handoff'],
        },
      ]
    : [
        {
          title: 'Automações que liberam tempo',
          description:
            'Scripts e integrações para reduzir tarefas manuais, melhorar resultados e manter o time focado.',
          tags: ['Automação', 'APIs', 'Workflow'],
        },
        {
          title: 'Documentação e colaboração',
          description: 'Entrega organizada, alinhamento contínuo e base clara para evoluções.',
          tags: ['README', 'Git', 'Handoff'],
        },
      ];

  const workflowSteps = isEnglish
    ? [
        {
          step: '01',
          title: 'Context immersion',
          description:
            'I understand goals, audience, constraints, and opportunities before proposing a solution.',
        },
        {
          step: '02',
          title: 'Project architecture',
          description: 'I structure scope, flow, screen prototypes, and validate hierarchy.',
        },
        {
          step: '03',
          title: 'Delivery and iteration',
          description: 'I build, test, and adjust based on real feedback.',
        },
      ]
    : [
        {
          step: '01',
          title: 'Imersão no contexto',
          description:
            'Entendo objetivos, público, restrições e oportunidades antes de propor uma solução.',
        },
        {
          step: '02',
          title: 'Arquitetura de projeto',
          description: 'Estruturo o escopo, fluxo, protótipos de telas e valido a hierarquia.',
        },
        {
          step: '03',
          title: 'Entrega e iteração',
          description: 'Construo, testo e ajusto com base em feedback real.',
        },
      ];

  const copy = isEnglish
    ? {
        topicsLabel: 'Topics',
        topicsTitle: 'Quick overview of the topics',
        topicsCta: 'Open page',
        deliveriesLabel: 'Deliveries',
        deliveriesTitle: 'What you will find when you browse here',
        deliveriesBody:
          'This card simulates breakpoints and responsive behavior in real time and showcases micro-interactions and UI states. Try it now: adjust the width and flip the card to validate the flow in different scenarios.',
        processLabel: 'Process',
        processTitle: 'How I structure each delivery',
        featuredTitle: 'Featured projects',
        featuredBody:
          'A sample of what I have been building recently. See all details on the projects page.',
        viewAll: 'See all',
        closingTitle: 'Shall we build something together?',
        closingBody:
          'If you liked the landing page proposal, the conversation continues here. I can support new ideas or join ongoing projects.',
        closingCta: 'Contact me',
      }
    : {
        topicsLabel: 'Tópicos',
        topicsTitle: 'Breve apresentação dos tópicos',
        topicsCta: 'Acessar página',
        deliveriesLabel: 'Entregas',
        deliveriesTitle: 'O que você encontra quando navega por aqui',
        deliveriesBody:
          'Este card simula breakpoints e comportamento responsivo em tempo real, além de expor microinterações e estados de UI. Teste agora: ajuste a largura e vire o card para validar o fluxo em cenários diferentes.',
        processLabel: 'Processo',
        processTitle: 'Como estruturo cada entrega',
        featuredTitle: 'Projetos em destaque',
        featuredBody:
          'Uma amostra do que venho construindo recentemente. Veja todos os detalhes na página de projetos.',
        viewAll: 'Ver todos',
        closingTitle: 'Vamos construir algo juntos?',
        closingBody:
          'Se você curtiu a proposta da landing page, a conversa continua por aqui. Posso apoiar novas ideias ou me integrar a projetos em andamento.',
        closingCta: 'Falar comigo',
      };

  const projects = projectsByLocale[language];
  const highlightProjects = projects.slice(0, 2);

  return (
    <div className="space-y-24 pb-24">
      <Hero />

      <section className="space-y-8">
        <ScrollReveal className="text-center space-y-4 flex flex-col items-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#FF7A7A]/90">
            {copy.topicsLabel}
          </span>
          <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            {copy.topicsTitle}
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
                    {copy.topicsCta}
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
        <ScrollReveal className="space-y-4 flex flex-col items-start">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#FF7A7A]/90">
            {copy.deliveriesLabel}
          </span>
          <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            {copy.deliveriesTitle}
          </h2>
          <p className="text-[#E6E6E6]/70">{copy.deliveriesBody}</p>
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
        <ScrollReveal className="text-center space-y-3 flex flex-col items-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#FF7A7A]/90">
            {copy.processLabel}
          </span>
          <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            {copy.processTitle}
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
              {copy.featuredTitle}
            </h2>
            <p className="text-[#E6E6E6]/70 mt-2 max-w-2xl">{copy.featuredBody}</p>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center text-sm font-semibold text-[#D14949] hover:text-[#FF7A7A] transition-colors"
          >
            {copy.viewAll}
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
            {copy.closingTitle}
          </h3>
          <p className="text-sm sm:text-base text-[#E6E6E6]/70 mt-3 max-w-2xl mx-auto">
            {copy.closingBody}
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D14949]/60 bg-[#D14949] px-7 py-3 text-sm font-semibold text-[#E6E6E6] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#D14949]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D14949]"
          >
            {copy.closingCta}
            <FaArrowRight size={14} />
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default HomePageContent;
