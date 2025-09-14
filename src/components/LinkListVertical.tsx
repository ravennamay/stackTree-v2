import React from 'react';
import { LinkData } from '../types';
import { useTranslation } from '../hooks/useTranslation';
import { FaExternalLinkAlt, FaCopy, FaCheck } from 'react-icons/fa';

interface LinkListVerticalProps {
  links: LinkData[];
}

const LinkListVertical: React.FC<LinkListVerticalProps> = ({ links }) => {
  const { t } = useTranslation();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const getSpecialContent = (link: LinkData) => {
    if (link.category === 'faq') {
      const faqKey = link.id.replace('faq-', '').replace(/-/g, '-');
      const faqEntry = t.faqEntries?.[faqKey];
      if (faqEntry) {
        return (
          <div className="mt-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {faqEntry.answer}
            </p>
          </div>
        );
      }
    }
    return null;
  };

  if (links.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 dark:text-neutral-400">
          No links found in this category
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {links.map((link) => (
        <div
          key={link.id}
          className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 hover:shadow-lg transition-all duration-300 hover:bg-white/90 dark:hover:bg-neutral-800/90"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {t.linkTitles?.[link.id] || (link.category === 'faq' ? t.faqEntries?.[link.id.replace('faq-', '').replace(/-/g, '-')]?.question : link.title) || link.title}
              </h3>
              
              {link.description && link.category !== 'faq' && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {t.linkDescriptions?.[link.id] || link.description}
                </p>
              )}

              {getSpecialContent(link)}

              {link.couponCode && (
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 rounded-lg">
                    <span className="text-sm font-mono font-medium text-blue-600 dark:text-blue-400">
                      {link.couponCode}
                    </span>
                    {link.discountPercentage && (
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                        -{link.discountPercentage}%
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleCopyCode(link.couponCode!)}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  >
                    {copiedCode === link.couponCode ? (
                      <>
                        <FaCheck className="w-3 h-3 text-green-500" />
                        {t.copied}
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-3 h-3" />
                        {t.copyCode}
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {link.category !== 'faq' && link.url !== '#' && (
              <button
                onClick={() => handleLinkClick(link.url)}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shrink-0"
              >
                <span>{t.visit}</span>
                <FaExternalLinkAlt className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkListVertical;