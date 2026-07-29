import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LuArrowLeft, LuArrowRight, LuQuote, LuStar } from 'react-icons/lu'

import { testimonials } from '../../data/testimonials'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const testimonial = testimonials[active]

  const changeSlide = (direction: 1 | -1) => {
    setActive(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    )
  }

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__status">
        <span>Fictional review {active + 1}</span>
        <span>
          {String(active + 1).padStart(2, '0')} /{' '}
          {String(testimonials.length).padStart(2, '0')}
        </span>
      </div>
      <div className="testimonial-carousel__stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={active}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.35 }}
          >
            <LuQuote className="testimonial-carousel__quote" aria-hidden="true" />
            <div
              className="testimonial-carousel__stars"
              aria-label={`${testimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <LuStar key={index} aria-hidden="true" />
              ))}
            </div>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>
                {testimonial.label} · {testimonial.category}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="testimonial-carousel__controls">
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Show previous fictional review"
        >
          <LuArrowLeft aria-hidden="true" />
        </button>
        <div className="testimonial-carousel__dots" aria-hidden="true">
          {testimonials.map((item, index) => (
            <span
              key={item.name}
              className={index === active ? 'is-active' : ''}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Show next fictional review"
        >
          <LuArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

