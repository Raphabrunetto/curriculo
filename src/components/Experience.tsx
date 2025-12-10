import Image from 'next/image';

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  logo?: string;
}

const ExperienceItem = ({ role, company, period, description, logo }: ExperienceItemProps) => (
  <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#0A62D0]/50 hover:bg-[#0A62D0]/10 hover:shadow-[0_20px_45px_rgba(10,98,208,0.45)]">
    {logo && (
      <Image
        src={logo}
        alt={`${company} logo`}
        width={40}
        height={40}
        className="absolute right-6 top-6 h-10 w-10 rounded-full border border-white/15 bg-[#191718] object-contain p-1"
      />
    )}

    <div className="space-y-3 pr-12">
      <h3 className="text-xl font-semibold text-[#E0E5E9] group-hover:text-[#F3D849] transition-colors">{role}</h3>
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#0A62D0]/90">{company}</p>
      <p className="text-xs font-semibold text-[#E0E5E9]/60">{period}</p>
      <p className="text-sm leading-relaxed text-[#E0E5E9]/75">{description}</p>
    </div>
  </div>
);

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      role: 'Estagiario em Suporte de TI',
      company: 'COHAB Curitiba',
      period: 'Outubro 2024 - Marco 2025',
      description:
        'Atuei dando suporte em hardware, software, redes e help desk. Foi ali que percebi como traduzir tecnologia em solucoes praticas ajuda quem esta na linha de frente.',
      logo: '/logos/empresa1.png',
    },
    {
      role: 'Tecnico de Operacoes',
      company: 'Vidya Technology',
      period: 'Abril 2025 - Atual',
      description:
        'Cuido de operacoes, crio automacoes para o Monday para reduzir tarefas manuais e aumentar a acertividade no controle de tempo e tasks. Tambem refatorei scripts em Python com OpenCV para acelerar analises de imagens.',
      logo: '/logos/empresa2.png',
    },
  ];

  if (experiences.length === 0) {
    return (
      <section className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">Experiencia profissional</h2>
        <p className="text-[#E0E5E9]/60">
          Esta secao sera preenchida em breve. Enquanto isso, confira os projetos que venho construindo.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#F3D849]">
          experiencias
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">Onde desenvolvi meu olhar analitico</h2>
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
