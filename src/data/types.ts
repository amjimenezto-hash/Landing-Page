import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface Project {
  title: string
  category: string
  year: string
  accentColor: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  stars: number
}

export interface Social {
  icon: LucideIcon
  label: string
  href: string
}
