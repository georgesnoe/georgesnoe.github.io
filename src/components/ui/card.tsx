import { forwardRef, type ComponentProps } from "react"

import { cn } from "@/lib/utils"

export const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  function Card({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "brutal-card flex flex-col overflow-hidden text-card-foreground",
          className,
        )}
        {...props}
      />
    )
  },
)

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2 p-6", className)} {...props} />
}

export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-xl font-black uppercase tracking-tight", className)}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm font-medium leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex-1 px-6 pb-6", className)} {...props} />
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex items-center gap-3 p-6 pt-0", className)} {...props} />
}
