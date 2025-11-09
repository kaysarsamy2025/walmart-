'use client';

import React, { useState, useEffect } from 'react';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobType: 'Full-time',
    location: '',
    description: '',
    resumeUrl: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [nextUrl, setNextUrl] = useState('');

  // Check for success parameter in URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('success') === 'true') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your application! We will contact you soon.',
        });
      }
      setNextUrl(`${window.location.origin}${window.location.pathname}?success=true`);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
  };

  return (
    <div className="min-h-screen font-poppins bg-white">
      <section className="pt-12 pb-4 font-poppins bg-white">
        <div className="justify-center flex-1 max-w-7xl px-4 py-4 mx-auto lg:py-10 md:px-7">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <div className="relative flex flex-col items-center">
                <h1 className="text-5xl font-bold text-gray-800">
                  Ca<span className="text-amber-500">reer Wi</span>th Us
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-amber-200"></div>
                  <div className="flex-1 h-2 bg-amber-400"></div>
                  <div className="flex-1 h-2 bg-amber-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto h-[40rem] scale-110">
            <Image
              className="w-full h-full rounded-lg shadow-lg"
              src="https://i.postimg.cc/Vk1y7rp9/Whats-App-Image-2025-05-27-at-7-07-33-PM.jpg"
              alt="team photo"
              width={1080}
              height={640}
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="justify-center flex-1 max-w-4xl px-2 py-2 mx-auto lg:py-4 md:px-4">
          <div className="max-w-2xl mx-auto">
            <div className="py-6">
              <h1 className="pb-8 text-amber-500 text-4xl text-center font-bold">
                Let&apos;s Do Something Different!
              </h1>
              <h1 className="text-amber-600 text-2xl font-semibold mb-4">
                About RT Destination&apos;s Jobs
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                At RT Destination, we offer roles in Walmart automation, including specialists in
                product management, sourcing, customer support, marketing, and data analysis.
                Employees enjoy competitive salaries, performance bonuses, flexible work options,
                professional development opportunities, and a supportive company culture focused on
                growth&nbsp;and&nbsp;well-being.
              </p>
            </div>
            <div className="pb-6">
              <h1 className="text-amber-600 text-2xl font-semibold mb-4">Who can apply?</h1>
              <p className="text-gray-600 text-base leading-relaxed">
                Students from CSE/EEE/BBA department from renowned public and private Universities
                feel free to apply for our internship program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-10 md:px-7">
          <div className="max-w-4xl mx-auto">
            <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form
                action="https://formsubmit.co/loops.ridoway@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}

                <h1 className="text-2xl font-bold text-gray-800 mb-6">Join With Us</h1>
                {submitStatus.type && (
                  <div
                    className={`mb-4 p-4 rounded ${
                      submitStatus.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="job-title"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-loose border rounded-md bg-white text-gray-700 border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    type="text"
                    placeholder="Name.."
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="apply-link"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-loose border rounded-md bg-white text-gray-700 border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    type="email"
                    placeholder="abc@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="job-type"
                    >
                      Job Type
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        id="job-type"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        required
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Contract">Contract</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="location"
                    >
                      Location
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-loose border rounded-md bg-white text-gray-700 border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      type="text"
                      placeholder="Enter Location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    id="description"
                    cols={36}
                    rows={8}
                    placeholder="Enter description here..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="resumeUrl"
                  >
                    Resume URL
                  </label>
                  <input
                    type="text"
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    id="resumeUrl"
                    name="resumeUrl"
                    value={formData.resumeUrl}
                    onChange={handleChange}
                    placeholder="https://www.abc.com"
                    required
                  />
                </div>

                <div>
                  <button
                    className={`w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CareersPage;
