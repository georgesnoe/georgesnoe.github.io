"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from "@/components/ui/icon"
import { personalInfo } from "@/content/site"
import { unlock } from "@/lib/achievements"

export function ContactForm() {
  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const name = String(data.get("name") ?? "")
        const message = String(data.get("message") ?? "")
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
        const body = encodeURIComponent(
          `Hi Georges,\n\n${message}\n\nSent from your portfolio website.`,
        )
        unlock("messageSent")
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
      }}
    >
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-widest">Name</span>
        <Input id="name" name="name" placeholder="John Doe" required data-cursor="type" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-widest">Message</span>
        <Textarea
          id="message"
          name="message"
          placeholder="How can I help you?"
          required
          data-cursor="type"
        />
      </label>
      <Button type="submit" size="lg" className="w-full" data-cursor="send">
        <Icon name="send" />
        Send message
      </Button>
    </form>
  )
}
