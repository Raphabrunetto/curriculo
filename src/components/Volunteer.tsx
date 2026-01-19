"use client";

import { useLanguage } from '@/components/LanguageProvider';

interface VolunteerItemProps {
  role: string;
  organization: string;
  period: string;
  description: string;
}

const VolunteerItem = ({ role, organization, period, description }: VolunteerItemProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D14949]/50 hover:bg-[#D14949]/10 hover:shadow-[0_20px_45px_rgba(209,73,73,0.45)]">
    <h3 className="text-xl font-semibold text-[#E6E6E6]">{role}</h3>
    <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-[#D14949]/90">{organization}</p>
    <p className="mt-3 text-xs font-semibold text-[#E6E6E6]/60">{period}</p>
    <p className="mt-4 text-sm leading-relaxed text-[#E6E6E6]/75">{description}</p>
  </div>
);

const Volunteer = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const volunteerWork: VolunteerItemProps[] = isEnglish
    ? [
        {
          role: 'Speaker on technology and the future',
          organization: 'CEI Maria Amelia / UP',
          period: 'July 2024 - December 2024',
          description:
            'I delivered talks on how technology can boost personal and professional development, showing accessible paths for those just starting.',
        },
        {
          role: 'Community donation campaign',
          organization: 'Universidade Positivo',
          period: '2023',
          description:
            "I helped organize collections and deliveries of essential items for families in vulnerable situations, reinforcing technology's social impact.",
        },
      ]
    : [
        {
          role: 'Palestrante sobre tecnologia e futuro',
          organization: 'CEI Maria Amelia / UP',
          period: 'Julho 2024 - Dezembro 2024',
          description:
            'Ministrei palestras sobre como a tecnologia pode impulsionar o desenvolvimento pessoal e profissional, mostrando caminhos acessíveis para quem está começando.',
        },
        {
          role: 'Campanha solidária',
          organization: 'Universidade Positivo',
          period: '2023',
          description:
            'Ajudei a organizar arrecadações e entregas de itens essenciais para famílias em situação de vulnerabilidade, reforçando o impacto social da tecnologia.',
        },
      ];

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3 flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          {isEnglish ? 'volunteering' : 'voluntariado'}
        </span>
        <h2 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
          {isEnglish
            ? 'Social projects that connect me with people'
            : 'Projetos sociais que me conectam com pessoas'}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {volunteerWork.map((item) => (
          <VolunteerItem key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Volunteer;
