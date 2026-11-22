"use client"

import { usePathname, useRouter } from "next/navigation"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import { randomTip, type LoadingTip } from "@/lib/quotes"
import type { FlightPayload, FlightRequest } from "@/lib/transition"
import { cn } from "@/lib/utils"

type Navigate = (href: string, flight?: FlightRequest) => void

const TransitionContext = createContext<Navigate>(() => {})

export function useTransitionNavigate(): Navigate {
  return useContext(TransitionContext)
}

/** Full-screen loader with a random tip + flying card on post navigation. */
export function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [tip, setTip] = useState<LoadingTip>(randomTip)
  const [flight, setFlight] = useState<FlightPayload | null>(null)

  const overlay = useRef<HTMLDivElement>(null)
  const card = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  const tipBlock = useRef<HTMLDivElement>(null)
  const pendingPath = useRef<string | null>(null)
  const pendingHref = useRef<string | null>(null)
  const busy = useRef(false)
  const safetyTimer = useRef<number | null>(null)

  const exit = useCallback(() => {
    if (!busy.current) return
    busy.current = false
    pendingPath.current = null
    pendingHref.current = null
    if (safetyTimer.current) window.clearTimeout(safetyTimer.current)

    const element = overlay.current
    const arrival = document.querySelector<HTMLElement>("[data-arrival]")

    const finish = () => {
      setVisible(false)
      setFlight(null)
    }

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish()
      return
    }

    gsap
      .timeline({ onComplete: finish })
      .to(element, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.55,
        ease: "expo.inOut",
      })
      .to(card.current, { opacity: 0, scale: 0.9, duration: 0.3 }, "<")

    if (arrival) {
      gsap.fromTo(
        arrival,
        { clipPath: "inset(0 0 100% 0)", y: 32, scale: 0.98 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.25,
          ease: "expo.out",
        },
      )
    }
  }, [])

  const navigate = useCallback<Navigate>(
    (href, request) => {
      const targetPath = (href.split(/[?#]/)[0] || pathname).replace(/\/$/, "") || "/"

      // Same-page anchors (and identical routes) don't need a full transition.
      if (targetPath === pathname.replace(/\/$/, "")) {
        router.push(href)
        return
      }
      if (busy.current) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href)
        return
      }

      busy.current = true
      pendingPath.current = targetPath
      pendingHref.current = href
      setTip(randomTip())
      setFlight(
        request
          ? {
              ...request,
              rect: request.rect ?? {
                top: window.innerHeight / 2 - 120,
                left: window.innerWidth / 2 - 180,
                width: 360,
                height: 240,
              },
            }
          : null,
      )
      setVisible(true)

      // Never trap the user behind a stuck overlay.
      safetyTimer.current = window.setTimeout(exit, 5000)
    },
    [exit, pathname, router],
  )

  // Enter animation: reveal overlay, fly the card, fill the progress bar, then route.
  useGSAP(
    () => {
      if (!visible || !overlay.current) return

      document.body.style.overflow = "hidden"
      const timeline = gsap.timeline()
      timeline
        .fromTo(
          overlay.current,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 0.42, ease: "expo.out" },
        )
        .to(
          bar.current,
          { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
          0.08,
        )
        .fromTo(
          tipBlock.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          0.25,
        )

      if (flight && card.current) {
        const targetW = Math.min(760, Math.max(300, window.innerWidth * 0.8))
        const targetH = Math.min(420, Math.max(210, window.innerHeight * 0.42))
        timeline.to(
          card.current,
          {
            left: (window.innerWidth - targetW) / 2,
            top: (window.innerHeight - targetH) / 2 - 16,
            width: targetW,
            height: targetH,
            duration: 0.72,
            ease: "expo.inOut",
          },
          0.05,
        )
      }

      timeline.call(() => {
        if (pendingHref.current) router.push(pendingHref.current)
      })

      return () => {
        timeline.kill()
        document.body.style.overflow = ""
      }
    },
    { dependencies: [visible, flight], revertOnUpdate: true },
  )

  // Leave animation once the destination route has rendered.
  useEffect(() => {
    if (!pendingPath.current || pathname !== pendingPath.current) return
    const frame = window.requestAnimationFrame(() => {
      window.setTimeout(exit, 120)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, exit])

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      {visible && (
        <div
          ref={overlay}
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-foreground text-background"
          style={{ clipPath: "inset(100% 0 0 0)" }}
          role="status"
          aria-live="polite"
        >
          <div className="pixel-grid pointer-events-none absolute inset-0 opacity-20" />

          {flight && (
            <div
              ref={card}
              className="brutal-card pointer-events-none absolute overflow-hidden bg-card p-5 text-card-foreground"
              style={{
                left: flight.rect.left,
                top: flight.rect.top,
                width: flight.rect.width,
                height: flight.rect.height,
              }}
            >
              <span className="inline-block border-2 border-foreground bg-secondary px-2 py-1 font-mono text-[0.6rem] font-black uppercase text-secondary-foreground">
                {flight.date}
              </span>
              <span className="mt-4 block text-xl font-black uppercase leading-tight sm:text-2xl">
                {flight.title}
              </span>
              <span className="mt-3 hidden text-sm font-medium text-muted-foreground sm:block">
                {flight.description}
              </span>
            </div>
          )}

          <div className="relative z-10 flex flex-col items-center">
            <span className="font-mono text-[0.7rem] font-black uppercase tracking-[0.45em]">
              Loading level
            </span>
            <div className="mt-5 h-3 w-56 border-2 border-background bg-background/10 sm:w-72">
              <div
                ref={bar}
                className="loader-bar h-full w-full origin-left scale-x-0"
              />
            </div>
          </div>

          <div
            ref={tipBlock}
            className={cn(
              "absolute bottom-8 z-10 w-[min(90vw,640px)] px-4 text-center",
              "sm:bottom-12",
            )}
          >
            <span className="label-chip mx-auto w-fit border-background bg-primary px-2 py-1 text-[0.6rem] text-primary-foreground">
              {tip.tag} · {tip.source}
            </span>
            <p className="mt-3 text-sm font-black leading-snug sm:text-base">
              “{tip.text}”
            </p>
          </div>
        </div>
      )}
    </TransitionContext.Provider>
  )
}
