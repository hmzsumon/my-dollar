import React from 'react';
import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { useGetNoticeByIdQuery } from '../../../features/notice/noticeApi';
import EditForm from './EditForm';

const UpdateNotice = () => {
  const { id } = useParams();

  const { data, isLoading: noticeLoading } = useGetNoticeByIdQuery(id);

  return (
    <div>
      {noticeLoading ? (
        <div className='flex items-center justify-center h-screen'>
          <FadeLoader color='#3B82F6' height={20} width={5} />
        </div>
      ) : (
        <EditForm notice={data?.notice} />
      )}
    </div>
  );
};

export default UpdateNotice;
