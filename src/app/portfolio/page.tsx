'use client';

import React, { useState } from 'react';
import PortfolioList, { Portfolio } from '@components/porfolio/portfolio-list';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

const portfolios: Portfolio[] = [
  {
    title: "SWITZERLAND",
    image: "/profile.jpg",
    description: "A beautiful trip to the Swiss Alps with stunning lakes and mountains.",
    colors: ["#3B4D3A", "#A3B2A4", "#E6E9ED", "#1B6B6B"],
    author: "Weston Cadena"
  },
  {
    title: "JAPAN",
    image: "/swiss2.jpg",
    description: "Exploring cherry blossoms, temples, and vibrant city life in Japan.",
    colors: ["#E3D9CA", "#B0A990", "#A7C7E7", "#D7263D"],
    author: "Weston Cadena"
  },
  {
    title: "PERU",
    image: "/swiss3.jpg",
    description: "Hiking Machu Picchu and discovering ancient Incan culture.",
    colors: ["#A3B18A", "#588157", "#3A5A40", "#344E41"],
    author: "Weston Cadena"
  }
];

const PortfolioPage: React.FC = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial

  const currentPortfolio = portfolios[currentIndex];

  const handleImageClick = () => {
    const slug = currentPortfolio.title.toLowerCase();
    router.push(`/portfolio/${slug}`);
  };

  const handlePrevious = () => {
    setDirection(-1); // Going left
    setCurrentIndex((prev) => 
      prev === 0 ? portfolios.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1); // Going right
    setCurrentIndex((prev) => 
      prev === portfolios.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full px-12 py-4">
        <div className="flex items-center justify-between mb-4 border-b border-black">
          <h1 className="text-3xl font-serif">PORTFOLIO</h1>
          <span className="text-lg font-bold bg-black text-white px-4 py-1">048</span>
        </div>
        {/* Image Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${currentIndex}`}
            initial={{ 
              opacity: 0, 
              x: direction === 1 ? 100 : direction === -1 ? -100 : 0 
            }}
            animate={{ 
              opacity: 1, 
              x: 0 
            }}
            exit={{ 
              opacity: 0, 
              x: direction === 1 ? -100 : direction === -1 ? 100 : 0 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative group overflow-hidden">
              <Image
                src={currentPortfolio.image}
                alt={currentPortfolio.title}
                width={1200}
                height={608}
                onClick={handleImageClick}
                className="w-full h-[38rem] object-cover mb-6 cursor-pointer transition-all duration-300 group-hover:brightness-75"
                priority
              />
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Left: Description */}
          <div className="flex-1">
            {/* Title and Description Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ 
                  opacity: 0, 
                  x: direction === 1 ? 100 : direction === -1 ? -100 : 0 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction === 1 ? -100 : direction === -1 ? 100 : 0 
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h1 className="text-xl font-serif">{currentPortfolio.title}</h1>
                <p className="mb-4">{currentPortfolio.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Colors, Author, Navigation */}
          <div className="flex flex-col items-start md:items-end gap-4 min-w-[500px]">
            {/* Colors bar Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`colors-${currentIndex}`}
                initial={{ 
                  opacity: 0, 
                  x: direction === 1 ? 100 : direction === -1 ? -100 : 0 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction === 1 ? -100 : direction === -1 ? 100 : 0 
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex w-full items-center gap-4"
              >
                {currentPortfolio.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="h-5 flex-1"
                    style={{ background: color }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Static Navigation and Author Info */}
            <div className="w-full">
              <div className="hidden md:block border-l-2 border-black ml-24 pl-8">
                <div className="w-full text-right mb-2">
                  <button 
                    className="rounded-full border-2 border-gray-800 p-2 hover:bg-gray-800 hover:text-white transition-colors"
                    onClick={handlePrevious}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    className="rounded-full border-2 border-gray-800 p-2 ml-2 hover:bg-gray-800 hover:text-white transition-colors"
                    onClick={handleNext}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="w-full text-left">
                  <span className="italic text-xl">{currentPortfolio.author}</span>
                </div>
                <div className="w-full text-right mt-2">
                  <span className="text-lg font-bold bg-black px-4 py-1 rounded">048</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PortfolioList portfolios={portfolios} />
      </div>
    </div>
  );
};

export default PortfolioPage;