'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoCarousel = () => {
  // Replace with your actual logo image paths or URLs
  const logos = [
     // EasyWay Distribution
    'http://api.fulfillbiz.com/uploads/file-1735135512908-73383681-99a9-45a2-acc4-4c1466b1726e.png', // TikTok
    'http://api.fulfillbiz.com/uploads/file-1735135563905-bac19e76-56ee-4ac9-8398-002c76187200.png', // Amazon
     // Fulfillment
    'http://api.fulfillbiz.com/uploads/file-1735135683797-8324b523-ed52-434f-9b7f-c9cfdedc02e8.png', // Walmart
    // Software Development
    'http://api.fulfillbiz.com/uploads/file-1735137227201-0414927e-e0e9-4737-a3cb-910fe451bebb.png', // Facebook
    'http://api.fulfillbiz.com/uploads/file-1726259363152-54badb5d-7123-4b9c-921b-e79a36c8de2e.jpeg', // Instagram
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6, // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000, // Animation speed
    autoplaySpeed: 2000, // Delay between slides
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="shadow-[0_5px_10px_0_rgba(0,0,0,.35)] py-8 px-5 lg:px-0 pt-7 items-center bg-white">
      <div className="h-12 lg:h-16">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
               {/* Using a simple div for now, you might want to use Link if logos are clickable */}
               {/* Using next/image with unoptimized prop for external URLs */}
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={64} // Adjust based on lg:w-16
                height={64} // Adjust based on lg:h-16
                className="lg:w-16 w-12 lg:h-16 h-12"
                unoptimized={true} // Required for external URLs
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel; 