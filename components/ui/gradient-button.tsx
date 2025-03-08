"use client"

import type React from "react"

import { forwardRef } from "react"
import type { VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button as ButtonBase, type buttonVariants } from "@/components/ui/button"

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  gradient?: "blue" | "purple" | "pink" | "cyan" | "emerald" | "custom"
  children: React.ReactNode
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, gradient = "blue", children, ...props }, ref) => {
    const gradientClasses = {
      blue: "from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0",
      purple: "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0",
      pink: "from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white border-0",
      cyan: "from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-white border-0",
      emerald: "from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white border-0",
      custom: "",
    }

    const gradientClass = gradientClasses[gradient]

    return (
      <ButtonBase
        className={cn(
          variant === "outline"
            ? "relative bg-transparent overflow-hidden text-white hover:text-white"
            : "bg-gradient-to-r shadow-md hover:shadow-lg",
          gradientClass,
          className,
        )}
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      >
        {variant === "outline" && (
          <motion.span
            className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-20`}
            whileHover={{ opacity: 0.3 }}
          />
        )}
        {children}
      </ButtonBase>
    )
  },
)
GradientButton.displayName = "GradientButton"

export { GradientButton }

