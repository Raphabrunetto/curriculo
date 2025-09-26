interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, year }) => (
  // Bloco principal que será o Card (com efeito de hover)
  <div className="block group">
    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 h-full
                    transition-transform duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl">
      
      {/* Título (Grau/Curso) - Destaque */}
      <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors mb-1">
        {degree}
      </h3>
      
      {/* Instituição */}
      <p className="text-gray-400 italic mb-2">
        {institution}
      </p>
      
      {/* Período */}
      <p className="text-gray-500 text-sm">
        {year}
      </p>
    </div>
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "Bacharelado em Engenharia de Software",
      institution: "Universidade Positivo - UP",
      year: "2021 - 2025"
    },
    {
      degree: "Curso de Lógica de Programação e Algoritmos com C",
      institution: "Udemy",
      year: "2025"
    },
    // Adicione mais formações ou cursos relevantes aqui
  ];

  return (
    <div id="formacao" className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Formação Acadêmica</h2>
      
      {/* Usando uma grade de 2 colunas para telas maiores, alinhando com a Experiência */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;