import React from 'react';
import { FadeLoader } from 'react-spinners';
import { useGetUsersQuery } from '../../features/users/userApi';
import DataTable from './DataTable';

const UsersTable = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  return (
    <div>
      {isLoading ? (
        <div className='flex items-center justify-center h-screen'>
          <FadeLoader color='#3B82F6' height={20} width={5} />
        </div>
      ) : (
        <DataTable users={data?.users} />
      )}
    </div>
  );
};

export default UsersTable;
