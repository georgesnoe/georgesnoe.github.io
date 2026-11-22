import type { ReactNode, SVGProps } from "react"

/** Tiny local icon set — no icon library dependency. */
const paths = {
  terminal: <><path d="m4 17 6-5-6-5" /><path d="M12 19h8" /></>,
  network: <><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M12 7.5 6.5 16.5M12 7.5l5.5 9M7.5 19h9" /></>,
  robot: <><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" /></>,
  rocket: <><path d="M5 15c-1 3-1 5-1 5s2 0 5-1" /><path d="M9 19c3-1 7-5 10-12-7 3-11 7-12 10" /><path d="m14 10 3 3" /><circle cx="15" cy="9" r="1" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  github: <><path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.5 5 4.3 4.3 0 0 0 18.4 2S17.4 1.7 15 3.4a13 13 0 0 0-6 0C6.6 1.7 5.6 2 5.6 2A4.3 4.3 0 0 0 5.5 5 4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></>,
  linkedin: <><path d="M6 9v12M6 5.5v.01M11 21v-7a3 3 0 0 1 6 0v7" /><rect x="3" y="3" width="18" height="18" rx="2" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  x: <><path d="M6 6l12 12M18 6 6 18" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" /></>,
  arrowUpRight: <><path d="M7 17 17 7M8 7h9v9" /></>,
  arrowLeft: <><path d="M19 12H5m6 7-7-7 7-7" /></>,
  arrowDown: <><path d="M12 5v14m7-7-7 7-7-7" /></>,
  send: <><path d="m21 3-9 18-2.5-7.5L2 11l19-8Z" /></>,
  mapPin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H5v2a3 3 0 0 0 3 3m8-5h3v2a3 3 0 0 1-3 3M12 13v4m-4 4h8" /></>,
  sparkles: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" /></>,
  command: <><path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6Z" /></>,
  article: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></>,
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
