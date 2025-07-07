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
    <div className="max-w-5xl w-full mx-auto py-8 px-4" style={{ background: "#FFF7E9" }}>
      <h1 className="text-3xl font-bold mb-2">{portfolio.title}</h1>
      <p className="mb-6">{portfolio.description}</p>
      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {portfolio.images.map((img: { src: string; orientation: string }, idx: number) => (
          <Image
            key={idx}
            src={img.src}
            alt=""
            width={600}
            height={img.orientation === "vertical" ? 800 : 400}
            onClick={() => { setIndex(idx); setOpen(true); }}
            className={
              (img.orientation === "vertical"
                ? "w-full h-80"
                : "w-full h-48") +
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
