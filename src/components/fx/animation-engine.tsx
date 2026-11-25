"use client"

import { useRef, type ReactNode } from "react"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

/**
 * One declarative GSAP engine for the whole page.
 * Server components only mark intent with data-* attributes; all animation,
 * ScrollTriggers and listeners live here and are reverted on route changes.
 */
export function AnimationEngine({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = scope.current
      if (!root) return

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      // Clip wipes instead of fades — content arrives with intent.
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(0 0 100% 0)", y: 36, rotate: -1.5 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            rotate: 0,
            duration: 0.85,
            ease: "expo.out",
            delay: Number(element.dataset.revealDelay ?? 0),
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        )
      })

      // Character stagger for headlines (spans rendered on the server).
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((element) => {
        const chars = element.querySelectorAll<HTMLElement>(".char")
        if (!chars.length) return
        gsap.from(chars, {
          yPercent: 120,
          rotate: 8,
          duration: 0.85,
          ease: "expo.out",
          stagger: 0.018,
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        })
      })

      // Parallax layers.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax ?? 0.15)
        gsap.to(element, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      // Counting stats.
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count ?? 0)
        const proxy = { value: 0 }
        gsap.to(proxy, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate: () => {
            element.textContent = String(Math.round(proxy.value))
          },
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
        })
      })

      // Skill bars filling up like a charging meter.
      gsap.utils.toArray<HTMLElement>("[data-charge]").forEach((element) => {
        gsap.fromTo(
          element,
          { width: "0%" },
          {
            width: element.dataset.charge ?? "0%",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          },
        )
      })

      // Magnetic CTAs and 3D tilting cards — fine pointers only (mobile stays calm).
      const pointerMedia = gsap.matchMedia()
      pointerMedia.add("(hover: hover) and (pointer: fine)", () => {
        const listeners: Array<() => void> = []

        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((element) => {
          const moveX = gsap.quickTo(element, "x", { duration: 0.35, ease: "power3" })
          const moveY = gsap.quickTo(element, "y", { duration: 0.35, ease: "power3" })
          const onMove = (event: PointerEvent) => {
            const rect = element.getBoundingClientRect()
            moveX((event.clientX - rect.left - rect.width / 2) * 0.25)
            moveY((event.clientY - rect.top - rect.height / 2) * 0.3)
          }
          const onLeave = () => {
            moveX(0)
            moveY(0)
          }
          element.addEventListener("pointermove", onMove)
          element.addEventListener("pointerleave", onLeave)
          listeners.push(() => {
            element.removeEventListener("pointermove", onMove)
            element.removeEventListener("pointerleave", onLeave)
          })
        })

        gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((element) => {
          element.style.perspective = "900px"
          const rotateX = gsap.quickTo(element, "rotationX", { duration: 0.4, ease: "power3" })
          const rotateY = gsap.quickTo(element, "rotationY", { duration: 0.4, ease: "power3" })
          const onMove = (event: PointerEvent) => {
            const rect = element.getBoundingClientRect()
            rotateX(((event.clientY - rect.top) / rect.height - 0.5) * -12)
            rotateY(((event.clientX - rect.left) / rect.width - 0.5) * 12)
          }
          const onLeave = () => {
            rotateX(0)
            rotateY(0)
          }
          element.addEventListener("pointermove", onMove)
          element.addEventListener("pointerleave", onLeave)
          listeners.push(() => {
            element.removeEventListener("pointermove", onMove)
            element.removeEventListener("pointerleave", onLeave)
          })
        })

        return () => listeners.forEach((remove) => remove())
      })

      // Pinned horizontal project reel on wide screens; normal grid on mobile.
      const media = gsap.matchMedia()
      media.add("(min-width: 1024px)", () => {
        const section = root.querySelector<HTMLElement>("[data-horizontal]")
        const track = section?.querySelector<HTMLElement>("[data-horizontal-track]")
        if (!section || !track) return

        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80)
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 0,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        })
        return () => tween.kill()
      })

      ScrollTrigger.refresh()
      document.fonts?.ready.then(() => ScrollTrigger.refresh())

      return () => {
        media.revert()
        pointerMedia.revert()
      }
    },
    { scope, revertOnUpdate: true },
  )

  return <div ref={scope}>{children}</div>
}
