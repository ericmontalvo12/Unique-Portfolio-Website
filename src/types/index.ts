export interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  gradient: string
}

export interface Skill {
  name: string
  category: 'language' | 'framework' | 'tool' | 'design'
}

export interface NavLink {
  label: string
  href: string
}
