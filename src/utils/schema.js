// JSON-LD Schema Markup Utilities for SEO

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Burhani Technologies",
  url: "https://burhanitechnologies.com",
  logo: "https://burhanitechnologies.com/BT-Logo.svg",
  description:
    "Leading software development company with 14+ years of expertise specializing in Custom ERP Implementation, AI/ML Automation, Microsoft Power Platform, DevOps/Azure, and Business Process Automation services. Serving healthcare, manufacturing, automotive, and construction industries globally.",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-72990-02152",
    contactType: "Customer Service",
    availableLanguage: ["English"],
    areaServed: ["IN", "US", "AE", "AU"],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    {
      "@type": "Country",
      name: "Australia",
    },
  ],
  knowsAbout: [
    "Custom Software Development",
    "ERP Implementation",
    "Business Process Automation",
    "AI/ML Automation",
    "Microsoft Power Platform",
    "DevOps",
    "Azure Cloud Services",
    "RPA Solutions",
    "UX/UI Design",
  ],
  sameAs: [
    // Add social media URLs here when available
    // "https://www.facebook.com/burhanitechnologies",
    // "https://www.linkedin.com/company/burhanitechnologies",
    // "https://twitter.com/burhanitechnologies"
  ],
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Burhani Technologies",
  url: "https://burhanitechnologies.com",
  description:
    "Custom software development and business automation services",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://burhanitechnologies.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Burhani Technologies",
  image: "https://burhanitechnologies.com/BT-Logo.svg",
  "@id": "https://burhanitechnologies.com",
  url: "https://burhanitechnologies.com",
  telephone: "+91-72990-02152",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    // Add actual coordinates if available
    latitude: 13.0827,
    longitude: 80.2707,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

// Service Schema Generator
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "Burhani Technologies",
      url: "https://burhanitechnologies.com",
    },
    description: service.description || service.title,
    url: `https://burhanitechnologies.com/services/${service.slug}`,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://burhanitechnologies.com/services/${service.slug}`,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+91-72990-02152",
        contactType: "Customer Service",
      },
    },
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// FAQ Schema Generator
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Article/Blog Schema Generator
export function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: "Burhani Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Burhani Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://burhanitechnologies.com/BT-Logo.svg",
      },
    },
  };
}

// Testimonial/Review Schema Generator
export function generateReviewSchema(review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Burhani Technologies",
    },
    author: {
      "@type": "Person",
      name: review.authorName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
    },
    reviewBody: review.text,
    datePublished: review.date,
  };
}

// Offer/Pricing Schema Generator
export function generateOfferSchema(offer) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offer.name,
    description: offer.description,
    price: offer.price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Burhani Technologies",
    },
    url: offer.url,
  };
}

// How-To Schema Generator (for service process explanation)
export function generateHowToSchema(howTo) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// Software Application Schema (for products/tools)
export function generateSoftwareSchema(software) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: software.name,
    description: software.description,
    applicationCategory: software.category,
    operatingSystem: software.operatingSystem,
    offers: {
      "@type": "Offer",
      price: software.price,
      priceCurrency: "INR",
    },
    aggregateRating: software.rating && {
      "@type": "AggregateRating",
      ratingValue: software.rating,
      reviewCount: software.reviewCount,
    },
  };
}
