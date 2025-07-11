"use client"

import Image from "next/image";
import PageTitle from "@/components/ui/PageTitle";
import { motion } from "framer-motion";



export default function Page() {


  return (
    <div className="flex flex-col items-center justify-center gap-4 flex-1 w-full">
      <PageTitle title="Our Services">We offer a range of services to help you build your digital presence.</PageTitle>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", delay: 0.3 }}
      className="flex flex-col lg:grid lg:grid-cols-5 grid-rows-5 gap-4">

        <div className="card col-span-2 border p-4 relative">
            <Image
            src="/services_assets/woman_1.png"
            alt="Background"
            fill={true}
            className="object-cover object-top hover:"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference">
              Handmade
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
                We create custom websites tailored to your specific needs and
                goals.
            </p>
          </div>
        </div>
        <div className="card col-span-3 row-span-3 col-start-2 row-start-2 border p-4 relative">
          <Image
            src="/services_assets/woman_5.png"
            alt="Background"
            fill={true}
            className="object-cover object-center"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference">
              Web Design
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
              We create beautiful and functional websites that engage your
              audience.
            </p>
          </div>
        </div>
        <div className="card col-span-2 col-start-4 row-start-1 border p-4 relative">
          <Image
            src="/services_assets/woman_2.png"
            alt="Background"
            fill={true}
            className="object-cover object-center"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference">
              E-Mail Templates
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
              We design custom email templates that enhance your communication
              with clients.
            </p>
          </div>
        </div>
        <div className="card row-span-4 col-start-5 row-start-2 border p-4 relative">
          <Image
            src="/services_assets/woman_3.png"
            alt="Background"
            fill={true}
            className="object-cover object-center"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference word-break">
              Overhaul
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
              We restore and modernize existing websites to improve performance
              and user experience.
            </p>
          </div>
        </div>
        <div className="card col-start-3 row-start-1 border p-4 relative">
            <Image
            src="/services_assets/woman_6.png"
            alt="Background"
            fill={true}
            className="object-cover object-center"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference word-break">
              Freedom
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
                We manage your website so you can focus on what you do best.
            </p>
          </div>
        </div>
        <div className="row-span-2 col-start-1 row-start-2 border p-4 relative">
                        <Image
            src="/services_assets/woman_7.png"
            alt="Background"
            fill={true}
            className="object-cover object-center"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference word-break">
              Be Different
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
                We help you stand out in a crowded market.
            </p>
          </div>
        </div>
        <div className="card col-span-3 col-start-2 row-start-5 border p-4 relative">
          <Image
            src="/services_assets/woman_4.png"
            alt="Background"
            fill={true}
            className="object-cover object-center"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference word-break">
              Branding
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
                We help you establish a strong brand identity that resonates with
                your audience.
            </p>
          </div>
        </div>
        <div className="row-span-2 col-start-1 row-start-4 p-4 relative card">
                    <Image
            src="/services_assets/woman_8.png"
            alt="Background"
            fill={true}
            className="object-cover object-center"
          />
          <div className="max-w-xs">
            <h2 className="relative z-0 text-white font-bold mix-blend-difference word-break">
              Focus
            </h2>
            <p className="relative z-0 text-white mix-blend-difference">
                We help you focus on your core business while we take care of
                your digital presence.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
