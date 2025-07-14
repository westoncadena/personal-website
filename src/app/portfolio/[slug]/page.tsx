'use client';

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { getCloudinaryImages } from '@/lib/cloudinary';
import { Portfolio } from '@/components/porfolio/portfolio-list';
import { PortfolioImage } from '@/lib/types';
import { portfolios } from '@/lib/portfolios';

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
            src={img.src}  // This is now the optimized thumbnail
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
        slides={images.map((img: PortfolioImage) => ({ src: img.fullSrc }))} // Use full-size for lightbox
      />
    </div>
  );
}
