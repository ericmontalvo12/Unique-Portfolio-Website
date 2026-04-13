'use client'

import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'ghost'
  strength?: number
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = 'primary',
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 })
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const baseClasses = cn(
    'relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden',
    variant === 'primary'
      ? 'bg-gradient-accent text-white shadow-glow-blue hover:shadow-glow-mixed'
      : 'glass border border-border-subtle text-white hover:border-accent-blue/40',
    className
  )

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      data-magnetic
    >
      {href ? (
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
          <span className="relative z-10">{children}</span>
        </a>
      ) : (
        <button onClick={onClick} className={baseClasses}>
          <span className="relative z-10">{children}</span>
        </button>
      )}
    </motion.div>
  )

  return content
}
