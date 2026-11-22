"use client"

import { useEffect, useRef, useState } from "react"

import { gsap } from "@/lib/gsap"

/** Magnetic dot + label ring. Fine pointers only; native cursor stays elsewhere. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef("")
  const [label, setLabel] = useState("")

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!fine.matches || reduced.matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.documentElement.classList.add("has-custom-cursor")

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 1 })
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" })
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" })
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" })
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" })

    const onMove = (event: MouseEvent) => {
      dotX(event.clientX)
      dotY(event.clientY)
      ringX(event.clientX)
      ringY(event.clientY)
    }

    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]",
      )
      if (!target) return
      const next = target.dataset.cursor === "true" ? "" : (target.dataset.cursor ?? "")
      labelRef.current = next
      setLabel(next)
      gsap.to(ring, { scale: next ? 1.85 : 1.35, duration: 0.25 })
    }

    const onOut = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]",
      )
      if (!target) return
      labelRef.current = ""
      setLabel("")
      gsap.to(ring, { scale: 1, duration: 0.25 })
    }

    const onDown = () => gsap.to(ring, { scale: 0.8, duration: 0.12 })
    const onUp = () =>
      gsap.to(ring, { scale: labelRef.current ? 1.85 : 1, duration: 0.2 })

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseout", onOut)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] flex size-9 items-center justify-center border-2 border-foreground bg-secondary/20 opacity-0"
        aria-hidden="true"
      >
        <span className="max-w-20 text-center text-[0.55rem] font-black uppercase leading-none tracking-wider text-foreground">
          {label}
        </span>
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] size-2.5 bg-primary opacity-0"
        aria-hidden="true"
      />
    </>
  )
}
