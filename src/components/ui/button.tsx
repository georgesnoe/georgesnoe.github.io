import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 border-3 border-foreground text-sm font-black uppercase tracking-tight transition-all select-none active:translate-x-[3px] active:translate-y-[3px] active:shadow-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[4px_4px_0_0_var(--shadow)] hover:brightness-110",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_var(--shadow)] hover:brightness-105",
        accent:
          "bg-accent text-accent-foreground shadow-[4px_4px_0_0_var(--shadow)] hover:brightness-110",
        outline:
          "bg-card text-foreground shadow-[4px_4px_0_0_var(--shadow)] hover:bg-muted",
        ghost: "border-transparent bg-transparent shadow-none hover:bg-muted",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3 text-xs",
        lg: "h-14 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

type ButtonVariants = VariantProps<typeof buttonVariants>

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & ButtonVariants) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & ButtonVariants) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export function AnchorButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & ButtonVariants) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}
