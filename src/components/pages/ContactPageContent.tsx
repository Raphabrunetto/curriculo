"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/components/LanguageProvider';

const ContactPageContent = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const contactLinks = isEnglish
    ? [
        {
          label: 'Email',
          href: 'mailto:raphabrunetto@gmail.com',
          description: 'Send a direct email with opportunity details.',
          icon: FaEnvelope,
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/raphael-brunetto-dev',
          description: 'Connect with me professionally and follow updates.',
          icon: FaLinkedin,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Raphabrunetto',
          description: 'Check open-source code, experiments, and contributions.',
          icon: FaGithub,
        },
      ]
    : [
        {
          label: 'E-mail',
          href: 'mailto:raphabrunetto@gmail.com',
          description: 'Mande um e-mail direto com detalhes da oportunidade.',
          icon: FaEnvelope,
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/raphael-brunetto-dev',
          description: 'Conecte-se comigo profissionalmente e acompanhe novidades.',
          icon: FaLinkedin,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Raphabrunetto',
          description: 'Confira código aberto, experimentos e contribuições.',
          icon: FaGithub,
        },
      ];

  const copy = isEnglish
    ? {
        title: "Let's work together?",
        intro:
          'I am open to talking about roles, freelance projects, or any initiative where I can help with technology and product experience.',
        whatsappTitle: 'Quick reply on WhatsApp',
        whatsappBody:
          'Use the button below to message me on WhatsApp with a pre-filled note. I will reply as soon as possible.',
        otherChannels: 'Other channels',
      }
    : {
        title: 'Vamos trabalhar juntos?',
        intro:
          'Estou aberto a conversar sobre vagas, projetos freelas ou qualquer iniciativa em que eu possa ajudar com tecnologia e experiência em produto.',
        whatsappTitle: 'Resposta rápida pelo WhatsApp',
        whatsappBody:
          'Use o botão abaixo para me chamar no WhatsApp com uma mensagem pré-preenchida. Responderei assim que possível.',
        otherChannels: 'Outros canais',
      };

  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="hover-underline text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">{copy.title}</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">{copy.intro}</p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_20px_45px_rgba(209,73,73,0.35)]">
        <h2 className="hover-underline text-2xl font-semibold mb-4 text-[#E6E6E6]">{copy.whatsappTitle}</h2>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          {copy.whatsappBody}
        </p>
        <WhatsAppButton />
      </section>

      <section className="space-y-6">
        <h2 className="hover-underline text-xl font-semibold text-[#E6E6E6] text-center">{copy.otherChannels}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:-translate-y-1 hover:border-[#D14949]/60 hover:bg-[#D14949]/10 hover:shadow-[0_18px_40px_rgba(209,73,73,0.45)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-[#141414]/20 text-[#D14949] mb-3 transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <span className="text-[#E6E6E6] font-semibold">{item.label}</span>
                <p className="text-[#E6E6E6]/65 text-xs mt-2 leading-relaxed">{item.description}</p>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPageContent;
