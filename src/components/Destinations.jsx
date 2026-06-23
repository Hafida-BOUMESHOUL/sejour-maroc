import { useLanguage } from '../i18n/LanguageContext'
import './Destinations.css'

function Destinations({ destinations, onDestinationClick }) {
  const { t } = useLanguage()

  return (
    <section className="destinations section" id="destinations">
      <div className="container">
        <div className="destinations__header">
          <h2 className="section-title">{t.destinations.title}</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>
            {t.destinations.subtitle}
          </p>
        </div>
        <div className="destinations__grid">
          {destinations.map((dest) => (
            <article
              className="destination-card"
              key={dest.id}
              onClick={() => onDestinationClick(dest)}
              role="button"
              tabIndex={0}
              aria-label={`${dest.title}`}
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
                <span className="destination-card__tag">{dest.tag}</span>
                <h3 className="destination-card__title">{dest.title}</h3>
                <p className="destination-card__desc">{dest.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
