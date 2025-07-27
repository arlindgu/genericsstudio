"use client"
import { JSX } from "react";
import Tag from "@/components/tag";
import { motion } from 'framer-motion'
import PageTitle from "@/components/ui/PageTitle";

export default function CaseStudiesPage() {

  type CaseStudiesPageProps = {
    title: string;
    description: JSX.Element | string;
    url: string;
    tags: string[];
  };

  const caseStudies: CaseStudiesPageProps[] = [
    {
      title: "didischocoberrys",
      description: "For didischocoberrys, we developed a custom landing page focused on consistent branding, user-friendly UI/UX design, and a clear structure to increase conversions. A responsive contact form and targeted SEO optimizations were integrated to improve visibility on Google.",
      url: "https://didis.arlind.io/",
      tags: ["Web Design", "Landing Page", "UI/UX", "SEO", "Branding", "Contact Form"]
    },
  ];


  return (
    <main className="m-8">
      <section className="mb-16">
        <PageTitle title="Case Studies">Explore our recent projects and see how we helped our clients achieve their goals.</PageTitle>
      </section>

      <div className="w-full flex flex-col gap-4 justify-center items-center">

        {caseStudies.map(({ title, description, url, tags }, i) => (

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 + i * 0.1 }}
            key={url} className="border p-4 bg-background shadow-md max-w-5xl">
            <div className="flex flex-col justify-between items-start">
              <a href={url} className="uppercase font-body text-2xl font-bold hover:underline order-2 ">
                {title}
              </a>


            </div>
            <p className="text-sm text-licoric-950 mb-2">
              {description}
            </p>
            <div>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
            </div>
          </motion.div>
        ))}
        </div>
    </main>

  );
}