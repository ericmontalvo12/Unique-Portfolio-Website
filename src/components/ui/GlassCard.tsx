'use client'

import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: 'blue' | 'purple' | 'none'
}

export default function GlassCard({ children, className, glow = 'none' }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl shadow-card',
        glow === 'blue' && 'shadow-glow-blue',
        glow === 'purple' && 'shadow-glow-purple',
        className
      )}
    >
      {children}
    </div>
  )
}
