import Card from '@/components/Card';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projetos | Raphael Brunetto',
  description: 'Portfolio de projetos com foco em automacao, interfaces e resolucao de problemas reais.',
};

export default function ProjetosPage() {
  return (
    <div className="space-y-10 pb-20">
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">Projetos</h1>
        <p className="text-[#E6E6E6]/70 text-sm sm:text-base">
          Uma selecao dos meus trabalhos mais recentes, com foco em entregar valor real, melhorar processos e criar
          experiencias significativas.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
