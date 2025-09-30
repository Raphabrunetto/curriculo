import React from 'react';
import Image from 'next/image'; // Não se esqueça de importar o Image do Next

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  logo?: string; // Propriedade opcional para o logo
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, period, description, logo }) => (
  // O Card mais externo deve ser o 'relative' para que o logo se posicione corretamente.
  <div className="block group relative h-full"> 
    
    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 h-full flex flex-col justify-between
                    transition-transform duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/20">
      
      {/* LOGO: Posicionado no canto superior direito do card */}
      {logo && (
        <Image 
          src={logo} 
          alt={`${company} logo`} 
          width={36} // Tamanho do logo (ajuste se necessário)
          height={36} 
          // Posicionamento absoluto, ligeiramente deslocado do padding do card (top-4 right-4)
          className="absolute top-4 right-4 rounded-lg p-1 bg-gray-900 border border-gray-700" 
        />
      )}
      
      <div>
        {/* Adicione um padding maior à direita para que o título não fique por baixo do logo */}
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors mb-1 pr-12">
          {role}
        </h3>
        
        <p className="text-gray-400 italic mb-2">
          {company}
        </p>
        
        <p className="text-gray-500 text-sm mb-4">
          {period}
        </p>
        
        <p className="text-gray-300 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Experience = () => {
  // Dados atualizados com os caminhos dos logos
  const experiences = [
    {
      role: "Estágio em Suporte de TI",
      company: "COHAB - Companhia de Habitação Popular de Curitiba",
      period: "Outubro 2024 - Março 2025",
      description: "Atuei realizando suporte aos usuários, resolução de problemas de Hardware e Software, Redes de computadores, HelpDesk. Foi onde descobri como gostava de ajudar o usuário a resolver problemas com meus conhecimentos.",
      logo: "/logos/empresa1.png", // COHAB
    },
    {
      role: "Técnico de Operações",
      company: "Vidya technology",
      period: "Abril 2025 - Atual",
      description: "Vidya é uma empresa que atua na validação de integridade de ativos utilizando tecnologia. Trablho principalmente com operações, mas comecei a desenvolver automações usando Automa e n8n, além de começar a refatorar um Script python usando CV2.",
      logo: "/logos/empresa2.png", // Vidya
    },
  ];

  // A lógica de fallback foi mantida.
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;