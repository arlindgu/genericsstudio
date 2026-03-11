"use client";

import { motion } from "motion/react";
import { Chair } from "../svgs/chair";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const lineVariants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const t = useTranslations("hero");
  const headlineLines = [t("line1"), t("line2"), t("line3")];

  return (
    <section className="relative min-h-screen flex flex-col -mt-16 overflow-hidden">
      {/* Top info bar */}
      <div className="relative flex items-center justify-between px-10 pt-24 pb-5 border-b border-border">
        <motion.span
          className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Generics Studio
        </motion.span>
        <motion.span
          className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Zürich · Schweiz
        </motion.span>
      </div>

      {/* Main content */}
      <div className="relative flex-1 px-10 max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-10 pb-14">
        {/* Left: headline + description + CTAs */}
        <div className="flex flex-col gap-10 z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  className={`block font-mono font-bold tracking-tighter leading-[0.875] ${
                    i === 2 ? "text-brand" : "text-foreground"
                  }`}
                  style={{
                    fontSize: "clamp(3.2rem, 8.5vw, 8.75rem)",
                  }}
                  variants={lineVariants}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 w-fit border border-border px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
                {t("badge")}
              </span>
            </div>
            <p className="text-muted-foreground text-base max-w-xs leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 font-medium text-sm hover:gap-5 transition-all duration-300"
              >
                {t("cta")}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link
                href="#leistungen"
                className="inline-flex items-center px-7 py-3.5 font-medium text-sm border border-border hover:border-foreground transition-colors duration-300"
              >
                {t("services")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: Chair */}
        <motion.div
          className="flex-shrink-0 self-end lg:self-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <Chair className="w-44 lg:w-[360px] lg:h-[360px] scale-x-[-1]" />
        </motion.div>
      </div>
    </section>
  );
}
