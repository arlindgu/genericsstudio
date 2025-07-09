"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="h-screen self-center content-center -my-4 -mx-4 w-full">
          <div className="flex flex-col">
            <div className="flex flex-col lg:gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="pagetitle"
              >
                Why we stand out
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="pagetitle"
              >
                and why it matters.
              </motion.h1>
              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
               className="text-center border-t-2 mt-8 pt-4 max-w-xl self-center">
                We are a creative studio specializing in digital solutions. Our
                multidisciplinary team combines expertise from development,
                design, user experience, and project management. Together, we
                craft innovative concepts and evaluate their potential for
                sustainable success.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16">
        <section className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <Image
            src="/artboard_1.png"
            alt="Artboard 1"
            width={400}
            height={400}
            className="lg:order-1 order-0"
          />
          <div>
            <h1>
              About <span className="italic">Generics Studio</span>
            </h1>
            <p className="max-w-sm">
              What started as a hobby project of learning web design and web
              technologies has grown into a full-fledged design studio. Generics
              Studio is our brand, where we combine our passion for design and
              development to create exceptional digital experiences. We
              specialize in crafting modern, high-quality websites that are not
              only visually appealing but also highly functional and
              user-centric.
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <Image
            src="/artboard_4.png"
            alt="Artboard 1"
            width={400}
            height={400}
            className="lg:order-0 order-0"
          />
          <div>
            <h1>Our Vision</h1>
            <p className="max-w-sm">
              We believe that design is more than just aesthetics; it is about
              creating meaningful connections between brands and their
              audiences. Our vision at Generics Studio is to empower brands to
              tell their stories through innovative design and technology. We
              aim to create digital experiences that are not only visually
              stunning but also intuitive and engaging.
            </p>
          </div>
          


        </section>
        <section className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <Image
            src="/artboard_3.png"
            alt="Artboard 1"
            width={400}
            height={400}
                        className="lg:order-1 order-0"
          />
          <div>
            <h1>
              We create experiences
            </h1>
            <p className="max-w-sm">
              At Generics Studio, we are passionate about creating digital
              experiences that resonate with users. Our team of designers and
              developers work closely together to ensure that every project we
              undertake is not only visually appealing but also functional and
              user-friendly. We believe in the power of collaboration and
              innovation, and we strive to push the boundaries of what is
              possible in web design and development.
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <Image
            src="/artboard_4.png"
            alt="Artboard 1"
            width={400}
            height={400}
                        className="lg:order-0 order-0"
          />
          <div>
            <h1>Blank Canvas</h1>
            <p className="max-w-sm">
              We approach each project with a fresh perspective, treating every
              client as a unique opportunity to create something special. Our
              process begins with understanding your brand, your goals, and your
              audience. From there, we develop a tailored strategy that combines
              design, technology, and user experience to deliver a final product
              that exceeds expectations.
            </p>
          </div>
          


        </section>
        <section>
          <p className="text-center italic text-night-600">For us, design isn’t decoration. It is structure, content, and identity in one.</p>
        </section>
      </div>
      </div>
    </main>
  );
}
