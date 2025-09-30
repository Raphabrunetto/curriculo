import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

// Certifique-se de que todas as bibliotecas estão instaladas: npm install react-icons

// Array com suas habilidades e os ícones correspondentes (12 itens no total)
const skills = [
  // Linha 1: Front-end
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' }, 
  
  // Linha 2: Estilização e Ferramentas
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-orange-700' },
  
  // Linha 3: Back-end e Banco de Dados (Os 4 novos itens)
  { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Habilidades Técnicas</h2>
      
      {/* Grid: 4 colunas em telas grandes (lg), 3 em telas médias (sm) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div 
              key={index} 
              className="p-4 rounded-lg bg-gray-800 border border-gray-700 flex flex-col items-center 
                         transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl hover:shadow-purple-500/20"
            >
              <Icon className={`${skill.color} mb-3`} size={32} />
              <p className="text-sm font-medium text-gray-200 text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;