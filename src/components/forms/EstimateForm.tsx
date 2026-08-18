import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { LuFileImage, LuPhone, LuTrash2 } from 'react-icons/lu'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import garySuccess from '../../assets/cartoon-3.webp'
import { placeholderPhone, placeholderPhoneHref } from '../../data/site'
import { services } from '../../data/services'
import { submitEstimateRequest } from '../../lib/estimate'

const phonePattern = /^[+()0-9.\-\s]{7,20}$/
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
const maxFileSize = 6 * 1024 * 1024

const estimateSchema = z.object({
  firstName: z.string().trim().min(2, 'Enter your first name.'),
  lastName: z.string().trim().min(2, 'Enter your last name.'),
  email: z.email('Enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .regex(phonePattern, 'Enter a valid phone number.'),
  streetAddress: z.string().trim().min(5, 'Enter the property address.'),
  city: z.string().trim().min(2, 'Enter the city.'),
  state: z.string().trim().length(2, 'Use the two-letter state code.'),
  zipCode: z.string().trim().regex(/^\d{5}(-\d{4})?$/, 'Enter a valid ZIP code.'),
  service: z.string().min(1, 'Select the service you need.'),
  description: z
    .string()
    .trim()
    .min(20, 'Tell us a little more about what is happening.'),
  contactMethod: z.string().min(1, 'Select a preferred contact method.'),
  appointmentDate: z.string().min(1, 'Select a preferred date.'),
  appointmentWindow: z.string().min(1, 'Select an appointment window.'),
  activeLeak: z.string().min(1, 'Tell us whether water is actively leaking.'),
  emergency: z.string().min(1, 'Tell us whether this is an emergency.'),
  propertyType: z.string().min(1, 'Select the property type.'),
  occupancy: z.string().min(1, 'Select owner or renter.'),
  consent: z.boolean().refine(Boolean, 'Consent is required to submit.'),
  website: z.string().max(0, 'Spam protection triggered.'),
})

type EstimateFormValues = z.infer<typeof estimateSchema>

function FieldError({ message }: { message?: string }) {
  return message ? <span className="field-error">{message}</span> : null
}

export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [photo, setPhoto] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EstimateFormValues>({
    resolver: zodResolver(estimateSchema),
    defaultValues: {
      state: 'TX',
      consent: false,
      website: '',
    },
  })

  const onInvalid = () => {
    window.setTimeout(() => document.getElementById('form-error-summary')?.focus(), 0)
  }

  const onSubmit = async (values: EstimateFormValues) => {
    setSubmitError('')
    if (photo && (!allowedTypes.includes(photo.type) || photo.size > maxFileSize)) {
      setSubmitError('Upload a JPG, PNG, or WebP image smaller than 6 MB.')
      document.getElementById('form-error-summary')?.focus()
      return
    }

    try {
      await submitEstimateRequest({
        ...values,
        photoName: photo?.name,
      })
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'auto' })
    } catch {
      setSubmitError(
        'The request did not go through. Check your connection and try again, or call if the plumbing situation is getting worse.',
      )
      document.getElementById('form-error-summary')?.focus()
    }
  }

  if (submitted) {
    return (
      <section className="form-success" aria-live="polite">
        <img
          src={garySuccess}
          alt="Gary the Clog Goblin gives an approving thumbs-up"
          width="800"
          height="1200"
        />
        <div>
          <p className="eyebrow">Transmission received</p>
          <h2>Your Plumbing Confession Has Been Received</h2>
          <p>
            Thanks for contacting Clog Goblin Plumbing Co. This demonstration
            form did not send data to a production service. When connected, a
            team member can review the details and follow up using your preferred
            contact method.
          </p>
          <p>
            If the situation becomes an active leak, flood, or sewage backup,
            call the emergency number instead of waiting for an online response.
          </p>
          <Link className="button-link button-link--primary" to="/">
            Return Home Before Anything Else Breaks
          </Link>
        </div>
      </section>
    )
  }

  const errorCount = Object.keys(errors).length

  return (
    <form
      className="estimate-form"
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      noValidate
    >
      {(errorCount > 0 || submitError) && (
        <div
          id="form-error-summary"
          className="error-summary"
          role="alert"
          tabIndex={-1}
        >
          <strong>Something needs attention.</strong>
          <p>
            {submitError ||
              `Review the ${errorCount} highlighted field${errorCount === 1 ? '' : 's'} below.`}
          </p>
        </div>
      )}

      <input
        type="text"
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register('website')}
      />

      <fieldset>
        <legend>
          <span>01</span> Your information
        </legend>
        <div className="form-grid form-grid--two">
          <label>
            First name
            <input
              autoComplete="given-name"
              aria-invalid={Boolean(errors.firstName)}
              {...register('firstName')}
            />
            <FieldError message={errors.firstName?.message} />
          </label>
          <label>
            Last name
            <input
              autoComplete="family-name"
              aria-invalid={Boolean(errors.lastName)}
              {...register('lastName')}
            />
            <FieldError message={errors.lastName?.message} />
          </label>
          <label>
            Email address
            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(errors.email)}
              {...register('email')}
            />
            <FieldError message={errors.email?.message} />
          </label>
          <label>
            Phone number
            <input
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(errors.phone)}
              {...register('phone')}
            />
            <FieldError message={errors.phone?.message} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <span>02</span> The scene of the crime
        </legend>
        <div className="form-grid">
          <label>
            Street address
            <input
              autoComplete="street-address"
              aria-invalid={Boolean(errors.streetAddress)}
              {...register('streetAddress')}
            />
            <FieldError message={errors.streetAddress?.message} />
          </label>
        </div>
        <div className="form-grid form-grid--address">
          <label>
            City
            <input
              autoComplete="address-level2"
              aria-invalid={Boolean(errors.city)}
              {...register('city')}
            />
            <FieldError message={errors.city?.message} />
          </label>
          <label>
            State
            <input
              autoComplete="address-level1"
              maxLength={2}
              aria-invalid={Boolean(errors.state)}
              {...register('state')}
            />
            <FieldError message={errors.state?.message} />
          </label>
          <label>
            ZIP code
            <input
              autoComplete="postal-code"
              inputMode="numeric"
              aria-invalid={Boolean(errors.zipCode)}
              {...register('zipCode')}
            />
            <FieldError message={errors.zipCode?.message} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <span>03</span> What happened?
        </legend>
        <div className="form-grid form-grid--two">
          <label>
            Service needed
            <select
              aria-invalid={Boolean(errors.service)}
              {...register('service')}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
              <option value="inspection">Plumbing inspection</option>
              <option value="other">Other strange pipe behavior</option>
            </select>
            <FieldError message={errors.service?.message} />
          </label>
          <label>
            Is water actively leaking?
            <select
              aria-invalid={Boolean(errors.activeLeak)}
              {...register('activeLeak')}
            >
              <option value="">Select one</option>
              <option value="no">No</option>
              <option value="drip">Slow drip</option>
              <option value="steady">Steady leak</option>
              <option value="flooding">Active flooding</option>
              <option value="unsure">Not sure, but the wall looks suspicious</option>
            </select>
            <FieldError message={errors.activeLeak?.message} />
          </label>
        </div>
        <label>
          Problem description
          <textarea
            rows={6}
            placeholder="Example: The downstairs toilet gurgles whenever the washing machine drains, and now the shower is backing up. This started yesterday."
            aria-invalid={Boolean(errors.description)}
            {...register('description')}
          />
          <FieldError message={errors.description?.message} />
        </label>
        <div className="form-grid form-grid--two">
          <label>
            Is this an emergency?
            <select
              aria-invalid={Boolean(errors.emergency)}
              {...register('emergency')}
            >
              <option value="">Select one</option>
              <option value="no">No</option>
              <option value="unsure">Not sure</option>
              <option value="yes">Yes — I will call instead</option>
            </select>
            <FieldError message={errors.emergency?.message} />
          </label>
          <label>
            Property type
            <select
              aria-invalid={Boolean(errors.propertyType)}
              {...register('propertyType')}
            >
              <option value="">Select one</option>
              <option value="house">Single-family home</option>
              <option value="townhome">Townhome</option>
              <option value="condo">Condo or apartment</option>
              <option value="commercial">Small business</option>
            </select>
            <FieldError message={errors.propertyType?.message} />
          </label>
        </div>
        <div className="form-grid form-grid--two">
          <label>
            Owner or renter?
            <select
              aria-invalid={Boolean(errors.occupancy)}
              {...register('occupancy')}
            >
              <option value="">Select one</option>
              <option value="owner">Owner</option>
              <option value="renter">Renter</option>
              <option value="manager">Property manager</option>
            </select>
            <FieldError message={errors.occupancy?.message} />
          </label>
          <div className="upload-field">
            <span>Optional photo</span>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
              onChange={(event) => setPhoto(event.target.files?.[0] ?? null)}
              id="estimate-photo"
            />
            <label htmlFor="estimate-photo" className="upload-button">
              <LuFileImage aria-hidden="true" />
              {photo ? 'Replace evidence' : 'Upload evidence'}
            </label>
            {photo ? (
              <button
                type="button"
                className="remove-file"
                onClick={() => {
                  setPhoto(null)
                  const input =
                    document.querySelector<HTMLInputElement>('#estimate-photo')
                  if (input) input.value = ''
                }}
              >
                <LuTrash2 aria-hidden="true" />
                Remove {photo.name}
              </button>
            ) : (
              <small>No photo selected. A picture is optional, but Gary enjoys evidence.</small>
            )}
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <span>04</span> Follow-up preferences
        </legend>
        <div className="form-grid form-grid--three">
          <label>
            Preferred contact
            <select
              aria-invalid={Boolean(errors.contactMethod)}
              {...register('contactMethod')}
            >
              <option value="">Select one</option>
              <option value="phone">Phone</option>
              <option value="text">Text message</option>
              <option value="email">Email</option>
            </select>
            <FieldError message={errors.contactMethod?.message} />
          </label>
          <label>
            Preferred date
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              aria-invalid={Boolean(errors.appointmentDate)}
              {...register('appointmentDate')}
            />
            <FieldError message={errors.appointmentDate?.message} />
          </label>
          <label>
            Preferred window
            <select
              aria-invalid={Boolean(errors.appointmentWindow)}
              {...register('appointmentWindow')}
            >
              <option value="">Select one</option>
              <option value="morning">Morning</option>
              <option value="midday">Midday</option>
              <option value="afternoon">Afternoon</option>
              <option value="flexible">I am flexible</option>
            </select>
            <FieldError message={errors.appointmentWindow?.message} />
          </label>
        </div>
      </fieldset>

      <div className="consent-field">
        <label>
          <input type="checkbox" {...register('consent')} />
          <span>
            I consent to being contacted about this request. I understand this
            form does not schedule an appointment or provide emergency response.
          </span>
        </label>
        <FieldError message={errors.consent?.message} />
      </div>

      <div className="estimate-form__footer">
        <button
          type="submit"
          className="button-link button-link--primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Consulting the pipe spirits…' : 'Request My Free Estimate'}
        </button>
        <p>
          Submitting this form does not schedule an appointment automatically. A
          team member will contact you to confirm details and availability.
        </p>
      </div>

      <aside className="emergency-form-note">
        <LuPhone aria-hidden="true" />
        <div>
          <strong>Water actively escaping?</strong>
          <p>
            Shut off the water if safe, avoid electrical hazards, and call
            directly. Do not wait for this demonstration form.
          </p>
        </div>
        <a href={placeholderPhoneHref}>
          {placeholderPhone} <small>demo number</small>
        </a>
      </aside>
    </form>
  )
}
