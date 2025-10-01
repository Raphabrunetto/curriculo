"use client"; 

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <motion.section
      className="text-center py-24 px-4" // py-24: Aumenta o espaçamento vertical para mais destaque
      initial={{ opacity: 0, y: 30 }} // y: 30: Animação de subida mais sutil
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }} // Adiciona um leve giro na entrada
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }} // Deixa a animação mais "suave" (spring)
        >
          <Image
            src="/images/profile.jpeg"
            alt="Sua Foto de Perfil"
            width={200} // ⬅️ AUMENTADO
            height={200} // ⬅️ AUMENTADO
            // ⬅️ MOLDURA MAIS GROSSA (border-6) e SOMBRA MAIS FORTE (shadow-3xl)
            className="rounded-full object-cover border-6 border-purple-500 shadow-3xl shadow-purple-500/50 mb-6" 
          />
        </motion.div>
        
        <motion.h1
          className="text-6xl sm:text-7xl font-extrabold mb-4 leading-tight" // text-7xl e font-extrabold: Título mais impactante
          style={{ 
            background: 'linear-gradient(90deg, #a78bfa 0%, #ec4899 100%)', // Gradiente mais claro para o modo escuro
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          [Raphael Brunetto]
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-300 font-normal mt-2" // mt-2: Espaçamento no topo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }} // Animação posterior ao nome
        >
          Estudante de Engenharia de Software | UI/UX Enthusiast | Técnico de Operações
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;