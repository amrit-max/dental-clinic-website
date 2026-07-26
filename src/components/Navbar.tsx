import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import LucideIcon from './LucideIcon';
import logoImg from '../../assets/logo.webp';
import logoImg2 from '../../assets/logo2.jpeg';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Contact', value: 'contact' }
  ];

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    handlePageChange(page);
  };

  const useDarkText = isScrolled || activePage !== 'home';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 lg:bg-white/85 lg:backdrop-blur-md shadow-premium border-b border-slate-100/50 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-logo-btn"
          href="/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center space-x-2.5 sm:space-x-3.5 focus:outline-none group cursor-pointer animate-fade-in"
        >
          {/* Aurus Dental Branding */}
          <div className="flex items-center space-x-2">
            <img 
              src={logoImg} 
              alt="Aurus Dental Studio" 
              className="h-8 sm:h-10 md:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
            />
            <span className={`hidden lg:block font-display font-extrabold text-sm xl:text-base tracking-tight transition-colors duration-300 ${
              useDarkText ? 'text-deep-navy' : 'text-white'
            }`}>
              AURUS<span className="text-brand-blue">DENTAL</span>
            </span>
          </div>

          {/* Divider */}
          <span className={`h-5 sm:h-6 md:h-7 w-px ${useDarkText ? 'bg-slate-200' : 'bg-white/20'} transition-colors duration-300`} />

          {/* Saifee Smiles Branding */}
          <div className="flex items-center space-x-2">
            <img 
              src={logoImg2} 
              alt="Saifee Smiles" 
              className="h-8 sm:h-10 md:h-11 w-auto object-contain rounded-full border border-slate-100/50 group-hover:scale-105 transition-transform duration-300" 
            />
            <span className={`hidden lg:block font-display font-extrabold text-sm xl:text-base tracking-tight transition-colors duration-300 ${
              useDarkText ? 'text-deep-navy' : 'text-white'
            }`}>
              SAIFEE<span className="text-brand-blue">SMILES</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = activePage === item.value;
              return (
                <li key={item.value}>
                  <a
                    id={`nav-link-${item.value}`}
                    href={item.value === 'home' ? '/' : `/${item.value}`}
                    onClick={(e) => handleLinkClick(e, item.value)}
                    className={`relative py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none ${
                      isActive 
                        ? (useDarkText ? 'text-brand-blue' : 'text-accent-amber') 
                        : (useDarkText ? 'text-slate-600 hover:text-deep-navy' : 'text-slate-300 hover:text-white')
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          useDarkText ? 'bg-brand-blue' : 'bg-accent-amber'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            id="nav-cta-btn"
            href="tel:+919820854665"
            className={`group relative inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 overflow-hidden cursor-pointer ${
              useDarkText
                ? 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-md shadow-brand-blue/15 hover:shadow-lg'
                : 'bg-white hover:bg-white/10 text-deep-navy hover:text-white border border-white/20'
            }`}
          >
            <span className="relative z-10 flex items-center gap-1.5"><LucideIcon name="Phone" size={14} /> Call now!</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center space-x-4">
          <a
            id="mobile-nav-cta-btn"
            href="tel:+919820854665"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg shadow-md cursor-pointer"
          >
            <LucideIcon name="Phone" size={12} /> Call now!
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg focus:outline-none transition-colors cursor-pointer ${
              useDarkText ? 'text-slate-600 hover:bg-slate-100 hover:text-deep-navy' : 'text-slate-200 hover:bg-white/5 hover:text-white'
            }`}
            aria-label="Toggle Menu"
          >
            <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-inner"
          >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activePage === item.value;
                return (
                  <a
                    id={`mobile-nav-link-${item.value}`}
                    key={item.value}
                    href={item.value === 'home' ? '/' : `/${item.value}`}
                    onClick={(e) => handleLinkClick(e, item.value)}
                    className={`flex items-center justify-between w-full py-3.5 px-4 rounded-xl text-left font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-blue-light text-brand-blue'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-deep-navy'
                    }`}
                  >
                    <span>{item.label}</span>
                    <LucideIcon
                      name="ChevronRight"
                      size={16}
                      className={`transition-transform duration-300 ${
                        isActive ? 'text-brand-blue translate-x-1' : 'text-slate-400'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
