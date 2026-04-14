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
  title: 'Eric Montalvo — Full Stack Developer',
  description:
    'Full stack developer building web and mobile products — ecommerce storefronts, SaaS dashboards, and cross-platform mobile apps. Next.js, React Native, TypeScript.',
  keywords: ['Full Stack Developer', 'Next.js', 'React Native', 'TypeScript', 'Web Developer', 'Mobile Developer'],
  openGraph: {
    title: 'Eric Montalvo — Full Stack Developer',
    description: 'Building production-ready web and mobile products — from ecommerce storefronts and SaaS tools to consumer mobile apps.',
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
