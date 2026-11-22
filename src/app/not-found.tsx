import { LinkButton } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-8xl font-black text-primary">404</span>
      <h1 className="mt-4 text-3xl font-black uppercase tracking-tight">
        Level not found
      </h1>
      <p className="mt-3 max-w-md text-sm font-semibold text-muted-foreground">
        This quest doesn&apos;t exist — or it moved while you weren&apos;t looking.
      </p>
      <LinkButton href="/" className="mt-8" data-cursor="home">
        <Icon name="arrowLeft" />
        Back to base
      </LinkButton>
    </div>
  )
}
