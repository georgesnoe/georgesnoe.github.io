import { AnimationEngine } from "@/components/fx/animation-engine"

/** Remounts on navigation so all GSAP contexts restart cleanly. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <AnimationEngine>{children}</AnimationEngine>
}
