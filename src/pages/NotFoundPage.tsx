import garyNotFound from '../assets/cartoon-5.webp'
import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { ResponsiveImage } from '../components/common/ResponsiveImage'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Down the Drain | Clog Goblin Plumbing Co.',
    description:
      'The requested page is missing, moved, or hiding behind the water heater.',
    path: '/404',
  })

  return (
    <section className="not-found">
      <Container className="not-found__grid">
        <div className="not-found__copy">
          <span className="not-found__code">404 / DRAINED</span>
          <p className="eyebrow eyebrow--light">This route is clogged</p>
          <h1>Well, This Page Went Down the Drain</h1>
          <p>
            The page you requested is missing, moved, or hiding somewhere behind
            the water heater.
          </p>
          <div className="not-found__actions">
            <ButtonLink to="/">Return Home</ButtonLink>
            <ButtonLink to="/services" variant="secondary">
              View Services
            </ButtonLink>
            <ButtonLink to="/free-estimate" variant="ghost">
              Request an Estimate
            </ButtonLink>
          </div>
          <small>Gary says he never saw it. Gary is not a reliable witness.</small>
        </div>
        <div className="not-found__visual">
          <ResponsiveImage
            src={garyNotFound}
            alt="Gary stands behind a toilet looking suspiciously pleased"
            priority
          />
        </div>
      </Container>
    </section>
  )
}
