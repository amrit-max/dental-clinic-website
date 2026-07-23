import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Build client and server bundles
console.log('Building client bundle...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('Building server bundle...');
execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-server', { stdio: 'inherit' });

// 2. Read the client-built index.html as template
const templatePath = path.resolve(__dirname, 'dist/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

// 3. Import the server render function dynamically
const serverBundlePath = path.resolve(__dirname, 'dist-server/entry-server.js');
const { render } = await import(`file://${serverBundlePath}`);

// 4. Define routes and page-specific metadata/schemas
const routes = [
  {
    path: 'home',
    urlPath: '',
    title: 'Best Dental Clinic in Pune & Mumbai | Aurus Dental Studio',
    description: 'Aurus Dental Studio is Pune & Mumbai\'s premier dental clinic led by Dr. Abbas Saifuddin Unwala, MDS. Specializing in Invisalign clear aligners, painless extractions, laser dentistry, dental implants, and smile design in a premium, stress-free environment.',
    keywords: 'dentist pune, dental clinic pune, clear aligners pune, dr abbas unwala, saifee smiles mazgaon, cosmetic dentist pune, dental clinic mumbai, dental implants pune',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Dentist",
          "@id": "https://aurusdentalstudio.com/#dentist-pune",
          "name": "Aurus Dental Studio - Dr. Abbas Unwala",
          "image": "https://aurusdentalstudio.com/assets/logo.webp",
          "url": "https://aurusdentalstudio.com",
          "telephone": "+919820854665",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mittal Court, B23, opposite Mahesh Lunch Home, Rasta Peth",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411002",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.519958,
            "longitude": 73.867317
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "founder": {
            "@type": "Person",
            "name": "Dr. Abbas Saifuddin Unwala",
            "jobTitle": "Director & Chief Dentist",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Government Dental College and Hospital, Mumbai"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "215"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Amit Sharma"
              },
              "datePublished": "2026-03-15",
              "reviewBody": "Dr. Abbas Unwala is the best dentist in Pune. I had my Invisalign clear aligners treatment done here, and the results are absolutely perfect! Highly professional and painless care.",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Priyanka Patel"
              },
              "datePublished": "2026-05-10",
              "reviewBody": "Aurus Dental Studio offers state of the art facilities in Pune. Laser gum treatment was done with zero pain. Highly recommended clinic for dental care.",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            }
          ]
        },
        {
          "@type": "Dentist",
          "@id": "https://aurusdentalstudio.com/#dentist-mumbai",
          "name": "Saifee Smiles Multispeciality Dental Clinic",
          "image": "https://aurusdentalstudio.com/assets/logo.webp",
          "url": "https://aurusdentalstudio.com",
          "telephone": "+919820854665",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5C, Shamji Morarji building, Champsi Bhimji Rd, Thakkar Estate, Mazgaon",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400010",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.971802,
            "longitude": 72.842741
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "184"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Murtaza Ali"
              },
              "datePublished": "2026-02-20",
              "reviewBody": "Excellent dental clinic in Mazgaon, Mumbai. The clinic has modern machinery and Dr. Abbas provides painless extraction treatments. Very happy with Saifee Smiles.",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: 'about',
    urlPath: 'about',
    title: 'About Dr. Abbas Unwala & Aurus Dental Studio | Pune & Mumbai',
    description: 'Meet Dr. Abbas Saifuddin Unwala, MDS — founder & chief dentist at Aurus Dental Studio, Pune, and Saifee Smiles, Mumbai. With 15+ years of clinical excellence, including roles at Jaslok Hospital, Dr. Unwala offers top-tier precision-focused dental care.',
    keywords: 'dr abbas unwala, dentist rasta peth, best endodontist pune, dental clinic history, saifee smiles, aurus dental team',
  },
  {
    path: 'services',
    urlPath: 'services',
    title: 'Aesthetic & Painless Dental Services | Clear Aligners, Laser, Extractions',
    description: 'Explore the transformational dental treatments at Aurus Dental Studio. From Invisalign clear aligners, painless wisdom teeth extraction, teeth whitening, laser gum surgery, and dental crowns, we provide premium and anxiety-free oral care.',
    keywords: 'laser dentistry pune, clear aligners cost pune, wisdom teeth removal pune, gum surgery cost pune, teeth cleaning pune, teeth whitening pune',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of Invisalign clear aligners in Pune & Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of clear aligners or Invisalign treatment in Pune and Mumbai varies depending on the complexity of your alignment case, the type of aligners selected, and the duration of your orthodontic treatment. At Aurus Dental Studio (Pune) and Saifee Smiles (Mumbai), we offer comprehensive orthodontic assessments, fully customized alignment plans, and transparent pricing. We also provide interest-free monthly EMI plans to make premium orthodontic care affordable and stress-free for all patients."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental implants a permanent solution for missing teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, dental implants are considered the most durable and permanent solution for replacing missing teeth. An implant consists of a biocompatible titanium post that is surgically inserted into the jawbone, acting as a strong root replacement. Once topped with a custom ceramic or zirconia crown, it functions and looks just like a natural tooth. With excellent oral hygiene and regular checkups at Aurus Dental Studio, dental implants can last a lifetime."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a professional teeth whitening treatment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An in-office professional teeth whitening session at Aurus Dental Studio takes approximately 45 to 60 minutes. During the treatment, a professional-grade whitening gel is applied to your teeth and activated using a specialized light source, lifting deep stains and brightening your smile by up to eight shades in a single visit. It is a safe, fast, and highly effective cosmetic procedure."
          }
        },
        {
          "@type": "Question",
          "name": "Why do my gums bleed when I brush, and how is it treated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bleeding gums are typically a sign of gingivitis or early gum disease, caused by the accumulation of bacterial plaque along the gum line. If plaque is not removed, it hardens into tartar, causing inflammation and bleeding. We treat this at our Pune and Mumbai clinics through professional scaling (ultrasonic cleaning) and root planing to remove tartar and smooth root surfaces. In advanced cases, laser gum therapy or gum surgery is performed to eliminate pockets and restore gum health."
          }
        },
        {
          "@type": "Question",
          "name": "Is wisdom tooth extraction safe, and what is the recovery time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wisdom tooth removal is a very common and safe procedure when performed by an experienced dentist. Dr. Abbas Unwala utilizes advanced digital imaging to pre-map the tooth roots and nerve locations, ensuring maximum safety. Most patients recover fully within 3 to 5 days. We provide complete post-operative instructions, pain management options, and specialized care guidelines to minimize swelling and support rapid, smooth healing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency dental care in Pune and Mumbai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide emergency dental care at both Aurus Dental Studio in Pune (Rasta Peth) and Saifee Smiles in Mumbai (Mazgaon). Whether you are suffering from severe toothaches, a broken tooth, jaw trauma, or an abscessed tooth, our clinics are equipped to handle urgent cases immediately, relieving pain and preventing further complications."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I get a dental cleaning and checkup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend visiting the dentist for a professional dental cleaning, scaling, and comprehensive checkup every six months. Regular visits allow us to remove hardened tartar that normal brushing cannot reach, check for early signs of decay, gum disease, or oral issues, and treat them before they turn into complex, expensive problems."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Aurus Dental Studio different from other clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aurus Dental Studio is led directly by MDS-specialist Dr. Abbas Saifuddin Unwala, ensuring you receive advanced, expert care without being passed off to junior associates. We focus on advanced technology (laser dentistry, digital smile design), absolute transparency in pricing (no hidden costs), and a comfort-first, anxiety-free approach. We also maintain state-of-the-art clinics in both Pune and Mumbai."
          }
        }
      ]
    }
  },
  {
    path: 'contact',
    urlPath: 'contact',
    title: 'Contact Aurus Dental Studio | Book Appointment in Pune & Mumbai',
    description: 'Book your appointment with Dr. Abbas Unwala at Aurus Dental Studio in Pune (Rasta Peth) or Saifee Smiles in Mumbai (Mazgaon). View clinics map directions, phone number, and hours (open 24/7 for emergency dental care).',
    keywords: 'book dentist appointment pune, emergency dentist pune, saifee smiles mazgaon contact number, aurus dental studio pune phone number',
  }
];

// 5. Pre-render each page
for (const route of routes) {
  console.log(`Pre-rendering route: /${route.urlPath}`);
  
  // Render the react component to HTML string
  const { html } = render(route.path);
  
  // Build the route-specific head tags (metadata, OG, Twitter tags, JSON-LD schema)
  const fullUrl = `https://aurusdentalstudio.com/${route.urlPath}`;
  const defaultOgImage = 'https://aurusdentalstudio.com/assets/profile.webp';
  
  const headMeta = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    
    <!-- Open Graph / Facebook Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${defaultOgImage}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:site_name" content="Aurus Dental Studio" />
    
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${defaultOgImage}" />
    
    <!-- Canonical Tag -->
    <link rel="canonical" href="${fullUrl}" />
    
    <!-- JSON-LD Structured Data Schema -->
    ${route.schema ? `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>` : ''}
  `.trim();
  
  // Replace placeholders in the index.html template
  const pageContent = template
    .replace('<!--app-html-->', html)
    .replace('<!--app-head-->', headMeta);
    
  // 6. Write final HTML to destination directory
  if (route.urlPath === '') {
    fs.writeFileSync(templatePath, pageContent);
  } else {
    const targetDir = path.resolve(__dirname, `dist/${route.urlPath}`);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(targetDir, 'index.html'), pageContent);
  }
}

// 7. Generate redirects for Netlify
const redirectsPath = path.resolve(__dirname, 'dist/_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200\n');
console.log('Created dist/_redirects for Netlify router fallback.');

// 8. Generate robots.txt
const robotsPath = path.resolve(__dirname, 'dist/robots.txt');
const robotsContent = `
User-agent: *
Allow: /

Sitemap: https://aurusdentalstudio.com/sitemap.xml
`.trim();
fs.writeFileSync(robotsPath, robotsContent);
console.log('Created dist/robots.txt');

// 9. Generate sitemap.xml
const sitemapPath = path.resolve(__dirname, 'dist/sitemap.xml');
const todayDate = new Date().toISOString().split('T')[0];
const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aurusdentalstudio.com/</loc>
    <lastmod>${todayDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://aurusdentalstudio.com/about</loc>
    <lastmod>${todayDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aurusdentalstudio.com/services</loc>
    <lastmod>${todayDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aurusdentalstudio.com/contact</loc>
    <lastmod>${todayDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`.trim();
fs.writeFileSync(sitemapPath, sitemapContent);
console.log('Created dist/sitemap.xml');

// 10. Clean up dist-server
fs.rmSync(path.resolve(__dirname, 'dist-server'), { recursive: true, force: true });
console.log('Cleaned up server build outputs.');
console.log('Prerendering completed successfully!');
