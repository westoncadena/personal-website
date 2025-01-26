import React from 'react';
import Link from 'next/link';

export default function Navbar(): JSX.Element {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between px-4 py-4 md:flex-row lg:px-0">
            <nav className="sticky top-0 z-10 mx-auto bg-white/75 backdrop-blur-lg dark:bg-zinc-950/75">
                {/* Navigation Links */}
                <div className="flex space-x-4">
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                    <Link href="/blog">
                        <p>Blog</p>
                    </Link>
                    <Link href="/resume">
                        <p>Resume</p>
                    </Link>
                </div>
            </nav>
        </div>

    );
}
