import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import React from 'react';
import { GlobalContextProvider } from '../context/GlobalContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="screenWrapper">
      <Head>
        <title>Ferdinand - portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </div>
  );
}
