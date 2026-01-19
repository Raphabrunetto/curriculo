"use client";

import Card from '@/components/Card';
import { projectsByLocale } from '@/data/projects';
import { useLanguage } from '@/components/LanguageProvider';

const ProjectsPageContent = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const projects = projectsByLocale[language];

  const copy = isEnglish
    ? {
        badge: 'Portfolio',
        title: 'Projects',
        intro:
          'A selection of my most recent work, focused on delivering real value, improving processes, and creating meaningful experiences.',
        sectionTitle: 'Projects and collaborations',
        sectionBody: (
          <>
            I improved AI analysis results by{' '}
            <span className="font-semibold text-[#FF7A7A]">20%</span> with scripts and automations, implemented
            social login with <span className="font-semibold text-[#FF7A7A]">Google OAuth</span>, and built APIs in{' '}
            <span className="font-semibold text-[#FF7A7A]">Python</span>. I also delivered real-time chat with{' '}
            <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> +{' '}
            <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span> and{' '}
            <span className="font-semibold text-[#FF7A7A]">Next.js</span> interfaces integrated with the backend,
            with deployments via <span className="font-semibold text-[#FF7A7A]">Docker</span>.
          </>
        ),
        highlightsTitle: 'Highlights',
        highlights: [
          <>
            <span className="font-semibold text-[#FF7A7A]">20%</span> improvement in AI results with{' '}
            <span className="font-semibold text-[#FF7A7A]">scripts</span> and{' '}
            <span className="font-semibold text-[#FF7A7A]">automation</span>.
          </>,
          <>
            APIs and real-time chat with <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> +{' '}
            <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span>.
          </>,
          <>
            <span className="font-semibold text-[#FF7A7A]">Next.js</span> interfaces with{' '}
            <span className="font-semibold text-[#FF7A7A]">Docker</span> deployments.
          </>,
        ],
      }
    : {
        badge: 'Portfólio',
        title: 'Projetos',
        intro:
          'Uma seleção dos meus trabalhos mais recentes, com foco em entregar valor real, melhorar processos e criar experiências significativas.',
        sectionTitle: 'Projetos e colaborações',
        sectionBody: (
          <>
            Elevei em{' '}
            <span className="font-semibold text-[#FF7A7A]">20%</span> os resultados de análises da{' '}
            <span className="font-semibold text-[#FF7A7A]">IA</span> com scripts e automações, implementei login
            social com <span className="font-semibold text-[#FF7A7A]">Google OAuth</span> e APIs em{' '}
            <span className="font-semibold text-[#FF7A7A]">Python</span>. Também entreguei chat em tempo real
            com <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> +{' '}
            <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span> e interfaces em{' '}
            <span className="font-semibold text-[#FF7A7A]">Next.js</span> integradas ao backend, com deploys via{' '}
            <span className="font-semibold text-[#FF7A7A]">Docker</span>.
          </>
        ),
        highlightsTitle: 'Destaques',
        highlights: [
          <>
            <span className="font-semibold text-[#FF7A7A]">+20%</span> em resultados de IA com{' '}
            <span className="font-semibold text-[#FF7A7A]">scripts</span> e{' '}
            <span className="font-semibold text-[#FF7A7A]">automação</span>.
          </>,
          <>
            APIs e chat em tempo real com <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> +{' '}
            <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span>.
          </>,
          <>
            Interfaces em <span className="font-semibold text-[#FF7A7A]">Next.js</span> com{' '}
            <span className="font-semibold text-[#FF7A7A]">Docker</span> no deploy.
          </>,
        ],
      };

  return (
    <div className="space-y-10 pb-20">
      <header className="space-y-3 text-center max-w-3xl mx-auto flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7A7A]">
          {copy.badge}
        </span>
        <h1 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">{copy.title}</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">{copy.intro}</p>
      </header>

      <section className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#E6E6E6]">{copy.sectionTitle}</h2>
              <p className="text-[#E6E6E6]/70 text-sm sm:text-base">{copy.sectionBody}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7A7A]">
                {copy.highlightsTitle}
              </h3>
              <ul className="mt-4 space-y-4 text-base text-[#E6E6E6]/75">
                {copy.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF7A7A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPageContent;
