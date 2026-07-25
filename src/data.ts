import { StatItem, FeatureItem, ServiceItem, TeamMember, Testimonial, ProcessStep, FAQItem } from './types';

export const stats: StatItem[] = [
  { id: 'stat-1', value: '15+', label: 'Years of Experience' },
  { id: 'stat-2', value: '10k+', label: 'Happy Smiles' },
  { id: 'stat-3', value: '100%', label: 'Patient Satisfaction' },
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

import tw from '../assets/tw.jpeg';
import tcp from '../assets/tcp.jpg';
import ddi from '../assets/ddi.jpg';
import ard from '../assets/ard.jpg';
import pwt from '../assets/pwt.jpg';
import lgs from '../assets/lgs.jpg';
import dsd from '../assets/dsd.jpg';
import cb from '../assets/cb.jpg';
import prt from '../assets/prt.jpg';
import pd from '../assets/pd.jpg';
import cab from '../assets/cab.jpeg';

export const services: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Teeth Whitening',
    description: 'Reveal a bright, radiant smile with professional teeth whitening and specialized gum depigmentation treatments at Aurus Dental Studio in Pune and Mumbai. Over time, factors like diet, coffee, tea, smoking, and natural aging can cause stubborn external and internal tooth stains that normal brushing cannot remove. Our in-office chemical and laser teeth whitening procedures use advanced, safe whitening agents activated by specialized light technology, lifting stains and brightening your enamel by up to eight shades in a single appointment. For patients concerned with dark, dark-spotted, or hyperpigmented gums, we offer cosmetic gum depigmentation (often called gum bleaching). Using precise laser ablation, Dr. Abbas Unwala gently removes excess melanin pigments from the gum tissue, revealing healthy, pink gums underneath. The combination of bright teeth and beautifully toned gums creates a harmonious, youthful, and stunning smile symmetry. We also provide customized take-home whitening kits with professional-grade gel for easy maintenance. Transform your appearance, feel confident, and make a great first impression with our safe, fast, and highly effective aesthetic therapies in Pune (Rasta Peth) and Mumbai (Mazgaon).',
    summary: 'Brighten your teeth by up to eight shades and remove excess gum discoloration. Our in-office laser treatments deliver a sparkling, symmetrical, and youthful smile makeover.',
    iconName: 'Sun',
    image: tw,
    tag: 'Aesthetics',
    details: [
      'In-Office Whitening',
      'Take-Home Kits',
      'Laser Gum Bleaching',
      'Stain Removal'
    ]
  },
  {
    id: 'srv-2',
    title: 'Teeth Cleaning & Polishing',
    description: 'Maintain outstanding oral hygiene, fresh breath, and prevent periodontal disease with professional teeth cleaning and polishing at Aurus Dental Studio. Daily brushing and flossing are essential, but they cannot completely remove hardened tartar (calculus) and bio-films that build up in hard-to-reach pockets along the gum line. Our advanced dental scaling uses ultrasonic scalers to gently shake loose and wash away stubborn tartar deposits without scraping your tooth enamel. Following scaling, we perform root planing to smooth the root surfaces, preventing future plaque buildup, and finish with professional polishing using a gentle prophy-paste to remove external stains and leave your teeth feeling exceptionally smooth. Regular scaling and polishing every six months is the most effective preventive measure against tooth decay, chronic bad breath, and gum inflammation. Dr. Abbas Unwala and our dental hygienists in Pune (Rasta Peth) and Mumbai (Mazgaon) also provide personalized advice on proper home care techniques, brushing pressures, and the best hygiene products. Invest in your health with a thorough professional cleaning to keep your teeth sparkling, your gums healthy, and your breath fresh.',
    summary: 'Maintain excellent hygiene, fresh breath, and stain-free teeth with ultrasonic scaling and polishing. Protect your gums and prevent cavities with routine cleanings.',
    iconName: 'Droplets',
    image: tcp,
    tag: 'Preventive',
    details: [
      'Ultrasonic Scaling',
      'Prophylaxis',
      'Plaque Removal',
      'Fluoride Application'
    ]
  },
  {
    id: 'srv-3',
    title: 'Digital Dentistry with Implants',
    description: 'Experience the future of restorative dentistry with advanced digital dentistry and dental implants at Aurus Dental Studio. Serving patients across Pune and Mumbai, Dr. Abbas Unwala utilizes micro-precise digital planning tools to restore missing teeth with exceptional safety and longevity. Dental implants represent the gold standard for replacing lost teeth, functioning like natural roots to support custom porcelain or zirconia crowns. Using computerized 3D intraoral scans and detailed CBCT radiography, we map out the exact placement of each implant relative to your jawbone and nerves prior to the procedure. This digital workflow eliminates guesswork, minimizes surgical incisions, reduces treatment times, and ensures a faster, highly comfortable recovery. Whether you need a single tooth replacement, a multi-unit bridge, or full-mouth restorations, our clinics in Rasta Peth, Pune and Saifee Smiles in Mazgaon, Mumbai provide implant therapies designed for stable biting force and natural smile aesthetics. By using bio-compatible titanium implants that fuse naturally with your bone, we preserve your facial structure and prevent healthy adjacent teeth from shifting. Choose digital dentistry for a seamless, comfortable, and life-changing smile transformation.',
    summary: 'Restore missing teeth permanently and comfortably with digital implants. Using 3D bone scanning and guided placement, we rebuild your natural bite and facial structure.',
    iconName: 'Layers',
    image: ddi,
    tag: 'Restorative',
    details: [
      'Single & Multi-Tooth Implants',
      'Computerized 3D Scanning',
      'Computer-Guided Placement',
      'Zirconia Implant Crowns'
    ]
  },
  {
    id: 'srv-4',
    title: 'Aesthetic Restorative Dentistry',
    description: 'Restore the natural form, beauty, and function of your teeth with advanced aesthetic restorative dentistry at Aurus Dental Studio. Serving patients in Pune and Mumbai, our restorative solutions go beyond simple fillings to rebuild structural integrity and enhance your smile aesthetics. We specialize in tooth-colored composite restorations, ceramic inlays and onlays, and conservative bonding techniques. Whether you have decayed, chipped, worn, or broken teeth, Dr. Abbas Unwala utilizes state-of-the-art materials that mimic the light reflectivity and shade of natural enamel. Traditional metal fillings can weaken tooth structure and stand out visually, whereas our bio-compatible composite resin and porcelain restorations bond directly to the tooth, strengthening it while blending in seamlessly. Using high-magnification diagnostics, we ensure micro-precise fits that protect your bite alignment and seal the tooth against future decay. At our clinics in Rasta Peth, Pune and Mazgaon, Mumbai, we design each restoration to align harmoniously with your facial features. Aesthetic restorative dentistry not only prevents further decay but also restores full chewing capability, prevents healthy teeth from shifting, and helps you laugh and speak with complete confidence.',
    summary: 'Restore decayed, chipped, or broken teeth with natural, tooth-colored composite bonding and ceramic onlays. Rebuild structural strength invisibly without metal fillings.',
    iconName: 'Sparkles',
    image: ard,
    tag: 'Restorative',
    details: [
      'Composite Bonding',
      'Tooth-Colored Fillings',
      'Ceramic Inlays & Onlays',
      'Conservative Restorations'
    ]
  },
  {
    id: 'srv-5',
    title: 'Painless Wisdom Tooth Extraction',
    description: 'Alleviate pain and protect your alignment with expert surgical wisdom teeth removal at Aurus Dental Studio. Wisdom teeth, or third molars, are the last to erupt and frequently lack adequate space in the jaw, leading to impaction, severe pain, gum infections, decay, and damage to adjacent healthy teeth. Dr. Abbas Unwala specializes in extracting impacted wisdom teeth using advanced micro-surgical instruments and low-force techniques to minimize bone and tissue disruption. Our clinics in Pune (Rasta Peth) and Mumbai (Mazgaon) utilize detailed digital X-rays to map the exact location of the tooth roots relative to your sensory nerves, guaranteeing a safe and highly predictable procedure. We perform these extractions under deep local anesthesia or conscious sedation, ensuring you remain comfortable and pain-free throughout. After the extraction, we guide you through a structured recovery protocol, providing custom care kits, pain management plans, and follow-up checks to ensure rapid healing. Proactive extraction of problematic wisdom teeth prevents long-term crowding of your front teeth, eliminates painful jaw stiffness, and protects your surrounding oral structures from chronic bacterial infections.',
    summary: 'Relieve jaw pain and protect your tooth alignment with expert wisdom teeth extractions. Using low-force surgical techniques, we remove impacted molars safely and comfortably.',
    iconName: 'ShieldAlert',
    image: pwt,
    tag: 'Surgical',
    details: [
      'Impacted Teeth',
      'Preventive Removal',
      'Sedation Options',
      'Surgical Expertise'
    ]
  },
  {
    id: 'srv-6',
    title: 'Laser Gum Surgery',
    description: 'Restore the health and foundation of your smile with professional gum surgery and advanced periodontal care at Aurus Dental Studio. Periodontal health is critical, as healthy gums form the vital structural support for your teeth. Dr. Abbas Unwala offers specialized gum surgical procedures across Pune and Mumbai to address advanced gum diseases, periodontal pockets, and gum recession. Our treatments include scaling and root planing, pocket reduction surgery, and gingival grafting to cover exposed tooth roots. We also perform cosmetic crown lengthening to expose more natural tooth structure for aesthetic restorations. Left untreated, gum infections can lead to bone loss, chronic bad breath, and tooth mobility. Using micro-surgical tools and painless laser sterilization, we eradicate deep-seated bacterial plaque, rebuild damaged soft tissue, and secure the foundation of your teeth. Gums are restored to a firm, healthy, pink state, preventing future tooth loss and supporting your overall systemic health. If you are experiencing bleeding gums, recession, or persistent discomfort in Pune or Mumbai, our comprehensive periodontal therapies provide stable, long-lasting oral health and a secure basis for beautiful restorations.',
    summary: 'Restore gum health and aesthetic balance with professional laser therapy and grafting. We treat gum recession, pocket infections, and uneven gum lines comfortably.',
    iconName: 'Activity',
    image: lgs,
    tag: 'Periodontal',
    details: [
      'Grafting Procedures',
      'Pocket Reduction',
      'Crown Lengthening',
      'Periodontal Therapy'
    ]
  },
  {
    id: 'srv-7',
    title: 'Digital Smile Designing',
    description: 'Transform your smile with absolute precision using custom-designed porcelain veneers and laminates at Aurus Dental Studio in Pune and Mumbai. Digital Smile Designing (DSD) is a state-of-the-art methodology that allows us to plan and visualize aesthetic smile transformations before any treatment begins. Using advanced digital photography, high-resolution video scans, and software simulations, Dr. Abbas Unwala carefully analyzes your facial features, dental anatomy, and smile dynamics to craft a customized blueprint. Whether you want to correct discolored, chipped, misaligned, or unevenly spaced teeth, DSD gives you a realistic preview of your new look, ensuring you are fully aligned with the results. Our customized porcelain veneers and ultra-thin dental laminates are crafted from premium zirconia or E-Max ceramics to provide natural light reflection, superior strength, and exceptional durability. This comprehensive aesthetic treatment is perfect for patients seeking a complete smile makeover in Pune (Rasta Peth) and Mumbai (Mazgaon). We collaborate with top-tier dental labs to customize the shade, shape, and alignment of each restoration, delivering a balanced, radiant smile that enhances your facial aesthetics and builds long-term confidence.',
    summary: 'Plan and visualize your dream smile with custom porcelain veneers and laminates. Using advanced digital scans, we craft a personalized makeover aligned with your facial features.',
    iconName: 'Smile',
    image: dsd,
    tag: 'Cosmetic',
    details: [
      'Digital Smile Preview',
      'Porcelain Veneers',
      'Composite Laminates',
      'Aesthetic Consultations'
    ]
  },
  {
    id: 'srv-8',
    title: 'Crowns and Bridges',
    description: 'Rebuild the strength, functionality, and beauty of damaged or missing teeth with custom-crafted dental crowns and bridges at Aurus Dental Studio. Serving patients in Pune and Mumbai, we specialize in high-strength zirconia crowns, premium E-Max ceramic restorations, and porcelain-fused-to-metal (PFM) bridges. A dental crown is a custom cap that fits over a severely decayed, cracked, or root-canal-treated tooth, protecting it from fracture and restoring its natural chewing force. A dental bridge, on the other hand, is an excellent fixed option to replace one or more missing teeth, using the adjacent healthy teeth as anchors to support a lifelike replacement tooth. Dr. Abbas Unwala utilizes high-precision digital scanners to capture exact physical dimensions, ensuring your crowns and bridges fit perfectly and align naturally with your bite. We pay close attention to custom shade matching, replicating the exact translucency and texture of your adjacent natural teeth. Whether you need a single implant-supported crown in Pune (Rasta Peth) or a multi-unit bridge in Mumbai (Mazgaon), our durable, biocompatible restorations restore structural integrity, prevent healthy teeth from shifting, and rebuild your confident, complete smile.',
    summary: 'Restore damaged or missing teeth with custom ceramic and zirconia crowns and bridges. We rebuild tooth strength, durability, and natural shape for a fully functional bite.',
    iconName: 'Layers',
    image: cb,
    tag: 'Restorative',
    details: [
      'Zirconia Crowns',
      'Fixed Bridges',
      'Implant Crowns',
      'Custom Shade Matching'
    ]
  },
  {
    id: 'srv-9',
    title: 'Painless Rootcanal Treatment',
    description: 'Save your natural teeth and eliminate toothache pain with advanced, painless root canal treatment at Aurus Dental Studio. A root canal becomes necessary when the dental pulp—the soft tissue containing nerves and blood vessels inside your tooth—becomes infected or inflamed due to deep decay, repeated dental procedures, or a crack. Many patients associate root canals with pain, but with modern endodontic technology, the procedure is as comfortable and routine as receiving a standard filling. Dr. Abbas Unwala is a highly skilled endodontics specialist in Pune and Mumbai, utilizing state-of-the-art rotary instruments, digital apex locators, and painless local anesthesia techniques to ensure a completely stress-free treatment. During the procedure, the infected pulp is carefully removed, the root canal system is thoroughly cleaned, sterilized using precise dental lasers, and sealed with a biocompatible material to prevent re-infection. Finally, the tooth is protected and restored to full function with a custom zirconia or ceramic crown. Our clinics in Pune (Rasta Peth) and Mumbai (Mazgaon) offer conservative endodontic care that preserves your natural smile, relieves dental pain immediately, and prevents the spread of infection to surrounding bone tissue.',
    summary: 'Save infected or deeply decayed teeth comfortably with laser-assisted root canal therapy. Dr. Abbas Unwala cleans, sterilizes, and seals the canals to eliminate pain.',
    iconName: 'Award',
    image: prt,
    tag: 'Surgical',
    details: [
      'Single-Visit Root Canals',
      'Rotary Endodontics',
      'Laser Canal Disinfection',
      'Zirconia Protective Crowns'
    ]
  },
  {
    id: 'srv-10',
    title: 'Pediatric Dentistry',
    description: 'Build a lifetime of healthy, beautiful smiles for your children with gentle and specialized pediatric dentistry at Aurus Dental Studio. Early childhood dental experiences shape a child\'s attitude toward oral health for life, which is why Dr. Abbas Unwala and our pediatric team in Pune and Mumbai focus on creating a warm, friendly, and anxiety-free environment. Pediatric dentistry targets infants, children, and teenagers, providing preventive services such as professional cleanings, fluoride applications, and dental sealants that shield young teeth from cavities. We also specialize in gentle tooth restorations, pediatric root canals (pulpotomies), and space maintainers to ensure adult teeth erupt in correct alignment. Our team takes the time to educate both children and parents on proper brushing techniques, flossing habits, and dietary choices that prevent tooth decay. Whether you are visiting our clinic in Rasta Peth, Pune or Saifee Smiles in Mazgaon, Mumbai, we make dental checkups fun and engaging. Don\'t wait for your child to experience tooth pain—bring them in for routine checkups to establish good habits, monitor jaw development, and ensure their growing teeth remain strong, healthy, and cavity-free.',
    summary: 'Introduce children to healthy dental habits in a warm, friendly, and fear-free environment. We offer preventive cleanings, sealants, and gentle orthodontic monitoring.',
    iconName: 'Shield',
    image: pd,
    tag: 'Preventive',
    details: [
      'Child-Friendly Checkups',
      'Cavity-Preventive Sealants',
      'Fluoride Therapy',
      'Myofunctional Evaluations'
    ]
  },
  {
    id: 'srv-11',
    title: 'Orthodontic Treatment & Clean Aligners',
    description: 'Achieve a perfectly straight, beautiful smile discreetly with premium orthodontic treatments and clear aligners at Aurus Dental Studio. We specialize in Invisalign clear aligners and modern aesthetic braces across our Pune and Mumbai clinics. Clear aligners represent the ultimate choice for patients seeking comfortable, metal-free, and virtually invisible teeth straightening. Crafted from medical-grade, BPA-free transparent polymer, these custom alignment trays fit snugly over your teeth to gently guide them into position. Because they are fully removable, you can maintain your regular brushing, flossing, and dietary habits without any restrictions. For complex orthodontic corrections, skeletal malocclusions, or severe crowding, Dr. Abbas Unwala also offers advanced ceramic braces that blend naturally with your tooth shade. We map out your entire treatment trajectory using 3D digital dental scans to visualize your smile correction step-by-step. Regular checkups at our Rasta Peth, Pune and Mazgaon, Mumbai locations ensure your teeth shift smoothly and safely. Beyond aesthetics, correcting dental alignment improves chewing forces, speech clarity, and reduces risks of uneven enamel wear and jaw joint (TMJ) discomfort.',
    summary: 'Straighten your teeth discreetly with premium Invisalign clear aligners and modern braces. Correct overcrowding and bite issues with comfortable, removable, and invisible trays.',
    iconName: 'Sparkles',
    image: cab,
    tag: 'Orthodontics',
    details: [
      'Invisalign Clear Aligners',
      'Aesthetic Ceramic Braces',
      '3D Digital Scan Planning',
      'Custom Bite Correction'
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

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the cost of Invisalign clear aligners in Pune & Mumbai?',
    answer: 'The cost of clear aligners or Invisalign treatment in Pune and Mumbai varies depending on the complexity of your alignment case, the type of aligners selected, and the duration of your orthodontic treatment. At Aurus Dental Studio (Pune) and Saifee Smiles (Mumbai), we offer comprehensive orthodontic assessments, fully customized alignment plans, and transparent pricing. We also provide interest-free monthly EMI plans to make premium orthodontic care affordable and stress-free for all patients.'
  },
  {
    id: 'faq-2',
    question: 'Are dental implants a permanent solution for missing teeth?',
    answer: 'Yes, dental implants are considered the most durable and permanent solution for replacing missing teeth. An implant consists of a biocompatible titanium post that is surgically inserted into the jawbone, acting as a strong root replacement. Over time, it fuses with your bone through osseointegration. Once topped with a custom ceramic or zirconia crown, it functions and looks just like a natural tooth. With excellent oral hygiene and regular checkups at Aurus Dental Studio, dental implants can last a lifetime.'
  },
  {
    id: 'faq-3',
    question: 'How long does a professional teeth whitening treatment take?',
    answer: 'An in-office professional teeth whitening session at Aurus Dental Studio takes approximately 45 to 60 minutes. During the treatment, a professional-grade whitening gel is applied to your teeth and activated using a specialized light source, lifting deep stains and brightening your smile by up to eight shades in a single visit. It is a safe, fast, and highly effective cosmetic procedure.'
  },
  {
    id: 'faq-4',
    question: 'Why do my gums bleed when I brush, and how is it treated?',
    answer: 'Bleeding gums are typically a sign of gingivitis or early gum disease, caused by the accumulation of bacterial plaque along the gum line. If plaque is not removed, it hardens into tartar, causing inflammation and bleeding. We treat this at our Pune and Mumbai clinics through professional scaling (ultrasonic cleaning) and root planing to remove tartar and smooth root surfaces. In advanced cases, laser gum therapy or gum surgery is performed to eliminate pockets and restore gum health.'
  },
  {
    id: 'faq-5',
    question: 'Is wisdom tooth extraction safe, and what is the recovery time?',
    answer: 'Wisdom tooth removal is a very common and safe procedure when performed by an experienced dentist. Dr. Abbas Unwala utilizes advanced digital imaging to pre-map the tooth roots and nerve locations, ensuring maximum safety. Most patients recover fully within 3 to 5 days. We provide complete post-operative instructions, pain management options, and specialized care guidelines to minimize swelling and support rapid, smooth healing.'
  },
  {
    id: 'faq-6',
    question: 'Do you offer emergency dental care in Pune and Mumbai?',
    answer: 'Yes, we provide emergency dental care at both Aurus Dental Studio in Pune (Rasta Peth) and Saifee Smiles in Mumbai (Mazgaon). Whether you are suffering from severe toothaches, a broken tooth, jaw trauma, or an abscessed tooth, our clinics are equipped to handle urgent cases immediately, relieving pain and preventing further complications.'
  },
  {
    id: 'faq-7',
    question: 'How often should I get a dental cleaning and checkup?',
    answer: 'We recommend visiting the dentist for a professional dental cleaning, scaling, and comprehensive checkup every six months. Regular visits allow us to remove hardened tartar that normal brushing cannot reach, check for early signs of decay, gum disease, or oral issues, and treat them before they turn into complex, expensive problems.'
  },
  {
    id: 'faq-8',
    question: 'What makes Aurus Dental Studio different from other clinics?',
    answer: 'Aurus Dental Studio is led directly by MDS-specialist Dr. Abbas Saifuddin Unwala, ensuring you receive advanced, expert care without being passed off to junior associates. We focus on advanced technology (laser dentistry, digital smile design), absolute transparency in pricing (no hidden costs), and a comfort-first, anxiety-free approach. We also maintain state-of-the-art clinics in both Pune and Mumbai.'
  }
];
