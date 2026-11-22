import { Icon } from "@/components/ui/icon"
import { currentFocus } from "@/content/site"

export function Focus() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-8">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {currentFocus.map((focus, index) => (
          <article
            key={focus.title}
            data-reveal
            data-reveal-delay={index * 0.08}
            data-tilt
            data-cursor="level up"
            className="brutal-card p-7 transition-shadow hover:shadow-[12px_12px_0_0_var(--shadow)]"
          >
            <span className="flex size-14 items-center justify-center border-3 border-foreground bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_var(--shadow)]">
              <Icon name={focus.icon} className="size-7" />
            </span>
            <span className="mt-4 font-mono text-xs font-bold text-muted-foreground">
              0{index + 1} / FOCUS
            </span>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight">
              {focus.title}
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
              {focus.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
