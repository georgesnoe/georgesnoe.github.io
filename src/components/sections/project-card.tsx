"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { AchievementLink } from "@/components/fx/achievement-link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { gsap, useGSAP } from "@/lib/gsap"

export interface ProjectCardData {
  title: string
  description: string
  techStack: readonly string[]
  github: string
  live: string
  image: string
}

/** Card that FLIPs into a detail modal when clicked. */
export function ProjectCard({
  project,
  index,
}: {
  project: ProjectCardData
  index: number
}) {
  const card = useRef<HTMLDivElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const backdrop = useRef<HTMLDivElement>(null)
  const sourceRect = useRef<DOMRect | null>(null)
  const [open, setOpen] = useState(false)

  const dismiss = useCallback(() => {
    const element = panel.current
    const rect = sourceRect.current
    const finish = () => setOpen(false)

    if (
      !element ||
      !rect ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      finish()
      return
    }

    const target = element.getBoundingClientRect()
    const dx = rect.left + rect.width / 2 - (target.left + target.width / 2)
    const dy = rect.top + rect.height / 2 - (target.top + target.height / 2)

    gsap
      .timeline({ onComplete: finish })
      .to(element, {
        x: dx,
        y: dy,
        scaleX: rect.width / target.width,
        scaleY: rect.height / target.height,
        opacity: 0.5,
        duration: 0.42,
        ease: "power3.in",
      })
      .to(backdrop.current, { opacity: 0, duration: 0.35 }, "<")
  }, [])

  useGSAP(
    () => {
      if (!open || !panel.current || !sourceRect.current) return

      const element = panel.current
      const rect = sourceRect.current
      const target = element.getBoundingClientRect()
      const dx = rect.left + rect.width / 2 - (target.left + target.width / 2)
      const dy = rect.top + rect.height / 2 - (target.top + target.height / 2)

      const timeline = gsap
        .timeline()
        .fromTo(backdrop.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(
          element,
          {
            x: dx,
            y: dy,
            scaleX: rect.width / target.width,
            scaleY: rect.height / target.height,
            transformOrigin: "50% 50%",
            opacity: 0.85,
          },
          {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            duration: 0.65,
            ease: "expo.out",
          },
          "<",
        )

      return () => timeline.kill()
    },
    { dependencies: [open], revertOnUpdate: true },
  )

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, dismiss])

  return (
    <>
      <Card
        ref={card}
        data-tilt
        data-cursor="open"
        role="button"
        tabIndex={0}
        aria-label={`Open details for ${project.title}`}
        onClick={() => {
          sourceRect.current = card.current?.getBoundingClientRect() ?? null
          setOpen(true)
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            sourceRect.current = card.current?.getBoundingClientRect() ?? null
            setOpen(true)
          }
        }}
        className="w-full cursor-pointer transition-shadow hover:shadow-[12px_12px_0_0_var(--shadow)] lg:w-[380px] lg:shrink-0"
      >
        <div
          className="relative aspect-video border-b-3 border-foreground bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          role="img"
          aria-label={`${project.title} preview`}
        >
          <span className="absolute left-3 top-3 border-2 border-foreground bg-secondary px-2 py-1 font-mono text-xs font-black text-secondary-foreground">
            #{String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute bottom-3 right-3 flex items-center gap-1 border-2 border-foreground bg-card px-2 py-1 text-[0.6rem] font-black uppercase text-foreground">
            <Icon name="arrowUpRight" className="size-3" />
            Details
          </span>
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap content-start items-start gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} tone="outline" className="text-[0.6rem]">
              {tech}
            </Badge>
          ))}
        </CardContent>
        <CardFooter>
          <span className="text-xs font-black uppercase text-primary">
            Tap to inspect →
          </span>
        </CardFooter>
      </Card>

      {open && (
        <div className="fixed inset-0 z-[85] flex items-center justify-center sm:p-6">
          <div
            ref={backdrop}
            onClick={dismiss}
            className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="brutal-card relative z-10 max-h-full w-full overflow-y-auto overscroll-contain sm:max-h-[88vh] sm:w-[min(92vw,760px)]"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close details"
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center border-3 border-foreground bg-card shadow-[3px_3px_0_0_var(--shadow)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <Icon name="x" className="size-5" />
            </button>

            <div
              className="relative aspect-video border-b-3 border-foreground bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
              role="img"
              aria-label={`${project.title} preview`}
            >
              <span className="absolute left-4 top-4 border-2 border-foreground bg-secondary px-2 py-1 font-mono text-xs font-black text-secondary-foreground">
                BUILD #{String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="space-y-6 p-6 sm:p-9">
              <div>
                <span className="font-mono text-xs font-black uppercase tracking-widest text-primary">
                  Project brief
                </span>
                <h2 className="mt-2 text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                  {project.title}
                </h2>
              </div>

              <p className="text-base font-medium leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div>
                <h3 className="mb-3 text-xs font-black uppercase tracking-widest">
                  Tech stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} tone="secondary" className="text-[0.65rem]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <AchievementLink
                  achievement="projectVisit"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="code"
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 border-3 border-foreground bg-card px-4 text-sm font-black uppercase shadow-[4px_4px_0_0_var(--shadow)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <Icon name="github" />
                  Source code
                </AchievementLink>
                <AchievementLink
                  achievement="projectVisit"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="live"
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 border-3 border-foreground bg-primary px-4 text-sm font-black uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--shadow)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <Icon name="arrowUpRight" />
                  Open live
                </AchievementLink>
              </div>

              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
                Press ESC or tap outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
