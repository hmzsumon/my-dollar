import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import bkash from '../../assets/images/bkash_circle.png';
import nogod from '../../assets/images/nagad_circale.png';
import payeer from '../../assets/images/payeer.png';
import paypal from '../../assets/images/paypal.png';
import pm from '../../assets/images/pm.png';
import rocket from '../../assets/images/rocket.jpg';
import usdt from '../../assets/images/usdt_circle.png';

const pendingExchange = [
  {
    id: 1,
    username: 'user1',
    send: { name: 'Usdt (TRC 20) USD', icon: usdt },
    receive: { name: 'Bkash Parsonal BDT', icon: bkash },
    amount: 100,
    status: 'pending',
    date: '2021-10-10',
  },
  {
    id: 2,
    username: 'user2',
    send: { name: 'Baksh Parsonal BDT', icon: bkash },
    receive: { name: 'Bkash Parsonal BDT', icon: bkash },
    amount: 100,
    status: 'pending',
    date: '2021-10-10',
  },
  {
    id: 3,
    username: 'user3',
    send: { name: 'Nogod  Parsonal BDT', icon: nogod },
    receive: { name: 'Rocket Parsonal BDT', icon: rocket },
    amount: 100,
    status: 'pending',
    date: '2021-10-10',
  },
  {
    id: 4,
    username: 'user4',
    send: { name: 'Payeer Parsonal BDT', icon: payeer },
    receive: { name: 'Paypal Parsonal BDT', icon: paypal },
    amount: 100,
    status: 'pending',
    date: '2021-10-10',
  },
  {
    id: 5,
    username: 'user5',
    send: { name: 'Perfect Money Parsonal BDT', icon: pm },
    receive: { name: 'Bkash Parsonal BDT', icon: bkash },
    amount: 100,
    status: 'pending',
    date: '2021-10-10',
  },
  {
    id: 6,
    username: 'user6',
    send: { name: 'Usdt (TRC 20) USD', icon: usdt },
    receive: { name: 'Bkash Parsonal BDT', icon: bkash },
    amount: 100,
    status: 'pending',
    date: '2021-10-10',
  },
];

const PendingExchange = () => {
  const columns = [
    {
      field: 'username',
      headerName: 'User Name',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'send',
      headerName: 'Send',
      minWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 ring-offset-2 ring rounded-full'>
              <img
                draggable='false'
                src={params.row.send.icon}
                alt={params.row.send.name}
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            {params.row.send.name}
          </div>
        );
      },
    },
    {
      field: 'receive',
      headerName: 'Receive',
      minWidth: 200,
      flex: 1,

      renderCell: (params) => {
        return (
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 ring-offset-2 ring rounded-full'>
              <img
                draggable='false'
                src={params.row.receive.icon}
                alt={params.row.receive.name}
                className='w-full h-full rounded-full object-cover'
              />
            </div>
            {params.row.receive.name}
          </div>
        );
      },
    },
    {
      field: 'amount',
      headerName: 'Amount',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows = [];

  pendingExchange.forEach((item) => {
    rows.push({
      id: item.id,
      username: item.username,
      send: item.send,
      receive: item.receive,
      amount: item.amount,
      status: item.status,
      date: item.date,
    });
  });
  return (
    <div>
      <h1 className='text-lg text-center my-2 text-white font-medium uppercase'>
        Pending Exchanges
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

export default PendingExchange;
