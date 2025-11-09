import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="flex items-center bg-white py-12 pb-16 font-poppins">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative lg:max-w-md">
              <Image
                src="/pic.jpg"
                alt="aboutimage"
                className="relative z-10 object-cover w-full rounded h-96"
                width={500}
                height={400}
                unoptimized={true}
              />
             
            </div>
          </div>
          <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0">
            <div className="pl-4 mb-6 border-l-4 border-[var(--chocolate)]">
              <span className="text-sm text-gray-800 uppercase">Who we are?</span>
              <h1 className="mt-2 text-3xl font-black text-gray-800 md:text-5xl">About RT Destination</h1>
            </div>
            <p className="mb-6 text-base leading-7 text-gray-600">
            RT Destination, your gateway to unprecedented success in the world of Walmart automation! Founded in 2016 by CEO Ridwan Tonmoy, we&apos;ve grown into a dedicated team of 370+ experts across 7 strategically located warehouses in the USA. Our mission at RT Destination is to empower businesses like yours to achieve remarkable results. We specialize in generating high revenues — often reaching 6 to 7 figures on Walmart platforms — while delivering a remarkable ROI of 30-40%.
            </p>
            <Link href="/#">
              <button
                data-aos="zoom-in"
                data-aos-offset="0"
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-8 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#d2691e] rounded-br-none rounded-tl-none w-fit mb-2 aos-init aos-animate"
                type="button"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", Bangla392, sans-serif' }}
              >
                <span className="flex gap-1 justify-between items-center">More</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 