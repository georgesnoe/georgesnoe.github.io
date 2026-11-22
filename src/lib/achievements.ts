export const achievements = {
  firstScroll: { label: "First Steps", xp: 10, icon: "sparkles" },
  level2: { label: "Getting Warm", xp: 20, icon: "rocket" },
  level3: { label: "Halfway Hero", xp: 30, icon: "trophy" },
  level4: { label: "Deep Diver", xp: 40, icon: "layers" },
  level5: { label: "Portfolio Explorer", xp: 50, icon: "trophy" },
  themeToggle: { label: "Reality Shift", xp: 15, icon: "moon" },
  projectVisit: { label: "Curious Mind", xp: 15, icon: "arrowUpRight" },
  messageSent: { label: "Say Hello!", xp: 25, icon: "send" },
  secret: { label: "Easter Egg", xp: 40, icon: "sparkles" },
} as const

export type AchievementId = keyof typeof achievements

export const totalXp = Object.values(achievements).reduce(
  (sum, achievement) => sum + achievement.xp,
  0,
)

/** Dispatch from anywhere in the browser (safe to call during SSR). */
export function unlock(id: AchievementId) {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent("gn:achievement", { detail: id }))
}
