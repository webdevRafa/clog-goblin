import { LuMapPin, LuNavigation } from 'react-icons/lu'

import garyAreas from '../assets/cartoon-7.webp'
import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { MotionReveal } from '../components/common/MotionReveal'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/common/SectionHeading'
import { serviceAreas } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServiceAreasPage() {
  usePageMeta({
    title: 'Service Areas | Clog Goblin Plumbing Co.',
    description:
      'Explore the fictional San Antonio demonstration service market for Clog Goblin Plumbing Co.',
    path: '/service-areas',
  })

  return (
    <>
      <PageHero
        eyebrow="Demonstration market"
        title="Serving San Antonio and Nearby Places With Pipes"
        body="Clog Goblin Plumbing Co. is structured to serve homeowners and small businesses throughout a configurable local market. Availability depends on scheduling, distance, and whether Gary can find his other boot."
        image={garyAreas}
        imageAlt="Gary leaning on a water heater with a casual shrug"
        badge="San Antonio is placeholder market data"
      />

      <section className="section areas-section">
        <Container className="areas-section__grid">
          <div>
            <SectionHeading
              eyebrow="Around the Alamo City"
              title="Fifteen Places. One Suspiciously Confident Plunger."
              body="These example areas live in structured data so a future operating business can replace them without rebuilding the page."
            />
            <div className="area-list">
              {serviceAreas.map((area, index) => (
                <MotionReveal key={area} delay={(index % 5) * 0.03}>
                  <div>
                    <LuMapPin aria-hidden="true" />
                    <span>{area}</span>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          <MotionReveal type="scale" className="map-placeholder">
            <div className="map-placeholder__grid" aria-hidden="true" />
            <span className="map-placeholder__river" aria-hidden="true" />
            {[
              ['Alamo Heights', '16%', '31%'],
              ['San Antonio', '43%', '48%'],
              ['Helotes', '22%', '66%'],
              ['Schertz', '69%', '28%'],
              ['Boerne', '62%', '74%'],
            ].map(([label, left, top]) => (
              <div
                className="map-pin"
                key={label}
                style={{ left, top }}
              >
                <LuMapPin aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
            <div className="map-placeholder__label">
              <LuNavigation aria-hidden="true" />
              <div>
                <strong>Service radius concept</strong>
                <span>No live map or API key connected</span>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="zip-cta">
        <Container>
          <div>
            <p className="eyebrow eyebrow--light">Outside the drain grid?</p>
            <h2>Send Your ZIP Code and We’ll Confirm.</h2>
            <p>
              Service boundaries, travel fees, and availability must be confirmed
              by the real operating business before launch.
            </p>
          </div>
          <ButtonLink to="/contact">Check My Area</ButtonLink>
        </Container>
      </section>
    </>
  )
}
