import { StatItem, FeatureItem, ServiceItem, TeamMember, Testimonial, ProcessStep } from './types';

export const stats: StatItem[] = [
  { id: 'stat-1', value: '15+', label: 'Years of Experience' },
  { id: 'stat-2', value: '10k+', label: 'Happy Smiles' },
  { id: 'stat-3', value: '99%', label: 'Patient Satisfaction' },
  { id: 'stat-4', value: '24/7', label: 'Emergency Care' }
];

export const features: FeatureItem[] = [
  {
    id: 'feat-1',
    title: 'Advanced Technology',
    description: 'We utilize state-of-the-art dental equipment and digital imaging for precise diagnostics and comfortable treatments.',
    iconName: 'Zap'
  },
  {
    id: 'feat-2',
    title: 'Painless Procedures',
    description: 'Our modern approach focuses on minimizing discomfort, ensuring a relaxed and stress-free experience for every patient.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'feat-3',
    title: 'Personalized Care',
    description: 'Every smile is unique. We tailor our treatment plans specifically to your individual oral health needs and aesthetic goals.',
    iconName: 'Users'
  }
];

import s1 from '../assets/1.jpg';
import s2 from '../assets/2.jpg';
import s3 from '../assets/3.jpg';
import s4 from '../assets/4.jpg';
import s5 from '../assets/5.jpg';
import s6 from '../assets/6.jpg';
import s7 from '../assets/7.jpg';
import s8 from '../assets/8.jpg';
import s9 from '../assets/9.jpg';

export const services: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Digital Smile Designing',
    description: 'Transform your smile precisely with custom-crafted porcelain veneers and laminates using advanced digital smile design technology.',
    iconName: 'Smile',
    image: s1,
    tag: 'Cosmetic',
    details: [
      'Digital Smile Preview',
      'Porcelain Veneers',
      'Composite Laminates',
      'Aesthetic Consultations'
    ]
  },
  {
    id: 'srv-2',
    title: 'Laser Dentistry',
    description: 'Experience minimally invasive, virtually painless dental treatments using state-of-the-art laser technology for faster healing and precision.',
    iconName: 'Zap',
    image: s2,
    tag: 'Advanced',
    details: [
      'Gum Contouring',
      'Cavity Preparation',
      'Lesion Removal',
      'Faster Recovery'
    ]
  },
  {
    id: 'srv-3',
    title: 'Gum Surgery',
    description: 'Expert periodontal care and advanced gum surgeries to treat disease, restore optimal oral health, and enhance the foundation of your smile.',
    iconName: 'Activity',
    image: s3,
    tag: 'Periodontal',
    details: [
      'Grafting Procedures',
      'Pocket Reduction',
      'Crown Lengthening',
      'Periodontal Therapy'
    ]
  },
  {
    id: 'srv-4',
    title: 'Clear Aligners & Braces',
    description: 'Straighten your teeth discreetly and comfortably with custom clear aligners or traditional orthodontic braces for a perfectly aligned smile.',
    iconName: 'Sparkles',
    image: s4,
    tag: 'Orthodontics',
    details: [
      'Invisalign Therapy',
      'Ceramic Braces',
      'Custom Retainers',
      'Bite Correction'
    ]
  },
  {
    id: 'srv-5',
    title: 'Crowns and Bridge',
    description: 'Restore damaged or missing teeth with durable, natural-looking ceramic crowns and custom bridges engineered for long-lasting function.',
    iconName: 'Layers',
    image: s5,
    tag: 'Restorative',
    details: [
      'Zirconia Crowns',
      'Fixed Bridges',
      'Implant Crowns',
      'Custom Shade Matching'
    ]
  },
  {
    id: 'srv-6',
    title: 'Teeth Whitening & Gum Depigmentation',
    description: 'Brighten your smile dramatically with professional teeth whitening and specialized gum depigmentation for a radiant, even-toned appearance.',
    iconName: 'Sun',
    image: s6,
    tag: 'Aesthetics',
    details: [
      'In-Office Whitening',
      'Take-Home Kits',
      'Laser Gum Bleaching',
      'Stain Removal'
    ]
  },
  {
    id: 'srv-7',
    title: 'Painless Extractions',
    description: 'Safe, comfortable, and stress-free tooth extractions performed with advanced anesthesia techniques to ensure a completely painless experience.',
    iconName: 'HeartPulse',
    image: s7,
    tag: 'Surgical',
    details: [
      'Simple Extractions',
      'Surgical Extractions',
      'Local Anesthesia',
      'Post-Op Care'
    ]
  },
  {
    id: 'srv-8',
    title: 'Wisdom Teeth Removal',
    description: 'Expert surgical extraction of impacted or problematic wisdom teeth, focusing on minimizing discomfort and accelerating your recovery.',
    iconName: 'ShieldAlert',
    image: s8,
    tag: 'Surgical',
    details: [
      'Impacted Teeth',
      'Preventive Removal',
      'Sedation Options',
      'Surgical Expertise'
    ]
  },
  {
    id: 'srv-9',
    title: 'Teeth Cleaning & Polishing',
    description: 'Maintain flawless oral hygiene and prevent disease with comprehensive professional scaling, root planing, and enamel polishing.',
    iconName: 'Droplets',
    image: s9,
    tag: 'Preventive',
    details: [
      'Ultrasonic Scaling',
      'Prophylaxis',
      'Plaque Removal',
      'Fluoride Application'
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dr. Sarah Jenkins',
    role: 'Lead Prosthodontist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    bio: 'Specializes in complex restorative treatments and cosmetic dentistry with over 15 years of clinical experience.'
  },
  {
    id: 'team-2',
    name: 'Dr. Marcus Chen',
    role: 'Orthodontic Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in modern clear aligner therapy and traditional orthodontics for both adults and children.'
  },
  {
    id: 'team-3',
    name: 'Elena Rostova',
    role: 'Registered Dental Hygienist',
    image: 'https://images.unsplash.com/photo-1594824432258-0ceb68e0e1eb?auto=format&fit=crop&w=400&q=80',
    bio: 'Dedicated to patient education and providing gentle, thorough preventive care for long-lasting oral health.'
  },
  {
    id: 'team-4',
    name: 'David Vance',
    role: 'Clinic Director',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    bio: 'Ensures every patient experiences seamless scheduling, comfortable visits, and exceptional customer service.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'qaidzoher tambawala',
    role: 'Patient',
    company: '',
    quote: 'You are in safe hands once you reach this dentist. Dr. Abbas not just does a brilliant job as an endodontist he also engages with the patient and talks them thru the whole procedure. Be it a root canal or be it an implant.',
    image: '',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'sneha morye',
    role: 'Patient',
    company: '',
    quote: 'I had my wisdom tooth extracted by Dr. Abbas and it was a very smooth and painless experience. I had removed another wisdom tooth elsewhere before, which was quite painful, so I was nervous — but Dr. Abbas made the entire process easy.',
    image: '',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Kania Wadiwala',
    role: 'Patient',
    company: '',
    quote: 'Great experience at Dr. Abbas’s dental studio. Professional service, clean setup and very friendly staff. Dr. Abbas is knowledgeable and makes sure patients are comfortable throughout the treatment.',
    image: '',
    rating: 5
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation & Exam',
    description: 'We begin with a thorough examination, including digital x-rays and a discussion of your dental goals and concerns.',
    iconName: 'Search'
  },
  {
    step: 2,
    title: 'Treatment Planning',
    description: 'Our specialists create a personalized roadmap tailored to your specific needs, explaining all available options clearly.',
    iconName: 'FileText'
  },
  {
    step: 3,
    title: 'Gentle Treatment',
    description: 'We perform all procedures using state-of-the-art technology and techniques to ensure your comfort and optimal results.',
    iconName: 'ShieldCheck'
  },
  {
    step: 4,
    title: 'Aftercare & Follow-up',
    description: 'We provide detailed post-treatment care instructions and schedule follow-up visits to ensure lasting oral health.',
    iconName: 'Smile'
  }
];
