import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <>
      <Marquee speed={100} pauseOnHover className='bg-red-500' gradient={false}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </>
  );
};

export default Banner;
