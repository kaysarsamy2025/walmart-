'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSliderSection = () => {
  const logos = [
    
    {
      alt: "Logo 2",
      src: "http://api.fulfillbiz.com/uploads/file-1735135512908-73383681-99a9-45a2-acc4-4c1466b1726e.png"
    },
    {
      alt: "Logo 3",
      src: "http://api.fulfillbiz.com/uploads/file-1735135563905-bac19e76-56ee-4ac9-8398-002c76187200.png"
    },
  
    {
      alt: "Logo 5",
      src: "http://api.fulfillbiz.com/uploads/file-1735135683797-8324b523-ed52-434f-9b7f-c9cfdedc02e8.png"
    },
    {
      alt: "Logo 6",
      src: "http://api.fulfillbiz.com/uploads/file-1735135722073-6dfb5fce-c6e8-45ed-afb7-8a1f404b602d.png"
    },
    {
      alt: "Logo 7",
      src: "http://api.fulfillbiz.com/uploads/file-1735137227201-0414927e-e0e9-4737-a3cb-910fe451bebb.png"
    },
    {
      alt: "Logo 8",
      src: "http://api.fulfillbiz.com/uploads/file-1726259363152-54badb5d-7123-4b9c-921b-e79a36c8de2e.jpeg"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className="shadow-[0_5px_10px_0_rgba(0,0,0,.35)] py-8 px-5 lg:px-0 pt-7 items-center bg-white">
      <div className="h-12 lg:h-16">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="flex justify-center items-center">
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  width={64}
                  height={64}
                  className="lg:w-16 w-12 lg:h-16 h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSliderSection; 