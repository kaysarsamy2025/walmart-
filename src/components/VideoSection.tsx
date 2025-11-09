'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/r1IPUN66lp8?si=JK5bf1Qkv8GLgjvH&rel=0&autoplay=1&mute=1&loop=1&playlist=r1IPUN66lp8',
      title: 'Video 1'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/r1IPUN66lp8?si=JK5bf1Qkv8GLgjvH&rel=0&autoplay=1&mute=1&loop=1&playlist=r1IPUN66lp8',
      title: 'Video 2'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/r1IPUN66lp8?si=JK5bf1Qkv8GLgjvH&rel=0&autoplay=1&mute=1&loop=1&playlist=r1IPUN66lp8',
      title: 'Video 3'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/r1IPUN66lp8?si=JK5bf1Qkv8GLgjvH&rel=0&autoplay=1&mute=1&loop=1&playlist=r1IPUN66lp8',
      title: 'Video 4'
    }
  ];

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="max-w-80 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl pb-12">
        <div className="relative justify-center flex-1 max-w-7xl px-4 mx-auto lg:py-4 md:px-6">
          <div className="mb-10 text-center pt-8">
            <h1 className="text-3xl font-bold capitalize text-gray-800">Our Latest Videos</h1>
          </div>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:w-full mb-32 lg:mb-0 border border-gray-200">
                <div className="w-full h-full flex justify-center items-center">
                  <iframe
                    width="500"
                    height="330"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoSection; 