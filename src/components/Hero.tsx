"use client"; 

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    // Envolva o conteúdo com o motion.section
    <motion.section
      className="text-center py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Sua Foto de Perfil"
            width={128}
            height={128}
            className="rounded-full object-cover border-4 border-purple-500 mb-4"
          />
        </motion.div>
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Olá, eu sou [Seu Nome]
        </motion.h1>
        <p className="text-xl sm:text-2xl text-gray-400 font-light">
          Desenvolvedor Front-end | [Seu Título Profissional]
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;