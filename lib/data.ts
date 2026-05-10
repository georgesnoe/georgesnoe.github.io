export const personalInfo = {
  name: "Kossi Georges-Noé AHOMBO",
  role: "Full Stack Software Engineer",
  bio: "Software Engineer & Information Systems student passionate about building clean, scalable, and well-crafted digital products. Currently sharpening my skills to become a tech entrepreneur.",
  detailedBio: `I'm a Software Engineer & Information Systems student (2nd year @ Lomé Business School, Togo) — passionate about building clean, scalable, and well-crafted digital products.

I work across the full stack: web, mobile, databases, and system design. I care deeply about code quality, architecture, and developer experience. Currently sharpening my skills and laying the groundwork to become an entrepreneur after graduation.

I speak Ewe (native), French, English, and a bit of Spanish and Deutsch.`,
  email: "georges.ahombo@gmail.com",
  github: "https://github.com/georgesnoe",
  linkedin: "https://linkedin.com/in/kossigeorgesnoeahombo",
  location: "Lomé, Togo",
}

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio, reimagined for the new era. Built with Next.js, Motion, and Shadcn UI using the latest @base-ui/react components.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "@base-ui/react"],
    github: "https://github.com/georgesnoe/georgesnoe.github.io",
    live: "https://www.georgesnoe.fr.eu.org",
  },
  {
    title: "CoopLedger",
    description:
      "MIABE Hackathon 2026 Edition winner. A platform built on Web3 technology for agricultural cooperatives, ensuring transparency and accountability in the supply chain.",
    techStack: [
      "Next.js",
      "Expressjs",
      "PostgreSQL",
      "Fedapay",
      "Solidity",
      "Polygon",
      "React Native",
      "Socket.io",
    ],
    github: "https://github.com/georgesnoe/coopledger",
    live: "https://coopledger-web.vercel.app/",
  },
  {
    title: "LBS Planning",
    description: "Enhanced scheduling and planning system built for students at Lomé Business School to manage their academic life efficiently.",
    techStack: ["Next.js", "PostgreSQL", "n8n", "Tailwind CSS"],
    github: "https://github.com/georgesnoe/lbs-planning",
    live: "https://lbs-planning.vercel.app/",
  },
  {
    title: "lazygithub.nvim",
    description: "A Neovim wrapper for lazy-github to effortlessly interact with GitHub within Neovim. Focused on improving developer productivity.",
    techStack: ["Lua", "Neovim API"],
    github: "https://github.com/georgesnoe/lazygithub.nvim",
    live: "https://github.com/georgesnoe/lazygithub.nvim",
  },
]

export const skills = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TanStack Start / Query", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Motion", category: "Frontend" },
  { name: "Shadcn UI / Base UI", category: "Frontend" },
  { name: "Node.js / Express", category: "Backend" },
  { name: "NestJS / Hono", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "PostgreSQL / MySQL", category: "Database" },
  { name: "Supabase / Neon", category: "Database" },
  { name: "Prisma / Drizzle", category: "ORM" },
  { name: "React Native / Expo", category: "Mobile" },
  { name: "Solidity", category: "Web3" },
]

export const experience = [
  {
    company: "KYA-Energy Group",
    role: "Web Developer Intern",
    period: "July - September 2025",
    description:
      "Redesigned the company's legacy website to ensure modern responsiveness and accessibility. Developed a comprehensive monitoring platform for solar energy usage tracking.",
  },
]

export const toolsSetup = [
  {
    name: "Neovim",
    description: "Primary editor with a custom Lua configuration for a fast, keyboard-driven workflow.",
    link: "https://github.com/georgesnoe/dotfiles",
  },
  {
    name: "Tmux",
    description: "Terminal multiplexer for managing multiple sessions and panes efficiently.",
    link: "https://github.com/georgesnoe/dotfiles",
  },
  {
    name: "Ghostty",
    description: "Fast, hardware-accelerated terminal emulator for a smooth CLI experience.",
    link: "https://github.com/georgesnoe/dotfiles",
  },
  {
    name: "Linear",
    description: "Used for project management and tracking my personal development progress.",
  },
]
