import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // Synchronize hash routing for high-fidelity back/forward and state reload support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'about', 'services', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: Page) => {
    setActivePage(page);
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handlePageChange} />;
      case 'about':
        return <About setActivePage={handlePageChange} />;
      case 'services':
        return <Services setActivePage={handlePageChange} />;
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
