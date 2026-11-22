import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { formatPostDate, getPost, posts } from "@/lib/blog"
import { absoluteUrl } from "@/lib/site-config"

export const dynamicParams = false

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const Content = post.Content

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-8">
      <Link
        href="/blog"
        data-cursor="back"
        className="mb-12 inline-flex items-center gap-2 border-2 border-foreground bg-card px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0_0_var(--shadow)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_var(--shadow)]"
      >
        <Icon name="arrowLeft" className="size-4" />
        Back to blog
      </Link>

      <header data-arrival className="mb-10">
        <Badge tone="secondary" className="mb-5 w-fit">
          {formatPostDate(post.date)}
        </Badge>
        <h1 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-base font-semibold text-muted-foreground">
          {post.description}
        </p>
      </header>

      <article className="brutal-card p-6 sm:p-10">
        <Content />
      </article>
    </div>
  )
}
