export type EstimatePayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  service: string
  description: string
  contactMethod: string
  appointmentDate: string
  appointmentWindow: string
  activeLeak: string
  emergency: string
  propertyType: string
  occupancy: string
  photoName?: string
}

export async function submitEstimateRequest(payload: EstimatePayload) {
  // Demo abstraction only. Connect this function to a reviewed production
  // endpoint (Firebase, Supabase, Formspree, Resend, or a custom API) later.
  void payload
  await new Promise((resolve) => window.setTimeout(resolve, 700))
  return { ok: true as const }
}
