import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {children}
      </ul>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm font-semibold">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <div className="group relative mb-4 mt-6 overflow-hidden rounded-xl border border-border/50 bg-zinc-950 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs text-zinc-500 font-mono">code</span>
        </div>
        <pre className="overflow-x-auto p-4 text-zinc-100 font-mono text-sm leading-relaxed">
          {children}
        </pre>
      </div>
    ),
    ...components,
  }
}
