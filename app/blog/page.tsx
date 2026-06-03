import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { Metadata } from "next"
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog | Georges-Noé",
  description: "Thoughts on development, design, and technology.",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl sm:px-8">
      <FadeIn>
        <div className="flex flex-col gap-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on development, design, and technology.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.1}>
            <Link href={`/blog/${post.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors border-muted-foreground/10">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
