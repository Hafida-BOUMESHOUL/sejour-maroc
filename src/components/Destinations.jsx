import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useCardsPerView } from '../hooks/useCardsPerView'
import './Destinations.css'

function Destinations({ destinations, onDestinationClick, isCircuits }) {
  const { t, lang } = useLanguage()
  const [startIndex, setStartIndex] = useState(0)
  const cardsPerView = useCardsPerView()

  // Reset startIndex if it goes out of bounds on resize
  useEffect(() => {
    if (startIndex + cardsPerView > destinations.length) {
      setStartIndex(Math.max(0, destinations.length - cardsPerView))
    }
  }, [cardsPerView, destinations.length, startIndex])

  const canGoBack = startIndex > 0
  const canGoForward = startIndex + cardsPerView < destinations.length

  const handlePrev = () => {
    if (canGoBack) setStartIndex(Math.max(0, startIndex - cardsPerView))
  }

  const handleNext = () => {
    if (canGoForward) setStartIndex(Math.min(destinations.length - cardsPerView, startIndex + cardsPerView))
  }

  const visibleDestinations = destinations.slice(startIndex, startIndex + cardsPerView)

  return (
    <section className="destinations section" id={isCircuits ? 'circuits' : 'destinations'}>
      <div className="container">
        <div className="destinations__header">
          <h2 className="section-title">{isCircuits ? (t.circuits?.title || 'Nos Circuits') : t.destinations.title}</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>
            {isCircuits ? (t.circuits?.subtitle || 'Des circuits multi-jours pour explorer le Maroc en profondeur') : t.destinations.subtitle}
          </p>
        </div>
        <div className="destinations__carousel">
          <button
            className="carousel-arrow carousel-arrow--left"
            onClick={handlePrev}
            disabled={!canGoBack}
            aria-label="Previous destinations"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="destinations__grid">
            {visibleDestinations.map((dest) => {
              const localized = dest.i18n[lang] || dest.i18n.fr
              return (
                <article
                  className="destination-card"
                  key={dest.id}
                  onClick={() => onDestinationClick(dest)}
                  role="button"
                  tabIndex={0}
                  aria-label={dest.title}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onDestinationClick(dest)
                    }
                  }}
                >
                  <img
                    className="destination-card__image"
                    src={dest.image}
                    alt={dest.title}
                    loading="lazy"
                  />
                  <div className="destination-card__overlay">
                    <span className="destination-card__tag">{localized.tag}</span>
                    <h3 className="destination-card__title">{dest.title}</h3>
                    <p className="destination-card__desc">{localized.desc}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <button
            className="carousel-arrow carousel-arrow--right"
            onClick={handleNext}
            disabled={!canGoForward}
            aria-label="Next destinations"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(destinations.length / cardsPerView) }).map((_, i) => (
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

export default Destinations
