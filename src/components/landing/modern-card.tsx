"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ModernCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function ModernCard({ children, className, hover = true }: ModernCardProps) {
  return (
    <div
      className={cn(
        "relative group/card",
        "bg-white/50 backdrop-blur-sm",
        "border border-neutral-200/50 dark:border-neutral-800/50",
        "rounded-2xl p-6",
        "shadow-sm",
        hover && "hover:shadow-xl hover:-translate-y-1",
        "transition-all duration-300",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
