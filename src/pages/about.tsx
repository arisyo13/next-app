import React from 'react';
import type { NextPage } from 'next';

import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Hero isAboutPage />
  );
};

export default Home;
