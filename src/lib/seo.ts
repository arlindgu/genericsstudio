// lib/seo.ts - Zentrale SEO Konfiguration
import type { Metadata } from 'next';

const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://generics.studio/'
    : 'http://localhost:3000';
const siteName = 'Generics Studio';

// Base SEO Konfiguration
const baseSEO = {
    siteName,
    baseUrl,
    defaultTitle: 'Generics Studio - Custom Web Development & Digital Solutions',
    defaultDescription: 'Handcrafted websites, authentic branding, and restoration services. We build with Next.js - no templates, no compromises. Lightning-fast, SEO-optimized digital experiences.',
    defaultKeywords: [
        'responsive design',
        'custom web development',
        'next.js development',
        'handmade websites',
        'digital branding',
        'website restoration',
        'performance optimization',
        'custom websites',
        'no templates',
        'seo optimization',
        'seo agentur schweiz',
        'suchmaschinenoptimierung zürich',
        'seo-agentur schweiz',
        'web designers',
        'website design zürich',
        'zürich webdesign',
        'web agency zurich',
        'webdesign zurich',
        'webdesigner-agentur',
        'agence webdesign',
        'web design zürich',
        'website design zurich',
        'webdesign agentur zürich',
        'website erstellen lassen zürich',
        'webdesign zürich',
        'webentwicklung agentur',
        'webdesign',
        'webdesign agentur',
        'web design',
        'webdesigner zürich',
        'agentur für webdesign',
        'website agentur',
        'webdesign firma',
        'web designer schweiz',
        'web design switzerland',
        'webentwicklung agenturen',
        'webdesign uster',
        'webentwickler zürich',
        'web design schweiz',
        'website erstellen zürich',
        'webdesigner schweiz',
        'webentwickler agentur',
        'webentwicklung zürich',
        'webdesign agentur schweiz',
        'professionelles webdesign',
        'web designer',
        'webdesign schweiz',
        'webdesigner',
        'agentur webentwicklung'
    ],
    instagramHandle: "@generics.studio"
};

export function generateSEO({
    title,
    description,
    keywords = [],
    path = '',
    image = '/opengraph-image.png',
    noIndex = false,
}: {
    title?: string;
    description?: string;
    keywords?: string[];
    path?: string;
    image?: string;
    noIndex?: boolean;
}): Metadata {
    const fullTitle = title
        ? `${title} | ${siteName}`
        : baseSEO.defaultTitle;

    const fullDescription = description || baseSEO.defaultDescription;
    const fullKeywords = [...baseSEO.defaultKeywords, ...keywords];
    const fullUrl = `${baseSEO.baseUrl}${path}`;

    return {
        metadataBase: new URL(baseSEO.baseUrl), // ✅ Das war das fehlende Stück!
        title: fullTitle,
        description: fullDescription,
        keywords: fullKeywords,
        authors: [{ name: siteName }],
        creator: siteName,
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: fullUrl,
            siteName,
            title: fullTitle,
            description: fullDescription,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: fullUrl,
        },
    };
}

// Spezifische Seiten-Konfigurationen
export const seoConfig = {
    home: {
        title: 'Individuelle Webentwicklung & Digitale Lösungen',
        description: 'Wir entwickeln beeindruckende, performance-optimierte Websites mit Next.js. Keine Vorlagen, keine Abkürzungen - nur handgefertigte digitale Erlebnisse, die echte Geschäftsergebnisse erzielen.',
        path: '',
    },
    services: {
        title: 'Dienstleistungen - Webentwicklung & Branding',
        description: 'Entdecken Sie unsere Dienstleistungen: Individuelle Next.js-Websites, authentische Branding-Lösungen und professionelle Website-Wiederherstellung. Maßgeschneidert für nachhaltigen Geschäftserfolg.',
        keywords: [
            'webentwicklung dienstleistungen',
            'Next.js websites',
            'individuelles branding',
            'website wiederherstellung',
            'responsive design',
            'mobile-first design'
        ],
        path: 'services',
    },
    about: {
        title: 'Über Uns - Lernen Sie Unser Team Für Digitale Exzellenz Kennen',
        description: 'Lernen Sie das leidenschaftliche Team hinter Generics Studio kennen. Wir verwandeln Visionen in digitale Realität mit handgefertigter Exzellenz und performance-fokussierten Lösungen.',
        keywords: [
            'über generics studio',
            'webentwicklung team',
            'digitalagentur',
            'handgefertigte websites',
            'individuelles entwicklungsteam',
            'authentische digitale identität',
            'performance trifft zweck'
        ],
        path: 'about',
    },
    projects: {
        title: 'Projekte - Digitale Lösungen & Fallstudien',
        description: 'Erkunden Sie unsere abgeschlossenen Projekte wie didischocoberrys, Thread IT und Blendis Barbershop. Jedes erzählt eine Geschichte von Herausforderungen und Lösungen.',
        keywords: [
            'webentwicklung projekte',
            'fallstudien',
            'kundenarbeit',
            'projekt portfolio',
            'didischocoberrys',
            'Thread IT',
            'Blendis Barbershop',
            'erfolgreiche websites',
            'kundenbewertungen'
        ],
        path: 'case-studies',
    },
    contact: {
        title: 'Kontakt - Nehmen Sie Kontakt Auf',
        description: 'Haben Sie eine Frage oder möchten ein Projekt starten? Kontaktieren Sie uns über unser Kontaktformular oder verbinden Sie sich mit uns in den sozialen Medien.',
        keywords: [
            'kontakt generics studio',
            'kontakt aufnehmen',
            'projektanfrage',
            'kundensupport'
        ],
        path: 'contact',
    },
    legal: {
        title: 'Impressum & Allgemeine Geschäftsbedingungen',
        description: 'Lesen Sie unser Impressum, unsere Allgemeinen Geschäftsbedingungen und Nutzungsbedingungen für Generics Studio Dienstleistungen. Wichtige rechtliche Informationen für unsere Kunden und Website-Besucher.',
        keywords: [
            'impressum generics studio',
            'allgemeine geschäftsbedingungen',
            'nutzungsbedingungen',
            'rechtliche informationen',
            'website bedingungen',
            'dienstleistungsvertrag'
        ],
        path: 'imprint',
    },

    privacy: {
        title: 'Datenschutzerklärung - Wie Wir Mit Ihren Daten Umgehen',
        description: 'Erfahren Sie, wie Generics Studio Ihre persönlichen Daten sammelt, verwendet und schützt. Unsere umfassende Datenschutzerklärung erklärt Ihre Rechte und unsere Verpflichtungen.',
        keywords: [
            'datenschutzerklärung generics studio',
            'datenschutz',
            'persönliche daten',
            'DSGVO compliance',
            'datenschutz',
            'cookie richtlinie',
            'nutzerdatenrechte'
        ],
        path: 'privacy-policy',
    },
    branding: {
        title: 'Branding Services - Professionelle Markenentwicklung',
        description: 'Entwickeln Sie eine starke Markenidentität: Logo Design, Brand Identity, Corporate Design und umfassende Branding-Strategien für nachhaltigen Unternehmenserfolg.',
        keywords: [
            'branding services',
            'logo design',
            'markenidentität',
            'corporate design',
            'markenentwicklung',
            'visuelle identität'
        ],
        path: 'services/branding',
    },
    websiteentwicklung: {
        title: 'Website Entwicklung - Professionelle Webentwicklung',
        description: 'Moderne Website-Entwicklung mit Next.js, WordPress und Webflow. Von Landing Pages bis E-Commerce - maßgeschneiderte Web-Lösungen für Ihren Erfolg.',
        keywords: [
            'website entwicklung',
            'webentwicklung',
            'Next.js entwicklung',
            'WordPress websites',
            'responsive webdesign',
            'e-commerce entwicklung'
        ],
        path: 'services/website-entwicklung',
    },
    analyse: {
        title: 'Website Analyse - Professionelle Website-Optimierung',
        description: 'Umfassende Website-Analyse: Technische Prüfung, UX-Bewertung, SEO-Audit und Conversion-Optimierung für bessere Performance und mehr Erfolg.',
        keywords: [
            'website analyse',
            'website audit',
            'SEO analyse',
            'performance optimierung',
            'conversion optimierung',
            'UX analyse'
        ],
        path: 'services/analyse',
    },
};