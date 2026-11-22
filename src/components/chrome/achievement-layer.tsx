"use client"

import { useCallback, useEffect, useState } from "react"

import { Icon } from "@/components/ui/icon"
import {
  achievements,
  type AchievementId,
  totalXp,
} from "@/lib/achievements"

const STORAGE_KEY = "gn-portfolio-achievements"

type Toast = { id: AchievementId; key: number }

export function useAchievementStats() {
  const [stats, setStats] = useState({ count: 0, xp: 0 })

  useEffect(() => {
    const sync = () => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY)
        const ids = (raw ? JSON.parse(raw) : []) as AchievementId[]
        const unique = [...new Set(ids)].filter((id) => id in achievements)
        setStats({
          count: unique.length,
          xp: unique.reduce((sum, id) => sum + achievements[id].xp, 0),
        })
      } catch {
        setStats({ count: 0, xp: 0 })
      }
    }

    sync()
    window.addEventListener("gn:achievements-updated", sync)
    return () => window.removeEventListener("gn:achievements-updated", sync)
  }, [])

  return { ...stats, total: totalXp }
}

export function AchievementLayer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const dismiss = useCallback((key: number) => {
    setToasts((current) => current.filter((toast) => toast.key !== key))
  }, [])

  useEffect(() => {
    function onAchievement(event: Event) {
      const id = (event as CustomEvent<AchievementId>).detail
      if (!id || !(id in achievements)) return

      let unlocked: AchievementId[] = []
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY)
        unlocked = raw ? (JSON.parse(raw) as AchievementId[]) : []
      } catch {
        unlocked = []
      }

      if (unlocked.includes(id)) return
      unlocked.push(id)
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked))
      } catch {
        /* storage unavailable — still show the toast */
      }

      window.dispatchEvent(new Event("gn:achievements-updated"))

      const key = Date.now() + Math.random()
      setToasts((current) => [...current, { id, key }].slice(-3))
      window.setTimeout(() => dismiss(key), 4200)
    }

    window.addEventListener("gn:achievement", onAchievement)
    return () => window.removeEventListener("gn:achievement", onAchievement)
  }, [dismiss])

  return (
    <div
      className="pointer-events-none fixed bottom-24 left-4 z-[90] flex flex-col gap-2 md:bottom-6"
      aria-live="polite"
    >
      {toasts.map((toast) => {
        const achievement = achievements[toast.id]
        return (
          <div
            key={toast.key}
            className="achievement-toast flex w-72 items-center gap-3 border-3 border-foreground bg-card px-4 py-3 text-card-foreground shadow-[6px_6px_0_0_var(--shadow)]"
          >
            <span className="flex size-10 shrink-0 items-center justify-center border-2 border-foreground bg-secondary text-secondary-foreground">
              <Icon name={achievement.icon} className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground">
                Achievement unlocked · +{achievement.xp} XP
              </span>
              <span className="block truncate text-sm font-black uppercase">
                {achievement.label}
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}
