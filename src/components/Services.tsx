import React, { useState } from 'react';
import { Page, ServiceItem } from '../types';
import { services, processSteps } from '../data';
import LucideIcon from './LucideIcon';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  setActivePage: (page: Page) => void;
}

export default function Services({ setActivePage }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pricingTiers = [
    {
      name: 'Diagnostic & Audit',
      price: '$4,500',
      period: 'flat fee',
      description: 'A comprehensive operational and technical diagnostic blueprinting your exact growth opportunities.',
      features: [
        'Complete systems architecture audit',
        'Friction points & bottleneck mapping',
        '10-point regulatory compliance check',
        'Custom 24-month scaling roadmap'
      ],
      popular: false,
      btnText: 'Request Audit'
    },
    {
      name: 'Strategic Acceleration',
      price: '$8,500',
      period: 'per month',
      description: 'Active partner advisory paired with technical co-implementation to scale infrastructure and optimize margins.',
      features: [
        'Dedicated senior partner advisory',
        'Active workflow co-implementation',
        'AI pipeline & cloud optimization',
        'Bi-weekly metrics & ROI auditing'
      ],
      popular: true,
      btnText: 'Initiate Acceleration'
    },
    {
      name: 'Patient Transformation',
      price: 'Custom',
      period: 'engagement based',
      description: 'A complete custom operational redesign and full-stack software workflow overhaul for global firms.',
      features: [
        'Complete organizational restructuring',
        'Custom multi-platform automation',
        '24/7 priority support & on-call advisory',
        'Full regulatory compliance backing'
      ],
      popular: false,
      btnText: 'Inquire for Bespoke Pricing'
    }
  ];

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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-4 left-4 bg-deep-navy/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] font-mono font-bold text-white tracking-widest rounded-lg shadow-md z-20">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shadow-sm shrink-0">
                          <LucideIcon name={service.iconName} size={22} />
                        </div>
                        <h3 className="font-display font-black text-2xl text-deep-navy group-hover:text-brand-blue transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans font-light">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                      <button
                        id={`srv-details-btn-${service.id}`}
                        onClick={() => setSelectedService(service)}
                        className="group inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors cursor-pointer"
                      >
                        <span>Analyze Blueprint Framework</span>
                        <LucideIcon name="ChevronRight" className="ml-1.5 group-hover:translate-x-1 transition-transform" size={16} />
                      </button>
                      <span className="font-mono text-xs font-bold text-slate-300">[ 0{idx + 1} ]</span>
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
              className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-premium-lg relative border border-slate-100/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
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
                  <h3 className="font-display font-black text-3xl text-white mt-2.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">Framework Summary</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-light">
                    {selectedService.description}
                  </p>
                </div>

                <div className="space-y-3.5 pt-2">
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">Core Engagements & Deliverables</h4>
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

                <div className="pt-6 border-t border-slate-100 flex items-center justify-end space-x-4">
                  <button
                    id="modal-close-secondary-btn"
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    id="modal-cta-contact-btn"
                    onClick={() => {
                      setSelectedService(null);
                      handleNavigate('contact');
                    }}
                    className="group relative inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Inquire About This Framework</span>
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

      {/* 4. SUPPORTING IMAGE SECTION (THE PREMIUM "DARK SECTION BREAK") */}
      <section id="services-supporting" className="py-24 bg-deep-navy text-white relative overflow-hidden">
        {/* Soft floating blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-blue/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Supporting Image with Asymmetric Shape Mask and Duotone Overlay */}
          <div className="lg:col-span-6 relative">
            <AnimatedSection direction="right" className="editorial-mask-1 overflow-hidden shadow-premium-lg border-2 border-white/10 relative z-10 group">
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-multiply" />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Dental modern skyline looking upwards"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </AnimatedSection>
            
            {/* Overlay glow decorations */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-amber/20 rounded-full blur-xl opacity-10 animate-pulse" />
          </div>

          {/* Right: Persuasive text block inside transparent glass-like layout */}
          <div className="lg:col-span-6 space-y-8 relative z-10">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-white/5 text-accent-amber border border-white/10 font-mono">
                <span className="w-1.5 h-1.5 bg-accent-amber rounded-full animate-ping" />
                Operational Guarantee
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                No Academic Theories. <br />
                <span className="italic font-light text-slate-300">Pure Co-Implementation</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-6 text-slate-300 leading-relaxed font-sans font-light text-base">
              <AnimatedSection direction="up" delay={0.1}>
                <p>
                  We bridge the critical gap between high-level management care and modern tech infrastructure. Many firms advise you on "what to do." We build the exact operational dashboards, modernise the databases, set up continuous cloud security compliance models, and coordinate the team scaling ourselves.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <p>
                  This rigorous commitment guarantees your strategic pipeline operates smoothly, reducing overhead costs, eliminating transition friction, and creating deep structural efficiency that shows up in your metrics.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="pt-2">
              <button
                id="services-read-story"
                onClick={() => handleNavigate('about')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Read Our Implementation Story</span>
                <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING OR ENGAGEMENT TIERS */}
      <section id="services-pricing" className="py-24 bg-soft-gray border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <SectionHeading
              title="Transparent Partnership Tiers"
              subtitle="Select an engagement plan designed for your company size, objective scope, and scaling speed."
              badge="Structured Engagement"
              watermark="PRICING"
              accentWord="Partnership"
              centered
            />
          </AnimatedSection>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <AnimatedSection
                key={idx}
                direction="up"
                delay={0.1 * idx}
                className={`bg-white rounded-3xl border p-8 flex flex-col justify-between relative transition-all duration-500 ${
                  tier.popular
                    ? 'border-brand-blue shadow-premium-lg scale-100 lg:scale-[1.03] lg:z-10 bg-gradient-to-b from-white to-brand-blue-light/5'
                    : 'border-slate-100 shadow-premium hover:shadow-premium-lg hover:border-brand-blue/10'
                }`}
              >
                {tier.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-blue to-brand-blue-hover text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                <div className="space-y-8">
                  {/* Tier Title */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold text-accent-amber uppercase tracking-widest block">[ Tier 0{idx + 1} ]</span>
                    <h3 className="font-display font-black text-2xl text-deep-navy">{tier.name}</h3>
                    <p className="text-xs text-slate-400 font-semibold leading-relaxed font-sans">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="py-5 border-t border-b border-slate-100 flex items-baseline">
                    <span className="font-display font-black text-4xl sm:text-5xl text-deep-navy tracking-tight">{tier.price}</span>
                    <span className="text-xs text-slate-500 font-bold ml-2 font-mono uppercase tracking-wider">/ {tier.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 text-sm">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-600">
                        <div className={`w-5.5 h-5.5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                          tier.popular 
                            ? 'bg-brand-blue-light text-brand-blue border-brand-blue/10' 
                            : 'bg-slate-50 text-slate-500 border-slate-100'
                        }`}>
                          <LucideIcon name="Check" size={13} />
                        </div>
                        <span className="text-sm font-medium font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA btn */}
                <button
                  id={`pricing-btn-${idx}`}
                  onClick={() => handleNavigate('contact')}
                  className={`w-full mt-10 py-4 px-5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    tier.popular
                      ? 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:shadow-brand-blue/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {tier.btnText}
                </button>
              </AnimatedSection>
            ))}
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
              <span>Aurus Executive Group</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mt-4">
              Let’s Align on Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber">
                Patient Objectives
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light">
              Unlock sustainable operational leverage. Fill out our contact intake to schedule a detailed care alignment consultation.
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
                Schedule Initial Diagnostic
                <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
