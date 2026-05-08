import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import { personalInfo } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-7xl mx-auto px-4 sm:px-8">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {personalInfo.name}
          </a>
          . The source code is available on{" "}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            <IconBrandGithub className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            <IconBrandLinkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            <IconMail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}
