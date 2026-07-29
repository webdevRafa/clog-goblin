import { LuPhone } from 'react-icons/lu'

import { placeholderPhone, placeholderPhoneHref } from '../../data/site'
import { Container } from '../common/Container'

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <Container className="announcement-bar__inner">
        <p>
          Something leaking, bubbling, gurgling, or plotting against you?{' '}
          <strong>Call the Goblins.</strong>
        </p>
        <a
          href={placeholderPhoneHref}
          aria-label={`Call Clog Goblin Plumbing at placeholder number ${placeholderPhone}`}
        >
          <LuPhone aria-hidden="true" />
          <span>{placeholderPhone}</span>
          <small>Demo number</small>
        </a>
      </Container>
    </div>
  )
}

