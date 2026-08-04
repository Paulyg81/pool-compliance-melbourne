import {
  SITE_NAME,
  SITE_URL,
  OPERATOR_NAME,
  PHONE_NUMBER_TEL,
  PRICE,
  SUBURBS,
} from "../config";
import type { Service } from "../config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: OPERATOR_NAME,
    url: SITE_URL,
    telephone: `+61${PHONE_NUMBER_TEL.replace(/^0/, "")}`,
    priceRange: PRICE,
    address: {
      "@type": "PostalAddress",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: SUBURBS.map((s) => ({ "@type": "City", name: s.name })),
    description:
      "Booking service for BPC-registered pool and spa barrier compliance inspections across Melbourne. Form 23 Certificate of Barrier Compliance issued on pass.",
  };
}

export function serviceSchema(service: Service, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: `+61${PHONE_NUMBER_TEL.replace(/^0/, "")}`,
    },
    areaServed: {
      "@type": "State",
      name: "Victoria",
    },
    offers: {
      "@type": "Offer",
      price: "240",
      priceCurrency: "AUD",
    },
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified?: Date;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished.toISOString(),
    dateModified: (opts.dateModified ?? opts.datePublished).toISOString(),
    author: { "@type": "Organization", name: OPERATOR_NAME },
    publisher: { "@type": "Organization", name: OPERATOR_NAME },
    mainEntityOfPage: opts.url,
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
