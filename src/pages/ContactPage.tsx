import { LuClock3, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'

import garyContact from '../assets/cartoon-1.webp'
import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { MotionReveal } from '../components/common/MotionReveal'
import { PageHero } from '../components/common/PageHero'
import {
  placeholderEmail,
  placeholderPhone,
  placeholderPhoneHref,
} from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const contactMethods = [
  {
    icon: LuPhone,
    label: 'Phone',
    value: placeholderPhone,
    href: placeholderPhoneHref,
    note: 'Best for active leaks, major backups, or urgent service needs.',
    placeholder: 'Demo number',
  },
  {
    icon: LuMail,
    label: 'Email',
    value: placeholderEmail,
    href: `mailto:${placeholderEmail}`,
    note: 'Best for general questions, documentation, and non-emergency requests.',
    placeholder: 'Placeholder email',
  },
  {
    icon: LuMapPin,
    label: 'Service market',
    value: 'San Antonio, Texas',
    href: '/service-areas',
    note: 'Demonstration market with editable service-area data.',
    placeholder: 'Placeholder market',
  },
]

export default function ContactPage() {
  usePageMeta({
    title: 'Contact | Clog Goblin Plumbing Co.',
    description:
      'Call, email, or request a plumbing estimate from the fictional Clog Goblin Plumbing Co. team.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        eyebrow="Talk to a human"
        title="Call, Click, or Send a Distress Signal"
        body="Need plumbing service, have a question, or want to confirm whether that sound is normal? Choose the contact method that fits the situation."
        image={garyContact}
        imageAlt="Gary holding a plunger and looking back at the viewer"
        badge="All contact details are clearly marked placeholders"
      />

      <section className="section contact-section">
        <Container>
          <div className="contact-grid">
            {contactMethods.map(({ icon: Icon, ...method }, index) => (
              <MotionReveal key={method.label} delay={index * 0.06}>
                <article>
                  <Icon aria-hidden="true" />
                  <p className="eyebrow">{method.label}</p>
                  {method.href.startsWith('/') ? (
                    <ButtonLink to={method.href} variant="ghost">
                      {method.value}
                    </ButtonLink>
                  ) : (
                    <a className="contact-value" href={method.href}>
                      {method.value}
                    </a>
                  )}
                  <p>{method.note}</p>
                  <small>{method.placeholder}</small>
                </article>
              </MotionReveal>
            ))}
          </div>

          <div className="hours-callout">
            <div>
              <LuClock3 aria-hidden="true" />
              <div>
                <p className="eyebrow">Placeholder office hours</p>
                <h2>When the Imaginary Phones Are Answered</h2>
              </div>
            </div>
            <dl>
              <div>
                <dt>Monday–Friday</dt>
                <dd>7:00 AM–7:00 PM</dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd>8:00 AM–4:00 PM</dd>
              </div>
              <div>
                <dt>Sunday</dt>
                <dd>Emergency calls only</dd>
              </div>
            </dl>
            <p>
              Please do not email a photo of an overflowing toilet and then wait
              three business days. Call.
            </p>
          </div>

          <div className="contact-estimate-cta">
            <div>
              <p className="eyebrow eyebrow--light">Non-emergency project?</p>
              <h2>Put the Whole Plumbing Confession in One Place.</h2>
              <p>
                The estimate form collects the service, symptoms, contact
                preferences, and optional photo evidence.
              </p>
            </div>
            <ButtonLink to="/free-estimate">Request a Free Estimate</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
