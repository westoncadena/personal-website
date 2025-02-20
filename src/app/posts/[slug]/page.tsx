import { SinglePost } from '@/components/posts/single-post';
// import { getPost } from '@/lib/cosmic';
import { Suspense } from 'react';
import { Loader } from '@/components/loader';

// export async function generateMetadata({
//     params,
// }: {
//     params: { slug: string };
// }) {
//     const post = await getPost(params.slug);
//     return {
//         title: `${post.title} | Simple Next.js Blog`,
//     };
// }

// Traditional function declaration for the page component
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params; // Await the params to resolve
    return (
        <Suspense fallback={<Loader />}>
            <SinglePost slug={resolvedParams.slug} /> {/* Use the resolved slug */}
        </Suspense>
    );
}

export const revalidate = 60;
