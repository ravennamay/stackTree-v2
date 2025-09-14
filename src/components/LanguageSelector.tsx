import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

// SVG Flag components
const BrazilFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#009639"/>
    <path d="M10 2L17 7.5L10 13L3 7.5L10 2Z" fill="#FFDF00"/>
    <circle cx="10" cy="7.5" r="3" fill="#012169"/>
  </svg>
);

const USFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#B22234"/>
    <rect y="1" width="20" height="1" fill="white"/>
    <rect y="3" width="20" height="1" fill="white"/>
    <rect y="5" width="20" height="1" fill="white"/>
    <rect y="7" width="20" height="1" fill="white"/>
    <rect y="9" width="20" height="1" fill="white"/>
    <rect y="11" width="20" height="1" fill="white"/>
    <rect y="13" width="20" height="1" fill="white"/>
    <rect width="8" height="8" fill="#3C3B6E"/>
  </svg>
);

const SpainFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#AA151B"/>
    <rect y="3.75" width="20" height="7.5" fill="#F1BF00"/>
  </svg>
);

const FranceFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="6.67" height="15" fill="#002395"/>
    <rect x="6.67" width="6.67" height="15" fill="white"/>
    <rect x="13.33" width="6.67" height="15" fill="#ED2939"/>
  </svg>
);

const GermanyFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="5" fill="#000"/>
    <rect y="5" width="20" height="5" fill="#DD0000"/>
    <rect y="10" width="20" height="5" fill="#FFCE00"/>
  </svg>
);

const RussiaFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="5" fill="white"/>
    <rect y="5" width="20" height="5" fill="#0039A6"/>
    <rect y="10" width="20" height="5" fill="#D52B1E"/>
  </svg>
);

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languageLabels: Record<string, { flag: React.ReactNode; name: string }> = {
    pt: { flag: <BrazilFlag />, name: 'Português' },
    en: { flag: <USFlag />, name: 'English' },
    es: { flag: <SpainFlag />, name: 'Español' },
    fr: { flag: <FranceFlag />, name: 'Français' },
    de: { flag: <GermanyFlag />, name: 'Deutsch' },
    ru: { flag: <RussiaFlag />, name: 'Русский' }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-all duration-200"
        aria-label="Select language"
      >
        <span className="flex items-center justify-center w-5 h-5">
          {languageLabels[currentLanguage]?.flag || '🌐'}
        </span>
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {languageLabels[currentLanguage]?.name || currentLanguage.toUpperCase()}
        </span>
        <svg 
          className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 min-w-[150px] py-2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 backdrop-blur-md z-50">
          {availableLanguages
            .filter(lang => languageLabels[lang])
            .map((language) => (
            <button
              key={language}
              onClick={() => {
                changeLanguage(language);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200 ${
                currentLanguage === language 
                  ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              <span className="text-lg">{languageLabels[language].flag}</span>
              <span className="text-sm font-medium">{languageLabels[language].name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSelector;