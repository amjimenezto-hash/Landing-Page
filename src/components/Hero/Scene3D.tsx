import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const count = 3000
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.04
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4EE56F"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function FloatingOrb() {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere args={[1.6, 64, 64]}>
        <MeshDistortMaterial
          color="#246B34"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.1}
          metalness={0.8}
          emissive="#4EE56F"
          emissiveIntensity={0.15}
        />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]}   color="#4EE56F" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#329447" intensity={1} />
      <ParticleField />
      <FloatingOrb />
    </>
  )
}
