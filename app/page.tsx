"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
  IconMail,
  IconSend,
  IconMapPin,
  IconCommand,
  IconCode,
  IconBriefcase,
  IconLayout,
  IconNetwork,
  IconRobot,
  IconRocket,
} from "@tabler/icons-react"
import { FadeIn } from "@/components/fade-in"
import { projects, skills, experience, personalInfo, toolsSetup, currentFocus, funFacts } from "@/lib/data"
import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"

function BrutalSectionTitle({ icon, label, title, description }: { icon: React.ReactNode; label: string; title: string; description?: string }) {
  return (
    <div className="mb-12">
      <div className="inline-flex items-center gap-2 border-2 border-foreground bg-primary px-3 py-1.5 text-primary-foreground font-bold text-xs uppercase tracking-wider -rotate-1 mb-4">
        {icon}
        <span>{label}</span>
      </div>
      <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg font-medium text-foreground/70">
          {description}
        </p>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <div className="flex flex-col gap-32 pb-24 relative">

      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 pt-24 sm:px-8 md:pt-36">
        <FadeIn>
          <div className="flex flex-col items-center gap-8 text-center">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-bold uppercase"
            >
              Available for new projects
            </Badge>
            <h1 className="max-w-5xl text-5xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl leading-[0.9]">
              I build{" "}
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground -rotate-1">
                digital experiences
              </span>{" "}
              that matter.
            </h1>
            <p className="max-w-2xl text-lg font-medium md:text-xl">
              Hi, I&apos;m <span className="font-black underline decoration-4 decoration-primary underline-offset-4">{personalInfo.name}</span>. {personalInfo.bio}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="text-base uppercase font-black" render={(props) => <Link href="#contact" {...props} />}>
                <IconSend className="h-5 w-5" />
                Get in touch
              </Button>
              <Button variant="outline" size="lg" className="text-base uppercase font-black" render={(props) => <Link href="#projects" {...props} />}>
                View work
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase">
              <IconMapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Focus Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {currentFocus.map((focus, index) => (
            <FadeIn key={focus.title} delay={index * 0.1}>
              <div className="border-3 border-foreground bg-white p-6 shadow-[8px_8px_0px_0px] shadow-foreground transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px] hover:shadow-foreground">
                <div className="flex flex-col gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border-3 border-foreground bg-secondary text-secondary-foreground">
                    {focus.icon === "IconNetwork" && <IconNetwork className="h-7 w-7" />}
                    {focus.icon === "IconRobot" && <IconRobot className="h-7 w-7" />}
                    {focus.icon === "IconRocket" && <IconRocket className="h-7 w-7" />}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight">{focus.title}</h3>
                  <p className="text-foreground/70 font-medium leading-relaxed">{focus.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container mx-auto max-w-7xl px-4 sm:px-8"
      >
        <FadeIn>
          <BrutalSectionTitle
            icon={<IconLayout className="h-4 w-4" />}
            label="Portfolio"
            title="Selected Projects"
            description="A showcase of some of my recent work, focusing on clean architecture and performance."
          />
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="flex h-full flex-col overflow-hidden shadow-[8px_8px_0px_0px] shadow-foreground hover:shadow-[4px_4px_0px_0px] hover:shadow-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <div className="relative aspect-video border-b-3 border-foreground bg-muted overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-foreground/20 uppercase">
                        {project.title}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm font-medium">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3 pt-6">
                    <Button variant="outline" size="sm" className="flex-1 text-xs uppercase font-bold" render={(props) => (
                      <a href={project.github} target="_blank" rel="noreferrer" {...props}>
                        <IconBrandGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    )} />
                    <Button size="sm" className="flex-1 text-xs uppercase font-bold" render={(props) => (
                      <a href={project.live} target="_blank" rel="noreferrer" {...props}>
                        <IconExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    )} />
                  </CardFooter>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-y-3 border-foreground bg-muted py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-8 lg:grid-cols-2">
          <div className="space-y-10">
            <FadeIn>
              <BrutalSectionTitle
                icon={<IconCode className="h-4 w-4" />}
                label="About Me"
                title="The mind behind the code."
              />
              <div className="mt-8 space-y-4 text-lg font-medium leading-relaxed text-foreground/80">
                <p>{personalInfo.detailedBio}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h3 className="inline-block border-2 border-foreground bg-white px-4 py-1.5 text-lg font-black uppercase">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="px-3 py-1.5 text-sm font-bold transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <h3 className="inline-block border-2 border-foreground bg-white px-4 py-1.5 text-lg font-black uppercase">Fun Facts</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {funFacts.map((fact) => (
                    <div key={fact.label} className="border-2 border-foreground bg-white p-4 shadow-[4px_4px_0px_0px] shadow-foreground">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider">{fact.label}</span>
                        <span className="text-xs font-black bg-primary text-primary-foreground px-2 py-0.5">{fact.value}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground/70">{fact.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 border-2 border-foreground bg-accent text-accent-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-wider rotate-1 mb-6">
                  <IconBriefcase className="h-4 w-4" />
                  <span>Experience</span>
                </div>
              </FadeIn>
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="relative border-l-3 border-foreground pl-8 pb-2">
                      <div className="absolute -left-[10px] top-0 h-5 w-5 border-2 border-foreground bg-primary" />
                      <div className="flex flex-col gap-1">
                        <span className="inline-block w-fit border-2 border-foreground bg-secondary px-2 py-0.5 text-xs font-bold uppercase">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-black uppercase tracking-tight mt-2">{exp.role}</h3>
                        <p className="text-lg font-bold text-foreground/80">{exp.company}</p>
                        <p className="mt-2 text-foreground/70 font-medium leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Setup Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 border-2 border-foreground bg-secondary px-3 py-1.5 text-xs font-bold uppercase tracking-wider rotate-1 mb-4">
              <IconCommand className="h-4 w-4" />
              <span>Tools &amp; Setup</span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
              My Workspace
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-foreground/70">
              The tools and technologies I use to stay productive and build high-quality software.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolsSetup.map((tool, index) => (
            <FadeIn key={tool.name} delay={index * 0.1}>
              <Card className="h-full shadow-[6px_6px_0px_0px] shadow-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground/70 leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
                {tool.link && (
                  <CardFooter>
                    <Button variant="link" className="h-auto p-0 text-foreground font-bold uppercase text-xs" render={(props) => (
                      <a href={tool.link} target="_blank" rel="noreferrer" {...props}>
                        View Config →
                      </a>
                    )} />
                  </CardFooter>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto max-w-5xl px-4 sm:px-8"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <FadeIn>
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-5xl">
                Get In <span className="inline-block px-3 py-1 bg-primary text-primary-foreground -rotate-1">Touch</span>
              </h2>
              <p className="text-lg font-medium text-foreground/70">
                Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and collaborations.
              </p>
              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-base font-bold uppercase transition-all hover:translate-x-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-primary text-primary-foreground">
                    <IconMail className="h-5 w-5" />
                  </div>
                  <span className="underline decoration-2 decoration-primary underline-offset-4">{personalInfo.email}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-base font-bold uppercase transition-all hover:translate-x-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-foreground bg-accent text-accent-foreground">
                    <IconBrandLinkedin className="h-5 w-5" />
                  </div>
                  <span className="underline decoration-2 decoration-accent underline-offset-4">LinkedIn</span>
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="lg:col-span-3 p-6 md:p-8 shadow-[8px_8px_0px_0px] shadow-foreground">
              <form
                className="grid gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("name");
                  const message = formData.get("message");
                  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                  const body = encodeURIComponent(`Hi Georges,\n\n${message}\n\nSent from your portfolio website.`);
                  window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    className="min-h-[140px]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-base uppercase font-black">
                  <IconSend className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
