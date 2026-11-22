// Augments the `*.mdx` module declared by @types/mdx with our post metadata export.
declare module "*.mdx" {
  export interface PostMetadata {
    title: string
    description: string
    date: string
  }

  export const metadata: PostMetadata
}
