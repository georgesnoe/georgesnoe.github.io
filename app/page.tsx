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
import { Separator } from "@/components/ui/separator"
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
} from "@tabler/icons-react"
import { FadeIn } from "@/components/fade-in"
import { projects, skills, experience, personalInfo, toolsSetup } from "@/lib/data"
import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 pt-24 sm:px-8 md:pt-36">
        <FadeIn>
          <div className="flex flex-col items-center gap-8 text-center">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              Available for new projects
            </Badge>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              I build <span className="text-primary">digital experiences</span>{" "}
              that matter.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl/relaxed">
              Hi, I&apos;m {personalInfo.name}. {personalInfo.bio}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" render={(props) => <Link href="#contact" {...props} />}>
                Get in touch
              </Button>
              <Button variant="outline" size="lg" render={(props) => <Link href="#projects" {...props} />}>
                View work
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <IconMapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container mx-auto max-w-7xl px-4 sm:px-8"
      >
        <FadeIn>
          <div className="mb-16 flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-primary">
              <IconLayout className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Selected Projects
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              A showcase of some of my recent work, focusing on clean architecture and performance.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="flex h-full flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/20">
                  <div className="group relative aspect-video bg-muted/30 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary/5 transition-transform duration-500 group-hover:scale-110">
                        {project.title}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm/relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/40">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3 pt-6">
                    <Button variant="outline" size="sm" className="flex-1" render={(props) => (
                      <a href={project.github} target="_blank" rel="noreferrer" {...props}>
                        <IconBrandGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    )} />
                    <Button size="sm" className="flex-1" render={(props) => (
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
      <section id="about" className="bg-muted/30 py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-8 lg:grid-cols-2">
          <div className="space-y-8">
            <FadeIn>
              <div className="flex items-center gap-2 text-primary">
                <IconCode className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">About Me</span>
              </div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                The mind behind the code.
              </h2>
              <div className="mt-8 space-y-4 text-lg/relaxed text-muted-foreground">
                <p>{personalInfo.detailedBio}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="px-3 py-1 text-sm font-normal">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-12">
            <div>
              <FadeIn>
                <div className="flex items-center gap-2 text-primary mb-6">
                  <IconBriefcase className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Experience</span>
                </div>
              </FadeIn>
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="relative border-l-2 border-primary/20 pl-8 pb-2">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-primary/60">
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <p className="text-lg font-medium text-foreground/80">{exp.company}</p>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
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
          <div className="mb-16 flex flex-col gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <IconCommand className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Tools & Setup</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              My Workspace
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The tools and technologies I use to stay productive and build high-quality software.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolsSetup.map((tool, index) => (
            <FadeIn key={tool.name} delay={index * 0.1}>
              <Card className="h-full border-border/40 bg-card/30 transition-colors hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
                {tool.link && (
                  <CardFooter>
                    <Button variant="link" className="h-auto p-0 text-primary" render={(props) => (
                      <a href={tool.link} target="_blank" rel="noreferrer" {...props}>
                        View Config
                      </a>
                    )} />
                  </CardFooter>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <Separator className="container mx-auto max-w-7xl opacity-50" />

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto max-w-4xl px-4 py-12 sm:px-8"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and collaborations.
              </p>
              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  <IconMail className="h-6 w-6 text-primary" />
                  <span>{personalInfo.email}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  <IconBrandLinkedin className="h-6 w-6 text-primary" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="border-border/50 p-6 shadow-xl shadow-primary/5 md:p-8">
              <form className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can I help you?"
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full py-6 text-lg">
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
