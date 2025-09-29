const About = () => {
    return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Sobre Mim</h2>
      <div className="text-lg text-gray-300 space-y-6"> {/* Aumentamos o espaçamento entre parágrafos */}
        <p>
          [Eu sou estudante de engenharia de software pela Universidade Positivo(UP), estou no oitavo período! Venho estudando desde então linguagens de programação, bancos de dados, estruturas de aplicações, etc... Nesse meio tempo aprendi a trabalhar com SCRUM, e metodologias ágeis de produção.]
        </p>
        <p>
          [Descobri no meu estágio que adorava resolver problemas, e foi com essa motivação que comecei a desenvolver, pensando sobre resolver problemas e ajudar usuários onde for possível, venho há algum tempo me dedicando bastante para tornar realidade o meu sonho de trabalhar e poder viver bem da tecnologia!]
        </p>
      </div>
    </div>
  );
};

export default About;