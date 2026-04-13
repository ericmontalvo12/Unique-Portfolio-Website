'use client'

import { useEffect, useRef } from 'react'

interface MousePosition {
  x: number // raw pixels
  y: number // raw pixels
  normX: number // normalized -1 to 1
  normY: number // normalized -1 to 1
}

export function useMousePosition() {
  const position = useRef<MousePosition>({ x: 0, y: 0, normX: 0, normY: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current = {
        x: e.clientX,
        y: e.clientY,
        normX: (e.clientX / window.innerWidth) * 2 - 1,
        normY: -((e.clientY / window.innerHeight) * 2 - 1),
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return position
}
