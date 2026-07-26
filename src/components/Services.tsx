import React, { useState } from 'react';
import { Page, ServiceItem } from '../types';
import { services, processSteps, faqs } from '../data';
import LucideIcon from './LucideIcon';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  setActivePage: (page: Page) => void;
}

export default function Services({ setActivePage }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="services-page-container" className="overflow-x-hidden bg-white">
      
      {/* 2. SERVICES GRID (Asymmetrical layout blocks with alternate staggered offsets) */}
      <section id="services-grid" className="pt-36 pb-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <SectionHeading
              title="Transformational Capabilities"
              subtitle="We merge deep financial care with advanced system integrations to expand patient limits."
              badge="Active Blueprints"
              watermark="BLUEPRINTS"
              accentWord="Capabilities"
              level="h1"
              centered
            />
          </AnimatedSection>

          {/* Asymmetric Staggered Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
            {services.map((service, idx) => {
              // Asymmetric column spans for grid variation
              const isEven = idx % 2 === 0;
              const colSpan = isEven ? 'lg:col-span-7' : 'lg:col-span-5';
              const maskClass = isEven ? 'editorial-mask-1' : 'editorial-mask-2';
              const translateYClass = !isEven ? 'lg:translate-y-8' : '';

              return (
                <AnimatedSection
                  key={service.id}
                  direction="up"
                  delay={0.12 * idx}
                  className={`${colSpan} ${translateYClass} bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-premium hover:shadow-premium-lg hover:border-brand-blue/20 transition-all duration-500 flex flex-col group`}
                >
                  <div className={`h-64 overflow-hidden relative ${maskClass} shadow-inner`}>
                    <div className="absolute inset-0 bg-brand-blue/10 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-multiply" />
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-contain bg-slate-50 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-4 left-4 bg-deep-navy px-3.5 py-1.5 text-[10px] font-mono font-bold text-white tracking-widest rounded-lg shadow-md z-20">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shadow-sm shrink-0">
                          <LucideIcon name="Smile" size={22} />
                        </div>
                        <h3 className="font-display font-black text-xl sm:text-2xl text-deep-navy group-hover:text-brand-blue transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans font-light line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                      <button
                        id={`srv-details-btn-${service.id}`}
                        onClick={() => setSelectedService(service)}
                        className="group inline-flex items-center text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors cursor-pointer shrink-0"
                      >
                        <span>View Treatment Details</span>
                        <LucideIcon name="ChevronRight" className="ml-1.5 group-hover:translate-x-1 transition-transform" size={16} />
                      </button>
                      <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-300 truncate">[ 0{idx + 1} ]</span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Spacer to absorb the translation offsets */}
          <div className="hidden lg:block h-12" />
        </div>
      </section>

      {/* DETAILED MODAL FOR SERVICE EXPLORATION (Custom Glass UI) */}
      <AnimatePresence>
        {selectedService && (
          <div
            id="service-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-deep-navy/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-premium-lg relative border border-slate-100/50 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-40 sm:h-52 overflow-hidden relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-contain bg-slate-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/50 to-transparent" />
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full focus:outline-none transition-all duration-300 cursor-pointer"
                  aria-label="Close details"
                >
                  <LucideIcon name="X" size={18} />
                </button>
                <div className="absolute bottom-5 left-6">
                  <span className="bg-accent-amber text-deep-navy text-[10px] font-mono font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-md">
                    {selectedService.tag}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-3xl text-white mt-2.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">Treatment Summary</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-light">
                    {selectedService.summary}
                  </p>
                </div>

                <div className="space-y-3.5 pt-2">
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">Core Procedures & Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-3 text-slate-700">
                        <div className="w-6 h-6 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/10">
                          <LucideIcon name="Check" size={14} />
                        </div>
                        <span className="text-sm font-medium font-sans">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center sm:justify-end gap-3 sm:space-x-4">
                  <button
                    id="modal-close-secondary-btn"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-all cursor-pointer text-center"
                  >
                    Close
                  </button>
                  <button
                    id="modal-cta-contact-btn"
                    onClick={() => {
                      setSelectedService(null);
                      handleNavigate('contact');
                    }}
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-md transition-all cursor-pointer text-center"
                  >
                    <span>Inquire About This Treatment</span>
                    <LucideIcon name="ArrowRight" className="ml-1.5 group-hover:translate-x-1 transition-transform" size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. PROCESS / HOW IT WORKS SECTION */}
      <section id="services-process" className="py-24 bg-soft-gray border-t border-b border-slate-100 relative overflow-hidden">
        
        {/* Custom SVG Angled/Diagonal Divider */}
        <div className="absolute top-0 left-0 right-0 h-10 w-full overflow-hidden pointer-events-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 w-full h-10 fill-white">
            <path d="M0,0 L1200,80 L1200,0 Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6">
          <AnimatedSection direction="up">
            <SectionHeading
              title="Our Engagement Lifecycle"
              subtitle="From deep structural diagnostics to persistent optimization, we execute systematically."
              badge="How We Cooperate"
              watermark="LIFECYCLE"
              accentWord="Lifecycle"
              centered
            />
          </AnimatedSection>

          {/* Process Timeline Grid */}
          <div className="relative mt-20">
            {/* Desktop progress bar connector with elegant gradient glow */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-[3px] bg-gradient-to-r from-brand-blue/30 via-accent-amber/30 to-brand-blue/30" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {processSteps.map((step, idx) => (
                <AnimatedSection
                  key={step.step}
                  direction="up"
                  delay={0.14 * idx}
                  className="space-y-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-premium relative group hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="flex lg:flex-col lg:items-start items-center justify-between lg:justify-start space-y-0 lg:space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-blue/80 text-white flex items-center justify-center font-mono font-bold text-lg shadow-lg shadow-brand-blue/15 relative z-20 shrink-0 group-hover:scale-110 transition-transform">
                      0{step.step}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-soft-gray text-brand-blue flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                      <LucideIcon name={step.iconName} size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-lg text-deep-navy">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-light">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section id="services-faq" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-3 bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono">
              <span className="w-1.5 h-1.5 bg-accent-amber rounded-full animate-pulse" />
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-deep-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans font-light mt-3">
              Common patient queries about dental treatments, clear aligners, implants, and costs in Pune and Mumbai.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === faq.id;
              return (
                <AnimatedSection
                  key={faq.id}
                  direction="up"
                  delay={0.05 * idx}
                  className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <button
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-base text-deep-navy hover:text-brand-blue transition-colors cursor-pointer focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-lg bg-soft-gray flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`}>
                      <LucideIcon name="ChevronDown" size={16} />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[500px] border-t border-slate-50' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-light bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section id="services-cta-banner" className="py-24 bg-deep-navy text-center relative overflow-hidden bg-dot-pattern-light">
        {/* Soft radial glow backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10">
          
          <AnimatedSection direction="up">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-accent-amber font-semibold uppercase tracking-widest">
              <span>Aurus Dental Studio</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mt-4">
              Ready to Transform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber">
                Your Smile?
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light">
              Experience advanced, painless dental care in a premium, stress-free environment. Fill out our contact form to schedule your consultation with Dr. Abbas Unwala.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="pt-4">
            <button
              id="services-cta-contact-btn"
              onClick={() => handleNavigate('contact')}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-premium-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center">
                Book an Appointment
                <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
