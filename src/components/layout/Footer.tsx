import GradientText from '@/components/ui/GradientText'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-10 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-white/30">
          © {new Date().getFullYear()} <GradientText>Eric Montalvo</GradientText>. Built with Next.js + Three.js.
        </span>
        <span className="font-mono text-xs text-white/20">
          Designed & developed with care
        </span>
      </div>
    </footer>
  )
}
