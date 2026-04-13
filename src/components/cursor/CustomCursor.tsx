'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    let animFrameId: number
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-magnetic]') ||
        target.closest('[data-hover]')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
      // Ring lags behind for smooth feel
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`
      }
      animFrameId = requestAnimationFrame(animate)
    }

    animFrameId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <>
      {/* Inner dot — instant tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#00d4ff',
          willChange: 'transform',
          transition: isClicking ? 'width 0.1s, height 0.1s' : undefined,
          ...(isClicking ? { width: 12, height: 12 } : {}),
        }}
      />
      {/* Outer ring — slightly lagging */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? '#7b2ff7' : 'rgba(0,212,255,0.6)'}`,
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, opacity 0.2s',
          transform: isHovering ? 'scale(1.6)' : 'scale(1)',
          ...(isHovering ? { width: 32, height: 32 } : {}),
        }}
      />
    </>
  )
}
