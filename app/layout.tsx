import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentea',
  description: 'An web app to make your dreams come true',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
