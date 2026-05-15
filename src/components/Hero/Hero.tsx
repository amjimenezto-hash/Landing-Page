import { useState, useEffect, Suspense } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Scene3D from './Scene3D'
import MagneticButton from '@/components/UI/MagneticButton'
import styles from './Hero.module.css'

const WORDS = ['Talento.', 'Cultura.', 'Estrategia.', 'Ana María.']

export default function Hero() {
  const { scrollY } = useScroll()
  const y       = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  const [wordIdx, setWordIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="inicio" className={styles.hero}>
      {/* 3D Background */}
      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlays */}
      <div className={styles.radialOverlay} />
      <div className={styles.gridOverlay} />

      {/* Content */}
      <motion.div className={styles.content} style={{ y, opacity }}>


        {/* Headline */}
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          ANA MARÍA
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIdx}
              className={styles.headlineAccent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {WORDS[wordIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          Ingeniería aplicada al desarrollo del talento humano. Transformando 
          visiones organizacionales en experiencias de alto impacto.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          <MagneticButton>
            Ver proyectos <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton variant="ghost">Sobre mí</MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} color="rgba(78,229,111,0.5)" />
        </motion.div>
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  )
}
