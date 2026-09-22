import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Home, User, Code2, Briefcase, GraduationCap, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Achievements', href: '#achievements', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen
        ? 'bg-[#080F1D] border-b border-slate-800 shadow-xl py-3.5'
        : 'bg-transparent py-4 sm:py-5'
        }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Developer Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-1 text-xs md:text-xs lg:text-sm font-bold tracking-tight font-mono group py-1 shrink-0"
          aria-label="Phanindra Uddagiri Portfolio Home"
        >
          <span className="text-[#5B7CFF] group-hover:text-[#8B5CF6] transition-colors">{'{'}</span>
          <span className="text-white tracking-wider sm:tracking-widest px-0.5 sm:px-1">PHANINDRA UDDAGIRI</span>
          <span className="text-[#8B5CF6] group-hover:text-[#5B7CFF] transition-colors">{'}'}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3.5 md:gap-4 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs lg:text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white nav-link-underline'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeSectionIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#5B7CFF] to-[#8B5CF6] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop & Tablet) */}
        <div className="hidden md:block shrink-0">
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5 lg:gap-2 px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3B66FF] hover:to-[#7C3AED] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-purple-500/30 group"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}

            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay (Solid bg-[#080F1D] so background content never bleeds through) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[65px] inset-x-0 bottom-0 bg-[#080F1D] z-50 flex flex-col justify-between px-4 pt-4 pb-6 overflow-y-auto border-t border-slate-800/80 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">

          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest text-[#5B7CFF] uppercase block px-1 mb-1">
              NAVIGATION MENU
            </span>

            <nav className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                const IconComp = link.icon;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${isActive
                      ? 'bg-gradient-to-r from-[#4F7CFF]/20 to-[#8B5CF6]/20 text-white font-semibold border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg ${isActive
                        ? 'bg-[#4F7CFF] text-white'
                        : 'bg-slate-800 text-slate-400'
                        }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </div>

                    <span>{link.name}</span>

                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#5B7CFF]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <p className="text-center text-[10px] text-slate-500">
              © {new Date().getFullYear()} Phanindra Uddagiri
            </p>
          </div>
        </div>
      )}
    </header>
  );
};


