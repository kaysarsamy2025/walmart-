'use client';

import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <>
      {/* CEO Section */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 lg:py-3">
          <div className="my-8 text-center bg-gray-100">
            <h1 className="text-3xl font-bold capitalize text-gray-800">Productive Team</h1>
          </div>
          <div className="max-w-5xl mx-auto flex items-center mb-12 bg-gray-100">
            <div className="bg-gray-100 w-full">
              <div className="flex flex-wrap">
                <div className="w-full px-12 py-4 lg:w-3/5 lg:px-2">
                  <div className="mx-auto lg:max-w-xl">
                    <span className="text-blue-600">CEO AND FOUNDER</span>
                    <h2 className="mt-2 mb-6 text-4xl font-bold text-gray-800">Ridwan Tonmoy</h2>
                    <p className="mb-4 text-sm text-gray-600">Studying CSE at Varendra University</p>
                    <p className="mb-6 text-lg text-gray-600">
                      
                    </p>

                   
                  </div>
                </div>
                <div className="w-full px-2 lg:w-2/5 flex justify-center items-center">
                  <div className="h-[23rem] w-[90%] mb-12 lg:mb-0">
                    <Image className="object-cover w-full h-full scale-110" src="https://i.postimg.cc/rwSMKp9Y/Whats-App-Image-2024-07-10-at-02-07-46-9c6f2935.jpg" alt="" width={400} height={368} unoptimized={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <section className="w-full bg-gray-100 font-poppins">
        <div className="max-w-7xl mx-auto px-4 py-6 lg:py-4">
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {/* Chairman */}
            <div className="flex flex-col flex-wrap items-center mb-0 overflow-hidden rounded lg:flex-row">
              <div className="w-full overflow-hidden lg:w-2/4 h-[23rem]">
                <Image className="object-cover w-[85%] transition-all hover:scale-110" src="https://i.postimg.cc/hjRChSpM/Whats-App-Image-2025-05-27-at-11-08-19-PM-1.jpg" alt="" width={400} height={368} unoptimized={true} />
              </div>
              <div className="relative flex self-center flex-1 p-8 ml-0 bg-gray-100 border rounded shadow lg:items-center lg:-ml-12">
                <div>
                  <h2 className="mb-2 text-xl font-bold text-gray-800">Rakibul hasan rijvi</h2>
                  <p className="mb-4 text-sm text-gray-600">Manager IT Support</p>
                  <p className="mb-4 text-sm text-gray-600">Studying BBA at Varendra University</p>
                  <p className="mb-4 text-sm text-gray-600">
                    
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Managing Director */}
            <div className="flex flex-col flex-wrap items-center mb-0 overflow-hidden rounded lg:flex-row">
              <div className="w-full overflow-hidden lg:w-2/4 h-[23rem]">
                <Image className="object-cover w-[85%] transition-all hover:scale-110" src="https://i.postimg.cc/QCxRmpvH/Whats-App-Image-2025-05-27-at-11-08-18-PM-2.jpg" alt="" width={400} height={368} unoptimized={true} />
              </div>
              <div className="relative flex self-center flex-1 p-8 ml-0 bg-gray-100 border rounded shadow lg:items-center lg:-ml-12">
                <div>
                  <h2 className="mb-2 text-xl font-bold text-gray-800">Fahim 
                  </h2>
                  <p className="mb-4 text-sm text-gray-600">Managing Director</p>
                  <p className="mb-4 text-sm text-gray-600">Studying BBA at Varendra University</p>

                  <p className="mb-4 text-sm text-gray-600">
                    
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection; 