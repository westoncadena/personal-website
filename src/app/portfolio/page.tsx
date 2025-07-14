'use client';

import React, { useState } from 'react';
import PortfolioList, { Portfolio } from '@components/porfolio/portfolio-list';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { Babylonica, Libre_Barcode_39 } from "next/font/google";

const babylonica = Babylonica({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-babylonica"
});

const libreBarcode = Libre_Barcode_39({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libre-barcode"
});

const portfolios: Portfolio[] = [
  {
    title: "TRAVEL",
    image: "/portfolio/travel.jpg",
    description: "Authentic travel content that brings destinations to life through compelling storytelling and visuals. These images capture the essence of each location, from bustling city streets to hidden cultural gems, creating content that inspires others to explore. My portfolio showcases diverse cultures and locations, perfect for anyone seeking engaging travel photography.",
    colors: ["#3B4D3A", "#A3B2A4", "#E6E9ED", "#1B6B6B"],
    author: "Weston Cadena",
    slug: "travel"
  },
  {
    title: "ACTION",
    image: "/portfolio/action.jpg",
    description: "Dynamic sports and adventure photography that captures peak performance and authentic athletic moments. From intense training sessions to extreme sports, these high-energy images showcase the passion and dedication behind every pursuit. Perfect for capturing the excitement and intensity that defines the athletic experience.",
    colors: ["#E3D9CA", "#B0A990", "#A7C7E7", "#D7263D"],
    author: "Weston Cadena",
    slug: "action"
  },
  {
    title: "NATURE",
    image: "/portfolio/nature.jpg",
    description: "Breathtaking outdoor content that showcases the raw beauty of natural landscapes and wildlife encounters. From dramatic landscapes to intimate wildlife encounters these images inspire a deeper connection with the natural world. Perfect for anyone who appreciates the majesty of untouched wilderness and outdoor adventure.",
    colors: ["#A3B18A", "#588157", "#3A5A40", "#344E41"],
    author: "Weston Cadena",
    slug: "nature"
  },
  {
    title: "LIFESTYLE",
    image: "/portfolio/lifestyle.jpg",
    description: "Relatable, aspirational content that celebrates the beauty found in everyday moments and modern living. These images capture authentic experiences from daily rituals to urban exploration, creating visual stories that resonate with diverse audiences. Clean aesthetics and genuine moments that reflect how we live, work, and find joy in the ordinary.",
    colors: ["#A3B18A", "#588157", "#3A5A40", "#344E41"],
    author: "Weston Cadena",
    slug: "lifestyle"
  }
];

const PortfolioPage: React.FC = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const [isNavigating, setIsNavigating] = useState(false);

  const currentPortfolio = portfolios[currentIndex];

  const handleImageClick = () => {
    setIsNavigating(true);
    const slug = currentPortfolio.slug;
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
    <div className="min-h-screen flex items-center justify-center pb-8">
      <div className="w-full px-6 sm:px-8 md:px-12 py-4">
        <div className="flex items-center justify-between mb-4 border-b border-border">
          <h1 className="text-3xl font-serif text-foreground">PORTFOLIO</h1>
          <span className="text-lg font-bold bg-primary text-primary-foreground px-4 py-1">
            {(currentIndex + 1).toString().padStart(3, '0')}
          </span>
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
                className="w-full h-48 sm:h-64 md:h-[28rem] lg:h-[38rem] object-cover mb-2 cursor-pointer transition-all duration-300 group-hover:brightness-75"
                priority
              />
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              
              {/* Loading overlay */}
              {isNavigating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-white text-sm font-medium">Loading...</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Color Bar: always below image, full width */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`colors-${currentIndex}`}
            initial={{ opacity: 0, x: direction === 1 ? 100 : direction === -1 ? -100 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -100 : direction === -1 ? 100 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex w-full items-center gap-4 mb-6"
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

          {/* Horizontal line for mobile */}
          <div className="block md:hidden border-t border-border" />

          {/* Right: Author, Navigation */}
          <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-[400px] lg:w-[500px] xl:w-[700px]">
            {/* Static Navigation and Author Info */}
            <div className="w-full">
              {/* Arrows above image on mobile */}
              <div className="flex justify-between mb-2 md:hidden">
                <button 
                  className="rounded-full border-2 border-border p-2 text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={handlePrevious}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  className="rounded-full border-2 border-border p-2 ml-2 text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={handleNext}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Arrows in sidebar on desktop */}
              <div className="hidden md:block border-l-2 border-border ml-24 pl-8">
                <div className="w-full text-right mb-2">
                  <button 
                    className="rounded-full border-2 border-border p-2 text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={handlePrevious}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    className="rounded-full border-2 border-border p-2 ml-2 text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={handleNext}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="w-full text-left">
                  <span className={`${babylonica.className} text-5xl leading-none`}>
                    {currentPortfolio.author}
                  </span>
                </div>
                <div className="w-full text-right mt-2">
                  <span className={`${libreBarcode.className} text-4xl py-1 rounded`}>
                    {currentPortfolio.author}
                  </span>
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