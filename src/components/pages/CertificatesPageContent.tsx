"use client";

import Certifications from '@/components/Certifications';
import { useLanguage } from '@/components/LanguageProvider';

const CertificatesPageContent = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const copy = isEnglish
    ? {
        title: 'Certificates and courses',
        body:
          'Explore the training that supports my technical foundation and the topics I have been deepening recently.',
      }
    : {
        title: 'Certificados e cursos',
        body:
          'Conheça as formações que sustentam minha base técnica e os temas que venho aprofundando recentemente.',
      };

  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">{copy.title}</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">{copy.body}</p>
      </header>

      <Certifications />
    </div>
  );
};

export default CertificatesPageContent;
