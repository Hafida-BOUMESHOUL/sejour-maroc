import { Globe, Camera, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import logoDark from '../assets/logo_dark_mode.jpeg'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <div className="footer__brand">
              <img src={logoDark} alt="Golden Morocco Voyage" className="footer__brand-logo" />
              Golden Morocco Voyage
            </div>
            <p className="footer__desc">{t.footer.desc}</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <Globe size={18} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <Camera size={18} />
              </a>
              <a href="#" className="footer__social-link" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">{t.footer.destinations}</h4>
            <ul className="footer__links">
              <li><a href="#destinations" className="footer__link">Marrakech</a></li>
              <li><a href="#destinations" className="footer__link">Sahara & Merzouga</a></li>
              <li><a href="#destinations" className="footer__link">Chefchaouen</a></li>
              <li><a href="#destinations" className="footer__link">Fès</a></li>
              <li><a href="#destinations" className="footer__link">Essaouira</a></li>
              <li><a href="#destinations" className="footer__link">Atlas</a></li>
              <li><a href="#destinations" className="footer__link">Casablanca</a></li>
              <li><a href="#destinations" className="footer__link">Rabat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">{t.footer.links}</h4>
            <ul className="footer__links">
              <li><a href="#apropos" className="footer__link">{t.nav.about}</a></li>
              <li><a href="#services" className="footer__link">{t.nav.services}</a></li>
              <li><a href="#temoignages" className="footer__link">{t.nav.testimonials}</a></li>
              <li><a href="#contact" className="footer__link">{t.nav.contact}</a></li>
              <li><a href="#" className="footer__link">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">{t.footer.contact}</h4>
            <ul className="footer__links">
              <li><span className="footer__link">+212 661 248 503</span></li>
              <li><span className="footer__link">contact@goldenmoroccovoyage.com</span></li>
              <li><span className="footer__link">Marrakech, Maroc</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.madeIn}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
