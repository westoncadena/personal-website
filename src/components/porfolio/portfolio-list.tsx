'use client';

import React from 'react';
import Image from "next/image";

export type Portfolio = {
  title: string;
  image: string;
  description: string;
  colors: string[];
  author: string;
};

type PortfolioListProps = {
  portfolios: Portfolio[];
};

const PortfolioList: React.FC<PortfolioListProps> = ({ portfolios }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Other Portfolios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolios.map((portfolio, idx) => (
          <div key={idx} className="bg-white  shadow p-4 flex flex-col">
            <Image
              src={portfolio.image}
              alt={portfolio.title}
              width={400}
              height={160}
              className="w-full h-40 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">{portfolio.title}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-3">{portfolio.description}</p>
            <div className="flex items-center gap-1 mb-2">
              {portfolio.colors.map((color, cidx) => (
                <div key={cidx} className="h-3 w-6 " style={{ background: color }} />
              ))}
            </div>
            <span className="italic text-xs text-right">{portfolio.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;