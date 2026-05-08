"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconBrandGithub, IconBrandLinkedin, IconExternalLink, IconMail, IconSend } from "@tabler/icons-react"
import { FadeIn } from "@/components/fade-in"
import { projects, skills, experience, personalInfo } from "@/lib/data"
import Link from "next/link"
import { motion } from "motion/react"

export default function Page() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 md:pt-32 max-w-7xl sm:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-6">
            <Badge variant="outline" className="px-4 py-1 text-sm font-normal border-primary/20 bg-primary/5">
              Available for new projects
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              I build <span className="text-primary">digital experiences</span> that matter.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
              Hi, I&apos;m {personalInfo.name}. {personalInfo.bio}
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View work</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 max-w-7xl sm:px-8">
        <FadeIn>
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
            <p className="text-muted-foreground">A showcase of some of my recent work and side projects.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden border-muted-foreground/10">
                  <div className="aspect-video bg-muted relative group">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-2xl">
                      {project.title}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
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
                  <CardFooter className="gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <IconBrandGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <IconExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="container mx-auto px-4 max-w-7xl sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          </FadeIn>
          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-muted">
            {experience.map((exp, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-4 border-primary" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="font-medium text-primary">{exp.company}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div>
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Skills & Technologies</h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} delay={index * 0.05} direction="right">
                <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-xs text-muted-foreground">{skill.category}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 max-w-3xl sm:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <Card className="p-6 md:p-8">
            <form className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can I help you?" className="min-h-[150px]" />
              </div>
              <Button className="w-full">
                <IconSend className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
            <div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-center gap-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <IconMail className="h-5 w-5" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <IconBrandLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </Card>
        </FadeIn>
      </section>
    </div>
  )
}
