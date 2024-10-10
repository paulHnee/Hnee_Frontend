'use client';

import React from 'react';
import styles from '@/styles/style';
import Hero from '@/components/Hero';
import Zeiten from '@/components/Zeiten';
import Kontakt from '@/components/Kontakt';

const HomePage = () => {
  return (
    <div>
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Zeiten />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Kontakt />
      </div>
    </div>
  </div>
  );
};

export default HomePage;
