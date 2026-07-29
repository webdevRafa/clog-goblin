import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LuMenu, LuPhone, LuX } from 'react-icons/lu'
import { Link, NavLink } from 'react-router-dom'

import garyMenu from '../../assets/cartoon-3.webp'
import {
  navigation,
  placeholderPhone,
  placeholderPhoneHref,
} from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { ButtonLink } from '../common/ButtonLink'
import { Container } from '../common/Container'
import { AnnouncementBar } from './AnnouncementBar'

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      className="brand"
      aria-label="Clog Goblin Plumbing Co. home"
      onClick={onClick}
    >
      <span className="brand__mark" aria-hidden="true">
        CG
      </span>
      <span className="brand__type">
        <strong>Clog Goblin</strong>
        <small>Plumbing Co.</small>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <AnnouncementBar />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Container className="site-header__inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="site-header__actions">
            <ButtonLink to="/free-estimate" className="header-cta">
              Get This Crap Fixed
            </ButtonLink>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
            >
              <LuMenu aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.22 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setMenuOpen(false)
            }}
          >
            <motion.div
              id="mobile-menu"
              className="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={reducedMotion ? { opacity: 0 } : { x: '100%' }}
              animate={reducedMotion ? { opacity: 1 } : { x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: reducedMotion ? 0.1 : 0.35, ease: 'easeOut' }}
            >
              <div className="mobile-menu__top">
                <Brand onClick={() => setMenuOpen(false)} />
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <LuX aria-hidden="true" />
                </button>
              </div>
              <nav aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={reducedMotion ? false : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reducedMotion ? 0 : 0.08 + index * 0.04 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? 'is-active' : ''
                      }
                    >
                      <span>0{index + 1}</span>
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mobile-menu__call">
                <img
                  src={garyMenu}
                  alt=""
                  width="800"
                  height="1200"
                  aria-hidden="true"
                />
                <div>
                  <p>Gary is already wearing the boots.</p>
                  <a
                    href={placeholderPhoneHref}
                    aria-label={`Call Clog Goblin Plumbing at placeholder number ${placeholderPhone}`}
                  >
                    <LuPhone aria-hidden="true" />
                    Call the Goblins
                  </a>
                  <small>{placeholderPhone} · demo number</small>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
