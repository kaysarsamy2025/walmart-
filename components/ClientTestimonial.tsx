'use client';

import React from 'react';
import Image from 'next/image';

const ClientTestimonial = () => {
  return (
    <>
      <section className="flex items-center pt-16 pb-8 bg-white">
        <div className="p-4 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">Clients Comments</h1>
            <p className="text-lg sm:text-lg xl:text-xl text-gray-600">
              Discover the impact of RT Destination through our clients&apos; experiences.
            </p>
          </div>
          <div className="relative">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-[4deg] sm:rounded-lg"></div>
            <div className="relative max-w-6xl mx-auto z-20">
              <div className="px-6 py-10 text-center border-3 border-amber-900 shadow-md bg-white lg:px-20 rounded-2xl">
                <div className="mb-10">
                  <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-amber-500 rounded-full">
                    <Image
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src="https://i.postimg.cc/3xYnvg0G/pexels-fauxels-3184611.jpg"
                      alt=""
                      width={128}
                      height={128}
                      unoptimized={true}
                    />
                  </div>
                  <h2 className="mb-2 text-xl font-extrabold text-gray-800">Adrino James</h2>
                </div>
                <div className="flex flex-wrap mb-10 -mx-4 lg:flex-nowrap">
                  <div className="self-start px-4 text-amber-500 md:block">
                    <svg
                      width="75"
                      height="64"
                      viewBox="0 0 75 64"
                      fill="none"
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-full px-4 py-4 lg:w-auto lg:py-0">
                    <p className="text-base text-gray-600 sm:text-xl xl:text-2xl">
                    Adrino James highly recommends RT Destination for anyone seeking reliable Walmart automation services — their quality is truly unmatched.
                    </p>
                  </div>
                  <div className="self-end px-4 ml-auto text-amber-500">
                    <svg
                      className="w-10 h-10"
                      width="75"
                      height="64"
                      viewBox="0 0 75 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.62939e-06 63.3689L1.87067 50.0404C5.61201 50.3522 8.65186 49.7286 10.9902 48.1697C13.3285 46.6888 14.9654 44.5063 15.9007 41.6224C16.7581 38.8164 16.914 35.5427 16.3684 31.8014H7.62939e-06V3.8147e-06H31.8014V31.8014C31.8014 43.0254 29.1902 51.5213 23.9679 57.2892C18.7457 63.1351 10.7564 65.1616 7.62939e-06 63.3689ZM42.3239 63.3689L44.1946 50.0404C47.9359 50.3522 50.9757 49.7286 53.3141 48.1697C55.6524 46.6888 57.2892 44.5063 58.2246 41.6224C59.082 38.8164 59.2378 35.5427 58.6922 31.8014H42.3239V3.8147e-06H74.1252V31.8014C74.1252 43.0254 71.5141 51.5213 66.2918 57.2892C61.0695 63.1351 53.0802 65.1616 42.3239 63.3689Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-white pt-12 pb-16">
        <div className="p-4 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">Client Reviews</h1>
            <p className="max-w-xl mx-auto text-gray-600">
              Check out what our clients have to say about RT Destination&apos;s exceptional services.
            </p>
          </div>
          <div className="flex">
            <div className="grid grid-cols-1 gap-8 lg:gap-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* D Suza */}
              <div className="relative mb-20 text-center rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="z-20 p-8 -mt-24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 top-4 left-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                  <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-amber-500 rounded-full shadow-lg">
                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src="http://api.fulfillbiz.com/uploads/file-1726184737022-23845b66-94f0-4500-b3d0-9bc91fe410ee.jpg" alt="D Suza" width={128} height={128} unoptimized={true} />
                  </div>
                  <p className="mb-4 text-base leading-7 text-gray-600">
                    Alice Parker Impressed with RT Destination&apos;s exceptional Walmart automation services – they truly stand out as one of the best in the world.
                  </p>
                  <h2 className="text-lg font-bold leading-9 text-gray-800">D Suza</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                </div>
              </div>

              {/* Juliye Serkev */}
              <div className="relative mb-20 text-center rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="z-20 p-8 -mt-24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 top-4 left-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                  <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-amber-500 rounded-full shadow-lg">
                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src="http://api.fulfillbiz.com/uploads/file-1726184817810-13ca78c0-cac7-447d-98b8-300bc6dac2a2.jpg" alt="Juliye Serkev" width={128} height={128} unoptimized={true} />
                  </div>
                  <p className="mb-4 text-base leading-7 text-gray-600">
                    Juliye Serkev Very satisfied with RT Destination&apos;s services. The automation tools have made a significant impact on my business.
                  </p>
                  <h2 className="text-lg font-bold leading-9 text-gray-800">Juliye Serkev</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                </div>
              </div>

              {/* Janice E. Bills */}
              <div className="relative mb-20 text-center rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="z-20 p-8 -mt-24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 top-4 left-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                  <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-amber-500 rounded-full shadow-lg">
                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src="http://api.fulfillbiz.com/uploads/file-1726184853829-8025b8b7-c8e7-4cae-8c4b-4133b59e3539.jpg" alt="Janice E. Bills" width={128} height={128} unoptimized={true} />
                  </div>
                  <p className="mb-4 text-base leading-7 text-gray-600">
                    Janice E. Bills RT Destination is a must-have for Walmart sellers looking to excel in online arbitrage. Their platform is a game-changer that streamlines the process, delivers accurate data, and ultimately boosts your profits. I wholeheartedly recommend their service to anyone in the e-commerce game.
                  </p>
                  <h2 className="text-lg font-bold leading-9 text-gray-800">Janice E. Bills</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                </div>
              </div>

              {/* Tamara J. */}
              <div className="relative mb-20 text-center rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="z-20 p-8 -mt-24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 top-4 left-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                  <div className="inline-block w-32 h-32 mb-3 overflow-hidden text-xs text-white bg-amber-500 rounded-full shadow-lg">
                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src="http://api.fulfillbiz.com/uploads/file-1726185216155-c4eac5a0-82b1-4a03-8f4b-da2dcfa0b157.jpg" alt="Tamara J." width={128} height={128} unoptimized={true} />
                  </div>
                  <p className="mb-4 text-base leading-7 text-gray-600">
                    RT Destination is a must-have for Wallmart sellers looking to excel in online arbitrage. Their platform is a game-changer that streamlines the process, delivers accurate data, and ultimately boosts your profits. I wholeheartedly recommend their service to anyone in the e-commerce game.
                  </p>
                  <h2 className="text-lg font-bold leading-9 text-gray-800">Tamara J.</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute w-20 h-20 rotate-180 bottom-4 right-4 opacity-10 text-amber-500" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonial;