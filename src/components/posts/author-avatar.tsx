import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';

export default function AuthorAvatar({ post }: { post: Post }): React.JSX.Element {
    return (
        <>
            <Link href={`/author/${post.metadata.author?.slug}`}>
                <div className="relative h-8 w-8">
                    <Image
                        className="rounded-full"
                        src={`${post.metadata.author?.metadata.image?.imgix_url}?w=100&auto=format,compression`}
                        alt={post.title}
                        fill
                        sizes="32px"
                    />
                </div>
            </Link>
        </>


    );
}

