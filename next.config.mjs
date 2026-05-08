import { createMDX } from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    unoptimized: true,
  },
}

const withMdx = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMdx(nextConfig)
