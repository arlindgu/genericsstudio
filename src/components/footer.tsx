"use client";

import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/contact", label: "contact" },
  { href: "/case-studies", label: "case studies" },
  { href: "/pricing", label: "pricing" },
  { href: "/about", label: "about" },
  { href: "/imprint", label: "imprint" },
];

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);


  return (
    <footer className="border-t py-4 bg-background w-full h-fit justify-center items-center flex flex-col sticky bottom-0 z-10">
      <motion.button
        type="button"
        aria-label="Toggle footer menu"
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-1 flex items-center"
        aria-expanded={isOpen}
        aria-controls="footer-menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Startet von oben
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }} // Geht nach unten beim Schließen
            transition={{ duration: 0.3 }}
            className="w-full flex items-center justify-center bg-background"
            id="footer-menu"
          >
            <div className="w-full flex justify-center items-center flex-col">
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exitHidden" // Separater Exit-Zustand
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: { transition: { staggerChildren: 0.1 } }, // Von oben nach unten beim Öffnen
                  exitHidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }, // Von unten nach oben beim Schließen
                }}
                className="flex-col items-center w-full pb-4"
              >
                {links.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: -20 }, // Kommt von oben
                      visible: { opacity: 1, y: 0 },
                      exitHidden: { opacity: 0, y: 20 }, // Geht nach unten
                    }}
                    className="w-full border-t last:border-b first:border-none text-start"
                  >
                    <Link
                      href={link.href}
                      className="hover:underline block w-full px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}