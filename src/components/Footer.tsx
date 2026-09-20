import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080F1D] border-t border-slate-800/80 text-slate-400 py-8 sm:py-10 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Logo & Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-1 text-xs sm:text-sm font-bold font-mono tracking-wider group py-0.5"
            >
              <span className="text-[#5B7CFF] group-hover:text-[#8B5CF6] transition-colors">{'{'}</span>
              <span className="text-white tracking-widest px-0.5">PHANINDRA UDDAGIRI</span>
              <span className="text-[#8B5CF6] group-hover:text-[#5B7CFF] transition-colors">{'}'}</span>
            </a>
            <span className="text-[11px] sm:text-xs text-slate-500">
              Full-Stack Python Developer & Computer Science Engineer
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1 sm:p-0 rounded-full sm:rounded-none bg-slate-900/60 sm:bg-transparent border border-slate-800/80 sm:border-0 text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2.5">
            <SocialLinks className="flex items-center gap-4 text-slate-400" iconClassName="w-4 h-4 hover:text-white transition-colors" />
            <span className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Phanindra Uddagiri. All rights reserved.
            </span>
          </div>

        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </footer>
  );
};


