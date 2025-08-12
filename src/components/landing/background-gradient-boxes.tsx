"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const GradientBoxesCore = ({
  className,
  colors = ["#3b82f6", "#8b5cf6", "#ec4899"],
}: { className?: string; colors?: string[] }) => {
  const rows = new Array(80).fill(1)
  const cols = new Array(60).fill(1)

  return (
    <div
      style={{
        transform: `translate(-30%,-40%) skewX(-20deg) skewY(8deg) scale(0.8) rotate(0deg) translateZ(0)`,
      }}
      className={cn("absolute inset-0 z-0 flex h-full w-full opacity-20", className)}
    >
      {rows.map((_, i) => (
        <div key={`gradient-row-${i}`} className="relative h-12 w-12">
          {cols.map((_, j) => (
            <div
              key={`gradient-col-${j}`}
              className="relative h-12 w-12 border border-white/10 transition-all duration-500 hover:border-white/30"
              style={{
                background: `linear-gradient(45deg, ${colors[0]}20, ${colors[1]}20, ${colors[2]}20)`,
                animationDelay: `${(i + j) * 0.05}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export const GradientBoxes = React.memo(GradientBoxesCore)
