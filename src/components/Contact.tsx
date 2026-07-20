import React, { useState } from 'react';
import { Page, ContactFormInput, ContactFormErrors } from '../types';
import LucideIcon from './LucideIcon';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

interface ContactProps {
  setActivePage: (page: Page) => void;
}

export default function Contact({ setActivePage }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select an inquiry subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief context about your objectives';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Inquiry details must be at least 15 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request to high-fidelity server endpoint (mock logic)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div id="contact-page-container" className="overflow-x-hidden bg-white">
      
      {/* 1. PAGE HEADER */}
      <section id="contact-header" className="relative pt-36 pb-20 bg-deep-navy bg-dot-pattern-light overflow-hidden">
        {/* Soft background glow blurs */}
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-amber/5 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection direction="down" className="space-y-4">
            
            {/* Breadcrumb with micro dots */}
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
              <span className="text-white font-semibold">Contact</span>
            </nav>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none">
              Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-blue to-accent-amber italic font-light">Alignment</span>
            </h1>

            <p className="text-slate-300 max-w-2xl text-base sm:text-lg font-light leading-relaxed">
              Establish a direct, secure channel with our senior advisory partners. We review submitted intake briefs within 4 business hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT SECTION (Asymmetric 8:4 columns layout to break visual boredom) */}
      <section id="contact-body" className="py-24 bg-white bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Contact Form (Takes 8 columns for roomy, premium layout) */}
            <div className="lg:col-span-8 space-y-8">
              
              <AnimatedSection direction="right" className="space-y-3">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono">
                  <span className="w-1.5 h-1.5 bg-accent-amber rounded-full animate-pulse" />
                  Intake Request
                </span>
                <h2 className="font-display text-4xl font-black text-deep-navy tracking-tight">
                  Submit Dental Profile
                </h2>
                <p className="text-base text-slate-500 leading-relaxed font-sans font-light">
                  Provide essential operational indicators about current bottlenecks, scaling timelines, and primary capital objectives.
                </p>
              </AnimatedSection>

              {isSubmitted ? (
                <AnimatedSection direction="up" className="p-10 rounded-3xl bg-brand-blue-light/40 border border-brand-blue/15 space-y-8 text-center shadow-premium-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl" />
                  
                  <div className="w-20 h-20 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-blue/20">
                    <LucideIcon name="Check" size={40} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-black text-3xl text-deep-navy">Transmission Confirmed</h3>
                    <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-sans font-light">
                      Your dental profile and advisory brief have been encrypted and sent to our senior leadership group. A senior partner will review the diagnostics and contact you within 4 business hours.
                    </p>
                  </div>
                  
                  <button
                    id="reset-form-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-brand-blue border border-brand-blue/30 hover:border-brand-blue bg-white hover:bg-brand-blue-light rounded-xl shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </AnimatedSection>
              ) : (
                <AnimatedSection direction="up" className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-premium-lg">
                  <form id="dental-intake-form" onSubmit={handleSubmit} className="space-y-8">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Full Name */}
                      <div className="space-y-2.5">
                        <label htmlFor="name" className="text-[11px] font-mono font-bold text-deep-navy uppercase tracking-widest block">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={`w-full px-4.5 py-3.5 bg-soft-gray border rounded-xl text-sm transition-all focus:outline-none focus:ring-4 focus:ring-brand-blue/5 ${
                            errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-brand-blue/40 focus:bg-white'
                          }`}
                        />
                        {errors.name && <p className="text-xs font-semibold text-red-500 mt-1.5 font-mono flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" /> {errors.name}
                        </p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-2.5">
                        <label htmlFor="email" className="text-[11px] font-mono font-bold text-deep-navy uppercase tracking-widest block">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className={`w-full px-4.5 py-3.5 bg-soft-gray border rounded-xl text-sm transition-all focus:outline-none focus:ring-4 focus:ring-brand-blue/5 ${
                            errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-brand-blue/40 focus:bg-white'
                          }`}
                        />
                        {errors.email && <p className="text-xs font-semibold text-red-500 mt-1.5 font-mono flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" /> {errors.email}
                        </p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Phone (Optional) */}
                      <div className="space-y-2.5">
                        <label htmlFor="phone" className="text-[11px] font-mono font-bold text-deep-navy uppercase tracking-widest block">Phone Number (Optional)</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4.5 py-3.5 bg-soft-gray border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2.5">
                        <label htmlFor="subject" className="text-[11px] font-mono font-bold text-deep-navy uppercase tracking-widest block">Inquiry Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full px-4.5 py-3.5 bg-soft-gray border rounded-xl text-sm transition-all focus:outline-none focus:ring-4 focus:ring-brand-blue/5 appearance-none ${
                            errors.subject ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-brand-blue/40 focus:bg-white'
                          }`}
                        >
                          <option value="">-- Select Framework --</option>
                          <option value="Patient Care">Patient Care Consultation</option>
                          <option value="Digital Acceleration">Digital & AI Acceleration</option>
                          <option value="Operations Optimization">Operations & Supply Optimization</option>
                          <option value="Diagnostic Audit">Bespoke Strategic Diagnostic Audit</option>
                          <option value="Other">General Dental Inquiry</option>
                        </select>
                        {errors.subject && <p className="text-xs font-semibold text-red-500 mt-1.5 font-mono flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full" /> {errors.subject}
                        </p>}
                      </div>
                    </div>

                    {/* Message / Brief */}
                    <div className="space-y-2.5">
                      <label htmlFor="message" className="text-[11px] font-mono font-bold text-deep-navy uppercase tracking-widest block">Inquiry Context & Dental Objectives *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please elaborate briefly on current bottlenecks, internal engineering timelines, and target OKR achievements..."
                        className={`w-full px-4.5 py-3.5 bg-soft-gray border rounded-xl text-sm transition-all focus:outline-none focus:ring-4 focus:ring-brand-blue/5 ${
                          errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-100 focus:border-brand-blue/40 focus:bg-white'
                        }`}
                      />
                      {errors.message && <p className="text-xs font-semibold text-red-500 mt-1.5 font-mono flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full" /> {errors.message}
                      </p>}
                    </div>

                    {/* Submit Button with Custom sweeping highlight interaction */}
                    <button
                      id="submit-intake-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-4.5 px-6 rounded-xl font-bold text-sm tracking-widest uppercase text-deep-navy bg-accent-amber hover:bg-accent-amber-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-premium hover:shadow-premium-lg flex items-center justify-center space-x-2 cursor-pointer overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-deep-navy border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Brief...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <span>Transmit Strategic Brief</span>
                          <LucideIcon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={16} />
                        </div>
                      )}
                    </button>
                  </form>
                </AnimatedSection>
              )}
            </div>

            {/* Right Side: HQ Information (Takes 4 columns, looks like high-end index bar) */}
            <div className="lg:col-span-4 space-y-10">
              
              <AnimatedSection direction="left" className="space-y-3">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-brand-blue-light text-brand-blue border border-brand-blue/10 font-mono">
                  HQ Information
                </span>
                <h2 className="font-display text-3xl font-black text-deep-navy tracking-tight leading-none">
                  Global Operations
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans font-light">
                  Connect through our formal dental channels or visit our executive suite.
                </p>
              </AnimatedSection>

              {/* Info Cards Stack with Custom details and layered depth */}
              <div className="space-y-6">
                
                {/* Address Card */}
                <AnimatedSection 
                  direction="left" 
                  delay={0.12} 
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-start space-x-5 hover:shadow-premium-lg hover:border-brand-blue/10 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-extrabold text-base text-deep-navy">Dental Head Office</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-light">
                      Aurus Dental Studio<br />
                      500 Financial Center, Suite 1200<br />
                      New York, NY 10005
                    </p>
                  </div>
                </AnimatedSection>

                {/* Direct Lines Card */}
                <AnimatedSection 
                  direction="left" 
                  delay={0.16} 
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-start space-x-5 hover:shadow-premium-lg hover:border-brand-blue/10 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <LucideIcon name="Phone" size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-extrabold text-base text-deep-navy">Immediate Direct Lines</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans font-light">
                      <span className="font-bold text-slate-700">Client Hub:</span> +1 (800) 555-AURUS
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans font-light">
                      <span className="font-bold text-slate-700">Advisory:</span> contact@aurusdental.com
                    </p>
                  </div>
                </AnimatedSection>

                {/* Desk Hours Card */}
                <AnimatedSection 
                  direction="left" 
                  delay={0.2} 
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-start space-x-5 hover:shadow-premium-lg hover:border-brand-blue/10 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <LucideIcon name="Clock" size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-extrabold text-base text-deep-navy">Advisory Desk Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-light">
                      Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                      Saturday: 9:00 AM - 1:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </AnimatedSection>

              </div>

              {/* Social channels block in info */}
              <AnimatedSection direction="left" delay={0.24} className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Formal Channels</span>
                <div className="flex space-x-3.5">
                  {['Linkedin', 'Twitter', 'Facebook'].map((social, i) => (
                    <a
                      id={`contact-social-${social}`}
                      key={i}
                      href={`https://${social.toLowerCase()}.com`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-soft-gray hover:bg-brand-blue hover:text-white text-slate-500 flex items-center justify-center border border-slate-100 hover:border-brand-blue/20 shadow-sm transition-all duration-300 cursor-pointer"
                      aria-label={social}
                    >
                      <LucideIcon name={social} size={16} />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP EMBED SECTION (Elevated with deep physical shadow) */}
      <section id="contact-map" className="py-16 bg-soft-gray relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection direction="up" className="rounded-3xl overflow-hidden border border-slate-200/50 shadow-premium-lg h-96 relative bg-white">
            <iframe
              id="google-maps-placeholder-iframe"
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3024.2219901290333!2d-74.0110336!3d40.7056434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17688cb075%3A0xe6bf4be6c141d8e1!2s55%20Water%20St%2C%20New%20York%2C%20NY%2010041!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aurus Dental Studio Head Office Location Map"
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
