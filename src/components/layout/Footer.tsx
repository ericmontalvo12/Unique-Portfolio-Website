import GradientText from '@/components/ui/GradientText'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-10 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <span className="font-mono text-sm text-white/30">
          © {new Date().getFullYear()} <GradientText>Eric Montalvo</GradientText>
        </span>
      </div>
    </footer>
  )
}
