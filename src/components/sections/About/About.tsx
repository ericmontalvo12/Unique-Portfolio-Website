'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant, slideInLeft, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import SectionLabel from '@/components/ui/SectionLabel'
import TechGrid from './TechGrid'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — Avatar & identity */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center lg:items-start"
        >
          {/* Avatar card with spinning glow border */}
          <div className="relative mb-8">
            <div className="avatar-border-glow">
              <div className="bg-background rounded-[14px] p-1">
                <div className="w-64 h-64 rounded-xl bg-gradient-accent flex items-center justify-center overflow-hidden">
                  {/* Placeholder avatar with initials */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20" />
                    <span className="text-7xl font-bold text-gradient select-none z-10">EM</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating status badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-full px-4 py-2 flex items-center gap-2 animate-pulse-glow">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-white/80">Available for hire</span>
            </div>
          </div>
        </motion.div>

        {/* Right — Story & Tech */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUpVariant}>
            <SectionLabel index="01" label="About Me" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Building the web&apos;s{' '}
              <GradientText>next layer</GradientText>
            </h2>
          </motion.div>

          <motion.p variants={fadeUpVariant} className="text-white/60 leading-relaxed mb-4">
            I&apos;m a Frontend/UI developer who lives at the intersection of design and
            engineering. I specialize in turning complex ideas into fluid, beautiful
            interfaces — from pixel-perfect layouts to immersive 3D experiences.
          </motion.p>

          <motion.p variants={fadeUpVariant} className="text-white/60 leading-relaxed mb-10">
            When I&apos;m not pushing pixels, I&apos;m exploring the cutting edge of WebGL,
            animation libraries, and the browser&apos;s rendering pipeline. I believe
            the best UI feels inevitable — like it could only have been built this way.
          </motion.p>

          <motion.div variants={fadeUpVariant}>
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
              Tech I work with
            </p>
            <TechGrid />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
