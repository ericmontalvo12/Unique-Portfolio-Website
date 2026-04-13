import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
}

export default function GradientText({ children, className, reverse }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        reverse ? 'bg-gradient-accent-r' : 'bg-gradient-accent',
        className
      )}
    >
      {children}
    </span>
  )
}
