import { Compass, Users, Star, Shield, Car, Camera } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './Services.css'

const icons = [
  <Compass size={28} />,
  <Users size={28} />,
  <Star size={28} />,
  <Shield size={28} />,
  <Car size={28} />,
  <Camera size={28} />,
]

function Services() {
  const { t } = useLanguage()

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>
            {t.services.subtitle}
          </p>
        </div>
        <div className="services__grid">
          {t.services.items.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__icon">{icons[i]}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
