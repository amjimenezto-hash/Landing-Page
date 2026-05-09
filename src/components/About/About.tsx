import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import MagneticButton from '@/components/UI/MagneticButton'
import { stats } from '@/data'
import { fadeUp, scaleIn, viewportConfig } from '@/animations/variants'
import profileImg from '@/assets/profile.png'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.bg}>
      <section id="sobre-mi" className={styles.section}>
        <SectionLabel>Sobre mí</SectionLabel>

        <div className={styles.grid}>
          {/* Photo column */}
          <motion.div
            className={styles.profileContainer}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className={styles.profileGlow} />
            <div className={styles.profileDecoration} />
            <div className={styles.profileWrapper}>
              <img
                src={profileImg}
                alt="Ana María Jiménez Tovar"
                className={styles.profileImg}
              />
            </div>
          </motion.div>

          {/* Text column */}
          <div>
            <motion.h2
              className={styles.heading}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              Construyendo el futuro
              <br />
              <span className={styles.accent}>paso a paso.</span>
            </motion.h2>

            <motion.p
              className={styles.body}
              variants={fadeUp}
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              Soy <strong>Ana María Jiménez Tovar</strong>, una ingeniera
              apasionada por el desarrollo de los talentos en las organizaciones.
              Mi objetivo es transformar ideas organizacionales complejas en
              experiencias para los talentos.
            </motion.p>

            <motion.p
              className={styles.body}
              variants={fadeUp}
              custom={0.25}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              style={{ marginBottom: 40 }}
            >
              Creo en el poder de la gestión del talento humano y la cultura
              organizacional para fortalecer los valores de una empresa. Cada
              proyecto y estrategia en los que participo están enfocados en
              generar bienestar, desarrollo y un impacto positivo y duradero
              en las personas y la organización.
            </motion.p>

            {/* Stats grid integrated here or below */}
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className={styles.statCard}
                  variants={scaleIn}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  whileHover={{ background: 'rgba(78,229,111,0.05)', borderColor: 'rgba(78,229,111,0.2)' }}
                >
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              custom={0.35}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              style={{ marginTop: 40 }}
            >
              <MagneticButton variant="ghost">
                Ver Trayectoria <ExternalLink size={14} />
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
