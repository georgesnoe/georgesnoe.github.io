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
          <div className="h-4 w-px bg-border/60" />
          <DropdownMenu>
            <DropdownMenuTrigger
              render={(props) => (
                <Button variant="ghost" size="icon" className="h-9 w-9" {...props}>
                  <IconSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <IconMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}
            />
            <DropdownMenuContent align="end" className="min-w-32">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
