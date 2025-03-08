"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  gradient: string
}

export function ProjectCard({ title, description, image, tags, link, gradient }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Card
        className="overflow-hidden h-full transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.4 }}>
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 mix-blend-soft-light`}></div>
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="secondary"
              size="sm"
              className="gap-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20"
            >
              View Project <ExternalLink className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <div className={`h-1 w-20 mb-4 rounded-full bg-gradient-to-r ${gradient}`}></div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-blue-100 mb-5 text-base leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className={`bg-gradient-to-r ${gradient} text-white border-0 text-xs py-1`}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={link} className="text-blue-300 hover:text-blue-100 text-sm flex items-center gap-1 group">
            Learn more <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

