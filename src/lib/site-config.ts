/**
 * The single source of truth for every URL, identity and external id.
 * SEO metadata, sitemap, robots, RSS, OpenGraph and the UI all read from here.
 */
export const siteConfig = {
  name: "Kossi Georges-Noé AHOMBO",
  shortName: "Georges-Noé",
  role: "Full Stack Software Engineer",
  title: "Kossi Georges-Noé AHOMBO | Full Stack Software Engineer",
  description:
    "Software Engineer & Information Systems student passionate about building clean, scalable, and well-crafted digital products.",
  url: "https://georgesnoe.github.io",
  siteName: "Georges-Noé Portfolio",
  locale: "en_US",
  email: "georges.ahombo@gmail.com",
  github: "https://github.com/georgesnoe",
  linkedin: "https://linkedin.com/in/kossigeorgesnoeahombo",
  location: "Lomé, Togo",
  analyticsId: "G-ENV9HMRE0E",
  keywords: [
    "Software Engineer",
    "FullStack",
    "Frontend",
    "Backend",
    "Next.js",
    "TypeScript",
    "GSAP",
    "Lomé",
    "Togo",
    "Developer",
    "Portfolio",
  ],
} as const

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString()
}
