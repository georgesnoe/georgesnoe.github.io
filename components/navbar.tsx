"use client"

import Link from "next/link"
import { IconTerminal2, IconMenu2, IconX } from "@tabler/icons-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Close menu on route change / link click
  const handleLinkClick = () => setOpen(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <nav className="sticky top-0 z-50 w-full border-b-3 border-foreground bg-secondary">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 transition-all hover:-translate-y-0.5">
          <div className="flex h-9 w-9 items-center justify-center border-3 border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0px_0px] shadow-foreground">
            <IconTerminal2 className="h-5 w-5" />
          </div>
          <span className="inline-block text-base font-black uppercase tracking-tight">Georges-Noé</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 border-2 border-transparent text-foreground transition-all hover:border-foreground hover:bg-white hover:shadow-[3px_3px_0px_0px] hover:shadow-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden h-10 w-10 items-center justify-center border-3 border-foreground bg-white shadow-[3px_3px_0px_0px] shadow-foreground active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full border-b-3 border-foreground bg-white shadow-[0_8px_0px_0px] shadow-foreground md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block border-3 border-foreground bg-secondary px-4 py-3 text-base font-black uppercase tracking-tight text-foreground transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shadow-[4px_4px_0px_0px] shadow-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
