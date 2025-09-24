import Hero from '@/components/Hero';
import About from '@/components/About';
import Card from '@/components/Card';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

export default function HomePage() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Um resumo do projeto 1, o que ele faz e as tecnologias usadas.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    // Adicione os seus outros projetos
  ];

  return (
    <>
      <Hero />
      <About />

      <section id="projetos" className="my-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">Meus Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </section>

      <Experience />
      <Education />
    </>
  );
}