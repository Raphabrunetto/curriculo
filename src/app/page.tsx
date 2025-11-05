import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import { projects } from '@/data/projects';

const quickLinks = [
  {
    title: 'Sobre mim',
    description: 'Quem sou, minhas habilidades e experiencia profissional.',
    href: '/sobre',
  },
  {
    title: 'Projetos',
    description: 'Veja os projetos que construi e os problemas que resolvi.',
    href: '/projetos',
  },
  {
    title: 'Certificados',
    description: 'Cursos e certificacoes que sustentam minha formacao continua.',
    href: '/certificados',
  },
  {
    title: 'Contato',
    description: 'Fale comigo diretamente para oportunidades e colaboracoes.',
    href: '/contato',
  },
];

const highlightProjects = projects.slice(0, 2);

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      <section className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#E0E5E9]">Escolha por onde comecar</h2>
        <p className="text-lg text-[#E0E5E9]/70 text-center max-w-3xl mx-auto">
          Navegue pelas paginas para conhecer minha trajetoria, resultados que entreguei e como podemos construir algo
          juntos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A62D0]/60 hover:bg-[#0A62D0]/10"
            >
              <h3 className="text-xl font-semibold text-[#E0E5E9] mb-2 group-hover:text-[#F3D849] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#E0E5E9]/70 text-sm leading-relaxed">{item.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#0A62D0] group-hover:text-[#F3D849]">
                Acessar pagina{' '}
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">Projetos em destaque</h2>
            <p className="text-[#E0E5E9]/70 mt-2 max-w-2xl">
              Uma amostra do que tenho construindo recentemente. Veja todos os detalhes na pagina de projetos.
            </p>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center text-sm font-semibold text-[#0A62D0] hover:text-[#F3D849] transition-colors"
          >
            Ver todos
            <FaArrowRight className="ml-2" size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {highlightProjects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
