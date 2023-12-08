
import React from 'react';
import Link from 'next/link';

const WelcomePage = () => {
  return (
    <div className="bg-red-500 min-h-screen flex flex-col justify-center items-center">
      <section className="text-center">
        <h1 className="text-white text-3xl font-bold mb-6">Welcome to Gayatri Marriage Bureau</h1>
        <Link href="/app" passHref>
          <button className="bg-white text-red-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            Enter Site
          </button>
        </Link>
      </section>
    </div>
  );
};

export default WelcomePage;