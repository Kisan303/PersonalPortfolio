"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"

interface FloatingObjectProps {
  color: string
  size: number
  x: number
  y: number
  delay: number
  duration: number
  children?: React.ReactNode
}

function FloatingObject({ color, size, x, y, delay, duration, children }: FloatingObjectProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [y, y - 20, y],
      x: [x, x + 10, x],
      rotate: [0, 10, 0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration,
        delay,
        ease: "easeInOut",
      },
    })
  }, [controls, x, y, delay, duration])

  return (
    <motion.div
      className="absolute rounded-lg flex items-center justify-center cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${color}, rgba(0,0,0,0.3))`,
        width: size,
        height: size,
        left: x,
        top: y,
        boxShadow: `0 10px 30px -5px ${color}40`,
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      animate={controls}
      whileHover={{
        scale: 1.2,
        boxShadow: `0 15px 30px -5px ${color}80`,
        rotate: 0,
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  )
}

export function InteractiveScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // For parallax effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    setMousePosition({ x: mouseX, y: mouseY })

    x.set(mouseX - centerX)
    y.set(mouseY - centerY)
  }

  const resetPosition = () => {
    x.set(0)
    y.set(0)
  }

  // Generate floating objects
  const objects = [
    {
      color: "#4f46e5",
      size: 80,
      x: dimensions.width * 0.2,
      y: dimensions.height * 0.3,
      delay: 0,
      duration: 4,
      icon: "⚛️",
    },
    {
      color: "#ec4899",
      size: 70,
      x: dimensions.width * 0.7,
      y: dimensions.height * 0.2,
      delay: 0.5,
      duration: 5,
      icon: "🚀",
    },
    {
      color: "#06b6d4",
      size: 90,
      x: dimensions.width * 0.5,
      y: dimensions.height * 0.6,
      delay: 1,
      duration: 6,
      icon: "💻",
    },
    {
      color: "#8b5cf6",
      size: 60,
      x: dimensions.width * 0.8,
      y: dimensions.height * 0.7,
      delay: 1.5,
      duration: 5,
      icon: "🎨",
    },
    {
      color: "#10b981",
      size: 75,
      x: dimensions.width * 0.3,
      y: dimensions.height * 0.8,
      delay: 2,
      duration: 4,
      icon: "🔥",
    },
    {
      color: "#f59e0b",
      size: 65,
      x: dimensions.width * 0.1,
      y: dimensions.height * 0.5,
      delay: 2.5,
      duration: 5,
      icon: "✨",
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
    >
      {/* Gradient background with animated movement */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing orbs in the background */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-pink-500/20 blur-3xl"></div>
      </motion.div>

      {/* Floating objects */}
      {dimensions.width > 0 &&
        objects.map((obj, index) => (
          <FloatingObject
            key={index}
            color={obj.color}
            size={obj.size}
            x={obj.x}
            y={obj.y}
            delay={obj.delay}
            duration={obj.duration}
          >
            <span className="text-3xl">{obj.icon}</span>
          </FloatingObject>
        ))}

      {/* Central element */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center cursor-pointer z-10"
        style={{
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.5)",
          border: "2px solid rgba(255,255,255,0.2)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 60px rgba(139, 92, 246, 0.3)",
            "0 0 80px rgba(139, 92, 246, 0.6)",
            "0 0 60px rgba(139, 92, 246, 0.3)",
          ],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
        }}
      >
        <div className="text-white text-center">
          <div className="text-4xl font-bold">3D</div>
          <div className="text-sm mt-1">Interactive</div>
        </div>
      </motion.div>

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm">
        Move your mouse to interact with the scene
      </div>
    </div>
  )
}

