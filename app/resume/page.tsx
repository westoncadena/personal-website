import React from 'react';

export default async function Page(): Promise<JSX.Element> {
    return (
        <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
            <iframe
                src="/pdf/resume.pdf"
                className="w-full h-screen border border-gray-300 rounded-lg shadow-lg"
                title="PDF Viewer"
            ></iframe>

        </main>
    );
}
export const revalidate = 60;