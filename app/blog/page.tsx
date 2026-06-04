import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { Metadata } from "next"
import { blogPosts } from "@/lib/blog"
import { IconArticle } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "Blog | Georges-Noé",
  description: "Thoughts on development, design, and technology.",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl sm:px-8">
      <FadeIn>
        <div className="flex flex-col gap-4 mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-foreground bg-primary px-3 py-1.5 text-primary-foreground font-bold text-xs uppercase tracking-wider -rotate-1 w-fit">
            <IconArticle className="h-4 w-4" />
            <span>Blog</span>
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Thoughts &amp; Ideas
          </h1>
          <p className="text-lg font-medium text-foreground/70 max-w-xl">
            Thoughts on development, design, and technology.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.1}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <Card className="shadow-[6px_6px_0px_0px] shadow-foreground transition-all group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[3px_3px_0px_0px] group-hover:shadow-foreground">
                <CardHeader>
                  <div className="inline-block border-2 border-foreground bg-secondary px-2 py-0.5 text-xs font-bold uppercase mb-3 w-fit">
                    {post.date}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-base font-medium mt-1">{post.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
