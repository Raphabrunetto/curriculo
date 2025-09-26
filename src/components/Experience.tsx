interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, period, description }) => (
  <div className="block group">
    {/* Estilo de Card: Fundo escuro, borda e efeito de hover */}
    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 h-full
                    transition-transform duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl">
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">{role}</h3>
        <span className="text-gray-500 text-sm italic">{period}</span>
      </div>
      
      <p className="text-gray-400 italic mb-3">{company}</p>
      
      <p className="text-gray-300 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Desenvolvedor Front-end Júnior",
      company: "Startup Digital Fictícia",
      period: "Abril 2024 - Atual",
      description: "Desenvolvimento e manutenção de interfaces web responsivas usando **Next.js** e **TypeScript**. Foco na otimização de performance e na criação de componentes reutilizáveis (Design System) com **Tailwind CSS** e **Framer Motion**."
    },
    {
      role: "Estágio em Web Development",
      company: "Agência Criativa XYZ",
      period: "Set 2023 - Mar 2024",
      description: "Colaboração na prototipação e construção de Landing Pages de alta conversão. Aplicação de técnicas de SEO e acessibilidade, utilizando **HTML5**, **CSS3** (SCSS) e **JavaScript** moderno para interações dinâmicas."
    },
    {
      role: "Freelancer - UI/UX Designer",
      company: "Projetos Pessoais",
      period: "2022",
      description: "Criação de mockups e wireframes (low/high fidelity) para aplicativos mobile e web, com foco na experiência do usuário. Tradução de designs do **Figma** para código React/JSX."
    },
  ];

  // Se o array estiver vazio, exibe uma mensagem.
  if (experiences.length === 0) {
    return (
      <div id="experiencia" className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Experiência Profissional</h2>
        <p className="text-gray-400 italic">Esta seção será preenchida em breve! Atualmente, foco em projetos práticos.</p>
      </div>
    );
  }

  return (
    <div id="experiencia" className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Experiência Profissional</h2>
      {/* Usando uma grade (grid) com espaçamento para os cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;