import React from 'react';
import {
  FaTwitch,
  FaDiscord,
  FaYoutube,
  FaTiktok,
  FaSteam,
  FaLink,
  FaGear,     // Use FaGear for Settings
  FaKeyboard, // Peripherals
  FaTag,      // Coupon/Affiliate
  FaUsers,    // Community/Partner
  FaCartShopping, // Use FaCartShopping
  FaKickstarterK, // KICK
  FaXTwitter // X
} from 'react-icons/fa6'; // Using Font Awesome 6 icons

interface LinkIconProps {
  iconIdentifier?: string; // The icon key from LinkData
  className?: string;      // Optional className for styling
}

/**
 * Renders an appropriate icon based on the identifier string.
 * Uses the project color scheme.
 */
const LinkIcon: React.FC<LinkIconProps> = ({ iconIdentifier, className = 'w-4 h-4' }) => {
  // Default icon classes to ensure consistent colors
  const iconClass = `${className} text-primary dark:text-glow`;
  
  switch (iconIdentifier?.toLowerCase()) {
    case 'twitch':
      return <FaTwitch className={iconClass} aria-hidden="true" />;
    case 'discord':
      return <FaDiscord className={iconClass} aria-hidden="true" />;
    case 'youtube':
      return <FaYoutube className={`${iconClass} text-[#FF0000]`} aria-hidden="true" />;
    case 'tiktok':
      return <FaTiktok className={`${iconClass} text-[#000000] dark:text-[#FFFFFF]`} aria-hidden="true" />;
    case 'x':
    case 'twitter':
      return <FaXTwitter className={iconClass} aria-hidden="true" />;
    case 'kick':
      return <FaKickstarterK className={iconClass} aria-hidden="true" />;
    case 'steam':
      return <FaSteam className={iconClass} aria-hidden="true" />;
    case 'trade':
      return <FaLink className={iconClass} aria-hidden="true" />; // Generic link/trade
    case 'csfloat':
    case 'skinport':
    case 'skinvault':
    case 'merch':
      return <FaCartShopping className={iconClass} aria-hidden="true" />; // Use FaCartShopping
    case 'settings':
      return <FaGear className={iconClass} aria-hidden="true" />; // Use FaGear
    case 'peripherals':
      return <FaKeyboard className={iconClass} aria-hidden="true" />;
    case 'eliteklan':
      return <FaUsers className={iconClass} aria-hidden="true" />; // Community/group icon
    case 'gamerbulk':
    case 'acezone':
      return <FaTag className={iconClass} aria-hidden="true" />; // Tag for affiliate/coupon
    // Add more cases as needed
    default:
      // Fallback icon if no match
      return <FaLink className={iconClass} aria-hidden="true" />;
  }
};

export default LinkIcon; 