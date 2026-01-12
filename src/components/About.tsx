const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF7A7A]">
          Sobre mim
        </span>
        <h2 className="hover-underline mt-4 text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
          Gosto de transformar problemas complicados em soluções simples
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-lg text-[#E6E6E6]/80 space-y-6 leading-relaxed shadow-[0_20px_45px_rgba(209,73,73,0.35)]">
        <p>
          Sou formado em Engenharia de Software pela Universidade Positivo (UP), aguardando meu diploma. Nos últimos
          anos mergulhei em linguagens de programação, bancos de dados, arquitetura de aplicações e metodologias ágeis
          como Scrum para construir projetos mais colaborativos e previsíveis.
        </p>
        <p>
          No estágio descobri o quanto gosto de entender a dor do usuário e resolver problemas de ponta a ponta. Desde
          então, direciono meus estudos e projetos para criar experiências úteis e acessíveis, sempre com foco em gerar
          impacto real.
        </p>
        <p>
          Tenho inglês avançado, português nativo e japonês em nível iniciante. Curioso por natureza, estou sempre
          experimentando ferramentas, integrações e automações que aceleram a entrega de valor.
        </p>
      </div>
    </div>
  );
};

export default About;
