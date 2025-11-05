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
    'text-[#E0E5E9] hover:text-[#F3D849] hover:bg-white/5';
  const activeClasses =
    'text-[#191718] bg-[#F3D849] ring-1 ring-[#F3D849]/60 shadow-[0_0_14px_-2px_rgba(243,216,73,0.55)]';

  return (
    <header className="py-5 w-full sticky top-0 z-50 bg-[#191718]/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 pr-6 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#0A62D0]/50"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0A62D0] text-[#E0E5E9] text-base font-bold">
              RB
            </span>
            <span className="flex flex-col leading-tight text-left">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#F3D849]">portfolio</span>
              <span className="text-sm font-semibold text-[#E0E5E9] tracking-wide">Raphael Brunetto</span>
            </span>
          </Link>
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-[#E0E5E9] hover:text-[#F3D849] focus:outline-none focus:ring-2 focus:ring-[#0A62D0]"
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
                          isCurrent ? 'bg-[#191718]/10 text-[#191718]' : 'bg-[#0A62D0]/10 text-[#0A62D0]'
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
                            isCurrent ? 'bg-[#191718]/10 text-[#191718]' : 'bg-[#0A62D0]/15 text-[#0A62D0]'
                          }`}
                        >
                          <Icon size={18} />
                        </span>
                      {item.label}
                      </span>
                      <FiArrowUpRight className={isCurrent ? 'text-[#191718]' : 'text-[#F3D849]'} />
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
