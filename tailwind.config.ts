import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: 'rgba(255,255,255,0.03)',
        'surface-hover': 'rgba(255,255,255,0.06)',
        'accent-blue': '#00d4ff',
        'accent-purple': '#7b2ff7',
        'accent-cyan': '#00fff0',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'border-glow': 'rgba(0,212,255,0.3)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%)',
        'gradient-accent-r': 'linear-gradient(135deg, #7b2ff7 0%, #00d4ff 100%)',
        'gradient-radial-blue': 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
        'gradient-radial-purple': 'radial-gradient(circle, rgba(123,47,247,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(123,47,247,0.3)' },
        },
        borderSpin: {
          '0%': { '--angle': '0deg' } as Record<string, string>,
          '100%': { '--angle': '360deg' } as Record<string, string>,
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(0,212,255,0.25)',
        'glow-purple': '0 0 40px rgba(123,47,247,0.25)',
        'glow-mixed': '0 0 60px rgba(0,212,255,0.15), 0 0 100px rgba(123,47,247,0.10)',
        'card': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.43, 0.195, 0.02, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}

export default config
