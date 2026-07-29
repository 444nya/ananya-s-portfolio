'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { Slideshow, type Slide } from '@/components/slideshow'
import { SprinkleStars, Star } from '@/components/sprinkle-stars'
import { cn } from '@/lib/utils'

type Project = {
  title: string
  tagline: string
  description: string
  slides: Slide[]
  defaultOpen?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'yarn bean studio',
    tagline: 'crochet brand kit',
    description:
      'A complete visual identity and packaging kit designed for a handmade crochet small business, featuring cozy, hand-lettered typography, a charming cat mascot, a soft pastel palette, and custom thank-you cards with integrated social QR codes.',
    defaultOpen: true,
    slides: [
      { src: '/yarnbean/logo.webp', alt: 'Yarn Bean Studio primary logo — a sleepy cat curled around hand-lettered type with pastel yarn balls' },
      { src: '/yarnbean/card-1-front.webp', alt: 'Business card front on cream with the sage cat mascot and pink buttons' },
      { src: '/yarnbean/card-1-back.webp', alt: 'Business card back reading Thank You For Your Purchase with a yarn whisk and Instagram QR code' },
      { src: '/yarnbean/card-2-front.webp', alt: 'Alternate business card front with the pink cat mascot logo' },
      { src: '/yarnbean/card-2-back.webp', alt: 'Sage green thank-you card with follow @yarnbeanstudio, a QR code and doodled sewing tools' },
    ],
  },
  {
    title: 'poster experiments',
    tagline: 'graphic series',
    description:
      'An experimental graphic design series exploring Y2K subcultures, grunge typography, and collage-style visual storytelling, blending distressed halftone textures and alternative visual narratives.',
    slides: [
      { src: '/posters/unraveled.webp', alt: 'Poster: a girl upside down on a swing in a pink dress with a pixelated blue swirl overlay reading i\u2019m unraveled' },
      { src: '/posters/fashion.webp', alt: 'Poster: red, blue and black halftone portrait with spiky stars reading i call that fashion' },
      { src: '/posters/sunshine.webp', alt: 'Poster: high-contrast black and white Wallows halftone collage with stars reading why does the sun shine baby' },
      { src: '/posters/fiftyeight-hours.webp', alt: 'Poster: bleached collage portrait with grid textures reading it\u2019s fifty eight hours since i last slept with you' },
      { src: '/posters/people-pleaser.webp', alt: 'Poster: blue and purple duotone band photo with gritty white stars reading quite the people pleaser' },
      { src: '/posters/angel.webp', alt: 'Poster: macro eye with a black star and mixed pixel and cursive lettering reading you called me your angel' },
      { src: '/posters/whos-that.webp', alt: 'Poster: purple duotone magazine collage reading who\u2019s that? it\u2019s me DUH' },
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(Boolean(project.defaultOpen))
  const panelId = useId()

  return (
    <article className="overflow-hidden rounded-4xl border border-border/70 bg-card/80 shadow-[0_10px_40px_rgb(0,0,0,0.05)] backdrop-blur-sm">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-4 px-6 py-6 text-left transition-colors hover:bg-primary/20 sm:px-8"
        >
          <Star
            color={open ? 'pink' : 'blue'}
            className={cn('size-8 shrink-0 transition-transform', open && 'animate-twinkle-spin')}
          />
          <span className="flex flex-1 flex-col">
            <span className="font-display text-xl lowercase leading-tight text-foreground sm:text-3xl">
              {project.title}
            </span>
            <span className="mt-1 text-sm lowercase text-muted-foreground sm:text-base">
              {project.tagline} · {project.slides.length} images
            </span>
          </span>
          <span
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-foreground transition-transform duration-300',
              open && 'rotate-45',
            )}
          >
            <Plus className="size-5" />
          </span>
        </button>
      </h3>

      {open && (
        <div id={panelId} className="px-4 pb-8 sm:px-8">
          <p className="mx-auto mb-6 max-w-2xl text-pretty text-center text-base leading-relaxed text-foreground/85 sm:text-lg">
            {project.description}
          </p>
          <Slideshow slides={project.slides} label={project.title} />
        </div>
      )}
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="work" className="relative overflow-hidden px-5 py-24">
      <SprinkleStars />
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <Star color="yellow" className="animate-twinkle-spin size-7" />
            <h2 className="font-display text-3xl lowercase text-foreground sm:text-5xl">
              my work
            </h2>
            <Star color="green" className="animate-twinkle-spin size-7" />
          </div>
          <p className="mt-4 max-w-md text-pretty text-base text-muted-foreground sm:text-lg">
            tap a project to unfold the story and flip through every piece.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
