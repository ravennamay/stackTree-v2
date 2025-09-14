import React, { useState, useEffect, useMemo } from "react";
import LinkListVertical from "./LinkListVertical";
import { LinkData } from "../types";
import { allLinks } from "../data/links";
import pfpImage from "../assets/pfp.png";
import SocialIcons from "./SocialIcons";
import ImportantLinks from "./ImportantLinks";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "../hooks/useTranslation";
import { FaUser, FaCog, FaGamepad, FaQuestionCircle } from "react-icons/fa";

/**
 * Vertical link list with modern category navigation
 */
const StackLinkList: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isMobile, setIsMobile] = useState(false);

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'social':
        return <FaUser className="w-4 h-4" />;
      case 'config':
        return <FaCog className="w-4 h-4" />;
      case 'steam':
        return <FaGamepad className="w-4 h-4" />;
      case 'faq':
        return <FaQuestionCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  // Minimum swipe distance to trigger navigation
  const minSwipeDistance = 50;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Organize and filter links
  const { filteredLinks, categories } = useMemo(() => {
    // Get unique categories, excluding affiliate
    const categorySet = new Set(allLinks.filter(link => link.category !== "affiliate").map(link => link.category));
    const categories = Array.from(categorySet).sort();

    // Filter links based on selected category, excluding affiliate
    let filtered = selectedCategory === "all" 
      ? allLinks.filter(link => link.category !== "affiliate")
      : allLinks.filter(link => link.category === selectedCategory && link.category !== "affiliate");

    // Sort by priority and click count
    filtered = filtered.sort((a, b) => {
      const priorityA = a.priority || 0;
      const priorityB = b.priority || 0;
      if (priorityA !== priorityB) return priorityB - priorityA;
      return (b.clickCount || 0) - (a.clickCount || 0);
    });

    return { filteredLinks: filtered, categories };
  }, [selectedCategory]);

  // Auto-cycle through cards REMOVED - user requested to stop auto-rotation
  // No auto-cycle functionality

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Language Selector */}
        <div className="absolute top-4 right-4 z-50">
          <LanguageSelector />
        </div>
        
        {/* Profile Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-6">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl shadow-black/10 dark:shadow-black/30">
              <img
                src={pfpImage}
                alt="Ratte profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated glow ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl animate-pulse" />
          </div>

          <div className="max-w-sm flex flex-col items-center">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              ratte
            </h1>
            
            {/* Important Links replacing Social Icons */}
            <ImportantLinks />
            
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              {t.profileDescription}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 p-4 bg-white/50 dark:bg-neutral-800/50 rounded-2xl backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg"
                  : "bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              {t.all}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 capitalize ${
                  selectedCategory === category
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg"
                    : "bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                }`}
              >
                {getCategoryIcon(category)}
                <span>{t[category as keyof typeof t] || category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Links List */}
        <div className="mb-8">
          <LinkListVertical links={filteredLinks} />
        </div>

        {/* Category stats */}
        <div className="text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''} 
            {selectedCategory !== "all" && (
              <span> in {t[selectedCategory as keyof typeof t] || selectedCategory}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StackLinkList;