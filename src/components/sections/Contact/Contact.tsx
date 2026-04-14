'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '@/lib/animations'
import GradientText from '@/components/ui/GradientText'
import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'

interface Ripple {
  id: number
  x: number
  y: number
}

function AnimatedInput({
  label,
  type = 'text',
  textarea = false,
  value,
  onChange,
  name,
}: {
  label: string
  type?: string
  textarea?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  name: string
}) {
  const [focused, setFocused] = useState(false)
  const floated = focused || value.length > 0

  const inputClass = cn(
    'w-full bg-transparent border-0 border-b pb-3 pt-6 text-white outline-none transition-all duration-300 resize-none font-sans',
    focused ? 'border-accent-blue' : 'border-border-subtle'
  )

  return (
    <div className="relative mb-8">
      <label
        className={cn(
          'absolute left-0 pointer-events-none transition-all duration-200 font-mono',
          floated
            ? 'top-0 text-xs text-accent-blue'
            : 'top-5 text-base text-white/40'
        )}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className={inputClass}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          name={name}
          type={type}
          className={inputClass}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-accent"
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ originX: 0 }}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const btnRef = useRef<HTMLButtonElement>(null)
  const rippleId = useRef(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const fireRipple = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const id = ++rippleId.current
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }])
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700)
  }, [])

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUpVariant}>
            <SectionLabel index="04" label="Contact" className="justify-center" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Let&apos;s build something{' '}
              <GradientText>together</GradientText>
            </h2>
            <p className="text-white/50 text-lg">
              Got a project in mind? I&apos;d love to hear about it.
            </p>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="glass rounded-2xl p-8 lg:p-12 shadow-glow-mixed"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-6">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
              <p className="text-white/50">I&apos;ll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <AnimatedInput
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <AnimatedInput
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              <AnimatedInput
                label="Message"
                name="message"
                textarea
                value={form.message}
                onChange={handleChange}
              />

              {error && (
                <p className="text-red-400 text-sm font-mono mb-4">{error}</p>
              )}

              <div className="flex justify-end mt-4">
                <button
                  ref={btnRef}
                  type="submit"
                  onClick={fireRipple}
                  disabled={sending}
                  className="relative overflow-hidden px-10 py-4 rounded-full bg-gradient-accent text-white font-semibold text-sm tracking-wide shadow-glow-blue hover:shadow-glow-mixed transition-shadow duration-300 disabled:opacity-60"
                  data-magnetic
                >
                  <span className="relative z-10">
                    {sending ? 'Sending...' : 'Send Message'}
                  </span>
                  {/* SVG ripples */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
                    {ripples.map((rp) => (
                      <circle
                        key={rp.id}
                        cx={rp.x}
                        cy={rp.y}
                        r="0"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1.5"
                        className="animate-ripple"
                      >
                        <animate attributeName="r" from="0" to="150" dur="0.7s" fill="freeze" />
                        <animate attributeName="opacity" from="0.4" to="0" dur="0.7s" fill="freeze" />
                      </circle>
                    ))}
                  </svg>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
