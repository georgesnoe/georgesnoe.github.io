"use client"

import { useEffect } from "react"
import Lenis from "lenis"

import { gsap, ScrollTrigger } from "@/lib/gsap"

/** Inertial scrolling driven by GSAP's ticker and synced to ScrollTrigger. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.off("scroll", onScroll)
      lenis.destroy()
    }
  }, [])

  return null
}
