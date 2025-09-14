import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languageLabels: Record<string, { flag: string; name: string }> = {
    pt: { flag: '🇧🇷', name: 'Português' },
    en: { flag: '🇺🇸', name: 'English' },
    es: { flag: '🇪🇸', name: 'Español' },
    fr: { flag: '🇫🇷', name: 'Français' },
    de: { flag: '🇩🇪', name: 'Deutsch' }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-all duration-200"
        aria-label="Select language"
      >
        <span className="text-lg">
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