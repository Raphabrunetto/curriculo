import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

export const metadata = {
  title: 'Sobre | Raphael Brunetto',
  description: 'Conheca minha trajetoria, habilidades tecnicas e experiencias profissionais.',
};

export default function SobrePage() {
  return (
    <div className="space-y-16 pb-20">
      <About />
      <Skills />
      <Experience />
      <Education />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_45px_rgba(10,98,208,0.35)]">
        <h3 className="text-2xl font-semibold text-[#E0E5E9] mb-3">Pronto para conversar?</h3>
        <p className="text-[#E0E5E9]/70 text-sm max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades, parcerias e conversas sobre tecnologia. Vamos trocar uma ideia?
        </p>
        <Link
          href="/contato"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0A62D0]/60 bg-[#0A62D0] px-7 py-3 text-sm font-semibold text-[#E0E5E9] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#0A62D0]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A62D0]"
        >
          Falar comigo
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
