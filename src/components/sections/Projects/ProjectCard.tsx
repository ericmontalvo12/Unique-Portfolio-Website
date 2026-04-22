'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [shine, setShine] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotate({
      x: (y - 0.5) * -14,
      y: (x - 0.5) * 14,
    })
    setShine({ x: x * 100, y: y * 100 })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease' : 'transform 0.6s ease',
        }}
        className="relative h-full group"
        data-hover
      >
        {/* Card body */}
        <div
          className={cn(
            'relative h-full overflow-hidden rounded-2xl border border-border-subtle shadow-card',
            'bg-gradient-to-br',
            project.gradient,
            'backdrop-blur-sm transition-border-color duration-300',
            isHovered && 'border-accent-blue/30'
          )}
        >
          {/* Shine effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            }}
          />

          {/* Inner glass overlay */}
          <div className="absolute inset-0 bg-background/60 rounded-2xl" />

          {/* Content */}
          <div className="relative z-10 p-6 flex flex-col h-full min-h-[260px]">
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-white/30">{String(index + 1).padStart(2, '0')}</span>
              <div className="flex gap-3 items-center">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-accent-blue hover:text-accent-cyan transition-colors text-sm font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Site"
                  >
                    Visit Site ↗
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    className="text-accent-blue hover:text-accent-cyan transition-colors text-sm font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="App Store"
                  >
                    App Store ↗
                  </a>
                )}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    className="text-accent-cyan hover:text-white transition-colors text-sm font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Play"
                  >
                    Google Play ↗
                  </a>
                )}
                {project.comingSoon && !project.appStoreUrl && !project.playStoreUrl && (
                  <span className="text-xs font-mono text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">
                    Coming to App Store
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
              {project.title}
            </h3>

            <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-accent-blue/80 border border-accent-blue/20 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
