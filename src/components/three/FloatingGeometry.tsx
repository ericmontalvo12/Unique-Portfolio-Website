'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'
import type { Mesh } from 'three'

interface FloatingGeometryProps {
  mouseInfluence?: number
}

export default function FloatingGeometry({ mouseInfluence = 0.15 }: FloatingGeometryProps) {
  const icoRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)
  const octaRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.15
      icoRef.current.rotation.x = Math.sin(t * 0.3) * 0.2
      icoRef.current.position.y = Math.sin(t * 0.4) * 0.3
    }

    if (torusRef.current) {
      torusRef.current.rotation.y = -t * 0.2
      torusRef.current.rotation.x = t * 0.1
      torusRef.current.rotation.z = t * 0.05
    }

    if (octaRef.current) {
      // Orbit around icosahedron
      const angle = t * 0.5
      octaRef.current.position.x = Math.cos(angle) * 2.5
      octaRef.current.position.z = Math.sin(angle) * 2.5
      octaRef.current.position.y = Math.sin(t * 0.7) * 0.5
      octaRef.current.rotation.x = t * 0.8
      octaRef.current.rotation.y = t * 0.6
    }
  })

  return (
    <>
      {/* Icosahedron — wireframe blue */}
      <mesh ref={icoRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>

      {/* Torus Knot — purple semi-transparent */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.8, 0.22, 180, 24]} />
        <meshStandardMaterial
          color="#7b2ff7"
          emissive="#3d0099"
          emissiveIntensity={0.8}
          transparent
          opacity={0.75}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Octahedron — cyan fast-spinning orbiter */}
      <mesh ref={octaRef}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#00fff0"
          emissive="#00fff0"
          emissiveIntensity={0.9}
          roughness={0.05}
          metalness={0.9}
        />
      </mesh>
    </>
  )
}
