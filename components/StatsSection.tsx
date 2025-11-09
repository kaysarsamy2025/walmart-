'use client';

import React, { useEffect, useRef } from 'react';

const StatsSection = () => {
  const countersRef = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLSpanElement;
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
              current += step;
              if (current < target) {
                counter.textContent = Math.floor(current).toString();
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target.toString();
              }
            };

            updateCounter();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(countersRef.current).forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="bg-fixed bg-no-repeat bg-cover bg-center" 
      style={{ backgroundImage: 'url("/banner.jpg")' }}
    >
      <div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-5 justify-around items-center h-96">
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white">
              <span ref={(el) => { countersRef.current['accounts'] = el }} data-target="100">0</span>
              <span>+</span>
            </h1>
            <p className="uppercase font-bold text-white">Managing Accounts</p>
          </div>
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white">
              <span ref={(el) => { countersRef.current['clients'] = el }} data-target="50">0</span>
              <span>+</span>
            </h1>
            <p className="uppercase font-bold text-white">Clients</p>
          </div>
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white">
              <span ref={(el) => { countersRef.current['team'] = el }} data-target="30">0</span>
              <span>+</span>
            </h1>
            <p className="uppercase font-bold text-white">Team Members</p>
          </div>
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white">
              <span ref={(el) => { countersRef.current['revenue'] = el }} data-target="2">0</span>
              <span>M+</span>
            </h1>
            <p className="uppercase font-bold text-white">Clients Revenue Last Year</p>
          </div>
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white">
              <span ref={(el) => { countersRef.current['experience'] = el }} data-target="7">0</span>
              <span>+</span>
            </h1>
            <p className="uppercase font-bold text-white">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection; 