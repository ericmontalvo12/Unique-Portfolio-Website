'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

interface ParticleFieldProps {
  count?: number
  spread?: number
  mouseRadius?: number
}

export default function ParticleField({
  count = 4000,
  spread = 18,
  mouseRadius = 2.5,
}: ParticleFieldProps) {
  const geomRef = useRef<THREE.BufferGeometry>(null)
  const mousePos = useMousePosition()
  const { viewport } = useThree()

  const { positions, colors, origins, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const origins = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    const colorA = new THREE.Color('#00d4ff')
    const colorB = new THREE.Color('#7b2ff7')

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread
      const y = (Math.random() - 0.5) * spread
      const z = (Math.random() - 0.5) * (spread * 0.4)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      origins[i * 3] = x
      origins[i * 3 + 1] = y
      origins[i * 3 + 2] = z

      // Gradient color by position
      const t = (x / spread + 0.5)
      const col = colorA.clone().lerp(colorB, t)
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }

    return { positions, colors, origins, velocities }
  }, [count, spread])

  useFrame(() => {
    if (!geomRef.current) return

    const pos = geomRef.current.attributes.position.array as Float32Array
    const mx = mousePos.current.normX * viewport.width * 0.5
    const my = mousePos.current.normY * viewport.height * 0.5

    for (let i = 0; i < count; i++) {
      const px = pos[i * 3]
      const py = pos[i * 3 + 1]
      const dist = Math.hypot(px - mx, py - my)

      if (dist < mouseRadius && dist > 0.001) {
        const force = ((mouseRadius - dist) / mouseRadius) * 0.06
        const angle = Math.atan2(py - my, px - mx)
        velocities[i * 3] += Math.cos(angle) * force
        velocities[i * 3 + 1] += Math.sin(angle) * force
      }

      // Apply velocity + damping
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      velocities[i * 3] *= 0.92
      velocities[i * 3 + 1] *= 0.92

      // Spring back to origin
      pos[i * 3] += (origins[i * 3] - pos[i * 3]) * 0.015
      pos[i * 3 + 1] += (origins[i * 3 + 1] - pos[i * 3 + 1]) * 0.015
    }

    geomRef.current.attributes.position.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry ref={geomRef}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
