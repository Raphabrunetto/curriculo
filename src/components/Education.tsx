interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
}

const EducationItem = ({ degree, institution, year }: EducationItemProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D14949]/50 hover:bg-[#D14949]/10 hover:shadow-[0_20px_45px_rgba(209,73,73,0.45)]">
    <h3 className="text-xl font-semibold text-[#E6E6E6]">{degree}</h3>
    <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-[#D14949]/90">{institution}</p>
    <p className="mt-4 text-xs font-semibold text-[#E6E6E6]/60">{year}</p>
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
      degree: 'Lógica de Programação e Algoritmos com C',
      institution: 'Udemy',
      year: '2025',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          formação
        </span>
        <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
          Estudos que sustentam minha visão de produto
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
