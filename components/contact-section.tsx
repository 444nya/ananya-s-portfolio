'use client'

import { useState, type FormEvent, type SVGProps } from 'react'
import { SprinkleStars, Star } from '@/components/sprinkle-stars'

const EMAIL = 'ananyxa06@gmail.com'

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const SOCIALS = [
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/ananya-mishra-b79549321',
    icon: LinkedinIcon,
  },
  {
    label: 'instagram',
    href: 'https://www.instagram.com/sunt4nn',
    icon: InstagramIcon,
  },
]

export function ContactSection() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(
      name ? `hi ananya! — from ${name}` : 'hi ananya!',
    )
    const body = encodeURIComponent(
      `${message}\n\n${name ? `— ${name}` : ''}`.trim(),
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-5 pb-16 pt-24"
    >
      <SprinkleStars />

      <div className="relative z-10 mx-auto max-w-xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <Star color="pink" className="animate-twinkle-spin size-7" />
            <h2 className="font-display text-3xl lowercase text-foreground sm:text-5xl">
              say hi
            </h2>
            <Star color="lilac" className="animate-twinkle-spin size-7" />
          </div>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-secondary/40 px-4 py-1.5 text-sm lowercase text-secondary-foreground">
            <Star color="green" className="animate-twinkle-spin size-4" />
            open for freelance work &amp; commissions
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-4xl border border-border/70 bg-card/80 p-6 shadow-[0_10px_40px_rgb(0,0,0,0.05)] backdrop-blur-sm sm:p-8"
        >
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm lowercase text-muted-foreground">your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="what should i call you?"
                className="rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/40"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm lowercase text-muted-foreground">your message</span>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="tell me about your project or idea..."
                className="resize-none rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/40"
              />
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold lowercase text-primary-foreground shadow-[0_8px_24px_rgb(0,0,0,0.08)] transition-transform hover:-translate-y-0.5"
            >
              <MailIcon className="size-4" />
              send it my way
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-col items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/80 underline-offset-4 hover:underline"
          >
            <MailIcon className="size-4" />
            {EMAIL}
          </a>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-12 items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-sm transition-transform hover:-translate-y-1 hover:bg-primary/40"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 flex items-center justify-center gap-2 text-center font-display text-[10px] uppercase tracking-widest text-muted-foreground">
          <Star color="yellow" className="animate-twinkle-spin size-3.5" />
          made with love by ananya
          <Star color="blue" className="animate-twinkle-spin size-3.5" style={{ animationDelay: '1s' }} />
        </p>
      </div>
    </footer>
  )
}
