'use client';

import React from 'react';
import FooterSection from '@/components/FooterSection';
import Hero from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';
import CtaSection from '@/components/CtaSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <LogoCarousel />
      <CtaSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      
      {/* Business Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#d77a2a] font-semibold block mb-2">Business Plans</span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Company Business <span className="text-[#d77a2a]">Plans!</span></h2>
            <div className="w-24 h-1 bg-[#d77a2a] mx-auto mb-8"></div>
            <p className="text-gray-600">
              These four steps will seamlessly guide you through the process, from planning to execution, ensuring your business reaches its full potential.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-gray-300 w-full top-1/2"></div>

              {/* Timeline Items */}
              <div className="relative z-10 flex justify-between">
                {/* Step 1 */}
                <div className="w-1/4 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transform hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-[#d77a2a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Book a Consultation</h3>
                    <p className="text-gray-600">Schedule a call with our team to discuss your business needs and goals.</p>
                  </div>
                  <div className="w-4 h-4 bg-[#d77a2a] rounded-full mx-auto"></div>
                  <p className="text-gray-600 mt-2">Step-1</p>
                </div>

                {/* Step 2 */}
                <div className="w-1/4 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transform hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-[#d77a2a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Customized Strategy</h3>
                    <p className="text-gray-600">We create a tailored action plan based on your specific requirements and objectives.</p>
                  </div>
                  <div className="w-4 h-4 bg-[#d77a2a] rounded-full mx-auto"></div>
                  <p className="text-gray-600 mt-2">Step-2</p>
                </div>

                {/* Step 3 */}
                <div className="w-1/4 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transform hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-[#d77a2a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Service Implementation</h3>
                    <p className="text-gray-600">Our expert team gets to work, delivering top-notch services from listing optimization to branding.</p>
                  </div>
                  <div className="w-4 h-4 bg-[#d77a2a] rounded-full mx-auto"></div>
                  <p className="text-gray-600 mt-2">Step-3</p>
                </div>

                {/* Step 4 */}
                <div className="w-1/4 text-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transform hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-[#d77a2a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous monitoring and support to ensure your business grows and thrives.</p>
                  </div>
                  <div className="w-4 h-4 bg-[#d77a2a] rounded-full mx-auto"></div>
                  <p className="text-gray-600 mt-2">Step-4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}
