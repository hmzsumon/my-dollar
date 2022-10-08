import React from 'react';
import { FadeLoader } from 'react-spinners';
import { useGetNoticesQuery } from '../../../features/notice/noticeApi';
import NoticeTable from './NoticeTable';

const Notices = () => {
  const { data, isLoading } = useGetNoticesQuery();
  //   console.log(data);
  return (
    <div>
      {isLoading ? (
        <div className='flex items-center justify-center h-screen'>
          <FadeLoader color='#3B82F6' height={20} width={5} />
        </div>
      ) : (
        <NoticeTable notices={data?.notices} />
      )}
    </div>
  );
};

export default Notices;
