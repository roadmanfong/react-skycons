import React, { useEffect, useRef } from 'react'
const globalThis = require('globalthis')()
const Skycons = require('skycons')(globalThis)

export enum SkyconsType {
  CLEAR_DAY = 'CLEAR_DAY',
  CLEAR_NIGHT = 'CLEAR_NIGHT',
  PARTLY_CLOUDY_DAY = 'PARTLY_CLOUDY_DAY',
  PARTLY_CLOUDY_NIGHT = 'PARTLY_CLOUDY_NIGHT',
  CLOUDY = 'CLOUDY',
  RAIN = 'RAIN',
  SLEET = 'SLEET',
  SNOW = 'SNOW',
  WIND = 'WIND',
  FOG = 'FOG',
}

export interface SkyconsProps
  extends React.DetailedHTMLProps<
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  > {
  color?: string
  animate?: boolean
  resizeClear?: boolean
  type: SkyconsType
  size?: number
}

export default function SkyconsComponent(props: SkyconsProps) {
  const {
    color,
    animate = true,
    resizeClear,
    type,
    style,
    size = 24,
    ...restPops
  } = props

  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const skycons = new Skycons({
      color,
      resizeClear,
    })

    skycons.add(canvasRef.current, Skycons[type])
    if (animate) {
      skycons.play()
    }
    return () => {
      skycons.pause()
      skycons.remove()
    }
  }, [animate, color, type, resizeClear])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      aria-label={type}
      role="img"
      {...restPops}
    />
  )
}
