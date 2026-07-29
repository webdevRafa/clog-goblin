import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { ScrollToTop } from '../common/ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout() {
  const location = useLocation()
  const reducedMotion = usePrefersReducedMotion()

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ScrollToTop />
      <SiteHeader />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.08 : 0.28 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </>
  )
}

