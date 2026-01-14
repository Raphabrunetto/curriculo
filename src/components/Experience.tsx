import Image from 'next/image';
import type { ReactNode } from 'react';

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: ReactNode;
  logo?: string;
}

const ExperienceItem = ({ role, company, period, description, logo }: ExperienceItemProps) => (
  <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D14949]/50 hover:bg-[#D14949]/10 hover:shadow-[0_20px_45px_rgba(209,73,73,0.45)]">
    {logo && (
      <Image
        src={logo}
        alt={`${company} logo`}
        width={40}
        height={40}
        className="absolute right-6 top-6 h-10 w-10 rounded-full border border-white/15 bg-[#141414] object-contain p-1"
      />
    )}

    <div className="space-y-3 pr-12">
      <h3 className="text-xl font-semibold text-[#E6E6E6] group-hover:text-[#FF7A7A] transition-colors">{role}</h3>
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#D14949]/90">{company}</p>
      <p className="text-xs font-semibold text-[#E6E6E6]/60">{period}</p>
      <p className="text-sm leading-relaxed text-[#E6E6E6]/75">{description}</p>
    </div>
  </div>
);

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      role: 'Estagiário em Suporte de TI',
      company: 'COHAB Curitiba',
      period: 'Outubro 2024 - Março 2025',
      description:
        'Atuei dando suporte em hardware, software, redes e help desk. Ali desenvolvi minha vontade, e capacidade de resolução de problemas.',
      logo: '/logos/empresa1.png',
    },
    {
      role: 'Técnico de Operações',
      company: 'Vidya Technology',
      period: 'Abril 2025 - Atual',
      description: (
        <>
          Faço operações, desenvolvi um script{' '}
          <span className="font-semibold text-[#FF7A7A]">Python</span>{' '}com{' '}
          <span className="font-semibold text-[#FF7A7A]">OpenCV</span>{' '}para acelerar análises e edição de imagens, gerando uma{' '}
          <span className="font-semibold text-[#FF7A7A]">melhora de 20%</span>{' '}nos resultados de reconhecimento da IA. Criei
          automações que produziram um resultado de maior eficiência e redução de tempo para conclusão de Tasks do time.
        </>
      ),
      logo: '/logos/empresa2.png',
    },
  ];

  if (experiences.length === 0) {
    return (
      <section className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">Experiência profissional</h2>
        <p className="text-[#E6E6E6]/60">
          Esta seção será preenchida em breve. Enquanto isso, confira os projetos que venho construindo.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3 flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          experiências
        </span>
        <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">Onde desenvolvi projetos reais</h2>
        <p className="mx-auto max-w-3xl text-sm sm:text-base text-[#E6E6E6]/70">
          Aqui desenvolvi e apresentei resultados com minha experiência!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.role} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
