import { cn } from "@/lib/utils"

/** Server-rendered character spans for the GSAP stagger reveal. */
export function SplitText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const words = text.split(" ")

  return (
    <span data-split aria-label={text} className={cn("inline-block", className)}>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-block overflow-hidden align-bottom"
          >
            {[...word].map((char, charIndex) => (
              <span key={charIndex} className="char inline-block">
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="char inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </span>
    </span>
  )
}
