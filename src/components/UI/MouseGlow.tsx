import { useMousePosition } from '@/hooks/useMousePosition'
import styles from './MouseGlow.module.css'

export default function MouseGlow() {
  const { x, y } = useMousePosition()

  return (
    <div
      className={styles.glow}
      style={{ left: x - 200, top: y - 200 }}
    />
  )
}
