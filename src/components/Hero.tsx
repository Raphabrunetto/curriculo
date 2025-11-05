"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ctas = [
  {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5541997532136?text=Ola%2C%20Raphael!%20Vi%20seu%20portfolio%20e%20gostaria%20de%20falar%20sobre%20uma%20oportunidade.',
    icon: FaWhatsapp,
    style:
      'bg-[#F3D849] text-[#191718] hover:bg-[#F3D849]/90 focus-visible:ring-[#F3D849]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raphael-brunetto-dev',
    icon: FaLinkedin,
    style:
      'bg-[#0A62D0] text-[#E0E5E9] hover:bg-[#0A62D0]/85 focus-visible:ring-[#0A62D0]',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Raphabrunetto',
    icon: FaGithub,
    style:
      'bg-white/5 text-[#E0E5E9] hover:bg-white/10 focus-visible:ring-white/40',
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#191718] via-[#1F232A] to-[#0A62D0] px-6 py-20 shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:px-10">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0A62D0]/25 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#F3D849]/25 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-[-20%] rounded-[100%] border border-[#0A62D0]/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>

      <div className="relative flex flex-col items-center gap-10 text-center">
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-4 rounded-full border border-[#F3D849]/35 blur-md" />
          <Image
            src="/images/profile.jpeg"
            alt="Foto de Raphael Brunetto"
            width={200}
            height={200}
            priority
            className="relative rounded-full border-4 border-[#0A62D0]/70 object-cover shadow-[0_25px_50px_-12px_rgba(10,98,208,0.55)]"
          />
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#F3D849]">
            Ola, eu sou
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-[#E0E5E9]">Raphael Brunetto</span>
            <span className="mt-2 block text-2xl font-medium text-[#0A62D0] sm:text-3xl">
              Desenvolvedor & Explorador de Produto
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-[#E0E5E9]/80 sm:text-lg">
            Conecto tecnologia a operacoes para resolver problemas reais. Foco em experiencias digitais, automacoes
            inteligentes e integracoes que dao resultado rapido.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
