import { motion } from 'framer-motion'
import { fadeIn, viewportConfig } from '@/animations/variants'
import styles from './SectionLabel.module.css'

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className={styles.wrapper}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className={styles.line} />
      <span className={styles.text}>{children}</span>
    </motion.div>
  )
}
