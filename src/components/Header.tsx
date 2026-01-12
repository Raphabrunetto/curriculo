// src/components/Header.tsx

"use client";

import type { CSSProperties } from 'react';
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
  { href: '/', label: 'Início', icon: FiHome, accentStart: '#FF7A7A', accentEnd: '#D14949' },
  { href: '/sobre', label: 'Sobre', icon: FiUser, accentStart: '#FF9A7A', accentEnd: '#FF6A5A' },
  { href: '/projetos', label: 'Projetos', icon: FiLayers, accentStart: '#FF9966', accentEnd: '#FF5E62' },
  { href: '/certificados', label: 'Certificados', icon: FiAward, accentStart: '#F857A6', accentEnd: '#FF5858' },
  { href: '/voluntario', label: 'Voluntário', icon: FiHeart, accentStart: '#FFB347', accentEnd: '#FF7A7A' },
  { href: '/contato', label: 'Contato', icon: FiMail, accentStart: '#FF5F6D', accentEnd: '#FFC371' },
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

  const menuItemBaseClasses =
    'menu-item flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors';
  const menuItemDefaultClasses =
    'text-[#E6E6E6] hover:bg-white/5';
  const menuItemActiveClasses =
    'bg-white/10 text-[#FFFFFF]';

  return (
    <header className="fixed right-4 top-4 z-50">
      <nav className="relative">
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-[#141414]/90 px-4 text-sm font-semibold text-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-colors hover:text-[#FF7A7A] focus:outline-none focus:ring-2 focus:ring-[#D14949]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={menuOpen}
          aria-controls="header-menu"
        >
          {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          <span className="hidden sm:inline">Menu</span>
        </button>

        {menuOpen && (
          <div
            id="header-menu"
            className="absolute right-0 mt-3 w-72 rounded-2xl border border-white/10 bg-[#141414]/95 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isCurrent = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${menuItemBaseClasses} ${
                        isCurrent ? menuItemActiveClasses : menuItemDefaultClasses
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="menu-icon-pill"
                          style={
                            {
                              '--pill-i': item.accentStart,
                              '--pill-j': item.accentEnd,
                            } as CSSProperties
                          }
                        >
                          <span className="menu-icon-pill__icon">
                            <Icon size={16} />
                          </span>
                          <span className="menu-icon-pill__label" aria-hidden="true">
                            {item.label}
                          </span>
                        </span>
                        <span className="menu-item__label">{item.label}</span>
                      </span>
                      <FiArrowUpRight className="menu-item__arrow" />
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
