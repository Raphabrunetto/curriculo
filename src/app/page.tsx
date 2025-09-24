import Hero from '@/components/Hero';
import About from '@/components/About';
import Card from '@/components/Card';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

export default function HomePage() {
  const projects = [
    {
      title: "Projeto One Piece",
      description: "Site feito em HTML, CSS e JS para aprender os básicos e gramática das linguagens.",
      techs: ["HTML", "CSS", "JavaScript"],
      link: "https://raphabrunetto.github.io/projeto-one-piece"
    },
    // Adicione os seus outros projetos
  ];

  return (
    <>
      {/* O Hero já tem um espaçamento bom */}
      <Hero />

      {/* Vamos adicionar espaçamento em cada seção, e usar o 'id' para navegação */}
      <section id="sobre" className="py-16 px-4">
        <About />
      </section>

      <section id="projetos" className="py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">Meus Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="experiencia" className="py-16 px-4">
        <Experience />
      </section>

      <section id="educacao" className="py-16 px-4">
        <Education />
      </section>
    </>
  );
}