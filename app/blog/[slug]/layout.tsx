import { Metadata } from "next"
import { blogPosts } from "@/lib/blog"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params

    const post = blogPosts.find(p => p.slug === slug)

    return {
        title: `${post?.title || "Blog Post"} | Georges-Noé`,
        description: `${post?.description || "Read more about this topic on Georges-Noé's blog."}`,
    }
}

export default function BlogPostLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return children
}