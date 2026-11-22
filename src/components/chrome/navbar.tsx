"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

import { useAchievementStats } from "@/components/chrome/achievement-layer"
import { Icon } from "@/components/ui/icon"
import { siteConfig } from "@/lib/site-config"
import { unlock } from "@/lib/achievements"
import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const panel = useRef<HTMLDivElement>(null)
  const logoClicks = useRef(0)
  const { resolvedTheme, setTheme } = useTheme()
  const { xp, total } = useAchievementStats()

  useEffect(() => {
    const element = panel.current
    if (!element) return
    if (open) {
      gsap.fromTo(
        element,
        { y: -16, clipPath: "inset(0 0 100% 0)" },
        { y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.4, ease: "expo.out" },
      )
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    unlock("themeToggle")
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b-3 border-foreground bg-secondary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          data-cursor="home"
          onClick={() => {
            logoClicks.current += 1
            if (logoClicks.current >= 5) {
              logoClicks.current = 0
              unlock("secret")
            }
          }}
          className="flex items-center gap-2 transition-transform hover:-translate-y-0.5"
        >
          <span className="flex size-9 items-center justify-center border-3 border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--shadow)]">
            <Icon name="terminal" className="size-5" />
          </span>
          <span className="text-base font-black uppercase tracking-tight">
            {siteConfig.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <span
            title="XP collected"
            data-cursor="true"
            className="label-chip border-foreground bg-card text-[0.6rem]"
          >
            <Icon name="trophy" className="size-3.5" />
            {xp}/{total} XP
          </span>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-cursor="go"
              className="border-2 border-transparent px-3 py-1.5 text-sm font-black uppercase transition-all hover:border-foreground hover:bg-card hover:shadow-[3px_3px_0_0_var(--shadow)]"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            data-cursor="theme"
            aria-label="Toggle theme (D)"
            title="Toggle theme · D"
            className="flex size-11 items-center justify-center border-3 border-foreground bg-card shadow-[3px_3px_0_0_var(--shadow)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:size-10"
          >
            <Icon name={resolvedTheme === "dark" ? "sun" : "moon"} className="size-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-11 items-center justify-center border-3 border-foreground bg-card shadow-[3px_3px_0_0_var(--shadow)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
        >
          <Icon name={open ? "x" : "menu"} className="size-5" />
        </button>
      </div>

      {open && (
        <div
          ref={panel}
          className="absolute left-0 top-full w-full border-b-3 border-foreground bg-card shadow-[0_8px_0_0_var(--shadow)] md:hidden"
        >
          <div className="flex flex-col gap-2 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-3 border-foreground bg-secondary px-4 py-3 text-base font-black uppercase shadow-[4px_4px_0_0_var(--shadow)]",
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleTheme()
                setOpen(false)
              }}
              className="flex items-center justify-center gap-2 border-3 border-foreground bg-primary px-4 py-3 text-base font-black uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--shadow)]"
            >
              <Icon name={resolvedTheme === "dark" ? "sun" : "moon"} className="size-4" />
              Toggle theme
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
