"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/svgs/genericsstudio.svg"

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Set initialized after component mounts to prevent animation on load
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (headerRef.current && menuItemsRef.current && isInitialized) {
      if (isOpen) {
        // Show menu items and animate them in
        menuItemsRef.current.style.display = "flex";
        gsap.fromTo(
          menuItemsRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        );
      } else {
        // Hide menu items
        gsap.to(menuItemsRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            menuItemsRef.current!.style.display = "none";
          },
        });
      }
    }
  }, [isOpen, isInitialized]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 bg-background py-4 border-b z-2"
      >
        <div className="container flex justify-between">
          <Link href="/">
          <p className="sr-only">Logo</p>
            <Logo className="h-10 w-auto fill-current" alt="Home" />
          </Link>

          {/* Desktop navigation */}
          <div className="space-x-4 items-center hidden md:flex z-1">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Projects</Link>
            <Link href={"/contact"}>
              <Button>Contact</Button>
            </Link>
          </div>

          {/* Mobile burger menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Separate mobile navigation overlay */}
      <div
        ref={menuItemsRef}
        style={{ display: "none" }}
        className="fixed inset-0 bg-background z-1 flex flex-col justify-center items-center space-y-8 text-2xl md:hidden"
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link href="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link href="/case-studies" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          <Button className="w-full">Contact</Button>
        </Link>
      </div>
    </>
  );
}
