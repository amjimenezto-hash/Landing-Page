import { motion } from 'framer-motion'
import { socials } from '@/data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div>
          <div className={styles.brand}>
            <span className={styles.brandWhite}>ANA</span>MARÍA
          </div>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Ana María Jiménez Tovar.
          </p>
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          {socials.map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              className={styles.socialLink}
              aria-label={s.label}
              whileHover={{ scale: 1.1, color: 'var(--color-neon)', borderColor: 'rgba(78,229,111,0.35)' }}
            >
              <s.icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
