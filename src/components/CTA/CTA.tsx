import { motion } from 'framer-motion'
import { Mail, Github } from 'lucide-react'
import SectionLabel from '@/components/UI/SectionLabel'
import MagneticButton from '@/components/UI/MagneticButton'
import { fadeUp, viewportConfig } from '@/animations/variants'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <div className={styles.bg} id="contacto">
      <div className={styles.glow} />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionLabel>Empecemos</SectionLabel>

          <motion.h2
            className={styles.heading}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Tu próximo proyecto
            <br />
            <span className={styles.accent}>empieza aquí.</span>
          </motion.h2>

          <motion.p
            className={styles.body}
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            ¿Tienes una idea que quiere desafiar la gravedad? Hablemos.
            Transformamos visiones en productos digitales de clase mundial.
          </motion.p>

          <motion.div
            className={styles.ctas}
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <MagneticButton>
              <Mail size={16} /> Contáctame
            </MagneticButton>
            <MagneticButton variant="ghost">
              <Github size={16} /> GitHub
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
