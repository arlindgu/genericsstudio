"use client";
import { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import gsap from "gsap";

export default function Home() {

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
    timeline
      .fromTo(
      ".subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
      )
      .fromTo(
      ".logo",
      { scaleY: 0 },
      { scaleY: 1, transformOrigin: "100% top", duration: 2, ease: "elastic.out(1, 0.5)" },
      "-=2.5"
      );
  }, []);

  return (
    <div className="section flex flex-col items-center justify-center md:gap-4 p-4 h-dvh -mt-32">
        <Image
          src={logo}
          alt="Generics Studio Logo"
          width={450}
          height={200}
          className="logo"
        />

      <div
      >
        <p className="subtitle text-base text-center md:text-xl text-night-500 mb-5">
          Until logic breaks or beauty wins
        </p>
      </div>
    </div>
  );
}
