"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { IconSun, IconMoon, IconTerminal2 } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <IconTerminal2 className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold tracking-tight">Georges-Noé</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/#projects"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}
