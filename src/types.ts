export type Page = 'home' | 'about' | 'services' | 'contact';

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  summary: string;
  iconName: string;
  image: string;
  tag: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
