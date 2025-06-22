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
];


  return (
    <main className="flex flex-col items-center justify-center">
          <div 

          className="flex flex-col h-fit gap-4 justify-center">
            <div className="flex flex-col items-center justify-center mb-8">
              <h1>Case Studies</h1>
              <p>Explore our diverse range of projects that showcase our expertise and creativity.</p>
            </div>
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