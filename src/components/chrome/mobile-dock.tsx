"use client"

import { usePathname } from "next/navigation"

import { TransitionLink } from "@/components/fx/transition-link"
import { Icon, type IconName } from "@/components/ui/icon"
import { cn } from "@/lib/utils"

const items: Array<{ href: string; label: string; icon: IconName }> = [
  { href: "/", label: "Home", icon: "terminal" },
  { href: "/#projects", label: "Work", icon: "layers" },
  { href: "/#about", label: "About", icon: "code" },
  { href: "/blog", label: "Blog", icon: "article" },
]

/** Thumb-friendly bottom navigation for phones and small tablets. */
export function MobileDock() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t-3 border-foreground bg-secondary pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map((item) => {
          const active =
            item.href === "/blog"
              ? pathname.startsWith("/blog")
              : item.href === "/" && pathname === "/"

          return (
            <li key={item.href}>
              <TransitionLink
                href={item.href}
                data-cursor="true"
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-16 flex-col items-center justify-center gap-1 border-r-2 border-foreground/20 py-2 text-[0.6rem] font-black uppercase tracking-wider transition-colors last:border-r-0",
                  active ? "bg-primary text-primary-foreground" : "text-foreground",
                )}
              >
                <Icon name={item.icon} className="size-5" />
                {item.label}
              </TransitionLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
