import React from 'react';
// Não precisa do 'Image' se você não tiver logo para projetos voluntários

interface VolunteerItemProps {
  role: string;
  organization: string;
  period: string;
  description: string;
}

const VolunteerItem: React.FC<VolunteerItemProps> = ({ role, organization, period, description }) => (
  <div className="block group h-full">
    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 h-full flex flex-col justify-between
                    transition-transform duration-300 transform group-hover:scale-[1.02] 
                    group-hover:shadow-xl group-hover:shadow-purple-500/20">
      
      <div>
        {/* Título (Seu Papel/Cargo) */}
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors mb-1">
          {role}
        </h3>
        
        {/* Organização */}
        <p className="text-gray-400 italic mb-2">
          {organization}
        </p>
        
        {/* Período */}
        <p className="text-gray-500 text-sm mb-4">
          {period}
        </p>
        
        {/* Descrição das Atividades */}
        <p className="text-gray-300 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Volunteer = () => {
  const volunteerWork = [
    {
      role: "Voluntário em trabalho comunitário para o CEI Maria Amélia",
      organization: "UP",
      period: "Julho 2024 - Dezembro 2024",
      description: "Realizada uma palestra sobre como usar a tecnologia para o desenvolvimento pessoal, como ela vai estar presente no futuro e a a capacidade de crescimento atrelada a tecnologia."
    },
    {
      role: "Iniciativa para Pessoas carentes",
      organization: "UP",
      period: "2023",
      description: "Realizado, juntamente da Universidade, um trabalho voluntariado para ajudar pessoas carentes em épocas complicadas. Realizamos arrecadações e entregas de itens e alimentos à população."
    },
    // Adicione mais trabalhos voluntários aqui!
  ];

  return (
    <div id="voluntario" className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Trabalhos Voluntários</h2>
      
      {/* Usando a mesma grade de 2 colunas que as outras seções */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {volunteerWork.map((item, index) => (
          <VolunteerItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Volunteer;