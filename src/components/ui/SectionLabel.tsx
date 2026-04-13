import { cn } from '@/lib/utils'

interface SectionLabelProps {
  index: string
  label: string
  className?: string
}

export default function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-4', className)}>
      <span className="text-accent-blue font-mono text-sm">{index}</span>
      <div className="h-px w-8 bg-accent-blue/40" />
      <span className="text-white/50 font-mono text-xs uppercase tracking-[0.2em]">{label}</span>
    </div>
  )
}
