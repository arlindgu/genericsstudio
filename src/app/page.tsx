"use client"

import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <span className="font-normal">GURGUROVCI</span> <span className="font-bold">Studios</span>
        </h1>
      </motion.div>

      <motion.div 
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <p>
          fuck the templates, build with soul.
        </p>
      </motion.div>
    </div>
  );
}