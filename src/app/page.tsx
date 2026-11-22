import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Focus } from "@/components/sections/focus"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Tools } from "@/components/sections/tools"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-10 sm:gap-32">
      <Hero />
      <Focus />
      <Projects />
      <About />
      <Tools />
      <Contact />
    </div>
  )
}
