"use client";

import { useLanguage } from '@/components/LanguageProvider';

const About = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          {isEnglish ? 'About me' : 'Sobre mim'}
        </span>
        <h2 className="hover-underline mt-4 text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
          {isEnglish
            ? 'I like turning complex problems into simple solutions'
            : 'Gosto de transformar problemas complicados em soluções simples'}
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-lg text-[#E6E6E6]/80 space-y-6 leading-relaxed shadow-[0_20px_45px_rgba(209,73,73,0.35)]">
        {isEnglish ? (
          <>
            <p>
              My goal is to work as a{' '}
              <span className="font-semibold text-[#FF7A7A]">full-stack</span> developer, creating efficient,
              scalable, and well-structured solutions. I apply frontend and backend knowledge to deliver products
              with performance, usability, and best practices, collaborating with agile teams across the full
              project lifecycle.
            </p>
            <p>
              I have worked on practical projects such as authentication in{' '}
              <span className="font-semibold text-[#FF7A7A]">PHP</span> with{' '}
              <span className="font-semibold text-[#FF7A7A]">JWT</span> and Google social login, APIs in{' '}
              <span className="font-semibold text-[#FF7A7A]">Python</span> for inventory control, real-time chat
              backends with <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> and{' '}
              <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span>, plus{' '}
              <span className="font-semibold text-[#FF7A7A]">Next.js</span> interfaces integrated with the backend.
              Most were containerized with <span className="font-semibold text-[#FF7A7A]">Docker</span> to
              standardize environments and support DevOps automation.
            </p>
            <p>
              At my current company, I built scripts in{' '}
              <span className="font-semibold text-[#FF7A7A]">Python</span> with{' '}
              <span className="font-semibold text-[#FF7A7A]">OpenCV</span> that sped up analysis and delivered a{' '}
              <span className="font-semibold text-[#FF7A7A]">20% improvement</span> in AI results. I also automated
              flows in Monday and Automa to reduce manual tasks and improve time tracking. I have advanced English,
              native Portuguese, and beginner-level Japanese.
            </p>
          </>
        ) : (
          <>
            <p>
              Meu objetivo é atuar como desenvolvedor{' '}
              <span className="font-semibold text-[#FF7A7A]">full stack</span>, criando soluções eficientes,
              escaláveis e bem estruturadas. Aplico conhecimento em frontend e backend para entregar produtos com
              performance, usabilidade e boas práticas, colaborando com times ágeis em todo o ciclo de vida dos
              projetos.
            </p>
            <p>
              Atuei em projetos práticos como autenticação em{' '}
              <span className="font-semibold text-[#FF7A7A]">PHP</span> com{' '}
              <span className="font-semibold text-[#FF7A7A]">JWT</span> e login social via Google, APIs em{' '}
              <span className="font-semibold text-[#FF7A7A]">Python</span> para controle de estoque, backends de chat
              em tempo real com <span className="font-semibold text-[#FF7A7A]">Socket.IO</span> e{' '}
              <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span>, além de interfaces em{' '}
              <span className="font-semibold text-[#FF7A7A]">Next.js</span> integradas ao backend. A maioria foi
              containerizada com <span className="font-semibold text-[#FF7A7A]">Docker</span> para padronizar
              ambientes e apoiar automações de DevOps.
            </p>
            <p>
              Na minha empresa atual, desenvolvi scripts em{' '}
              <span className="font-semibold text-[#FF7A7A]">Python</span> com{' '}
              <span className="font-semibold text-[#FF7A7A]">OpenCV</span> que aceleraram análises e geraram uma{' '}
              <span className="font-semibold text-[#FF7A7A]">melhora de 20%</span> nos resultados da IA. Também
              automatizei fluxos no Monday e no Automa para reduzir tarefas manuais e aumentar a assertividade no
              controle de tempo e tarefas. Tenho inglês avançado, português nativo e japonês em nível iniciante.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
