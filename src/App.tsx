import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SiteLayout } from './components/layout/SiteLayout'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'))
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'))
const EstimatePage = lazy(() => import('./pages/EstimatePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span aria-hidden="true" />
      Consulting the pipe spirits…
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route
              path="services/:slug"
              element={<ServiceDetailPage />}
            />
            <Route path="about" element={<AboutPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="service-areas" element={<ServiceAreasPage />} />
            <Route path="free-estimate" element={<EstimatePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
