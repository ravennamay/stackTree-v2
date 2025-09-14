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

        {/* Content Area */}
        {selectedCategory === "all" ? (
          /* About Section */
          <div className="mb-8">
            <div className="relative bg-gradient-to-br from-slate-900/10 via-neutral-900/5 to-black/10 dark:from-slate-800/20 dark:via-neutral-800/10 dark:to-black/20 
                          rounded-3xl border border-blue-500/20 dark:border-cyan-400/20 backdrop-blur-xl shadow-2xl p-8">
              
              {/* Holographic corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-blue-500/50 dark:border-cyan-400/50 rounded-tl-lg animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-blue-500/50 dark:border-cyan-400/50 rounded-tr-lg animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-blue-500/50 dark:border-cyan-400/50 rounded-bl-lg animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-blue-500/50 dark:border-cyan-400/50 rounded-br-lg animate-pulse"></div>
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                              bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 
                              dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10
                              border border-blue-500/20 dark:border-cyan-400/20 backdrop-blur-sm mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse"></div>
                  <span className="text-lg font-mono font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                  <div className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse"></div>
                </div>
              </div>
              
              {/* About Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Who I Am */}
                <div className="relative bg-white/10 dark:bg-slate-900/20 rounded-2xl border border-white/20 dark:border-slate-700/30 p-6 backdrop-blur-lg hover:bg-white/15 dark:hover:bg-slate-800/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 dark:bg-cyan-400/20 flex items-center justify-center text-2xl">
                      🎮
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Gaming Creator</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Hey! I'm Ratte, a passionate Counter-Strike 2 content creator and gamer. I love sharing gameplay, tips, and connecting with the gaming community.
                  </p>
                </div>
                
                {/* Card 2: What I Do */}
                <div className="relative bg-white/10 dark:bg-slate-900/20 rounded-2xl border border-white/20 dark:border-slate-700/30 p-6 backdrop-blur-lg hover:bg-white/15 dark:hover:bg-slate-800/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 dark:bg-purple-400/20 flex items-center justify-center text-2xl">
                      📺
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Content & Streams</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Creating CS2 content across multiple platforms - from live streams on Twitch to gameplay videos on YouTube and quick clips on TikTok.
                  </p>
                </div>
                
                {/* Card 3: Community */}
                <div className="relative bg-white/10 dark:bg-slate-900/20 rounded-2xl border border-white/20 dark:border-slate-700/30 p-6 backdrop-blur-lg hover:bg-white/15 dark:hover:bg-slate-800/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 dark:bg-green-400/20 flex items-center justify-center text-2xl">
                      👥
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Community Focus</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Building a supportive gaming community where players can connect, learn, and have fun together. Join our Discord to be part of it!
                  </p>
                </div>
                
                {/* Card 4: Deals & Gear */}
                <div className="relative bg-white/10 dark:bg-slate-900/20 rounded-2xl border border-white/20 dark:border-slate-700/30 p-6 backdrop-blur-lg hover:bg-white/15 dark:hover:bg-slate-800/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 dark:bg-amber-400/20 flex items-center justify-center text-2xl">
                      💰
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Gaming Deals</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Sharing the best deals on gaming gear, peripherals, and CS2 skins. Use code "ratte" for exclusive discounts at partner stores!
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 dark:bg-slate-800/20 rounded-xl border border-white/10 dark:border-slate-700/20">
                  <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">5+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Platforms</div>
                </div>
                <div className="text-center p-4 bg-white/5 dark:bg-slate-800/20 rounded-xl border border-white/10 dark:border-slate-700/20">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Active</div>
                </div>
                <div className="text-center p-4 bg-white/5 dark:bg-slate-800/20 rounded-xl border border-white/10 dark:border-slate-700/20">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">CS2</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Main Game</div>
                </div>
              </div>
              
              {/* Contact CTA */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-cyan-400/20 text-blue-600 dark:text-cyan-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-medium">ratte@seweraim.com</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Links List */
          <div className="mb-8">
            <LinkListVertical links={filteredLinks} />
          </div>
        )}

        {/* Category stats - only show when not in About mode */}
        {selectedCategory !== "all" && (
          <div className="text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''} 
              {selectedCategory !== "all" && (
                <span> in {t[selectedCategory as keyof typeof t] || selectedCategory}</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StackLinkList;