"use client"

import PageTitle from "@/components/ui/PageTitle";
import Link from "next/link";
import Image from "next/image";

export default function servicesPage() {

    const ServiceCards = [
      {
        title: "Website Design",
        subtitle: "Crafting digital experiences.",
        href: "/services/website-design",
        imageSrc: "/services_image_1.png",
      },
      {
        title: "Branding",
        subtitle: "Building a strong brand identity.",
        href: "/services/branding",
        imageSrc: "/services_image_2.png",
      },
      {
        title: "Restauration",
        subtitle: "Reviving traditions.",
        href: "/services/restauration",
        imageSrc: "/services_image_3.png",
      },
    ];

  return (
    <main className="p-4">
      <PageTitle title="Explore Services.">
        {" "}
        Quality. Commitment. Results.
      </PageTitle>
      <section className="h-dvh flex flex-col space-x-4 lg:flex-row">
        {ServiceCards.map((service, index) => (
            <Link
                key={index}
                href={service.href}
                className="relative h-1/3 w-full lg:h-full flex items-center justify-center"
            >
                <Image
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover absolute"
                    fill
                    priority
                />
                <h2 className="absolute mix-blend-difference text-background">{service.title}</h2>
                <p className="absolute mt-18 mix-blend-difference text-background">{service.subtitle}</p>
                <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-5 transition" />
            </Link>
        ))}
      </section>
    </main>
  );
}
