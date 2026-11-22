import type { Metadata } from "next"

import { TransitionLink } from "@/components/fx/transition-link"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { formatPostDate, posts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes on development, design, and technology.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-8">
      <div data-reveal className="mb-16">
        <Badge tone="primary" className="-rotate-1">
          <Icon name="article" className="size-3.5" />
          Field notes
        </Badge>
        <h1 className="mt-4 text-5xl font-black uppercase leading-none tracking-tighter sm:text-7xl">
          Thoughts &amp; ideas
        </h1>
        <p className="mt-4 max-w-xl text-base font-semibold text-muted-foreground">
          Notes on development, design, technology — and the occasional rant.
        </p>
      </div>

      <div className="grid gap-7">
        {posts.map((post, index) => (
          <div key={post.slug} data-reveal data-reveal-delay={index * 0.08}>
            <TransitionLink
              href={`/blog/${post.slug}`}
              flight={{
                kind: "blog",
                title: post.title,
                description: post.description,
                date: formatPostDate(post.date),
              }}
              data-cursor="read"
              className="group block"
            >
              <Card className="transition-all group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[3px_3px_0_0_var(--shadow)]">
                <CardHeader>
                  <Badge tone="secondary" className="w-fit text-[0.6rem]">
                    {formatPostDate(post.date)}
                  </Badge>
                  <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-black uppercase text-primary">
                    Read post
                    <Icon name="arrowUpRight" className="size-3.5" />
                  </span>
                </CardHeader>
              </Card>
            </TransitionLink>
          </div>
        ))}
      </div>
    </div>
  )
}
