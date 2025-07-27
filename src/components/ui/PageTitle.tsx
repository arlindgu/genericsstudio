"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  children: ReactNode;
}

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <div className="flex flex-col text-center">
      <motion.h1
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
      >
        {title}
      </motion.h1>
      <motion.p
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
        className=""
      >
        {children}
      </motion.p>
    </div>
  );
}
