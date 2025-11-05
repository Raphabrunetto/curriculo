interface VolunteerItemProps {
  role: string;
  organization: string;
  period: string;
  description: string;
}

const VolunteerItem = ({ role, organization, period, description }: VolunteerItemProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#0A62D0]/50 hover:bg-[#0A62D0]/10 hover:shadow-[0_20px_45px_rgba(10,98,208,0.45)]">
    <h3 className="text-xl font-semibold text-[#E0E5E9]">{role}</h3>
    <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-[#0A62D0]/90">{organization}</p>
    <p className="mt-3 text-xs font-semibold text-[#E0E5E9]/60">{period}</p>
    <p className="mt-4 text-sm leading-relaxed text-[#E0E5E9]/75">{description}</p>
  </div>
);

const Volunteer = () => {
  const volunteerWork: VolunteerItemProps[] = [
    {
      role: 'Palestrante em tecnologia e futuro',
      organization: 'CEI Maria Amelia / UP',
      period: 'Julho 2024 - Dezembro 2024',
      description:
        'Ministrei palestras sobre como a tecnologia pode impulsionar desenvolvimento pessoal e profissional, mostrando caminhos acessiveis para quem esta comecando.',
    },
    {
      role: 'Campanha solidaria',
      organization: 'Universidade Positivo',
      period: '2023',
      description:
        'Ajudei a organizar arrecadacoes e entregas de itens essenciais para familias em situacao de vulnerabilidade, reforcando o impacto social da tecnologia.',
    },
  ];

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#F3D849]">
          voluntariado
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">
          Projetos sociais que me conectam com pessoas
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {volunteerWork.map((item) => (
          <VolunteerItem key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Volunteer;
