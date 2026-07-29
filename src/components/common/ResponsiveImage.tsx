import type { CSSProperties } from 'react'

type ResponsiveImageProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
  objectPosition?: string
  sizes?: string
}

export function ResponsiveImage({
  src,
  alt,
  className = '',
  priority = false,
  objectPosition = 'center',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width="800"
      height="1200"
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      sizes={sizes}
      style={{ '--object-position': objectPosition } as CSSProperties}
    />
  )
}
