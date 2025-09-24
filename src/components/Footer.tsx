import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-8 bg-gray-950 border-t border-gray-800 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" aria-label="GitHub" className="hover:text-gray-400 transition-colors">
            <FaGithub size={24} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-gray-400 transition-colors">
            <FaLinkedin size={24} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-gray-400 transition-colors">
            <FaTwitter size={24} />
          </Link>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;