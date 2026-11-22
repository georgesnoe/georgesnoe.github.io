"use client"

import type { ComponentProps } from "react"

import { unlock, type AchievementId } from "@/lib/achievements"

/** External link that unlocks an achievement when clicked. */
export function AchievementLink({
  achievement,
  onClick,
  ...props
}: ComponentProps<"a"> & { achievement: AchievementId }) {
  return (
    <a
      {...props}
      onClick={(event) => {
        unlock(achievement)
        onClick?.(event)
      }}
    />
  )
}
