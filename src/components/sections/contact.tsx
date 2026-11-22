import { ContactForm } from "@/components/sections/contact-form"
import { Card } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { personalInfo } from "@/content/site"

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-32 sm:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div data-reveal className="space-y-7">
          <h2 className="text-5xl font-black uppercase leading-none tracking-tighter sm:text-6xl">
            Get in{" "}
            <span className="inline-block -rotate-1 bg-primary px-3 py-1 text-primary-foreground shadow-[6px_6px_0_0_var(--shadow)]">
              touch
            </span>
          </h2>
          <p className="max-w-md text-base font-semibold leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hi? I&apos;m always open
            to discussing new opportunities and collaborations.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              data-cursor="email"
              className="flex items-center gap-3 text-base font-black transition-transform hover:translate-x-1"
            >
              <span className="flex size-11 shrink-0 items-center justify-center border-2 border-foreground bg-primary text-primary-foreground">
                <Icon name="mail" className="size-5" />
              </span>
              <span className="break-all underline decoration-2 decoration-primary underline-offset-4">
                {personalInfo.email}
              </span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="linkedin"
              className="flex items-center gap-3 text-base font-black uppercase transition-transform hover:translate-x-1"
            >
              <span className="flex size-11 shrink-0 items-center justify-center border-2 border-foreground bg-accent text-accent-foreground">
                <Icon name="linkedin" className="size-5" />
              </span>
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="github"
              className="flex items-center gap-3 text-base font-black uppercase transition-transform hover:translate-x-1"
            >
              <span className="flex size-11 shrink-0 items-center justify-center border-2 border-foreground bg-secondary text-secondary-foreground">
                <Icon name="github" className="size-5" />
              </span>
              GitHub
            </a>
          </div>
        </div>

        <Card data-reveal data-reveal-delay={0.15} className="p-6 sm:p-8">
          <ContactForm />
        </Card>
      </div>
    </section>
  )
}
