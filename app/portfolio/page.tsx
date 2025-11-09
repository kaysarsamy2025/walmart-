'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    'https://i.postimg.cc/gjSWBxHb/Whats-App-Image-2025-05-29-at-10-51-48-AM.jpg',
    'https://i.postimg.cc/qqMrLsnG/Whats-App-Image-2025-05-29-at-10-51-48-AM-1.jpg',
    'https://i.postimg.cc/Pf2Tq7sV/Whats-App-Image-2025-05-29-at-10-51-49-AM.jpg',
    'https://i.postimg.cc/NMtByqjS/Whats-App-Image-2025-05-29-at-10-51-49-AM-1.jpg',
    'https://i.postimg.cc/mgcbJynX/Whats-App-Image-2025-05-29-at-10-51-49-AM-2.jpg',
    'https://i.postimg.cc/G3Qhy2YQ/Whats-App-Image-2025-05-29-at-10-51-50-AM.jpg',
    'https://i.postimg.cc/br3ycC8M/Whats-App-Image-2025-05-29-at-10-51-50-AM-1.jpg',
    'https://i.postimg.cc/RZjMBn5M/Whats-App-Image-2025-05-29-at-10-51-50-AM-2.jpg',
    'https://i.postimg.cc/brzy5cXk/Whats-App-Image-2025-05-29-at-10-51-51-AM.jpg',
    'https://i.postimg.cc/XYhvYzF6/Whats-App-Image-2025-05-29-at-10-51-51-AM-1.jpg'
  ];

  return (
    <div className="min-h-screen font-poppins bg-white">
      {/* Portfolio Section */}
      <section className="py-16 font-poppins bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#d77a2a] font-semibold block mb-2">OUR PROJECTS</span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Let&apos;s Discover All Our
              <br />
              Clients Recent Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="project__item-two group">
                <div 
                  className="project__thumb-two relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt="Project Image"
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="project__content-two bg-white p-4">
                  <h2 className="title font-bold text-gray-800">
                    <a href="#" className="hover:text-[#d77a2a] transition-colors">VISIT</a>
                  </h2>
                  <div className="link-arrow mt-2">
                    <a href="#" className="text-[#d77a2a] hover:text-gray-800 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" fill="none" className="w-6 h-6">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6293 3.27956C17.7117 2.80339 17.4427 2.34761 17.0096 2.17811C16.9477 2.15384 16.8824 2.13551 16.8144 2.12375L6.96087 0.419136C6.4166 0.325033 5.89918 0.689841 5.80497 1.23409C5.71085 1.77828 6.0757 2.29576 6.61988 2.38991L14.0947 3.68293L1.3658 12.6573C0.914426 12.9756 0.806485 13.5994 1.12473 14.0508C1.44298 14.5022 2.06688 14.6101 2.51825 14.2919L15.2471 5.31752L13.954 12.7923C13.8599 13.3365 14.2248 13.854 14.7689 13.9481C15.3132 14.0422 15.8306 13.6774 15.9248 13.1332L17.6293 3.27956Z" fill="currentColor"/>
                      </svg>
                    </a>
            </div>
          </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[#d77a2a]"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Project Image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default PortfolioPage;