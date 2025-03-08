"use client"

import { motion } from "framer-motion"

interface ScrollingTextProps {
  text: string
}

export function ScrollingText({ text }: ScrollingTextProps) {
  const repeatedText = text.repeat(10)

  return (
    <div className="relative py-4 overflow-hidden bg-slate-900 border-y border-white/10">
      <motion.div
        className="whitespace-nowrap text-4xl font-bold text-white/5"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  )
}

