import withMdx from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    unoptimized: true,
  },
}

export default withMdx({
  extension: /\.(md|mdx)$/,
})(nextConfig)
