/**
 * Represents the data structure for a single link or affiliate code.
 */
export interface LinkData {
  id: string;
  title: string;
  url: string;
  couponCode?: string; // For affiliate codes
  description?: string; // Short description if needed
  icon?: string; // Identifier for an icon (e.g., 'twitch', 'discord')
  clickCount?: number; // Static placeholder for clicks
  category?: 'social' | 'affiliate' | 'config' | 'steam' | 'partner'; // Categorization
  priority?: number; // For sorting links by importance (1-10)
  lastUpdated?: string; // Last update timestamp
  seoKeywords?: string[]; // Keywords for SEO optimization
  isVerified?: boolean; // Whether the link is verified
  analyticsId?: string; // Unique identifier for analytics tracking
  schemaType?: 'SocialMediaPosting' | 'Product' | 'WebPage' | 'Organization'; // Schema.org type for rich snippets
  discountPercentage?: number; // Discount percentage for affiliate codes
  productDetails?: {
    brand: string;
    category: string;
    price: string;
    priceCurrency: string;
    availability: string;
    aggregateRating?: {
      ratingValue: number;
      reviewCount: number;
    };
    offers: {
      price: string;
      priceCurrency: string;
      priceValidUntil?: string;
      availability: string;
      url: string;
      seller: {
        name: string;
        url: string;
      };
    };
  };
} 