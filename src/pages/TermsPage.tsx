import { LuFileWarning, LuScale } from 'react-icons/lu'

import { Container } from '../components/common/Container'
import { usePageMeta } from '../hooks/usePageMeta'

// Starter copy for demonstration purposes only. This is not legal advice.
const sections = [
  {
    title: 'Website use',
    copy: 'This demonstration is intended to present fictional plumbing-service content and a portfolio-quality customer experience. The operating company should define acceptable use, prohibited conduct, availability, and the right to update or discontinue the website.',
  },
  {
    title: 'Estimate requests',
    copy: 'Submitting a request does not create a service contract, guarantee pricing, reserve an appointment, or confirm that the requested work will be accepted. Real estimate terms should explain diagnostic fees, expiration dates, assumptions, scope, and approval requirements.',
  },
  {
    title: 'Appointment confirmation',
    copy: 'Requested dates and windows are preferences only until confirmed by the operating company. A production policy should address rescheduling, cancellations, access, pets, parking, and an adult authorized to approve work.',
  },
  {
    title: 'Emergency limitations',
    copy: 'The online form is not an emergency-response service. Active flooding, sewage backups, burst pipes, and other urgent conditions should be handled by shutting off water when safe, avoiding electrical hazards, and calling a qualified professional directly.',
  },
  {
    title: 'Informational content',
    copy: 'Website content is general information, not a diagnosis or instruction to attempt unsafe work. Conditions vary by building, materials, installation, and local requirements.',
  },
  {
    title: 'Intellectual property',
    copy: 'The final terms should identify ownership and permitted use of the company name, copy, illustrations, photographs, interface, and other materials. Third-party assets should remain subject to their licenses.',
  },
  {
    title: 'Third-party links',
    copy: 'Any future links to review platforms, financing, manufacturers, maps, or social services should be described accurately. The current demonstration social links are placeholders.',
  },
  {
    title: 'Disclaimers and liability',
    copy: 'The operating business and its legal counsel should draft appropriate warranty disclaimers, limitations, exceptions, remedies, and jurisdiction-specific terms. This starter intentionally makes no claim that a broad disclaimer is enforceable.',
  },
  {
    title: 'Contact information',
    copy: 'Replace this section with the operating business’s real legal name, mailing address, email address, and other required contact details.',
  },
]

export default function TermsPage() {
  usePageMeta({
    title: 'Terms Placeholder | Clog Goblin Plumbing Co.',
    description:
      'Starter website terms for the fictional Clog Goblin Plumbing Co. demonstration.',
    path: '/terms',
  })

  return (
    <section className="legal-page">
      <Container className="legal-page__grid">
        <aside>
          <LuScale aria-hidden="true" />
          <p className="eyebrow">Starter terms</p>
          <h1>Terms With Fewer Clogs Than Usual</h1>
          <p>
            This is structured starter copy, not legal advice. A qualified
            professional must tailor the final terms to the real company,
            location, services, and technology.
          </p>
        </aside>
        <article>
          <div className="legal-notice">
            <LuFileWarning aria-hidden="true" />
            <p>
              <strong>Fictional demonstration only.</strong> No appointment,
              service contract, warranty, emergency response, or binding estimate
              is created by this website.
            </p>
          </div>

          {sections.map((section, index) => (
            <section key={section.title}>
              <span className="legal-index">0{index + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </section>
          ))}
        </article>
      </Container>
    </section>
  )
}

