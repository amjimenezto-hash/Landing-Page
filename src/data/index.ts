import type { Service, Project, Testimonial, NavLink, Stat, Social } from './types'
import { Code2, Layers, Zap, Globe, Twitter, Github, Linkedin, Mail } from 'lucide-react'
import talentoImg from '@/assets/talento.jpg'
import culturaImg from '@/assets/cultura.jpg'
import ideasImg from '@/assets/ideas.jpg'

export const navLinks: NavLink[] = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios',href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contacto' },
]

export const stats: Stat[] = [
  { value: '3+',   label: 'Años de trayectoria' },
  { value: '40+',  label: 'Proyectos realizados' },
  { value: '100%', label: 'Compromiso total' },
  { value: '∞',    label: 'Pasión por el diseño' },
]

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Gestión del Talento',
    image: talentoImg,
    description:
      'Diseño e implementación de estrategias para identificar y potenciar el talento dentro de las organizaciones.',
    tags: ['Estrategia', 'Liderazgo', 'Desarrollo'],
  },
  {
    icon: Layers,
    title: 'Cultura Organizacional',
    image: culturaImg,
    description:
      'Fortalecimiento de los valores corporativos y creación de ambientes de trabajo que fomentan el bienestar y la productividad.',
    tags: ['Cultura', 'Engagement', 'Valores'],
  },
  {
    icon: Zap,
    title: 'Transformación de Ideas',
    image: ideasImg,
    description:
      'Conversión de conceptos organizacionales complejos en experiencias prácticas y memorables para los colaboradores.',
    tags: ['Innovación', 'Experiencia', 'Impacto'],
  },
  {
    icon: Globe,
    title: 'Consultoría Estratégica',
    description:
      'Asesoría técnica y humana para fortalecer el tejido organizacional y asegurar un crecimiento sostenible.',
    tags: ['Consultoría', 'Sostenibilidad', 'Bienestar'],
  },
]

export const projects: Project[] = [
  {
    title: 'Programa de Liderazgo',
    category: 'Estrategia · Desarrollo',
    year: '2024',
    accentColor: '#246B34',
    description:
      'Implementación de un modelo de competencias para mandos medios en una multinacional.',
  },
  {
    title: 'Cultura en Movimiento',
    category: 'Cultura · Engagement',
    year: '2024',
    accentColor: '#329447',
    description:
      'Rediseño de la experiencia del empleado para mejorar la retención del talento clave.',
  },
  {
    title: 'Optimización de Procesos HR',
    category: 'Consultoría · Eficiencia',
    year: '2023',
    accentColor: '#3FB759',
    description:
      'Digitalización y mejora de los procesos de onboarding y formación continua.',
  },
  {
    title: 'Bienestar Corporativo',
    category: 'Bienestar · Impacto',
    year: '2023',
    accentColor: '#174220',
    description:
      'Desarrollo de un ecosistema de beneficios centrado en la salud mental y física.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Ana María tiene una visión única para conectar la ingeniería con el lado humano. Su impacto en nuestra cultura fue inmediato.',
    author: 'Daniela Castro',
    role: 'Directora de Operaciones',
    stars: 5,
  },
  {
    quote:
      'La capacidad de transformar problemas complejos en soluciones de talento es lo que hace a Ana María una colaboradora excepcional.',
    author: 'Felipe Vargas',
    role: 'CEO, Tech Innovate',
    stars: 5,
  },
]

export const socials: Social[] = [
  { icon: Twitter,  label: 'Twitter',  href: '#' },
  { icon: Github,   label: 'GitHub',   href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail,     label: 'Email',    href: 'mailto:contacto@anamariajimenez.com' },
]
