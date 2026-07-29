import { LuPlus } from 'react-icons/lu'

import type { Faq } from '../../data/faqs'
import { MotionReveal } from './MotionReveal'

type FaqListProps = {
  items: Faq[]
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <MotionReveal key={item.question} delay={Math.min(index, 4) * 0.04}>
          <details className="faq-item">
            <summary>
              <span>{item.question}</span>
              <LuPlus aria-hidden="true" />
            </summary>
            <div className="faq-item__answer">
              <p>{item.answer}</p>
            </div>
          </details>
        </MotionReveal>
      ))}
    </div>
  )
}

