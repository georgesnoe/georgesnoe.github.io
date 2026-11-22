import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { ProjectCard } from "@/components/sections/project-card"
import { projects } from "@/content/site"

export function Projects() {
  return (
    <section
      id="projects"
      data-horizontal
      className="relative border-y-3 border-foreground bg-muted py-24 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden lg:py-16"
    >
      <div className="pixel-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div data-reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Badge tone="primary" className="-rotate-1">
              <Icon name="layers" className="size-3.5" />
              Quest log
            </Badge>
            <h2 className="mt-4 text-5xl font-black uppercase tracking-tighter sm:text-6xl">
              Selected builds
            </h2>
            <p className="mt-3 max-w-xl text-sm font-semibold text-muted-foreground">
              Things I designed, broke, fixed and shipped. Tap a card to inspect
              it — on desktop, keep scrolling to move the reel sideways.
            </p>
          </div>
          <span className="hidden font-mono text-xs font-bold uppercase tracking-widest lg:block">
            ← drag with the scroll wheel →
          </span>
        </div>
      </div>

      <div
        data-horizontal-track
        className="relative z-10 grid grid-cols-1 gap-7 px-4 sm:grid-cols-2 lg:flex lg:w-max lg:gap-8 lg:px-[8vw]"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
