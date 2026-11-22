import { siteConfig } from "@/lib/site-config"

export const personalInfo = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  role: siteConfig.role,
  bio: siteConfig.description,
  detailedBio: `I'm a Software Engineer & Information Systems student (2nd year @ Lomé Business School, Togo) — passionate about building clean, scalable, and well-crafted digital products.

I work across the full stack: web, mobile, databases, and system design. I care deeply about code quality, architecture, and developer experience. Currently sharpening my skills and laying the groundwork to become an entrepreneur after graduation.

I speak Ewe (native), French, English, and a bit of Spanish and Deutsch.`,
  email: siteConfig.email,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  location: siteConfig.location,
}

export const currentFocus = [
  {
    title: "Distributed Systems",
    description:
      "Exploring P2P protocols and decentralized architectures for resilient applications.",
    icon: "network",
  },
  {
    title: "AI Integration",
    description:
      "Building LLM-powered tools to enhance developer productivity and user experience.",
    icon: "robot",
  },
  {
    title: "Entrepreneurship",
    description:
      "Learning how to turn technical solutions into viable business products.",
    icon: "rocket",
  },
] as const

export const funFacts = [
  {
    label: "Coffee Consumption",
    value: "Low",
    description: "Preferring clarity and focus over caffeine.",
  },
  {
    label: "Favorite Editor",
    value: "Neovim",
    description: "Because I love my keyboard and hate my mouse.",
  },
  {
    label: "Learning Style",
    value: "Build & Break",
    description: "I learn best by breaking things and then fixing them.",
  },
  {
    label: "Organization",
    value: "Notion",
    description: "My second brain for planning and documentation.",
  },
] as const

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio — neo-brutalist, gamified and motion-driven. Built with Next.js, GSAP and Lenis.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
    github: "https://github.com/georgesnoe/georgesnoe.github.io",
    live: siteConfig.url,
    image: "https://opengraph.githubassets.com/1/georgesnoe/georgesnoe.github.io",
  },
  {
    title: "CoopLedger",
    description:
      "MIABE Hackathon 2026 Edition. A platform built on Web3 technology for agricultural cooperatives, ensuring transparency and accountability in the supply chain.",
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
    image: "https://opengraph.githubassets.com/1/georgesnoe/coopledger",
  },
  {
    title: "KYA Marketplace",
    description:
      "A digital marketplace for KYA-Energy Group, enabling efficient energy equipment trading and service discovery.",
    techStack: ["Next.js", "TypeScript", "NextAuth", "Tailwind CSS", "Biome"],
    github: "https://github.com/yongvic/kya-marketplace",
    live: "https://github.com/yongvic/kya-marketplace",
    image: "https://opengraph.githubassets.com/1/yongvic/kya-marketplace",
  },
  {
    title: "Archipel (Algorithm Avengers)",
    description:
      "A sovereign P2P protocol developed for the 'Archipel' hackathon. Works in complete autarky without internet or central servers.",
    techStack: ["Python", "P2P", "Cryptography", "UDP Multicast", "TCP Sockets"],
    github: "https://github.com/JavaScriptUalist/algorithm-avengers",
    live: "https://github.com/JavaScriptUalist/algorithm-avengers",
    image: "https://opengraph.githubassets.com/1/JavaScriptUalist/algorithm-avengers",
  },
  {
    title: "lazykube.nvim",
    description:
      "A Neovim wrapper for lazykube to effortlessly interact with Kubernetes within Neovim. Focused on improving developer productivity.",
    techStack: ["Lua", "Neovim API", "Kubernetes"],
    github: "https://github.com/georgesnoe/lazykube.nvim",
    live: "https://github.com/georgesnoe/lazykube.nvim",
    image: "https://opengraph.githubassets.com/1/georgesnoe/lazykube.nvim",
  },
  {
    title: "AllnOne+",
    description:
      "Enhanced scheduling and planning system built for students at Lomé Business School to manage their academic life efficiently.",
    techStack: ["Flutter", "PostgreSQL", "n8n"],
    github: "https://github.com/georgesnoe/allnoneplus",
    live: "https://lbs-planning.vercel.app/",
    image: "https://opengraph.githubassets.com/1/georgesnoe/lbs-planning",
  },
  {
    title: "lazygithub.nvim",
    description:
      "A Neovim wrapper for lazy-github to effortlessly interact with GitHub within Neovim. Focused on improving developer productivity.",
    techStack: ["Lua", "Neovim API"],
    github: "https://github.com/georgesnoe/lazygithub.nvim",
    live: "https://github.com/georgesnoe/lazygithub.nvim",
    image: "https://opengraph.githubassets.com/1/georgesnoe/lazygithub.nvim",
  },
  {
    title: "Solar-Health",
    description:
      "A solar energy production and consumption monitoring platform that sends alerts for anomalies through WhatsApp.",
    techStack: ["Next.js", "PostgreSQL", "n8n", "GoWA API"],
    live: "https://solar-health.vercel.app/",
    github: "https://github.com/georgesnoe/solar-health",
    image: "https://opengraph.githubassets.com/1/georgesnoe/solar-health",
  },
  {
    title: "Convoi",
    description: "A carpooling platform for students.",
    techStack: ["Node.js", "PostgreSQL", "Flutter"],
    live: "https://github.com/georgesnoe/convoi-backend",
    github: "https://github.com/georgesnoe/convoi-backend",
    image: "https://opengraph.githubassets.com/1/georgesnoe/convoi-backend",
  },
] as const

export const skills = [
  { name: "React / Next.js", category: "Frontend", level: 92 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "Tailwind CSS", category: "Frontend", level: 88 },
  { name: "GSAP / Motion", category: "Frontend", level: 82 },
  { name: "TanStack Query", category: "Frontend", level: 78 },
  { name: "Node.js / Express", category: "Backend", level: 85 },
  { name: "NestJS / Hono", category: "Backend", level: 76 },
  { name: "Spring Boot", category: "Backend", level: 68 },
  { name: "PostgreSQL / MySQL", category: "Database", level: 84 },
  { name: "Supabase / Neon", category: "Database", level: 80 },
  { name: "Prisma / Drizzle", category: "ORM", level: 82 },
  { name: "React Native / Expo", category: "Mobile", level: 74 },
  { name: "Solidity", category: "Web3", level: 65 },
] as const

export const experience = [
  {
    company: "KYA-Energy Group",
    role: "Web Developer Intern",
    period: "July - September 2025",
    description:
      "Redesigned the company's legacy website to ensure modern responsiveness and accessibility. Developed a comprehensive monitoring platform for solar energy usage tracking.",
  },
  {
    company: "Freelance",
    role: "Fullstack developer",
    period: "June 2026 - now",
    description:
      "Currently working for a small agency to help them build their online presence.",
  },
] as const

export const toolsSetup = [
  {
    name: "Neovim",
    description:
      "Primary editor with a custom Lua configuration for a fast, keyboard-driven workflow.",
    link: "https://github.com/georgesnoe/dotfiles",
  },
  {
    name: "Tmux",
    description:
      "Terminal multiplexer for managing multiple sessions and panes efficiently.",
    link: "https://github.com/georgesnoe/dotfiles",
  },
  {
    name: "Ghostty",
    description:
      "Fast, hardware-accelerated terminal emulator for a smooth CLI experience.",
    link: "https://github.com/georgesnoe/dotfiles",
  },
  {
    name: "Notion",
    description:
      "Used for project management, knowledge base, and tracking my personal development progress.",
    link: undefined,
  },
] as const
