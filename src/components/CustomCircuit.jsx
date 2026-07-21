import { useState } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './CustomCircuit.css'

const allCities = [
  'Marrakech', 'Fès', 'Chefchaouen', 'Casablanca', 'Rabat',
  'Essaouira', 'Merzouga', 'Ouarzazate', 'Tanger', 'Meknès',
  'Aït Benhaddou', 'Todra', 'Dades', 'Agadir', 'Ifrane',
  'Midelt', 'Rissani', 'Erfoud', 'Assilah', 'Tétouan',
  'Skoura', 'Boumalne', 'El Jadida', 'Taroudant',
]

function CustomCircuit({ onRequestCircuit }) {
  const { t } = useLanguage()
  const [selectedCities, setSelectedCities] = useState([])

  const toggleCity = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    )
  }

  const handleRequest = () => {
    if (selectedCities.length === 0) return
    const route = selectedCities.join(' → ')
    onRequestCircuit(route)
  }

  const txt = t.customCircuit || {}

  return (
    <section className="custom-circuit section" id="custom-circuit">
      <div className="container">
        <div className="custom-circuit__header">
          <h2 className="section-title">{txt.title || 'Créez Votre Circuit'}</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0' }}>
            {txt.subtitle || 'Sélectionnez les villes que vous souhaitez visiter et nous créerons un circuit sur mesure'}
          </p>
        </div>

        <div className="custom-circuit__content">
          <div className="custom-circuit__cities">
            <h3 className="custom-circuit__cities-title">
              <MapPin size={18} />
              {txt.selectCities || 'Sélectionnez vos villes'}
            </h3>
            <div className="custom-circuit__city-tags">
              {allCities.map((city) => (
                <button
                  key={city}
                  type="button"
                  className={`custom-circuit__tag ${selectedCities.includes(city) ? 'custom-circuit__tag--active' : ''}`}
                  onClick={() => toggleCity(city)}
                >
                  {city}
                </button>
              ))}
            </div>
            {selectedCities.length > 0 && (
              <div className="custom-circuit__route">
                <span className="custom-circuit__route-label">{txt.yourRoute || 'Votre itinéraire'} :</span>
                <span className="custom-circuit__route-path">{selectedCities.join(' → ')}</span>
              </div>
            )}
            {selectedCities.length > 0 && (
              <button
                className="btn btn-primary custom-circuit__cta"
                onClick={handleRequest}
              >
                {txt.submit || 'Demander un devis'}
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomCircuit
