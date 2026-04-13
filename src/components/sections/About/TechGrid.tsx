'use client'

import { motion } from 'framer-motion'
import { staggerFast, scaleInVariant } from '@/lib/animations'

const techs = [
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Three.js', color: '#00d4ff' },
  { name: 'Tailwind', color: '#38bdf8' },
  { name: 'Framer', color: '#bb22ff' },
  { name: 'GSAP', color: '#88ce02' },
  { name: 'Figma', color: '#f24e1e' },
  { name: 'Node.js', color: '#84cc16' },
  { name: 'GraphQL', color: '#e535ab' },
  { name: 'WebGL', color: '#7b2ff7' },
  { name: 'CSS', color: '#00d4ff' },
]

export default function TechGrid() {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-3 sm:grid-cols-4 gap-3"
    >
      {techs.map((tech) => (
        <motion.div
          key={tech.name}
          variants={scaleInVariant}
          className="glass rounded-xl p-3 flex items-center gap-2 glass-hover transition-all duration-300 group"
          data-hover
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
            style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}60` }}
          />
          <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
