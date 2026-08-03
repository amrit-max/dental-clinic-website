import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Course from './components/Course';
import { motion, AnimatePresence } from 'motion/react';
import WhatsAppButton from './components/WhatsAppButton';

export default function App({ initialPage }: { initialPage?: Page } = {}) {
  const [activePage, setActivePage] = useState<Page>(() => {
    if (initialPage) return initialPage;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\/|\/$/g, '') as Page || 'home';
      const validPages: Page[] = ['home', 'about', 'services', 'course', 'contact'];
      return validPages.includes(path) ? path : 'home';
    }
    return 'home';
  });

  // Synchronize path routing for clean URLs, search engine indexability, and back/forward browser support
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '') as Page || 'home';
      const validPages: Page[] = ['home', 'about', 'services', 'course', 'contact'];
      if (validPages.includes(path)) {
        setActivePage(path);
      } else {
        setActivePage('home');
      }
    };

    // Run on initial load
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handlePageChange} />;
      case 'about':
        return <About setActivePage={handlePageChange} />;
      case 'services':
        return <Services setActivePage={handlePageChange} />;
      case 'course':
        return <Course setActivePage={handlePageChange} />;
      case 'contact':
        return <Contact setActivePage={handlePageChange} />;
      default:
        return <Home setActivePage={handlePageChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-brand-blue/10 selection:text-brand-blue font-sans">
      {/* Sticky/Blurred Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Content Area with Page-Switching Transitions */}
      <main id="main-content-flow" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Professional Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Global Sticky WhatsApp Floating Action Button */}
      <WhatsAppButton />
    </div>
  );
}
