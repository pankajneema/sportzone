import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SportZone',
  description: 'its an app who hold all details about sport score',
  generator: 'My Team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
