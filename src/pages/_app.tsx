import React, { FC } from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Head from 'next/head';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Sergio&lsquo;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MyApp;
