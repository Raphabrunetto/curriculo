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
  { name: 'Next.js', icon: SiNextdotjs, accent: '#E0E5E9' },
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
  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#F3D849]">
          habilidades
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">
          Toolkit que levo para resolver desafios
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#0A62D0]/50 hover:bg-[#0A62D0]/10 hover:shadow-[0_18px_40px_rgba(10,98,208,0.45)]"
            >
              <div
                className="absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-xl"
                style={{ background: skill.accent }}
              />
              <span
                className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-black/10 text-2xl"
                style={{ color: skill.accent }}
              >
                <Icon />
              </span>
              <p className="text-sm font-medium text-[#E0E5E9]">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
