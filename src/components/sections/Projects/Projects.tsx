'use client'

import { motion } from 'framer-motion'
import { fadeUpVariant } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from './ProjectCard'
import { projects } from './projectsData'

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Background glow */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <SectionLabel index="02" label="Selected Work" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Things I&apos;ve{' '}
            <GradientText>built</GradientText>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
