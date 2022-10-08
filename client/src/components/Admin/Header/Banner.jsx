import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <>
      <Marquee
        speed={100}
        pauseOnHover
        className='bg-slate-700 py-2 cursor-pointer text-sm font-semibold text-white'
        gradient={false}
      >
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </>
  );
};

export default Banner;
