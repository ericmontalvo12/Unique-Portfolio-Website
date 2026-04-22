'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import SectionLabel from '@/components/ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 max-w-4xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

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

        <motion.p variants={fadeUpVariant} className="text-white/60 leading-relaxed mb-4 text-lg max-w-2xl">
          I craft production-ready web and mobile products — from ecommerce storefronts
          and internal SaaS tools to consumer mobile apps.
        </motion.p>

        <motion.p variants={fadeUpVariant} className="text-white/60 leading-relaxed text-lg max-w-2xl">
          When I&apos;m not shipping client work, I&apos;m building side projects and
          exploring new tech — currently going deep on React Native and mobile-first
          product development.
        </motion.p>
      </motion.div>
    </section>
  )
}
