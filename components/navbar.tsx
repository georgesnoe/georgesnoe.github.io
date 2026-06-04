"use client"

import Link from "next/link"
import { IconTerminal2 } from "@tabler/icons-react"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-3 border-foreground bg-secondary">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 transition-all hover:-translate-y-0.5">
            <div className="flex h-9 w-9 items-center justify-center border-3 border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0px_0px] shadow-foreground">
              <IconTerminal2 className="h-5 w-5" />
            </div>
            <span className="inline-block text-base font-black uppercase tracking-tight">Georges-Noé</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6 text-sm font-bold uppercase">
            <Link
              href="/#projects"
              className="relative px-3 py-1.5 border-2 border-transparent text-foreground transition-all hover:border-foreground hover:bg-white hover:shadow-[3px_3px_0px_0px] hover:shadow-foreground"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="relative px-3 py-1.5 border-2 border-transparent text-foreground transition-all hover:border-foreground hover:bg-white hover:shadow-[3px_3px_0px_0px] hover:shadow-foreground"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="relative px-3 py-1.5 border-2 border-transparent text-foreground transition-all hover:border-foreground hover:bg-white hover:shadow-[3px_3px_0px_0px] hover:shadow-foreground"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}
