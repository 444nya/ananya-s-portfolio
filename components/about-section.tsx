import { SprinkleStars, Star } from '@/components/sprinkle-stars'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 sm:pt-32"
    >
      <SprinkleStars />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 font-display text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm sm:text-xs">
          <Star color="green" className="animate-twinkle-spin size-3.5" />
          graphic + visual designer
          <Star color="blue" className="animate-twinkle-spin size-3.5" style={{ animationDelay: '1s' }} />
        </p>

        <h1 className="font-pixel text-5xl leading-[1.15] text-foreground [text-shadow:3px_3px_0_var(--primary)] sm:text-7xl md:text-8xl">
          ananya
        </h1>

        <div className="mt-10 flex items-center gap-3">
          <Star color="pink" className="animate-twinkle-spin size-6" />
          <h2 className="font-display text-2xl lowercase text-foreground sm:text-3xl">
            about me
          </h2>
          <Star color="yellow" className="animate-twinkle-spin size-6" style={{ animationDelay: '1.5s' }} />
        </div>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85 sm:text-xl">
          hello! i&apos;m ananya, a 19 year old computer engineering undergrad
          based in Mumbai, with a huge passion for graphic design and visual
          arts. creating art for others IS my love language and something that i
          strive to be great at. i constantly experiment with different styles
          because sticking to one is boring.
        </p>

        <a
          href="#work"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold lowercase text-primary-foreground shadow-[0_8px_24px_rgb(0,0,0,0.08)] transition-transform hover:-translate-y-0.5"
        >
          see my work
          <Star color="pink" className="animate-twinkle-spin size-4 text-primary-foreground" />
        </a>
      </div>
    </section>
  )
}
