import React, { useState, useEffect, useMemo } from "react";
import StackLinkCard from "./StackLinkCard";
import { LinkData } from "../types";
import { allLinks } from "../data/links";
import pfpImage from "../assets/pfp.png";
import SocialIcons from "./SocialIcons";

/**
 * Stack-based link list with interactive depth effects
 */
const StackLinkList: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isMobile, setIsMobile] = useState(false);

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
    // Get unique categories
    const categorySet = new Set(allLinks.map(link => link.category));
    const categories = Array.from(categorySet).sort();

    // Filter links based on selected category
    let filtered = selectedCategory === "all" 
      ? allLinks 
      : allLinks.filter(link => link.category === selectedCategory);

    // Sort by priority and click count
    filtered = filtered.sort((a, b) => {
      const priorityA = a.priority || 0;
      const priorityB = b.priority || 0;
      if (priorityA !== priorityB) return priorityB - priorityA;
      return (b.clickCount || 0) - (a.clickCount || 0);
    });

    return { filteredLinks: filtered, categories };
  }, [selectedCategory]);

  // Auto-cycle through cards
  useEffect(() => {
    if (filteredLinks.length <= 1) return;

    const interval = setInterval(() => {
      setActiveCardIndex((current) => (current + 1) % filteredLinks.length);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, [filteredLinks.length]);

  // Reset active card when category changes
  useEffect(() => {
    setActiveCardIndex(0);
  }, [selectedCategory]);

  const handleCardActivate = (index: number) => {
    setActiveCardIndex(index);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-black">
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-8">
        
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
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              ratte
            </h1>
            <div className="mb-6">
              <SocialIcons />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              All of my cool links, thank you for your support! :3
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 p-3 bg-white/50 dark:bg-neutral-800/50 rounded-2xl backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg"
                  : "bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 capitalize ${
                  selectedCategory === category
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg"
                    : "bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stack Container */}
        <div className="relative">
          {/* Progress indicator */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-1">
            {filteredLinks.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardActivate(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeCardIndex
                    ? "bg-neutral-900 dark:bg-white w-6"
                    : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          {/* Card Stack */}
          <div className="relative h-80 sm:h-96">
            {filteredLinks.length === 0 ? (
              <div className="flex items-center justify-center h-full text-neutral-500 dark:text-neutral-400">
                <p>No links found in this category</p>
              </div>
            ) : (
              filteredLinks.map((link, index) => (
                <StackLinkCard
                  key={link.id}
                  link={link}
                  index={Math.abs(index - activeCardIndex)}
                  total={filteredLinks.length}
                  isActive={index === activeCardIndex}
                  onActivate={() => handleCardActivate(index)}
                />
              ))
            )}
          </div>

          {/* Navigation arrows - enhanced with better positioning and effects */}
          {filteredLinks.length > 1 && (
            <>
              <button
                onClick={() => setActiveCardIndex((current) => 
                  current === 0 ? filteredLinks.length - 1 : current - 1
                )}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group z-30"
                aria-label="Previous card"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors group-hover:-translate-x-0.5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button
                onClick={() => setActiveCardIndex((current) => 
                  (current + 1) % filteredLinks.length
                )}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group z-30"
                aria-label="Next card"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors group-hover:translate-x-0.5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Category stats */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''} 
            {selectedCategory !== "all" && (
              <span> in {selectedCategory}</span>
            )}
          </p>
        </div>

        {/* Touch indicators for mobile */}
        {isMobile && filteredLinks.length > 1 && (
          <div className="mt-6 text-center">
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              Tap cards to explore • Swipe to navigate
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StackLinkList;