import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import logo from '../assets/logo.jpeg'
import logoDark from '../assets/logo_dark_mode.jpeg'
import './Navbar.css'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, t, switchLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '#accueil' },
    { label: t.nav.destinations, href: '#destinations' },
    { label: t.nav.circuits || 'Circuits', href: '#circuits' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#apropos' },
    { label: t.nav.testimonials, href: '#temoignages' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#accueil" className="navbar__brand">
          <img
            src={isScrolled ? logoDark : logo}
            alt="Golden Morocco Voyage"
            className="navbar__brand-logo"
          />
          <span>Golden Morocco Voyage</span>
        </a>

        <ul className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={() => setIsMobileOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileOpen(false)}>
              {t.nav.book}
            </a>
          </li>
        </ul>

        <div className="navbar__right">
          <div className="navbar__lang-switcher">
            <button
              className="navbar__lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Change language"
            >
              <Globe size={16} />
              <span>{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="navbar__lang-dropdown">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`navbar__lang-option ${lang === l.code ? 'navbar__lang-option--active' : ''}`}
                    onClick={() => { switchLanguage(l.code); setLangOpen(false) }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="btn btn-primary navbar__cta-desktop">
            {t.nav.book}
          </a>

          <button
            className="navbar__toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
