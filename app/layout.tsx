import './globals.css'
import { Header, Footer } from '@/components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Identity Resolution Solution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Save time and money with our identity resolution solution." />
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <Header />
      {children}
      <Footer />

    </html>
  )
}
