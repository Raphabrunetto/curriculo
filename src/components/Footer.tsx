"use client";

import type { CSSProperties } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/Raphabrunetto',
    label: 'GitHub',
    accent: '#24292e',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/raphael-brunetto-dev',
    label: 'LinkedIn',
    accent: '#0077b5',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:raphabrunetto@gmail.com',
    label: 'E-mail',
    accent: '#D14949',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#101010] py-10 text-center text-[#E6E6E6]/70">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="social-link animate-fade-in-up"
                style={
                  {
                    '--social-accent': item.accent,
                    animationDelay: `${0.2 + index * 0.1}s`,
                  } as CSSProperties
                }
              >
                <Icon size={20} className="social-link__icon" />
              </a>
            );
          })}
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-[#FF7A7A]/70">
          Construindo experiências que deixam a tecnologia mais humana
        </p>
        <p className="text-sm text-[#E6E6E6]/50">
          &copy; {new Date().getFullYear()} Raphael Brunetto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
