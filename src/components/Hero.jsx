import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="accueil">
      <div className="hero__bg" role="img" aria-label="Vue panoramique du Maroc"></div>
      <div className="hero__content">
        <span className="hero__label">{t.hero.welcome}</span>
        <h1 className="hero__title">
          {t.hero.title1}<span>{t.hero.titleHighlight}</span>{t.hero.title2}
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a href="#destinations" className="btn btn-primary">
            {t.hero.explore}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.hero.quote}
          </a>
        </div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-text">{t.hero.scroll}</span>
        <ChevronDown size={20} />
      </div>
    </section>
  )
}

export default Hero
