import Hero from '@/components/Hero';
import About from '@/components/About';
import Card from '@/components/Card';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Volunteer from '@/components/Volunteer';
import Certifications from '@/components/Certifications';
import WhatsAppButton from '@/components/WhatsAppButton';

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
    // Usamos o 'space-y-20' para garantir um espaçamento maior entre todas as grandes seções
    <div className="space-y-20 pb-20"> 
      
      {/* 1. SEÇÃO DE APRESENTAÇÃO E SOBRE MIM */}
      <section id="sobre" className="pt-8 px-4"> 
        <Hero />
        <About />
      </section>

       {/* SEÇÃO DE HABILIDADES */}
      <section id="habilidades" className="px-4"> 
        <Skills />
      </section>

      {/*  SEÇÃO DE CERTIFICADOS */}
      <section id="certificados" className="px-4"> 
        <Certifications />
      </section>

      {/* 2. SEÇÃO DE PROJETOS */}
      <section id="projetos" className="px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">Meus Projetos</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </section>

      {/* 3. SEÇÃO DE EXPERIÊNCIA PROFISSIONAL */}
      <section id="experiencia" className="px-4">
        <Experience />
      </section>

      {/* 4. SEÇÃO DE FORMAÇÃO ACADÊMICA */}
      <section id="formacao" className="px-4">
        <Education />
      </section>

       {/* ⬅️ NOVO: SEÇÃO DE TRABALHOS VOLUNTÁRIOS */}
      <section id="voluntario" className="px-4"> 
        <Volunteer />
      </section>

      {/* 5. SEÇÃO DE CONTATO - IMPLEMENTAÇÃO FINAL COM WHATSAPP */}
      <section id="contato" className="px-4 pt-10">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">Vamos Trabalhar Juntos!</h2>
        
        <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-400 mb-8">
                Tenho interesse em novas oportunidades! Entre em contato diretamente pelo WhatsApp para uma resposta rápida:
            </p>
            
            {/* BOTÃO WHATSAPP - Substitui os links de texto genéricos */}
            <WhatsAppButton />
            
            {/* Texto de reforço, já que os outros links (Email, LinkedIn) estão no Footer */}
            <p className="text-sm text-gray-500 mt-4">Ou confira os links diretos no rodapé para GitHub LinkedIn e E-mail.</p>
        </div>

      </section>

    </div>
  );
}