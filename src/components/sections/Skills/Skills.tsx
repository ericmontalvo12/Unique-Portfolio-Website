'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant, staggerFast } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import SectionLabel from '@/components/ui/SectionLabel'
import { Skill } from '@/types'
import { cn } from '@/lib/utils'

const skills: Skill[] = [
  { name: 'Next.js', category: 'framework' },
  { name: 'React', category: 'framework' },
  { name: 'React Native', category: 'framework' },
  { name: 'Expo', category: 'framework' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'shadcn/ui', category: 'framework' },
  { name: 'Framer Motion', category: 'framework' },
  { name: 'Supabase', category: 'tool' },
  { name: 'Stripe', category: 'tool' },
  { name: 'PostgreSQL', category: 'tool' },
  { name: 'Node.js', category: 'framework' },
  { name: 'REST APIs', category: 'tool' },
  { name: 'HTML / CSS', category: 'language' },
  { name: 'Figma', category: 'design' },
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Responsive Design', category: 'design' },
  { name: 'Git', category: 'tool' },
  { name: 'Vercel', category: 'tool' },
]

const categoryColors: Record<Skill['category'], string> = {
  language: 'border-accent-blue/30 text-accent-blue',
  framework: 'border-accent-purple/30 text-accent-purple',
  tool: 'border-accent-cyan/30 text-accent-cyan',
  design: 'border-pink-400/30 text-pink-400',
}

const floatDelays = [0, 1.2, 2.4, 0.6, 1.8, 3.0, 0.3, 1.5, 2.7, 0.9, 2.1, 3.3, 0.4, 1.6, 2.8, 0.7, 1.9, 3.1, 0.2, 1.4]
const floatDurations = [5, 6, 7, 5.5, 6.5, 4.5, 7, 5, 6, 5.5, 6.5, 4.5, 6, 7, 5, 6.5, 5.5, 4.5, 7, 6]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Background glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <SectionLabel index="03" label="Skills" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            My{' '}
            <GradientText>toolkit</GradientText>
          </h2>
        </motion.div>

        {/* Floating skill tags */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -10 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
              className={cn(
                'px-5 py-2.5 rounded-full border text-sm font-mono',
                'glass transition-all duration-300',
                'hover:scale-110 hover:shadow-glow-blue',
                categoryColors[skill.category]
              )}
              style={{
                animationDelay: `${floatDelays[i % floatDelays.length]}s`,
                animationDuration: `${floatDurations[i % floatDurations.length]}s`,
              }}
              data-hover
              whileHover={{ y: -4, scale: 1.08 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Category legend */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {Object.entries(categoryColors).map(([cat, cls]) => (
            <div key={cat} className="flex items-center gap-2">
              <div className={cn('w-2 h-2 rounded-full border', cls.replace('text-', 'bg-').split(' ')[0])} />
              <span className="text-xs font-mono text-white/40 capitalize">{cat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
