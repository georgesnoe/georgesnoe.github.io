import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-black uppercase tracking-tighter lg:text-5xl mb-8 border-b-3 border-foreground pb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 border-l-4 border-primary pl-4 text-3xl font-black uppercase tracking-tight first:mt-0 mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-2xl font-bold tracking-tight mt-10 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 text-base font-medium [&:not(:first-child)]:mt-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2 marker:text-primary">
        {children}
      </ul>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm font-bold bg-secondary px-1.5 py-0.5 border-2 border-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <div className="group relative mb-6 mt-8 overflow-hidden border-3 border-foreground bg-zinc-950 shadow-[6px_6px_0px_0px] shadow-foreground">
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b-3 border-foreground">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 border-2 border-foreground bg-red-500" />
            <div className="h-3 w-3 border-2 border-foreground bg-amber-500" />
            <div className="h-3 w-3 border-2 border-foreground bg-emerald-500" />
          </div>
          <span className="text-xs text-zinc-500 font-mono font-bold uppercase">code</span>
        </div>
        <pre className="overflow-x-auto p-5 text-zinc-100 font-mono text-sm leading-relaxed">
          {children}
        </pre>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 text-lg font-bold italic bg-secondary/30 py-2 pr-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-t-3 border-foreground" />,
    ...components,
  }
}
