export interface LoadingTip {
  text: string
  source: string
  tag: "TIP" | "QUOTE" | "FACT"
}

/** Shown at the bottom of the page-transition loader. */
export const loadingTips: LoadingTip[] = [
  {
    text: "The best way to predict the future is to invent it.",
    source: "Alan Kay",
    tag: "QUOTE",
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place.",
    source: "Brian Kernighan",
    tag: "QUOTE",
  },
  {
    text: "Press D to flip between light and dark. Yes, really.",
    source: "This website",
    tag: "TIP",
  },
  {
    text: "Click the logo five times. I dare you.",
    source: "This website",
    tag: "TIP",
  },
  {
    text: "Scroll far enough and you'll level up. XP is real here.",
    source: "This website",
    tag: "TIP",
  },
  {
    text: "Simplicity is prerequisite for reliability.",
    source: "Edsger W. Dijkstra",
    tag: "QUOTE",
  },
  {
    text: "Talk is cheap. Show me the code.",
    source: "Linus Torvalds",
    tag: "QUOTE",
  },
  {
    text: "Programs must be written for people to read.",
    source: "Harold Abelson",
    tag: "QUOTE",
  },
  {
    text: "There are only two hard things in CS: cache invalidation and naming things.",
    source: "Phil Karlton",
    tag: "FACT",
  },
  {
    text: "It works on my machine — so I shipped it statically.",
    source: "Every developer",
    tag: "FACT",
  },
  {
    text: "Neo-brutalism is just CSS with the volume turned up.",
    source: "This website",
    tag: "FACT",
  },
  {
    text: "The custom cursor follows you because GSAP said so.",
    source: "This website",
    tag: "FACT",
  },
]

export function randomTip(): LoadingTip {
  return loadingTips[Math.floor(Math.random() * loadingTips.length)]
}
