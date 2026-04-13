import { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Nebula UI',
    description:
      'A next-gen design system built with React and WebGL shaders. Features 40+ animated components, dark mode, and a11y-first architecture.',
    tags: ['React', 'WebGL', 'TypeScript', 'Storybook'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-accent-blue/20 to-accent-purple/20',
  },
  {
    title: '3D Product Configurator',
    description:
      'Real-time 3D product customization tool with photorealistic PBR materials. Supports instant screenshot export and AR preview mode.',
    tags: ['Three.js', 'React Three Fiber', 'GSAP', 'Next.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    gradient: 'from-accent-purple/20 to-pink-500/20',
  },
  {
    title: 'Motion Dashboard',
    description:
      'Analytics dashboard with data-driven animations. Every chart transition is choreographed using Framer Motion and D3.js.',
    tags: ['Framer Motion', 'D3.js', 'Tailwind', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-400/20 to-accent-blue/20',
  },
  {
    title: 'Immersive Portfolio Engine',
    description:
      'Open-source framework for building 3D portfolio websites. Ships with particle systems, scroll animations, and cursor effects.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'Open Source'],
    githubUrl: '#',
    gradient: 'from-accent-cyan/20 to-accent-purple/20',
  },
  {
    title: 'Type-Safe CMS',
    description:
      'Headless CMS with end-to-end type safety from database to UI. Real-time collaboration via WebSockets with conflict resolution.',
    tags: ['Next.js', 'tRPC', 'Prisma', 'WebSockets'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-yellow-400/20 to-accent-blue/20',
  },
  {
    title: 'Shader Art Generator',
    description:
      'Browser-based GLSL shader editor with live preview, parameter tweaking, and one-click export to high-res PNG.',
    tags: ['WebGL', 'GLSL', 'React', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-red-400/20 to-accent-purple/20',
  },
]
