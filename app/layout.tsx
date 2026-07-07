import { Geist_Mono, Rubik } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import Script from "next/script"
import { generateRssFeed } from "@/lib/generate-rss"
import { blogPosts } from "@/lib/blog"

const manrope = Rubik({ subsets: ["latin"], variable: "--font-sans" })

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
    "FullStack",
    "Frontend",
    "Backend",
    "Next.js",
    "TypeScript",
    "Lomé",
    "Togo",
    "Developer",
    "Portfolio",
    "Database"
  ],
  authors: { name: "Kossi Georges-Noé AHOMBO", url: "https://georgesnoe.fr.eu.org" },
  openGraph: {
    title: "Kossi Georges-Noé AHOMBO",
    description:
      "Software Engineer & Information Systems student passionate about building clean, scalable, and well-crafted digital products.",
    url: "https://georgesnoe.fr.eu.org",
    siteName: "Georges-Noé Portfolio",
    locale: "en_US",
    type: "website",
    countryName: "Togo",
  },
  robots: {
    index: true,
    follow: true,
  },
  creator: "Kossi Georges-Noé AHOMBO",
  referrer: "origin",
  verification: {
    google: ""
  },
  category: "Developer Portfolio",
}

export const viewport = {
  themeColor: "#6366f1",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // One time generation of RSS feed during build.
  await generateRssFeed(blogPosts)

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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ENV9HMRE0E" />
        <Script children={`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ENV9HMRE0E');`} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for My Next.js Blog"
          href="/feed.xml"
        />
      </head>
      <body lang="en" className="min-h-screen bg-background font-sans antialiased selection:bg-primary/10 selection:text-primary">
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
