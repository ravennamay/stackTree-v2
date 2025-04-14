export interface LinkData {
  id: string;
  title: string;
  url: string;
  icon?: string;
  description?: string;
  category: 'social' | 'affiliate' | 'config' | 'steam' | 'partner';
  priority?: number;
  clickCount?: number;
  couponCode?: string;
  seoKeywords?: string[];
  schemaType?: string;
  analyticsId?: string;
  isVerified?: boolean;
  lastUpdated?: string;
  discountPercentage?: number;
  productDetails?: {
    brand: string;
    category: string;
    offers: {
      price: number;
      priceCurrency: string;
      priceValidUntil: string;
      availability: string;
      url: string;
      seller: {
        name: string;
        url: string;
      };
    };
    aggregateRating?: {
      ratingValue: number;
      reviewCount: number;
    };
  };
  affiliateCode?: string;
  successRate?: number;
  isLimitedTime?: boolean;
  remainingCodes?: number;
  streakCount?: number;
  pointsEarned?: number;
  nextReward?: string;
  isDealOfTheDay?: boolean;
  rank?: string;
} 