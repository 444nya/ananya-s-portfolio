import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Pixelify_Sans, Silkscreen, Press_Start_2P } from 'next/font/google'
import './globals.css'

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify',
  weight: ['400', '500', '600', '700'],
})

const silkscreen = Silkscreen({
  subsets: ['latin'],
  variable: '--font-silkscreen',
  weight: ['400', '700'],
})

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-press-start',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ananyamishra.design'),
  title: 'ananya mishra — graphic & visual designer',
  description:
    'the portfolio of ananya mishra, a graphic and visual designer based in mumbai. brand kits, experimental posters, and colorful visual art. open for freelance & commissions.',
  generator: 'v0.app',
  keywords: [
    'ananya mishra',
    'graphic designer',
    'visual designer',
    'mumbai designer',
    'poster design',
    'brand identity',
  ],
  openGraph: {
    title: 'ananya mishra — graphic & visual designer',
    description:
      'brand kits, experimental posters, and colorful visual art. open for freelance & commissions.',
    url: 'https://ananyamishra.design',
    siteName: 'ananya mishra',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbe9f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${pixelify.variable} ${silkscreen.variable} ${pressStart.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
