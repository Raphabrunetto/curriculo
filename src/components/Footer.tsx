"use client";

import Link from 'next/link';
import { motion } from 'framer-motion'; // ⬅️ Importação necessária para animação
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-8 bg-gray-950 border-t border-gray-800 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          
          {/* GitHub: USANDO motion.a para animação */}
          <motion.a
            href="https://github.com/Raphabrunetto" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
            initial={{ opacity: 0, y: 10 }} // Animação de entrada
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.2 }} // ⬅️ ANIMAÇÃO HOVER
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          
          {/* LinkedIn: USANDO motion.a para animação */}
          <motion.a
            href="https://www.linkedin.com/in/raphael-brunetto-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
            initial={{ opacity: 0, y: 10 }} // Animação de entrada
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }} // Delay escalonado
            whileHover={{ scale: 1.2 }} // ⬅️ ANIMAÇÃO HOVER
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          
          {/* Email: USANDO motion.a para animação */}
          <motion.a
            href="mailto:raphabrunetto@gmail.com" 
            aria-label="Email" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
            initial={{ opacity: 0, y: 10 }} // Animação de entrada
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }} // Delay escalonado
            whileHover={{ scale: 1.2 }} // ⬅️ ANIMAÇÃO HOVER
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={24} />
          </motion.a>
          
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Raphael Brunetto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;