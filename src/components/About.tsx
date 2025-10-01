const About = () => {
    return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Sobre Mim</h2>
      <div className="text-lg text-gray-300 space-y-6"> {/* Aumentamos o espaçamento entre parágrafos */}
        <p>
          [Sou estudante de engenharia de software pela Universidade Positivo(UP), estou no oitavo período! Venho estudando desde então linguagens de programação, bancos de dados, estruturas de aplicações, etc... Nesse meio tempo aprendi a trabalhar com metodologias ágeis de produção, como SCRUM.]
        </p>
        <p>
          [Descobri no meu estágio que adorava resolver problemas, e foi com essa motivação que comecei a desenvolver, pensando sobre resolver problemas e ajudar usuários onde for possível, venho me dedicando bastante para tornar realidade os meus sonhos e poder viver da tecnologia!]
        </p>
         <p>
          [Possuo inglês de nível avançado, português como lingua nativa e japonês em nível iniciante.]
        </p>
      </div>
    </div>
  );
};

export default About;