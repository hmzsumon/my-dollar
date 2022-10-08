import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoSend } from 'react-icons/io5';
import bkash from '../../assets/images/bkash_circle.png';
import nogod from '../../assets/images/nagad_circale.png';
import payeer from '../../assets/images/payeer.png';
import paypal from '../../assets/images/paypal.png';
import pm from '../../assets/images/pm.png';
import rocket from '../../assets/images/rocket.jpg';
import usdt from '../../assets/images/usdt_circle.png';

const sendMethods = [
  {
    id: 1,
    name: 'Bkash Parsonal BDT',
    currency: 'BDT',
    method: 'bkash',
    type: 'personal',
    icon: bkash,
    minAmount: 100,
  },
  {
    id: 2,
    name: 'Nogod  Parsonal BDT',
    currency: 'BDT',
    method: 'nogod',
    type: 'personal',
    icon: nogod,
    minAmount: 100,
  },
  {
    id: 3,
    name: 'Rocket Parsonal BDT',
    currency: 'BDT',
    method: 'rocket',
    type: 'personal',
    icon: rocket,
    minAmount: 100,
  },
  {
    id: 4,
    name: 'Perfect Money USD',
    currency: 'USD',
    method: 'perfect_money',
    type: 'personal',
    icon: pm,
  },
  {
    id: 5,
    name: 'Payeer USD',
    currency: 'USD',
    method: 'payeer',
    type: 'personal',
    icon: payeer,
  },
  {
    id: 6,
    name: 'Paypal USD',
    currency: 'USD',
    method: 'paypal',
    type: 'personal',
    icon: paypal,
  },
  {
    id: 7,
    name: 'Usdt (TRC 20) USD',
    currency: 'USD',
    method: 'usdt_trc20',
    type: 'personal',
    icon: usdt,
  },
];
const receiveMethods = [
  {
    id: 1,
    name: 'Bkash Parsonal BDT',
    currency: 'BDT',
    method: 'bkash',
    type: 'personal',
    icon: bkash,
  },
  {
    id: 2,
    name: 'Nogod  Parsonal BDT',
    currency: 'BDT',
    method: 'nogod',
    type: 'personal',
    icon: nogod,
  },
  {
    id: 3,
    name: 'Rocket Parsonal BDT',
    currency: 'BDT',
    method: 'rocket',
    type: 'personal',
    icon: rocket,
  },
  {
    id: 4,
    name: 'Perfect Money USD',
    currency: 'USD',
    method: 'perfect_money',
    type: 'personal',
    icon: pm,
  },
  {
    id: 5,
    name: 'Payeer USD',
    currency: 'USD',
    method: 'payeer',
    type: 'personal',
    icon: payeer,
  },
  {
    id: 6,
    name: 'Paypal USD',
    currency: 'USD',
    method: 'paypal',
    type: 'personal',
    icon: paypal,
  },
  {
    id: 7,
    name: 'Usdt (TRC 20) USD',
    currency: 'USD',
    method: 'usdt_trc20',
    type: 'personal',
    icon: usdt,
  },
];

const BuySell = () => {
  const [method, setMethod] = React.useState('');
  const [receiveMethod, setReceiveMethod] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [receiveAmount, setReceiveAmount] = React.useState('');
  return (
    <div className='bg-neutral-200 rounded-sm px-4 py-6 shadow-md w-full'>
      <h2 className=' text-center text-3xl font-semibold text-gray-800'>
        START EXCHANGE
      </h2>
      <div className='md:flex'>
        {/* Send */}
        <div className='flex flex-col  gap-3 w-full sm:w-1/2 mx-1 sm:mx-8 my-4'>
          <div className='flex gap-2  items-center'>
            <IoSend className=' text-3xl text-blue-600' />
            <h2 className=' text-2xl font-bold text-blue-600'>Send</h2>
          </div>
          <FormControl fullWidth>
            <InputLabel id='country-select'> Method </InputLabel>
            <Select
              labelId='country-select'
              id='country-select'
              defaultValue={method}
              label='Country'
              onChange={(e) => setMethod(e.target.value)}
            >
              {sendMethods.map((item) => (
                <MenuItem key={item.id} value={item.method}>
                  <div className='flex justify-between items-center'>
                    {item.name}
                    <img
                      src={item.icon}
                      alt={item.method}
                      className='w-6 ring-offset-2 ring ml-4 rounded-full'
                    />
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='number'
            label='Amount'
            fullWidth
            variant='outlined'
            required
          />
          <h4 className='text-center text-gray-600'>
            Exchange rate: 1 USD = 88 BDT
          </h4>
        </div>

        {/* Receive */}
        <div className='flex flex-col justify-start gap-3 w-full sm:w-1/2 mx-1 sm:mx-8 my-4'>
          <div className='flex gap-2  items-center'>
            <GiReceiveMoney className=' text-3xl text-[#E4791D]' />
            <h2 className=' text-2xl font-bold text-[#E4791D]'>Receive</h2>
          </div>
          <FormControl fullWidth>
            <InputLabel id='country-select'> Method </InputLabel>
            <Select
              labelId='country-select'
              id='country-select'
              defaultValue={receiveMethod}
              label='Country'
              onChange={(e) => setReceiveMethod(e.target.value)}
            >
              {receiveMethods.map((item) => (
                <MenuItem key={item.id} value={item.method}>
                  <div className='flex justify-between items-center'>
                    {item.name}
                    <img
                      src={item.icon}
                      alt={item.method}
                      className='w-6 ring-offset-2 ring ml-4 rounded-full'
                    />
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            value={amount * 2}
            onChange={(e) => setReceiveAmount(e.target.value)}
            type='number'
            label='Amount'
            fullWidth
            variant='outlined'
            required
            disabled
            cursor='not-allowed'
          />
          <h4 className='text-center text-gray-600'>Reserve: 00 BDT</h4>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='bg-transparent w-full  md:w-6/12 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Exchange
        </button>
      </div>
    </div>
  );
};

export default BuySell;
