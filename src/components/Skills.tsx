"use client";

import { useLanguage } from '@/components/LanguageProvider';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaPython,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: FaJs, accent: '#FACC15' },
  { name: 'TypeScript', icon: SiTypescript, accent: '#38BDF8' },
  { name: 'React', icon: FaReact, accent: '#7DD3FC' },
  { name: 'Next.js', icon: SiNextdotjs, accent: '#E6E6E6' },
  { name: 'HTML5', icon: FaHtml5, accent: '#F97316' },
  { name: 'CSS3', icon: FaCss3Alt, accent: '#60A5FA' },
  { name: 'Tailwind', icon: SiTailwindcss, accent: '#22D3EE' },
  { name: 'Git & GitHub', icon: FaGitAlt, accent: '#FB7185' },
  { name: 'Python', icon: FaPython, accent: '#93C5FD' },
  { name: 'Docker', icon: FaDocker, accent: '#38BDF8' },
  { name: 'MySQL', icon: SiMysql, accent: '#0284C7' },
  { name: 'MongoDB', icon: SiMongodb, accent: '#34D399' },
];

const Skills = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3 flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          {isEnglish ? 'skills' : 'habilidades'}
        </span>
        <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
          {isEnglish ? 'Toolkit I bring to solve challenges' : 'Caixa de ferramentas que levo para resolver desafios'}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#D14949]/50 hover:bg-[#D14949]/10 hover:shadow-[0_18px_40px_rgba(209,73,73,0.45)]"
            >
              <span
                className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-black/10 text-2xl"
                style={{ color: skill.accent }}
              >
                <Icon />
              </span>
              <p className="text-sm font-medium text-[#E6E6E6]">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
