import PageTitle from "@/components/ui/PageTitle";
import { Card, CardHeader, CardTitle, CardAction, CardContent, CardDescription } from "@/components/ui/card";
import {ArrowUpRight } from "lucide-react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge} from "@/components/ui/badge";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.services);

export default function servicesPage() {

  const WebsiteDevelopmentContent = [
    {
      title: "From Vision to Reality",
      subtitle: "Code that speaks your language.",
      text: "Every line of code we write serves your vision. We don't use WordPress, Wix, or templates. Instead, we build with Next.js—crafting websites that are lightning-fast, SEO-optimized, and completely unique. Your business deserves more than a cookie-cutter solution. It deserves a digital foundation built specifically for your goals.",
      deliverables: [
        "Custom Next.js website",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Complete source code",
        "Deployment on Vercel",
      ],
    },
    {
      title: "Performance by Design",
      subtitle: "Speed isn't optional. It's essential.",
      text: "Slow websites lose customers. We engineer every component for maximum performance—optimized images, clean code, strategic caching. The result? Websites that load instantly and rank higher on Google. Because in today's digital world, patience is a luxury your competitors can't afford to test.",
      deliverables: [
        "Image optimization",
        "Code minification",
        "Caching strategies",
        "Core Web Vitals optimization",
        "Performance monitoring setup",
        "Speed analysis reports",
      ],
    },
    {
      title: "Mobile-First Thinking",
      subtitle: "Built for the way people actually browse.",
      text: "Over 60% of web traffic comes from mobile devices. We design and develop with this reality in mind—creating responsive experiences that work flawlessly across all screen sizes. Your website will look stunning on a phone, tablet, or desktop. No compromises. No afterthoughts.",
      deliverables: [
        "Mobile-first responsive design",
        "Cross-browser compatibility",
        "Touch-optimized interfaces",
        "Flexible grid systems",
        "Device testing documentation",
      ],
    },
    {
      title: "Future-Proof Foundation",
      subtitle: "Technology that grows with you.",
      text: "We build websites that last. Using modern frameworks and clean architecture, your site can evolve as your business grows. Need new features? Want to scale? Our code is structured for expansion, not replacement. It's an investment in your digital future, not just a website for today.",
      deliverables: [
        "Scalable architecture",
        "Clean codebase",
        "Comprehensive documentation",
        "GitHub repository",
        "Update guidelines",
        "Expansion roadmap",
      ],
    },
  ];

  const BrandingContent = [
    {
      title: "Identity That Resonates",
      subtitle: "More than a logo. A lasting impression.",
      text: "Your brand is the sum of every interaction, every touchpoint, every moment someone encounters your business. We craft visual identities that don't just look distinctive—they feel authentic. From color psychology to typography choices, every element is designed to communicate your values and connect with your audience on an emotional level.",
      deliverables: [
        "Logo design variations",
        "Color palette",
        "Typography system",
        "Brand personality guide",
        "Visual mood boards",
        "Application examples",
      ],
    },
    {
      title: "Strategic Foundation",
      subtitle: "Purpose-driven design decisions.",
      text: "Great branding starts with understanding. Who are you? What do you stand for? Who are you trying to reach? We dig deep into your business values, market position, and audience needs. This strategic foundation ensures every design choice has meaning, every color has purpose, and every element supports your business goals.",
      deliverables: [
        "Brand strategy document",
        "Target audience analysis",
        "Competitive analysis",
        "Brand positioning statement",
        "Value proposition",
        "Messaging framework",
      ],
    },
    {
      title: "Cohesive Visual Language",
      subtitle: "Consistency that builds trust.",
      text: "Your brand should feel unmistakably yours across every platform, every touchpoint, every interaction. We develop comprehensive brand guidelines that ensure consistency—whether it's your website, business cards, or social media presence. Cohesive branding builds recognition. Recognition builds trust. Trust drives business.",
      deliverables: [
        "Complete brand guidelines",
        "Logo usage rules",
        "Color specifications",
        "Typography guidelines",
        "Imagery style guide",
        "Application templates",
      ],
    },
    {
      title: "Timeless, Not Trendy",
      subtitle: "Built to endure, designed to last.",
      text: "Trends come and go. Great brands endure. We create visual identities that won't look dated in five years—rooted in timeless design principles while feeling fresh and relevant today. Your brand should evolve with your business, not be replaced by it. That's the difference between design and investment.",
      deliverables: [
        "Timeless logo design",
        "Scalable brand system",
        "Evolution guidelines",
        "Brand refresh roadmap",
        "Long-term brand strategy",
        "Asset library",
      ],
    },
  ];

  const RestorationContent = [
    {
      title: "Digital Archaeology",
      subtitle: "Uncovering what made it work.",
      text: "Every website has a story—what worked, what didn't, what was lost. We analyze your existing digital presence like archaeologists, carefully studying user behavior, performance data, and content effectiveness. We preserve what serves your goals and rebuild what doesn't. Because good restoration honors the past while embracing the future.",
      deliverables: [
        "Complete website audit",
        "Performance analysis",
        "Content inventory",
        "SEO assessment",
        "User behavior analysis",
        "Restoration roadmap",
      ],
    },
    {
      title: "Performance Revival",
      subtitle: "From sluggish to lightning-fast.",
      text: "Old websites often carry technical debt—outdated code, unoptimized images, bloated plugins. We strip away the unnecessary and rebuild the foundation with modern technology. The result? Dramatically improved load times, better search rankings, and user experiences that feel fresh and responsive. It's not just a facelift—it's a complete transformation.",
      deliverables: [
        "Modern codebase rebuild",
        "Performance optimization",
        "Database cleanup",
        "Image optimization",
        "Caching implementation",
        "Speed improvement report",
      ],
    },
    {
      title: "Content Preservation",
      subtitle: "Saving what matters most.",
      text: "Your existing content represents years of work, SEO value, and brand investment. We carefully migrate and optimize your valuable content while improving its structure and presentation. Important pages maintain their search rankings. Key information is preserved and enhanced. Nothing valuable is lost in translation.",
      deliverables: [
        "Content migration",
        "SEO preservation",
        "URL structure optimization",
        "301 redirect setup",
        "Content optimization",
        "Search ranking protection",
      ],
    },
    {
      title: "Modern Foundation",
      subtitle: "Built for the next decade.",
      text: "Restoration isn't about returning to how things were—it's about creating what they should have been. We rebuild with modern frameworks, current design principles, and future-focused architecture. Your restored website doesn't just work better today—it's prepared for tomorrow's opportunities and challenges.",
      deliverables: [
        "Next.js rebuild",
        "Modern design system",
        "Responsive layout",
        "Future-ready architecture",
        "Maintenance plan",
        "Growth strategy",
      ],
    },
  ];

    const ServiceCards = [
      {
        title: "Website Development",
        subtitle: "Crafting digital experiences",
        url: "#web-dev",
        description:
          "We create stunning, user-friendly websites that not only look exceptional but drive real results for your business.",
      },
      {
        title: "Branding",
        subtitle: "Building a strong brand identity",
        url: "#branding",
        description:
          "We help you establish a strong brand identity that resonates with your target audience and sets you apart from the competition.",
      },
      {
        title: "Restoration",
        subtitle: "Reviving traditions",
        url: "#restoration",
        description:
          "We specialize in restoring and preserving traditional craftsmanship, bringing a touch of history to modern design.",
      },
    ];

    

  return (
    <main>
      <PageTitle title="Explore Our Digital Services">
        Discover our comprehensive range of services. From initial concept to
        final implementation, we accompany you with tailored solutions that
        drive your business forward and create sustainable success.
      </PageTitle>
      <section>
        <div className="container flex flex-col lg:flex-row gap-8">
          {ServiceCards.map((service) => (
            <Card key={service.title} className="flex-1 min-h-64">
              <CardHeader>
                <CardAction>
                  <Button variant="ghost" className="size-8">
                    <Link href={service.url}>
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </CardAction>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>{service.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="web-dev" className="col-span-4">
              Website Development
            </h2>
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {WebsiteDevelopmentContent.map((statement, index) => (
                <div key={index}>
                  <h3 className="mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                  <p className="muted mb-6">{statement.subtitle}</p>
                  {statement.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="branding" className="col-span-4">
              Branding
            </h2>
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {BrandingContent.map((statement, index) => (
                <div key={index}>
                  <h3 className="mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                  <p className="muted mb-6">{statement.subtitle}</p>
                  {statement.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid lg:grid-cols-12 border-t pt-8">
            <h2 id="restoration" className="col-span-4">
              Restoration
            </h2>
            <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8">
              {RestorationContent.map((statement, index) => (
                <div key={index}>
                  <h3 className="mt-0">{statement.title}</h3>
                  <p>{statement.text}</p>
                  <p className="muted mb-6">{statement.subtitle}</p>
                  {statement.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
