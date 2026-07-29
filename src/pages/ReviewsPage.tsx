import { useMemo, useState } from 'react'
import { LuQuote, LuStar } from 'react-icons/lu'

import garyReviews from '../assets/cartoon-3.webp'
import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { MotionReveal } from '../components/common/MotionReveal'
import { PageHero } from '../components/common/PageHero'
import { testimonials } from '../data/testimonials'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ReviewsPage() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(testimonials.map((item) => item.category))]
  const filtered = useMemo(
    () =>
      filter === 'All'
        ? testimonials
        : testimonials.filter((item) => item.category === filter),
    [filter],
  )

  usePageMeta({
    title: 'Fictional Reviews | Clog Goblin Plumbing Co.',
    description:
      'See clearly labeled sample testimonials demonstrating a polished review experience for Clog Goblin Plumbing Co.',
    path: '/reviews',
  })

  return (
    <>
      <PageHero
        eyebrow="Placeholder praise"
        title="Nice Things People Definitely Said in This Fictional Demonstration"
        body="These sample reviews demonstrate how customer feedback can be presented. Replace them with real, permission-based testimonials before using this site for an operating business."
        image={garyReviews}
        imageAlt="Gary gives a thumbs-up while holding a plunger"
        badge="Every review below is fictional placeholder content"
      />

      <section className="section reviews-section">
        <Container>
          <div className="reviews-summary">
            <div>
              <strong>5.0</strong>
              <div>
                <span aria-label="5 out of 5 sample stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <LuStar key={index} aria-hidden="true" />
                  ))}
                </span>
                <p>Demonstration rating from fictional reviews</p>
              </div>
            </div>
            <p className="placeholder-banner">
              Not a verified rating. Not connected to a third-party review
              platform. Very committed to transparency.
            </p>
          </div>

          <div className="review-filters" aria-label="Filter fictional reviews">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={filter === category ? 'is-active' : ''}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ))}
          </div>

          {filtered.length ? (
            <div className="review-grid" aria-live="polite">
              {filtered.map((testimonial, index) => (
                <MotionReveal key={testimonial.name} delay={index * 0.05}>
                  <article>
                    <div className="review-card__top">
                      <LuQuote aria-hidden="true" />
                      <span aria-label={`${testimonial.rating} out of 5 stars`}>
                        {Array.from({ length: testimonial.rating }).map(
                          (_, star) => (
                            <LuStar key={star} aria-hidden="true" />
                          ),
                        )}
                      </span>
                    </div>
                    <blockquote>“{testimonial.quote}”</blockquote>
                    <footer>
                      <strong>{testimonial.name}</strong>
                      <span>
                        {testimonial.label} · {testimonial.category}
                      </span>
                    </footer>
                  </article>
                </MotionReveal>
              ))}
            </div>
          ) : (
            <p className="empty-state">
              No reviews match that filter. Apparently nobody had anything nice
              to say about garbage disposals this week.
            </p>
          )}

          <div className="review-platforms">
            <p>Future profile links</p>
            {['Google', 'Facebook', 'Yelp'].map((platform) => (
              <a
                key={platform}
                href="#"
                onClick={(event) => event.preventDefault()}
                aria-label={`${platform} reviews placeholder link`}
              >
                {platform}
                <small>Placeholder</small>
              </a>
            ))}
          </div>

          <div className="section-action">
            <ButtonLink to="/free-estimate">Request an Estimate</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
