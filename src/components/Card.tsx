"use client";

import { useLanguage } from '@/components/LanguageProvider';

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
  'next.js': 'border border-[#94A3B8]/40 text-[#E2E8F0] bg-[#0F172A]/50',
  typescript: 'border border-[#2563EB]/40 text-[#60A5FA] bg-[#1E3A8A]/15',
  tailwind: 'border border-[#38BDF8]/40 text-[#7DD3FC] bg-[#0EA5E9]/10',
  docker: 'border border-[#0DB7ED]/40 text-[#0DB7ED] bg-[#0DB7ED]/10',
  bash: 'border border-[#10B981]/40 text-[#34D399] bg-[#065F46]/10',
  monday: 'border border-[#22C55E]/40 text-[#22C55E] bg-[#14532D]/10',
  playwright: 'border border-[#F472B6]/40 text-[#F9A8D4] bg-[#831843]/20',
  'web scraping': 'border border-[#F59E0B]/40 text-[#FCD34D] bg-[#78350F]/20',
  supabase: 'border border-[#34D399]/40 text-[#6EE7B7] bg-[#064E3B]/15',
  'mercado pago': 'border border-[#0284C7]/40 text-[#38BDF8] bg-[#0C4A6E]/15',
  frenet: 'border border-[#F97316]/40 text-[#FDBA74] bg-[#7C2D12]/15',
  automacao: 'border border-[#A855F7]/35 text-[#C084FC] bg-[#4C1D95]/15',
  automation: 'border border-[#A855F7]/35 text-[#C084FC] bg-[#4C1D95]/15',
};

const getTechColors = (tech: string) =>
  techColors[normalizeTech(tech)] ?? 'border border-white/15 text-[#E6E6E6]/80 bg-white/5';

interface CardProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
  highlight?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, techs, link, highlight = false }) => {
  const { language } = useLanguage();
  const label = language === 'en' ? 'Technologies:' : 'Tecnologias:';

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
      <div
        className={`p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col justify-between transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:border-[#D14949]/60 group-hover:bg-[#D14949]/10 group-hover:shadow-[0_20px_45px_rgba(209,73,73,0.45)] ${
          highlight ? 'neon-border' : ''
        }`}
      >
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#E6E6E6] group-hover:text-[#FF7A7A] transition-colors">
            {title}
          </h3>
          <p className="text-[#E6E6E6]/70 text-sm mb-4 leading-relaxed">{description}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#E6E6E6]/75">{label}</h4>
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
