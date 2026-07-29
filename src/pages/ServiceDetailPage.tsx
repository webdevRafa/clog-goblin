import { LuCheck, LuTriangleAlert } from 'react-icons/lu'
import { Link, Navigate, useParams } from 'react-router-dom'

import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { FaqList } from '../components/common/FaqList'
import { MotionReveal } from '../components/common/MotionReveal'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/common/SectionHeading'
import { ServiceCard } from '../components/services/ServiceCard'
import { faqs } from '../data/faqs'
import { placeholderPhoneHref } from '../data/site'
import { getService } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getService(slug)

  usePageMeta({
    title: service
      ? `${service.name} | Clog Goblin Plumbing Co.`
      : 'Service Not Found | Clog Goblin Plumbing Co.',
    description:
      service?.shortDescription ??
      'The requested plumbing service could not be found.',
    path: `/services/${slug ?? ''}`,
  })

  if (!service) return <Navigate to="/404" replace />

  const related = service.relatedServiceSlugs
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item) => item !== undefined)

  const serviceFaqs = faqs
    .filter(
      (faq) =>
        !faq.serviceSlugs || faq.serviceSlugs.includes(service.slug),
    )
    .slice(0, 5)

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://clog-goblin.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://clog-goblin.vercel.app/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `https://clog-goblin.vercel.app/services/${service.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Container>
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.name}</span>
        </Container>
      </nav>

      <PageHero
        eyebrow={service.name}
        title={service.heroHeading}
        body={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        badge={service.shortHook}
        actions={
          service.slug === 'emergency-plumbing' ? (
            <>
              <ButtonLink to={placeholderPhoneHref}>
                Call Emergency Service
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghost">
                View Contact Options
              </ButtonLink>
            </>
          ) : (
            <>
              <ButtonLink to="/free-estimate">{service.ctaLabel}</ButtonLink>
              <ButtonLink to="/contact" variant="ghost">
                Ask a Question
              </ButtonLink>
            </>
          )
        }
      />

      <section className="section service-detail">
        <Container className="service-detail__grid">
          <MotionReveal>
            <div className="work-order-card">
              <p className="eyebrow">Work order scope</p>
              <h2>What This Service Can Include</h2>
              <ul>
                {service.includedServices.map((item) => (
                  <li key={item}>
                    <LuCheck aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <small>
                Final scope depends on inspection, access, existing materials,
                local requirements, and the actual problem.
              </small>
            </div>
          </MotionReveal>
          <div>
            <SectionHeading
              eyebrow="Warning signs"
              title="When to Stop Hoping It Fixes Itself"
              body="Plumbing tends to communicate before it completely fails. These are a few of the messages worth listening to."
            />
            <div className="warning-list">
              {service.warningSigns.map((sign, index) => (
                <MotionReveal key={sign} delay={index * 0.05}>
                  <article>
                    <span>0{index + 1}</span>
                    <p>{sign}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
            <MotionReveal>
              <blockquote className="funny-callout">
                <LuTriangleAlert aria-hidden="true" />
                <p>{service.funnyCallout}</p>
              </blockquote>
            </MotionReveal>
          </div>
        </Container>
      </section>

      {service.slug === 'emergency-plumbing' ? (
        <section className="emergency-protocol">
          <Container>
            <SectionHeading
              eyebrow="Safety first"
              title="The Website Is Not an Emergency-Response Channel"
              body="If safe, shut off the nearest fixture valve or main supply. Avoid standing water near electrical sources. Then call a qualified emergency plumber directly."
              theme="dark"
              alignment="center"
              maxWidth="wide"
            />
            <ButtonLink to={placeholderPhoneHref} variant="primary">
              Call the Demo Emergency Number
            </ButtonLink>
          </Container>
        </section>
      ) : null}

      <section className="section service-faqs">
        <Container className="faq-section__grid">
          <SectionHeading
            eyebrow={`${service.name} FAQ`}
            title="A Few Straight Answers Before the Wrenches Come Out"
            body="General information only. A real diagnosis depends on seeing the system and understanding the symptoms."
          />
          <FaqList items={serviceFaqs} />
        </Container>
      </section>

      <section className="section related-services">
        <Container>
          <SectionHeading
            eyebrow="Related services"
            title="Because Plumbing Problems Rarely Respect Department Lines"
            maxWidth="wide"
          />
          <div className="services-grid services-grid--three">
            {related.map((item, index) => (
              <ServiceCard key={item.slug} service={item} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
