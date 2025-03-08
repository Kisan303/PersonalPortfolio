"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Illustration {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  color: string
  shape: "circle" | "square" | "triangle" | "donut" | "star" | "hexagon"
  duration: number
  delay: number
  opacity: number
}

export function FloatingIllustrations() {
  const [illustrations, setIllustrations] = useState<Illustration[]>([])

  useEffect(() => {
    // Generate random illustrations
    const shapes: Illustration["shape"][] = ["circle", "square", "triangle", "donut", "star", "hexagon"]
    const colors = [
      "bg-gradient-to-br from-blue-500 to-cyan-400",
      "bg-gradient-to-br from-purple-500 to-pink-400",
      "bg-gradient-to-br from-emerald-400 to-green-500",
      "bg-gradient-to-br from-pink-500 to-red-400",
      "bg-gradient-to-br from-yellow-400 to-orange-500",
      "bg-gradient-to-br from-indigo-500 to-purple-400",
    ]

    const newIllustrations: Illustration[] = []

    for (let i = 0; i < 20; i++) {
      newIllustrations.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    setIllustrations(newIllustrations)
  }, [])

  const renderShape = (illustration: Illustration) => {
    const { shape, size, color, opacity } = illustration

    switch (shape) {
      case "circle":
        return <div className={`rounded-full ${color}`} style={{ width: size, height: size, opacity }} />
      case "square":
        return <div className={`rounded-lg ${color}`} style={{ width: size, height: size, opacity }} />
      case "triangle":
        return (
          <div
            className={`${color}`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid currentColor`,
              filter: "opacity(0.2)",
            }}
          />
        )
      case "donut":
        return (
          <div
            className={`rounded-full ${color} flex items-center justify-center`}
            style={{ width: size, height: size, opacity }}
          >
            <div className="rounded-full bg-background" style={{ width: size * 0.5, height: size * 0.5 }} />
          </div>
        )
      case "star":
        return (
          <div className={`${color}`} style={{ opacity }}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          </div>
        )
      case "hexagon":
        return (
          <div className={`${color}`} style={{ opacity }}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {illustrations.map((illustration) => (
        <motion.div
          key={illustration.id}
          className="absolute"
          initial={{
            x: `${illustration.x}%`,
            y: `${illustration.y}%`,
            rotate: illustration.rotation,
          }}
          animate={{
            y: [`${illustration.y}%`, `${(illustration.y + 15) % 100}%`, `${illustration.y}%`],
            x: [`${illustration.x}%`, `${(illustration.x + 10) % 100}%`, `${illustration.x}%`],
            rotate: [illustration.rotation, illustration.rotation + 180, illustration.rotation + 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: illustration.duration,
            delay: illustration.delay,
            ease: "easeInOut",
          }}
        >
          {renderShape(illustration)}
        </motion.div>
      ))}
    </div>
  )
}

