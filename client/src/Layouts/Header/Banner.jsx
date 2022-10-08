import React from 'react';
import Marquee from 'react-fast-marquee';
import { useGetActiveNoticeQuery } from '../../features/notice/noticeApi';

const Banner = () => {
  const { data } = useGetActiveNoticeQuery();
  const notice = data?.notice;
  const { title, description } = notice || {};
  return (
    <>
      <Marquee
        speed={100}
        pauseOnHover
        className='bg-slate-700 py-2 cursor-pointer text-sm font-semibold text-white'
        gradient={false}
      >
        {title} - {description}
      </Marquee>
    </>
  );
};

export default Banner;
