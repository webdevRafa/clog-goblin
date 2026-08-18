import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type RevealType =
  | 'fade'
  | 'rise'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'mask-reveal'

type MotionRevealProps = {
  children: ReactNode
  type?: RevealType
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

const initialFor = (type: RevealType) => {
  switch (type) {
    case 'slide-left':
      return { opacity: 0, x: 28 }
    case 'slide-right':
      return { opacity: 0, x: -28 }
    case 'scale':
      return { opacity: 0, scale: 0.96 }
    case 'mask-reveal':
      return { opacity: 0, clipPath: 'inset(0 0 85% 0)' }
    case 'fade':
      return { opacity: 0 }
    case 'rise':
    default:
      return { opacity: 0, y: 24 }
  }
}

export function MotionReveal({
  children,
  type = 'rise',
  delay = 0,
  duration = 0.55,
  once = true,
  className,
}: MotionRevealProps) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? { opacity: 0 } : initialFor(type)}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        clipPath: 'inset(0 0 0% 0)',
      }}
      viewport={{ once, amount: type === 'mask-reveal' ? 0.05 : 0.2 }}
      transition={{
        duration: reducedMotion ? 0.12 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
