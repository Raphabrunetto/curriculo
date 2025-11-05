"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/Raphabrunetto',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/raphael-brunetto-dev',
    label: 'LinkedIn',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:raphabrunetto@gmail.com',
    label: 'E-mail',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#111112] py-10 text-center text-[#E0E5E9]/70">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-[#E0E5E9] transition-colors hover:border-[#0A62D0] hover:bg-[#0A62D0]/20 hover:text-[#0A62D0]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-[#F3D849]/70">
          Construindo experiencias que deixam a tecnologia mais humana
        </p>
        <p className="text-sm text-[#E0E5E9]/50">
          &copy; {new Date().getFullYear()} Raphael Brunetto. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
