import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type BadgeProps = ComponentProps<"span"> & {
  tone?: "default" | "primary" | "secondary" | "accent" | "outline"
}

const tones = {
  default: "border-foreground bg-card text-foreground",
  primary: "border-foreground bg-primary text-primary-foreground",
  secondary: "border-foreground bg-secondary text-secondary-foreground",
  accent: "border-foreground bg-accent text-accent-foreground",
  outline: "border-foreground bg-transparent text-foreground",
}

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "label-chip",
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}
