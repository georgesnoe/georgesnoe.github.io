import { Geist_Mono, Manrope } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Kossi Georges-Noé AHOMBO | Full Stack Software Engineer",
    template: "%s | Georges-Noé",
  },
  description:
    "Software Engineer & Information Systems student passionate about building clean, scalable, and well-crafted digital products.",
  keywords: [
    "Software Engineer",
    "Full Stack",
    "Next.js",
    "TypeScript",
    "Lomé, Togo",
  ],
  authors: [{ name: "Kossi Georges-Noé AHOMBO" }],
  openGraph: {
    title: "Kossi Georges-Noé AHOMBO",
    description:
      "Software Engineer & Information Systems student passionate about building clean, scalable, and well-crafted digital products.",
    url: "https://www.georgesnoe.fr.eu.org",
    siteName: "Georges-Noé Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: "#6366f1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        manrope.variable
      )}
    >
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-primary/10 selection:text-primary">
        <ThemeProvider>
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
