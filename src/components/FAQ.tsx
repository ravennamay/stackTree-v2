import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Who am I?',
      answer: 'I\'m Ratte, a passionate gamer and content creator who loves sharing my gaming experiences and helping others get the best deals on gaming gear and peripherals.'
    },
    {
      question: 'What can you find on my website?',
      answer: 'You\'ll find all my social media links, affiliate codes for awesome gaming gear discounts, and my favorite gaming peripherals. Everything is organized to help you easily find what you\'re looking for.'
    },
    {
      question: 'How can I support you?',
      answer: 'The best way to support me is by using my affiliate links and codes when shopping for gaming gear. When you use my codes (like "ratte"), you get great discounts and I get a small commission - it\'s a win-win!'
    },
    {
      question: 'Where can I connect with you?',
      answer: 'You can find me on Twitch, YouTube, TikTok, and other platforms. Just check out my social links! I\'m always happy to chat with fellow gamers.'
    },
    {
      question: 'What gaming gear do you recommend?',
      answer: 'I\'ve curated a selection of my favorite gaming peripherals and gear. Check out my recommendations - I only share products I truly believe in and use myself.'
    },
    {
      question: 'How do I use your discount codes?',
      answer: 'Simply enter my code "ratte" at checkout on supported stores like Gamerbulk, Acezone, and SkinVault. The discount will be applied automatically!'
    },
    {
      question: 'Can I contact you directly?',
      answer: 'Sure! You can reach me at ratte@seweraim.com. I do my best to respond to all messages, though it might take a little time during busy streaming periods.'
    }
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white/5 dark:bg-background rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 p-6">
            <h3 className="text-lg font-medium text-black dark:text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-black/60 dark:text-white/60">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 