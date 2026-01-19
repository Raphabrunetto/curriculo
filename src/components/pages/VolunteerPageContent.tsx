"use client";

import Volunteer from '@/components/Volunteer';
import { useLanguage } from '@/components/LanguageProvider';

const VolunteerPageContent = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const copy = isEnglish
    ? {
        title: 'Volunteer work',
        body:
          'Projects I took on to contribute to the community and practice skills for a larger purpose.',
      }
    : {
        title: 'Trabalhos voluntários',
        body:
          'Projetos que realizei para contribuir com a comunidade e colocar habilidades em prática por um propósito maior.',
      };

  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">{copy.title}</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">{copy.body}</p>
      </header>

      <Volunteer />
    </div>
  );
};

export default VolunteerPageContent;
