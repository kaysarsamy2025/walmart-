'use client';

import { useState } from 'react';

export default function ThreePLService() {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlan] = useState('premium');

  const plans = {
    basic: {
      title: 'Basic Plan',
      description: 'Offers essential warehouse services for your business growth.',
      monthlyPrice: 180,
      yearlyPrice: 2110,
      yearlyOriginalPrice: 2160,
      features: {
        monthly: [
          'Inventory Storage (Up to 50 products)',
          'Standard Order Processing',
          'Basic Packaging & Labeling',
          'Monthly Stock Updates',
          'Basic Customer Support',
        ],
        yearly: [
          'Total Yearly Cost (After 2% Discount)',
          'Standard Order Processing',
          'Basic Packaging & Labeling',
          'Monthly Stock Updates',
          'Basic Customer Support',
          'Elite Assistance',
        ]
      }
    },
    advanced: {
      title: 'Advanced Package',
      description: 'Offers essential warehouse services for your business growth',
      monthlyPrice: 255,
      yearlyPrice: 2905,
      yearlyOriginalPrice: 3060,
      features: {
        monthly: [
          'Inventory Storage (Up to 75 products)',
          'Faster Order Processing & Priority Packing',
          'Branded Packaging Options',
          'Real-Time Stock Tracking & Alerts',
          'Returns & Restocking Management',
        ],
        yearly: [
          'Total Yearly Cost (After 5% Discount)',
          'Faster Order Processing & Priority Packing',
          'Branded Packaging Options',
          'Real-Time Stock Tracking & Alerts',
          'Returns & Restocking Management',
          'Dedicated Account Manager',
          'Elite Assistance',
        ]
      }
    },
    premium: {
      title: 'Premium Plan',
      description: 'The Premium Plan offers essential warehouse services for your business growth and safe product damaged',
      monthlyPrice: 329,
      yearlyPrice: 3552,
      yearlyOriginalPrice: 3948,
      features: {
        monthly: [
          'Inventory Storage (Up to 100 products)',
          'Express Order Processing & Fulfillment',
          'Customized Packaging & Branding',
          'Automated Stock Replenishment System',
          'Multi-Platform Order Sync (Amazon, Walmart, TikTok, eBay, Etsy, Shopify)',
          'Elite Assistance',
        ],
        yearly: [
          'Total Yearly Cost (After 10% Discount)',
          'Express Order Processing & Fulfillment',
          'Customized Packaging & Branding',
          'Automated Stock Replenishment System',
          'Multi-Platform Order Sync (Amazon, Walmart, TikTok, eBay, Etsy, Shopify)',
          '24/7 Priority Customer Support',
          'Elite Assistance',
        ]
      }
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h5 className="text-[#d77a2a] font-semibold mb-2">Ecom Solutions Packages</h5>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="inline-block mr-2">📦</span>
            Warehouse & Package Management Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help you navigate challenges and unlock growth potential.
            Trust us to deliver actionable insights and customized strategies for your business success.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-lg shadow-sm inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                !isYearly ? 'bg-[#d77a2a] text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                isYearly ? 'bg-[#d77a2a] text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all ${
                activePlan === key ? 'ring-2 ring-[#d77a2a] scale-105' : ''
              }`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-800">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-600 ml-2">/ {isYearly ? 'year' : 'month'}</span>
                  {isYearly && (
                    <p className="text-sm text-gray-500 mt-1">
                      Instead of ${plan.yearlyOriginalPrice}
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {(isYearly ? plan.features.yearly : plan.features.monthly).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#d77a2a] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const message = `Hi, I'm interested in the ${plan.title} for ${isYearly ? 'yearly' : 'monthly'} subscription.`;
                    const whatsappUrl = `https://wa.me/8801315285027?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    activePlan === key
                      ? 'bg-[#d77a2a] text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get this plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 