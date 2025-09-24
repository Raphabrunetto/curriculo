import Image from 'next/image';

const Hero = () => {
  return (
    <section className="text-center py-20 px-4">
      <div className="flex flex-col items-center">
        <Image
          src="/images/profile.jpg"
          alt="Sua Foto de Perfil"
          width={128}
          height={128}
          className="rounded-full object-cover border-4 border-purple-500 mb-4"
        />
        <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          Olá, eu sou [Seu Nome]
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 font-light">
          Desenvolvedor Front-end | [Seu Título Profissional]
        </p>
      </div>
    </section>
  );
};

export default Hero;