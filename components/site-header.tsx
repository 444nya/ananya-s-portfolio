import { Star } from '@/components/sprinkle-stars'

const NAV = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#work' },
  { label: 'contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="primary"
        className="flex items-center gap-1 rounded-full border border-border/70 bg-card/80 px-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl sm:gap-2 sm:px-3"
      >
        <span className="hidden pl-1 pr-1 sm:inline-flex">
          <Star color="pink" className="animate-twinkle-spin size-5" />
        </span>
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-1.5 text-sm font-medium lowercase text-foreground/80 transition-colors hover:bg-primary/40 hover:text-foreground sm:px-4 sm:text-base"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
