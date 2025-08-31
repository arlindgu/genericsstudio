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
        'custom web development',
        'Next.js development',
        'handmade websites',
        'digital branding',
        'website restoration',
        'SEO optimization',
        'performance optimization',
        'responsive design',
        'custom websites',
        'no templates'
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
        title: 'Custom Web Development & Digital Solutions',
        description: 'We craft stunning, performance-optimized websites with Next.js. No templates, no shortcuts - just handmade digital experiences that drive real business results.',
        path: '',
    },
    services: {
        title: 'Our Services - Web Development, Branding & Restoration',
        description: 'Discover our comprehensive services: Custom Next.js websites, authentic branding solutions, and expert website restoration. Tailored solutions for sustainable business success.',
        keywords: [
            'web development services',
            'Next.js websites',
            'custom branding',
            'website restoration',
            'responsive design',
            'mobile-first design'
        ],
        path: '/services',
    },
    about: {
        title: 'About Studio - Meet the Team Behind Digital Excellence',
        description: 'Meet the passionate team behind Generics Studio. We transform visions into digital reality with handmade excellence, authentic design, and performance-focused solutions.',
        keywords: [
            'about generics studio',
            'web development team',
            'digital agency',
            'handmade websites',
            'custom development team',
            'authentic digital identity',
            'performance meets purpose'
        ],
        path: '/about',
    },
    projects: {
        title: 'Our Projects - Successful Digital Solutions & Case Studies',
        description: 'Explore our successfully completed projects including didischocoberrys, Thread IT, and Blendis Barbershop. Each tells a unique story of challenges, solutions, and satisfied clients.',
        keywords: [
            'web development projects',
            'case studies',
            'client work',
            'project portfolio',
            'didischocoberrys',
            'Thread IT',
            'Blendis Barbershop',
            'successful websites',
            'client testimonials'
        ],
        path: '/projects',
    },
    contact: {
        title: 'Contact Us - Get in Touch',
        description: 'Have a question or want to start a project? Reach out to us through our contact form or connect with us on social media.',
        keywords: [
            'contact generics studio',
            'get in touch',
            'project inquiry',
            'customer support'
        ],
        path: '/contact',
    },
    legal: {
        title: 'Legal Notice & Terms of Service',
        description: 'Read our legal notice, terms of service, and conditions for using Generics Studio services. Important legal information for our clients and website visitors.',
        keywords: [
            'legal notice generics studio',
            'terms of service',
            'terms and conditions',
            'legal information',
            'website terms',
            'service agreement'
        ],
        path: '/legal',
    },

    privacy: {
        title: 'Privacy Policy - How We Handle Your Data',
        description: 'Learn how Generics Studio collects, uses, and protects your personal data. Our comprehensive privacy policy explains your rights and our commitments.',
        keywords: [
            'privacy policy generics studio',
            'data protection',
            'personal data',
            'GDPR compliance',
            'data privacy',
            'cookie policy',
            'user data rights'
        ],
        path: '/privacy',
    },
};