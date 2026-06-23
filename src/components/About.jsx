import { CheckCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import riadImg from '../assets/riad.jpg'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <section className="about section" id="apropos">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <img
              src={riadImg}
              alt="Riad traditionnel marocain"
              className="about__image"
              loading="lazy"
            />
            <div className="about__image-badge">
              <span className="about__badge-number">8+</span>
              <span className="about__badge-text">{t.about.badge}</span>
            </div>
          </div>
          <div className="about__content">
            <span className="about__label">{t.about.label}</span>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="about__desc">{t.about.desc1}</p>
            <p className="about__desc">{t.about.desc2}</p>
            <ul className="about__highlights">
              {t.about.highlights.map((item) => (
                <li className="about__highlight" key={item}>
                  <CheckCircle size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              {t.about.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
