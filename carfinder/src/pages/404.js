import React from 'react';
import Link from 'next/link'
import '@/styles/404.css'; 

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Wrong Turn!</h2>
      <p>
        Looks like you&apos;ve taken a wrong turn. The page you&apos;re looking for is off the map.
      </p>
      <Link href='/'>
        Take a U-turn Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;