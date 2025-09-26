// src/components/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    // 1. O HEADER deve ter largura total da tela (w-full) para o fundo ficar de ponta a ponta
    <header className="py-6 bg-gray-950 border-b border-gray-800 w-full"> 
      
      {/* 2. O NAV deve centralizar o conteúdo no mesmo tamanho do <main> */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 flex justify-between items-center">
        
        {/* Título */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          [Raphael Augusto Lira Brunetto]
        </div>
        
        {/* Navegação */}
        <div>
          <ul className="flex space-x-4 sm:space-x-8">
            <li>
              <Link href="#sobre" className="text-white hover:text-purple-400 transition-colors">Sobre</Link>
            </li>
            <li>
              <Link href="#projetos" className="text-white hover:text-purple-400 transition-colors">Projetos</Link>
            </li>
            <li>
              <Link href="#contato" className="text-white hover:text-purple-400 transition-colors">Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;