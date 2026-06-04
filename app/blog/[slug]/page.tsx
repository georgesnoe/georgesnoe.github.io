import HowIForcedShadcnIntoNeoBrutalism from "../how-i-forced-shadcn-into-neo-brutalism-in-one-night-before-a-job-dating.mdx"
import TheTechIdiocracy from "../the-tech-idiocracy-how-the-ai-hype-is-making-us-dumber.mdx"
import { notFound } from "next/navigation"
import Link from "next/link"
import { IconArrowLeft } from "@tabler/icons-react"

const posts: Record<string, React.ComponentType> = {
  "how-i-forced-shadcn-into-neo-brutalism-in-one-night-before-a-job-dating": HowIForcedShadcnIntoNeoBrutalism,
  "the-tech-idiocracy-how-the-ai-hype-is-making-us-dumber": TheTechIdiocracy,
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
    <div className="container mx-auto px-4 py-20 max-w-3xl sm:px-8">
      <Link href="/blog" className="inline-flex items-center gap-2 border-2 border-foreground bg-white px-4 py-2 font-bold text-sm uppercase shadow-[3px_3px_0px_0px] shadow-foreground hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px] hover:shadow-foreground transition-all mb-12">
        <IconArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>
      <article className="border-3 border-foreground bg-white p-6 md:p-10 shadow-[8px_8px_0px_0px] shadow-foreground">
        <Content />
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}
