"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export function GradientText({
  children,
  className,
  gradient = "from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100",
}: GradientTextProps) {
  return <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", gradient, className)}>{children}</span>
}
