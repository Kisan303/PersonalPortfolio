"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { GradientButton } from "@/components/ui/gradient-button"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      className: "bg-gradient-to-r from-blue-900 to-indigo-900 border-white/10 text-white",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <Label htmlFor="name" className="text-white text-base">
          Name
        </Label>
        <motion.div whileFocus="focus" whileTap="focus" variants={inputVariants}>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 transition-all h-12 text-base"
          />
        </motion.div>
      </div>
      <div className="space-y-4">
        <Label htmlFor="email" className="text-white text-base">
          Email
        </Label>
        <motion.div whileFocus="focus" whileTap="focus" variants={inputVariants}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 transition-all h-12 text-base"
          />
        </motion.div>
      </div>
      <div className="space-y-4">
        <Label htmlFor="message" className="text-white text-base">
          Message
        </Label>
        <motion.div whileFocus="focus" whileTap="focus" variants={inputVariants}>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-blue-200/50 focus:border-blue-400 transition-all resize-none text-base"
          />
        </motion.div>
      </div>
      <GradientButton type="submit" className="w-full gap-2 shadow-glow-purple text-base h-12" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="h-5 w-5" />
          </>
        )}
      </GradientButton>
      <div className="text-center text-base text-blue-200 mt-6 space-y-2">
        <p>
          Or reach me directly at:{" "}
          <a href="mailto:kisanrai939@gmail.com" className="text-blue-300 hover:text-blue-100 font-medium">
            kisanrai939@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+14376610038" className="text-blue-300 hover:text-blue-100 font-medium">
            +1 437 661 0038
          </a>
        </p>
      </div>
    </motion.form>
  )
}

