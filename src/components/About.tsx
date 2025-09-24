const About = () => {
  return (
    <section id="sobre" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Sobre Mim</h2>
      <div className="text-lg text-gray-300 space-y-4">
        <p>
          [Escreva aqui um parágrafo sobre sua trajetória, o que você faz de melhor e por que você ama desenvolver. Ex: "Desde que comecei a programar, me apaixonei por transformar ideias em experiências digitais interativas e visualmente atraentes..."]
        </p>
        <p>
          [Adicione um segundo parágrafo sobre suas habilidades ou paixões fora do trabalho. Isso te diferencia! Ex: "Sou especialista em [tecnologias principais] e estou sempre buscando aprender novas ferramentas para entregar soluções modernas e otimizadas..."]
        </p>
      </div>
    </section>
  );
};

export default About;