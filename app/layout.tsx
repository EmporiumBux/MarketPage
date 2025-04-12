import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmporiumBux',
  description: 'Criado por EmporiumBux',
  generator: 'EmporiumBux',
  icons: {
    icon: 'https://cdn.discordapp.com/avatars/1331052881171976204/32938fa5476a5265badcfaf5adffe436.png?size=2048',
  },
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
