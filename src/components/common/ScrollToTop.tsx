import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function ScrollToTop() {
  const { pathname } = useLocation()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }, [pathname, reducedMotion])

  return null
}

