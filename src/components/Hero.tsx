"use client";

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ctas = [
  {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5541997532136?text=Ol%C3%A1%2C%20Raphael!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20uma%20oportunidade.',
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
  const [isRevealed, setIsRevealed] = useState(false);
  const isRevealedRef = useRef(false);

  useEffect(() => {
    isRevealedRef.current = isRevealed;
  }, [isRevealed]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    let touchStartY: number | null = null;

    const atTop = () => window.scrollY <= 0;

    const reveal = () => {
      if (isRevealedRef.current) return;
      setIsRevealed(true);
    };

    const hide = () => {
      if (!isRevealedRef.current) return;
      setIsRevealed(false);
    };

    const onWheel = (event: WheelEvent) => {
      if (!atTop()) return;
      if (!isRevealedRef.current && event.deltaY > 0) {
        event.preventDefault();
        reveal();
      }
      if (isRevealedRef.current && event.deltaY < 0) {
        event.preventDefault();
        hide();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!atTop() || touchStartY === null) return;
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - currentY;
      if (!isRevealedRef.current && delta > 0) {
        event.preventDefault();
        reveal();
      }
      if (isRevealedRef.current && delta < 0) {
        event.preventDefault();
        hide();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!atTop()) return;
      const downKeys = ['ArrowDown', 'PageDown', 'End', ' '];
      const upKeys = ['ArrowUp', 'PageUp', 'Home'];
      if (!isRevealedRef.current && downKeys.includes(event.key)) {
        event.preventDefault();
        reveal();
      }
      if (isRevealedRef.current && upKeys.includes(event.key)) {
        event.preventDefault();
        hide();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const slideBaseClasses =
    'absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center transition-transform duration-700 ease-out motion-reduce:transition-none sm:px-10';

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 accent-border bg-gradient-to-br from-[#141414] via-[#171717] to-[#3A1A1A] px-6 py-20 shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:px-10">
      <div
        className="absolute inset-0 -z-10 animate-fade-in-soft"
        style={
          {
            '--fade-target': '0.4',
          } as CSSProperties & { '--fade-target': string }
        }
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#D14949]/12 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#FF7A7A]/12 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-[-20%] rounded-[100%] border border-[#D14949]/14"
            aria-hidden
            data-animate="spin-slow"
          />
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center">
        <div className="relative h-[580px] w-full max-w-4xl overflow-hidden rounded-3xl sm:h-[620px]">
          <div
            className={`${slideBaseClasses} ${
              isRevealed ? '-translate-y-full pointer-events-none' : 'translate-y-0'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-[#FF7A7A]/20 blur-sm" />
              <div className="relative rounded-3xl border border-white/10 bg-[#141414]/70 p-1 shadow-[0_16px_32px_rgba(209,73,73,0.2)]">
                <Image
                  src="/images/eu.jpeg"
                  alt="Foto de Raphael Brunetto"
                width={240}
                height={240}
                priority
                className="relative h-[240px] w-[240px] rounded-2xl border border-[#D14949]/50 object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="hover-underline text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_6px_16px_rgba(0,0,0,0.4)]">
                <span className="block text-[#E6E6E6]">Raphael Brunetto</span>
                <span className="mt-2 block text-2xl font-medium text-[#D14949] sm:text-3xl">
                  Desenvolvedor & Engenheiro de Software
                </span>
              </h1>
            </div>
          </div>

          <div
            aria-hidden={!isRevealed}
            className={`${slideBaseClasses} ${
              isRevealed ? 'translate-y-0' : 'translate-y-full pointer-events-none'
            }`}
          >
            <p className="mx-auto max-w-2xl text-base text-[#E6E6E6]/80 sm:text-lg">
              Conecto tecnologia a operações para resolver problemas reais. Foco em experiências digitais, automações
              inteligentes e integrações que dão resultado.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
