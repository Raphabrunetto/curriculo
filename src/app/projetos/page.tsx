import Card from '@/components/Card';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projetos | Raphael Brunetto',
  description: 'Portfólio de projetos com foco em automação, interfaces e resolução de problemas reais.',
};

export default function ProjetosPage() {
  return (
    <div className="space-y-10 pb-20">
      <header className="space-y-3 text-center max-w-3xl mx-auto flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7A7A]">
          Portfólio
        </span>
        <h1 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">Projetos</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">
          Uma seleção dos meus trabalhos mais recentes, com foco em entregar valor real, melhorar processos e criar
          experiências significativas.
        </p>
      </header>

      <section className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#E6E6E6]">Projetos e colaborações</h2>
              <p className="text-[#E6E6E6]/70 text-sm sm:text-base">
                Elevei em{' '}
                <span className="font-semibold text-[#FF7A7A]">20%</span>{' '}os resultados de análises da{' '}
                <span className="font-semibold text-[#FF7A7A]">IA</span> com scripts e automações, implementei login
                social com <span className="font-semibold text-[#FF7A7A]">Google OAuth</span> e APIs em{' '}
                <span className="font-semibold text-[#FF7A7A]">Python</span>. Também entreguei chat em tempo real
                com <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> +{' '}
                <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span> e interfaces em{' '}
                <span className="font-semibold text-[#FF7A7A]">Next.js</span> integradas ao backend, com deploys via{' '}
                <span className="font-semibold text-[#FF7A7A]">Docker</span>.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7A7A]">Destaques</h3>
              <ul className="mt-4 space-y-4 text-base text-[#E6E6E6]/75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF7A7A]" />
                  <span>
                    <span className="font-semibold text-[#FF7A7A]">+20%</span>{' '}em resultados de IA com{' '}
                    <span className="font-semibold text-[#FF7A7A]">scripts</span> e{' '}
                    <span className="font-semibold text-[#FF7A7A]">automação</span>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF7A7A]" />
                  <span>
                    APIs e chat em tempo real com{' '}
                    <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> +{' '}
                    <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF7A7A]" />
                  <span>
                    Interfaces em{' '}
                    <span className="font-semibold text-[#FF7A7A]">Next.js</span> com{' '}
                    <span className="font-semibold text-[#FF7A7A]">Docker</span> no deploy.
                  </span>
                </li>
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
}
