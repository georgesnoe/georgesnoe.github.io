import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import { personalInfo } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t-3 border-foreground bg-white py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-7xl mx-auto px-4 sm:px-8">
        <p className="text-balance text-center text-sm font-medium leading-loose text-foreground md:text-left">
          Built by{" "}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-1.5 py-0.5 border-2 border-foreground bg-primary text-primary-foreground font-bold no-underline hover:bg-primary/90"
          >
            {personalInfo.name}
          </a>
          . The source code is available on{" "}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-1.5 py-0.5 border-2 border-foreground bg-secondary text-secondary-foreground font-bold no-underline hover:bg-secondary/90"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-3">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px] shadow-foreground transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
            <IconBrandGithub className="h-4 w-4" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px] shadow-foreground transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
            <IconBrandLinkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="flex h-9 w-9 items-center justify-center border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px] shadow-foreground transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
            <IconMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
