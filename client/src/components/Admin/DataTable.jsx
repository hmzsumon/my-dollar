import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const DataTable = ({ users }) => {
  const columns = [
    {
      field: 'customerId',
      headerName: 'Customer ID',
      width: 100,
      flex: 1,
    },
    {
      field: 'username',
      headerName: 'User Name',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Full Name',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows = [];

  users.forEach((user) => {
    rows.unshift({
      id: user.user_id,
      customerId: user.customer_id,
      username: user.username,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });
  });
  return (
    <div>
      <h1 className='text-lg text-center my-2 text-white font-medium uppercase'>
        {users?.length} Users
      </h1>
      <div
        className='bg-white rounded-xl shadow-lg w-full'
        style={{ height: 420 }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectIconOnClick
          sx={{
            boxShadow: 0,
            border: 0,
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;
