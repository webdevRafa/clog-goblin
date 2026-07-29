import type { ReactNode } from 'react'

import { ButtonLink } from './ButtonLink'
import { Container } from './Container'
import { MotionReveal } from './MotionReveal'
import { ResponsiveImage } from './ResponsiveImage'

type PageHeroProps = {
  eyebrow: string
  title: string
  body: string
  image: string
  imageAlt: string
  badge?: string
  actions?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  badge = 'Professional help · tasteful toilet jokes',
  actions,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Container className="page-hero__grid">
        <div className="page-hero__copy">
          <MotionReveal type="fade">
            <p className="eyebrow">{eyebrow}</p>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <h1>{title}</h1>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p>{body}</p>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <div className="page-hero__actions">
              {actions ?? (
                <>
                  <ButtonLink to="/free-estimate">Request an Estimate</ButtonLink>
                  <ButtonLink to="/contact" variant="ghost">
                    Talk to a Human
                  </ButtonLink>
                </>
              )}
            </div>
          </MotionReveal>
        </div>
        <MotionReveal type="mask-reveal" className="page-hero__visual">
          <div className="page-hero__image-wrap">
            <ResponsiveImage src={image} alt={imageAlt} priority />
            <span className="utility-label">{badge}</span>
          </div>
        </MotionReveal>
      </Container>
    </section>
  )
}

