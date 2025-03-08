"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: string
  color: string
}

export function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Update the skills array with Kisan's skills
  const skills: Skill[] = [
    { name: "Python", icon: "🐍", color: "from-blue-500 to-green-500" },
    { name: "Django", icon: "🎸", color: "from-green-600 to-green-800" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600" },
    { name: "React.js", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "Java", icon: "☕", color: "from-red-500 to-red-700" },
    { name: "Spring Boot", icon: "🍃", color: "from-green-400 to-green-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
    { name: "Git", icon: "🔄", color: "from-orange-500 to-red-500" },
    { name: "SQL", icon: "🗄️", color: "from-blue-500 to-blue-700" },
  ]

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
          onHoverStart={() => setHoveredSkill(skill.name)}
          onHoverEnd={() => setHoveredSkill(null)}
          className={`relative flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 shadow-lg transition-all ${hoveredSkill === skill.name ? "shadow-xl" : ""}`}
        >
          <div
            className={`mb-4 w-16 h-16 flex items-center justify-center text-3xl rounded-lg bg-gradient-to-br ${skill.color} shadow-inner`}
          >
            {skill.icon}
          </div>
          <span className="text-white font-medium text-lg">{skill.name}</span>
          {hoveredSkill === skill.name && (
            <motion.div
              className="absolute inset-0 -z-10 rounded-xl opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${skill.color} blur-sm`}></div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

