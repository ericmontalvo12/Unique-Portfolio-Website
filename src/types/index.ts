export interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  appStoreUrl?: string
  playStoreUrl?: string
  comingSoon?: boolean
  gradient: string
  image?: string
}

export interface Skill {
  name: string
  category: 'language' | 'framework' | 'tool' | 'design'
}

export interface NavLink {
  label: string
  href: string
}
