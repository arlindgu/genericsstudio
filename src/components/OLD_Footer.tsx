"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/imprint", label: "Imprint" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close sidebar on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 z-20">
      <motion.button
        type="button"
        aria-label="Toggle sidebar menu"
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="m-4 z-30 relative flex items-center"
        aria-expanded={isOpen}
        aria-controls="sidebar-menu"
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
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex"
            id="sidebar-menu"
            aria-modal="true"
            role="dialog"
          >
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-white dark:bg-zinc-900 shadow-xl w-72 max-w-full h-full flex flex-col p-8"
            >
              <button
                type="button"
                aria-label="Close sidebar menu"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                <X size={28} />
              </button>
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exitHidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: { transition: { staggerChildren: 0.1 } },
                  exitHidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
                className="flex flex-col items-start w-full mt-12"
              >
                {links.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      visible: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -20 },
                      exitHidden: { opacity: 0, x: -20 },
                    }}
                    className="w-full text-left text-xl font-serif my-2"
                  >
                    <Link
                      href={link.href}
                      className="hover:underline block w-full px-2 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}