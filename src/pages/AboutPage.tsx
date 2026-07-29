import {
  LuCoffee,
  LuHammer,
  LuHeartHandshake,
  LuShieldCheck,
  LuSparkles,
} from 'react-icons/lu'

import garyAbout from '../assets/cartoon-2.webp'
import garyThumbsUp from '../assets/cartoon-3.webp'
import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { MotionReveal } from '../components/common/MotionReveal'
import { PageHero } from '../components/common/PageHero'
import { ResponsiveImage } from '../components/common/ResponsiveImage'
import { SectionHeading } from '../components/common/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  {
    title: 'Craftsmanship',
    copy: 'Do the repair correctly, test it thoroughly, and leave the system better than it was found.',
    icon: LuHammer,
  },
  {
    title: 'Honesty',
    copy: 'Explain the options and avoid overselling work that is not needed.',
    icon: LuHeartHandshake,
  },
  {
    title: 'Cleanliness',
    copy: 'The plumbing problem may be messy. The service experience should not be.',
    icon: LuSparkles,
  },
  {
    title: 'Reliability',
    copy: 'Appointments, updates, and follow-through matter.',
    icon: LuShieldCheck,
  },
  {
    title: 'Humor',
    copy: 'Use laughter to reduce stress, never to minimize the customer’s problem.',
    icon: LuCoffee,
  },
]

const qualifications = [
  'Can identify a clogged drain from three rooms away',
  'Owns seven nearly identical pipe wrenches',
  'Has never met a water heater he trusted immediately',
  'Believes every problem improves with the correct shutoff valve',
  'Has consumed more gas-station coffee than experts recommend',
  'Maintains a strict “no tools left under the sink” policy',
  'Knows exactly when someone flushed something they should not have',
]

export default function AboutPage() {
  usePageMeta({
    title: 'About the Goblins | Clog Goblin Plumbing Co.',
    description:
      'Meet the fictional team and Gary, the deeply unimpressed mascot behind Clog Goblin Plumbing Co.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        eyebrow="Meet the crew"
        title="Professional Plumbers. Amateur Comedians."
        body="Clog Goblin Plumbing Co. is a fictional plumbing brand, but the services and customer journey are presented with the clarity and care expected from a real local-service company."
        image={garyAbout}
        imageAlt="Gary sitting casually on a toolbox with coffee and a pipe wrench"
        badge="Fictional brand · practical service experience"
      />

      <section className="section about-intro">
        <Container className="about-intro__grid">
          <SectionHeading
            eyebrow="Our imaginary philosophy"
            title="Show Up Prepared. Explain the Problem. Respect the Home."
            body="Then, if the moment is right, make one excellent toilet joke. The satire lives in the brand voice—not in inflated claims, fake credentials, or confusing service information."
          />
          <MotionReveal type="slide-left">
            <div className="manifesto-card">
              <span>THE GOBLIN CODE / 001</span>
              <blockquote>
                “We handle the dirty work without making your home look like a
                disaster zone.”
              </blockquote>
              <p>Useful information first. Humor second. Clean boots always.</p>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="gary-profile">
        <Container className="gary-profile__grid">
          <MotionReveal type="mask-reveal" className="gary-profile__visual">
            <ResponsiveImage
              src={garyThumbsUp}
              alt="Gary giving a confident thumbs-up with a plunger"
            />
            <span className="gary-profile__badge">
              Senior Vice President
              <small>of Standing Around</small>
            </span>
          </MotionReveal>
          <div>
            <SectionHeading
              eyebrow="Employee of the month, somehow"
              title="Meet Gary, Enemy of Slow Drains"
              body="Gary is the official mascot, unofficial break-room philosopher, and highly decorated opponent of plumbing nonsense. He may look like he has been leaning on that plunger since 1997, but when a toilet starts acting disrespectful, Gary takes it personally."
              theme="dark"
            />
            <ul className="qualification-list">
              {qualifications.map((item) => (
                <MotionReveal key={item}>
                  <li>{item}</li>
                </MotionReveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section values-section">
        <Container>
          <SectionHeading
            eyebrow="Values that hold pressure"
            title="The Stuff That Matters Once the Joke Wears Off"
            body="A memorable brand gets attention. A clear, respectful, and dependable service experience earns trust."
            maxWidth="wide"
          />
          <div className="values-grid">
            {values.map(({ title, copy, icon: Icon }, index) => (
              <MotionReveal key={title} delay={index * 0.05}>
                <article>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <div className="section-action">
            <ButtonLink to="/free-estimate">Get Gary Involved</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
