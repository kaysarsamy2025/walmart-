'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const images = [
    '/placeholder1.jpg',
    '/placeholder2.jpg',
    '/placeholder3.jpg',
  ];

  // Text content for each image
  const heroText = [
    {
      title: 'WELCOME TO RT DESTINATION',
      subtitle: 'Powering E-commerce Through Automation',
    },
    {
      title: 'RT Destination - Revolutionize Your Walmart Business',
      subtitle: 'Automate, Optimize, and Grow with Tailored Walmart Automation Solutions',
    },
    {
      title: 'STAY UPDATED-YOUR PARTNER IN ECOMMERCE AUTOMATION',
      subtitle: 'Maximize your Walmart investment by leveraging our expertise, infrastructure, and distribution relationships.',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image and text every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const currentText = heroText[currentImageIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Hero Image ${index + 1}`}
          fill // Fill the container
          style={{ objectFit: 'cover' }} // Cover the container without distorting aspect ratio
          className={`transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          priority={index === 0} // Prioritize loading the first image
        />
      ))}
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20 text-white text-center p-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-1000 ease-in-out">{currentText.title}</h1>
          <p className="text-xl md:text-2xl transition-opacity duration-1000 ease-in-out">{currentText.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 