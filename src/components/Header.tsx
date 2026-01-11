// src/components/Header.tsx

"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiLayers,
  FiAward,
  FiHeart,
  FiMail,
  FiArrowUpRight,
} from 'react-icons/fi';

const navItems = [
  { href: '/', label: 'Inicio', icon: FiHome },
  { href: '/sobre', label: 'Sobre', icon: FiUser },
  { href: '/projetos', label: 'Projetos', icon: FiLayers },
  { href: '/certificados', label: 'Certificados', icon: FiAward },
  { href: '/voluntario', label: 'Voluntario', icon: FiHeart },
  { href: '/contato', label: 'Contato', icon: FiMail },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const linkBaseClasses =
    'inline-flex items-center gap-3 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200';
  const desktopLinkClasses =
    'text-[#E6E6E6] hover:text-[#FF7A7A] hover:bg-white/5';
  const activeClasses =
    'text-[#141414] bg-[#FF7A7A] ring-1 ring-[#FF7A7A]/60 shadow-[0_0_14px_-2px_rgba(255,122,122,0.55)]';

  return (
    <header className="py-5 w-full sticky top-0 z-50 bg-transparent">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-end sm:justify-center gap-6">
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-[#E6E6E6] hover:text-[#FF7A7A] focus:outline-none focus:ring-2 focus:ring-[#D14949]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu de navegacao"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <ul className="hidden sm:flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                {(() => {
                  const Icon = item.icon;
                  const isCurrent = isActive(item.href);
                  return (
                    <Link
                      href={item.href}
                      className={`${linkBaseClasses} ${
                        isCurrent ? activeClasses : desktopLinkClasses
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full ${
                          isCurrent ? 'bg-[#141414]/10 text-[#141414]' : 'bg-[#D14949]/10 text-[#D14949]'
                        }`}
                      >
                        <Icon size={16} />
                      </span>
                      {item.label}
                    </Link>
                  );
                })()}
              </li>
            ))}
          </ul>
        </div>
        {menuOpen && (
          <div className="sm:hidden mt-4 border-t border-white/10 pt-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isCurrent = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${linkBaseClasses} ${
                        isCurrent
                          ? `${activeClasses} justify-between`
                          : `${desktopLinkClasses} justify-between bg-white/5`
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`grid h-9 w-9 place-items-center rounded-full ${
                            isCurrent ? 'bg-[#141414]/10 text-[#141414]' : 'bg-[#D14949]/15 text-[#D14949]'
                          }`}
                        >
                          <Icon size={18} />
                        </span>
                      {item.label}
                      </span>
                      <FiArrowUpRight className={isCurrent ? 'text-[#141414]' : 'text-[#FF7A7A]'} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
