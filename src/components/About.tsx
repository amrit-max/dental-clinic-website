import React, { useEffect } from 'react';
import { Page } from '../types';
import LucideIcon from './LucideIcon';
import AnimatedSection from './AnimatedSection';
import profileImg from '../../assets/p2.jpeg';
import logoImg from '../../assets/logo.webp';

interface AboutProps {
  setActivePage: (page: Page) => void;
}

export default function About({ setActivePage }: AboutProps) {
  
  useEffect(() => {
    // Dynamic SEO update for this specific page
    document.title = "About Aurus Dental Studio | Best Dental Clinic in Pune";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Meet Dr. Abbas Saifuddin Unwala, MDS — Director of Aurus Dental Studio, Pune. 15+ years of expertise in precision, patient-first dental care across Pune and Mumbai.');
    
    // Clean up function not strictly necessary for simple title/meta in standard SPA 
    // unless we need to revert it on unmount.
  }, []);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="about-page-container" className="overflow-x-hidden bg-white">
      
      {/* 2. OUR STORY SECTION */}
      <section id="about-story" className="pt-36 pb-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Block: Copy */}
            <div className="lg:col-span-7 space-y-8">
              <AnimatedSection direction="right">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono mb-2">
                  <span className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
                  OUR JOURNEY
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-black text-deep-navy tracking-tight leading-tight">
                  Built on Precision, Driven by Care
                </h1>
              </AnimatedSection>

              <div className="space-y-6 text-slate-600 leading-relaxed font-light text-base sm:text-lg">
                <AnimatedSection direction="up" delay={0.1}>
                  <p>
                    Aurus Dental Studio was founded in Pune in 2025 by Dr. Abbas Saifuddin Unwala, building on a decade of clinical expertise that began with the founding of Saifee Smiles Multispeciality Dental Clinic in Mumbai in 2015.
                  </p>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                  <p>
                    What started as a commitment to precision-focused restorative and cosmetic dentistry has grown into a trusted name across two cities. At Aurus, every treatment plan is personally overseen — patients are never just another appointment on the schedule, but a smile we're personally invested in getting right.
                  </p>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Block: Image */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection direction="left" className="editorial-mask-1 overflow-hidden shadow-premium-lg border border-slate-100 relative z-10 group duotone-blue-tint">
                <img
                  src={profileImg}
                  alt="Dr. Abbas Saifuddin Unwala"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatedSection>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-amber/10 rounded-2xl -z-0 blur-xl animate-pulse" />
              <div className="hidden sm:block absolute -top-8 -right-8 w-40 h-40 border-2 border-dashed border-slate-200 rounded-full -z-0 opacity-50" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION CARDS */}
      <section id="about-mission-vision" className="py-24 bg-soft-gray relative overflow-hidden">
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            <AnimatedSection 
              direction="up" 
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-blue/80 text-white flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <LucideIcon name="HeartPulse" size={28} />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-deep-navy mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light">
                  To deliver anxiety-free, patient-centered dental care that combines advanced technology with genuine warmth — helping every patient achieve a healthier, more confident smile.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection 
              direction="up" 
              delay={0.1}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-amber/5 rounded-full blur-xl group-hover:bg-accent-amber/10 transition-colors" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-50 to-amber-100/30 text-accent-amber flex items-center justify-center mb-8 border border-accent-amber/10 group-hover:bg-accent-amber group-hover:text-white transition-all duration-300">
                  <LucideIcon name="Eye" size={28} />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-deep-navy mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light">
                  To be recognized as the most trusted name in cosmetic and restorative dentistry across Pune and Mumbai, setting the standard for precision, comfort, and long-term patient wellness.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & BIO SECTION (Timeline) */}
      <section id="about-bio" className="py-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono mb-3">
              <span className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
              MEET YOUR DENTIST
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-deep-navy tracking-tight">
              Led by Expertise You Can Trust
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Block: Bio */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatedSection direction="right" className="bg-soft-gray p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl" />
                
                <h3 className="font-display font-black text-3xl text-deep-navy mb-1 relative z-10">
                  Dr. Abbas Saifuddin Unwala
                </h3>
                <p className="text-accent-amber font-mono font-bold tracking-widest text-xs uppercase mb-6 relative z-10">
                  BDS (Mumbai), MDS (Mumbai) — Director & Chief Dentist
                </p>
                
                <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base relative z-10">
                  <p>
                    Dr. Unwala is the Director and Chief Dentist at Aurus Dental Studio, Pune, and founder of Saifee Smiles Multispeciality Dental Clinic, Mumbai. A graduate of the Government Dental College and Hospital, Mumbai, he ranked 1st in his postgraduate entrance examination and holds an MDS in Conservative Dentistry and Endodontics.
                  </p>
                  <p>
                    His clinical experience includes roles at Sassoon Hospital, Pune, and Jaslok Hospital and Research Centre, Mumbai — giving him a rare depth of expertise now brought directly to every patient at Aurus.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Block: Vertical Timeline */}
            <div className="lg:col-span-7">
              <div className="relative pl-4 sm:pl-0">
                {/* Vertical Line spanning timeline */}
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2" />
                
                <div className="space-y-12">
                  {[
                    { year: 'Early Career', title: 'Graduation & House Surgeon', desc: 'Government Dental College & Hospital, Mumbai. Laid the foundation for clinical excellence.' },
                    { year: 'Academic Honors', title: 'Rank 1 Postgrad', desc: 'Secured Rank 1 in the highly competitive postgraduate entrance examination.' },
                    { year: 'Specialization', title: 'MDS Completed', desc: 'Masters in Conservative Dentistry and Endodontics.' },
                    { year: '2015', title: 'Saifee Smiles Founded', desc: 'Established the first clinic in Mumbai, delivering precision care to thousands of patients.' },
                    { year: 'Clinical Roles', title: 'Jaslok & Sassoon Hospitals', desc: 'Served as clinical expert at Sassoon Hospital (Pune) and Jaslok Hospital (Mumbai).' },
                    { year: '2025', title: 'Aurus Dental Studio', desc: 'Founded Aurus Dental Studio in Pune, bringing premium, patient-first care to the city.' }
                  ].map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <AnimatedSection 
                        key={idx} 
                        direction={isEven ? "right" : "left"} 
                        delay={0.1 * idx}
                        className={`relative flex flex-col sm:flex-row items-center justify-between ${isEven ? 'sm:flex-row-reverse' : ''}`}
                      >
                        <div className="hidden sm:block w-5/12" />
                        
                        {/* Timeline Node */}
                        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-blue shadow-md flex items-center justify-center z-10">
                          <div className="w-2 h-2 bg-accent-amber rounded-full" />
                        </div>
                        
                        {/* Timeline Content */}
                        <div className={`w-full sm:w-5/12 pl-10 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 text-left'}`}>
                          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-premium hover:border-brand-blue/20 transition-all">
                            <span className="text-xs font-mono font-bold text-accent-amber tracking-widest block mb-1">{item.year}</span>
                            <h4 className="font-display font-bold text-lg text-deep-navy mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                          </div>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="about-why" className="py-24 bg-soft-gray relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <AnimatedSection direction="right" className="editorial-mask-2 overflow-hidden shadow-premium-lg border border-slate-100 group bg-white">
                <img
                  src={logoImg}
                  alt="Aurus Dental Studio Logo"
                  className="w-full h-[450px] object-contain p-12 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatedSection>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-xl animate-pulse" />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <AnimatedSection direction="left">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono mb-2">
                  <span className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
                  OUR GUARANTEE
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-deep-navy tracking-tight leading-none">
                  What Sets Aurus Apart
                </h2>
              </AnimatedSection>

              <div className="space-y-6">
                {[
                  {
                    title: 'Direct Access to Dr. Unwala',
                    desc: "You're never handed off to a junior associate — every treatment plan is personally reviewed and overseen by Dr. Unwala himself."
                  },
                  {
                    title: 'Transparent Treatment & Pricing',
                    desc: 'No hidden costs. Every treatment plan is explained clearly upfront, with honest recommendations — never unnecessary procedures.'
                  },
                  {
                    title: 'Advanced Technology, Comfort-First Approach',
                    desc: 'We combine modern dental technology with a calm, anxiety-free environment designed around genuine patient comfort.'
                  }
                ].map((item, idx) => (
                  <AnimatedSection
                    key={idx}
                    direction="up"
                    delay={0.12 * idx}
                    className="flex items-start space-x-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg hover:border-brand-blue/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <LucideIcon name="CheckCircle2" size={20} />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-display font-extrabold text-lg text-deep-navy group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-sans font-light">
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section id="about-cta-banner" className="py-24 bg-deep-navy relative overflow-hidden text-center bg-dot-pattern-light">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10">
          
          <AnimatedSection direction="up">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mt-4">
              Ready for Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber">
                Perfect Smile?
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light">
              Book a consultation with Dr. Unwala and experience precision dental care, personally delivered.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="pt-4">
            <button
              id="about-cta-btn"
              onClick={() => handleNavigate('contact')}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-premium-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center">
                Book Appointment
                <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
