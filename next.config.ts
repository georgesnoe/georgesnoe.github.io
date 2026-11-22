import createMDX from "@next/mdx"
import type { NextConfig } from "next"

/**
 * Static export (GitHub Pages) + local MDX.
 * MDX files are compiled by @next/mdx; each post exports its own `metadata`,
 * which is the single source of truth for titles/dates in the index, RSS and SEO.
 */
const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: { unoptimized: true },
  reactCompiler: true,
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
