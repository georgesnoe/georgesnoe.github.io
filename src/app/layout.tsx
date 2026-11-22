import type { Metadata, Viewport } from "next"
import { Gabarito, Geist_Mono } from "next/font/google"
import Script from "next/script"

import "./globals.css"

import { AchievementLayer } from "@/components/chrome/achievement-layer"
import { CustomCursor } from "@/components/chrome/custom-cursor"
import { CustomScrollbar } from "@/components/chrome/custom-scrollbar"
import { Footer } from "@/components/chrome/footer"
import { Navbar } from "@/components/chrome/navbar"
import { MobileDock } from "@/components/chrome/mobile-dock"
import { PageTransition } from "@/components/chrome/page-transition"
import { ScrollLevel } from "@/components/chrome/scroll-level"
import { SmoothScroll } from "@/components/chrome/smooth-scroll"
import { ThemeProvider } from "@/components/chrome/theme-provider"
import { siteConfig } from "@/lib/site-config"

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Developer Portfolio",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3e8" },
    { media: "(prefers-color-scheme: dark)", color: "#23232e" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${gabarito.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`RSS Feed for ${siteConfig.siteName}`}
          href="/feed.xml"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${siteConfig.analyticsId}');`}
        </Script>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <PageTransition>
            <SmoothScroll />
            <CustomCursor />
            <CustomScrollbar />
            <ScrollLevel />
            <AchievementLayer />
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pb-20 md:pb-0">{children}</main>
              <Footer />
            </div>
            <MobileDock />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
