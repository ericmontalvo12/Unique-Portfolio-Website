'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import FloatingGeometry from './FloatingGeometry'
import ParticleField from './ParticleField'
import CameraRig from './CameraRig'
import PostProcessing from './PostProcessing'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function HeroScene() {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, isMobile ? 1 : 2]}
      gl={{ antialias: !isMobile, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.9} color="#00d4ff" />
      <pointLight position={[-5, -3, -5]} intensity={0.7} color="#7b2ff7" />

      <Suspense fallback={null}>
        <FloatingGeometry />
        {!prefersReducedMotion && (
          <ParticleField count={isMobile ? 1500 : 4000} />
        )}
        <CameraRig />
        {!isMobile && <PostProcessing />}
      </Suspense>
    </Canvas>
  )
}
