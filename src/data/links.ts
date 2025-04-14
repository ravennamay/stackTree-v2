import { LinkData } from '../types';

/**
 * Array containing all the links and affiliate codes for the website.
 * Enhanced with SEO metadata and analytics tracking.
 */
export const allLinks: LinkData[] = [
  // Social Media
  { 
    id: '1', 
    title: 'Twitch', 
    url: 'https://twitch.tv/rattecs', 
    icon: 'twitch', 
    category: 'social', 
    clickCount: 1582,
    priority: 10,
    lastUpdated: '2024-04-14',
    seoKeywords: ['twitch', 'streaming', 'cs2', 'gaming', 'rattecs'],
    isVerified: true,
    analyticsId: 'twitch-rattecs',
    schemaType: 'SocialMediaPosting'
  },
  { 
    id: '2', 
    title: 'Discord', 
    url: 'https://discord.gg/gc2epPGDKP', 
    icon: 'discord', 
    category: 'social', 
    description: 'Join the community',
    clickCount: 2100,
    priority: 10,
    lastUpdated: '2024-04-15',
    seoKeywords: ['discord', 'community', 'cs2', 'gaming'],
    isVerified: true,
    analyticsId: 'discord-rattecs',
    schemaType: 'Organization'
  },
  { 
    id: '3', 
    title: 'YouTube', 
    url: 'https://www.youtube.com/@rattecs', 
    icon: 'youtube', 
    category: 'social', 
    description: 'CS2 gameplay, tutorials, and gaming content',
    clickCount: 934,
    priority: 9,
    lastUpdated: '2024-04-14',
    seoKeywords: ['youtube', 'cs2', 'gaming', 'tutorials', 'gameplay', 'streaming', 'esports', 'counter-strike'],
    isVerified: true,
    analyticsId: 'youtube-rattecs',
    schemaType: 'SocialMediaPosting'
  },
  { 
    id: '4', 
    title: 'TikTok', 
    url: 'https://www.tiktok.com/@rattecs', 
    icon: 'tiktok', 
    category: 'social', 
    description: 'Short-form gaming clips and highlights',
    clickCount: 621,
    priority: 8,
    lastUpdated: '2024-04-14',
    seoKeywords: ['tiktok', 'cs2', 'gaming', 'shorts', 'highlights', 'clips', 'gaming content', 'esports'],
    isVerified: true,
    analyticsId: 'tiktok-rattecs',
    schemaType: 'SocialMediaPosting'
  },
  { 
    id: '5', 
    title: 'X (Twitter)', 
    url: 'https://x.com/rattecs', 
    icon: 'x', 
    category: 'social', 
    clickCount: 450,
    priority: 8,
    lastUpdated: '2024-04-14',
    seoKeywords: ['twitter', 'x', 'cs2', 'gaming'],
    isVerified: true,
    analyticsId: 'x-rattecs',
    schemaType: 'SocialMediaPosting'
  },
  
  // Community & Trading
  { 
    id: '7', 
    title: 'Steam', 
    url: 'https://steamcommunity.com/id/RatteCS/', 
    icon: 'steam', 
    category: 'steam', 
    clickCount: 1105,
    priority: 9,
    lastUpdated: '2024-04-14',
    seoKeywords: ['steam', 'cs2', 'gaming', 'profile'],
    isVerified: true,
    analyticsId: 'steam-rattecs',
    schemaType: 'WebPage'
  },
  { 
    id: '8', 
    title: 'Trade Link', 
    url: 'https://steamcommunity.com/tradeoffer/new/?partner=183825474&token=SxfLr9o0', 
    icon: 'trade', 
    category: 'steam', 
    description: 'Send trade offers here',
    clickCount: 450,
    priority: 7,
    lastUpdated: '2024-04-15',
    seoKeywords: ['trade', 'cs2', 'skins', 'trading'],
    isVerified: true,
    analyticsId: 'steam-trade-rattecs',
    schemaType: 'WebPage'
  },

  // Config & Settings
  { 
    id: '11', 
    title: 'Settings', 
    url: 'https://settings.gg/rattecs', 
    icon: 'settings', 
    category: 'config', 
    description: 'View my CS2 settings',
    clickCount: 850,
    priority: 6,
    lastUpdated: '2024-04-15',
    seoKeywords: ['cs2', 'settings', 'config', 'gaming', 'crosshair'],
    isVerified: true,
    analyticsId: 'settings-rattecs',
    schemaType: 'WebPage'
  },
  { 
    id: '12', 
    title: 'Peripherals', 
    url: 'https://gearz.gg/rattecs', 
    icon: 'peripherals', 
    category: 'config', 
    description: 'My gaming setup & gear',
    clickCount: 620,
    priority: 6,
    lastUpdated: '2024-04-15',
    seoKeywords: ['gaming', 'peripherals', 'gear', 'setup', 'mouse', 'keyboard'],
    isVerified: true,
    analyticsId: 'gearz-rattecs',
    schemaType: 'Product'
  },

  // Partners & Affiliates
  { 
    id: '13', 
    title: 'Eliteklan', 
    url: 'https://eliteklan.gg/', 
    icon: 'eliteklan', 
    category: 'affiliate', 
    description: 'CS2 community platform. Use code "ratte" for 15% off your subscription.',
    couponCode: 'ratte',
    discountPercentage: 15,
    priority: 8,
    lastUpdated: '2024-04-14',
    seoKeywords: ['eliteklan', 'cs2', 'community', 'gaming', 'discount code', 'subscription'],
    isVerified: true,
    analyticsId: 'eliteklan-rattecs',
    schemaType: 'Organization',
    productDetails: {
      brand: 'Eliteklan',
      category: 'Gaming Community Platform',
      price: 'Varies',
      priceCurrency: 'USD',
      availability: 'InStock',
      aggregateRating: {
        ratingValue: 4.6,
        reviewCount: 950
      },
      offers: {
        price: 'Varies',
        priceCurrency: 'USD',
        priceValidUntil: '2024-12-31',
        availability: 'InStock',
        url: 'https://eliteklan.gg/',
        seller: {
          name: 'Eliteklan',
          url: 'https://eliteklan.gg'
        }
      }
    }
  },
  { 
    id: '14', 
    title: 'Gamerbulk', 
    url: 'https://gamerbulk.com/ref/rattecs', 
    icon: 'gamerbulk', 
    category: 'affiliate', 
    description: 'Premium gaming supplements and energy drinks. Use code "ratte" for 10% off your order.',
    couponCode: 'ratte',
    discountPercentage: 10,
    clickCount: 1250,
    priority: 10,
    lastUpdated: '2024-04-15',
    seoKeywords: ['gamerbulk', 'energy drinks', 'gaming supplements', 'discount code', 'gaming nutrition'],
    isVerified: true,
    analyticsId: 'gamerbulk-rattecs',
    schemaType: 'Product',
    productDetails: {
      brand: 'Gamerbulk',
      category: 'Gaming Supplements',
      price: 'Varies',
      priceCurrency: 'USD',
      availability: 'InStock',
      aggregateRating: {
        ratingValue: 4.8,
        reviewCount: 1200
      },
      offers: {
        price: 'Varies',
        priceCurrency: 'USD',
        priceValidUntil: '2024-12-31',
        availability: 'InStock',
        url: 'https://gamerbulk.com/ref/rattecs',
        seller: {
          name: 'Gamerbulk',
          url: 'https://gamerbulk.com'
        }
      }
    }
  },
  { 
    id: '15', 
    title: 'AceZone', 
    url: 'https://acezone.io/', 
    couponCode: 'ratte', 
    icon: 'acezone', 
    category: 'affiliate', 
    description: 'Premium gaming headsets with noise cancellation. Use code "ratte" for 15% off.',
    discountPercentage: 15,
    clickCount: 256,
    priority: 8,
    lastUpdated: '2024-04-14',
    seoKeywords: ['acezone', 'headsets', 'gaming', 'discount', 'audio', 'gaming peripherals'],
    isVerified: true,
    analyticsId: 'acezone-ratte',
    schemaType: 'Product',
    productDetails: {
      brand: 'AceZone',
      category: 'Gaming Headsets',
      price: 'Varies',
      priceCurrency: 'USD',
      availability: 'InStock',
      aggregateRating: {
        ratingValue: 4.7,
        reviewCount: 850
      },
      offers: {
        price: 'Varies',
        priceCurrency: 'USD',
        priceValidUntil: '2024-12-31',
        availability: 'InStock',
        url: 'https://acezone.io/',
        seller: {
          name: 'AceZone',
          url: 'https://acezone.io'
        }
      }
    }
  },
  { 
    id: '16', 
    title: 'SkinVault', 
    url: 'https://skinvault.gg/?aff=RATTE', 
    icon: 'skinvault', 
    category: 'affiliate', 
    description: 'Secure CS2 skins marketplace with instant delivery. Lowest fees in the market.',
    clickCount: 890,
    priority: 9,
    lastUpdated: '2024-04-15',
    seoKeywords: ['cs2', 'skins', 'marketplace', 'trading', 'counter-strike', 'gaming items'],
    isVerified: true,
    analyticsId: 'skinvault-rattecs',
    schemaType: 'Product',
    productDetails: {
      brand: 'SkinVault',
      category: 'CS2 Skins Marketplace',
      price: 'Varies',
      priceCurrency: 'USD',
      availability: 'InStock',
      aggregateRating: {
        ratingValue: 4.9,
        reviewCount: 2500
      },
      offers: {
        price: 'Varies',
        priceCurrency: 'USD',
        availability: 'InStock',
        url: 'https://skinvault.gg/?aff=RATTE',
        seller: {
          name: 'SkinVault',
          url: 'https://skinvault.gg'
        }
      }
    }
  },
  {
    id: '17',
    title: 'CSFloat',
    url: 'https://csfloat.com/ref/rattecs',
    icon: 'csfloat',
    category: 'affiliate',
    description: 'CS2 Skins Trading',
    clickCount: 750,
    priority: 8,
    lastUpdated: '2024-04-15',
    seoKeywords: ['cs2', 'skins', 'trading', 'marketplace'],
    isVerified: true,
    analyticsId: 'csfloat-rattecs',
    schemaType: 'Product'
  },
  {
    id: '18',
    title: 'Skinport',
    url: 'https://skinport.com/r/rattecs',
    icon: 'skinport',
    category: 'affiliate',
    description: 'CS2 Skins Marketplace',
    clickCount: 680,
    priority: 8,
    lastUpdated: '2024-04-15',
    seoKeywords: ['cs2', 'skins', 'marketplace', 'trading'],
    isVerified: true,
    analyticsId: 'skinport-rattecs',
    schemaType: 'Product'
  }
]; 