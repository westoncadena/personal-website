'use client';

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { getCloudinaryImages } from '@/lib/cloudinary';
import { Portfolio } from '@/components/porfolio/portfolio-list';

// TypeScript interfaces
interface PortfolioImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  orientation: 'horizontal' | 'vertical';
}

// Import the portfolios array from the main portfolio page
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

export default function PortfolioSlugPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const portfolio = portfolios.find((p: Portfolio) => p.slug === slug);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await getCloudinaryImages(slug);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchImages();
    }
  }, [slug]);

  if (!portfolio) return <div>Portfolio not found</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 text-foreground">{portfolio.title}</h1>
      <p className="mb-6 text-foreground">{portfolio.description}</p>
      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img: PortfolioImage, idx: number) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt}
            width={img.orientation === "vertical" ? 400 : 600}
            height={img.orientation === "vertical" ? 600 : 400}
            onClick={() => { setIndex(idx); setOpen(true); }}
            className={
              (img.orientation === "vertical"
                ? "w-full aspect-[2/3]"
                : "w-full aspect-[3/2]") +
              " object-cover mb-4 break-inside-avoid cursor-pointer transition-transform active:scale-95 md:hover:scale-105"
            }
          />
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img: PortfolioImage) => ({ src: img.src }))}
      />
    </div>
  );
}
