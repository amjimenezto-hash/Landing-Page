import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import MagneticButton from '@/components/UI/MagneticButton'
import { projects } from '@/data'
import { slideInLeft, viewportConfig } from '@/animations/variants'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <div className={styles.bg}>
      <section id="portfolio" className={styles.section}>
        <SectionLabel>Portfolio</SectionLabel>

        <div className={styles.header}>
          <motion.h2
            className={styles.heading}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Trabajo
            <br />
            selecto.
          </motion.h2>
          <MagneticButton variant="ghost">
            Ver todo <ArrowRight size={14} />
          </MagneticButton>
        </div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.item}
              variants={slideInLeft}
              custom={i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ x: 8, background: 'rgba(78,229,111,0.04)', borderColor: 'rgba(78,229,111,0.15)' }}
            >
              <div
                className={styles.dot}
                style={{
                  background: p.accentColor,
                  boxShadow: `0 0 12px ${p.accentColor}80`,
                }}
              />

              <div className={styles.info}>
                <div className={styles.row}>
                  <span className={styles.title}>{p.title}</span>
                  <span className={styles.category}>{p.category}</span>
                </div>
                <p className={styles.desc}>{p.description}</p>
              </div>

              <span className={styles.year}>{p.year}</span>
              <ExternalLink size={16} color="rgba(78,229,111,0.4)" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
