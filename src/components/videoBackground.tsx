import React from 'react'
import join from '../utils'

interface VideoBackgroundProps {
  src: string
  className?: string
  children?: React.ReactNode
  fallbackColor?: string // Optional background color
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  className = '',
  children,
  fallbackColor = 'bg-black', // default fallback
}) => {
  return (
    <div
      className={join(
        'relative w-full h-full overflow-hidden',
        `${fallbackColor} ${className}`,
      )}
    >
      {/* Video fills parent container */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={src}
          type='video/mp4'
        />
        {/* If video fails to load, the fallbackColor shows through */}
      </video>

      <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-0' />

      {/* Content layered above */}
      <div className={join('relative z-10 w-full h-full')}>{children}</div>
    </div>
  )
}

export default VideoBackground
