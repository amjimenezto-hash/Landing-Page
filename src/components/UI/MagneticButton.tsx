import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './MagneticButton.module.css'

interface Props {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
}

export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
}: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setOffset({ x: (e.clientX - cx) * 0.3, y: (e.clientY - cy) * 0.3 })
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
