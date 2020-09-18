import React, { useEffect, useRef } from 'react'
const Skycons = require('skycons')(window)

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

interface Props
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

export default function SkyconsComponent(props: Props) {
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
      {...restPops}
    />
  )
}
