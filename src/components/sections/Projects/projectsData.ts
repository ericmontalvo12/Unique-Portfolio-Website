import { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Rock Mountain Performance',
    description:
      'Ecommerce storefront for a testosterone supplement brand. Pre-order flow, Stripe checkout, product catalog, and conversion-optimized landing page.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
    liveUrl: 'https://www.rockmountainperformance.com/',
    featured: true,
    gradient: 'from-accent-blue/20 to-accent-purple/20',
  },
  {
    title: 'OpsDesk',
    description:
      'Internal SaaS for a property management company. Live inventory tracking, stock dispatch, work orders, receiving logs, and multi-user access — replacing spreadsheets with a real-time operations dashboard.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Supabase'],
    liveUrl: 'https://inventory-management-orcin-ten.vercel.app/dashboard',
    featured: true,
    gradient: 'from-accent-purple/20 to-pink-500/20',
  },
  {
    title: 'HR General Services',
    description:
      'Marketing site for an interior remodeling company. Service pages, photo gallery, and quote request flow built for local SEO and lead generation.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://hrgeneralservices.vercel.app/',
    gradient: 'from-green-400/20 to-accent-blue/20',
  },
  {
    title: 'Park Passport',
    description:
      'iOS/Android app for tracking national and state park visits. Log check-ins, browse parks by state, and build your personal visited map.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Maps API'],
    gradient: 'from-accent-cyan/20 to-accent-purple/20',
  },
  {
    title: 'Park Planner',
    description:
      'Camping trip planner that matches you to campgrounds based on activities, budget, location, and camping style.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    gradient: 'from-yellow-400/20 to-accent-blue/20',
  },
]
