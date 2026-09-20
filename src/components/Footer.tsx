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
    <footer className="bg-[#080F1D] border-t border-slate-800/80 text-slate-400 py-10 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-1 text-xl font-bold font-mono">
              <span className="text-[#5B7CFF]">{'{'}</span>
              <span className="text-white tracking-widest px-0.5">PU</span>
              <span className="text-[#8B5CF6]">{'}'}</span>
            </a>
            <span className="text-xs text-slate-500">
              © {new Date().getFullYear()} Phanindra Uddagiri. All rights reserved.
            </span>
          </div>

          {/* Right Navigation & Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm w-full md:w-auto">
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {footerNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

            <SocialLinks className="flex items-center gap-4 text-slate-400" iconClassName="w-4 h-4 hover:text-white transition-colors" />
          </div>

        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 p-3 rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

