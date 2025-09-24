import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-8 bg-gray-950 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          [Seu Nome]
        </div>
        <div>
          <ul className="flex space-x-4 sm:space-x-8">
            <li>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;