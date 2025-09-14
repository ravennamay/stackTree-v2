import React from "react";

const FAQ: React.FC = () => {
import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const faqs = [
    {
      question: "Who am I?",
      answer:
        "Hey, I'm Ratte. I love gaming and creating content about it. I also try to help people find good deals on gaming gear and peripherals.",
      icon: "👤",
      category: "personal"
    },
    {
      question: "What can you find on my website?",
      answer:
        "My website has links to my social media, some codes for discounts on gaming gear, and a list of my favorite gaming peripherals. I tried to make it easy to navigate.",
      icon: "🌐",
      category: "website"
    },
    {
      question: "How can I support you?",
      answer:
        "If you want to support me, you can use my affiliate links or codes when buying gaming gear. It helps me out and you might get a discount too.",
      icon: "💝",
      category: "support"
    },
    {
      question: "Where can I connect with you?",
      answer:
        "I'm on Twitch, YouTube, TikTok, and a few other places. Feel free to check out my social links and say hi. I love talking to other gamers.",
      icon: "🔗",
      category: "social"
    },
    {
      question: "What gaming gear do you recommend?",
      answer:
        "I've put together a list of gaming peripherals and gear that I really like and use myself. Take a look if you're interested.",
      icon: "🎮",
      category: "gear"
    },
    {
      question: "How do I use your discount codes?",
      answer:
        'Just use the code "ratte" when you\'re checking out at stores like Gamerbulk, Acezone, or SkinVault to get a discount.',
      icon: "💰",
      category: "codes"
    },
    {
      question: "Can I contact you directly?",
      answer:
        "Yeah, you can email me at ratte@seweraim.com. I'll try to get back to you as soon as I can, but it might take a bit if I'm busy.",
      icon: "📧",
      category: "contact"
    },
  ];

  const handleFaqClick = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Digital Book Container */}
      <div className="relative perspective-1000">
        {/* HUD Frame */}
        <div className="relative bg-gradient-to-br from-slate-900/10 via-neutral-900/5 to-black/10 dark:from-slate-800/20 dark:via-neutral-800/10 dark:to-black/20 
                        rounded-3xl border border-blue-500/20 dark:border-cyan-400/20 backdrop-blur-xl shadow-2xl">
          
          {/* Holographic corners */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-blue-500/50 dark:border-cyan-400/50 rounded-tl-lg animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-blue-500/50 dark:border-cyan-400/50 rounded-tr-lg animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-blue-500/50 dark:border-cyan-400/50 rounded-bl-lg animate-pulse"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-blue-500/50 dark:border-cyan-400/50 rounded-br-lg animate-pulse"></div>
          
          {/* Scanning line animation */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 dark:via-cyan-400/50 to-transparent 
                          animate-pulse transform translate-y-0 animate-bounce"></div>
          </div>
          
          {/* Header */}
          <div className="p-8 pb-4 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                          bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 
                          dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10
                          border border-blue-500/20 dark:border-cyan-400/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse"></div>
              <span className="text-lg font-mono font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Digital Knowledge Base
              </span>
              <div className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse"></div>
            </div>
          </div>
          
          {/* FAQ Cards Stack */}
          <div className="p-6 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transform transition-all duration-500 hover:scale-[1.02] 
                          ${openFaq === index ? 'scale-[1.01] z-20' : 'hover:z-10'}
                          ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
                onClick={() => handleFaqClick(index)}
                style={{
                  transform: openFaq === index ? 'translateZ(20px)' : `translateZ(${index * 2}px)`,
                  zIndex: openFaq === index ? 50 : 10 - index
                }}
              >
                {/* Card */}
                <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-lg transition-all duration-500
                              ${openFaq === index 
                                ? 'bg-white/20 dark:bg-slate-800/40 border-blue-500/40 shadow-2xl shadow-blue-500/20' 
                                : 'bg-white/10 dark:bg-slate-900/20 border-white/20 dark:border-slate-700/30 hover:border-blue-500/30 hover:bg-white/15 dark:hover:bg-slate-800/30'
                              }`}>
                  
                  {/* Holographic effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500
                                 ${openFaq === index ? 'opacity-10' : 'hover:opacity-5'}
                                 ${faq.category === 'personal' ? 'from-blue-500/20 to-purple-500/20' : ''}
                                 ${faq.category === 'website' ? 'from-green-500/20 to-teal-500/20' : ''}
                                 ${faq.category === 'support' ? 'from-pink-500/20 to-rose-500/20' : ''}
                                 ${faq.category === 'social' ? 'from-indigo-500/20 to-blue-500/20' : ''}
                                 ${faq.category === 'gear' ? 'from-orange-500/20 to-red-500/20' : ''}
                                 ${faq.category === 'codes' ? 'from-yellow-500/20 to-amber-500/20' : ''}
                                 ${faq.category === 'contact' ? 'from-cyan-500/20 to-blue-500/20' : ''}`}></div>
                  
                  {/* Content */}
                  <div className="relative p-6">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                                     transition-all duration-300 ${openFaq === index 
                                       ? 'bg-blue-500/20 dark:bg-cyan-400/20 scale-110' 
                                       : 'bg-white/10 dark:bg-slate-800/20 hover:bg-white/20 dark:hover:bg-slate-700/30'}`}>
                        {faq.icon}
                      </div>
                      
                      {/* Question */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold transition-all duration-300 ${openFaq === index 
                                        ? 'text-blue-600 dark:text-cyan-400 text-lg' 
                                        : 'text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400'}`}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      {/* Arrow */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                                     ${openFaq === index 
                                       ? 'bg-blue-500/20 dark:bg-cyan-400/20 rotate-180' 
                                       : 'bg-white/10 dark:bg-slate-800/20 hover:bg-white/20 dark:hover:bg-slate-700/30'}`}>
                        <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Answer */}
                    <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-6 mt-4 border-t border-white/10 dark:border-slate-700/30">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                        
                        {/* Verification badge */}
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full 
                                      bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified Information
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Loading animation when active */}
                  {openFaq === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-400 to-transparent opacity-50"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer status */}
          <div className="p-6 pt-2 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Knowledge base active • {faqs.length} entries loaded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
};

export default FAQ;
