import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Into The Cosmos',
  description: 'An educational journey through the cosmos.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
