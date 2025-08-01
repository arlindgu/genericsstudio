"use client"

import Image from "next/image";
import PageTitle from "@/components/ui/PageTitle";

const services = [
  {
    id: 1,
    title: "Handmade",
    description: "We create custom websites tailored to your specific needs and goals.",
    image: "/services_assets/woman_1.png",
    gridClass: "col-span-2",
    objectPosition: "object-top"
  },
  {
    id: 2,
    title: "Web Design",
    description: "We create beautiful and functional websites that engage your audience.",
    image: "/services_assets/woman_5.png",
    gridClass: "col-span-3 row-span-3 col-start-2 row-start-2",
    objectPosition: "object-center"
  },
  {
    id: 3,
    title: "E-Mail Templates",
    description: "We design custom email templates that enhance your communication with clients.",
    image: "/services_assets/woman_2.png",
    gridClass: "col-span-2 col-start-4 row-start-1",
    objectPosition: "object-center"
  },
  {
    id: 4,
    title: "Overhaul",
    description: "We restore and modernize existing websites to improve performance and user experience.",
    image: "/services_assets/woman_3.png",
    gridClass: "row-span-4 col-start-5 row-start-2",
    objectPosition: "object-center"
  },
  {
    id: 5,
    title: "Freedom",
    description: "We manage your website so you can focus on what you do best.",
    image: "/services_assets/woman_6.png",
    gridClass: "col-start-3 row-start-1",
    objectPosition: "object-center"
  },
  {
    id: 6,
    title: "Be Different",
    description: "We help you stand out in a crowded market.",
    image: "/services_assets/woman_7.png",
    gridClass: "row-span-2 col-start-1 row-start-2",
    objectPosition: "object-center"
  },
  {
    id: 7,
    title: "Branding",
    description: "We help you establish a strong brand identity that resonates with your audience.",
    image: "/services_assets/woman_4.png",
    gridClass: "col-span-3 col-start-2 row-start-5",
    objectPosition: "object-center"
  },
  {
    id: 8,
    title: "Focus",
    description: "We help you focus on your core business while we take care of your digital presence.",
    image: "/services_assets/woman_8.png",
    gridClass: "row-span-2 col-start-1 row-start-4",
    objectPosition: "object-center"
  }
];

export default function Page() {
  return (
    <div className="m-8 mb-24">
      <section className="mb-16">
        <PageTitle title="Our Services">We offer a range of services to help you build your digital presence.</PageTitle>
      </section>

      <section className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4 min-h-dvh">
        {services.map((service) => (
          <div key={service.id} className={`card ${service.gridClass} border p-4 relative`}>
            <Image
              src={service.image}
              alt={service.title}
              fill={true}
              className={`object-cover ${service.objectPosition}`}
            />
            <div className="max-w-xs">
              <h2 className="relative z-0 text-white font-bold mix-blend-difference word-break">
                {service.title}
              </h2>
              <p className="relative z-0 text-white mix-blend-difference">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
