import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SDG_Cards',
  description: 'A simple search filter for cards with user profiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <main >
            <div >
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
