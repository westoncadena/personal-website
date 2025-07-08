'use client';

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const dummyPortfolios = {
  switzerland: {
    title: "Switzerland",
    description: "A beautiful trip to the Swiss Alps...",
    images: [
      { src: "/swiss1.jpg", orientation: "vertical" },
      { src: "/swiss2.jpg", orientation: "vertical" },
      { src: "/swiss3.jpg", orientation: "horizontal" },
      { src: "/swiss4.jpg", orientation: "horizontal" },
      { src: "/swiss5.jpg", orientation: "vertical" },
      { src: "/swiss6.jpg", orientation: "horizontal" },
      // Add more image paths
    ]
  },
  // Add more portfolios
};

export default function PortfolioSlugPage() {
  const { slug } = useParams();
  const portfolio = dummyPortfolios[slug as keyof typeof dummyPortfolios];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!portfolio) return <div>Portfolio not found</div>;

  return (
    <div className="w-full mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{portfolio.title}</h1>
      <p className="mb-6 text-gray-800">{portfolio.description}</p>
      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {portfolio.images.map((img: { src: string; orientation: string }, idx: number) => (
          <Image
            key={idx}
            src={img.src}
            alt=""
            width={img.orientation === "vertical" ? 800 : 1200}
            height={img.orientation === "vertical" ? 1200 : 800}
            onClick={() => { setIndex(idx); setOpen(true); }}
            className={
              (img.orientation === "vertical"
                ? "w-full aspect-[2/3]"  // 2:3 aspect ratio for vertical
                : "w-full aspect-[3/2]") + // 3:2 aspect ratio for horizontal
              " object-cover mb-4 break-inside-avoid cursor-pointer transition-transform hover:scale-105"
            }
          />
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={portfolio.images.map(img => ({ src: img.src }))}
      />
    </div>
  );
}
