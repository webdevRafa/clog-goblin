import { MotionReveal } from './MotionReveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  body?: string
  alignment?: 'left' | 'center'
  theme?: 'light' | 'dark'
  maxWidth?: 'narrow' | 'wide'
  animated?: boolean
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  alignment = 'left',
  theme = 'light',
  maxWidth = 'narrow',
  animated = true,
  id,
}: SectionHeadingProps) {
  const heading = (
    <div
      className={`section-heading section-heading--${alignment} section-heading--${theme} section-heading--${maxWidth}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {body ? <p className="section-heading__body">{body}</p> : null}
    </div>
  )

  return animated ? <MotionReveal>{heading}</MotionReveal> : heading
}

