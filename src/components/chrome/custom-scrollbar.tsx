"use client"

import { useEffect, useRef } from "react"

import { gsap } from "@/lib/gsap"

/** Draggable thumb over native scrolling — ScrollTrigger/a11y stay untouched. */
export function CustomScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!fine.matches) return

    const track = trackRef.current
    const thumb = thumbRef.current
    if (!track || !thumb) return

    let thumbHeight = 48
    let dragging = false
    let dragStartY = 0

    const moveTo = gsap.quickTo(thumb, "y", { duration: 0.22, ease: "power3" })

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const ratio = window.innerHeight / Math.max(doc.scrollHeight, 1)
      thumbHeight = Math.max(44, track.clientHeight * ratio)
      gsap.set(thumb, { height: thumbHeight })
      const progress = max > 0 ? window.scrollY / max : 0
      moveTo(progress * Math.max(0, track.clientHeight - thumbHeight))
    }

    const scrollFromThumb = (clientY: number) => {
      const usable = track.clientHeight - thumbHeight
      if (usable <= 0) return
      const currentY = Number(gsap.getProperty(thumb, "y"))
      const nextY = Math.min(Math.max(currentY + (clientY - dragStartY), 0), usable)
      const max = document.documentElement.scrollHeight - window.innerHeight
      window.scrollTo({ top: (nextY / usable) * max, behavior: "instant" })
    }

    const onPointerDown = (event: PointerEvent) => {
      dragging = true
      dragStartY = event.clientY
      thumb.setPointerCapture(event.pointerId)
      gsap.to(thumb, { scaleX: 1.4, duration: 0.15 })
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return
      scrollFromThumb(event.clientY)
    }

    const onPointerUp = () => {
      if (!dragging) return
      dragging = false
      gsap.to(thumb, { scaleX: 1, duration: 0.2 })
    }

    const onTrackClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement) === thumb) return
      const rect = track.getBoundingClientRect()
      const fraction = (event.clientY - rect.top) / rect.height
      const max = document.documentElement.scrollHeight - window.innerHeight
      window.scrollTo({ top: fraction * max, behavior: "smooth" })
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    thumb.addEventListener("pointerdown", onPointerDown)
    thumb.addEventListener("pointermove", onPointerMove)
    thumb.addEventListener("pointerup", onPointerUp)
    thumb.addEventListener("pointercancel", onPointerUp)
    track.addEventListener("click", onTrackClick)

    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      thumb.removeEventListener("pointerdown", onPointerDown)
      thumb.removeEventListener("pointermove", onPointerMove)
      thumb.removeEventListener("pointerup", onPointerUp)
      thumb.removeEventListener("pointercancel", onPointerUp)
      track.removeEventListener("click", onTrackClick)
    }
  }, [])

  return (
    <div
      ref={trackRef}
      className="fixed right-1.5 top-1/2 z-40 hidden h-1/2 w-1.5 -translate-y-1/2 border border-foreground/40 bg-foreground/5 md:block"
      aria-hidden="true"
    >
      <div
        ref={thumbRef}
        className="w-full bg-primary shadow-[0_0_0_1px_var(--border)]"
      />
    </div>
  )
}
