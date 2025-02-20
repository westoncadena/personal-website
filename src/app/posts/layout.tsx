import React from 'react';
import '../globals.css';
import { getGlobalData } from '@/lib/cosmic';
// import Generator from 'next/font/local';
// import Banner from '@/components/Banner';
// import Header from '@/components/header';
// import Footer from '/components/Footer';

// const sans = Generator({
//     src: '../../fonts/generator-variable.ttf',
//     variable: '--font-sans',
// });

export async function generateMetadata() {
    const siteData = await getGlobalData();
    return {
        title: siteData.metadata.site_title,
        description: siteData.metadata.site_tag,
    };
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const siteData = await getGlobalData();

    return (

        <div>
            {children}
        </div>
    );
}