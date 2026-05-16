import type { Metadata } from 'next'
import './globals.css'

import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Squopz',
  description: 'AI Automation & Analytics Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">

      <body>

        <SmoothScroll>
          {children}
        </SmoothScroll>

      </body>

    </html>
  )
}
