import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NoticeTable = ({ notices }) => {
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 100,
      flex: 0.2,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 200,
      flex: 1,
    },
    {
      field: 'is_active',
      headerName: 'Status',
      width: 100,
      flex: 0.1,
      renderCell: (params) => {
        return (
          <span
            className={`  ${
              params.row.is_active ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {params.row.is_active ? 'Active' : 'Inactive'}
          </span>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      flex: 0.1,
      renderCell: (params) => {
        return (
          <NavLink to={`/admin/notices/${params.row.id}`}>
            <FaEdit className='text-blue-500' />
          </NavLink>
        );
      },
    },
  ];

  const rows = [];

  notices.forEach((notice) => {
    rows.unshift({
      id: notice.id,
      title: notice.title,
      description: notice.description,
      is_active: notice.is_active,
    });
  });
  return (
    <div>
      <div className='flex items-center justify-around my-2'>
        <h1 className='text-lg text-center my-2 text-white font-medium uppercase'>
          {notices?.length} Notices
        </h1>
        <NavLink to='/admin/create/notice'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Create Notice
          </button>
        </NavLink>
      </div>
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

export default NoticeTable;
