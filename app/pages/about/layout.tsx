import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'this is about',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
