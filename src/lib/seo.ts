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
    defaultTitle: 'Generics Studio - Individuelle Webentwicklung & Digitale Lösungen',
    defaultDescription: 'Handgefertigte Websites, authentisches Branding und Wiederherstellungsdienste. Wir bauen mit Next.js – keine Vorlagen, keine Kompromisse. Blitzschnelle, SEO-optimierte digitale Erlebnisse.',
    defaultKeywords: [
        'responsives design',
        'individuelle webentwicklung',
        'next.js entwicklung',
        'handgemachte websites',
        'digitales branding',
        'website wiederherstellung',
        'performance optimierung',
        'individuelle websites',
        'keine vorlagen',
        'seo optimierung',
        'seo agentur schweiz',
        'suchmaschinenoptimierung zürich',
        'seo-agentur schweiz',
        'webdesigner',
        'website design zürich',
        'zürich webdesign',
        'webagentur zürich',
        'webdesign zürich',
        'webdesigner-agentur',
        'agentur webdesign',
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
        'web design schweiz',
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
        title: 'Webentwicklung & Digitale Lösungen',
        description: 'Performance-optimierte Next.js Websites ohne Vorlagen. Handgefertigte digitale Erlebnisse für echte Geschäftsergebnisse.',
        path: '',
    },
    services: {
        title: 'Services - Webentwicklung & Branding',
        description: 'Next.js-Websites, Branding-Lösungen und Website-Wiederherstellung. Maßgeschneidert für nachhaltigen Geschäftserfolg.',
        keywords: [
            'webentwicklung',
            'Next.js websites',
            'branding',
            'website wiederherstellung',
            'responsive design'
        ],
        path: 'services',
    },
    about: {
        title: 'Über Uns - Digitale Exzellenz Team',
        description: 'Das Team hinter Generics Studio. Wir verwandeln Visionen in digitale Realität mit handgefertigter Exzellenz.',
        keywords: [
            'generics studio team',
            'webentwicklung team',
            'digitalagentur',
            'handgefertigte websites'
        ],
        path: 'about',
    },
    projects: {
        title: 'Projekte & Fallstudien',
        description: 'Unsere Projekte: didischocoberrys, Thread IT, Blendis Barbershop. Erfolgsgeschichten von Herausforderung zu Lösung.',
        keywords: [
            'webentwicklung projekte',
            'fallstudien',
            'portfolio',
            'erfolgreiche websites'
        ],
        path: 'case-studies',
    },
    contact: {
        title: 'Kontakt - Projekt starten',
        description: 'Projekt starten? Kontaktieren Sie uns über unser Formular oder soziale Medien. Wir freuen uns auf Ihre Anfrage.',
        keywords: [
            'kontakt',
            'projektanfrage',
            'kundensupport'
        ],
        path: 'contact',
    },
    legal: {
        title: 'Impressum & AGB',
        description: 'Impressum, AGB und Nutzungsbedingungen von Generics Studio. Rechtliche Informationen für Kunden und Besucher.',
        keywords: [
            'impressum',
            'agb',
            'rechtliche informationen'
        ],
        path: 'imprint',
    },
    privacy: {
        title: 'Datenschutzerklärung',
        description: 'Datenschutzerklärung: Wie wir Ihre Daten sammeln, verwenden und schützen. DSGVO-konform und transparent.',
        keywords: [
            'datenschutz',
            'DSGVO',
            'datenschutzerklärung'
        ],
        path: 'privacy-policy',
    },
    branding: {
        title: 'Branding Services',
        description: 'Markenidentität entwickeln: Logo Design, Corporate Design und Branding-Strategien für Unternehmenserfolg.',
        keywords: [
            'branding',
            'logo design',
            'markenidentität',
            'corporate design'
        ],
        path: 'services/branding',
    },
    websiteentwicklung: {
        title: 'Website Entwicklung',
        description: 'Next.js, WordPress, Webflow Entwicklung. Von Landing Pages bis E-Commerce - maßgeschneiderte Web-Lösungen.',
        keywords: [
            'website entwicklung',
            'Next.js',
            'WordPress',
            'e-commerce'
        ],
        path: 'services/website-entwicklung',
    },
    analyse: {
        title: 'Website Analyse',
        description: 'Website-Analyse: Technische Prüfung, UX-Bewertung, SEO-Audit und Conversion-Optimierung für bessere Performance.',
        keywords: [
            'website analyse',
            'SEO audit',
            'performance optimierung',
            'UX analyse'
        ],
        path: 'services/analyse',
    },
};