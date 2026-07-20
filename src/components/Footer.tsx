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
              id="footer-social-linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-deep-navy-light text-slate-400 hover:text-white hover:bg-brand-blue flex items-center justify-center transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LucideIcon name="Linkedin" size={18} />
            </a>
            <a
              id="footer-social-twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-deep-navy-light text-slate-400 hover:text-white hover:bg-brand-blue flex items-center justify-center transition-colors duration-300"
              aria-label="Twitter"
            >
              <LucideIcon name="Twitter" size={18} />
            </a>
            <a
              id="footer-social-facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-deep-navy-light text-slate-400 hover:text-white hover:bg-brand-blue flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <LucideIcon name="Facebook" size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div id="footer-links-col" className="space-y-6">
          <h3 className="font-display font-bold text-white tracking-wide text-sm uppercase">Quick Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                id="footer-nav-home"
                onClick={() => handlePageChange('home')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>Home Page</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-about"
                onClick={() => handlePageChange('about')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>About Our Firm</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-services"
                onClick={() => handlePageChange('services')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>Strategic Services</span>
              </button>
            </li>
            <li>
              <button
                id="footer-nav-contact"
                onClick={() => handlePageChange('contact')}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-1 cursor-pointer focus:outline-none"
              >
                <LucideIcon name="ChevronRight" size={12} className="text-brand-blue" />
                <span>Contact Channels</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div id="footer-contact-col" className="space-y-6">
          <h3 className="font-display font-bold text-white tracking-wide text-sm uppercase">HQ Office</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <LucideIcon name="MapPin" className="text-brand-blue shrink-0 mt-1" size={16} />
              <span>500 Financial Center, Suite 1200<br />New York, NY 10005</span>
            </li>
            <li className="flex items-center space-x-3">
              <LucideIcon name="Phone" className="text-brand-blue shrink-0" size={16} />
              <span>+1 (800) 555-AURUS</span>
            </li>
            <li className="flex items-center space-x-3">
              <LucideIcon name="Mail" className="text-brand-blue shrink-0" size={16} />
              <span>contact@aurusdental.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours of Operation */}
        <div id="footer-hours-col" className="space-y-6">
          <h3 className="font-display font-bold text-white tracking-wide text-sm uppercase">Working Hours</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3">
              <LucideIcon name="Clock" className="text-brand-blue shrink-0 mt-1" size={16} />
              <div>
                <p className="font-semibold text-white">Monday - Friday</p>
                <p className="text-xs text-slate-500">8:00 AM - 6:00 PM EST</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <LucideIcon name="Clock" className="text-brand-blue shrink-0 mt-1" size={16} />
              <div>
                <p className="font-semibold text-white">Saturday</p>
                <p className="text-xs text-slate-500">9:00 AM - 1:00 PM EST</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <LucideIcon name="Clock" className="text-slate-600 shrink-0 mt-1" size={16} />
              <div>
                <p className="font-semibold text-slate-500">Sunday</p>
                <p className="text-xs text-slate-600">Closed</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Divider */}
      <div id="footer-bottom" className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {currentYear} Aurus Dental Studio. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#compliance" className="hover:text-white transition-colors duration-300">Regulatory Disclosures</a>
        </div>
      </div>
    </footer>
  );
}
