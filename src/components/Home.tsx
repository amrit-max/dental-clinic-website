import React from 'react';
import profileImg from '../../assets/p2.jpeg';
import clinicVideo from '../../assets/video.mp4';
import galleryImg1 from '../../assets/1.jpg';
import galleryImg2 from '../../assets/4.jpg';
import galleryImg3 from '../../assets/3.jpg';
import beforeAfter1 from '../../assets/5.jpg';
import beforeAfter2 from '../../assets/6.jpg';
import beforeAfter3 from '../../assets/7.jpg';
import beforeAfter4 from '../../assets/8.jpg';
import beforeAfter5 from '../../assets/9.jpg';
import beforeAfter6 from '../../assets/10.jpg';
import featureImg1 from '../../assets/b1.png';
import featureImg2 from '../../assets/b2.png';
import featureImg3 from '../../assets/2.jpg';
import { Page } from '../types';
import { stats, features, services, testimonials } from '../data';
import LucideIcon from './LucideIcon';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

interface HomeProps {
  setActivePage: (page: Page) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-container" className="overflow-x-hidden bg-white">
      
      {/* 1. HERO SECTION */}
      <section
        id="home-hero"
        className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-deep-navy bg-dot-pattern-light"
      >
        {/* Animated Radial Gradients for Texture/Depth */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-brand-blue/15 blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-amber/10 blur-[120px] pointer-events-none z-0" />

        {/* Hero Background Image with custom overlay gradient mask */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80"
            alt="Modern dental clinic background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 text-left">
              
              <AnimatedSection direction="down" delay={0.1}>
                <span className="inline-flex items-center space-x-2 bg-white/5 text-accent-amber border border-white/10 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase shadow-inner">
                  <LucideIcon name="CheckCircle2" className="text-[#25D366]" size={14} />
                  <span className="flex items-center space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <LucideIcon key={i} name="Star" className="text-accent-amber fill-accent-amber" size={12} />
                    ))}
                  </span>
                  <span className="text-white font-semibold">Best Dental Clinic In Pune</span>
                </span>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-1">
                  Best Dental Clinic in Pune & Mumbai <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber text-3xl sm:text-4xl lg:text-5xl">
                    Aurus Dental Studio
                    <span className="absolute left-0 bottom-1 lg:bottom-2 w-full h-[3px] bg-gradient-to-r from-brand-blue to-accent-amber rounded-full" />
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans font-light">
                  Aurus Dental Studio is Pune's trusted destination for world-class cosmetic and restorative dentistry, with a clinic also present in Mumbai. Experience expert care in a relaxing, state-of-the-art environment designed for your comfort.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-cta-get-started"
                  onClick={() => handleNavigate('contact')}
                  className="group relative inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-premium-lg transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span className="relative z-10 flex items-center">
                    Book Appointment
                    <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
                  </span>
                </button>
                <button
                  id="hero-cta-learn-more"
                  onClick={() => handleNavigate('services')}
                  className="group inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white border border-brand-blue/40 hover:border-brand-blue bg-white/5 hover:bg-brand-blue/10 rounded-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                >
                  <span>Our Services</span>
                  <LucideIcon name="ArrowRight" className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={16} />
                </button>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end items-center relative z-10 mt-8 lg:mt-0">
              <AnimatedSection direction="left" delay={0.4} className="lg:-translate-y-8 relative w-full flex flex-col items-center lg:items-end">
                
                {/* Subtle Background Glow behind the image */}
                <div className="absolute inset-0 bg-brand-blue/30 blur-3xl rounded-full z-0 scale-[0.8] opacity-80" />

                <div className="relative flex flex-col items-center space-y-4 z-10">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(8,145,178,0.25)] group border-4 border-deep-navy">
                    <img 
                      src={profileImg} 
                      alt="Dr. Abbas Saifuddin Unwala - Founder and Chief Dentist at Aurus Dental Studio" 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>

                  {/* Name Label below the circular image */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-white tracking-wide">
                      Dr. Abbas Saifuddin Unwala
                    </h3>
                  </div>
                </div>

              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Modern angled SVG divider separating Hero from subsequent section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden pointer-events-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 fill-white">
            <path d="M0,0 L1200,90 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100 relative z-20 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center sm:justify-around items-center gap-6 text-sm font-bold text-slate-600 font-mono">
          <div className="flex items-center gap-2 hover:text-brand-blue transition-colors cursor-default">
            <LucideIcon name="Check" className="text-brand-blue" size={18} />
            <span className="tracking-wide">PAINLESS TREATMENT</span>
          </div>
          <div className="flex items-center gap-2 hover:text-brand-blue transition-colors cursor-default">
            <LucideIcon name="Check" className="text-brand-blue" size={18} />
            <span className="tracking-wide">EASY PAYMENT PLANS</span>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section id="home-stats" className="relative z-20 mt-12 mb-8 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-premium-lg border border-slate-100 p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedSection
              key={stat.id}
              direction="up"
              delay={0.1 * idx}
              className="text-center space-y-2 border-r border-slate-100 last:border-0 last:pr-0"
            >
              <div className="font-mono text-xs text-accent-amber font-bold uppercase tracking-wider block">
                [ 0{idx + 1} ]
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-brand-blue tracking-tight relative inline-block">
                {stat.value}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-accent-amber rounded-full" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest pt-2">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 3. FEATURES SECTION (Breaking the boring symmetrical 3x1 grid) */}
      <section id="home-features" className="py-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <SectionHeading
              title="A Modern Approach to Dentistry"
              subtitle="We combine advanced dental technology with a gentle, patient-first philosophy to deliver exceptional oral care and stunning smile transformations."
              badge="Why Choose Aurus"
              watermark="EXCELLENCE"
              accentWord="Approach"
              centered
            />
          </AnimatedSection>

          {/* Asymmetric Bento-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            
            {/* Feature 1 - Spans 7 columns for asymmetrical focus */}
            <AnimatedSection
              direction="up"
              delay={0.1}
              className="md:col-span-7 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg border border-slate-100 transition-all duration-500 group flex items-center justify-center bg-white"
            >
              <img
                src={featureImg1}
                alt="State-of-the-art clinic equipment at Aurus Dental Studio"
                loading="lazy"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </AnimatedSection>

            {/* Feature 2 - Spans 5 columns */}
            <AnimatedSection
              direction="up"
              delay={0.2}
              className="md:col-span-5 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg border border-slate-100 transition-all duration-500 group relative flex flex-col justify-end min-h-[300px]"
            >
              <img
                src={featureImg2}
                alt="Modern, comforting, and anxiety-free patient dental lounge"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/10 pointer-events-none" />
              
              <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-end">
                <div>
                  <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Comfort First</span>
                  <h3 className="font-display font-extrabold text-2xl text-deep-navy mb-3 group-hover:text-brand-blue transition-colors">
                    {features[1].title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium max-w-sm">
                    {features[1].description} We offer sedation options and a calming environment to make your visits pleasant and anxiety-free.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-500">RELAXING ENVIRONMENT</span>
                  <span className="w-8 h-1 bg-brand-blue group-hover:w-12 transition-all duration-500 rounded-full" />
                </div>
              </div>
            </AnimatedSection>

            {/* Feature 3 - Spans all 12 columns, split design */}
            <AnimatedSection
              direction="up"
              delay={0.3}
              className="md:col-span-12 p-8 sm:p-10 rounded-2xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg hover:border-brand-blue/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-deep-navy to-slate-800 text-white flex items-center justify-center mb-4 shadow-md">
                    <LucideIcon name={features[2].iconName} size={28} />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block">Comprehensive Care</span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-deep-navy group-hover:text-brand-blue transition-colors">
                    {features[2].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {features[2].description} From routine checkups to full mouth restorations, our team of specialists works together to ensure all your dental needs are met under one roof with uncompromised quality.
                  </p>
                </div>
                
                <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md relative min-h-[250px] lg:min-h-full border border-slate-100">
                  <img src={featureImg3} alt="Dr. Abbas Unwala performing comprehensive and painless dental care" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. IMAGE SHOWCASE / GALLERY (Asymmetrical staggered visual layout) */}
      <section id="home-showcase" className="py-20 bg-soft-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Gallery 1 - Overlapping offset left, asymmetric rounded corners */}
            <AnimatedSection 
              direction="left" 
              delay={0.1} 
              className="h-80 sm:h-[420px] editorial-mask-1 overflow-hidden shadow-premium-lg relative group duotone-blue-tint cursor-pointer"
            >
              <img
                src={galleryImg1}
                alt="Patient consultation at Aurus Dental Studio Pune clinic"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent flex flex-col justify-end p-8 z-10">
                <span className="text-xs font-mono font-bold text-accent-amber uppercase tracking-widest mb-1">[ 01 ] MODERN CLINIC</span>
                <span className="text-white font-display font-extrabold text-xl sm:text-2xl">State-of-the-art Care</span>
              </div>
            </AnimatedSection>

            {/* Gallery 2 - Middle card offset down for rhythm, opposite rounded corners */}
            <AnimatedSection 
              direction="up" 
              delay={0.2} 
              className="h-80 sm:h-[420px] md:translate-y-8 editorial-mask-2 overflow-hidden shadow-premium-lg relative group duotone-blue-tint cursor-pointer"
            >
              <img
                src={galleryImg2}
                alt="Dr. Abbas Unwala performing high-precision dental procedures"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent flex flex-col justify-end p-8 z-10">
                <span className="text-xs font-mono font-bold text-accent-amber uppercase tracking-widest mb-1">[ 02 ] EXPERT TEAM</span>
                <span className="text-white font-display font-extrabold text-xl sm:text-2xl">Specialized Dentists</span>
              </div>
            </AnimatedSection>

            {/* Gallery 3 - Right card aligned with custom border radius */}
            <AnimatedSection 
              direction="right" 
              delay={0.3} 
              className="h-80 sm:h-[420px] rounded-3xl rounded-tl-none rounded-br-none overflow-hidden shadow-premium-lg relative group duotone-blue-tint cursor-pointer"
            >
              <img
                src={galleryImg3}
                alt="Happy patient showing perfect teeth alignment results"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent flex flex-col justify-end p-8 z-10">
                <span className="text-xs font-mono font-bold text-accent-amber uppercase tracking-widest mb-1">[ 03 ] BEAUTIFUL RESULTS</span>
                <span className="text-white font-display font-extrabold text-xl sm:text-2xl">Perfect Smiles</span>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Spacer to absorb the md:translate-y-8 stagger */}
          <div className="hidden md:block h-8" />
        </div>
      </section>

      {/* 5. BEFORE & AFTER GALLERY */}
      <section id="home-before-after" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          
          <AnimatedSection direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              title="Before & After Results"
              subtitle="Real patients, real results. See how Dr. Unwala and the team at Aurus Dental Studio have transformed smiles with precision and care."
              badge="Transformations"
              watermark="RESULTS"
              accentWord="Results"
            />
            <button
              id="services-preview-view-all"
              onClick={() => handleNavigate('services')}
              className="group inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors cursor-pointer"
            >
              <span>Explore All Services</span>
              <span className="ml-2 w-7 h-7 rounded-full bg-brand-blue-light text-brand-blue flex items-center justify-center group-hover:translate-x-1.5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <LucideIcon name="ArrowRight" size={14} />
              </span>
            </button>
          </AnimatedSection>

          {/* 6 Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[beforeAfter1, beforeAfter2, beforeAfter3, beforeAfter4, beforeAfter5, beforeAfter6].map((img, idx) => (
              <AnimatedSection
                key={idx}
                direction="up"
                delay={0.1 * idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-premium hover:shadow-premium-lg hover:border-brand-blue/20 transition-all duration-500 group relative aspect-[4/3] cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Before and After Smile Transformation Case ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-white font-display font-extrabold text-lg flex items-center">
                    View Case <LucideIcon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT PREVIEW (THE PREMIUM "DARK SECTION BREAK" TECHNIQUE) */}
      <section id="home-about-preview" className="py-24 bg-deep-navy text-white relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-blue/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Image Collage with custom offsets and shapes */}
          <div className="lg:col-span-6 relative">
            <AnimatedSection direction="right" className="editorial-mask-1 overflow-hidden shadow-premium-lg border-2 border-white/10 relative z-10 group">
              <div className="absolute inset-0 bg-brand-blue/10 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-multiply" />
              <video
                src={clinicVideo}
                title="Overview of Aurus Dental Studio modern clinic setup and advanced equipment"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </AnimatedSection>
            
            {/* Visual element overlapping under the image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-white/10 rounded-full hidden md:flex items-center justify-center p-8 z-0">
              <div className="w-full h-full border border-dashed border-white/5 rounded-full animate-spin [animation-duration:40s]" />
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-amber/20 rounded-full -z-0 opacity-10 blur-xl" />
          </div>

          {/* Right Side: Copy block inside transparent glass-like layout */}
          <div className="lg:col-span-6 space-y-8 relative z-10">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full mb-3 bg-white/5 text-accent-amber border border-white/10 font-mono">
                <span className="w-1.5 h-1.5 bg-accent-amber rounded-full animate-ping" />
                About Our Practice
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Committed to Creating <span className="italic font-light text-slate-300">Healthy</span>, Beautiful Smiles
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <p className="text-slate-300 leading-relaxed font-sans font-light text-base sm:text-lg">
                Founded on the principle of patient-centered care, Aurus Dental Studio provides exceptional dentistry in a warm, welcoming environment. We believe going to the dentist should be a positive, stress-free experience.
              </p>
            </AnimatedSection>

            {/* Checklist highlights */}
            <div className="space-y-4 pt-2">
              {[
                'Highly skilled team of specialists with decades of combined experience.',
                'State-of-the-art technology for precise, pain-free treatments.',
                'Personalized care plans designed for your unique smile goals.'
              ].map((point, idx) => (
                <AnimatedSection key={idx} direction="up" delay={0.05 * idx} className="flex items-start space-x-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-accent-amber flex items-center justify-center shrink-0 mt-0.5 border border-white/5 shadow-sm">
                    <LucideIcon name="Check" size={12} />
                  </div>
                  <span className="font-sans font-light text-slate-200">{point}</span>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection direction="up" delay={0.2} className="pt-4">
              <button
                id="about-preview-cta"
                onClick={() => handleNavigate('about')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Read Our Full Story</span>
                <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={16} />
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="home-testimonials" className="py-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <SectionHeading
              title="Patient Success Stories"
              subtitle="Read what our patients have to say about their experience and their stunning new smiles."
              badge="Client Voices"
              watermark="REVIEWS"
              accentWord="Success"
              centered
            />
          </AnimatedSection>

          {/* Testimonials grid with custom heights and shadows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((test, idx) => (
              <AnimatedSection
                key={test.id}
                direction="up"
                delay={0.1 * idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-premium hover:shadow-premium-lg hover:border-brand-blue/10 transition-all duration-500 flex flex-col justify-between h-full group relative overflow-hidden"
              >
                {/* Visual quote mark indicator in background */}
                <span className="absolute -top-6 -right-6 font-display text-8xl text-slate-100 font-bold select-none pointer-events-none group-hover:text-brand-blue/5 transition-colors">
                  “
                </span>

                <div className="space-y-6 relative z-10">
                  {/* Rating Stars with high-quality glow */}
                  <div className="flex items-center space-x-1 text-accent-amber">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <LucideIcon key={i} name="Star" className="fill-accent-amber text-accent-amber" size={16} />
                    ))}
                  </div>
                  {/* Quote block */}
                  <p className="text-slate-600 text-sm leading-relaxed italic font-sans font-light">
                    "{test.quote}"
                  </p>
                </div>

                {/* Profile */}
                <div className="flex items-center mt-8 pt-6 border-t border-slate-100 relative z-10">
                  <div>
                    <h4 className="font-display font-bold text-sm text-deep-navy capitalize">{test.name}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {test.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection direction="up" delay={0.4} className="mt-12 text-center">
            <a 
              href="https://www.google.com/search?sca_esv=9d5980b468b581ce&hl=en-IN&sxsrf=APpeQnt82_BpSIU0QIUwf7I4ChokyavBwA:1784628230709&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_20SvHCjBOlDlvqHQtsde6dPR6LMQqHoNBoqBuuH3u2biHVOWIPmZKFhCgF7VeZ3xczyVnXI_qhaJrCdEkmZK_ZGauveBvtknA69Na_pG_7E4AJ0saUSEJoDkJYhLCGieE8Q0_Y%3D&q=Aurus+Dental+Studio+by+Dr+Abbas+Unwala+Reviews&sa=X&ved=2ahUKEwiGif2dwuOVAxWuzjgGHSrLAg8Q0bkNegQIHxAF&biw=1707&bih=780&dpr=1.13"
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center space-x-2 font-bold text-brand-blue hover:text-brand-blue-hover hover:underline transition-all cursor-pointer"
            >
              <span>For more reviews click here</span>
              <LucideIcon name="ExternalLink" size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section id="home-final-cta" className="py-24 bg-deep-navy relative overflow-hidden text-center bg-dot-pattern-light">
        {/* Soft radial glow backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10">
          
          <AnimatedSection direction="up">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-accent-amber font-semibold uppercase tracking-widest">
              <span>Schedule Today</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mt-4">
              Ready to Achieve Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber">
                Perfect Smile?
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light">
              Experience modern, pain-free dentistry tailored to you. Contact us today to schedule your consultation and take the first step towards exceptional oral health.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="pt-4">
            <button
              id="cta-final-contact-btn"
              onClick={() => handleNavigate('contact')}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold text-deep-navy bg-accent-amber hover:bg-accent-amber-hover rounded-xl shadow-premium-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center">
                Book Your Appointment
                <LucideIcon name="ArrowRight" className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
              </span>
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
