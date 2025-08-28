"use client";
import { useEffect } from "react";
import Logo from "@/components/svgs/genericsstudio.svg"
import gsap from "gsap";

export default function Home() {

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
    timeline
          .fromTo(
      ".logo",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 1 }
      )
      .fromTo(
      ".subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
      , "-=2.5"
      )
  }, []);

  return (
    <>
        <div className="container min-h-screen flex flex-col items-center justify-center">
          <Logo className="logo w-64 md:w-80 lg:w-96 fill-current -mb-4" />
          <p className="subtitle text-current">Until logic breaks or beauty wins</p>
        </div>
    </>
  );
}
