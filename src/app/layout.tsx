import type { Metadata } from 'next'
import localFont from 'next/font/local'
import dynamic from 'next/dynamic'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono',
  weight: '100 900',
})

const SmoothScrollProvider = dynamic(
  () => import('@/components/providers/SmoothScrollProvider'),
  { ssr: false }
)

const CustomCursor = dynamic(
  () => import('@/components/cursor/CustomCursor'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'Eric Montalvo — Frontend Developer & UI Engineer',
  description:
    'Frontend developer specializing in immersive UI experiences, 3D web, and creative interactions. React, Three.js, TypeScript.',
  keywords: ['Frontend Developer', 'UI Engineer', 'React', 'Three.js', 'Portfolio'],
  openGraph: {
    title: 'Eric Montalvo — Frontend Developer',
    description: 'Crafting immersive digital experiences where design meets technology.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-white`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
