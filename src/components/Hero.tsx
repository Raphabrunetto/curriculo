"use client";

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ctas = [
  {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5541997532136?text=Ola%2C%20Raphael!%20Vi%20seu%20portfolio%20e%20gostaria%20de%20falar%20sobre%20uma%20oportunidade.',
    icon: FaWhatsapp,
    style:
      'bg-[#FF7A7A] text-[#141414] hover:bg-[#FF7A7A]/90 focus-visible:ring-[#FF7A7A]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raphael-brunetto-dev',
    icon: FaLinkedin,
    style:
      'bg-[#D14949] text-[#E6E6E6] hover:bg-[#D14949]/85 focus-visible:ring-[#D14949]',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Raphabrunetto',
    icon: FaGithub,
    style:
      'bg-white/5 text-[#E6E6E6] hover:bg-white/10 focus-visible:ring-white/40',
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] via-[#1B1B1B] to-[#D14949] px-6 py-20 shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:px-10">
      <div
        className="absolute inset-0 -z-10 animate-fade-in-soft"
        style={
          {
            '--fade-target': '0.5',
          } as CSSProperties & { '--fade-target': string }
        }
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#D14949]/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#FF7A7A]/25 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-[-20%] rounded-[100%] border border-[#D14949]/25"
            aria-hidden
            data-animate="spin-slow"
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-10 text-center">
        <div className="relative animate-fade-in-up" style={{ animationDelay: '0s' }}>
          <div className="absolute -inset-4 rounded-full border border-[#FF7A7A]/35 blur-md" />
          <Image
            src="/images/WhatsApp%20Image%202026-01-11%20at%2012.10.38.jpeg"
            alt="Foto de Raphael Brunetto"
            width={200}
            height={200}
            priority
            className="relative rounded-full border-4 border-[#D14949]/70 object-cover shadow-[0_25px_50px_-12px_rgba(209,73,73,0.55)]"
          />
        </div>

        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF7A7A]">
            Ola, eu sou
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-[#E6E6E6]">Raphael Brunetto</span>
            <span className="mt-2 block text-2xl font-medium text-[#D14949] sm:text-3xl">
              Desenvolvedor & Engenheiro de Software
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-[#E6E6E6]/80 sm:text-lg">
            Conecto tecnologia a operacoes para resolver problemas reais. Foco em experiencias digitais, automacoes
            inteligentes e integracoes que dao resultado.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {ctas.map((cta) => {
            const Icon = cta.icon;
            return (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 ${cta.style}`}
              >
                <span className="grid h-9 w-9 place-content-center rounded-full bg-black/10">
                  <Icon size={18} />
                </span>
                {cta.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
