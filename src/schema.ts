// Schema.org structured data for local SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://drabbasunwala.com/#dentist-pune",
      "name": "Aurus Dental Studio - Dr. Abbas Unwala",
      "image": "https://drabbasunwala.com/assets/logo.webp",
      "url": "https://drabbasunwala.com",
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
      }
    },
    {
      "@type": "Dentist",
      "@id": "https://drabbasunwala.com/#dentist-mumbai",
      "name": "Saifee Smiles Multispeciality Dental Clinic",
      "image": "https://drabbasunwala.com/assets/logo.webp",
      "url": "https://drabbasunwala.com",
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
      }
    }
  ]
};
