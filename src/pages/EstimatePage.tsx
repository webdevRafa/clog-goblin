import garyEstimate from '../assets/cartoon-4.webp'
import { EstimateForm } from '../components/forms/EstimateForm'
import { Container } from '../components/common/Container'
import { PageHero } from '../components/common/PageHero'
import { usePageMeta } from '../hooks/usePageMeta'

export default function EstimatePage() {
  usePageMeta({
    title: 'Request a Free Plumbing Estimate | Clog Goblin',
    description:
      'Describe your plumbing issue, upload an optional photo, and request a follow-up from the fictional Clog Goblin Plumbing Co. team.',
    path: '/free-estimate',
  })

  return (
    <>
      <PageHero
        eyebrow="Free estimate request"
        title="Tell Us What Your Plumbing Did This Time"
        body="Describe where the problem is, when it started, and whether water is actively leaking. Photos help. For urgent flooding, sewage backup, or a burst pipe, shut off the water if safe and call instead."
        image={garyEstimate}
        imageAlt="Gary working on a leaking cartoon pipe"
        badge="Demo form · no production endpoint connected"
      />
      <section className="section estimate-section">
        <Container>
          <div className="estimate-section__intro">
            <p className="eyebrow">The details matter</p>
            <h2>Give Gary the Evidence</h2>
            <p>
              Required fields help organize the request and demonstrate an
              accessible, production-ready form experience. Submission is
              simulated until a reviewed backend is connected.
            </p>
          </div>
          <EstimateForm />
        </Container>
      </section>
    </>
  )
}
