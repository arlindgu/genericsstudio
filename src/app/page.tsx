"use client"
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}>
      </motion.div>

<motion.div
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: [10, 0] }}
  transition={{
    opacity: { duration: 1, delay: 1, ease: "easeInOut" },
    y: {
      delay: 2.5, // nach der Opacity-Animation
      duration: 0.6,
      ease: "easeInOut",
    },
  }}
>
        <h1 className="w-full italic text-6xl md:text-9xl font-serif">
          Generics Studio
        </h1>
      </motion.div>

      <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 2.5 }}
      >
        <p className="text-xl lowercase italic">
          fuck the templates, build with soul.
        </p>
      </motion.div>
    </div>
  );
}