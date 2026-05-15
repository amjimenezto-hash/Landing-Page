import { motion } from 'framer-motion'
import SectionLabel from '@/components/UI/SectionLabel'
import { services } from '@/data'
import { fadeUp, viewportConfig } from '@/animations/variants'
import styles from './Services.module.css'

export default function Services() {
  return (
    <div className={styles.bg}>
      <section id="servicios" className={styles.section}>
        <SectionLabel>Servicios</SectionLabel>

        <motion.h2
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Lo que puedo
          <br />
          hacer por ti.
        </motion.h2>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={styles.card}
              variants={fadeUp}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ background: 'rgba(78,229,111,0.04)' }}
            >
              {service.image && (
                <div className={styles.cardImage}>
                  <img src={service.image} alt={service.title} />
                </div>
              )}

              <div className={styles.iconBox}>
                <service.icon size={22} color="var(--color-neon)" />
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>

              <div className={styles.tags}>
                {service.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
