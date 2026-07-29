import { LuDatabase, LuFileWarning, LuShieldCheck } from 'react-icons/lu'

import { Container } from '../components/common/Container'
import { usePageMeta } from '../hooks/usePageMeta'

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Placeholder | Clog Goblin Plumbing Co.',
    description:
      'Starter privacy information for the fictional Clog Goblin Plumbing Co. estimate experience.',
    path: '/privacy',
  })

  return (
    <section className="legal-page">
      <Container className="legal-page__grid">
        <aside>
          <LuShieldCheck aria-hidden="true" />
          <p className="eyebrow">Starter policy</p>
          <h1>Privacy Without the Fine-Print Swamp</h1>
          <p>
            This page is placeholder copy for a fictional demonstration. It must
            be reviewed and updated for the actual tools, business practices, and
            laws that apply before production use.
          </p>
        </aside>
        <article>
          <div className="legal-notice">
            <LuFileWarning aria-hidden="true" />
            <p>
              <strong>Not final legal language.</strong> No production form,
              analytics, CRM, advertising, or communication service is connected
              by this demo.
            </p>
          </div>

          <h2>Information an estimate form may collect</h2>
          <p>
            A working estimate request may collect information you provide so a
            plumbing company can understand the request and follow up.
          </p>
          <ul>
            <li>Name</li>
            <li>Contact information</li>
            <li>Property address</li>
            <li>Service details and problem descriptions</li>
            <li>Uploaded images</li>
            <li>Appointment and contact preferences</li>
            <li>Technical usage information</li>
          </ul>

          <h2>How information may be used</h2>
          <p>
            Depending on the final implementation, information may be used to
            review service requests, contact the requester, schedule
            appointments, prepare estimates, provide customer service, secure
            the website, and understand site performance.
          </p>

          <h2>Storage and sharing</h2>
          <p>
            The final policy must name the real form processor, hosting provider,
            analytics tools, CRM, advertising services, email or text systems,
            file storage, retention periods, and any parties that receive data.
            Do not make claims about selling, sharing, encryption, or deletion
            until those practices are verified.
          </p>

          <h2>Uploaded photos</h2>
          <p>
            Plumbing photos may accidentally include personal property or other
            identifying details. The production experience should explain where
            files are stored, who can access them, how long they remain, and how
            a user can request removal.
          </p>

          <h2>Contact and questions</h2>
          <p>
            Replace this section with the operating company’s real privacy
            contact information and any rights or request procedures required by
            applicable law.
          </p>

          <div className="legal-signoff">
            <LuDatabase aria-hidden="true" />
            <p>
              Final language should be reviewed whenever analytics, hosting,
              forms, CRM, advertising, or communication tools change. Pipes and
              privacy policies both dislike undocumented connections.
            </p>
          </div>
        </article>
      </Container>
    </section>
  )
}

