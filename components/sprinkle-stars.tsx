import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type StarColor = 'pink' | 'blue' | 'yellow' | 'green' | 'lilac'

const COLOR_MAP: Record<StarColor, string> = {
  pink: 'text-star-pink',
  blue: 'text-star-blue',
  yellow: 'text-star-yellow',
  green: 'text-star-green',
  lilac: 'text-star-lilac',
}

export function Star({
  className,
  color = 'pink',
  style,
}: {
  className?: string
  color?: StarColor
  style?: CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn(COLOR_MAP[color], className)}
      style={style}
      fill="currentColor"
    >
      {/* chunky rounded 5-point star */}
      <path
        d="M12 1.5c.55 0 1.03.35 1.2.87l2.02 6.06 6.39.05c.55 0 1.03.35 1.2.87.17.52-.02 1.09-.46 1.41l-5.14 3.78 1.93 6.09c.17.52-.02 1.09-.46 1.41-.44.32-1.04.32-1.48 0L12 19.7l-5.2 3.77c-.44.32-1.04.32-1.48 0-.44-.32-.63-.89-.46-1.41l1.93-6.09-5.14-3.78c-.44-.32-.63-.89-.46-1.41.17-.52.65-.87 1.2-.87l6.39-.05L10.8 2.37c.17-.52.65-.87 1.2-.87Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type Sprinkle = {
  top: string
  left: string
  size: number
  color: StarColor
  duration: number
  delay: number
}

// Deterministic positions so server and client render identically.
const SPRINKLES: Sprinkle[] = [
  { top: '8%', left: '6%', size: 26, color: 'pink', duration: 7, delay: 0 },
  { top: '14%', left: '88%', size: 34, color: 'blue', duration: 9, delay: 0.6 },
  { top: '4%', left: '46%', size: 18, color: 'yellow', duration: 6, delay: 1.2 },
  { top: '30%', left: '94%', size: 22, color: 'green', duration: 8, delay: 0.3 },
  { top: '26%', left: '2%', size: 20, color: 'lilac', duration: 7.5, delay: 0.9 },
  { top: '48%', left: '90%', size: 28, color: 'pink', duration: 6.5, delay: 1.5 },
  { top: '54%', left: '5%', size: 16, color: 'yellow', duration: 8.5, delay: 0.2 },
  { top: '68%', left: '92%', size: 24, color: 'lilac', duration: 7, delay: 1.1 },
  { top: '74%', left: '10%', size: 30, color: 'blue', duration: 9.5, delay: 0.5 },
  { top: '88%', left: '84%', size: 18, color: 'green', duration: 6, delay: 1.4 },
  { top: '92%', left: '18%', size: 22, color: 'pink', duration: 8, delay: 0.8 },
  { top: '40%', left: '48%', size: 14, color: 'green', duration: 7, delay: 1.7 },
]

export function SprinkleStars({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      {SPRINKLES.map((s, i) => (
        <Star
          key={i}
          color={s.color}
          className="animate-twinkle-spin absolute drop-shadow-sm"
          style={{
            top: s.top,
            left: s.left,
            width: `clamp(${s.size * 0.55}px, ${s.size / 16}rem, ${s.size}px)`,
            height: `clamp(${s.size * 0.55}px, ${s.size / 16}rem, ${s.size}px)`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
