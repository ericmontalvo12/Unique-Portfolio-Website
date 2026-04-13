'use client'

import { useFrame } from '@react-three/fiber'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function CameraRig() {
  const mousePos = useMousePosition()

  useFrame(({ camera }) => {
    camera.position.x += (mousePos.current.normX * 0.5 - camera.position.x) * 0.05
    camera.position.y += (mousePos.current.normY * 0.3 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}
