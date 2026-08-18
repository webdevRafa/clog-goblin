import garyServices from '../assets/cartoon-6.webp'
import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { MotionReveal } from '../components/common/MotionReveal'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/common/SectionHeading'
import { ServiceCard } from '../components/services/ServiceCard'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServicesPage() {
  usePageMeta({
    title: 'Plumbing Services | Clog Goblin Plumbing Co.',
    description:
      'Explore drain cleaning, toilet repair, leak repair, water heaters, sewer lines, fixtures, disposal repair, and emergency plumbing guidance.',
    path: '/services',
  })

  return (
    <>
      <PageHero
        eyebrow="All services"
        title="Serious Plumbing for Questionable Situations"
        body="From a faucet that will not stop tapping out a tiny distress signal to a sewer line leading a full-house rebellion, start with the service that best matches what your plumbing is doing."
        image={garyServices}
        imageAlt="Gary wrestling a cartoon drain monster with a plunger"
        badge="Eight ways to restore household peace"
      />

      <section className="section services-index">
        <Container>
          <SectionHeading
            eyebrow="Choose your problem"
            title="No Clog Too Stubborn. No Toilet Too Terrifying."
            body="Each service page explains common warning signs, what an inspection may involve, and the right next step. Final scope and pricing always depend on the actual condition."
            maxWidth="wide"
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="service-decision">
        <Container className="service-decision__grid">
          <MotionReveal>
            <p className="eyebrow eyebrow--light">Not sure what to pick?</p>
            <h2>Describe the Weird Thing Your Pipes Are Doing.</h2>
          </MotionReveal>
          <MotionReveal type="slide-left">
            <p>
              You do not need to diagnose the problem yourself. Tell us what you
              see, hear, smell, or regret flushing, and the request can be routed
              to the right service.
            </p>
            <ButtonLink to="/free-estimate">My Plumbing Is Acting Weird</ButtonLink>
          </MotionReveal>
        </Container>
      </section>
    </>
  )
}
