"use client"
import { motion } from "motion/react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:gap-4">
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
        <h1 className="font-logo -tracking-widest w-full text-4xl md:text-7xl xl:text-8xl">
          Generics Studio
        </h1>
      </motion.div>

      <motion.div 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 2.5 }}
      >
        <p className="text-base text-center md:text-xl text-night-500 mb-5">
          Until logic breaks or beauty wins
        </p>
      </motion.div>
        <motion.div
          initial={{ scale: 0, z: 20 }}
          animate={{ scale: 1, z: 0 }}
          transition={{duration:0.5, delay: 3.5, type: "spring", stiffness: 100 }}
          className="flex flex-col rounded-full py-2 px-4 border-butterfly border-1 shadow-sm bg-butterfly-50 bg-gradient-to-t from-butterfly-200 text-butterfly hover:from-butterfly-400 transition-colors duration-500"
        >
          <Link href="/contact">Available for new projects</Link>
          </motion.div>
    </div>
  );
}