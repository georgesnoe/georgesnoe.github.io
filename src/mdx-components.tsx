import type { MDXComponents } from "mdx/types"

/** Global MDX styling — the blog articles stay on-brand without per-post CSS. */
export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-8 border-b-3 border-foreground pb-4 text-4xl font-black uppercase tracking-tighter">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-5 border-l-4 border-primary pl-4 text-2xl font-black uppercase tracking-tight first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-9 mb-3 text-xl font-black uppercase tracking-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-5 text-[0.95rem] font-medium leading-7 first:mt-0">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="bg-secondary px-1 font-black text-secondary-foreground">
        {children}
      </strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-bold text-primary underline decoration-2 underline-offset-4"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc space-y-2 marker:text-primary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-2 marker:font-black marker:text-primary">
        {children}
      </ol>
    ),
    code: ({ children }) => (
      <code className="border-2 border-foreground bg-secondary px-1.5 py-0.5 font-mono text-sm font-bold text-secondary-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <div className="my-8 overflow-hidden border-3 border-foreground bg-zinc-950 shadow-[6px_6px_0_0_var(--shadow)]">
        <div className="flex items-center gap-1.5 border-b-3 border-foreground bg-zinc-900 px-4 py-2.5">
          <span className="size-3 border-2 border-foreground bg-red-500" />
          <span className="size-3 border-2 border-foreground bg-amber-500" />
          <span className="size-3 border-2 border-foreground bg-emerald-500" />
          <span className="ml-auto font-mono text-xs font-bold uppercase text-zinc-500">
            code
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-zinc-100">
          {children}
        </pre>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary bg-secondary/30 py-2 pl-4 pr-4 text-base font-bold italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-t-3 border-foreground" />,
    ...components,
  }
}
