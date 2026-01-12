import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

export const metadata = {
  title: 'Sobre | Raphael Brunetto',
  description: 'Conheça minha trajetória, habilidades técnicas e experiências profissionais.',
};

export default function SobrePage() {
  return (
    <div className="space-y-16 pb-20">
      <About />
      <Skills />
      <Experience />
      <Education />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_45px_rgba(209,73,73,0.35)]">
        <h3 className="hover-underline text-2xl font-semibold text-[#E6E6E6] mb-3">Pronto para conversar?</h3>
        <p className="text-[#E6E6E6]/70 text-sm max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades, parcerias e conversas sobre tecnologia. Vamos trocar uma ideia?
        </p>
        <Link
          href="/contato"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D14949]/60 bg-[#D14949] px-7 py-3 text-sm font-semibold text-[#E6E6E6] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#D14949]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D14949]"
        >
          Falar comigo
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
