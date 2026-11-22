import type { ComponentType } from "react"

import ShadcnPost, {
  metadata as shadcnMeta,
} from "@/content/blog/how-i-forced-shadcn-into-neo-brutalism-in-one-night-before-a-job-dating.mdx"
import TechIdiocracy, {
  metadata as techIdiocracyMeta,
} from "@/content/blog/the-tech-idiocracy-how-the-ai-hype-is-making-us-dumber.mdx"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  Content: ComponentType
}

/**
 * One registry, derived from the `metadata` export of each MDX file.
 * The blog index, post pages, sitemap and RSS all consume this — no duplicates.
 */
export const posts: BlogPost[] = [
  { slug: "the-tech-idiocracy-how-the-ai-hype-is-making-us-dumber", ...techIdiocracyMeta, Content: TechIdiocracy },
  {
    slug: "how-i-forced-shadcn-into-neo-brutalism-in-one-night-before-a-job-dating",
    ...shadcnMeta,
    Content: ShadcnPost,
  },
].sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`))
}
