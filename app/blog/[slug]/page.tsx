import FirstPost from "../first-post.mdx"
import { notFound } from "next/navigation"

const posts: Record<string, React.ComponentType> = {
  "first-post": FirstPost,
}

interface PostProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params

  const Content = posts[slug]

  if (!Content) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-20 max-w-3xl sm:px-8">
      <Content />
    </article>
  )
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}
