import { useState, useEffect } from 'react'
import { Compass, Users, Star, Shield, Car, Camera, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useCardsPerView } from '../hooks/useCardsPerView'
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
  const [startIndex, setStartIndex] = useState(0)
  const cardsPerView = useCardsPerView()

  const items = t.services.items

  // Reset startIndex if it goes out of bounds on resize
  useEffect(() => {
    if (startIndex + cardsPerView > items.length) {
      setStartIndex(Math.max(0, items.length - cardsPerView))
    }
  }, [cardsPerView, items.length, startIndex])

  const canGoBack = startIndex > 0
  const canGoForward = startIndex + cardsPerView < items.length

  const handlePrev = () => {
    if (canGoBack) setStartIndex(Math.max(0, startIndex - cardsPerView))
  }

  const handleNext = () => {
    if (canGoForward) setStartIndex(Math.min(items.length - cardsPerView, startIndex + cardsPerView))
  }

  const visibleItems = items.slice(startIndex, startIndex + cardsPerView)

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>
            {t.services.subtitle}
          </p>
        </div>
        <div className="services__carousel">
          <button
            className="carousel-arrow carousel-arrow--left"
            onClick={handlePrev}
            disabled={!canGoBack}
            aria-label="Previous services"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="services__grid">
            {visibleItems.map((service, i) => (
              <div className="service-card" key={startIndex + i}>
                <div className="service-card__icon">{icons[startIndex + i]}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
              </div>
            ))}
          </div>
          <button
            className="carousel-arrow carousel-arrow--right"
            onClick={handleNext}
            disabled={!canGoForward}
            aria-label="Next services"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(items.length / cardsPerView) }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === Math.floor(startIndex / cardsPerView) ? 'carousel-dot--active' : ''}`}
              onClick={() => setStartIndex(i * cardsPerView)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
