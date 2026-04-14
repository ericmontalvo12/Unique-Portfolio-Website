'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { type Mesh, type Group } from 'three'

interface FloatingGeometryProps {
  mouseInfluence?: number
}

export default function FloatingGeometry({ mouseInfluence = 0.15 }: FloatingGeometryProps) {
  const icoRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)
  const orbitRef = useRef<Group>(null)

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

    if (orbitRef.current) {
      const angle = t * 0.5
      orbitRef.current.position.x = Math.cos(angle) * 2.5
      orbitRef.current.position.z = Math.sin(angle) * 2.5
      orbitRef.current.position.y = Math.sin(t * 0.7) * 0.5
      orbitRef.current.rotation.x = t * 0.8
      orbitRef.current.rotation.y = t * 0.6
      orbitRef.current.rotation.z = t * 0.4
    }
  })

  return (
    <>
      {/* Icosahedron — wireframe blue (detail=4 for smooth hi-res wireframe) */}
      <mesh ref={icoRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.4, 4]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>

      {/* Torus Knot — higher segment counts for smooth silhouette at 4K */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.8, 0.22, 300, 48]} />
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

      {/* Octahedron orbiter — solid */}
      <group ref={orbitRef}>
        <mesh>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#00fff0"
            emissive="#00fff0"
            emissiveIntensity={0.12}
            roughness={0.15}
            metalness={0.85}
            flatShading
          />
        </mesh>
      </group>
    </>
  )
}
