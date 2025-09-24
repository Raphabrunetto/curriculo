interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, period, description }) => (
  <div className="flex items-start mb-10"> {/* mb-10: Aumenta o espaçamento vertical entre os itens */}
    <div className="w-4 h-4 rounded-full bg-purple-500 flex-shrink-0 mt-2 mr-4" /> {/* mt-2: Alinha o círculo com a primeira linha de texto */}
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-100 mb-1">{role}</h3> {/* text-2xl e mb-1: Título maior e com mais espaço abaixo */}
      <p className="text-gray-400 italic mb-1">{company}</p> {/* mb-1: Espaço entre a empresa e o período */}
      <p className="text-gray-500 text-sm mb-4">{period}</p> {/* mb-4: Espaço maior entre o período e a descrição */}
      <p className="text-gray-300 leading-relaxed">{description}</p> {/* leading-relaxed: Aumenta o espaçamento entre as linhas do parágrafo */}
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Técnico de Suporte",
      company: "COHAB (Companhia de habitação popular de Curitiba)",
      period: "Out 2024 - Abril 2025",
      description: "Na COHAB, desenvolvi meu pensamento para a resolução de problemas, já que trabalhei com manutenção de computadores (Hardware e Software), Help Desk e atendimento presencial, além de configurações de redes de computadores e servidores."
    },
    {
      role: "Técnico de Operações",
      company: "Vidya Technology",
      period: "Abril 2025 - Atual",
      description: "A Vidya é uma empresa focada na análise de ativos (petrolíferos) em busca de corrosões que apresentam risco à funcionalidade e à saúde dos trabalhadores. Na Vidya, colaborei com o treinamento de uma IA, coletando dados e criando scripts em Python para tratamento de imagens com OpenCV. Também atuei em tarefas de Operações, ajudando a identificar o nível de saúde do ativo e a gerar dados para o treinamento da IA."
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