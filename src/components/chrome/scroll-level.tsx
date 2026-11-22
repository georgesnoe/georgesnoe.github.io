"use client"

import { useEffect, useRef, useState } from "react"

import { unlock } from "@/lib/achievements"

const levels = [
  { threshold: 0, label: "INIT", id: null },
  { threshold: 0.2, label: "LV.02", id: "level2" },
  { threshold: 0.4, label: "LV.03", id: "level3" },
  { threshold: 0.65, label: "LV.04", id: "level4" },
  { threshold: 0.9, label: "LV.05", id: "level5" },
] as const

/** Arcade-style scroll depth meter with achievement checkpoints. */
export function ScrollLevel() {
  const [progress, setProgress] = useState(0)
  const lastLevel = useRef(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const next = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      setProgress(next)

      if (next > 0.02 && lastLevel.current === 0) unlock("firstScroll")

      for (let i = levels.length - 1; i >= 1; i--) {
        if (next >= levels[i].threshold && lastLevel.current < i) {
          lastLevel.current = i
          unlock(levels[i].id!)
          break
        }
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const current = levels.reduce(
    (active, level, index) => (progress >= level.threshold ? index : active),
    0,
  )

  return (
    <div className="pointer-events-none fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex">
      <span className="label-chip border-foreground bg-card px-1.5 py-1 text-[0.55rem] [writing-mode:vertical-rl]">
        {levels[current].label}
      </span>
      <div className="flex h-40 w-1.5 flex-col-reverse gap-1 border-2 border-foreground bg-card">
        {levels.slice(1).map((level, index) => (
          <span
            key={level.id}
            className={`flex-1 transition-colors duration-300 ${
              index < current ? "bg-level" : "bg-level-dim"
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-[0.6rem] font-bold text-muted-foreground">
        {Math.round(progress * 100)}%
      </span>
    </div>
  )
}
