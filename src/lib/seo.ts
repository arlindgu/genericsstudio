// lib/seo.ts - Zentrale SEO Konfiguration mit Validierung
import type { Metadata } from 'next';

const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://generics.studio/'
    : 'http://localhost:3000';
const siteName = 'Generics Studio';

// ✅ MAX LENGTH KONSTANTEN
const SEO_LIMITS = {
    TITLE: 60,
    DESCRIPTION: 160,
    KEYWORD: 50
} as const;

// ✅ VALIDIERUNGS-FUNKTIONEN
const validateLength = (text: string, maxLength: number, fieldName: string): string => {
    if (text.length > maxLength) {
        if (process.env.NODE_ENV === 'development') {
            console.warn(`⚠️  ${fieldName} ist zu lang: ${text.length}/${maxLength} Zeichen`);
            console.warn(`Text: "${text}"`);
        }
        // In Production: Automatisch kürzen
        return text.substring(0, maxLength - 3) + '...';
    }
    return text;
};

const validateSeoConfig = (config: any, configName: string) => {
    const errors: string[] = [];

    if (config.title && config.title.length > SEO_LIMITS.TITLE) {
        errors.push(`${configName}.title: ${config.title.length}/${SEO_LIMITS.TITLE} Zeichen`);
    }

    if (config.description && config.description.length > SEO_LIMITS.DESCRIPTION) {
        errors.push(`${configName}.description: ${config.description.length}/${SEO_LIMITS.DESCRIPTION} Zeichen`);
    }

    if (config.keywords) {
        config.keywords.forEach((keyword: string, index: number) => {
            if (keyword.length > SEO_LIMITS.KEYWORD) {
                errors.push(`${configName}.keywords[${index}]: "${keyword}" (${keyword.length}/${SEO_LIMITS.KEYWORD} Zeichen)`);
            }
        });
    }

    return errors;
};

// ✅ SICHERE TRUNCATE FUNKTION
const safeTruncate = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;

    // Versuche bei einem Leerzeichen zu trennen
    const truncated = text.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > maxLength * 0.8) { // Nur wenn mindestens 80% der Länge erreicht
        return truncated.substring(0, lastSpace) + '...';
    }

    return truncated + '...';
};

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

// ✅ ERWEITERTE GENERATESEO FUNKTION MIT VALIDIERUNG
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
    // ✅ VALIDIERUNG UND AUTOMATISCHE KÜRZUNG
    const safeTitle = title ? safeTruncate(title, SEO_LIMITS.TITLE - siteName.length - 3) : '';
    const fullTitle = safeTitle
        ? `${safeTitle} | ${siteName}`
        : baseSEO.defaultTitle;

    const safeDescription = safeTruncate(description || baseSEO.defaultDescription, SEO_LIMITS.DESCRIPTION);
    const safeKeywords = keywords.map(keyword => safeTruncate(keyword, SEO_LIMITS.KEYWORD));
    const fullKeywords = [...baseSEO.defaultKeywords, ...safeKeywords];
    const fullUrl = `${baseSEO.baseUrl}${path}`;

    // ✅ DEVELOPMENT WARNINGS
    if (process.env.NODE_ENV === 'development') {
        if (title && title.length > SEO_LIMITS.TITLE - siteName.length - 3) {
            console.warn(`⚠️  Titel zu lang für "${path}": ${title.length} Zeichen`);
        }
        if (description && description.length > SEO_LIMITS.DESCRIPTION) {
            console.warn(`⚠️  Beschreibung zu lang für "${path}": ${description.length} Zeichen`);
        }
    }

    return {
        metadataBase: new URL(baseSEO.baseUrl),
        title: fullTitle,
        description: safeDescription,
        keywords: fullKeywords,
        authors: [{ name: siteName }],
        creator: siteName,
        openGraph: {
            type: 'website',
            locale: 'de_DE', // ✅ Geändert zu Deutsch
            url: fullUrl,
            siteName,
            title: fullTitle,
            description: safeDescription,
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

// ✅ OPTIMIERTE SEO CONFIG (Gekürzte Versionen)
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

// ✅ VALIDIERUNG BEIM LADEN (Development)
if (process.env.NODE_ENV === 'development') {
    const allErrors: string[] = [];

    Object.entries(seoConfig).forEach(([key, config]) => {
        const errors = validateSeoConfig(config, key);
        allErrors.push(...errors);
    });

    if (allErrors.length > 0) {
        console.error('🚨 SEO CONFIG FEHLER:');
        allErrors.forEach(error => console.error(`  • ${error}`));
        console.log('\n📏 Limits: Titel=' + SEO_LIMITS.TITLE + ', Beschreibung=' + SEO_LIMITS.DESCRIPTION + ', Keywords=' + SEO_LIMITS.KEYWORD);
    } else {
        console.log('✅ SEO Config ist valide!');
    }
}

// ✅ EXPORT DER LIMITS FÜR ANDERE DATEIEN
export { SEO_LIMITS };