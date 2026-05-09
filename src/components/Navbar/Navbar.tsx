import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { navLinks } from '@/data'
import MagneticButton from '@/components/UI/MagneticButton'
import styles from './Navbar.module.css'

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <a href="#inicio" className={styles.logo}>
        <span className={styles.logoWhite}>ANA</span>MARÍA
      </a>

      {/* Desktop links */}
      <ul className={styles.desktopLinks}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <motion.a
              href={link.href}
              className={styles.link}
              whileHover={{ color: 'var(--color-neon)' }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <div className={styles.desktopCta}>
        <MagneticButton>
          Trabajemos <ArrowRight size={14} />
        </MagneticButton>
      </div>

      {/* Mobile toggle */}
      <button
        className={styles.mobileToggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
