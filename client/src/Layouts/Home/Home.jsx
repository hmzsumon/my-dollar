import React from 'react';
import BuySell from './BuySell';
import BuySellRate from './BuySellRate';
import CompletedExchange from './CompletedExchange';
import PendingExchange from './PendingExchange';
import Reserve from './Reserve';

const Home = () => {
  return (
    <div className=' py-20 space-y-10 px-10'>
      <BuySell />
      <Reserve />
      <BuySellRate />
      <PendingExchange />
      <CompletedExchange />
    </div>
  );
};

export default Home;
