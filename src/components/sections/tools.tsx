import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { toolsSetup } from "@/content/site"

export function Tools() {
  const marqueeItems = [...toolsSetup, ...toolsSetup]

  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div data-reveal className="mb-12 text-center">
          <Badge tone="secondary" className="rotate-1">
            <Icon name="command" className="size-3.5" />
            Loadout
          </Badge>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-tighter sm:text-6xl">
            My workspace
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold text-muted-foreground">
            The tools and technologies I use to stay productive and build
            high-quality software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolsSetup.map((tool, index) => (
            <Card
              key={tool.name}
              data-reveal
              data-reveal-delay={index * 0.08}
              data-tilt
              data-cursor="config"
              className="h-full"
            >
              <CardHeader>
                <CardTitle>{tool.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>
                {tool.link && (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="dotfiles"
                    className="inline-flex items-center gap-1 text-xs font-black uppercase underline decoration-2 decoration-primary underline-offset-4"
                  >
                    View config
                    <Icon name="arrowUpRight" className="size-3.5" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-20 flex rotate-[-2deg] border-y-3 border-foreground bg-secondary py-4">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {marqueeItems.map((tool, index) => (
            <span
              key={`${tool.name}-${index}`}
              className="flex items-center gap-3 text-xl font-black uppercase tracking-tight text-secondary-foreground"
            >
              <Icon name="sparkles" className="size-4" />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
