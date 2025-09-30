import Link from 'next/link';
// Troque FaTwitter por FaEnvelope (ícone de e-mail)
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-8 bg-gray-950 border-t border-gray-800 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          
          {/* GitHub */}
          <Link href="https://github.com/Raphabrunetto" target="_blank" aria-label="GitHub" className="hover:text-gray-400 transition-colors">
            <FaGithub size={24} />
          </Link>
          
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/raphael-brunetto-dev" target="_blank" aria-label="LinkedIn" className="hover:text-gray-400 transition-colors">
            <FaLinkedin size={24} />
          </Link>
          
          {/* Email (NOVO) */}
          {/* O mailto: abre o cliente de e-mail padrão do usuário */}
          <Link href="mailto:raphabrunetto@gmail.com" aria-label="Email" className="hover:text-gray-400 transition-colors">
            <FaEnvelope size={24} />
          </Link>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;