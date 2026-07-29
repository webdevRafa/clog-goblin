import { motion } from 'framer-motion'
import { LuArrowRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'

import type { Service } from '../../data/services'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { ResponsiveImage } from '../common/ResponsiveImage'

type ServiceCardProps = {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const reducedMotion = usePrefersReducedMotion()
  const Icon = service.icon

  return (
    <motion.article
      className="service-card"
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0.1 : 0.5,
        delay: reducedMotion ? 0 : Math.min(index, 3) * 0.06,
      }}
    >
      <Link
        to={`/services/${service.slug}`}
        aria-label={`Learn about ${service.name}`}
      >
        <div className="service-card__media">
          <ResponsiveImage src={service.image} alt={service.imageAlt} />
          <span className="service-card__number">0{index + 1}</span>
          <span className="service-card__icon">
            <Icon aria-hidden="true" />
          </span>
        </div>
        <div className="service-card__content">
          <h3>{service.name}</h3>
          <p className="service-card__hook">{service.shortHook}</p>
          <p>{service.shortDescription}</p>
          <span className="service-card__link">
            View service <LuArrowRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

