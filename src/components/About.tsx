const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center flex flex-col items-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          Sobre mim
        </span>
        <h2 className="hover-underline mt-4 text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
          Gosto de transformar problemas complicados em soluções simples
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-lg text-[#E6E6E6]/80 space-y-6 leading-relaxed shadow-[0_20px_45px_rgba(209,73,73,0.35)]">
        <p>
          Meu objetivo é atuar como desenvolvedor {' '}
          <span className="font-semibold text-[#FF7A7A]">fullstack</span>, criando soluções eficientes, escaláveis
          e bem estruturadas. Aplico conhecimento em frontend e backend para entregar produtos com performance,
          usabilidade e boas práticas, colaborando com times ágeis no ciclo completo dos projetos.
        </p>
        <p>
          Atuei em projetos práticos como autenticação em{' '}
          <span className="font-semibold text-[#FF7A7A]">PHP</span>{' '}com{' '}
          <span className="font-semibold text-[#FF7A7A]">JWT</span>{' '}e login social via Google, APIs em{' '}
          <span className="font-semibold text-[#FF7A7A]">Python</span>{' '}para controle de estoque, backends de chat
          em tempo real com{' '}
          <span className="font-semibold text-[#FF7A7A]">Socket.IO</span>{' '}e{' '}
          <span className="font-semibold text-[#FF7A7A]">RabbitMQ</span>, além de interfaces em{' '}
          <span className="font-semibold text-[#FF7A7A]">Next.js</span>{' '}integradas ao backend. A maioria foi
          containerizada com{' '}
          <span className="font-semibold text-[#FF7A7A]">Docker</span>{' '}para padronizar ambientes e apoiar
          automações de DevOps.
        </p>
        <p>
          Na minha atual empresa, desenvolvi scripts em{' '}
          <span className="font-semibold text-[#FF7A7A]">Python</span>{' '}com{' '}
          <span className="font-semibold text-[#FF7A7A]">OpenCV</span>{' '}que aceleraram análises e geraram{' '}
          <span className="font-semibold text-[#FF7A7A]">melhora de 20%</span>{' '}nos resultados da IA. Também
          automatizei fluxos no Monday e no Automa para reduzir tarefas manuais e aumentar a assertividade no controle
          de tempo e tarefas. Tenho inglês avançado, português nativo e japonês em nível iniciante.
        </p>
      </div>
    </div>
  );
};

export default About;
