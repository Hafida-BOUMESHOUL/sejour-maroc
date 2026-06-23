import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Loader } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelers: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', destination: '', travelers: '', message: '' })
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
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="contact__label">{t.contact.label}</span>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="contact__desc">{t.contact.desc}</p>
            <div className="contact__details">
              <div className="contact__detail">
                <Phone size={20} />
                <div>
                  <span className="contact__detail-label">{t.contact.phone}</span>
                  <span className="contact__detail-value">+212 6 99 11 40 70</span>
                </div>
              </div>
              <div className="contact__detail">
                <Mail size={20} />
                <div>
                  <span className="contact__detail-label">{t.contact.email}</span>
                  <span className="contact__detail-value">hafida.boumeshoul0@gmail.com</span>
                </div>
              </div>
              <div className="contact__detail">
                <MapPin size={20} />
                <div>
                  <span className="contact__detail-label">{t.contact.address}</span>
                  <span className="contact__detail-value">Marrakech, Maroc</span>
                </div>
              </div>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name">{t.contact.form.name}</label>
                <input
                  type="text" id="name" name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name} onChange={handleChange} required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">{t.contact.form.email}</label>
                <input
                  type="email" id="email" name="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email} onChange={handleChange} required
                />
              </div>
            </div>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="destination">{t.contact.form.destination}</label>
                <select
                  id="destination" name="destination"
                  value={formData.destination} onChange={handleChange} required
                >
                  <option value="">{t.contact.form.destinationPlaceholder}</option>
                  {t.destinationOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="contact__form-group">
                <label htmlFor="travelers">{t.contact.form.travelers}</label>
                <input
                  type="number" id="travelers" name="travelers"
                  placeholder="2" min="1" max="30"
                  value={formData.travelers} onChange={handleChange} required
                />
              </div>
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message" name="message" rows="4"
                placeholder={t.contact.form.messagePlaceholder}
                value={formData.message} onChange={handleChange}
              ></textarea>
            </div>

            {status === 'success' && (
              <p className="contact__status contact__status--success">{t.contact.successMsg}</p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error">
                Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            )}

            <button type="submit" className="btn btn-primary contact__submit" disabled={sending}>
              {sending ? <Loader size={18} className="spinning" /> : <Send size={18} />}
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
