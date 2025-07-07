'use client';

import React from 'react';
import PortfolioList, { Portfolio } from '@components/porfolio/portfolio-list';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from 'next/image';

const tempPortfolio = {
  title: "SWITZERLAND",
  image: "/profile.jpg", // Use an image from your public/ folder
  description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`,
  colors: ["#3B4D3A", "#A3B2A4", "#E6E9ED", "#1B6B6B"],
  author: "Weston Cadena"
};

const dummyPortfolios: Portfolio[] = [
  {
    title: "SWITZERLAND",
    image: "/profile.jpg",
    description: "A beautiful trip to the Swiss Alps with stunning lakes and mountains.",
    colors: ["#3B4D3A", "#A3B2A4", "#E6E9ED", "#1B6B6B"],
    author: "Weston Cadena"
  },
  {
    title: "JAPAN",
    image: "/profile.jpg",
    description: "Exploring cherry blossoms, temples, and vibrant city life in Japan.",
    colors: ["#E3D9CA", "#B0A990", "#A7C7E7", "#D7263D"],
    author: "Weston Cadena"
  },
  {
    title: "PERU",
    image: "/profile.jpg",
    description: "Hiking Machu Picchu and discovering ancient Incan culture.",
    colors: ["#A3B18A", "#588157", "#3A5A40", "#344E41"],
    author: "Weston Cadena"
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#FFF7E9" }}>
      <div className="w-full px-12 py-4">
        <div className="flex items-center justify-between mb-4 border-b border-black">
          <h1 className="text-3xl font-serif text-gray-800">PORTFOLIO</h1>
          <span className="text-lg font-bold bg-black text-white px-4 py-1">048</span>
        </div>
        <Image
          src={tempPortfolio.image}
          alt={tempPortfolio.title}
          width={1200}
          height={608}
          className="w-full h-[38rem] object-cover mb-6"
          priority
        />
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left: Description */}
          <div className="flex-1">
            <h1 className="text-gray-800 text-xl font-serif">{tempPortfolio.title}</h1>
            <p className="mb-4 text-gray-800">{tempPortfolio.description}</p>
          </div>

          {/* Right: Colors, Author, Navigation */}
          <div className="flex flex-col items-start md:items-end gap-4 min-w-[500px]">
            {/* Colors bar (full width, above the flex row) */}
            <div className="flex w-full items-center gap-4">
              {tempPortfolio.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="h-5 flex-1"
                  style={{ background: color }}
                />
              ))}
            </div>
            <div className="w-full">
            <div className="hidden md:block border-l-2 border-black ml-24 pl-8">
                <div className="w-full text-right mb-2">
                  <button className="rounded-full border-2 border-gray-800 p-2">
                    <ArrowLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="rounded-full border-2 border-gray-800 p-2 ml-2">
                    <ArrowRight className="w-5 h-5 text-gray-800" />
                  </button>
                </div>
                <div className="w-full text-left">
                  <span className="italic text-gray-800 text-xl">{tempPortfolio.author}</span>
                </div>
                <div className="w-full text-right mt-2">
                  <span className="text-lg font-bold bg-black text-white px-4 py-1 rounded">048</span>
                </div>
            </div>
            </div>
          </div>
        </div>

        <PortfolioList portfolios={dummyPortfolios} />
      </div>
    </div>
  );
};

export default PortfolioPage;