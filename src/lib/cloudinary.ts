// Client-side helper to fetch images from our API route
export async function getCloudinaryImages(folder: string) {
  const res = await fetch(`/api/cloudinary-images?folder=${folder}`);
  if (!res.ok) {
    throw new Error('Failed to fetch images');
  }
  const data = await res.json();
  return data.resources;
}
