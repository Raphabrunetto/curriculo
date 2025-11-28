const normalizeTech = (tech: string) =>
  tech
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const techColors: Record<string, string> = {
  html: 'border border-[#F97316]/40 text-[#F97316] bg-[#F97316]/10',
  css: 'border border-[#3B82F6]/40 text-[#3B82F6] bg-[#3B82F6]/10',
  javascript: 'border border-[#FACC15]/50 text-[#FACC15] bg-[#FACC15]/10',
  js: 'border border-[#FACC15]/50 text-[#FACC15] bg-[#FACC15]/10',
  python: 'border border-[#60A5FA]/40 text-[#60A5FA] bg-[#1D4ED8]/10',
  react: 'border border-[#7DD3FC]/40 text-[#7DD3FC] bg-[#0EA5E9]/10',
  docker: 'border border-[#0DB7ED]/40 text-[#0DB7ED] bg-[#0DB7ED]/10',
  bash: 'border border-[#10B981]/40 text-[#34D399] bg-[#065F46]/10',
  monday: 'border border-[#22C55E]/40 text-[#22C55E] bg-[#14532D]/10',
  automacao: 'border border-[#A855F7]/35 text-[#C084FC] bg-[#4C1D95]/15',
};

const getTechColors = (tech: string) =>
  techColors[normalizeTech(tech)] ?? 'border border-white/15 text-[#E0E5E9]/80 bg-white/5';

interface CardProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, techs, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
      <div
        className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col justify-between
                      transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:border-[#0A62D0]/60 group-hover:bg-[#0A62D0]/10 group-hover:shadow-[0_20px_45px_rgba(10,98,208,0.45)]"
      >
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#E0E5E9] group-hover:text-[#F3D849] transition-colors">
            {title}
          </h3>
          <p className="text-[#E0E5E9]/70 text-sm mb-4 leading-relaxed">{description}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#E0E5E9]/75">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {techs.map((tech, index) => (
              <span 
                key={index} 
                className={`rounded-full px-3 py-1 font-mono uppercase tracking-wider transition-colors ${getTechColors(
                  tech
                )}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
