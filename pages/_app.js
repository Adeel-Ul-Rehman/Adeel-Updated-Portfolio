// pages/_app.js
import '../styles/globals.css'; // Import global styles
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Any client-side logic can go here
  }, []);

  return <Component {...pageProps} />; // Render the page component
}

export default MyApp;

