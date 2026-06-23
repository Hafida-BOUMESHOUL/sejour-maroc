import { createContext, useContext, useState } from 'react'
import translations from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')

  const t = translations[lang]

  const switchLanguage = (newLang) => {
    setLang(newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
