'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySection = () => {
  const galleryItems = [
    {
      title: "",
      subtitle: "",
      image: "https://i.postimg.cc/VYCZVBXj/ez-2-1.jpg"
    },
    {
      title: "",
      subtitle: "",
      image: "https://i.postimg.cc/TPV9Y0cF/Screenshot-2024-03-16-110831.jpg"
    },
    {
      title: "",
      subtitle: "",
      image: "https://i.postimg.cc/50pS8tTm/Screenshot-2024-04-15-010439-1.jpg"
    },
    {
      title: "",
      subtitle: "",
      image: "https://i.postimg.cc/6pGcFt49/Screenshot-3.png"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="flex items-center py-16 bg-white font-poppins">
      <div className="w-full max-w-6xl p-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <div className="w-32 mx-auto border-b border-amber-600"></div>
        </div>

        <div className="px-4">
          <Slider {...settings}>
            {galleryItems.map((item, index) => (
              <div key={index} className="px-2">
                <div className="relative overflow-hidden shadow-lg group border border-amber-600 rounded-lg">
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={500}
                    height={350}
                    className="w-full h-[350px] object-cover object-center transition duration-500 group-hover:scale-105"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-2xl font-semibold text-white mb-2">{item.title}</span>
                    <h2 className="text-sm font-light text-gray-200">{item.subtitle}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 