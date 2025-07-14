import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResource, PortfolioImage } from '@/lib/types';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
  }

  try {
    // List all images in the folder using the Cloudinary SDK
    const result = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    // Format the images for your frontend with optimized URLs
    const images: PortfolioImage[] = result.resources.map((img: CloudinaryResource) => {
      // Create optimized thumbnail URL for gallery view
      const thumbnailUrl = cloudinary.url(img.public_id, {
        format: 'jpg',
        quality: 'auto',
        width: img.width > img.height ? 600 : 400,
        height: img.width > img.height ? 400 : 600,
        crop: 'fill'
      });

      // Create optimized full-size URL for lightbox
      const fullSizeUrl = cloudinary.url(img.public_id, {
        format: 'jpg',
        quality: 'auto',
        width: img.width > img.height ? 1200 : 800,
        height: img.width > img.height ? 800 : 1200,
        crop: 'limit' // Don't upscale if smaller
      });

      return {
        src: thumbnailUrl,        // Optimized for gallery
        fullSrc: fullSizeUrl,     // Optimized for lightbox
        width: img.width,
        height: img.height,
        alt: img.public_id,
        orientation: img.width > img.height ? 'horizontal' : 'vertical',
      };
    });

    return NextResponse.json({ resources: images });
  } catch (error: unknown) {
    console.error('Cloudinary API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 