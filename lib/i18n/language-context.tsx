"use client"

import * as React from "react"
import { translations, type LanguageCode } from "./translations"

type LanguageContextType = {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string) => string
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<LanguageCode>("en")

  // Load saved language from localStorage on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as LanguageCode
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = React.useCallback((lang: LanguageCode) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    // Update the html lang attribute
    document.documentElement.lang = lang
  }, [])

  const t = React.useCallback(
    (key: string): string => {
      return translations[language][key] || key
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
