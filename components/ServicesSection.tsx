'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Service {
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
}

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Define service data
  const services: Service[] = [
    {
      icon: 'https://i.postimg.cc/K8Tms3ZJ/new-Walmart-logo-01.png',
      title: 'Walmart 2-Step Automation',
      description: 'Walmart 2-Step Automation is a streamlined system where we manage supplier orders and customer fulfillment on your behalf, allowing you to scale your Walmart store with ...',
      fullDescription: 'Walmart 2-Step Automation is a streamlined system where we manage supplier orders and customer fulfillment on your behalf, allowing you to scale your Walmart store with minimal effort and maximum efficiency.'
    },
    {
      icon: 'https://i.postimg.cc/K8Tms3ZJ/new-Walmart-logo-01.png',
      title: 'Walmart Automation',
      description: 'Walmart Automation is a hands-free business model where our team manages product sourcing, order fulfillment, and customer service—helping you ...',
      fullDescription: 'Walmart Automation is a hands-free business model where our team manages product sourcing, order fulfillment, and customer service—helping you grow a profitable Walmart store with minimal involvement.'
    },
    {
      icon: 'https://i.postimg.cc/K8Tms3ZJ/new-Walmart-logo-01.png',
      title: 'Walmart WFS (Walmart Fulfillment Services)',
      description: 'Walmart WFS (Walmart Fulfillment Services) is Walmart&apos;s in-house fulfillment network that stores, picks, packs, and ships products for sellers—ensuring fast delivery...',
      fullDescription: 'Walmart WFS (Walmart Fulfillment Services) is Walmart&apos;s in-house fulfillment network that stores, picks, packs, and ships products for sellers—ensuring fast delivery, higher visibility, and trusted customer service.'
    },
    {
      icon: 'http://api.fulfillbiz.com/uploads/file-1735136042929-21100c23-8741-442f-9931-749be864780c.png',
      title: 'Amazon FBA (Fulfillment by Amazon)',
      description: 'Amazon FBA (Fulfillment by Amazon) is a service where Amazon stores, packs, and ships your products, handles customer service, and manages returns—making it easier...',
      fullDescription: 'Amazon FBA (Fulfillment by Amazon) is a service where Amazon stores, packs, and ships your products, handles customer service, and manages returns—making it easier to scale your e-commerce business.'
    },
    {
      icon: 'http://api.fulfillbiz.com/uploads/file-1735137073048-acf49bd2-602e-4079-8b01-d6ae1e462890.png',
      title: '3PL Service',
      description: 'Third-Party Logistics (3PL) services involve outsourcing logistics functions like transportation, warehousing, and order fulfillment to external specialists. Companies/Individuals prefer 3PL to enhance efficiency, reduce costs, and focus on their core ope...',
      fullDescription: 'Third-Party Logistics (3PL) services involve outsourcing logistics functions like transportation, warehousing, and order fulfillment to external specialists. Companies/Individuals prefer 3PL to enhance efficiency, reduce costs, and focus on their core operations. Our 3PL services provide comprehensive logistics solutions, including inventory management, order processing, and shipping coordination, helping businesses scale their operations effectively.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/217/217436.png',
      title: 'eBay Automation',
      description: 'We specialize in crafting bespoke software solutions that align perfectly with your business goals. Our expert team navigates the entire software development lifecycle, offering versatile and scalable applications. From seamless integrations to user-centr...',
      fullDescription: 'We specialize in crafting bespoke software solutions that align perfectly with your business goals. Our expert team navigates the entire software development lifecycle, offering versatile and scalable applications. From seamless integrations to user-centric interfaces, we ensure your software needs are met with precision and innovation.'
    },
  ];

  return (
    <section className="pt-24 pb-14 bg-white">
      <div className="max-w-screen-xl md:mx-6 lg:mx-auto">
        <h1 className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-center font-bold uppercase text-gray-800">
          Our Services
        </h1>
        <div className="w-32 mx-auto mb-4 border-b border-amber-600"></div>
        <p className="max-w-4xl mx-auto text-gray-600 text-center">
          Our services are designed for individuals to achieve business goals by automating ECommerce selling processes. From inventory management to order fulfillment and everything in between, we offer a comprehensive range of services to make the selling experience buttery-smooth
        </p>

        <div className="pt-12 pb-6">
          <div className="service-wrapper grid gap-6 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service rounded-2xl bg-white shadow-lg transition duration-200 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="service-inner">
                  <div className="bg-gray-50 rounded-tl-2xl rounded-tr-2xl flex justify-center items-center flex-col">
                    <div className="icon p-5 mt-5 text-[4.5rem] w-32 h-32 bg-white rounded-full flex justify-center items-center shadow-md">
                      <Image
                        alt={service.title}
                        src={service.icon}
                        width={64}
                        height={64}
                        className="lg:w-16 w-12 lg:h-16 h-12"
                        unoptimized={true}
                      />
                    </div>
                    <div className="title py-3 px-3 text-amber-600 text-2xl text-center font-semibold">
                      {service.title}
                    </div>
                  </div>
                  <div className="py-4 px-6 bg-white w-full">
                    <p className="text-justify text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center py-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-amber-600 hover:bg-amber-700 rounded-br-none rounded-tl-none w-fit"
                    type="button"
                  >
                    <span className="flex gap-1 justify-between items-center">
                      See More
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="sm:max-w-52 md:max-w-xl lg:max-w-3xl rounded-2xl bg-gradient-to-r from-cyan-700 to-emerald-800 transition duration-200">
            <div>
              <div className="bg-[#cecccc] rounded-tl-2xl rounded-tr-2xl flex justify-center items-center flex-col">
                <div className="icon p-5 mt-5 text-[4.5rem] w-32 h-32 bg-gray-300 rounded-full flex justify-center items-center">
                  <Image
                    src={selectedService.icon}
                    alt={selectedService.title}
                    width={64}
                    height={64}
                    className="lg:w-16 w-12 lg:h-16 h-12"
                    unoptimized={true}
                  />
                </div>
                <div className="title py-3 px-3 text-orange-600 text-3xl text-center">
                  {selectedService.title}
                </div>
              </div>
              <div className="py-4 px-3 bg-gray-700 w-full bg-gradient-to-r from-cyan-700 to-emerald-800">
                <p className="text-justify text-gray-300">{selectedService.fullDescription}</p>
              </div>
            </div>
            <div className="flex justify-end items-center py-2.5 px-6">
              <button
                onClick={() => setSelectedService(null)}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-orange-700 rounded-br-none rounded-tl-none w-fit"
                type="button"
              >
                <span className="flex gap-1 justify-between items-center">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection; 