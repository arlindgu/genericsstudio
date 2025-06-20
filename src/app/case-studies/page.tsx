"use client"
import { JSX } from "react";
import Tag from "@/components/tag";
import { motion } from 'framer-motion'

export default function CaseStudiesPage() {

  type CaseStudiesPageProps = {
    title: string;
    description: JSX.Element | string;
    url: string;
    tags: string[];
  };

  const caseStudies: CaseStudiesPageProps[] = [
  {
    title: "ES-SELAM MOSQUE",
    description: "Development of a modern website using Next.js and TailwindCSS, designed for seamless integration with a content management system (CMS) and database. The setup is prepared for additional features such as prayer times management, dynamic content handling, and future scalability.",
    url: "/case-studies/es-selam-mosque",
    tags: ["web design", "development", "UI/UX", "open source"]
  },
  {
    title: "Project Beta",
    description: "Rebranding and SEO optimization for a local bakery chain, including new visual identity, keyword research, and implementation of schema markup for better Google indexing.",
    url: "/case-studies/project-beta",
    tags: ["branding", "marketing", "SEO"]
  },
  {
    title: "Project Gamma",
    description: "Creation of a scalable e-commerce platform using Shopify and custom React components. Integrated Stripe and PayPal for international payments and set up inventory tracking.",
    url: "/case-studies/project-gamma",
    tags: ["e-commerce", "web development"]
  },
  {
    title: "FinTech Dashboard",
    description: "Design and implementation of a data-heavy financial dashboard using React, Recharts, and Zustand. Features real-time updates, user authentication, and role-based permissions.",
    url: "/case-studies/fintech-dashboard",
    tags: ["finance", "data visualization", "frontend"]
  },
  {
    title: "University CMS",
    description: "Built a CMS for a university department using Sanity and Next.js. Enabled non-technical staff to manage events, faculty profiles, and research publications with ease.",
    url: "/case-studies/university-cms",
    tags: ["education", "CMS", "sanity"]
  },
  {
    title: "Smart Home Interface",
    description: "Developed a UI for controlling smart home devices using MQTT and WebSockets. The app syncs with local devices and cloud services in real time with minimal latency.",
    url: "/case-studies/smart-home-ui",
    tags: ["IoT", "real-time", "UI/UX"]
  },
  {
    title: "NGO Donation Portal",
    description: "Created a multilingual donation portal for an international NGO with Stripe integration, analytics, and GDPR-compliant user data handling.",
    url: "/case-studies/ngo-donations",
    tags: ["nonprofit", "payment", "GDPR"]
  },
  {
    title: "Job Matching Platform",
    description: "Built a platform that matches freelancers with remote projects using AI-assisted filters, email alerts, and a minimal application process.",
    url: "/case-studies/job-matching",
    tags: ["AI", "jobs", "platform"]
  },
  {
    title: "Restaurant Ordering System",
    description: "Developed a self-service ordering web app for a restaurant chain. Included QR-code menus, order tracking, and kitchen printer integration.",
    url: "/case-studies/restaurant-orders",
    tags: ["restaurants", "PWA", "UX"]
  },
  {
    title: "Event Ticketing System",
    description: "Built a ticketing solution with QR-code generation, seat reservations, and email confirmations. Admin dashboard built with Next.js and Prisma.",
    url: "/case-studies/event-ticketing",
    tags: ["events", "ticketing", "backend"]
  },
  {
    title: "Personal Finance Tracker",
    description: "Mobile-first budgeting and finance app using React Native and Firebase. Includes recurring expenses, spending categories, and offline sync.",
    url: "/case-studies/finance-tracker",
    tags: ["mobile", "firebase", "UX"]
  }
];


  return (
    <main className="flex-1 flex items-center justify-center">
          <div 

          className="flex flex-col h-fit gap-4 justify-center">
      {caseStudies.map(({ title, description, url, tags }, i) => (
        <motion.div  
        animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 * i }}
          key={url} className="border p-4 max-w-4xl bg-back">
          <div className="flex flex-row justify-between items-center">
          <a href={url} className="uppercase text-2xl font-semibold hover:underline">
            {title}
          </a>
          <div>
                                  {tags.map((tag) => (
              <Tag key={tag} tag={tag}/>
            ))}
            </div>

          </div>
          <p className="text-sm text-gray-400">
          {description}
          </p>
        </motion.div>
      ))}
    </div>
    </main>

  );
}