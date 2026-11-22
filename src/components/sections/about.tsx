import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { experience, funFacts, personalInfo, skills } from "@/content/site"

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-500",
  Backend: "bg-emerald-500",
  Database: "bg-purple-500",
  ORM: "bg-orange-500",
  Mobile: "bg-cyan-500",
  Web3: "bg-pink-500",
}

export function About() {
  return (
    <section id="about" className="border-y-3 border-foreground bg-card py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-4 sm:px-8 lg:grid-cols-2">
        <div className="space-y-12">
          <div data-reveal>
            <Badge tone="accent" className="rotate-1">
              <Icon name="code" className="size-3.5" />
              Player profile
            </Badge>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none tracking-tighter sm:text-6xl">
              The mind behind
              <br /> the pixels.
            </h2>
          </div>

          <div
            data-reveal
            className="space-y-5 text-base font-medium leading-relaxed text-muted-foreground"
          >
            {personalInfo.detailedBio
              .split("\n\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
          </div>

          <div data-reveal>
            <h3 className="mb-6 inline-block border-2 border-foreground bg-secondary px-4 py-1.5 text-lg font-black uppercase text-secondary-foreground">
              Skill tree
            </h3>
            <ul className="grid gap-4">
              {skills.map((skill, index) => (
                <li key={skill.name} data-reveal data-reveal-delay={index * 0.025}>
                  <div className="mb-1 flex items-baseline justify-between gap-3 text-xs font-black uppercase">
                    <span>{skill.name}</span>
                    <span className="font-mono text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 border-2 border-foreground bg-muted">
                    <div
                      data-charge={`${skill.level}%`}
                      className={`h-full w-0 ${categoryColors[skill.category] ?? "bg-primary"}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-12">
          <div data-reveal>
            <Badge tone="secondary" className="-rotate-1">
              <Icon name="briefcase" className="size-3.5" />
              Experience
            </Badge>
          </div>
          <ol className="relative space-y-8 border-l-4 border-foreground pl-8">
            {experience.map((item, index) => (
              <li
                key={item.company}
                data-reveal
                data-reveal-delay={index * 0.1}
                className="brutal-card p-6"
              >
                <span className="inline-block border-2 border-foreground bg-secondary px-2 py-1 font-mono text-[0.65rem] font-black uppercase text-secondary-foreground">
                  {item.period}
                </span>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-primary">
                  {item.role}
                </h3>
                <p className="mt-1 border-b-2 border-foreground/20 pb-3 text-sm font-black uppercase">
                  {item.company}
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <div data-reveal>
            <h3 className="mb-6 inline-block border-2 border-foreground bg-accent px-4 py-1.5 text-lg font-black uppercase text-accent-foreground">
              Fun facts
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {funFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-2 border-foreground bg-card p-4 shadow-[4px_4px_0_0_var(--shadow)]"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-[0.65rem] font-black uppercase tracking-wider">
                      {fact.label}
                    </span>
                    <span className="bg-primary px-2 py-0.5 font-mono text-[0.65rem] font-black text-primary-foreground">
                      {fact.value}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
