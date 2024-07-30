import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hola',
  description: 'Chika Dora',
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
