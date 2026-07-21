import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Clock, MapPin,
  Check, X, CheckCircle, Send, Loader,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './TripDetail.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

function TripDetail({ destination }) {
  const { t, lang } = useLanguage()
  const navigate = useNavigate()
  const localized = destination.i18n[lang] || destination.i18n.fr
  const [form, setForm] = useState({
    name: '', email: '', phone: '', travelers: '', date: '',
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      const res = await fetch(`${API_URL}/api/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, destination: destination.title }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', travelers: '', date: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="trip-detail">
      <button className="trip-detail__back" onClick={() => navigate('/')} aria-label="Back">
        <ArrowLeft size={20} />
      </button>

      <div className="trip-detail__hero">
        <div
          className="trip-detail__hero-bg"
          style={{ backgroundImage: `url(${destination.heroImage})` }}
        ></div>
        <div className="trip-detail__hero-overlay"></div>
        <div className="trip-detail__hero-content">
          <span className="trip-detail__tag">{localized.tag}</span>
          <h1 className="trip-detail__title">{destination.title}</h1>
          <div className="trip-detail__meta">
            <span className="trip-detail__meta-item">
              <Clock size={16} />{localized.duration}
            </span>
            <span className="trip-detail__meta-item">
              <MapPin size={16} />Maroc
            </span>
          </div>
        </div>
      </div>

      <div className="trip-detail__body">
        <div className="trip-detail__main">
          <h2>{t.trip.overview}</h2>
          <p className="trip-detail__overview">{localized.overview}</p>

          <div className="trip-detail__inc-exc">
            <div className="trip-detail__list-section">
              <h3>
                <Check size={18} style={{ color: 'var(--color-secondary)' }} />
                {t.trip.included}
              </h3>
              <div className="trip-detail__list">
                {localized.included.map((item) => (
                  <div key={item} className="trip-detail__list-item trip-detail__list-item--included">
                    <CheckCircle size={14} /><span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="trip-detail__list-section">
              <h3>
                <X size={18} style={{ color: 'var(--color-primary)' }} />
                {t.trip.excluded}
              </h3>
              <div className="trip-detail__list">
                {localized.excluded.map((item) => (
                  <div key={item} className="trip-detail__list-item trip-detail__list-item--excluded">
                    <X size={14} /><span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2>{t.trip.itinerary}</h2>
          <div className="trip-detail__itinerary">
            <div className="trip-detail__timeline">
              {localized.itinerary.map((step, index) => (
                <div key={index} className="trip-detail__timeline-item">
                  <div className="trip-detail__timeline-dot"></div>
                  <span className="trip-detail__timeline-time">{step.time}</span>
                  <h4 className="trip-detail__timeline-title">{step.title}</h4>
                  <p className="trip-detail__timeline-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="trip-detail__sidebar">
          <div className="trip-detail__booking">
            <h3 className="trip-detail__booking-title">{t.trip.bookTitle}</h3>
            <form className="trip-detail__booking-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="book-name">{t.trip.formName}</label>
                <input type="text" id="book-name" name="name"
                  placeholder={t.trip.formName} value={form.name}
                  onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="book-email">{t.trip.formEmail}</label>
                <input type="email" id="book-email" name="email"
                  placeholder="email@example.com" value={form.email}
                  onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="book-phone">{t.trip.formPhone}</label>
                <input type="tel" id="book-phone" name="phone"
                  placeholder="+33 6 00 00 00 00" value={form.phone}
                  onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="book-travelers">{t.trip.formTravelers}</label>
                <input type="number" id="book-travelers" name="travelers"
                  placeholder="2" min="1" max="30" value={form.travelers}
                  onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="book-date">{t.trip.formDate}</label>
                <input type="date" id="book-date" name="date"
                  value={form.date} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary trip-detail__booking-submit" disabled={sending}>
                {sending ? <Loader size={16} className="spinning" /> : <Send size={16} />}{t.trip.bookNow}
              </button>
              {status === 'success' && (
                <p className="contact__status contact__status--success" style={{ marginTop: '0.75rem' }}>{t.trip.successMsg}</p>
              )}
              {status === 'error' && (
                <p className="contact__status contact__status--error" style={{ marginTop: '0.75rem' }}>
                  Erreur lors de l'envoi. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>

          <div className="trip-detail__why">
            <h4>{t.trip.whyTitle}</h4>
            <div className="trip-detail__why-list">
              {t.trip.whyItems.map((item) => (
                <div key={item} className="trip-detail__why-item">
                  <CheckCircle size={14} /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default TripDetail
