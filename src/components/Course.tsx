import React, { useState } from 'react';
import { Page } from '../types';
import LucideIcon from './LucideIcon';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

// Import Assets
import mainRubberDamImg from '../../assets/rm.jpeg';
import r1 from '../../assets/r1.jpg';
import r2 from '../../assets/r2.jpg';
import r3 from '../../assets/r3.jpg';
import r4 from '../../assets/r4.jpg';
import r5 from '../../assets/r5.jpg';
import r6 from '../../assets/r6.jpg';
import r7 from '../../assets/r7.jpg';
import r8 from '../../assets/r8.jpg';
import r9 from '../../assets/r9.jpg';
import r10 from '../../assets/r10.jpg';
import r11 from '../../assets/r11.jpg';
import r12 from '../../assets/r12.jpg';

// Import Endodontics Assets
import mainEndoImg from '../../assets/em.jpg';
import e1 from '../../assets/e1.jpg';
import e2 from '../../assets/e2.jpg';
import e3 from '../../assets/e3.jpg';

interface CourseProps {
  setActivePage: (page: Page) => void;
}

export default function Course({ setActivePage }: CourseProps) {
  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12];

  return (
    <div id="course-page-container" className="overflow-x-hidden bg-white min-h-screen">
      
      {/* 1. RUBBER DAM COURSE (Starts Directly) */}
      <section id="rubber-dam-course" className="pt-36 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* Section Header */}
          <AnimatedSection direction="down" className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono">
              <span className="w-1.5 h-1.5 bg-accent-amber rounded-full animate-ping" />
              Continuing Dental Education (CDE)
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-deep-navy tracking-tight leading-[1.15]">
              Rubber Dam Course
            </h1>
            <p className="text-sm font-mono text-slate-400 tracking-widest uppercase font-bold">
              By Dr. Abbas Unwala (BDS Mumbai, MDS Endodontics)
            </p>
          </AnimatedSection>

          {/* Content & Main Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6">
            
            {/* Left Column: Copywriting Content */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection direction="right">
                <h2 className="font-display text-2xl sm:text-3xl font-black text-deep-navy leading-tight">
                  A Game Changer in Restorative Dentistry & Endodontics
                </h2>
              </AnimatedSection>

              <div className="space-y-5 text-slate-600 font-light text-base leading-relaxed">
                <AnimatedSection direction="up" delay={0.1}>
                  <p>
                    The world of Dentistry got the Rubber Dam 158 years ago. It has been a game changer in Restorative Dentistry and Endodontics ever since.
                  </p>
                </AnimatedSection>

                {/* Problem Questions */}
                <div className="space-y-4 pt-4 pb-2">
                  <h4 className="font-display font-bold text-deep-navy text-lg">Let me ask you a question:</h4>
                  {[
                    'Have your patients experienced Sodium hypochlorite burns more frequently than ever?',
                    'What if I tell you that even the moisture from the patient\'s breath can inhibit the bonding and polymerization of composites? Is that why your patients complain of sensitivity after the restoration is done?',
                    'Trouble doing that disto-occlusal class II restoration in lower molars where the tongue is constantly an interference?',
                    'Are you always scared of gushing saliva spoiling your freshly etched cavities?',
                    'Do you find it difficult to isolate complex cavities with rubber dam and matricing?',
                    'Do you want to know the technique to acquire that deep margin with rubber dam and matricing?',
                    'How long are you going to struggle with drenched rolls of cotton messing your day?'
                  ].map((q, idx) => (
                    <AnimatedSection
                      key={idx}
                      direction="up"
                      delay={0.05 * idx}
                      className="flex items-start space-x-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                        <span className="text-xs font-bold font-mono">?</span>
                      </div>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed font-sans">{q}</p>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection direction="up" delay={0.15}>
                  <p className="font-semibold text-deep-navy text-lg pt-4 border-t border-slate-100">
                    This is it. It's time to make your life easier. <br />
                    <span className="text-accent-amber">I'm here to teach you exactly how to do each procedure predictably under Rubber Dam.</span>
                  </p>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Column: Main Image & Course Specifications */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
              <AnimatedSection direction="left" className="rounded-3xl overflow-hidden border border-slate-100 shadow-premium-lg group bg-slate-100 aspect-square">
                <img
                  src={mainRubberDamImg}
                  alt="Rubber Dam Isolation Course Main Banner"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </AnimatedSection>

              {/* Specifications List */}
              <AnimatedSection direction="up" className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="font-display font-black text-xl text-deep-navy border-b border-slate-200/60 pb-3">Course Details</h3>
                <div className="space-y-3 font-sans text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span className="font-semibold">Mentor:</span>
                    <span>Dr. Abbas Unwala (MDS)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Format:</span>
                    <span>Simplified Lecture + Hands-on + Patient Demo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Isolation Cases:</span>
                    <span>Single tooth, Quadrant & Full arch</span>
                  </div>
                  <div className="flex justify-between text-red-500 font-semibold animate-pulse">
                    <span>Availability:</span>
                    <span>Limited Seats Per Batch</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>

          {/* Curriculum Details & Guidelines */}
          <div className="pt-12 border-t border-slate-100 space-y-8">
            <AnimatedSection direction="up" className="max-w-3xl">
              <h3 className="font-display font-black text-2xl text-deep-navy mb-4">Course Highlights & Scope:</h3>
              <ul className="space-y-3.5 text-slate-600 font-light text-base leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-blue-light text-brand-blue flex items-center justify-center mt-0.5 shrink-0"><LucideIcon name="Check" size={12} /></span>
                  <span>Simplified Lecture and Hands-on first on <strong>typhodont models</strong> and then on the <strong>Patient in clinical scenario</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-blue-light text-brand-blue flex items-center justify-center mt-0.5 shrink-0"><LucideIcon name="Check" size={12} /></span>
                  <span>The course includes <strong>single tooth</strong>, <strong>Quadrant Dentistry</strong>, and <strong>full arch isolation</strong>. Each participant will be placing a rubber dam in each situation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-blue-light text-brand-blue flex items-center justify-center mt-0.5 shrink-0"><LucideIcon name="Check" size={12} /></span>
                  <span><strong>Post course support and guidance</strong> at each of your clinics in case you're unable to dam a patient. I assure that each participant will apply the rubber dam on their patients from next day.</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* GALLERY SECTION */}
          <div className="pt-12 border-t border-slate-100 space-y-10">
            <AnimatedSection direction="up" className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-white/5 border border-slate-200 text-deep-navy font-mono mb-2">
                Case Isolation Gallery
              </span>
              <h3 className="font-display font-black text-3xl text-deep-navy">
                Clinical Isolation Cases
              </h3>
              <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
                Review actual isolations performed by Dr. Abbas Unwala. Follow on Instagram to view over 50 plus different isolation cases under the dam.
              </p>
            </AnimatedSection>

            {/* 12-Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((img, idx) => (
                <AnimatedSection
                  key={idx}
                  direction="up"
                  delay={0.05 * (idx % 4)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-premium hover:border-brand-blue/20 transition-all duration-500 group aspect-square relative cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Rubber Dam Isolation Case ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-contain bg-slate-50 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Instagram / Contact Details banner */}
          <AnimatedSection direction="up" className="p-8 rounded-3xl bg-gradient-to-r from-deep-navy to-brand-blue text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-premium-lg">
            <div className="space-y-2">
              <h4 className="font-display font-black text-2xl">Connect Directly with Dr. Abbas Unwala</h4>
              <p className="text-sm text-slate-300 font-light">
                Follow on Instagram to check isolation blueprints or reach out directly for course slot queries.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-deep-navy hover:bg-slate-100 transition-colors"
              >
                Follow on Instagram
              </a>
              <a
                href="tel:9820854665"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-accent-amber text-deep-navy hover:bg-accent-amber-hover transition-colors"
              >
                Call: 9820854665
              </a>
            </div>
          </AnimatedSection>

        </div>
      </section>


      {/* 3. ONE-TO-ONE ENDODONTICS COURSE SECTION */}
      <section id="one-to-one-course" className="py-24 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* Section Header */}
          <AnimatedSection direction="up" className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-amber-50 text-accent-amber border border-accent-amber/20 font-mono">
              🚨 Exclusive Clinical Mentorship 🚨
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-deep-navy">
              One-to-One Endodontics Mentorship
            </h2>
            <p className="text-sm font-mono text-slate-400 tracking-widest uppercase font-bold">
              By Dr. Abbas Unwala (BDS Mumbai, MDS Endodontics)
            </p>
          </AnimatedSection>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6">
            
            {/* Left Column: Mentorship Details & Curriculum */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection direction="right">
                <h3 className="font-display text-2xl font-black text-deep-navy">
                  Master the Art & Science of Predictable Endodontics
                </h3>
                <p className="text-slate-500 font-light text-base mt-2">
                  An exclusive, customized mentorship designed for practicing dentists who want personalized hands-on guidance and clinical readiness—not crowded lecture halls.
                </p>
              </AnimatedSection>

              {/* What you will learn */}
              <div className="space-y-6 pt-4">
                <AnimatedSection direction="up" className="space-y-3">
                  <h4 className="font-display font-bold text-deep-navy text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue" />
                    What you'll learn:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 font-light">
                    {[
                      'Diagnosis & treatment planning',
                      'Access cavity design',
                      'Canal negotiation & glide path',
                      'Rotary instrumentation protocols',
                      'Irrigation & disinfection strategies',
                      'Obturation techniques',
                      'Retreatment protocols',
                      'Management of challenging cases',
                      'Clinical tips, troubleshooting & evidence-based protocols'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent-amber mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                {/* Key Benefits Checklist */}
                <AnimatedSection direction="up" className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="font-display font-bold text-deep-navy text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-amber" />
                    Mentorship Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
                    {[
                      'Personalized training matching your skill level',
                      'Extensive hands-on training sessions',
                      'Live patient cases (where applicable)',
                      'Strictly limited seats for individual attention'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="text-green-500 shrink-0"><LucideIcon name="CheckCircle2" size={16} /></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="up" className="pt-4 border-t border-slate-100">
                  <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
                    Whether you are a fresh graduate looking to build confidence or a practicing dentist aiming to refine your endodontic skills, this mentorship is tailored to help you achieve predictable clinical outcomes from day one.
                  </p>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Column: Main Image & Details Block */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
              <AnimatedSection direction="left" className="rounded-3xl overflow-hidden border border-slate-100 shadow-premium-lg group bg-slate-100 aspect-square">
                <img
                  src={mainEndoImg}
                  alt="Dr. Abbas Unwala Endodontics Mentorship"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </AnimatedSection>

              {/* Mentorship Specs */}
              <AnimatedSection direction="up" className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <h3 className="font-display font-black text-xl text-deep-navy border-b border-slate-200/60 pb-3">Mentorship details</h3>
                <div className="space-y-3 font-sans text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span className="font-semibold">Mentorship Venue:</span>
                    <span className="text-right">Aurus Dental Studio, Pune</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Curriculum Focus:</span>
                    <span className="text-right">Diagnosis to Obturation & Retreatment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Format:</span>
                    <span className="text-right">One-to-One Interactive Mentorship</span>
                  </div>
                  <div className="flex justify-between text-brand-blue font-semibold">
                    <span>Target Outcomes:</span>
                    <span className="text-right">Predictable Clinical Endodontics</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>

          {/* ENDODONTICS MENTORSHIP GALLERY */}
          <div className="pt-12 border-t border-slate-100 space-y-10">
            <AnimatedSection direction="up" className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-white/5 border border-slate-200 text-deep-navy font-mono mb-2">
                Mentorship Cases
              </span>
              <h3 className="font-display font-black text-3xl text-deep-navy">
                Clinical Endodontics Showcase
              </h3>
              <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
                Review case results, access preparations, and root canal obturation cases from Dr. Abbas Unwala\'s practice.
              </p>
            </AnimatedSection>

            {/* 3-Image Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[e1, e2, e3].map((img, idx) => (
                <AnimatedSection
                  key={idx}
                  direction="up"
                  delay={0.05 * idx}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-premium hover:border-brand-blue/20 transition-all duration-500 group aspect-square relative cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Endodontics Mentorship Case ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-contain bg-slate-50 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Banner with Call to Action */}
          <AnimatedSection direction="up" className="p-8 rounded-3xl bg-gradient-to-r from-deep-navy to-brand-blue text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-premium-lg">
            <div className="space-y-2">
              <h4 className="font-display font-black text-2xl">Learn. Practice. Master Endodontics.</h4>
              <p className="text-sm text-slate-300 font-light">
                Secure your slot in this exclusive one-to-one mentorship. Pre-register for syllabus details or call directly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:9820854665"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-accent-amber text-deep-navy hover:bg-accent-amber-hover transition-colors"
              >
                Call: 9820854665
              </a>
              <button
                onClick={() => handleNavigate('contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-deep-navy hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none"
              >
                Submit Inquiry
              </button>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </div>
  );
}
