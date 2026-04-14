'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from '@/lib/gsap-config'
import GradientText from '@/components/ui/GradientText'
import MagneticButton from '@/components/ui/MagneticButton'

const TypeAnimation = dynamic(
  () => import('react-type-animation').then((m) => ({ default: m.TypeAnimation })),
  { ssr: false, loading: () => <span className="opacity-0">_</span> }
)

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        '.hero-line-1',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 }
      )
        .fromTo(
          '.hero-line-2',
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          '.hero-typewriter',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          '.hero-desc',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.2'
        )
        .fromTo(
          '.hero-ctas',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.hero-scroll',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.2'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col justify-center h-full max-w-5xl mx-auto px-6 lg:px-12"
    >
      {/* Subtle label */}
      <div className="flex items-center gap-3 mb-6 opacity-0 hero-line-1">
        <div className="h-px w-12 bg-accent-blue" />
        <span className="font-mono text-accent-blue text-sm tracking-[0.2em] uppercase">
          Portfolio
        </span>
      </div>

      {/* Main headline */}
      <div className="overflow-hidden mb-2">
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight text-white hero-line-2">
          Eric<br />
          <GradientText>Montalvo</GradientText>
        </h1>
      </div>

      {/* Typewriter */}
      <div className="hero-typewriter mb-6 h-10 flex items-center">
        <span className="font-mono text-white/60 text-lg mr-2">&gt;</span>
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'Web & Mobile Engineer',
            2000,
            'Next.js Developer',
            2000,
            'React Native Developer',
            2000,
            'SaaS Builder',
            2000,
          ]}
          wrapper="span"
          cursor
          repeat={Infinity}
          className="font-mono text-accent-blue text-lg"
        />
      </div>

      {/* Description */}
      <p className="hero-desc text-white/55 text-lg max-w-xl leading-relaxed mb-10">
        I build web and mobile products people actually use — from ecommerce
        storefronts and SaaS dashboards to cross-platform mobile apps.
      </p>

      {/* CTAs */}
      <div className="hero-ctas flex flex-wrap gap-4">
        <MagneticButton href="#projects" variant="primary">
          View Work
        </MagneticButton>
        <MagneticButton href="#contact" variant="ghost">
          Get in Touch
        </MagneticButton>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-mono text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent-blue to-transparent animate-pulse" />
      </div>
    </div>
  )
}
