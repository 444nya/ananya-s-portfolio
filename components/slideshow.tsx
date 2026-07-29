'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Star } from '@/components/sprinkle-stars'

export type Slide = {
  src: string
  alt: string
}

export function Slideshow({ slides, label }: { slides: Slide[]; label: string }) {
  const [index, setIndex] = useState(0)
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({})
  const count = slides.length

  // Preload all slides on mount so slide transitions are instantaneous
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.src
      img.onload = () => {
        setLoadedMap((prev) => ({ ...prev, [slide.src]: true }))
      }
    })
  }, [slides])

  const go = useCallback(
    (dir: number) => {
      setIndex((prev) => (prev + dir + count) % count)
    },
    [count],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const currentSlide = slides[index]
  const isCurrentLoaded = loadedMap[currentSlide.src]

  return (
    <div
      className="flex flex-col items-center gap-4"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      {/* Frame hugs the image width & height tightly: w-fit + max-w-full prevents awkward gaps */}
      <div className="relative mx-auto flex w-fit max-w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/70 bg-card p-2 sm:p-3 shadow-[0_10px_40px_rgb(0,0,0,0.08)]">
        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl">
          {/* Loading Skeleton */}
          {!isCurrentLoaded && (
            <div className="absolute inset-0 flex min-h-[250px] min-w-[250px] items-center justify-center rounded-2xl bg-muted/40 backdrop-blur-sm sm:min-h-[350px]">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Star color="pink" className="animate-twinkle-spin size-8" />
                <span className="font-display text-xs lowercase">loading art...</span>
              </div>
            </div>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            decoding="async"
            onLoad={() => {
              setLoadedMap((prev) => ({ ...prev, [currentSlide.src]: true }))
            }}
            className={cn(
              'mx-auto block h-auto max-h-[70vh] w-auto max-w-full rounded-2xl object-contain transition-opacity duration-300 ease-in-out',
              isCurrentLoaded ? 'opacity-100' : 'opacity-0 min-h-[250px] sm:min-h-[350px]',
            )}
          />

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="previous image"
                className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-card/85 text-foreground shadow-md backdrop-blur-md transition-all hover:-translate-y-1/2 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="next image"
                className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-card/85 text-foreground shadow-md backdrop-blur-md transition-all hover:-translate-y-1/2 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>
      </div>

      {count > 1 && (
        <div className="flex items-center gap-2" role="tablist" aria-label="slide navigation">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`go to image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                i === index
                  ? 'w-6 bg-primary'
                  : 'w-2.5 bg-border hover:bg-primary/60',
              )}
            />
          ))}
        </div>
      )}

      <p className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
        {index + 1} / {count}
      </p>
    </div>
  )
}
