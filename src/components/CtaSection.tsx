'use client';

import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section 
      id="cta" 
      className="shadow-[0_5px_10px_0_rgba(0,0,0,.15)] py-32 px-5 lg:px-0 pt-32 items-center bg-white bg-contain bg-left bg-no-repeat"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-center w-full sm:w-2/5 lg:w-3/8 mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold uppercase text-gray-800">
            RT Destination: Fulfilment Begins with Your Success
          </h1>
          <hr className="border-t-[3px] border-amber-600 w-32 mx-auto mb-8 mt-4" />
          <p className="text-center text-sm px-3 sm:px-0 sm:text-base pb-5 text-gray-600">
            Meet Ridwan Tonmoy, the visionary founder of RT Destination. Get an inside look at our journey and discover how we&apos;ve been leading the way in revolutionizing e-commerce strategies. At RT Destination, we&apos;re dedicated to driving exceptional results and long-term success for our clients. Let&apos;s partner to elevate your business to new heights
          </p>
          <p className="mb-8 text-lg text-gray-600">
            Let&apos;s join forces to drive your business forward.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            We&apos;re not just another Amazon FBA agency. We&apos;re your strategic partner in building a thriving e-commerce business. Let&apos;s create something extraordinary together.
          </p>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-amber-500 border border-transparent rounded-md shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end w-full px-3 md:px-1 sm:w-3/5 lg:w-5/8 mx-auto">
          <div className="w-full h-full pl-1 lg:pl-8">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/r1IPUN66lp8?si=JK5bf1Qkv8GLgjvH&rel=0&autoplay=1&mute=0&loop=1&playlist=r1IPUN66lp8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 