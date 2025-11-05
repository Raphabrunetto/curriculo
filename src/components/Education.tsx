interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
}

const EducationItem = ({ degree, institution, year }: EducationItemProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#0A62D0]/50 hover:bg-[#0A62D0]/10 hover:shadow-[0_20px_45px_rgba(10,98,208,0.45)]">
    <h3 className="text-xl font-semibold text-[#E0E5E9]">{degree}</h3>
    <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-[#0A62D0]/90">{institution}</p>
    <p className="mt-4 text-xs font-semibold text-[#E0E5E9]/60">{year}</p>
  </div>
);

const Education = () => {
  const education: EducationItemProps[] = [
    {
      degree: 'Bacharelado em Engenharia de Software',
      institution: 'Universidade Positivo',
      year: '2021 - 2025',
    },
    {
      degree: 'Logica de Programacao e Algoritmos com C',
      institution: 'Udemy',
      year: '2025',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#F3D849]">
          formacao
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">
          Estudos que sustentam minha visao de produto
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {education.map((item) => (
          <EducationItem key={`${item.degree}-${item.institution}`} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
