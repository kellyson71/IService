"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const DotsCore = ({ className, dotColor = "#3b82f6" }: { className?: string; dotColor?: string }) => {
  const dots = new Array(200).fill(1)

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      {dots.map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full opacity-30 animate-pulse"
          style={{
            backgroundColor: dotColor,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export const Dots = React.memo(DotsCore)
