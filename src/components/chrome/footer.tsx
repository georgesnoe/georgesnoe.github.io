import { Icon } from "@/components/ui/icon"
import { personalInfo } from "@/content/site"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t-3 border-foreground bg-card pb-28 pt-8 md:pb-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-8 md:flex-row">
        <p className="max-w-xl text-center text-sm font-medium leading-relaxed md:text-left">
          Built by{" "}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="linkedin"
            className="border-2 border-foreground bg-primary px-1.5 py-0.5 font-black text-primary-foreground hover:brightness-110"
          >
            {personalInfo.name}
          </a>
          . No frameworks were harmed in the making of this site — just React,
          GSAP and a lot of coffee. Source on{" "}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="github"
            className="border-2 border-foreground bg-secondary px-1.5 py-0.5 font-black text-secondary-foreground hover:brightness-105"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: siteConfig.github, icon: "github" as const, label: "GitHub" },
            { href: siteConfig.linkedin, icon: "linkedin" as const, label: "LinkedIn" },
            { href: `mailto:${siteConfig.email}`, icon: "mail" as const, label: "Email" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={item.label}
              data-cursor={item.label}
              className="flex size-10 items-center justify-center border-2 border-foreground bg-background shadow-[2px_2px_0_0_var(--shadow)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            >
              <Icon name={item.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
