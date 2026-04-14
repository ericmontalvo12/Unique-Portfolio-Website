import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: 'linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%)',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: '-0.5px',
          fontFamily: 'sans-serif',
        }}
      >
        EM
      </div>
    ),
    { ...size }
  )
}
