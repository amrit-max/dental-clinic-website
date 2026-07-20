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

export const services: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our premium cosmetic procedures including veneers, teeth whitening, and complete smile makeovers.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    tag: 'Aesthetics',
    details: [
      'Porcelain Veneers',
      'Professional Teeth Whitening',
      'Invisalign Clear Aligners',
      'Smile Makeovers'
    ]
  },
  {
    id: 'srv-2',
    title: 'Restorative Care',
    description: 'Restore the function and appearance of your teeth with advanced implants, crowns, and bridges that look completely natural.',
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1598256989800-fea992040c30?auto=format&fit=crop&w=800&q=80',
    tag: 'Restorative',
    details: [
      'Dental Implants',
      'Ceramic Crowns',
      'Dental Bridges',
      'Full Mouth Reconstruction'
    ]
  },
  {
    id: 'srv-3',
    title: 'Preventive Dentistry',
    description: 'Maintain optimal oral health through comprehensive exams, professional cleanings, and early detection of potential issues.',
    iconName: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    tag: 'Prevention',
    details: [
      'Comprehensive Exams',
      'Professional Cleanings',
      'Oral Cancer Screenings',
      'Fluoride Treatments'
    ]
  },
  {
    id: 'srv-4',
    title: 'Emergency Services',
    description: 'Immediate care for dental emergencies. We prioritize urgent cases to relieve pain and save damaged teeth quickly.',
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    tag: 'Urgent Care',
    details: [
      'Severe Toothache Relief',
      'Chipped or Broken Teeth',
      'Lost Crowns or Fillings',
      'Abscess Treatment'
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
    name: 'Sophia Martinez',
    role: 'Patient',
    company: 'Cosmetic Procedure',
    quote: 'The team at Aurus transformed my smile completely! The veneers look incredibly natural, and the entire process was pain-free. I can\'t stop smiling now.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Liam Sterling',
    role: 'Patient',
    company: 'Implant Patient',
    quote: 'I was extremely nervous about getting an implant, but Dr. Jenkins explained everything clearly and made sure I was comfortable throughout the procedure.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Michael Thorne',
    role: 'Patient',
    company: 'Routine Care',
    quote: 'The most thorough and professional dental cleaning I\'ve ever had. The staff is so welcoming and the clinic feels more like a spa than a dentist\'s office.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
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
