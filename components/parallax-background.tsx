"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 300])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const y3 = useTransform(scrollY, [0, 1000], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950"></div>

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 2 + 1
          const animationDuration = Math.random() * 4 + 2

          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: animationDuration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            />
          )
        })}
      </div>

      {/* Parallax Elements */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
          opacity,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
          opacity,
        }}
      >
        <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-cyan-500/20 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-indigo-500/15 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/2 w-56 h-56 rounded-full bg-emerald-500/10 blur-2xl"></div>
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y1, opacity }}>
        {/* Layer 1 */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl"></div>
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y2, opacity }}>
        {/* Layer 2 */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl"></div>
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y3, opacity }}>
        {/* Layer 3 */}
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 rounded-full bg-gradient-to-r from-red-500/20 to-rose-500/20 blur-xl"></div>
        <div className="absolute top-1/4 right-1/2 w-44 h-44 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 blur-xl"></div>
      </motion.div>
    </div>
  )
}

