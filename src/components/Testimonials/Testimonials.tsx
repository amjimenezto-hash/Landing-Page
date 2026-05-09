import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import { testimonials } from '@/data'
import { scaleIn, viewportConfig } from '@/animations/variants'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <div className={styles.bg}>
      <section id="testimonios" className={styles.section}>
        <SectionLabel>Testimonios</SectionLabel>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Lo que dicen
          <br />
          los clientes.
        </motion.h2>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className={styles.card}
              variants={scaleIn}
              custom={i * 0.12}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className={styles.glow} />

              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} color="var(--color-neon)" fill="var(--color-neon)" />
                ))}
              </div>

              <p className={styles.quote}>"{t.quote}"</p>

              <div className={styles.author}>
                <span className={styles.authorName}>{t.author}</span>
                <span className={styles.authorRole}>{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
