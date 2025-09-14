import { useState, useEffect } from 'react';
import { translations, Translation } from '../data/translations';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [t, setT] = useState<Translation>(translations.en);

  useEffect(() => {
    // Get language from localStorage or browser
    const savedLanguage = localStorage.getItem('ratte-language') || 
                          navigator.language.split('-')[0] || 'en';
    
    const language = translations[savedLanguage] ? savedLanguage : 'en';
    setCurrentLanguage(language);
    setT(translations[language]);
  }, []);

  const changeLanguage = (language: string) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      setT(translations[language]);
      localStorage.setItem('ratte-language', language);
    }
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: Object.keys(translations)
  };
};