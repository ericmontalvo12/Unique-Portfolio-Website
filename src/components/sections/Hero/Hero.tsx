'use client'

import dynamic from 'next/dynamic'
import HeroContent from './HeroContent'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-radial-blue opacity-30" />
  ),
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* 3D Canvas layer */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
        {/* Gradient fade-out at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />
      </div>

      {/* Radial glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Text content layer */}
      <HeroContent />
    </section>
  )
}
