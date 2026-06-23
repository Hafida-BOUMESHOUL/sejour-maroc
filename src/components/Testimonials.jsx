import { Star, Quote } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './Testimonials.css'

function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="testimonials section" id="temoignages">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="testimonials__grid">
          {t.testimonials.items.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <Quote size={32} className="testimonial-card__quote" />
              <p className="testimonial-card__text">{item.text}</p>
              <div className="testimonial-card__rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-card__name">{item.name}</div>
                  <div className="testimonial-card__location">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
