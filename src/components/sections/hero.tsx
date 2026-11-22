import { AnchorButton, LinkButton } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { SplitText } from "@/components/fx/split-text"
import { personalInfo, projects, skills } from "@/content/site"
import { posts } from "@/lib/blog"

export function Hero() {
  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-8">
      <div className="pixel-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        data-parallax="0.12"
        className="pointer-events-none absolute -right-24 top-24 size-80 rotate-12 border-[12px] border-foreground bg-secondary/40 shadow-[16px_16px_0_0_var(--shadow)]"
        aria-hidden="true"
      />
      <div
        data-parallax="-0.08"
        className="pointer-events-none absolute -left-20 bottom-16 size-52 -rotate-12 border-[10px] border-foreground bg-primary/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl text-center">
        <Badge tone="secondary" className="animate-float" data-reveal>
          <Icon name="sparkles" className="size-3.5" />
          Available for new quests
        </Badge>

        <h1 className="mx-auto mt-8 max-w-6xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          <SplitText text="I build digital" />
          <br />
          <span className="inline-block -rotate-1 bg-primary px-4 py-1 text-primary-foreground shadow-[8px_8px_0_0_var(--shadow)]">
            <SplitText text="experiences" />
          </span>
          <br />
          <SplitText text="that matter." />
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-base font-semibold leading-relaxed text-muted-foreground sm:text-lg">
          Hi, I&apos;m{" "}
          <span className="font-black text-foreground underline decoration-4 decoration-primary underline-offset-4">
            {personalInfo.name}
          </span>
          . {personalInfo.bio}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <LinkButton
            href="#contact"
            size="lg"
            data-magnetic
            data-cursor="hello"
            className="[&_svg]:size-5"
          >
            <Icon name="send" />
            Get in touch
          </LinkButton>
          <AnchorButton
            href="#projects"
            variant="outline"
            size="lg"
            data-magnetic
            data-cursor="explore"
            className="[&_svg]:size-5"
          >
            <Icon name="layers" />
            View work
          </AnchorButton>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t-3 border-foreground pt-6">
          {[
            { value: projects.length, label: "Projects shipped" },
            { value: skills.length, label: "Skills in the arsenal" },
            { value: posts.length, label: "Field notes" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span
                data-count={stat.value}
                className="font-mono text-3xl font-black text-primary"
              >
                0
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-1 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
          <span>Scroll to start</span>
          <Icon name="arrowDown" className="animate-float size-5 text-primary" />
        </div>
      </div>
    </section>
  )
}
