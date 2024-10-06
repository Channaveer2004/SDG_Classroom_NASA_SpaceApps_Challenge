import '../styles/globals.css'; // Global styles
import { AppProps } from 'next/app'; // Import AppProps type from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
