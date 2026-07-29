import { motion } from 'framer-motion'
import {
  LuBadgeCheck,
  LuCheck,
  LuClipboardCheck,
  LuHouse,
  LuSearch,
  LuShieldCheck,
  LuSparkles,
  LuWrench,
} from 'react-icons/lu'

import garyHero from '../assets/cartoon-1.webp'
import garyBreak from '../assets/cartoon-2.webp'
import garyLeak from '../assets/cartoon-4.webp'
import garyToilet from '../assets/cartoon-5.webp'
import garyWaterHeater from '../assets/cartoon-7.webp'
import { ButtonLink } from '../components/common/ButtonLink'
import { Container } from '../components/common/Container'
import { FaqList } from '../components/common/FaqList'
import { MotionReveal } from '../components/common/MotionReveal'
import { ResponsiveImage } from '../components/common/ResponsiveImage'
import { SectionHeading } from '../components/common/SectionHeading'
import { TestimonialCarousel } from '../components/home/TestimonialCarousel'
import { ServiceCard } from '../components/services/ServiceCard'
import { faqs } from '../data/faqs'
import { placeholderPhoneHref } from '../data/site'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const trustItems = [
  {
    title: 'Upfront Estimates',
    copy: 'Know the damage before we do the work.',
    icon: LuClipboardCheck,
  },
  {
    title: 'Respectful Technicians',
    copy: 'We wipe our boots and judge your pipes quietly.',
    icon: LuHouse,
  },
  {
    title: 'Real Repairs',
    copy: 'No duct tape, wishful thinking, or mystery fixes.',
    icon: LuWrench,
  },
  {
    title: 'Clean Work Areas',
    copy: 'We clean up after ourselves like civilized goblins.',
    icon: LuSparkles,
  },
]

const whyItems = [
  {
    title: 'We Explain the Problem',
    copy: 'No dramatic pointing at pipes. We show you what is happening and what needs to be done.',
  },
  {
    title: 'We Respect Your Home',
    copy: 'Protective coverings, organized tools, and a clean work area before we leave.',
  },
  {
    title: 'We Provide Clear Estimates',
    copy: 'Surprise water is bad enough. Surprise pricing is worse.',
  },
  {
    title: 'We Fix the Actual Issue',
    copy: 'Recurring problems deserve diagnosis, not temporary nonsense.',
  },
  {
    title: 'We Use Quality Parts',
    copy: 'The repair should last longer than the conversation about the repair.',
  },
  {
    title: 'We Have a Sense of Humor',
    copy: 'Professional work without sounding like beige filing cabinets wrote the website.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Tell Us What Happened',
    copy: 'Describe the leak, clog, noise, smell, backup, or other watery betrayal.',
    icon: LuSearch,
  },
  {
    number: '02',
    title: 'Schedule the Visit',
    copy: 'Choose an appointment window. Urgent flooding should go straight to the phone.',
    icon: LuClipboardCheck,
  },
  {
    number: '03',
    title: 'Review the Diagnosis',
    copy: 'A technician inspects the issue and explains the practical options.',
    icon: LuShieldCheck,
  },
  {
    number: '04',
    title: 'Approve the Repair',
    copy: 'Once approved, the work is completed, tested, and cleaned up.',
    icon: LuBadgeCheck,
  },
]

const heroWords = ['We', 'Deal', 'With', 'Your', 'Crap', 'So', 'You', 'Don’t', 'Have', 'To.']

export default function HomePage() {
  const reducedMotion = usePrefersReducedMotion()

  usePageMeta({
    title: 'Clog Goblin Plumbing Co. | We Deal With Your Crap',
    description:
      'A bold fictional plumbing website concept featuring real service information, free estimate requests, and professional plumbing help with a sense of humor.',
    path: '/',
  })

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Clog Goblin Plumbing Co.',
    url: 'https://clog-goblin.vercel.app/',
    description:
      'Fictional demonstration plumbing brand serving the San Antonio concept market.',
    areaServed: {
      '@type': 'City',
      name: 'San Antonio',
    },
    sameAs: [],
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <section className="home-hero">
        <div className="home-hero__grid-pattern" aria-hidden="true" />
        <Container className="home-hero__inner">
          <div className="home-hero__copy">
            <motion.p
              className="eyebrow eyebrow--light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              San Antonio’s least glamorous heroes
            </motion.p>
            <h1 aria-label="We Deal With Your Crap So You Don’t Have To.">
              {heroWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  aria-hidden="true"
                  initial={
                    reducedMotion ? { opacity: 0 } : { opacity: 0, y: '80%' }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reducedMotion ? 0.1 : 0.55,
                    delay: reducedMotion ? 0 : 0.08 + index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="home-hero__lede"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : 0.55, duration: 0.45 }}
            >
              Real plumbing repairs for leaks, clogs, broken toilets, failing
              water heaters, sewer problems, and every other watery disaster
              your house invents.
            </motion.p>
            <motion.div
              className="home-hero__actions"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : 0.65, duration: 0.45 }}
            >
              <ButtonLink to="/free-estimate">Get a Free Estimate</ButtonLink>
              <ButtonLink to="/services" variant="secondary">
                Explore Our Dirty Work
              </ButtonLink>
            </motion.div>
            <motion.div
              className="home-hero__trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reducedMotion ? 0 : 0.75 }}
            >
              <LuCheck aria-hidden="true" />
              <span>
                Professional service information. Clear estimates. Minimal
                judgment.
              </span>
            </motion.div>
          </div>

          <motion.div
            className="home-hero__visual"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: reducedMotion ? 0 : 0.25, duration: 0.7 }}
          >
            <div className="home-hero__stamp">
              <span>Meet</span>
              <strong>Gary</strong>
              <small>Senior VP of Standing Around</small>
            </div>
            <motion.div
              animate={
                reducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 0.5, 0] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ResponsiveImage
                src={garyHero}
                alt="Gary the Clog Goblin holding a plunger and looking confidently over his shoulder"
                priority
                sizes="(max-width: 768px) 75vw, 40vw"
              />
            </motion.div>
          </motion.div>
        </Container>
        <Container className="home-hero__microcopy">
          <strong>Emergency?</strong> If water is actively flooding your home,
          shut off the nearest valve or main supply when safe and call a qualified
          emergency plumber immediately.
        </Container>
      </section>

      <section className="trust-strip" aria-label="Service standards">
        <Container className="trust-strip__grid">
          {trustItems.map(({ title, copy, icon: Icon }) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <div>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="emergency-banner">
        <Container className="emergency-banner__inner">
          <div className="emergency-banner__label">
            <span className="pulse-dot" aria-hidden="true" />
            Active water event
          </div>
          <div>
            <h2>Water Going Everywhere? Skip the Form.</h2>
            <p>
              For active flooding, burst pipes, toilets that will not stop, or
              sewage backups, shut off the water if safe and call for immediate
              assistance.
            </p>
          </div>
          <ButtonLink to={placeholderPhoneHref} variant="dark">
            Call Emergency Service
          </ButtonLink>
        </Container>
      </section>

      <section className="section services-preview">
        <Container>
          <SectionHeading
            eyebrow="Our specialties"
            title="Professional Plumbing for Unprofessional Problems"
            body="Plumbing failures have a gift for happening at the worst possible time. Pick the service that sounds closest to what your house is doing, and we will take it from there."
            maxWidth="wide"
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <div className="section-action">
            <ButtonLink to="/services" variant="ghost">
              Show Me All the Services
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section why-section">
        <Container className="why-section__grid">
          <div className="why-section__sticky">
            <SectionHeading
              eyebrow="Why call the goblins?"
              title="Good Work, Clear Answers, and Very Few Plumbing Mysteries"
              body="Homeowners should understand what is wrong, what the repair involves, and what it is expected to cost. Useful information first. Drain jokes second."
              theme="dark"
            />
            <ButtonLink to="/about" variant="secondary">
              Meet the Goblins
            </ButtonLink>
          </div>
          <div className="why-list">
            {whyItems.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.04}>
                <article>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="image-callout">
        <div className="image-callout__media" aria-hidden="true">
          <ResponsiveImage src={garyLeak} alt="" />
        </div>
        <Container className="image-callout__content">
          <MotionReveal type="slide-right">
            <p className="eyebrow eyebrow--light">Inspection before guesswork</p>
            <h2>We Go Where the Weird Smell Is Coming From</h2>
            <p>
              Behind cabinets. Beneath sinks. Near toilets making suspicious
              bubbling noises. Problems are usually easier to solve when they are
              inspected early.
            </p>
            <ButtonLink to="/free-estimate">
              Schedule an Inspection
            </ButtonLink>
          </MotionReveal>
        </Container>
      </section>

      <section className="section process-section">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From “What the Hell Is That Noise?” to Problem Solved"
            body="Four clear steps. No mystical pipe rituals. No appointment automatically guaranteed by a button."
            alignment="center"
            maxWidth="wide"
          />
          <div className="process-grid">
            {processSteps.map(({ number, title, copy, icon: Icon }, index) => (
              <MotionReveal key={title} delay={index * 0.06}>
                <article>
                  <div className="process-grid__top">
                    <span>{number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <p className="process-footer">
            You get working plumbing. Gary gets another story he probably should
            not tell at dinner.
          </p>
        </Container>
      </section>

      <section className="gary-callout">
        <Container className="gary-callout__grid">
          <MotionReveal type="slide-right" className="gary-callout__image">
            <ResponsiveImage
              src={garyBreak}
              alt="Gary sitting on a toolbox with coffee and a pipe wrench"
            />
          </MotionReveal>
          <MotionReveal type="slide-left" className="gary-callout__copy">
            <p className="eyebrow">Photo evidence welcomed</p>
            <h2>Gary Has Seen Worse</h2>
            <p>
              Describe the problem. Upload a photo. Request an estimate. There is
              a strong chance the issue is fixable and only a moderate chance
              Gary will make a face.
            </p>
            <ButtonLink to="/free-estimate">Show Gary the Damage</ButtonLink>
          </MotionReveal>
        </Container>
      </section>

      <section className="section before-after">
        <Container>
          <SectionHeading
            eyebrow="Illustrated concept gallery"
            title="From Plumbing Crime Scene to Normal Human Bathroom"
            body="These supplied concept illustrations demonstrate service scenarios. They do not depict real employees or completed customer jobs."
            maxWidth="wide"
          />
          <div className="before-after__grid">
            {[
              {
                image: garyLeak,
                label: 'Before',
                title: 'Pipe fitting with main-character energy',
                note: 'Demo illustration · leak repair',
              },
              {
                image: garyToilet,
                label: 'After',
                title: 'The throne has regained its dignity',
                note: 'Demo illustration · toilet service',
              },
              {
                image: garyWaterHeater,
                label: 'Resolved',
                title: 'Hot water, restored to the kingdom',
                note: 'Demo illustration · water heater',
              },
            ].map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <article>
                  <div className="before-after__image">
                    <ResponsiveImage src={item.image} alt={item.title} />
                    <span>{item.label}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.note}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section testimonials-section">
        <Container className="testimonials-section__grid">
          <SectionHeading
            eyebrow="Placeholder praise"
            title="Nice Things People Definitely Said in This Fictional Demonstration"
            body="Sample reviews show how permission-based customer feedback could appear. They are clearly fictional and ready to replace."
            theme="dark"
          />
          <TestimonialCarousel />
        </Container>
      </section>

      <section className="stats-section">
        <Container className="stats-grid">
          {[
            ['24/7', 'Hours plumbing is capable of betraying you'],
            ['100%', 'Of toilets expected to flush after a completed repair'],
            ['0', 'Desired indoor waterfalls'],
            ['1', 'Extremely committed cartoon plumber mascot'],
          ].map(([value, label], index) => (
            <MotionReveal type="scale" key={label} delay={index * 0.05}>
              <article>
                <strong>{value}</strong>
                <p>{label}</p>
              </article>
            </MotionReveal>
          ))}
        </Container>
      </section>

      <section className="section faq-section" id="faq">
        <Container className="faq-section__grid">
          <div>
            <SectionHeading
              eyebrow="Straight answers"
              title="Frequently Asked Plumbing Questions"
              body="Useful answers for real plumbing situations, followed by exactly one invoice joke."
            />
            <ButtonLink to="/contact" variant="ghost">
              Ask a Different Question
            </ButtonLink>
          </div>
          <FaqList items={faqs.slice(0, 7)} />
        </Container>
      </section>

      <section className="home-final-cta">
        <Container className="home-final-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">Enough gurgling</p>
            <h2>Your Plumbing Is Acting Weird. Let’s Talk About It.</h2>
            <p>
              Tell us what happened, where it happened, and whether the wall is
              supposed to look that damp.
            </p>
          </div>
          <div>
            <ButtonLink to="/free-estimate">Get This Crap Fixed</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Talk to a Real Human
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
