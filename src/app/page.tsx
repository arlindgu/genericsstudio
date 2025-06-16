"use client"

import { motion } from "motion/react"
import LoremIpsum from "react-lorem-ipsum";


export default function Home() {
  return (
    <main className="flex-1 flex flex-col p-4">
      <div className="self-center flex flex-row gap-4 flex-grow">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className="flex flex-row gap-2">
              <h1 className="text-5xl">VIVID</h1>
              <h1 className="text-5xl font-bold">Studios</h1>
            </div>
          </motion.div>

          <motion.div 
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="font-serif flex-row flex gap-1">
            <a className="font-bold italic">fuck</a>
            <a className="font-serif"> the templates. </a>
            <a className="font-bold italic">build</a>
            <a> with soul.</a>
          </motion.div>
          
        </div>

        




      </div>
      <div className="">
        <LoremIpsum p={1}/>

        </div>
    </main>
  );
}