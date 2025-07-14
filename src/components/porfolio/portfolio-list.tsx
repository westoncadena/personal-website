'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export type Portfolio = {
  title: string;
  image: string;
  description: string;
  colors: string[];
  author: string;
  slug: string;
};

type PortfolioListProps = {
  portfolios: Portfolio[];
};

const PortfolioList: React.FC<PortfolioListProps> = ({ portfolios }) => {
  const router = useRouter();
  const [clickedPortfolio, setClickedPortfolio] = useState<string | null>(null);

  const handlePortfolioClick = (portfolio: Portfolio) => {
    setClickedPortfolio(portfolio.title);
    const slug = portfolio.title.toLowerCase();
    router.push(`/portfolio/${slug}`);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-foreground">All Portfolios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolios.map((portfolio, idx) => (
          <div 
            key={idx} 
            className="bg-card shadow p-4 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
            onClick={() => handlePortfolioClick(portfolio)}
          >
            <div className="relative overflow-hidden mb-3 aspect-[3/2]">
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                width={400}
                height={267}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
              />
              {/* Shimmer effect similar to main portfolio page */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              
              {/* Loading overlay */}
              {clickedPortfolio === portfolio.title && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-white text-xs font-medium">Loading...</span>
                  </div>
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-1 text-foreground">{portfolio.title}</h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-3">{portfolio.description}</p>
            <div className="flex items-center gap-1 mb-2">
              {portfolio.colors.map((color, cidx) => (
                <div key={cidx} className="h-3 w-6 " style={{ background: color }} />
              ))}
            </div>
            <span className="italic text-xs text-right text-muted-foreground">{portfolio.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;