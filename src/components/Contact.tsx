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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/dentalaurus@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        alert("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred while sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-page-container" className="overflow-x-hidden bg-white">
      
      {/* 2. SPLIT LAYOUT SECTION (Asymmetric 8:4 columns layout to break visual boredom) */}
      <section id="contact-body" className="pt-36 pb-24 bg-white bg-dot-pattern">
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
                  Our Locations
                </span>
                <h2 className="font-display text-3xl font-black text-deep-navy tracking-tight leading-none">
                  Clinic Details
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-sans font-light">
                  Find our state-of-the-art facilities in Pune and Mumbai.
                </p>
              </AnimatedSection>

              {/* Info Cards Stack with Custom details and layered depth */}
              <div className="space-y-6">
                
                {/* Pune Clinic Card */}
                <AnimatedSection 
                  direction="left" 
                  delay={0.12} 
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-start space-x-5 hover:shadow-premium-lg hover:border-brand-blue/10 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-extrabold text-base text-deep-navy">Pune Clinic</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-light">
                      <span className="font-semibold text-slate-700 block mb-1">Aurus Dental Studio</span>
                      Mittal Court, B23, opposite Mahesh Lunch Home, Rasta Peth, Pune, Maharashtra 411002
                    </p>
                  </div>
                </AnimatedSection>

                {/* Mumbai Clinic Card */}
                <AnimatedSection 
                  direction="left" 
                  delay={0.16} 
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-start space-x-5 hover:shadow-premium-lg hover:border-brand-blue/10 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-extrabold text-base text-deep-navy">Mumbai Clinic</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans font-light">
                      <span className="font-semibold text-slate-700 block mb-1">Saifee Smiles Multispeciality</span>
                      5C, Shamji Morarji building, Champsi Bhimji Rd, Thakkar Estate, Mazgaon, Mumbai 400010
                    </p>
                  </div>
                </AnimatedSection>

                {/* Direct Lines & Hours Card */}
                <AnimatedSection 
                  direction="left" 
                  delay={0.2} 
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-start space-x-5 hover:shadow-premium-lg hover:border-brand-blue/10 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue-light to-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/10 shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <LucideIcon name="Phone" size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-extrabold text-base text-deep-navy">Contact & Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans font-light">
                      <span className="font-bold text-slate-700">Phone:</span> 098208 54665
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-sans font-light mt-2 flex items-center">
                      <LucideIcon name="Clock" size={14} className="mr-1.5 text-brand-blue" />
                      Open 24 hours
                    </p>
                  </div>
                </AnimatedSection>

              </div>

              {/* Social channels block in info */}
              <AnimatedSection direction="left" delay={0.24} className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Social Channels</span>
                <div className="flex space-x-3.5">
                  <a
                    id="contact-social-Instagram"
                    href="https://www.instagram.com/its_that_dentist/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-soft-gray hover:bg-brand-blue hover:text-white text-slate-500 flex items-center justify-center border border-slate-100 hover:border-brand-blue/20 shadow-sm transition-all duration-300 cursor-pointer"
                    aria-label="Instagram"
                  >
                    <LucideIcon name="Instagram" size={16} />
                  </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.1} className="rounded-3xl overflow-hidden border border-slate-200/50 shadow-premium-lg h-96 relative bg-white flex flex-col group">
              <div className="bg-white px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-display font-bold text-deep-navy text-lg">Pune Clinic</h3>
                <span className="text-xs font-mono font-semibold text-brand-blue bg-brand-blue-light px-3 py-1 rounded-full tracking-widest">AURUS DENTAL</span>
              </div>
              <iframe
                id="google-maps-pune-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.310337747241!2d73.86731744527464!3d18.519958337777712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19b6511c397%3A0xaaf20e9cb865730!2sAurus%20Dental%20Studio%20by%20Dr%20Abbas%20Unwala!5e1!3m2!1sen!2sin!4v1784627930041!5m2!1sen!2sin"
                className="w-full flex-1 border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aurus Dental Studio Pune Map"
              />
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.2} className="rounded-3xl overflow-hidden border border-slate-200/50 shadow-premium-lg h-96 relative bg-white flex flex-col group">
              <div className="bg-white px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-display font-bold text-deep-navy text-lg">Mumbai Clinic</h3>
                <span className="text-xs font-mono font-semibold text-brand-blue bg-brand-blue-light px-3 py-1 rounded-full tracking-widest">SAIFEE SMILES</span>
              </div>
              <iframe
                id="google-maps-mumbai-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.0406104855624!2d72.8427418!3d18.9718028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4927ef9921%3A0x4c17a54c0bc25f07!2sDr%20Abbas%20Unwala&#39;s%20Saifee%20Smiles%20Multispeciality!5e1!3m2!1sen!2sin!4v1784627997309!5m2!1sen!2sin"
                className="w-full flex-1 border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saifee Smiles Mumbai Map"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
