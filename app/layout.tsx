import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'

import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Platform',
  description: 'Your AI-powered platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative">
              {children}
            </div>
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
