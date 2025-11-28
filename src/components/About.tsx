const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#F3D849]">
          Sobre mim
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-[#E0E5E9]">
          Gosto de transformar problema complicado em solucao simples
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-lg text-[#E0E5E9]/80 space-y-6 leading-relaxed shadow-[0_20px_45px_rgba(10,98,208,0.35)]">
        <p>
          Sou formado em Engenharia de Software pela Universidade Positivo (UP). Nos últimos
          anos mergulhei em linguagens de programacao, bancos de dados, arquitetura de aplicacoes e metodologias ageis
          como SCRUM para construir projetos mais colaborativos e previsiveis.
        </p>
        <p>
          No estagio descobri o quanto gosto de entender a dor do usuario e resolver problemas de ponta a ponta. Desde
          entao, direciono meus estudos e projetos para criar experiencias uteis e acessiveis, sempre com foco em gerar
          impacto real.
        </p>
        <p>
          Tenho ingles avancado, portugues nativo e japones em nivel iniciante. Curioso por natureza, estou sempre
          experimentando ferramentas, integracoes e automacoes que aceleram a entrega de valor.
        </p>
      </div>
    </div>
  );
};

export default About;
