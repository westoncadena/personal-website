import React from 'react';
import { Loader } from '../components/Loader';
import { Suspense } from 'react';

export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
      <Suspense fallback={<Loader />}>
        <h2>Hello My name is weston</h2>
      </Suspense>
    </main>
  );
}
export const revalidate = 60;
