import type { ReactNode } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost'
  className?: string
  ariaLabel?: string
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
  ariaLabel,
}: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <LuArrowUpRight aria-hidden="true" />
    </>
  )

  if (to.startsWith('tel:') || to.startsWith('mailto:')) {
    return (
      <a
        href={to}
        className={`button-link button-link--${variant} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      to={to}
      className={`button-link button-link--${variant} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </Link>
  )
}

