import RSS from "rss"

import { posts } from "@/lib/blog"
import { absoluteUrl, siteConfig } from "@/lib/site-config"

export const dynamic = "force-static"

/** Build-time generated RSS. Static export writes this to /feed.xml. */
export function GET() {
  const feed = new RSS({
    title: `${siteConfig.shortName} — Notes on code & chaos`,
    description: siteConfig.description,
    feed_url: absoluteUrl("/feed.xml"),
    site_url: absoluteUrl("/"),
    language: "en",
    managingEditor: siteConfig.email,
    webMaster: siteConfig.email,
    copyright: `© ${new Date().getUTCFullYear()} ${siteConfig.name}`,
    pubDate: new Date().toUTCString(),
    categories: ["Software Engineering", "Web Development", "Design"],
  })

  for (const post of posts) {
    feed.item({
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      guid: absoluteUrl(`/blog/${post.slug}`),
      date: post.date,
      categories: ["Blog"],
    })
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
