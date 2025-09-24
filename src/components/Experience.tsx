interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, period, description }) => (
  <div className="flex items-start mb-6">
    <div className="w-4 h-4 rounded-full bg-purple-500 flex-shrink-0 mt-1 mr-4" />
    <div className="flex-1">
      <h3 className="text-xl font-bold">{role}</h3>
      <p className="text-gray-400 italic">{company}</p>
      <p className="text-gray-500 text-sm mb-2">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Desenvolvedor Front-end",
      company: "Empresa Fictícia",
      period: "Jan 2022 - Presente",
      description: "Desenvolvimento e manutenção de interfaces de usuário com React e Next.js, colaborando em equipes ágeis."
    },
    {
      role: "Estagiário de Web Development",
      company: "Outra Empresa Fictícia",
      period: "Jul 2021 - Dez 2021",
      description: "Participação no desenvolvimento de landing pages e otimização de sites para dispositivos móveis."
    }
  ];

  return (
    <section id="experiencia" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Experiência Profissional</h2>
      <div className="relative">
        <div className="absolute left-2 top-0 w-0.5 h-full bg-gray-700 hidden sm:block"></div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;