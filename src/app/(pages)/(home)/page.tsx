'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/cdss1819.jpg',
      caption: 'CDSS Community 2018-19',
      description: 'Our vibrant community of data science enthusiasts at Columbia University'
    },
    {
      image: '/images/hackathonpic.jpg',
      caption: 'Annual Hackathon',
      description: 'Students collaborating and innovating at our signature hackathon event'
    },
    {
      image: '/images/studentchallenge.jpg',
      caption: 'Student Challenge',
      description: 'Engaging in real-world data science challenges and competitions'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cdss-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo.png"
                alt="CDSS Logo"
                width={120}
                height={120}
                className="w-auto h-30"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Columbia Data Science Society
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              CDSS is an interdisciplinary society that promotes data science across Columbia University.
            </p>
            <Link
              href="/about"
              className="bg-white text-cdss-blue px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-gray-600">
                Gain experience through workshops, seminars, and projects
                to equip you with the skills for a career in data science.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Networking</h3>
              <p className="text-gray-600">
                Connect with alumni and industry experts to expand your network and
                gain insights into the latest trends in data science.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Join a vibrant community of data science enthusiasts and build lasting
                connections with peers and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slideshow Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[600px] group overflow-hidden rounded-lg shadow-xl">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].caption}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">{slides[currentSlide].caption}</h3>
              <p className="text-lg text-gray-200">{slides[currentSlide].description}</p>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white w-4' : 'bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Join Us?</h2>
          <Link
            href="https://linktr.ee/cdss.cu"
            className="bg-cdss-blue text-white px-8 py-3 rounded-full font-medium hover:bg-cdss-blue/90 transition-colors duration-200"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
} 