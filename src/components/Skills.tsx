import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// Instale os ícones se ainda não o fez: npm install react-icons

// Array com suas habilidades e os ícones correspondentes
const skills = [
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' }, // Ícone branco no fundo escuro
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-orange-700' },
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Habilidades Técnicas</h2>
      
      {/* Grid para organizar os cards de habilidade */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            // Card de Habilidade: Fundo escuro, leve hover
            <div 
              key={index} 
              className="p-4 rounded-lg bg-gray-800 border border-gray-700 flex flex-col items-center 
                         transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl"
            >
              <Icon className={`${skill.color} mb-3`} size={32} />
              <p className="text-sm font-medium text-gray-200">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;