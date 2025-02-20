import React from 'react';
import { PostList } from '@/components/posts/post-list';
import { Loader } from '@/components/loader';
import { Suspense } from 'react';

export default async function Page(): Promise<React.JSX.Element> {
    return (
        <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
            <Suspense fallback={<Loader />}>
                <PostList />
            </Suspense>
        </main>
    );
}
export const revalidate = 60;
