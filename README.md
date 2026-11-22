# Georges-Noé's portfolio

A motion-first, neo-brutalist portfolio and blog. Statically exported with Next.js 16 and deployed to GitHub Pages.

## Run locally

```bash
bun install
bun run dev          # http://localhost:3000
bun run typecheck
bun run lint
bun run build        # static site in ./out
```

## Architecture

- **`src/app`** — App Router. Pages are Server Components; `template.tsx` remounts per route so GSAP contexts and the transition curtain restart cleanly.
- **`src/content`** — all site data (`site.ts`) and blog posts (`blog/*.mdx`). Each MDX file exports its own `metadata`, making it the single source of truth for post titles/dates.
- **`src/lib`** — `site-config.ts` owns every URL/id (canonical domain, socials, analytics); `blog.ts` derives the post registry from MDX metadata; `gsap.ts` registers plugins; `achievements.ts` is the gamification event bus.
- **`src/components/sections`** — server-rendered page sections. They only declare intent with `data-*` attributes.
- **`src/components/fx`** — client-side animation engine, split-text markup, route curtain, achievement links.
- **`src/components/chrome`** — navbar, footer, theme provider, Lenis smooth scroll, custom cursor/scrollbar, scroll level meter, achievement toasts.
- **`src/components/ui`** — five small local primitives built with `cva` + `cn`. No component library.
- **`src/app/feed.xml/route.ts`** — a `force-static` route handler that emits `/feed.xml` at build time. RSS therefore shares the MDX metadata with the rest of the site.

## Animation model

`AnimationEngine` is the only place GSAP is orchestrated. It reads declarative attributes from server markup:

| Attribute | Effect |
| --- | --- |
| `data-reveal` / `data-reveal-delay` | clip-path wipe + slight rotation on scroll |
| `data-split` | staggered character reveal (`.char` spans from `SplitText`) |
| `data-parallax="0.12"` | scrubbed parallax layer |
| `data-count="9"` | counting stat |
| `data-charge="82%"` | charging skill bar |
| `data-magnetic` | pointer-follow CTA |
| `data-tilt` | 3D card tilt |
| `data-horizontal` | pinned horizontal project reel (≥1024px) |

Lenis drives scrolling through GSAP's ticker and calls `ScrollTrigger.update()`. Everything is disabled under `prefers-reduced-motion`; the custom cursor/scrollbar only appear on fine pointers.

## Navigation & transitions

- **`PageTransition`** (in `layout.tsx`) owns a full-screen loader with a progress bar and a random quote/tip at the bottom. `TransitionLink` intercepts internal navigations, plays the loader, then calls `router.push`; the overlay wipes away when the new route renders.
- **Flying post cards** — clicking a blog card captures its screen rect; a clone flies and expands inside the loader, then the post header animates in on the destination page (`data-arrival`).
- **Flying project cards** — `ProjectCard` FLIPs the clicked card into a detail modal with the full description, stack and links. Escape / backdrop / close button reverse the animation.
- **Mobile-first** — base styles target phones, with `sm:`/`lg:` enhancements. A thumb-friendly bottom dock (`MobileDock`) provides Home / Work / About / Blog on small screens; the custom cursor and scrollbar are fine-pointer only.

## Domain

Canonical URL is `https://georgesnoe.github.io`. It is configured once in `src/lib/site-config.ts` and used by metadata, OpenGraph, sitemap, robots and RSS.
