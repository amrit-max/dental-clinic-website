import React from 'react';
import { Page } from '../types';
import LucideIcon from './LucideIcon';

interface FooterProps {
  setActivePage: (page: Page) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handlePageChange = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    handlePageChange(page);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-deep-navy text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand Info */}
        <div id="footer-brand-col" className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white">
              <LucideIcon name="Smile" size={18} />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              AURUS<span className="text-brand-blue">DENTAL</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Premium dental care engineered for perfect smiles. We deliver precision treatments, deep insights, and breakthrough patient comfort.
          </p>
          <div className="flex items-center space-x-4">
            <a
              id="footer-social-instagram"
              href="https://www.instagram.com/its_that_dentist/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-deep-navy-light text-slate-400 hover:text-white hover:bg-brand-blue flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <LucideIcon name="Instagram" size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div id="footer-links-col" className="space-y-6">
          <h3 className="font-display font-bold text-white tracking-wide text-sm uppercase">Quick Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                id="footer-nav-home"
                href="/"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>Home Page</span>
              </a>
            </li>
            <li>
              <a
                id="footer-nav-about"
                href="/about"
                onClick={(e) => handleLinkClick(e, 'about')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>About Our Firm</span>
              </a>
            </li>
            <li>
              <a
                id="footer-nav-services"
                href="/services"
                onClick={(e) => handleLinkClick(e, 'services')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>Strategic Services</span>
              </a>
            </li>
            <li>
              <a
                id="footer-nav-contact"
                href="/contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>Contact Channels</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Pune Clinic */}
        <div id="footer-contact-pune" className="space-y-6">
          <h3 className="font-display font-bold text-white tracking-wide text-sm uppercase">Pune Clinic</h3>
          <p className="text-xs text-brand-blue font-bold tracking-wider">Aurus Dental Studio</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <LucideIcon name="MapPin" className="text-brand-blue shrink-0 mt-1" size={16} />
              <span>Mittal Court, B23, opposite Mahesh Lunch Home, Rasta Peth, Pune, Maharashtra 411002</span>
            </li>
            <li className="flex items-center space-x-3">
              <LucideIcon name="Phone" className="text-brand-blue shrink-0" size={16} />
              <span>+91 98208 54665</span>
            </li>
            <li className="flex items-center space-x-3">
              <LucideIcon name="Clock" className="text-brand-blue shrink-0" size={16} />
              <span>Open 24 hours</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Mumbai Clinic */}
        <div id="footer-contact-mumbai" className="space-y-6">
          <h3 className="font-display font-bold text-white tracking-wide text-sm uppercase">Mumbai Clinic</h3>
          <p className="text-xs text-brand-blue font-bold tracking-wider uppercase">Saifee Smiles Multispeciality Dental Clinic</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <LucideIcon name="MapPin" className="text-brand-blue shrink-0 mt-1" size={16} />
              <span>5C, Shamji Morarji building, Champsi Bhimji Rd, Thakkar Estate, Mazgaon, Mumbai, Maharashtra 400010</span>
            </li>
            <li className="flex items-center space-x-3">
              <LucideIcon name="Phone" className="text-brand-blue shrink-0" size={16} />
              <span>+91 98208 54665</span>
            </li>
            <li className="flex items-center space-x-3">
              <LucideIcon name="Clock" className="text-brand-blue shrink-0" size={16} />
              <span>Open 24 hours</span>
            </li>
          </ul>
        </div>
      </div>

      <div id="footer-bottom" className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p className="order-1 md:order-none text-slate-400">© {currentYear} Aurus Dental Studio. All rights reserved.</p>
        
        <p className="flex items-center gap-1 order-3 md:order-none">
          <span>Made with</span>
          <span className="text-red-500">❤️</span>
          <span>by</span>
          <a
            href="https://www.instagram.com/thewebthread/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-blue hover:text-white font-medium transition-colors"
          >
            TheWebThread
          </a>
        </p>

        <div className="flex space-x-6 order-2 md:order-none">
          <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
