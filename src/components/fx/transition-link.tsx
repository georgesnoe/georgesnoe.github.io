"use client"

import Link from "next/link"
import type { ComponentProps, MouseEvent } from "react"

import { useTransitionNavigate } from "@/components/chrome/page-transition"
import type { FlightRequest } from "@/lib/transition"

type Props = ComponentProps<typeof Link> & {
  href: string
  flight?: Omit<FlightRequest, "rect">
}

/** Link that hands navigation to the transition loader (and optional flying card). */
export function TransitionLink({ href, flight, onClick, ...props }: Props) {
  const navigate = useTransitionNavigate()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      href.startsWith("#") ||
      href.startsWith("mailto:")
    ) {
      return
    }

    event.preventDefault()
    const rect = event.currentTarget.getBoundingClientRect()
    navigate(
      href,
      flight
        ? {
            ...flight,
            rect: {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            },
          }
        : undefined,
    )
  }

  return <Link href={href} onClick={handleClick} {...props} />
}
