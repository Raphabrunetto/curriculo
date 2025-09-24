const About = () => {
    return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Sobre Mim</h2>
      <div className="text-lg text-gray-300 space-y-6"> {/* Aumentamos o espaçamento entre parágrafos */}
        <p>
          [Escreva aqui um parágrafo sobre sua trajetória, o que você faz de melhor e por que você ama desenvolver.]
        </p>
        <p>
          [Adicione um segundo parágrafo sobre suas habilidades ou paixões fora do trabalho. Isso te diferencia!]
        </p>
      </div>
    </div>
  );
};

export default About;