import React from 'react';
import { Page } from '../types';
import { teamMembers } from '../data';
import LucideIcon from './LucideIcon';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

interface AboutProps {
  setActivePage: (page: Page) => void;
}

export default function About({ setActivePage }: AboutProps) {
  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="about-page-container" className="overflow-x-hidden bg-white">
      
      {/* 1. PAGE HEADER / BANNER */}
      <section
        id="about-header"
        className="relative pt-36 pb-20 bg-deep-navy bg-dot-pattern-light overflow-hidden"
      >
        {/* Abstract background graphics with glowing blobs */}
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-brand-blue/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-accent-amber/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection direction="down" className="space-y-4">
            
            {/* Breadcrumb with micro dot accent */}
            <nav className="flex items-center space-x-2.5 text-xs font-mono uppercase tracking-widest text-slate-400">
              <button
                id="breadcrumb-home"
                onClick={() => handleNavigate('home')}
                className="hover:text-accent-amber transition-colors duration-200 cursor-pointer flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                Home
              </button>
              <LucideIcon name="ChevronRight" size={10} className="text-slate-600" />
              <span className="text-white font-semibold">About Us</span>
            </nav>

            {/* Giant display header */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none">
              Our Story & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber italic font-light">Leadership</span>
            </h1>
            
            <p className="text-slate-300 max-w-2xl text-base sm:text-lg font-light leading-relaxed">
              Discover the practical principles, relentless operational mission, and senior team of partners behind Aurus’s legacy of patient acceleration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section id="about-story" className="py-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Block: Copy block, occupying 7 columns for asymmetrical balance */}
            <div className="lg:col-span-7 space-y-8">
              <AnimatedSection direction="right">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono mb-2">
                  <span className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
                  Decade of Impact
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-deep-navy tracking-tight leading-tight">
                  Engineering Practical Pipelines Since 2014
                </h2>
              </AnimatedSection>

              <div className="space-y-6 text-slate-600 leading-relaxed font-light text-base">
                <AnimatedSection direction="up" delay={0.1}>
                  <p>
                    For over twelve years, Aurus Dental Studio has helped companies break past growth plateaus. We saw that traditional advisory firms hand clients massive binders of abstract theory and walk away. We believed businesses deserved a different partnership model.
                  </p>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                  <p>
                    At Aurus, our senior partners are active builders. We don’t just diagnose bottlenecks—we integrate with your teams to solve them. By combining modern patient tech care, operational discipline, and capital efficiency, we bridge the gap between ambitious roadmaps and verified cash flow.
                  </p>
                </AnimatedSection>
              </div>

              {/* Stately Micro counters inside Story with custom accent border highlights */}
              <div className="grid grid-cols-2 gap-8 pt-6">
                <AnimatedSection direction="up" delay={0.3} className="p-6 bg-soft-gray rounded-2xl border-l-4 border-brand-blue shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-blue/5 rounded-full blur-lg" />
                  <div className="font-display font-black text-3xl sm:text-4xl text-deep-navy">98%</div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold pt-1">Client Retention</div>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={0.4} className="p-6 bg-soft-gray rounded-2xl border-l-4 border-accent-amber shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent-amber/5 rounded-full blur-lg" />
                  <div className="font-display font-black text-3xl sm:text-4xl text-deep-navy">$500M+</div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest font-bold pt-1">Client ROI Generated</div>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Block: Image with offset design bleeding into the margin */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection direction="left" className="editorial-mask-1 overflow-hidden shadow-premium-lg border border-slate-100 relative z-10 group duotone-blue-tint">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Executive care whiteboard discussion"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatedSection>
              
              {/* Overlapping offset geometric decoration card */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-amber/10 rounded-2xl -z-0 blur-xl animate-pulse" />
              <div className="hidden sm:block absolute -top-8 -right-8 w-40 h-40 border-2 border-dashed border-slate-200 rounded-full -z-0 opacity-50" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION CARDS (Asymmetric sizes/layouts to break symmetry) */}
      <section id="about-mission-vision" className="py-24 bg-soft-gray relative overflow-hidden">
        {/* Soft floating background blob */}
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Mission Card - Occupies 7 Columns */}
            <AnimatedSection 
              direction="right" 
              className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-blue/80 text-white flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <LucideIcon name="Globe" size={28} />
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Our Patient Mission</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-deep-navy mb-4">Stripping Out Complexity</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light">
                  To strip away heavy, clinical anxiety and deliver highly practical, patient-centered care that actively improves patient health, modernizes dental technology pipelines, and secures long-term wellness. We don't just treat teeth—we care for smiles that last.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-mono font-bold text-brand-blue uppercase tracking-widest">
                AURUS OPERATIONAL DIRECTIVE
              </div>
            </AnimatedSection>

            {/* Vision Card - Occupies 5 Columns */}
            <AnimatedSection 
              direction="left" 
              className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-amber/5 rounded-full blur-xl group-hover:bg-accent-amber/10 transition-colors" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-50 to-amber-100/30 text-accent-amber flex items-center justify-center mb-8 border border-accent-amber/10 group-hover:bg-accent-amber group-hover:text-white transition-all duration-300">
                  <LucideIcon name="TrendingUp" size={28} />
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Our Long-Term Vision</span>
                <h3 className="font-display font-black text-2xl text-deep-navy mb-4">Building Future-Proof Systems</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light">
                  To remain the primary global standard for active, co-implementation advisory, bridging the gap between cutting-edge technology stacks and elite executive leadership teams.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-mono font-bold text-accent-amber uppercase tracking-widest">
                VERIFIED CONTINUOUS SCALE
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION (With asymmetrical corner treatments on headshots) */}
      <section id="about-team" className="py-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <SectionHeading
              title="Senior Leadership & Partners"
              subtitle="Our partners represent decades of proven patient scaling, operational excellence, and architectural integrity."
              badge="Our Leadership"
              watermark="PEOPLE"
              accentWord="Partners"
              centered
            />
          </AnimatedSection>

          {/* Staggered Team Grid with alternating asymmetric masks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, idx) => {
              // Alternate custom masks for editorial rhythm
              const isEven = idx % 2 === 0;
              const maskClass = isEven ? 'editorial-mask-1' : 'editorial-mask-2';
              
              return (
                <AnimatedSection
                  key={member.id}
                  direction="up"
                  delay={0.12 * idx}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100/50 shadow-premium hover:shadow-premium-lg hover:border-brand-blue/20 transition-all duration-500 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Headshot container with custom asymmetric mask and blue duotone effect */}
                    <div className={`h-80 overflow-hidden relative ${maskClass} shadow-md`}>
                      <div className="absolute inset-0 bg-brand-blue/10 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-multiply" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <span className="absolute bottom-4 right-4 bg-deep-navy/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-white font-bold tracking-widest rounded shadow-md z-20">
                        SENIOR PARTNER
                      </span>
                    </div>

                    <div className="p-6 text-center space-y-2">
                      <h3 className="font-display font-extrabold text-xl text-deep-navy group-hover:text-brand-blue transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono font-bold uppercase tracking-widest text-accent-amber">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed pt-2 font-sans font-light">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Global Executive Hub</span>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. IMAGE GALLERY / COLLAGE (Staggered Bento heights to break visual boredom) */}
      <section id="about-culture" className="py-24 bg-soft-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono mb-3">
              <span className="w-1.5 h-1.5 bg-accent-amber rounded-full animate-ping" />
              Aurus Culture
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-deep-navy tracking-tight">
              Collaborating and Executing in Unity
            </h2>
          </AnimatedSection>

          {/* Staggered Heights Board */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            
            <AnimatedSection direction="up" delay={0.05} className="h-64 sm:h-[340px] rounded-3xl rounded-tl-none rounded-br-none overflow-hidden shadow-premium group cursor-pointer duotone-blue-tint">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80"
                alt="Workspace discussion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1} className="h-48 sm:h-[260px] editorial-mask-1 overflow-hidden shadow-premium group cursor-pointer duotone-blue-tint">
              <img
                src="https://images.unsplash.com/photo-1521791136365-c724790b2e5a?auto=format&fit=crop&w=400&q=80"
                alt="Handshake agreement"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15} className="h-72 sm:h-[400px] editorial-mask-2 overflow-hidden shadow-premium group cursor-pointer duotone-blue-tint">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
                alt="Modern dental office lobby"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="h-56 sm:h-[300px] rounded-3xl rounded-tr-none rounded-bl-none overflow-hidden shadow-premium group cursor-pointer duotone-blue-tint">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
                alt="Dental skyline"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (An Unwavering Commitment to ROI with lifted interactive cards) */}
      <section id="about-why" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Block: Image Collage with Custom masks */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection direction="right" className="editorial-mask-2 overflow-hidden shadow-premium-lg border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                  alt="Care session presentation"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatedSection>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-xl animate-pulse" />
            </div>

            {/* Right Block: Accordion/Cards with premium depth shadows */}
            <div className="lg:col-span-7 space-y-8">
              <AnimatedSection direction="left">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono mb-2">
                  <span className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
                  Our Guarantee
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-deep-navy tracking-tight leading-none">
                  An Unwavering Commitment to ROI
                </h2>
              </AnimatedSection>

              <div className="space-y-6">
                {[
                  {
                    title: 'Direct Access to Senior Partners',
                    desc: 'You will never be handed off to junior associates. Our senior partners direct every project, audit, and integration, giving you the benefit of veteran dental eyes.'
                  },
                  {
                    title: 'Transparent Pricing & Clear OKRs',
                    desc: 'No hidden bills. Every contract is mapped directly to performance indicators, delivery sprints, and verified ROI outcomes that scale your bottom line.'
                  },
                  {
                    title: 'Cross-Functional Engineering Expertise',
                    desc: 'We merge executive advisory with deep engineering knowledge, meaning we write actual systems architecture, compliant structures, and scalable code.'
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

      {/* 7. CTA BANNER */}
      <section id="about-cta-banner" className="py-24 bg-deep-navy relative overflow-hidden text-center bg-dot-pattern-light">
        {/* Soft radial glow backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10">
          
          <AnimatedSection direction="up">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-accent-amber font-semibold uppercase tracking-widest">
              <span>Aurus Executive Group</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mt-4">
              Ready to Upgrade Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber">
                Patient Model?
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light">
              Let’s design a custom operational framework that expands your margins and scales with structural integrity. Connect with our senior partners today.
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
                Initialize Engagement
                <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
