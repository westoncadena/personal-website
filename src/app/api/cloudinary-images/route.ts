import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// TypeScript interfaces
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
}

interface PortfolioImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  orientation: 'horizontal' | 'vertical';
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
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

    // Format the images for your frontend
    const images: PortfolioImage[] = result.resources.map((img: CloudinaryResource) => ({
      src: img.secure_url,
      width: img.width,
      height: img.height,
      alt: img.public_id,
      orientation: img.width > img.height ? 'horizontal' : 'vertical',
    }));

    return NextResponse.json({ resources: images });
  } catch (error: unknown) {
    console.error('Cloudinary API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 