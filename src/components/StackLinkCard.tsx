import React, { useState, useRef, useEffect } from 'react';
import { LinkData } from '../types';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSteam, FaDiscord, FaTwitch, FaCode, FaPalette, FaBriefcase, FaCogs } from 'react-icons/fa';
import AffiliateBadge from './AffiliateBadge';
import GamificationBadge from './GamificationBadge';
import { useTranslation } from '../hooks/useTranslation';

// Import all images
import gearzggIcon from '../assets/gearzgg.jpg';
import skinportIcon from '../assets/skinport.jpg';
import csfloatIcon from '../assets/csfloat.jpg';
import eliteklanIcon from '../assets/eliteklan.jpg';
import acezoneIcon from '../assets/acezone.png';
import gamerbulkIcon from '../assets/gamerbulk.jpg';
import skinvaultIcon from '../assets/skinvault.png';
import pfpIcon from '../assets/pfp.png';

// Create a mapping of icon identifiers to actual images
const iconMap: Record<string, string> = {
  peripherals: gearzggIcon,
  skinport: skinportIcon,
  csfloat: csfloatIcon,
  eliteklan: eliteklanIcon,
  acezone: acezoneIcon,
  gamerbulk: gamerbulkIcon,
  skinvault: skinvaultIcon,
  pfp: pfpIcon,
};

// Default icons for different types of links
const defaultIcons: Record<string, React.ReactNode> = {
  // Social Media Icons
  'x.com': <FaXTwitter className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
  'twitter.com': <FaXTwitter className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
  'steamcommunity.com': <FaSteam className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
  'steamcommunity.com/tradeoffer': <FaSteam className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />,
  'discord.com': <FaDiscord className="h-5 w-5 text-indigo-500" />,
  'discord.gg': <FaDiscord className="h-5 w-5 text-indigo-500" />,
  'twitch.tv': <FaTwitch className="h-5 w-5 text-purple-500" />,

  // Trading/Skin Sites
  'csfloat.com': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  'skinport.com': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  'skinvault.gg': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),

  // Default icons for categories
  social: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  ),
  affiliate: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
    </svg>
  ),
  steam: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  ),
  partner: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-500" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
  ),
  config: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  ),
  // Services icons
  services: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    </svg>
  ),
  portfolio: (
    <FaBriefcase className="h-5 w-5 text-blue-500" />
  ),
  design: (
    <FaPalette className="h-5 w-5 text-purple-500" />
  ),
  'services-dev': (
    <FaCode className="h-5 w-5 text-green-500" />
  ),
  'services-design': (
    <FaPalette className="h-5 w-5 text-pink-500" />
  ),
  default: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  )
};

interface StackLinkCardProps {
  link: LinkData;
  index: number;
  total: number;
  isActive: boolean;
  onActivate: () => void;
}

/**
 * Stack interactive card component with depth effect
 */
const StackLinkCard: React.FC<StackLinkCardProps> = ({ 
  link, 
  index, 
  total, 
  isActive, 
  onActivate 
}) => {
  const { t } = useTranslation();
  const { 
    title, 
    url, 
    icon, 
    clickCount, 
    description,
    couponCode,
    seoKeywords,
    schemaType,
    analyticsId,
    isVerified,
    lastUpdated,
    discountPercentage,
    productDetails,
    category,
    affiliateCode,
    priority,
    successRate,
    isLimitedTime,
    remainingCodes,
    streakCount,
    pointsEarned,
    nextReward,
    isDealOfTheDay,
    rank
  } = link;
  
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onActivate();
    
    // Add a small delay before redirect to show the interaction
    setTimeout(() => {
      window.open(url, '_blank', 'noopener noreferrer');
    }, 200);
  };

  const handleCopyCode = async (code: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Calculate stack position and rotation for enhanced depth effect
  const stackOffset = isActive ? 0 : index * 3;
  const rotation = isActive ? 0 : (index - total/2) * 0.8;
  const scale = isActive ? 1 : Math.max(0.92, 1 - (index * 0.04));
  const zIndex = isActive ? 50 : total - index + 10;
  const opacity = isActive ? 1 : Math.max(0.6, 1 - (index * 0.15));
  
  // Enhanced shadow and blur effects based on stack position
  const shadowIntensity = isActive ? 'shadow-2xl shadow-black/20 dark:shadow-black/40' : 
                         index === 1 ? 'shadow-xl shadow-black/15 dark:shadow-black/30' :
                         'shadow-lg shadow-black/10 dark:shadow-black/20';
  const blurEffect = isActive ? '' : index > 2 ? 'backdrop-blur-sm' : '';

  // Generate enhanced schema.org JSON-LD
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType || 'WebPage',
      name: title,
      url: url,
      description: description,
      dateModified: lastUpdated,
      keywords: seoKeywords?.join(', '),
      isAccessibleForFree: true
    };

    if (schemaType === 'Product' && productDetails) {
      return {
        ...baseSchema,
        '@type': 'Product',
        brand: {
          '@type': 'Brand',
          name: productDetails.brand
        },
        category: productDetails.category,
        offers: {
          '@type': 'Offer',
          price: productDetails.offers.price,
          priceCurrency: productDetails.offers.priceCurrency,
          priceValidUntil: productDetails.offers.priceValidUntil,
          availability: `https://schema.org/${productDetails.offers.availability}`,
          url: productDetails.offers.url,
          seller: {
            '@type': 'Organization',
            name: productDetails.offers.seller.name,
            url: productDetails.offers.seller.url
          },
          ...(couponCode && {
            discountCode: couponCode,
            discount: {
              '@type': 'MonetaryAmount',
              currency: productDetails.offers.priceCurrency,
              value: (productDetails.offers.price * (discountPercentage || 0) / 100).toFixed(2)
            }
          })
        }
      };
    }

    return baseSchema;
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
      />
      
      <div
        ref={cardRef}
        className="absolute inset-0 cursor-pointer"
        style={{
          transform: `
            translateY(${stackOffset}px) 
            rotate(${rotation}deg) 
            scale(${scale})
          `,
          zIndex: zIndex,
          opacity: opacity,
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          onActivate();
        }}
        onMouseLeave={() => setIsHovered(false)}
        data-analytics-id={analyticsId}
        aria-label={`Visit ${title}${description ? ` - ${description}` : ''}`}
      >
        <div className={`
          relative h-full w-full rounded-2xl border backdrop-blur-md transition-all duration-500 ${shadowIntensity} ${blurEffect}
          ${isActive 
            ? 'bg-white/90 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-700' 
            : 'bg-white/70 dark:bg-neutral-800/70 border-neutral-300/50 dark:border-neutral-600/50'
          }
          ${isHovered && isActive ? 'shadow-3xl shadow-black/25 dark:shadow-black/50 scale-[1.02]' : ''}
        `}>
          
          {/* Priority indicator */}
          {priority === 1 && isActive && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-neutral-900 shadow-lg" />
          )}
          
          {/* Gradient overlay for depth */}
          <div className={`
            absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300
            ${isActive && isHovered ? 'opacity-10' : ''}
            ${category === 'social' ? 'from-blue-500/20 to-purple-500/20' : ''}
            ${category === 'affiliate' ? 'from-amber-500/20 to-orange-500/20' : ''}
            ${category === 'steam' ? 'from-slate-500/20 to-gray-500/20' : ''}
            ${category === 'config' ? 'from-cyan-500/20 to-teal-500/20' : ''}
            ${!['social', 'affiliate', 'steam', 'config'].includes(category) ? 'from-neutral-500/20 to-gray-500/20' : ''}
          `} />
          
          <div className="relative p-6 h-full flex flex-col">
            {/* Header with icon and title */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                {icon && iconMap[icon] ? (
                  <div className={`
                    w-12 h-12 rounded-xl overflow-hidden border transition-all duration-300
                    ${isActive ? 'border-neutral-200 dark:border-neutral-700 shadow-md' : 'border-neutral-300/50 dark:border-neutral-600/50'}
                  `}>
                    <img 
                      src={iconMap[icon]} 
                      alt={`${title} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                    ${isActive ? 'bg-neutral-100 dark:bg-neutral-800' : 'bg-neutral-100/50 dark:bg-neutral-700/50'}
                  `}>
                    {Object.keys(defaultIcons).find(key => url.includes(key)) 
                      ? defaultIcons[Object.keys(defaultIcons).find(key => url.includes(key))!]
                      : (category && defaultIcons[category] ? defaultIcons[category] : defaultIcons.default)
                    }
                  </div>
                )}
              </div>
              
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className={`
                      font-semibold transition-colors leading-tight
                      ${isActive 
                        ? 'text-neutral-900 dark:text-white text-lg' 
                        : 'text-neutral-700 dark:text-neutral-300 text-base'
                      }
                    `}>
                      {t.linkTitles?.[link.id] || title}
                      {isVerified && (
                        <span className="ml-2 inline-block" title={t.verified}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 inline" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </h3>
                    {description && isActive && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                        {t.linkDescriptions?.[link.id] || (category === 'services' ? t.serviceDescriptions?.[link.id.replace('service-', '').replace('1', 'portfolioDev').replace('2', 'portfolioDesign').replace('3', 'servicesDev').replace('4', 'servicesDesign')] : description)}
                      </p>
                    )}
                  </div>
                  
                  {/* Badges container */}
                  {isActive && (
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {/* Affiliate Badges */}
                      <AffiliateBadge
                        discountPercentage={discountPercentage}
                        isVerified={isVerified}
                        clickCount={clickCount}
                        lastUpdated={lastUpdated}
                        successRate={successRate}
                        isLimitedTime={isLimitedTime}
                        remainingCodes={remainingCodes}
                      />

                      {/* Gamification Badges */}
                      <GamificationBadge
                        streakCount={streakCount}
                        pointsEarned={pointsEarned}
                        nextReward={nextReward}
                        isDealOfTheDay={isDealOfTheDay}
                        rank={rank}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Body content - only show when active */}
            {isActive && (
              <div className="flex-1 flex flex-col justify-end">
                {/* Product rating */}
                {productDetails?.aggregateRating && (
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(productDetails.aggregateRating?.ratingValue || 0)
                              ? 'text-yellow-400'
                              : 'text-neutral-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      ({productDetails.aggregateRating?.reviewCount?.toLocaleString() || '0'})
                    </span>
                  </div>
                )}
                
                {/* Footer with URL and actions */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-neutral-200/50 dark:border-neutral-700/50">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate min-w-0 flex-1">
                    {url.replace(/^https?:\/\//, '')}
                  </p>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    {couponCode && (
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20">
                          <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                            {couponCode}
                          </span>
                        </div>
                        <button
                          onClick={(e) => handleCopyCode(couponCode, e)}
                          className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                          aria-label="Copy code"
                        >
                          {isCopied ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500 dark:text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    )}
                    
                    <div className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                      <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                        Visit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StackLinkCard;