// src/components/Header.tsx

"use client";

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/LanguageProvider';
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
  FiGlobe,
} from 'react-icons/fi';

const navItems = [
  {
    href: '/',
    label: { 'pt-BR': 'Início', en: 'Home' },
    icon: FiHome,
    accentStart: '#FF7A7A',
    accentEnd: '#D14949',
  },
  {
    href: '/sobre',
    label: { 'pt-BR': 'Sobre', en: 'About' },
    icon: FiUser,
    accentStart: '#FF9A7A',
    accentEnd: '#FF6A5A',
  },
  {
    href: '/projetos',
    label: { 'pt-BR': 'Projetos', en: 'Projects' },
    icon: FiLayers,
    accentStart: '#FF9966',
    accentEnd: '#FF5E62',
  },
  {
    href: '/certificados',
    label: { 'pt-BR': 'Certificados', en: 'Certificates' },
    icon: FiAward,
    accentStart: '#F857A6',
    accentEnd: '#FF5858',
  },
  {
    href: '/voluntario',
    label: { 'pt-BR': 'Voluntário', en: 'Volunteer' },
    icon: FiHeart,
    accentStart: '#FFB347',
    accentEnd: '#FF7A7A',
  },
  {
    href: '/contato',
    label: { 'pt-BR': 'Contato', en: 'Contact' },
    icon: FiMail,
    accentStart: '#FF5F6D',
    accentEnd: '#FFC371',
  },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const menuCopy = {
    'pt-BR': {
      label: 'Menu',
      open: 'Abrir menu de navegação',
      close: 'Fechar menu de navegação',
      toggle: 'Alternar idioma para inglês',
      toggleLabel: 'Idioma',
    },
    en: {
      label: 'Menu',
      open: 'Open navigation menu',
      close: 'Close navigation menu',
      toggle: 'Switch language to Portuguese',
      toggleLabel: 'Language',
    },
  } as const;

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const menuItemBaseClasses =
    'menu-item flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors';
  const menuItemDefaultClasses = 'text-[#E6E6E6] hover:bg-white/5';
  const menuItemActiveClasses = 'bg-white/10 text-[#FFFFFF]';

  return (
    <header className="fixed right-4 top-4 z-50">
      <nav className="relative">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="menu-item language-toggle inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-[#141414]/90 pl-0 pr-3 text-xs font-semibold tracking-[0.3em] text-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#D14949]"
            onClick={toggleLanguage}
            aria-label={menuCopy[language].toggle}
            title={menuCopy[language].toggle}
            aria-pressed={language === 'en'}
          >
            <span
              className="menu-icon-pill"
              style={
                {
                  '--pill-i': '#FF7A7A',
                  '--pill-j': '#D14949',
                } as CSSProperties
              }
            >
              <span className="menu-icon-pill__icon">
                <FiGlobe size={16} />
              </span>
              <span className="menu-icon-pill__label" aria-hidden="true">
                {menuCopy[language].toggleLabel}
              </span>
            </span>
            <span className="menu-item__label" aria-hidden="true">
              <span className={language === 'pt-BR' ? 'text-white' : 'text-white/40'}>PT</span>
              <span className="text-white/30">/</span>
              <span className={language === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
            </span>
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-[#141414]/90 px-4 text-sm font-semibold text-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition-colors hover:text-[#FF7A7A] focus:outline-none focus:ring-2 focus:ring-[#D14949]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? menuCopy[language].close : menuCopy[language].open}
            aria-expanded={menuOpen}
            aria-controls="header-menu"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            <span className="hidden sm:inline">{menuCopy[language].label}</span>
          </button>
        </div>

        <div
          id="header-menu"
          className={`header-menu ${menuOpen ? 'is-open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <ul className="header-menu__list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isCurrent = isActive(item.href);
              const itemLabel = item.label[language];
              return (
                <li key={item.href} className="header-menu__entry">
                  <Link
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`header-menu__item ${menuItemBaseClasses} ${
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
                          {itemLabel}
                        </span>
                      </span>
                      <span className="menu-item__label">{itemLabel}</span>
                    </span>
                    <FiArrowUpRight className="menu-item__arrow" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
