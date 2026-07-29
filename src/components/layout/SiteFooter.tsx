import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { LuArrowUpRight, LuPhone } from 'react-icons/lu'
import { Link } from 'react-router-dom'

import garyFooter from '../../assets/cartoon-1.webp'
import {
  placeholderEmail,
  placeholderPhone,
  placeholderPhoneHref,
} from '../../data/site'
import { services } from '../../data/services'
import { Container } from '../common/Container'

const socialLinks = [
  { label: 'Facebook', icon: FaFacebookF },
  { label: 'Instagram', icon: FaInstagram },
  { label: 'TikTok', icon: FaTiktok },
  { label: 'YouTube', icon: FaYoutube },
  { label: 'X', icon: FaXTwitter },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__cta">
        <Container className="site-footer__cta-inner">
          <div>
            <p className="eyebrow">Your pipes have problems. We have tools.</p>
            <h2>Ready to Restore Bathroom Dignity?</h2>
          </div>
          <div className="site-footer__cta-actions">
            <Link className="button-link button-link--primary" to="/free-estimate">
              <span>Request a Free Estimate</span>
              <LuArrowUpRight aria-hidden="true" />
            </Link>
            <a className="footer-phone" href={placeholderPhoneHref}>
              <LuPhone aria-hidden="true" />
              <span>
                <small>Demo number</small>
                {placeholderPhone}
              </span>
            </a>
          </div>
        </Container>
      </div>

      <Container className="site-footer__main">
        <div className="site-footer__brand">
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              CG
            </span>
            <span className="brand__type">
              <strong>Clog Goblin</strong>
              <small>Plumbing Co.</small>
            </span>
          </div>
          <p>
            Real plumbing services presented with fictional branding,
            professional layouts, and deeply unnecessary drain jokes.
          </p>
          <a href={`mailto:${placeholderEmail}`}>{placeholderEmail}</a>
          <small className="placeholder-label">Placeholder email</small>
          <div className="social-links" aria-label="Placeholder social profiles">
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                href="#"
                key={label}
                aria-label={`Clog Goblin Plumbing on ${label} — placeholder link`}
                onClick={(event) => event.preventDefault()}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Company</h3>
            <Link to="/about">About</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/service-areas">Service Areas</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h3>Services</h3>
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>Resources</h3>
            <Link to="/free-estimate">Free Estimate</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>

        <img
          src={garyFooter}
          alt=""
          width="800"
          height="1200"
          className="site-footer__gary"
          loading="lazy"
          aria-hidden="true"
        />
      </Container>

      <Container className="site-footer__disclaimer">
        <p>
          <strong>Fictional demonstration:</strong> Replace placeholder contact
          information, hours, service claims, reviews, policies, and business
          details before publishing for a real company.
        </p>
      </Container>

      <div className="site-footer__bottom">
        <Container>
          <p>
            © {year} Clog Goblin Plumbing Co. All rights reserved. Please flush
            responsibly.
          </p>
          <p>Serious plumbing. Questionable sense of humor.</p>
        </Container>
      </div>
    </footer>
  )
}
