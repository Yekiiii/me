"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const identityPhrases = [
  "aka Yeki",
  "Full-Stack Product Developer",
  "Motion + UI Design Focused",
  "Builds Fast, Polished Experiences",
]

export function NameAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % identityPhrases.length)
    }, 2300)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
        <span className="block text-foreground">Kaartikey Nair</span>
        <span className="gradient-text mt-2 block">Building products that feel alive.</span>
      </h1>

      <div className="mt-6 h-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={identityPhrases[phraseIndex]}
            initial={{ opacity: 0, y: 12, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(7px)" }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="pill w-fit"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/55" />
            {identityPhrases[phraseIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
