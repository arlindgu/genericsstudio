"use client"

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import PageTitle from "@/components/ui/PageTitle";
import Image from 'next/image';
import {
  Zap,
  Eye,
  Leaf,
  Settings,
  ShoppingBag,
  Folder,
  Upload,
  Handshake,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger  } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const faqData = [
  {
    id: 1,
    question: "What makes Generics Studio different from other web agencies?",
    answer:
      "We create completely handmade websites from scratch - no templates, no WordPress, no Wix. Every website is individually designed in Figma and custom-coded in Next.js for optimal performance and uniqueness.\n\nThis approach means you get a truly one-of-a-kind digital presence that perfectly reflects your brand identity. While templates might be faster, our custom solutions ensure your website stands out from the competition and delivers exceptional user experiences that convert visitors into customers.",
  },
  {
    id: 2,
    question: "How long does it take to complete a website project?",
    answer:
      "Project timelines vary depending on complexity and scope. A typical landing page takes 2-4 weeks, while comprehensive company websites can take 6-12 weeks from initial consultation to launch.\n\nWe believe in quality over speed, ensuring every detail is perfect before going live. During our initial consultation, we'll provide you with a detailed timeline and milestone schedule, so you always know exactly where your project stands and when to expect delivery.",
  },
  {
    id: 3,
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes! We offer comprehensive monthly maintenance contracts that include automatic GitHub backups, small updates, technical support, and performance monitoring. This ensures your website stays secure, fast, and up-to-date.\n\nAlternatively, you can choose our project-only delivery option with complete source code handover. This gives you full ownership and the flexibility to manage your website independently or work with other developers in the future.",
  },
  {
    id: 4,
    question: "What technologies do you use?",
    answer:
      "We use cutting-edge technologies: Figma for design, Next.js for development, Vercel for hosting, and GitHub for version control. This modern tech stack ensures lightning-fast loading times, excellent SEO performance, and seamless scalability.\n\nNext.js is particularly powerful for business websites as it combines the best of static and dynamic content, resulting in superior performance and search engine rankings. Our technology choices are always made with your long-term success in mind.",
  },
  {
    id: 5,
    question: "Can you help with SEO and content strategy?",
    answer:
      "Absolutely! We provide both technical SEO optimization and content strategy consulting to maximize your online visibility. Our Next.js websites are built with SEO best practices from the ground up, ensuring excellent search engine performance.\n\nWe also offer ongoing content support and strategy development to help you attract and engage your target audience. From keyword research to content creation guidance, we help you build a strong digital presence that drives real business results.",
  },
  {
    id: 6,
    question: "Do you work with clients outside of Switzerland?",
    answer:
      "While we're proudly based in Wil SG, Switzerland, we work with clients throughout all of Switzerland - from Deutschschweiz to Romandie and Tessin. Our digital-first approach makes location no barrier to exceptional collaboration.\n\nWe're also open to international projects based on project requirements and feasibility. Thanks to modern communication tools and our streamlined processes, we can deliver the same high-quality service regardless of geographical boundaries.",
  },
  {
    id: 7,
    question: "What's included in your pricing?",
    answer:
      "We offer transparent fixed pricing for our standard services and competitive hourly rates for special requirements. All projects include unlimited revision rounds during development, ensuring your complete satisfaction with the final result.\n\nOur flexible pricing structure accommodates different budgets - from startup-friendly packages to premium enterprise solutions. We believe in clear, upfront pricing with no hidden costs, so you always know exactly what you're investing in your digital presence.",
  },
  {
    id: 8,
    question: "Can I get the source code of my website?",
    answer:
      "Yes! We offer complete source code handover with our project delivery option. You'll receive full ownership of your website's code, documentation, and all assets, giving you complete control over your digital property.\n\nThis means you can modify your website independently, work with other developers, or even use it as a foundation for future projects. We believe in empowering our clients with true ownership of their digital investments.",
  },
];

const services = [
  {
    id: 1,
    title: "Custom Webdesign.",
    description:
      "Truly unique designs crafted from scratch in Figma. UI/UX fully tailored to your brand, always mobile-first and perfectly responsive. No templates, no shortcuts.",
    image: "/services_assets/woman_1.png",
  },
  {
    id: 2,
    title: "Web Development.",
    description:
      "Hand-coded websites and web apps with Next.js for peak performance. Every line optimized for speed and scalability. Built from the ground up, not with page builders.",
    image: "/services_assets/woman_2.png",
  },
  {
    id: 2,
    title: "SEO Optimization.",
    description:
      "Technical SEO setup, content consulting, and ongoing optimizations to keep you ranking. Fast-loading sites, great structure, and content that search engines love.",
    image: "/services_assets/woman_3.png",
  },
];

const ServiceIcons = [
  {
    id: 1,
    title: "Content Service.",
    icon: <Zap />,
  },
  {
    id: 2,
    title: "Consulting.",
    icon: <Eye />,
  },
  {
    id: 3,
    title: "Content Optimization.",
    icon: <Leaf />,
  },
  {
    id: 4,
    title: "Support.",
    icon: <Settings />,
  },
  {
    id: 5,
    title: "Project Pages.",
    icon: <ShoppingBag />,
  },
  {
    id: 6,
    title: "Company Websites.",
    icon: <Folder />,
  },
  {
    id: 7,
    title: "Web Relaunches.",
    icon: <Upload />,
  },
  {
    id: 8,
    title: "Maintenance.",
    icon: <Handshake />,
  },
];

export default function Page() {
  return (
    <div className="mb-24 p-4">
      <PageTitle title="Explore Services.">
        {" "}
        Quality. Commitment. Results.
      </PageTitle>
      <section className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto">
        {services.slice(0, 3).map((service) => (
          <Card key={service.id} className="lg:max-w-1/3 h-fit">
            <Image
              alt={service.title}
              width={500}
              height={500}
              src={service.image}
              className="px-6"
            />
            <CardHeader>
              <CardTitle>
                <h3>{service.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>{service.description}</CardContent>
          </Card>
        ))}
      </section>
      <section className="max-w-7xl mx-auto mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {ServiceIcons.map((service) => (
          <div key={service.id} className="flex flex-col items-center mb-8">
            <span className="text-background rounded-full size-16 bg-foreground flex items-center justify-center">
              {service.icon}
            </span>
            <span className="mt-2 text-center">{service.title}</span>
          </div>
        ))}
      </section>
      <section className="max-w-7xl mx-auto mt-32 flex flex-col gap-8 items-center">
        <h3 className="text-center">Service Models & Tech Stack</h3>
        <p className="w-3xl">
          Full Service: End-to-end solution—design, development, launch, and
          ongoing care. Alternatively, we deliver single projects (including
          source code) or offer monthly maintenance contracts tailored to your
          needs.
        </p>
        <p className="w-3xl">
          Technology: Modern tools for modern outcomes—Figma for design, Next.js
          for development, Vercel for hosting, and GitHub powering version
          control and backups.
        </p>
      </section>
      <section className="max-w-3xl mx-auto mt-32">
        <h3 className="text-center">Frequently Asked Questions</h3>
        <p className="w-3xl">
          Have questions? We have answers. Check out our FAQ section for
          information on common inquiries.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center mx-auto py-32 mt-32">
          <h1 className="text-xl lg:text-4xl font-bold text-center mb-4">
            Request a project.
          </h1>
          <p className="text-lg text-center mb-8 max-w-xl">
            Let&apos;s discuss your plans.
          </p>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
