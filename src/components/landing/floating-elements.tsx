"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse" />
      <div
        className="absolute top-40 right-32 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-pink-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Floating lines */}
      <div className="absolute top-1/4 left-10 w-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-3/4 right-10 w-12 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </div>
  )
}
