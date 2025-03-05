import React from 'react';
import { Post } from '@/lib/types';
import helpers from '@/lib/helpers';

export default function AuthorAttribution({
    post,
}: {
    post: Post;
}): React.JSX.Element {
    return (
        <div className="flex space-x-1">
            <span>by</span>
            <a
                className="font-medium text-green-600 dark:text-green-200"
            >
                {post.metadata.author?.title}
            </a>
            <span>
                on {helpers.stringToFriendlyDate(post.metadata.published_date)}
            </span>
        </div>
    );
}