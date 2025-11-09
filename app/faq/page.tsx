'use client';

import React, { useState } from 'react';
import FooterSection from '@/components/FooterSection';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: 'How Your Walmart Business Works',
      answer:
        "Our Walmart business model involves sourcing products, managing inventory, and selling through Walmart's FBA (Fulfillment by Walmart) program. We handle everything from product research to customer service.",
    },

    {
      question: 'How much does it cost to have an Walmart Business account?',
      answer:
        'Creating an Walmart Business account is free. However, there are optional paid features and services that can enhance your business operations.',
    },
    {
      question: 'Are Walmart businesses profitable?',
      answer:
        'Yes, Walmart businesses can be profitable when properly managed. Success depends on product selection, pricing strategy, marketing, and operational efficiency.',
    },
    {
      question: 'Can everyone create Walmart Business account?',
      answer:
        "Yes, anyone can create an Walmart Business account, but you'll need to provide business documentation and meet certain requirements to access all features.",
    },
    {
      question: 'Who is eligible for an Walmart Business account?',
      answer:
        "Businesses of all sizes, from sole proprietors to large corporations, are eligible for an Walmart Business account. You'll need to provide valid business documentation during registration.",
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen font-poppins bg-white">
      <section className="flex items-center bg-white md:py-16 lg:py-24">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
          <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center uppercase text-amber-500">
            Most Questioned
          </span>
          <h2 className="pb-2 text-4xl font-bold text-center text-gray-800 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="w-24 mx-auto border-b border-amber-500 mb-14"></div>

          <div className="max-w-2xl mx-auto mb-12">
            <label htmlFor="faq-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="faq-search"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5 shadow-sm"
                placeholder="Ask a question..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {filteredFAQs.map((item, index) => (
              <div
                key={index}
                className="w-full px-4 cursor-pointer"
                style={{ transition: '0.3s' }}
              >
                <div
                  className="flex flex-col justify-between w-full px-6 py-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">Q. {item.question}</span>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={`w-6 h-6 text-amber-500 transform transition-transform duration-300 ${
                          expandedItems.includes(index) ? 'rotate-45' : ''
                        }`}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                      </svg>
                    </div>
                  </div>
                  {expandedItems.includes(index) && (
                    <div className="mt-4 text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default FAQPage;
