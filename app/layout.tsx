import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evertrace - The Missing Digital Layer in How We Grieve',
  description: 'An AI-powered infrastructure for next-generation memorialization that transforms how we preserve, share, and honor the memories of those we\'ve lost.',
  keywords: ['digital memorial', 'grief', 'remembrance', 'legacy', 'AI', 'memorialization'],
  openGraph: {
    title: 'Evertrace - The Missing Digital Layer in How We Grieve',
    description: 'Transform how we preserve, share, and honor memories with AI-powered memorialization.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
